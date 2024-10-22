import react, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
    const link = useNavigate()
    const [email, setEmail] = useState()
    const handleLogout = ()=>{
        localStorage.clear();
        link('login')
      }
    useEffect(()=>{
        let userEmail = localStorage.getItem('email');
        console.log('email: ',userEmail);
        setEmail(userEmail)
        if (userEmail == null || userEmail == '') {
            link('login')
        }
    },[])
    return (
        <>
            <>profile : {email}</>
            <button onClick={handleLogout}> Logout </button>
        </>
    )
}

export default Profile;