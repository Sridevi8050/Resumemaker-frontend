import {use, useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './Firstpage'
import Templates from './Components/Templates';
import Details from './Components/Details';
import Classic from './Components/Classic';
import Creative from './Components/Creative';
import Modern from './Components/Modern';

function App() {
  const[message,setMessage]=useState("");
  useEffect(() => {
    // Call the backend API
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.msg))
      .catch((err) => console.error("Error fetching API:", err));
  }, []);
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<><Firstpage /><p>{message}</p></>} />
        <Route path="/templates" element={<Templates/>}/>
        <Route path="/details/:templateType" element={<Details />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/detailsback" element={<Details />} />
        

      </Routes>
    </Router>
    </>
  )
}

export default App
