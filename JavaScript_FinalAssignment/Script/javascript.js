function fn1(){

        // Validation
     var Name=document.getElementById("name").value;
     if(Name=="")
     {
         document.getElementById("InvalidName").style.visibility="visible";
         document.getElementById("name").style.borderBlockColor="red";
     }
     else
     {
        document.getElementById("InvalidName").style.visibility="hidden";
        document.getElementById("name").style.borderBlockColor="black";
     }

     var fathername=document.getElementById("fname").value;
     if(fathername=="")
     {
        document.getElementById("InvalidFname").style.visibility="visible";
        document.getElementById("fname").style.borderBlockColor="red";
     }
    else
    {
        document.getElementById("InvalidFname").style.visibility="hidden";
        document.getElementById("fname").style.borderBlockColor="black";
    }
     
     var mail=document.getElementById("mail").value;
     if(mail=="")
     {
        document.getElementById("InvalidEmail").style.visibility="visible"; 
        document.getElementById("mail").style.borderBlockColor="red";
     }
     else
     {
        document.getElementById("InvalidEmail").style.visibility="hidden";
        document.getElementById("mail").style.borderBlockColor="black";
     }
      
     var Dob=document.getElementById("dob").value;
   
     if(Dob=="")
     {
        
        document.getElementById("InvalidDob").style.visibility="visible";
        document.getElementById("dob").style.borderBlockColor="red";
     }
     else
     {
        document.getElementById("InvalidDob").style.visibility="hidden";
        document.getElementById("dob").style.borderBlockColor="black";
     }
     
     var phno=document.getElementById("number").value;
     if(phno=="")
     {
        document.getElementById("InvalidMoile").style.visibility="visible";
        document.getElementById("number").style.borderBlockColor="red";
     }
     else
     {
        document.getElementById("InvalidMoile").style.visibility="hidden";
        document.getElementById("number").style.borderBlockColor="black";
     }
    
     var address1=document.getElementById("address1").value;
     if(address1=="")
     {
        document.getElementById("InvalidA1").style.visibility="visible";
        document.getElementById("address1").style.borderBlockColor="red";
     }
     else
     {
        document.getElementById("InvalidA1").style.visibility="hidden";
        document.getElementById("address1").style.borderBlockColor="black";
     }
     var address2=document.getElementById("address2").value;
     if(address2=="")
     {
        document.getElementById("InvalidA2").style.visibility="visible";
        document.getElementById("address2").style.borderBlockColor="red";
     }
     else
     {
        document.getElementById("InvalidA2").style.visibility="hidden";
        document.getElementById("address2").style.borderBlockColor="black";
     }
     var city1=document.getElementById("city").value;
     if(city1=="")
     {
        document.getElementById("Invalidcity").style.visibility="visible";
        document.getElementById("city").style.borderBlockColor="red";
     }
     else
     {
        document.getElementById("Invalidcity").style.visibility="hidden";
        document.getElementById("city").style.borderBlockColor="black";
     }
     var pin1=document.getElementById("pincode").value;
     if(pin1=="")
     {
             document.getElementById("InvalidPin").style.visibility="visible";
             document.getElementById("pincode").style.borderBlockColor="red";
     }
     else{
          document.getElementById("InvalidPin").style.visibility="hidden";
          document.getElementById("pincode").style.borderBlockColor="black";
     }
             
     //REGULAR EXPRESSION

     var pinregex=/0-9{6}/;
     if(pinregex.test(pin1))
     {
        document.getElementById("InvalidPin1").style.visibility="hidden";
     }
     else
     {
             document.getElementById("InvalidPin1").style.visibility="visible";
             document.getElementById("pincode").style.borderBlockColor="red";
     }

     var fnameregex=/[a-z]/;
     if(fnameregex.test(fathername))
     {
             document.getElementById("InvalidFname1").style.visibility="hidden";
     }
     else
     {
             document.getElementById("InvalidFname1").style.visibility="visible";
             document.getElementById("fname").style.borderBlockColor="red";
     }
     
     var mailregex=/(^[0-9]) (a-z{0,}) (@)(a-z{5})(.) (a-z{3})/;
     if(mailregex.test(mail))
     {
       document.getElementById("InvalidEmail1").style.visibility="hidden";
     }
     else
     {
       document.getElementById("Invalidemail").style.visibility="visible";
       document.getElementById("mail").style.borderBlockColor="red";
     }
     var dobregex="/(0|1)([0-9])-(0|1)([0-9])-(1)([0-9])([0-9])([0-9])/";
     if(dobregex.test(Dob))
     {
        document.getElementById("InvalidDob1").style.visibility="hidden";
     }
     else
     {
       document.getElementById("InvalidDob1").style.visibility="visible";
       document.getElementById("dob").style.borderBlockColor="red";
     }
     var phnoregex=/([6-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])/;
     if(phnoregex.test(phno))
     {
        document.getElementById("InvalidMobile1").style.visibility="hidden";
     }
     else
     {
        document.getElementById("InvalidMobile1").style.visibility="visible";
        document.getElementById("number").style.borderBlockColor="red";
     }

}