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

var price = "", sname = "", img = "";
// var obj="";
// firebase.database().ref("Items/SpectID1").on("value",(sanpshot)=>{
//     // console.log(sanpshot.val());
//     obj = sanpshot.val();

//     price = obj.Price;
//     sname = obj.Name;
//     img = obj.Image_url1;
//     console.log(price);
//     console.log(sname);
//     console.log(img);
//     document.getElementById("namebox").innerHTML = sname;
//     document.getElementById("imgbox").src = img;
//     document.getElementById("pricebox").innerHTML = "Rs. "+price;
// })
var templateString = "";
var stdNo = 0;

// FOR ALL
function mgetdata() {
    var playersRef = firebase.database().ref("Items/");
    playersRef.on("child_added", function (data) {
        var subnode = [data.val()];
        console.log(subnode);

        $.each(subnode, function (i) {
            templateString = '<div class="col-12 col-sm-6 col-md-4"><div class="card mx-auto style="border-radius: 25px; padding: 10px;font-family:Roboto,sans-serif;margin-bottom: 20px;"><img src="' + subnode[i].Image_url1 + '" class=" card-img-top" alt="..." id="imgbox" style="border-radius: 15px;margin: 20px  0;padding: 15px 0; border: none;"><div class="card-body"><h5 class="card-title" id="namebox">' + subnode[i].Name + '</h5><h5 class="card-text" style="color: #824DFF;" id="pricebox">Rs. ' + subnode[i].Price + '</h5><a href="#" class="btn rounded-pill m-1" style="background-color: #824DFF; color: white; text-align: left;"><i class="fas fa-shopping-cart"></i> Add to Cart</a><a href="#" class="btn rounded-pill" style="background-color: #a1cae2; color: white;"><i class="fas fa-shopping-bag"></i> Buy Now</a></div></div></div>';

            $('#all').append(templateString);
        })
    });
}
getdata();

// FOR MEN
function getdata() {
    var playersRef = firebase.database().ref("Items/");
    playersRef.on("child_added", function (data) {
        var subnode = [data.val()];
        console.log(subnode);

        $.each(subnode, function (i) {
            templateString = '<div class="col-12 col-sm-6 col-md-4"><div class="card mx-auto style="border-radius: 25px; padding: 10px;font-family:Roboto,sans-serif;margin-bottom: 20px;"><img src="' + subnode[i].Image_url1 + '" class=" card-img-top" alt="..." id="imgbox" style="border-radius: 15px;margin: 20px  0;padding: 15px 0; border: none;"><div class="card-body"><h5 class="card-title" id="namebox">' + subnode[i].Name + '</h5><h5 class="card-text" style="color: #824DFF;" id="pricebox">Rs. ' + subnode[i].Price + '</h5><a href="#" class="btn rounded-pill m-1" style="background-color: #824DFF; color: white; text-align: left;"><i class="fas fa-shopping-cart"></i> Add to Cart</a><a href="#" class="btn rounded-pill" style="background-color: #a1cae2; color: white;"><i class="fas fa-shopping-bag"></i> Buy Now</a></div></div></div>';

            $('#men').append(templateString);
        })
    });
}
// FOR WOMEN
function wgetdata() {
    var playersRef = firebase.database().ref("Items/");
    playersRef.on("child_added", function (data) {
        var subnode = [data.val()];
        console.log(subnode);

        $.each(subnode, function (i) {
            templateString = '<div class="col-12 col-sm-6 col-md-4"><div class="card mx-auto style="border-radius: 25px; padding: 10px;font-family:Roboto,sans-serif;margin-bottom: 20px;"><img src="' + subnode[i].Image_url1 + '" class=" card-img-top" alt="..." id="imgbox" style="border-radius: 15px;margin: 20px  0;padding: 15px 0; border: none;"><div class="card-body"><h5 class="card-title" id="namebox">' + subnode[i].Name + '</h5><h5 class="card-text" style="color: #824DFF;" id="pricebox">Rs. ' + subnode[i].Price + '</h5><a href="#" class="btn rounded-pill m-1" style="background-color: #824DFF; color: white; text-align: left;"><i class="fas fa-shopping-cart"></i> Add to Cart</a><a href="#" class="btn rounded-pill" style="background-color: #a1cae2; color: white;"><i class="fas fa-shopping-bag"></i> Buy Now</a></div></div></div>';

            $('#women').append(templateString);
        })
    });
}
//FOR CHILDREN
function cgetdata() {
    var playersRef = firebase.database().ref("Items/");
    playersRef.on("child_added", function (data) {
        var subnode = [data.val()];
        console.log(subnode);

        $.each(subnode, function (i) {
            templateString = '<div class="col-12 col-sm-6 col-md-4"><div class="card mx-auto style="border-radius: 25px; padding: 10px;font-family:Roboto,sans-serif;margin-bottom: 20px;"><img src="' + subnode[i].Image_url1 + '" class=" card-img-top" alt="..." id="imgbox" style="border-radius: 15px;margin: 20px  0;padding: 15px 0; border: none;"><div class="card-body"><h5 class="card-title" id="namebox">' + subnode[i].Name + '</h5><h5 class="card-text" style="color: #824DFF;" id="pricebox">Rs. ' + subnode[i].Price + '</h5><a href="#" class="btn rounded-pill m-1" style="background-color: #824DFF; color: white; text-align: left;"><i class="fas fa-shopping-cart"></i> Add to Cart</a><a href="#" class="btn rounded-pill" style="background-color: #a1cae2; color: white;"><i class="fas fa-shopping-bag"></i> Buy Now</a></div></div></div>';

            $('#children').append(templateString);
        })
    });
}


    document.getElementById('womenbtn').onclick = function () {
        // alert("Hello");
        document.getElementById('ffff').style.display = "none";
        // document.getElementById('all').style.display = "none";
        document.getElementById('women').style.display = "none";
    }
    // document.getElementById('womenbtn').onclick = function () {
    //     document.getElementById('men').style.display = "none";
    //     // document.getElementById('all').style.display = "none";
    //     document.getElementById('women').style.display = "block";
    // }

    document.getElementById('menbtn').onclick = function () {
        document.getElementById('women').style.display = "none";
        document.getElementById('all').style.display = "none";
    }

    document.getElementById('xbtn').onclick = function () {
        document.getElementById('women').style.display = "none";
        document.getElementById('all').style.display = "none";
        document.getElementById('men').style.display = "none";
    }
