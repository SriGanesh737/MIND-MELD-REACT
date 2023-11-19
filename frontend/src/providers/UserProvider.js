import {useContext, useState, createContext, useEffect} from 'react';
const userContext = createContext();

export default function UserProvider({children}) {
    const [user,setUser] = useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{});

    useEffect(()=>{
        if(user)
        {
            localStorage.setItem('user',JSON.stringify(user));
        }
        else{
            localStorage.removeItem('user');
        }
    },[user])

    const setUserDetails = (userDetails)=>{
        // also store in local storage
        localStorage.setItem('user',JSON.stringify(userDetails));
        setUser(userDetails);
    }

    return <userContext.Provider value={{user,setUserDetails}}>
        {children}
    </userContext.Provider>
}

export function useUser()
{
    return useContext(userContext);
}