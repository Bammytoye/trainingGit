import React, { useState } from 'react'

const Event = () => {
    // let myNum = 0
    const [name, setName] = useState("sara")
    const [userName, setUserName] = useState("")
    const [number, setNumber] = useState(0)

    const changeName = () => {
        setName("Hikmah")
        console.log(name);
    }
    const changeNumberPlus = () => {
        setNumber(number + 1)
        console.log(number);
    }
    const changeNumberMinus = () => {
        if (number) {
            setNumber(number - 1)
            console.log(number);

        }
    }
    const changeNameByInput = () => {
        setName(userName)
    }

    return (
        <div>
            <h1 className='px-8 p-4 text-4xl'>{name}</h1>
            <h1 className='px-8 p-4 text-4xl'>{number}</h1>
            <input type="text" className='border-2 border-black p-4' onChange={(e) => setUserName(e.target.value)} /><br></br>
            <button className='rounded-md bg-yellow-300 p-2 px-4' onClick={changeName}>Change Name</button>
            <button className='rounded-md bg-yellow-300 p-2 px-4' onClick={changeNumberPlus}>Increase</button>
            <button className='rounded-md bg-yellow-300 p-2 px-4' onClick={changeNumberMinus}>Decrease</button>
            <button className='rounded-md bg-yellow-300 p-2 px-4' onClick={changeNameByInput}>Change Name by Input</button>
        </div>
    )
}

export default Event