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
    room_name=localStorage.getItem("room_name");
    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
