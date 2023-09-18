import React, {useState} from 'react'

const Input = () => {
    const [name, setName] = useState(" ")
    const [userName, setUserName] = useState(" ")

    const changeName = () =>{
        setName (userName)
    }

    return (
        <div>
            <h3>{name}</h3>
            <input type="text" className='border 2 border-black p-4' onChange={(e)=>setUserName(e.target.value)}/>

            <button onClick={changeName} className='bg-gray-300 p-4'>Change Name</button>
        </div>
    )
}

export default Input