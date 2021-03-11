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

  var fname, password, dob, email, number;

  function ready(){
      fname=document.getElementById('namebox').value;
      email=document.getElementById('emailbox').value;
      password=document.getElementById('passwordbox').value;
      dob=document.getElementById('dobbox').value;
      number=document.getElementById('numberbox').value;
  }

  function sss(){
      ready()
      console.log(fname)
      firebase.auth().createUserWithEmailAndPassword(email, password)
      
      .then((user) => {
          alert('Login successfully');
        window.location="./login.html";
      // Signed in 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("failed");
    });
  }
 
