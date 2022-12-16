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

function check() {
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var email = document.getElementById("em").value;
    var phn = document.getElementById("departure1").value;
    var date = document.getElementById("departure2").value;
    var time = document.getElementById("departure3").value;

    
    if(fname == ""){
        document.getElementById("t1result").innerHTML="Please enter first name";
    }
    else
    document.getElementById("t1result").innerHTML="";
    

    if(lname == ""){
        document.getElementById("t2result").innerHTML="Please enter last name";
    }
    else
    document.getElementById("t2result").innerHTML="";

    if(email == ""){
        document.getElementById("t3result").innerHTML="Please enter email";
    }
    else
    document.getElementById("t3result").innerHTML="";

    if(phn == ""){
        document.getElementById("t4result").innerHTML="Please enter phine number";
    }
    else
    document.getElementById("t4result").innerHTML="";

    if(date == ""){
        document.getElementById("t5result").innerHTML="Please enter date";
    }
    else
    document.getElementById("t5result").innerHTML="";

    if(time == ""){
        document.getElementById("t6result").innerHTML="Please enter time";
    }
    else
    document.getElementById("myForm").submit();
    document.getElementById("t6result").innerHTML="";
    



}