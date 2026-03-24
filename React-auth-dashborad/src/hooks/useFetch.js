import { useState, useEffect } from "react"
import api from "../api/axios";

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(true);

    const fetchData = async () =>{
        try{
            const res =  await api.get(url);
            setData(res.data.data);
        }
        catch (err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() =>{
        fetchData();
    },[url]);

    return{data, loading};
}

export default useFetch;