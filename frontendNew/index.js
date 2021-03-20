var db = firebase.firestore();


// // MAKE A WISH
// function storeWish() {
// 		var inputname = document.getElementById("text_name").value;
// 		var inputdesc = document.getElementById("text_desc").value;
// 		var inputmap = document.getElementById("text_map").value;
// 		var inputcont = document.getElementById("text_cont").value;


// 		db.collection("MakeAWish").doc().set({
//     			name: inputname,
//   		  	desc: inputdesc,
// 		 	    map: inputmap,
//  		   	  cont: inputcont
// 		})
// 		.then(() => {
//     			console.log("Document successfully written!");
// 		})
// 		.catch((error) => {
// 			console.error("Error writing document: ", error);
// 		});
// }

// const wish_div = document.querySelector('#wishesCards')
// db.collection('MakeAWish').get().then(function(querySnapshot){
// 	querySnapshot.forEach(function(doc){
// 		wish_div.innerHTML += '<div class="card"><div class="card-body"><h5 class="card-title">'+ doc.data().name +'</h5><p class="card-text">'+ doc.data().desc +'</p><p class="card-text"><span style="font-weight: 500;">CONTACT INFO:</span>'+ doc.data().cont +'</p><p style="text-align: right;"><a href="#" class="cardBtn">GRANT</a><a href="'+ doc.data().map +'" class="cardBtn">MAP</a></p></div></div>'
// 	})
// })



    


// LOGIN
function login() {
	var useremail = document.getElementById("email_field").value;
	var userpass = document.getElementById("password_field").value;
	firebase.auth().signInWithEmailAndPassword(useremail, userpass)
	.then((userCredential) => {
		var user = userCredential.user;
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;		
		window.alert("Error :" + errorMessage);
  	});
}


function createUserWithEmailAndPassword() {
var useremail = document.getElementById("email_field").value;
var userpass = document.getElementById("password_field").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
	.then((userCredential) => {
		var user = userCredential.user;
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
}







// // EXPERIENCE
// function storeExp(){
// 	var inputName = document.getelementById("name_field").values;
// 	var inputTopic= document.getelementById("topic_field").values;
// 	var inputDesc = document.getelementById("des_field").values;
// 	var inputMap = document.getelementById("map_field").values;	
	
// 	db.collection("experiences").doc( ).set({
// 		name: inputName,
// 		topic: inputTopic,
// 		desc: inputDesc,
// 		map: inputMap
// 	})
// 	.then(() => {
// 		console.log("Document successfully written!");
// 	})
// 	.catch((error) => {
// 		console.error("Error writing document: ", error);
// 	});
// }

// const exp_div = document.querySelector('#experienceCards')
// db.collection('experiences').get().then(function(querySnapshot){
// 	querySnapshot.forEach(function(doc){
// 		exp_div.innerHTML += '<div class="card"><div class="card-body"><h5 class="card-title">' + doc.data().topic + '</h5><p class="card-text">' + doc.data().topic + '</p><p class="card-text">' + doc.data().desc + '</p><p style="text-align: right;"><a href="' + doc.data().map + '" class="cardBtn">MAP</a><i class="fas fa-heart"></i></p></div></div>'
// 	})
// })







// // MOODBOARD
// function storeMood(){
// 	var inputName = document.getelementById("mood_name").values;
// 	var inputquo= document.getelementById("mood_quo").values;

// 	db.collection("moodB").doc( ).set({
// 		name: inputName,
// 	    quo: inputquo
	   
// 	})
// 	.then(() => {
// 		console.log("Document successfully written!");
// 	})
// 	.catch((error) => {
// 		console.error("Error writing document: ", error);
// 	});
// }

// const mood_div = document.querySelector('#moodCards')
// db.collection('moodB').get().then(function(querySnapshot){
// 	querySnapshot.forEach(function(doc){
// 		mood_div.innerHTML += '<div class="card" style="width: 18rem"><div class="card-body"><p class="card-text">' + doc.data().quo + '</p><p class="card-text">' + doc.data().name + '</p></div></div>'
// 	})
// })