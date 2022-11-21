import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { Intercomjs } from './intercomScript';

function Intercom() { 
    const {name, email} = useParams()

    
    window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "jxmrjcjt",
    name: name, // Full name
    email: email, // Email address
    created_at: Date.now() // Signup date as a Unix timestamp
  };

  // https://js.intercomcdn.com/shim.latest.js :: src intercom script

  (
    function(){
      var w=window;var ic=w.Intercom;
      if(typeof ic==="function"){
        ic('reattach_activator');
        ic('update',w.intercomSettings);
         w.Intercom('show')
        }
        else{
          var d=document;
          var i=function(){
            i.c(arguments);
          };
          i.q=[];
          i.c=function(args)
          {
            i.q.push(args);
          };
          w.Intercom=i;
          var l=function(){
            var s=d.createElement('script');
            s.type='text/javascript';
            s.async=true;
            s.src='https://widget.intercom.io/widget/jxmrjcjt'; // append local script for intercom
            var x=d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s,x);
          };
          if(document.readyState==='complete'){
            l();
          } else if(w.attachEvent){
            w.attachEvent('onload',l);
          } else {
            w.addEventListener('load',l,false);
          }}
        })
        ();

  const [loaded , setLoaded] = useState(false)
  useEffect(() => {
    const trigger = () => {
      var divs = document.querySelectorAll('.intercom-app');

      [].forEach.call(divs, function(div) {

        let main = div.querySelector('div')
        let load = main.querySelectorAll('iframe')[0].contentWindow.document.readyState === 'complete'
        if (load){
          setLoaded(true)
        }

        // if (loaded){
        //   alert('i am loaded')
        // }
        // console.log(main.querySelectorAll('iframe')[0].contentWindow.document.readyState === 'complete')
        if (loaded){
          main.querySelectorAll('iframe').forEach( item =>
            item.contentWindow.document.body.querySelector('.intercom-tl33nz').style.display = 'none' 
        )   
        }

      });
    }

   var interval = setInterval(() => {
        trigger()
        if (loaded){clearInterval(interval);}

    }, 50);
  }, [loaded])



  

//   if (loaded){
//     // document.querySelector(".intercom-launcher-frame").contentWindow.document.body.style.display='none'
//     // document.querySelector(".intercom-5codpm").contentWindow.document.body.style.display='none'
//     // console.log(document.getElementsByClassName("intercom-messenger"))
//     var divs = document.querySelectorAll('.intercom-app');

// [].forEach.call(divs, function(div) {
//   // do whatever
//   div.style.color = "red";

//   let main = div.querySelector('div')
//   console.log(main.querySelectorAll('iframe')[0].contentWindow.document.readyState === 'complete')

//   main.querySelectorAll('iframe').forEach( item =>
//     item.contentWindow.document.body.querySelector('.intercom-tl33nz').onclick = function() { 
//       alert('bla bla'); 
//   }
// )

// });
//   //   document.querySelector('.intercom-app').forEach( item =>
//   //     console.log(item)
//   // )

//   }

  return (
    <>
    {/* {loaded &&
        <Delay />
    } */}
    </>
  )


}

export default Intercom