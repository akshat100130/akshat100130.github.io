var email_id =""
var firebaseConfig = {
    apiKey: "AIzaSyA5V4TWGi9-IkBrncghZnQpTTKtctw5jmE",
    authDomain: "optical-ecommerce.firebaseapp.com",
    databaseURL: "https://optical-ecommerce-default-rtdb.firebaseio.com",
    projectId: "optical-ecommerce",
    storageBucket: "optical-ecommerce.appspot.com",
    messagingSenderId: "800180607825",
    appId: "1:800180607825:web:fb583f9c45860a5e8d1170",
    measurementId: "G-PDMEKE8VYZ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(function(user) {
  
    if (user) {
      // User is signed in.

      
      

      var user = firebase.auth().currentUser;
      if(user != null){
          email_id = user.uid;
          window.location = 'index.html';
          $('.uid').html('hello');
        //   document.getElementById("user_para").innerHTML = "welcome user : " + email_id
          
      }



    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("userlogin_div").style.display = "block";
      
    }
  });

  var email;
  var password;
  function ready(){
    email = document.getElementById('emailbox').value;
    password = document.getElementById('passwordbox').value;
  }
  function loginbtn(){
    ready()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        window.location="./index.html";
      // Signed in 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("failed");
    });
  }

