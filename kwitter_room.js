var firebaseConfig = {
      apiKey: "AIzaSyBjyAnNTsngbQNpCTxoORlfmtHQKkMzl0M",
      authDomain: "kwitter-b4efd.firebaseapp.com",
      databaseURL: "https://kwitter-b4efd-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4efd",
      storageBucket: "kwitter-b4efd.appspot.com",
      messagingSenderId: "862254667668",
      appId: "1:862254667668:web:687a81bfebc0b66d8d6181",
      measurementId: "G-18TCR57EVN"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" welcome "+user_name+"!";
    function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}