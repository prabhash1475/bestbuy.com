cartData = JSON.parse(localStorage.getItem("cart"));

var total = cartData.reduce(function (sum, elem, index, arr) {
  return sum + Number(elem.price);
}, 0);
var sum = document.createElement("h2");
sum.innerText = "Cart Iteams";

var length = cartData.length;
console.log(length);
var length_cart = document.querySelector(".length");
length_cart.innerText = `Total No of product is - ${length}`;

var all = document.querySelector(".total_price");
all.innerText = `Total is Rs = ${total}`;
document.querySelector(".contaner").append(sum);

cartData.map(function (elem, index) {
  var box = document.createElement("div");
  box.setAttribute("class", "box");

  var img = document.createElement("img");
  img.src = elem.image_url;

  var first = document.createElement("div");
  first.append(img);
  var p = document.createElement("p");
  p.innerText = elem.name;

  var price = document.createElement("h3");
  price.innerText = elem.price;

  btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.addEventListener("click", function () {
    removeIteam(first, index);
  });

  var second = document.createElement("div");
  second.append(p, price, btn);
  box.append(img, second);
  document.querySelector(".contaner").append(box);
});

function removeIteam(elem, index) {
  //   console.log(elem, index);
  cartData.splice(index, 1);
  //   console.log(cartData);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload();
}
