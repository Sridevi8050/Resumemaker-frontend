
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './Firstpage'
import Templates from './Components/Templates';
import Details from './Components/Details';
import Classic from './Components/Classic';
import Creative from './Components/Creative';
import Modern from './Components/Modern';
import Documenteditor from './Components/Documenteditor';

function App() {
  // const[message,setMessage]=useState("");
  // useEffect(() => {
  //   // Call the backend API
  //   fetch("https://resumemaker-backend.onrender.com/api/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.msg))
  //     .catch((err) => console.error("Error fetching API:", err));
  // }, []);
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<><Firstpage /></>} />
        <Route path="/templates" element={<Templates/>}/>
        <Route path="/details/:templateType" element={<Details />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/detailsback" element={<Details />} />
        <Route path="/editor" element={<Documenteditor />} />
        

      </Routes>
    </Router>
    </>
  )
}

export default App
