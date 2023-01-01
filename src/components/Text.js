import React, { useState } from 'react'


export default function Text(props) {
    const [text, setText] = useState("Enter Text Here");


    const upperCase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Upper Case', 'success')
    }

    const lowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to Lower Case', 'success')
    }


    const italic = () => {

        if (document.getElementById('textarea').style.fontStyle === 'italic') {
            document.getElementById('textarea').style.fontStyle = 'normal';
            props.showAlert('Converted to Italic', 'success');
        }
        else {
            document.getElementById('textarea').style.fontStyle = 'italic'
        }
    }
    
    const clipboard=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard', 'success')
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const color = {
        color: props.mode === 'light' ? 'black' : 'white'
    }




   
    
    return (
        <>

            <div className="mb-3">
                <h1 ><label htmlFor="textarea" className="form-label" style={color}>Example textarea </label></h1>
                <textarea id="textarea" className="form-control" rows="8" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(197 214 217)', color: props.mode === 'light' ? 'black' : '#0f1148' }}></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={upperCase} >Upper Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={lowerCase} >Lower Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={clipboard} >Copy</button>
            <button className='btn btn-primary mx-1 my-1' onClick={()=>{setText(""); props.showAlert('Text Cleared', 'success')}} >Clear</button>
            <button className='btn btn-primary mx-1 my-1' id="btnitalic" onClick={italic}>Italic</button>
            <p style={color}>{text.split(/\s+/).filter(element=>{ return element.length !==0}).length} words, {text.split('').filter(element=>{ return (element.length !==0 & element !==' ' & element !=='\n')}).length} Characters</p>
            <h2 style={color}>Preview</h2>
            <p style={color}>{text}</p>


        </>

    )
}
