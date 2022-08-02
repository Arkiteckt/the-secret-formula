/*
Let's start out simple, in your `index.html` file, 
create a form that contains a text input and a submit button. 
From here, use Javascript to make it so that when the submit button is clicked, 
the page displays the text inside of the text input as a browser alert.
*/

let buttonList = document.querySelectorAll("#parent submitButton");
let inputText = document.querySelector("#userInput");
let submitButton = document.querySelector("#submitButton");
let form = document.querySelector("form");


//Reference to checkboxes
let wheatbreadCheckbox = document.querySelector("#wheatbread");
let lettuceCheckbox = document.querySelector("#lettuce");
let pickleCheckbox = document.querySelector("#pickle");
let onionsCheckbox = document.querySelector("#onions");
let mayoCheckbox = document.querySelector("#mayo");
let tomatoCheckbox = document.querySelector("#tomato");
let honeymustardCheckbox = document.querySelector("#honeymustard");
let oliveoilCheckbox = document.querySelector("#oliveoil");
let blackpepperCheckbox = document.querySelector("#blackpepper");
let greenpepperCheckbox = document.querySelector("#greenpepper");


form.addEventListener ('submitButton', function(event){
    //prevents browser from refreshing when using 'submit' event
    event.preventDefault();



//PART 2: SANDWICH BUILDER


    console.log("Wheatbread: " + wheatbreadCheckbox.checked)
    console.log("Lettuce: " + lettuceCheckbox.checked)
    console.log("Pickle: " + pickleCheckbox.checked)
    console.log("Onions: " + onionsCheckbox.checked)
    console.log("Mayo: " + mayoCheckbox.checked)
    console.log("Tomato: " + tomatoCheckbox.checked)
    console.log("Honeymustard: " + honeymustardCheckbox.checked)
    console.log("Oliveoil: " + oliveoilCheckbox.checked)
    console.log("blackpepper: " + blackpepperCheckbox.checked)
    console.log("greenpepper: " + greenpepperCheckbox.checked)
}

//build a string, querying each checkbox one at a time. 
//You could use a for-loop to do this but you are not required to do so.





//## PART 3: HAIRCUT APPOINTMENT SCHEDULER

<form>
<label>Schedule</label>
<input id="userInput" type="text" autocomplete="off" placeholder="Select Date">
</form>
<input id="submitButton" type="submit">
</form>
