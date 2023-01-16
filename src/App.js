import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import Alert from './components/Alert';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [mode, setMode] = useState("light");
  // const [alert, aetAlert] = useState("null");

  // const showAlert=()=> {
  //   setAlert({
  //     msg : Message,
  //     type : type

  //   })
  //   setTimeout=(()=>{
  //     setAlert(null);
  //   },1500);
  // }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      document.title = " Terabot - Dark Mode";
      // setInterval(()=>{
      //   document.title = " Terabot Mode";
      // },1000)
      // setInterval(()=>{
      //   document.title = " Terabot in Mode";
      // },1500)    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      document.title = " Terabot - Light Mode";
    }
  }

  return (
    <>
    <Navbar title ="Terabox" mode={mode} toggleMode = {toggleMode} />
    {/* <Alert alert = "Welcome"/> */}
    <div className="container my-3 ">
     <TextForm mode={mode} heading = "Enter the text to analyse below"/>
     {/* <About/> */}
    </div>

    </>
  );
}

// Navbar.prototype = {
//   title : PropType.string.isrequired,
//   aboutText : PropTypes.string.isrequired
// }

Navbar.defaultProps = {
  title: 'Set title here',
  // aboutText: 'About text here'
};

export default App;
