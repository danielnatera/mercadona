import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

const SignIn = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const {state, dispatch} = useContext(DataContext)

  const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })

  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/login', userData);
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })
    localStorage.setItem('firstLogin', true)
  }

    return(
        <div>
            <Head>
                <title>Iniciar Sesión</title>
            </Head>

      <div className="w-full flex justify-center items-center h-screen">

        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Correo</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="correo" type="email" placeholder="Correo" name="email" value={email} onChange={handleChangeInput} />
         </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
            <input className="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name="password" value={password} onChange={handleChangeInput}/>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Iniciar Sesión
            </button>
            <Link href="/register"><a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Registrarse</a></Link>
          </div>
          
        </form>
    </div>

        </div>
    )
    }

export default SignIn