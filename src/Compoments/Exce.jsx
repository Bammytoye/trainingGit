import React, { useState} from 'react'

const Exce = () => {
    
    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number+1)
        console.log(number);
    }

    const decrement = () => {
        setNumber(number-1)
        console.log(number);
    }

    return (
        <div>
            <div className='flex items-center justify-center shadow-lg flex-col'>
                <h1 className='p-8 p-4 text-4xl'>{number}</h1>
                <div className='flex mx-3'>
                    <button className='bg-green-500 rounded-md p-3 mx-3 text-white fornt-semibold' onClick={increment}>Increase Number</button>
                    <button className='bg-blue-500 rounded-md p-3 mx-3 text-white fornt-semibold' onClick={decrement}>Decrease Number</button>
                </div>
            </div>
        </div>
    )
}

export default Exce