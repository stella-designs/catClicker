var button = document.getElementById("button"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Cat Clicked: " + count;
};