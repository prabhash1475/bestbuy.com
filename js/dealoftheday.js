var cartData = JSON.parse(localStorage.getItem("cart")) || [];

var product = JSON.parse(localStorage.getItem("iteamData"));

product.map(function (elem) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image_url;

  var name = document.createElement("p");
  name.innerText = elem.name;

  var price_box = document.createElement("div");
  price_box.setAttribute("class", "price");
  var p1 = document.createElement("h2");
  p1.innerText = "₹-";
  var price = document.createElement("p");
  price.innerText = elem.price;
  price_box.append(p1, price);

  var btn = document.createElement("button");
  btn.innerText = "   Add to cart";
  btn.setAttribute("class", "fa-solid fa-cart-arrow-down");
  btn.addEventListener("click", function () {
    addToCart(elem);
  });

  box.append(img, name, price_box, btn);
  document.querySelector(".contaner").append(box);
});

function addToCart(elem) {
  //   console.log(elem);
  cartData.push(elem);
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("Iteam added to cart");
}
