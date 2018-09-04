var cats = ["Zen Cat", "Yarn Cat", "Bench Cat", "Feathers Cat", "Book Cat"];
var catImgs = ['<a href="#"><img src="img/zenCat.jpg" style="width:512px;height:341px;/></a>',
'<a href="#"><img src="img/yarnCat.jpg" style="width:512px;height:341px;/></a>', '<a href="#"><img src="img/benchCat.jpg" style="width:512px;height:341px;/></a>',
'<a href="#"><img src="img/feathersCat.jpg" style="width:500px;height:333px;/></a>', '<a href="#"><img src="img/bookCat.jpg"/></a>']
var text = "<ul>";
cats.forEach(catList);
catImgs.forEach(catPhotos);

function catList(value) {
  text += "<li>" + value + "</li>";
}
function catPhotos(value) {
  text += "<li>" + value + "</li>";
}

document.getElementById("demo").innerHTML = text;

var cat1 = document.getElementById("catImg");
var cat2 = document.getElementById("catImg2");

var button = document.getElementById("button"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = cat1 + "Cat Clicked: " + count;
};
