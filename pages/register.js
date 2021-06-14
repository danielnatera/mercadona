import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import { useRouter } from 'next/router'

const register = () => {

    const initialState = {name: '', email: '', password:'', cf_password:''};
    const [userData, setUserData] = useState(initialState);
    const {name, email, password, cf_password} = userData;
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext);

    const handleChangeInput= e => {
        const{name, value} = e.target;
        setUserData({...userData, [name]: value})
        dispatch({type: 'NOTIFY', payload: {} })
    };

    const handleSubmit = async e =>{
        e.preventDefault();
        const errMsg = valid(name, email, password, cf_password);
        if(errMsg) return dispatch({type: 'NOTIFY', payload: {error: errMsg} })

          dispatch({type: 'NOTIFY', payload: {Loading: true} })

          const res = await postData('auth/register', userData)
          
          if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

          return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    };

  
    return(
        <div>
            <Head>
                <title>Registrarse</title>
            </Head>

      <div className="w-full flex justify-center items-center h-screen">

        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">Usuario</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
            name="name" value={name} onChange={handleChangeInput} />
         </div>

         <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Correo</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="correo" type="email"
            name="email" value={email} onChange={handleChangeInput} />
         </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
            <input className="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"
            name="password" value={password} onChange={handleChangeInput} />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Confirme contraseña</label>
            <input className="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="password"
            name="cf_password" value={cf_password} onChange={handleChangeInput} />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Registrarse
            </button>
            <Link href="/SignIn"><a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 px-3">Ya tengo una cuenta</a></Link>
          </div>
          
        </form>
    </div>

        </div>
    )
}

export default register