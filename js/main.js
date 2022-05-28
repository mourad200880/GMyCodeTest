inptFirstName= document.getElementById('fname')
inptLasttName= document.getElementById('lname')
inptEmail= document.getElementById('email')
formemail = document.querySelector('#email').value
inptPw= document.getElementById('pw')
btn = document.querySelector('.btn')





let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  

// check if empty
btn.addEventListener('click',function(){

    
    if( ! inptFirstName.value  ){
        document.getElementById('errorfn').style.visibility="visible";
        document.getElementById('errorfn').style.margin="1rem"
        document.getElementById('errorfn').style.height="1rem"
        inptFirstName.style.border = ".1rem solid red";
    }
    if( ! inptLasttName.value  ){
        document.getElementById('errorln').style.visibility="visible"
        document.getElementById('errorln').style.margin="1rem"
        document.getElementById('errorln').style.height="1rem"
        inptLasttName.style.border = ".1rem solid red";
    }
    if( ! inptEmail.value  ){
        document.getElementById('erroremail').style.visibility="visible"
        document.getElementById('erroremail').style.margin="1rem"
        document.getElementById('erroremail').style.height="1rem"
        inptEmail.style.border = ".1rem solid red";;
    }else if (!inptEmail.value.match(validRegex)) {
        document.getElementById('formatemail').style.visibility="visible"
        document.getElementById('formatemail').style.margin="1rem"
        document.getElementById('formatemail').style.height="1rem"
        
        inptEmail.classList.add("borderColor");
    }
          
    if( ! inptPw.value  ){
        document.getElementById('errorpw').style.visibility="visible"
        document.getElementById('errorpw').style.margin="1rem"
        document.getElementById('errorpw').style.height="1rem"
        inptPw.style.border = ".1rem solid red";;
    }
    
    
    
})


