
import React, {useState} from 'react';

export default function TextForm(props) {
  //Function to convert to upper case
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  //Function to convert to lower case
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }  
  //Function to clear data
  const handleClearClick = ()=>{
    let newText = ""
    setText(newText);
  }    

  const handleOnChange = (event)=>{
    console.log("On change")
    setText(event.target.value);
    
  }  
  //Function to copy data
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  //Function to remove extra spaces
  const handleExtraSpaces= () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(""))
  }

  const [text, setText] = useState("");
//   text = "new text";
  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange= {handleOnChange} style = {{backgroundColor: props.mode==='dark'? '#042743':'white' , color: props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'? 'white':'#042743'}} >
      <h2>Your Summary</h2>
      <p> {text.split(" ").length} Words and {text.length} character</p>
      <p> {0.008 * text.split(" ").length } Minutes read</p>
      <h3>Preview</h3>
      <p> {text.length>0?text:"Enter something to preview here it here"}</p>
    </div>
    </>
  )
}
