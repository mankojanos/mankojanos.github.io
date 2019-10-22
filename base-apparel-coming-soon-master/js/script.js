function ValidateEmail(){
 mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 mail = document.getElementById("mail").value;
 if (mail.match(mailFormat)){
    text = "&#10004";
	document.getElementById("error").innerHTML = text;
	}else{
    text = "Input not valid";
	document.getElementById("error").innerHTML = text;
	
	}
}
function CheckEmail(){
 mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 mail = document.getElementById("mail").value;
	if (mail.match(mailFormat)){
		return true;
	}else{
		return false;
	}
}

if(!CheckEmail()){
	document.input.style.backgroundImage = "url(../images/icon-error.svg) no-repeat";
}



	