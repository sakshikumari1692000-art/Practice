// import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../features/userSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";
import useDebounce from "../hooks/useDebounce";
const Dashboard = () =>{
    // console.log("Dashboard loaded");
    // const {data, loading} = useFetch('/users?page=2');
    // if(loading){
    //     return <p>Loading...</p>
    // }
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);

    const [page, setPage] =  useState(1);
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebounce(search);
    
    useEffect(()=>{
        dispatch(fetchUsers(page));
    },[page]);

    const filteredUsers = users.filter((user) => 
        user.first_name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );

    if(loading) return <Loader />;
    if(error) return <Error message= {error} />;
    return(
        // <div>
      
        //     {data.map((user)=>(
        //         <p key={user.id}>{user.first_name}</p>
        //     ))}
        // </div>
        <div>
            <input placeholder="Search user..."
            onChange={(e) => setSearch(e.target.value)} />
            {filteredUsers.map((user)=>(
                <p key={user.id}>{user.first_name}</p>
            ))}
            <button onClick={()=>setPage((p) => p-1)}>Prev</button>
            <button onClick={()=>setPage((p) => p+1)}>Next</button>
        </div>
       
    );
}

export default Dashboard;