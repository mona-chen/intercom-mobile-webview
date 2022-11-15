import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Intercom({ match, location }) { 
    const {name, email} = useParams()

    
    window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "jxmrjcjt",
    name: name, // Full name
    email: email, // Email address
    created_at: Date.now() // Signup date as a Unix timestamp
  };


  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings); w.Intercom('show')}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/jxmrjcjt';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

  const Delay = () => {return (<div className='block-cancel'></div> )}
  const [loaded , setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
        setLoaded(true)
    }, 1700);
  
  }, [])

  if (loaded){
    document.querySelector(".intercom-launcher-frame").contentWindow.document.body.style.display='none'
  }

  return (
    <>
    {/* {loaded &&
        <Delay />
    } */}
    </>
  )


}

export default Intercom