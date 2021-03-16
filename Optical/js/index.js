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

  var firebaseRef = firebase.database().ref("Items");
  firebaseRef.on("value", function(data){
      data.forEach(function(element){
        $('#carousel1').trigger('add.owl.carousel', [` <div class="item mx-auto">
        <div class="card" >
          <img src="${element.val().Image_url1}" class=" card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.val().Description}</h5>
            <h5 class="card-text" style="color: #a986f9;">Rs. ${element.val().Price}</h5>
            <a href="#" class="btn rounded-pill m-1"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            <a href="#" class="btn rounded-pill"><i class="fas fa-shopping-bag"></i> Buy Now</a>
          </div>
        </div>
      </div> `])
        .trigger('refresh.owl.carousel');
      })
  })

  var firebaseRef = firebase.database().ref("Items");
  firebaseRef.on("value", function(data){
      data.forEach(function(element){
        $('#carousel2').trigger('add.owl.carousel', [` <div class="item mx-auto">
        <div class="card" >
          <img src="${element.val().Image_url1}" class=" card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.val().Description}</h5>
            <h5 class="card-text" style="color: red; text-decoration: line-through;text-decoration-color:black ; font-size:1rem">
              Rs. 1499</h5>
            <h5 class="card-text" style="color: #a986f9; font-size:1 rem">Rs. ${element.val().Price}</h5>
            <a href="#" class="btn rounded-pill m-1"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            <a href="#" class="btn rounded-pill"><i class="fas fa-shopping-bag"></i> Buy Now</a>
          </div>
        </div>
      </div> `])
        .trigger('refresh.owl.carousel');
      })
  })

