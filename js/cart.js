cartData = JSON.parse(localStorage.getItem("cart"));

var total = cartData.reduce(function (sum, elem, index, arr) {
  return sum + Number(elem.price);
}, 0);
var sum = document.createElement("h2");
sum.innerText = `Total is Rs = ${total}`;
document.querySelector(".contaner").append(sum);

cartData.map(function (elem, index) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image_url;

  var p = document.createElement("p");
  p.innerText = elem.name;

  var price = document.createElement("p");
  price.innerText = elem.price;

  btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.addEventListener("click", function () {
    removeIteam(elem, index);
  });

  box.append(img, p, price, btn);
  document.querySelector(".contaner").append(box);
});

function removeIteam(elem, index) {
  //   console.log(elem, index);
  cartData.splice(index, 1);
  //   console.log(cartData);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload();
}
