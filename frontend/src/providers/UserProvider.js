import {useContext, useState, createContext} from React;
const userContext = createContext();

export default function UserProvider({children}) {
    const [user,setUser] = useState({});

    const setUserDetails = (userDetails)=>{
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