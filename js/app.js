'use strict'
//////////////////
//Global variable
/////////////////

const productNames = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','water-can','wine-glass'];
let leftProduct = null;
let centerProduct = null;
let rightProduct = null;
const maxClicks = 9;
let currentClicks = 0;
const resultsButton = document.getElementById('results');
const resultsSection = document.getElementById('showResults')
//Selects img elements
let leftImage = document.querySelector('section img:first-child');
let centerImage = document.querySelector('section img:nth-child(2)');
let rightImage = document.querySelector('section img:nth-child(3)')



/////////////////////////
//Functions
////////////////////////
//Constructor for products
function Product (name, src){
this.name = name;
this.src = src;
this.views = 0
this.votes = 0
}
Product.allProducts = [];
Product.workingProducts = [];

function initProducts(){
    for (let productName of productNames){
    const productInstance = new Product(productName,`./img/${productName}.jpg`);
    Product.allProducts.push(productInstance)
    }
}


console.log(Product.allProducts)


//Displays images on webpage
function renderProducts(){

    if(currentClicks === maxClicks){
        endVoting();
        return;
    }
   
    currentClicks +=1;

    if (Product.workingProducts.length < 3){
       Product.workingProducts = Product.allProducts.slice();
        //Randomizes products array
        shuffleArray(Product.workingProducts);
    }
    
     leftProduct = Product.workingProducts.pop();
     centerProduct = Product.workingProducts.pop();
     rightProduct = Product.workingProducts.pop();

     leftProduct.views += 1;
     centerProduct.views += 1;
     rightProduct.views += 1;

    leftImage.setAttribute('src',leftProduct.src);
    centerImage.setAttribute('src',centerProduct.src);
    rightImage.setAttribute('src',rightProduct.src);
}

function initEventListener(){
leftImage.addEventListener('click',handleLeftClick);
centerImage.addEventListener('click',handleCenterClick);
rightImage.addEventListener('click',handleRightClick);
}

function handleLeftClick(){
    leftProduct.votes += 1;
    renderProducts();
}
function handleCenterClick(){
    centerProduct.votes += 1;
    renderProducts();
}

function handleRightClick(){
    rightProduct.votes += 1;
    renderProducts();
}

function endVoting(){
leftImage.removeEventListener('click', handleLeftClick);
centerImage.removeEventListener('click', handleCenterClick);
rightImage.removeEventListener('click', handleRightClick);
resultsButton.hidden = false;
resultsButton.addEventListener('click', handleResultButton)
}

function handleResultButton(){
//renderResults();
renderChart();
}

function renderResults(){
const ul = document.createElement('ul');
resultsSection.appendChild(ul);

for (let productInstance of Product.allProducts){
const result =  `The product ${productInstance.name} received ${productInstance.votes}votes and was viewed ${productInstance.views} times.`;
const li = document.createElement('li');
ul.appendChild(li);
li.textContent = result;
}
}

function renderChart(){

    const productChartNames = [];
    const productViews = [];
    const productVotes = [];
    productNames.push(productChartNames);

    for (let chartInfo of Product.allProducts){
       productViews.push(chartInfo.views)
    }

    const data = {
    labels: productNames,
    datasets: [{
        label: 'Votes',
        data: productVotes,
        backgroundColor: [
        'rgba(555, 99, 71, 0.2)',
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        ],
        borderWidth: 1
    },
    {
    label: 'Views',
    data: productViews,
    backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
    'rgb(255, 99, 132)',
    ],
    borderWidth: 1
    }],

  }
    const config = {
        type: 'bar',
        data: data,
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        },
    };
    let canvasChart = document.getElementById('myChart');
    const myChart = new Chart(canvasChart, config);
}

//Fisher Yates Function that randomizes products array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

function start(){
     
initProducts();
initEventListener();
renderProducts();
}

start()
console.log(Product.workingProducts);