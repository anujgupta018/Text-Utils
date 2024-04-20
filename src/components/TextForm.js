import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("The button was clikced "+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","Success")
    }
    const handleOnChange = (event) => {
        console.log("handleOnChange")
        setText(event.target.value)

    }
    const handleLowClick=()=>{
        console.log("The button was clikced "+ text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","Success")

    }
    const clearText = () => {
        console.log("Clear button was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared","Success")
    }
    const copyText = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","Success")
    }
    const [text, setText] = useState('')
    // text = "Enter text here";-->Wrong way to change text
    // setText = "Enter your text here";-->Correct way to change text
  return (
      <>
          <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
              <h1>{props.heading}</h1>
              <div className="mb-3" >
                  
                  <textarea className="form-control" id="myBox" rows="8" value={text} style={{ backgroundColor:props.mode === 'light' ? 'dark':'light'}}
                  onChange={handleOnChange}></textarea>
              </div>
              <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
              <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>

              
              
    </div>
          <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
              <h1>Your text summary</h1>
              <p>{text.split(" ").length-1} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length} minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:'Enter any text in the box above to preview'}</p>
    </div>
      </>
  )
}
