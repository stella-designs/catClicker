/* Model */
var model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: "Zen Cat",
      imgSrc: "img/zenCat.jpg"
    }, 
    {
      clickCount: 0,
      name: "Yarn Cat",
      imgSrc: "img/yarnCat.jpg"
    }, 
    {
      clickCount: 0,
      name: "Bench Cat",
      imgSrc: "img/benchCat.jpg"
    }, 
    {
      clickCount: 0,
      name: "Feathers Cat",
      imgSrc: "img/feathersCat.jpg"
    }, 
    {
      clickCount: 0,
      name: "Book Cat",
      imgSrc: "img/bookCat.jpg"
    }
  ]
};

var text = "<ul>";
cats.forEach(catList);

function catList(value) {
  text += "<li>" + value + "</li>";
}

document.getElementById("demo").innerHTML = text;

var button = document.getElementById("button"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = model + "Cat Clicked: " + count;
};
