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

/* Octopus= connects model and view */

var octopus = {

  init: function(){
    //sets current cat to the first one on the list
    model.currentCat = model.cats[0];

    //tell view to initialize
    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  //set selected cat to object passed in
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  //increments counter
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

var text = "<ul>";
model.forEach(catList);

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
