import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [showForm, setShowForm] = useState(false)

    const onClickShowForm = () => {
        setShowForm(!showForm)
    }

    const authContextData = {
        onClickShowForm,

    }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider