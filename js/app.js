/* Model */
var model = {
  currentCat: null,
  adminShow: false,
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
    adminView.init();
    adminView.hide();
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
  },

  //function runs when 'Admin' button is clicked.
  adminDisplay: function(){
    if (model.adminShow === false) {
        model.adminShow = true;
        //displays the admin input boxes and buttons
        adminView.show(); 
    }
    else if (model.adminShow === true) {
        model.adminShow = false;
        // hides the admin input boxes and buttons
        adminView.hide();
    }
  },

  //hides admin display when cancel button is clicked.
  adminCancel: function(){
      adminView.hide();
  },
    
  //hides admin display and saves new cat data when save button is clicked.
  adminSave: function(){
      model.currentCat.name= adminCatName.value;
      model.currentCat.imgSrc= adminCatURL.value;
      model.currentCat.clickCount= adminCatClicks.value;
      catView.render();
      catListView.render();
      adminView.hide();
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
    // store DOM
    this.catListElem = document.getElementById('cat-list');

    //render view
    this.render();
  },

  render: function() {
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

var adminView = {
  init: function(){
    this.adminCatName = document.getElementById("adminCatName");
    this.adminCatURL = document.getElementById("adminCatURL");
    this.adminCatClicks = document.getElementById("adminCatClicks");
    var admin = document.getElementById("admin");
    
    this.adminBtn = document.getElementById("adminBtn");
    this.adminCancel = document.getElementById("adminCancel");
    this.adminSave = document.getElementById("adminSave");
    
    //admin display
    this.adminBtn.addEventListener('click', function(){ 
        octopus.adminDisplay();
    });
    
    //hides the admin display without saving any new cat data
    this.adminCancel.addEventListener('click', function(){ 
        octopus.adminCancel();
    });
    
    //hides the admin display and saves new cat data
    this.adminSave.addEventListener('click', function(){ 
        octopus.adminSave();
    });
    
    this.render();
},

  render: function(){
      //calls current cat
      var currentCat = octopus.getCurrentCat(); 
      this.adminCatName.value = currentCat.name;
      this.adminCatURL.value = currentCat.imgSrc;
      this.adminCatClicks.value = currentCat.clickCount;
  },

  show: function(){
          //shows the admin div on index.html
          admin.style.display = 'block';
      },
    
  hide: function(){
      admin.style.display = 'none';
  }
}

octopus.init();