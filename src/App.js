import './App.css';
import About from './components/About.jsx';
import Alert from './components/Alert.jsx';
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  function showAlert(message, type) {
    setAlert({ msg: message, type: type 
    })
  }

  function toggleMode(){
    if (mode === 'light') {
     setMode('dark');
     document.body.style.backgroundColor = '#495057'
     } else {
       setMode('light');
       document.body.style.backgroundColor = '#ffffff'
     };
  }

  return (
    <>
      <Navbar title="textUtils" about="About Text Utilities" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container my-3' >
      <TextForm  heading="Enter the text to analyze" mode={mode}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
