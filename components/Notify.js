import {useContext} from 'react'
import {DataContext} from '../store/GlobalState'
import Loading from './Loading'
import Noti from './Noti'

const Notify = () =>{
    const {state, dispatch} = useContext(DataContext);
    const {notify} = state

    return(
        <>
            {notify.Loading && <Loading />}
            {notify.error && 
                <Noti 
                    msg={{msg: notify.error}}
                    handleShow={()=> dispatch({type:'NOTIFY', payload: {}})}
                    bgColor="bg-red-500"
                />}
            {notify.success && 
                <Noti 
                    msg={{msg: notify.success}}
                    handleShow={()=> dispatch({type:'NOTIFY', payload: {}})}
                    bgColor="bg-green-500"
                />}
        </>
    )
}

export default Notify;