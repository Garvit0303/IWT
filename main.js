var database=firebase.database();

function signup(){
	var name=document.getElementById("name").value;
	var con=document.getElementById("con").value;
	var email=document.getElementById("email").value;
	var pass=document.getElementById("pass").value;
	 ref=database.ref('user/'+name);
ref.once('value',function(snapshot){
	if(snapshot.exists())
		alert("username alreasy taken");
	else
		pushUser(name,con,email,pass);

});
}
function pushUser(name, con, email, pass) {
  ref.push({
    con: con,
    email: email,
    pass : pass
  });
  alert("signup successfull");
}

function login(){
	var name=document.getElementById("name").value;
var pass=document.getElementById("pass").value;
ref=database.ref('user/'+name);
ref.once('value',function(snapshot){
	if(snapshot.exists()){
		var data=snapshot.val();
		var k=Object.keys(data);
		if(data[k].pass==pass)
			alert('login successfull');
		else
			alert('password incorrect');
	}
	else
		alert("no such name exists");

});
}
