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

  // document.querySelectorAll(..intercom-lightweight-app-launcher).click()

  // onMount disable the cancel button
  useEffect(() => {
    const trigger = () => {
      var divs = document.querySelectorAll('.intercom-app');
      [].forEach.call(divs, function(div) {

        let main = div.querySelector('div')
        let load = main.querySelectorAll('iframe')[0].contentWindow.document.readyState === 'complete'
        if (load){
          setLoaded(true)
        }
        if (loaded){
          let open = document.querySelector('.e4nbtsn1')

          main.querySelectorAll('iframe').forEach( item =>{
            item.contentWindow.document.body.querySelector('.intercom-tl33nz').style.display = 'none' 
            item.contentWindow.document.body.querySelector('.intercom-5codpm').style.display = 'none' 
            item.contentWindow.document.body.querySelector('.intercom-esv00ou0').style.display = 'none' 
 
          }
        ) 
        open.click()

        }
        

      });
    }

   var interval = setInterval(() => {
        trigger()
        if (loaded){clearInterval(interval);}

    }, 50);
  }, [loaded])


}

export default Intercom