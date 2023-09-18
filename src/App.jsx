// import Hero from './Compoments/Hero/Hero'
// import Map from './Compoments/Map/Map'
// import Event from './Compoments/HandingEvent/Event'
// import Async from './Compoments/Async/Async'
// import Button from './Compoments/Button/Button'

// function App() {

//   return (
//     <>
//       <Hero />
//       <Map />
//       <Event />
//       <Async name="Async"style="bg-pink-400 p-8 mx-10 rounded text-white"/>;

//       <Button name="Edit"style="bg-green-400 p-8 mx-10 rounded" />
//       <Button name="Delete"style="bg-red-400 p-8 mx-10 rounded" />
//       <Button name="ClickMe"style="bg-green-400 p-8 mx-10 rounded" />

//     </>
//   )
// }

// export default App

import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Hero from './Compoments/Hero'
import Async from './Compoments/Async'
import Map from './Compoments/Map'
import NavBars from './Compoments/NavBars'
import Dashboard from './Compoments/Dashboard'
import SignUp from './Compoments/SignUp'
import SignIn from './Compoments/Signin'
import Nav from './Compoments/Nav'
import About from './Compoments/About'
import Library from './Compoments/Library'
import Notfound from './Compoments/Notfound'
import Formik from "./Compoments/Formik"
import Feed from './Compoments/Feed'


const App = () => {

  let token = localStorage.getItem("token")

  return (
    <div>

      <Routes>
        <Route path="/dashboard" element={ token ? <Dashboard />: <Navigate to = "/signin" />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/feed/*" element={<Feed />} />
        <Route path="/feed/library" element={<Library />} />
        <Route path="/formik" element={<Formik />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      
    </div>
  );
};

export default App;
