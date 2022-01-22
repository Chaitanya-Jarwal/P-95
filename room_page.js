const firebaseConfig = {
    apiKey: "AIzaSyA9TNfLMHnCoNbbEm1TjhroohcexNv-WAE",
    authDomain: "kwitter-2-e82dc.firebaseapp.com",
    databaseURL: "https://kwitter-2-e82dc-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-e82dc",
    storageBucket: "kwitter-2-e82dc.appspot.com",
    messagingSenderId: "266553805787",
    appId: "1:266553805787:web:859c0ddcc930cf742335fe"
  };

  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  function addroom() {
    room_name=document.getElementById("room_name").value;

    localStorage.setItem("room_name",room_name);

    window.location="Chat_page.html";

    firebase.database().ref("/").child(room_name).update({
       purpose: "Adding Room Name"
    });
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

    Room_names= childKey;
//Start code
console.log("room name -" + Room_names)
row="<div class='room_name' id='+Room_names+' onclick='redirectToroomname(this.id)'>#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

function redirectToroomname(name) {
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location = "Chat_page.html";
}
function logout() {
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location="login_page.html";
}
//End code
});});}
getData();