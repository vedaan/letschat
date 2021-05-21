// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDlscB1qhVEzYPvGBm2KOpfCR1ZD9fGLRQ",
      authDomain: "letschatwebapp-acc73.firebaseapp.com",
      databaseURL: "https://letschatwebapp-acc73-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-acc73",
      storageBucket: "letschatwebapp-acc73.appspot.com",
      messagingSenderId: "944229234479",
      appId: "1:944229234479:web:c0b591b49bce12ec2053da"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", Room_name);
      window.location = "letschat_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code

            });
      });
}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="letschat_page.html";
}
function logout(){
      localstorage.removeitem("user_name");
      localstorage.removeitem("room_name");
      window.location="index.html";
}