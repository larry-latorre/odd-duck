'use strict'
//Global variable
let workingProducts = [];
const allProducts = [];
let firstProduct = null;
let secondProduct = null;
let thirdProduct = null;
//Selects img elements
let leftImage = document.querySelector('section img:first-child');
let centerImage = document.querySelector('section img:nth-child(2)');
let rightImage = document.querySelector('section img:nth-child(3)')


//Constructor for products
function Product (name, src){
this.name = name;
this.src = src;
this.views = 0
this.clicks = 0
}

//create new products
let bag = new Product('Bag','./img/bag.jpg');
let banana = new Product('Banana','./img/banana.jpg');
let bathroom = new Product('bathroom','./img/bathroom.jpg');
let boots = new Product('Boots','./img/boots.jpg');
let breakfast = new Product('Breakfast','./img/breakfast.jpg');
let bubblegum = new Product('Bubblegum','./img/bubblegum.jpg');
let chair = new Product('Chair','./img/chair.jpg');
let cthulhu = new Product('Cthulhu','./img/cthuhlu.jpg');   
let dogDuck = new Product('Dog Duck','./img/dog-duck.jpg');   
let dragon = new Product('Dragon','./img/dragon.jpg'); 
let pen = new Product('Pen', './img/pen.jpg')  
let petSweep = new Product('Pet Sweep','./img/pet-sweep.jpg'); 
let scissors = new Product('Scissors','./img/scissors.jpg'); 
let shark = new Product('Shark','./img/shark.jpg'); 
let sweep = new Product('Sweep','./img/sweep.png'); 
let tauntaun = new Product('Tauntaun','./img/tauntaun.jpg'); 
let unicorn = new Product('Unicorn','./img/unicorn.jpg'); 
let waterCan = new Product('Water Can','./img/water-can.jpg'); 
let wineGlass= new Product('Wine Glass','./img/wine-glass.jpg'); 


//products = [bag,banana,bathroom,boots,breakfast,bubblegum,cthulhu,dogDuck ,dragon,petSweep,scissors,shark,sweep,tauntaun,unicorn,waterCan,wineGlass];

allProducts.push(bag);
allProducts.push(banana);
allProducts.push(bathroom);
allProducts.push(boots);
allProducts.push(breakfast);
allProducts.push(bubblegum);
allProducts.push(chair);
allProducts.push(dogDuck);
allProducts.push(dragon);
allProducts.push(petSweep);
allProducts.push(scissors);
allProducts.push(shark);
allProducts.push(sweep);
allProducts.push(tauntaun);
allProducts.push(unicorn);
allProducts.push(waterCan);
allProducts.push(wineGlass);


console.log(allProducts);

//Function that Handles clicks
function handleLeftClick(){
    firstProduct.clicks += 1;
    renderProducts();
    
    
}
function handleCenterClick(){
    secondProduct.clicks += 1;
    renderProducts();
    
}
function handleRightClick(){
    thirdProduct.clicks += 1;
    renderProducts();
   
}


leftImage.addEventListener('click',handleLeftClick)
rightImage.addEventListener('click',handleRightClick)
centerImage.addEventListener('click',handleCenterClick)



//Displays images in HTML
function renderProducts(){

    if (workingProducts <= 1){
        workingProducts = allProducts.slice();
        //Randomizes products array
        shuffleArray(workingProducts);
        
    }
    firstProduct = workingProducts.pop();
    leftImage.setAttribute('src', firstProduct.src);

    secondProduct = workingProducts.pop();
    centerImage.setAttribute('src', secondProduct.src);

    thirdProduct = workingProducts.pop();
    rightImage.setAttribute('src', thirdProduct.src);
    console.log(thirdProduct);

    firstProduct.views += 1;
    secondProduct.views += 1;
    thirdProduct.views += 1;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

renderProducts();
    