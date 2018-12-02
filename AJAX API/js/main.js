// var prints = [
// 	{
// 		img: "img/bear.jpg",
// 		name: "Bear",
// 		price: 25
// 	},
// 	{
// 		img: "img/octopi.jpg",
// 		name: "Octopi",
// 		price: 12
// 	},
// 	{
// 		img: "img/HDM.jpg",
// 		name: "His Dark Materials",
// 		price: 18
// 	}
// ];

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "http://jsonplaceholder.typicode.com/users", true);
//   xhttp.send();
// }

$.ajax({
	url: "http://jsonplaceholder.typicode.com/users",
	completed: [],
	notCompleted: [],
	dataType: "json",

	success: function(data) {

		var list = document.getElementById('list');

		for(i=0; i<10; i++){
			var h1 = document.createElement('H1');
			var h2 = document.createElement('H2');
			var h3 = document.createElement('H3');
			var p = document.createElement('P');

			var li = document.createElement('LI');


			h1.className = "myH1";
			h2.className = "myH2";
			h3.className = "myH3";
			p.className = "myP";
			li.className = ""

			h1.textContent = data[i].id;
			h2.textContent = "Name: " + data[i].name;
			h3.textContent = "Email: " + data[i].email;
			p.textContent = "Address: " + data[i].email;

			li.appendChild(h1);
			li.appendChild(h2);
			li.appendChild(h3);
			li.appendChild(p);
			list.appendChild(li);
			console.log(data[i])
		}
		console.log(data)
	},

type: "GET"

})