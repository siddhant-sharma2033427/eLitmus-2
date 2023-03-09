import React from 'react'
import "./Alert.css"

function hide(eve){
    if(eve == true){
        eve = false;
    }
    else{
        eve = true;
    }
}

function Alert() {
    let eve = false;
    console.log(eve);
    return (
    <div>
      <div className="alert" onClick={()=>{eve=='false'?'true':'false'}} style={{display: eve==true?'none' : 'block'}} >
      {/* <span className="closebtn" onClick={hide(eve)} style={{display: eve==true?'none' : 'block'}}>sdfjlaksfhaklsjhflkahslkfdhs</span> */}
      no media device detected
      </div>
    </div>
  )
    }

export default Alert
