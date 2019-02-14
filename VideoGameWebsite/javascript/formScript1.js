
//form validation
function validateForm(){

				var name = document.getElementById("txtName").value;
				var email = document.getElementById("txtEmail").value;
				var tel = document.getElementById("txtTel").value;

				//email validation pattern
				var regEmail = /^[a-zA-Z0-9_\.\-]+@+[a-zA-Z0-9_\.\-]+\.+[a-z\.]{2,5}$/;
				
				//telephone validation pattern
				var regTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
				
				var radioGender = document.getElementsByName("radGender");
				var checkInterests = document.getElementsByName("chkInterests")
				var counter = 0;
				var gender;

				var interests="";


				//name validation
				if(name==""||name==null){
					alert("Please enter your name.");
					return false;
				}

				//email validation
				if(email==""||email==null||regEmail.test(email)==false){
					alert("Please enter your email address.");
					return false;
				}

				//phone validation
				if(tel==""||tel==null||regTel.test(tel)==false){
					alert("Please enter a correct phone number.");
					return false;
				}
				//interest validation
				//prompt user if nothing was selected
				for(i=0;i<checkInterests.length;i++){
					if(checkInterests[i].checked==false){
						counter++;
					}else{
						interests=" "+checkInterests[i].value+interests;
						counter=0;
					}
				}

				if(counter==4){
					alert("Please select an interest.");
					counter=0;
					return false;
				} 

				//check if a gender was select, if not prompt user to select
				//gender=document.getElementsByName("radGender").selected;
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
				//output all values that have been entered
				alert("Name : "+name
				+"\nTelephone : "+tel
				+"\nEmail : "+email
				+"\nGender : "+gender
				+"\nInterests : "+interests);
		}