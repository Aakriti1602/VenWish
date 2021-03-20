var db = firebase.firestore();


function storeWish() {
	var inputname = document.getElementById("text_name").value
	var inputdesc = document.getElementById("text_desc").value
	var inputmap = document.getElementById("text_map").value
	var inputcont = document.getElementById("text_cont").value

	db.collection("MakeAWish").doc().set({
		name: inputname,
		desc: inputdesc,
		map: inputmap,
		cont: inputcont
	})
	.then(() => {
		console.log("Document successfully written!")
	})
	.catch((error) => {
		console.error("Error writing document: ", error)
	})
}


const list_div = document.querySelector('#wishesCards')
db.collection('MakeAWish').get().then(function(querySnapshot){
	querySnapshot.forEach(function(doc){
		list_div.innerHTML += '<div class="card"><div class="card-body"><h5 class="card-title">'+ doc.data().name +'</h5><p class="card-text">'+ doc.data().desc +'</p><p class="card-text"><span style="font-weight: 500;">CONTACT INFO:</span>'+ doc.data().cont +'</p><p style="text-align: right;"><a href="#" class="cardBtn">GRANT</a><a href="'+ doc.data().map +'" class="cardBtn">MAP</a></p></div></div>'
	})
})