var db = firebase.firestore();


function storeWish()
{
		var inputname = document.getElementById("text_name").value;
		var inputdesc = document.getElementById("text_desc").value;
		var inputmap = document.getElementById("text_map").value;
		var inputcont = document.getElementById("text_cont").value;


		db.collection("MakeAWish").doc().set({
    			name: inputname,
  		  	desc: inputdesc,
		 	    map: inputmap,
 		   	  cont: inputcont
		})
		.then(() => {
    			console.log("Document successfully written!");
		})
		.catch((error) => {
			console.error("Error writing document: ", error);
		});
}


    




