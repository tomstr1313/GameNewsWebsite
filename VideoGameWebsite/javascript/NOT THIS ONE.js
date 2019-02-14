
//form validation
function validateForm(){

				var name = document.getElementById("txtName").value;
				var email = document.getElementById("txtEmail").value;
				var tel = document.getElementById("txtTel").value;

				//email validation pattern
				var regEmail = /^[a-zA-Z0-9_\.\-]+@+[a-zA-Z0-9_\.\-]+\.+[a-z\.]{2,5}$/;
				
				//telephone validation pattern
				var regTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	

				var chkXbox = document.getElementById("chkXbox").checked;
				var chkPlaystation = document.getElementById("chkPlaystation").checked;
				var chkNintendo = document.getElementById("chkNintendo").checked;
				var chkPC = document.getElementById("chkPC").checked;

//				var chkInterests = document.getElementsByName("chkInterests");
				
					
/*				var radMale = document.getElementById("radMale").checked;
				var radFemale = document.getElementById("radFemale").checked;
				var radOther = document.getElementById("radOther").checked;
*/
				



				var radioGender = document.getElementsByName("radGender");
				var counter = 0;
				var gender;
				
				//check if an interest was selected or not

				if(chkXbox==false && chkPlaystation==false && chkNintendo==false &&chkPC==false){
					alert("Please select atleast one interest.");
					return false;
				}

				//check if a gender was select, if not prompt user to select
				for(i=0;i<radioGender.length;i++){
					if(radioGender[i].checked==false){
						counter++;
					}else{
						gender=radioGender[i].value;
						counter=0;
					}
				}

				if(counter==3){
					alert("Please select gender.");
					counter=0;
					return false;
				}

				/*if(radMale==false && radFemale==false && radOther==false){
					alert("Please select gender.");
					return false;
				}*/

				//phone validation
				if(tel==""||tel==null||regTel.test(tel)==false){
					alert("Please enter a correct phone number.");
					return false;
				}
				//name validation
				if(name==""||name==null){
					alert("Please enter your name.");
					return false;
				}
				//email validation
				if(email==""||email==null||regEmail.test(email)==false){
					alert("Please enter your email address.");
					return false;
				// } else if(regEmail.test(email)==false){
				// 	alert("Please enter a valid email.");
				// 	return false;
				// }

				alert("name : "+name);
				alert("telephone : "+tel);
				alert("email : "+email);
				alert("gender : "+gender);
			}
		}