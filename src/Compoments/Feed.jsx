import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Short from './Short'
import Map from './Map'

const Feed = () => {
    return (
        <div>
            <nav className='bg-blue-600 p-3 w-full'>
                <Link to='/feed/short' className='mx-4'>Short</Link>
                <Link to='/feed/map' className='mx-4'>Map</Link>
                <Link to='/feed'>Feed</Link>
            </nav>
            Feed
            <Routes>
                <Route path='/short' element={<Short />} />
                <Route path='map' element={<Map />} />
            </Routes>
        </div>
    )
}

export default Feed