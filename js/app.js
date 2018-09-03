
var cat1 = document.getElementById("catImg");
var cat2 = document.getElementById("catImg2");

var button = document.getElementById("button"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = cat1 + "Cat Clicked: " + count;
};

var button2 = document.getElementById("button2"),
  count = 0;
button2.onclick = function() {
  count += 1;
  button2.innerHTML = cat2 + "Cat Clicked: " + count;
};