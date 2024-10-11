import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./TextEditor.css";


function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  function toggleTheme(){
    setDarkMode(prevMode => !prevMode)
  }
  return(
    <div className={darkMode? "App dark-mode" : "App"}>
  <Navbar toggleTheme={toggleTheme}/>
  <TextEditor />
  </div>
  )
}

export default App;
