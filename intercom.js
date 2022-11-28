// import { Intercomjs } from './intercomScript';

let urlParam = window.location.search
let data = urlParam.split('&')

let uname = data[0].replace('%20', ' ')

let i = uname.length
let fname = uname.slice(6, i)
let x = data[1].length
let email = data[1].slice(6, x)

    window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "jxmrjcjt",
    name: fname, // Full name
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
         w.Intercom('show');
         w.Intercom('onUnreadCountChange', function(d) {
          fireAlert()
        });
        Intercom('onUnreadCountChange', function(d) {
          fireAlert()
        });
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

       


  // document.querySelectorAll(..intercom-lightweight-app-launcher).click()

  // onMount disable the cancel button
    const trigger = () => {
      var divs = document.querySelectorAll('.intercom-app');
      [].forEach.call(divs, function(div) {

        let main = div.querySelector('div')
        let load = main.querySelectorAll('iframe')[0].contentWindow.document.readyState === 'complete'
        if (!load){
          document.querySelector('.intercom-lightweight-app-launcher-icon').click()  
        }
          let open = document.querySelector('.e4nbtsn1')

          main.querySelectorAll('iframe').forEach( item =>{

            item.contentWindow.document.body.querySelector('[aria-label="Close"]').style.display = 'none' 

          }
        ) 

      });
    }
    let count =  -1;
 

    Intercom('onUnreadCountChange', function(unreadCount) {
      count++ ;
      // alert(count);
    });

    function getData(){
      return count.toString();
    }

    function clearCount(){
      count = 0;
    }
    Intercom('show');

    setTimeout(() => {
        document.querySelector('.intercom-lightweight-app-launcher-icon').click()  
    }, 1500);


   var interval = setInterval(() => {
        trigger()
        interval
    }, 50);



