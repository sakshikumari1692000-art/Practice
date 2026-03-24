import useFetch from "../hooks/useFetch";
const Dashboard = () =>{
    console.log("Dashboard loaded");
    const {data, loading} = useFetch('/users?page=2');
    if(loading){
        return <p>Loading...</p>
    }
    return(
        <div>
      
            {data.map((user)=>(
                <p key={user.id}>{user.first_name}</p>
            ))}
        </div>
       
    );
}

export default Dashboard;