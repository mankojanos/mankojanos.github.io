function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))
  {
    text = "&#10004";
	document.getElementById("error").innerHTML = text;
  }
    text = "Input not valid";
	document.getElementById("error").innerHTML = text;
}