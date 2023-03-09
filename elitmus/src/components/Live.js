import React from 'react'
import {useNavigate} from "react-router-dom"
import {useEffect} from 'react'

// (function () {
//     "use strict";
  
//     document.addEventListener('click', async event => {
//       if (event.target.id === 'button') {
//         const stream = await window.navigator.mediaDevices.getUserMedia({ video: true, audio: false });
//         const video = document.getElementById('video');
//         video.srcObject = stream;
//         video.play();
//       }
//     });
  
//   })();
 
function Live(){
  
    (async function  (){
         "use strict";
         const stream = await window.navigator.mediaDevices.getUserMedia({video:true});
         const video = document.getElementById('video');
         video.srcObject = stream;
        //  video.play();
     })();
  return (<>
    <div>
      <div>
    <video id="video"  autoPlay></video>
  </div>
  
  {/* {playing()} */}

  {/* <div>
    <button id="button">Start Video</button>
  </div>  */}
    </div>
    </>
  )
}

export default Live

