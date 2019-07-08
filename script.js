//Targeting elemnts with ID's using JS

const myElemnt = document.querySelector('#id')
console.log(myElemnt)

//manupulate the elemnts using JS   
//Query selector used to change the FirstPTAG in HTML
const myPElement = document.querySelector('p')
myPElement.textContent = 'I am being changed using JS'



//create an element P using JS
const myPara = document.createElement('p')
myPara.textContent = 'This is added via JS'
document.querySelector('body').appendChild(myPara)

// Targeting button and changing context of BUTTON when it CLicked
document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textContent = 'I was CLICKED'  
})

