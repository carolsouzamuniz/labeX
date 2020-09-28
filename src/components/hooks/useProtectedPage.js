import { useHistory } from "react-router"
import { useEffect } from "react"

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        
        if(!token) {
            history.push('/login')
        }
    }, [])
}