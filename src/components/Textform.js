import React,{useState} from 'react'

export default function Textform(prop) {
    const [text,setText]=useState('Enter the text');
    const ontextchange=(event)=>{
        setText(event.target.value)

    }
    const onupbtnclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);

    }
    const ondownbtnclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);

    }
    const ontextclick=()=>{
        if(text==="Enter the text") setText("");
    }

    const handlecopy=()=>{
      let text=document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces=()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))  
    } 
  return (
    <div>
      <>
    <h1>{prop.heading}</h1>
  <div className="mb-3">

    <textarea
      className="form-control"
      value={text}
        onChange={ontextchange}
        onClick={ontextclick}
      id="exampleFormControlTextarea1"
      rows={8}
      defaultValue={""}
    />
  </div>
  <button className="btn btn-primary mx-3 my-2 "onClick={onupbtnclick}>convert to uppercase</button>
  <button className="btn btn-secondary mx-2 "onClick={ondownbtnclick}>convert to Lowercase</button>
  <button className="btn btn-primary mx-3 my-2 "onClick={handlecopy}>copy text</button>
  <button className="btn btn-secondary mx-2 "onClick={handleExtraspaces}>remove extra spaces</button>

  <div className="container">
    <h1>Your text summary</h1>
    <p>your text contain {text.length} characters and {text.split(" ").length} words</p>
    <p>It can be read in {text.split(" ").length*0.008} minutes</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
</>

    </div>
  )
}
