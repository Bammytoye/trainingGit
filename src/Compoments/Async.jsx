import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Async = (props) => {
    const endPoint = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([])
    const [filterQuery, setFilterQuery] = useState("")

    // const fetchData= async()=>{
    //     const response = await axios.get(endpoint)
    //     console.log(response.data);

    // or

    // const fetchData = () =>{
    //     axios.get (endPoint).then((response)=>{
    //         console.log(response.data);
    //         setData(response.data)
    //     })
    // }

    // let name = "Sarah"

    let url = "http://localhost:5000/user/register"
    const fetchData = () => {
        axios.get(endPoint)
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            })
        axios.post(url, { firstName: "Bammy", lastName: "Toye" });
    }

    useEffect(() => {
        axios.get(endPoint)
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.error('An error has occurred: fixed it before proceeding', error);
            })
    }, [filterQuery,]);

    useEffect(() => {
        if (filterQuery) {
            const filterDetails = data.filter(info =>
                info.name.toLowerCase().includes(filterQuery.toLowerCase())
            );
            setData(filterDetails)
            console.log(filterDetails);
        }
    }, [filterQuery, data]);

    return (
        <div>
            <input type="text" placeholder='Type Here to Search' className='ml-10 rounded-md p-3' onChange={e => setFilterQuery(e.target.value)} />
            <button onClick={fetchData} className='bg-green-300 p-4 rounded-md my-10'>Fetch Data</button>
            {data.map((item) => (
                <h2>{item.name}</h2>
            ))}

            <button className={props.style}>{props.name}</button>
        </div>
    )
}

export default Async