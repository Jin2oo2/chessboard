import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [jwt, setJwt] = useState(null)

    const navigate = useNavigate()

    async function handleLogin(e, username, password) {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: username,
                password: password
            })
            const user = await response.data.user
            const jwt_token = await response.data.jwt_token
            setUser(user)
            setJwt(jwt_token)
            console.log('user', user)
            console.log('jwt', jwt_token)
            console.log('Login succuessful!')
    
            // localStorage.clear()
            // localStorage.setItem('user', JSON.stringify(user))
            // localStorage.setItem('jwt_token', jwt_token)
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwt_token.access}`

            navigate('/')
        } catch (error) {
            console.log(error)
            alert(error.response.data.detail)
        }
    }

    async function handleLogout(e) {
        e.preventDefault()
        try {
            setUser(null)
            setJwt(null)
            navigate('/')
            console.log('Logout uccessful')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, jwt, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return React.useContext(AuthContext)
}