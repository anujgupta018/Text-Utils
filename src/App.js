
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setalert] = useState(null)
  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* { <Navbar title="TextUtils" aboutText="About TextUtils"/> } */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm heading="Enter the text that you want to analyze below" showAlert={showAlert} mode={mode}  />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
