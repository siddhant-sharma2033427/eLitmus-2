import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Live from "./components/Live";
import { BrowserRouter as Router, Routes, Route, Link ,Navigate} from "react-router-dom";
import {IndexRedirect} from "react-router"
import { set } from "react-hook-form";
// import {Link,BrowserRouter} from "react-router-dom";
// import Alert from "./components/Alert";

function detectWebcam(callback) {
  let md = navigator.mediaDevices;
  if (!md || !md.enumerateDevices) return callback(false);
  md.enumerateDevices().then((devices) => {
    callback(devices.some((device) => "videoinput" === device.kind));
  });
}

function App() {
  const [login,setLogin] = useState(true);
  // let login = true

  let isavalable = false;
  //checking weather video input device is connected or not

  detectWebcam(function (hasWebcam) {
    isavalable = hasWebcam;
  });

  return(<>
        <div className="App">
        {/* <Form GetDataValue={GetData}></Form> */}
        {/* {login&&<Form id="touchme" onClick={()=>{login=false;console.log(login)}}/>} */}
    <Router>
        {login&&<button onClick={()=>{setLogin(false)}}><Link to="/">start</Link></button>}
        {/* {login&&<button onClick={()=>{login=false}}><Link to="/">start</Link></button>} */}
        <Routes>
          <Route path ='/' element={<Form />}/>
          {/* <IndexRedirect to='/'/> */}
          <Route path ='/Live' element={<Live/>}>
          </Route>
          
        </Routes>
      </Router>
        </div>
      </>
  );
}

export default App;
