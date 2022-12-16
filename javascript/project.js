function contact(){
    var flName=document.getElementById("flName").value;

    var email=document.getElementById("email").value;

    var phone=document.getElementById("phoneNum").value;

    if(flName==""){
        document.getElementById("flNameresult").innerHTML="Please Enter your name";
    }
    else{
        document.getElementById("flNameresult").innerHTML="";
    }
    if(email==""){
        document.getElementById("emailresult").innerHTML="Please Enter your email";
    }
    else{
        document.getElementById("emailresult").innerHTML="";
    }
    if(phone==""){
        document.getElementById("phoneNumresult").innerHTML="Please Enter your phone number";
    }
    else{
        document.getElementById("phoneNumresult").innerHTML="";
    }

}


function survey(){
    if(document.getElementById("purpose").value == '')
    {
        document.getElementById("purposeResult").innerHTML ="Textarea is empty, please fill it in";
    }

    var webS = document.querySelector('#webS');
    var fb = document.querySelector('#fb');
    var twt = document.querySelector('#twt');
    var email = document.querySelector('#emailm');

    if(!webS.checked && !fb.checked && !twt.checked && !email.checked){
        document.getElementById("checkResult").innerHTML = "Please pick at least one option."
    }


}