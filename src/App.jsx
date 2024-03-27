import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import All from './componets/All'
import Fullstackdevelopment from './componets/Fullstackdevelopment'
import Datascience from './componets/Datascience'
import Cybersecurity from './componets/Cybersecurity'
import Career from './componets/Career'

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">All <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/fullstackdevelopment">Full Stack Development<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/datascience">Data science<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Cybersecurity">Cyber Security<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Career">Career<span class="sr-only">(current)</span></Link>
            </li>
           
          </ul>
        </div>
      </nav>

      {/* Page Container */}
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="/fullstackdevelopment" element={<Fullstackdevelopment />}></Route>
        <Route path="/datascience" element={<Datascience />}></Route>
        <Route path="/Cybersecurity" element={<Cybersecurity />}></Route>
        <Route path="/Career" element={<Career />}></Route>    

      </Routes>


    </>
  )
}

export default App