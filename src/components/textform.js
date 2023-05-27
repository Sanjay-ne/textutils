import React,{useState} from 'react'

export default function Textform(props) {
  const[text,setText]= useState("");
const Touppercase = ()=>{
  let newtxt = text.toUpperCase();
  setText(newtxt)
  props.showalert("text coverted to upper case","success")
}

const Tolowercase = ()=>{
  let newtxt = text.toLowerCase();
  setText(newtxt)
  props.showalert("text coverted to lower case","success")
}

const copy = ()=>{
  let txt = document.getElementById('box')
  txt.select();
  navigator.clipboard.writeText(txt.value);
  props.showalert("text copied","warning")
}

const Cleartext = ()=>{
  let newtxt = ''
  setText(newtxt);
}

const RomoveSpaces = ()=>{
  let newtxt = text.split(/[ ]+/);
  setText(newtxt.join(" "))
  props.showalert("Extra spaces removed","success")
}


const hndle = (event)=>{
  setText(event.target.value)
}

  return (
    <>
<div className="container" style={{color:props.mode==='light'?'black':'white'}} >
<p>Please enter the text in the below dailog box provided :</p>
  <div className="mb-3 my-3">
    <textarea className="form-control" value={text} onChange={hndle} style={{backgroundColor:props.mode==='dark'?'#1b253a':'white',color:props.mode==='light'?'black':'white'}} id="box" rows="8" ></textarea>
    </div>
    <button className="btn btn-success my-3 mx-2" onClick={Touppercase}>{props.btnname1}</button> 
    <button className="btn btn-success my-3 mx-2" onClick={Tolowercase}>{props.btnname2}</button>
    <button className="btn btn-success my-3 mx-2" onClick={RomoveSpaces}>{props.btnname4}</button>
    <button className="btn btn-success my-3 mx-2" onClick={copy}>{props.btnname5}</button>
    <button className="btn btn-success my-3 mx-2" onClick={Cleartext}>{props.btnname3}</button>
  
  </div>
  <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h3>Text Analysis</h3>
<p>{text.split(/[ ]/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters entered till now</p>
<h4>Text Preview</h4>
<p>{text.length!=0?text:'Enter text to preview...!'}</p>
</div>

  </>
  )
}