import React,{useState} from 'react'

export default function Textform(prop) {
    const [text,setText]=useState('Enter the text');
    const ontextchange=(event)=>{
        setText(event.target.value)
    }
    const onbtnclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
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
      id="exampleFormControlTextarea1"
      rows={8}
      defaultValue={""}
    />
  </div>
  <button className="btn btn1 "onClick={onbtnclick}>convert to uppercase</button>
</>

    </div>
  )
}
