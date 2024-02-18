import React, { useState } from 'react'

export default function Form(props) {
  const[text, setText] = useState("Yash")
  const handleUpClick = () => {
  //  console.log("Uppercase "+text)
   let newtext = text.toUpperCase();
   setText(newtext)
  }
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
   }
  const handleBold=()=>{
    let newfea = text.toLowerCase();
    setText(newfea)
  }

  return (
    <div>
        <h1 className='heading'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="btn ,y-3">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Upper
          </button>
          
          <button className="btn btn-primary" onClick={handleBold}>
            Lower
          </button>
        </div>
        <div className="container my-3">
          <h1>Your Summary</h1>
          <p>{text.split(" ").length} Words and {text.length} Charecrter</p>
          <p>The Passage can be read in {0.002*text.length}Min</p>
        </div>
        <div className="container my-3">
          <h2>Preview</h2>
          <p className='prev'>{text}</p>
        </div>

    </div>
  )
}
