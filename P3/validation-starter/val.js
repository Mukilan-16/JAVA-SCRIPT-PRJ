var nameerror   = document.getElementById("name-error");
var Phoneerror  = document.getElementById("phone-error");
var mailerror   = document.getElementById("mail-error");
var msgerror    = document.getElementById("msg-error");
var fixerror    = document.getElementById("fix-error");

function validatename(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameerror.innerHTML= "NAME IS REQUIRED";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameerror.innerHTML= "WRITE FULL NAME";
        return false;
    }
    nameerror.innerHTML="WORNG";
    return  true;
}

function validatephone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
      Phoneerror.innerHTML = "PHONE NO IS REQUIRED";
      return false;
    }
    if(!phone.length == 10){
        Phoneerror.innerHTML = "PHONE NO should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        Phoneerror.innerHTML= "ONLY DIGITS SHOULD BE ACCESSED";
        return false;
    }    
    Phoneerror.innerHTML="WORNG"
    return true;
}

function validatemail(){
    var mail = document.getElementById("contact-email").value;
    if(mail.length == 0){
        mailerror.innerHTML = "EMAIL is required"
        return false;
    }
    if(!mail.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailerror.innerHTML="EMAIL INVALID"
        return false;
    }
    mailerror.innerHTML="";
    return true;
}

function validatemsg(){
    var msg = document.getElementById("contact-msg").value;
    var required = 100;
    var left = required-msg.length;

    if(left>0){
        msgerror.innerHTML = left + "more characters required";
        return false;
    }
    
    msgerror.innerHTML =  "WRONG";
    return true;
}

function validate(){
    if(!validatename() || !validatephone() || !validatemail() || !validatemsg()){
        fixerror.style.display = "block";
        fixerror.innerHTML = "PLEASE FIX THE ERROR TO COMPLETE THE FORM";
        setTimeout(function(){fixerror.style.display = "none";},3000)
        return false;
    }
}