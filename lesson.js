/* a JavaScript comment */
// another JavaScript comment

// want to generate a compliment whenever a button is pressed
// sentence is in the form: "You <verb> like a <animal>."

var verb = ["run", "jump"]
var animal = ["gazzel", "giraff"]

function getVerb() {
   return verb[ Math.floor( Math.random () * verb.length) ]
}

function getAnimal() {
   return animal[ Math.floor( Math.random () * animal.length) ]
}

function activateClick () {
   var ele = document.getElementById( "output")
   ele.innerHTML = "You " + getVerb() + " like a " + getAnimal() + "!"
}

window.onload = function () {
   var ele = document.getElementById( "activate")
   ele.addEventListener ("click", activateClick)
}
