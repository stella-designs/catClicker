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

/* View */

var catView = {

  init: function() {
    // store pointer to our DOM elements 
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener('click', function(){
      octopus.incrementCounter();
    });

    this.render();
  },

  render: function() {
    //update DOM elements
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var catListView = {

  init: function() {
    var cat, elem, i;
    var cats = octopus.getCats();

    //empty the cat list
    this.catListElem.innerHTML = '';

    // loop over the cats
    for (i = 0; i < cats.length; i++) {
      cat = cats[i];

    // make a new cat list item and set its text
    elem = document.createElement('li');
    elem.textContent = cat.name;

    // on click, setCurrentCat and render catView
    elem.addEventListener('click', (function(catCopy) {
      return function() {
        octopus.setCurrentCat(catCopy);
        catView.render();
      };
    })(cat));

    //add element to the list
    this.catListElem.appendChild(elem);
    }
  }
}; 

octopus.init();

