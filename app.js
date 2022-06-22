// Variables
const buttonDOM = document.querySelector('#submit');
let 
firstNameDOM = document.querySelector('#first-name'),
lastNameDOM = document.querySelector('#last-name'),
ageDOM = document.querySelector('#age'),
h2DOM = document.querySelector('h2');

// Event listener
buttonDOM.addEventListener('click', createNewPerson)

// Person class
class Person{
    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
}

// Functions 
function createNewPerson(e){
    // Catch if an input is missing and display an error if so
    if(firstNameDOM.value === "" || lastNameDOM.value === "" || ageDOM.value === ""){
        message("You must enter a value for all inputs!", 'red');
    }else{
        // create a new person with inputed information + console.log() new Person obj

        const person = new Person(firstNameDOM.value, lastNameDOM.value, ageDOM.value)
        console.log(person)

        // final message displaying newly created Person class information.
        message(`New person class has been created with:

        First Name: ${firstNameDOM.value} 
        Last Name: ${lastNameDOM.value}
        Age ${ageDOM.value}
        
        Please check the console to inspect the new person object!`, 'green')
    }

    e.preventDefault();
}

function message(msg, color){
    h2DOM.style.textAlign = "center"
    h2DOM.style.color = color;
    h2DOM.innerText = msg;
    setTimeout(clear, 3200)
}
function clear(){
    h2DOM.innerText = "";
}