import React , {useState , useEffect , useContext, createContext} from 'react'

const AuthContext = createContext()

export const useAuth = () =>{
    return useContext(AuthContext);
}


export const AuthProvider = ({children}) =>{
    const [authUser , setAuthUser] = useState()
    const [isLoggedIn , setIsLoggedIn] = useState()

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

    )
}