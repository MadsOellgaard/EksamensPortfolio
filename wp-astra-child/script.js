console.log("Astra Child Theme JS is running!");


// Creates the variable scrollbutton
var scrollbutton;
// Adds eventlistener on "DOMContentLoaded" and runs the functions within.
document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
    initScrolltop();
    initTypedJs();
});

function initScrolltop() {
    // Gets the button 
    scrollbutton = document.getElementById("scrollTop");
    // Calls on the scrollFunction when scroll is being used.
    window.onscroll = function () {
        scrollFunction();
    }
}

// When you scroll past 750px from the top of the document, the button will show itself, if below 750px, the button is hidden
function scrollFunction() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        scrollbutton.style.display = "block";
    } else {
        scrollbutton.style.display = "none";
    }
}
    
// When the user clicks on the button, scroll to 1150px from the top of the document At the map.
function topFunction() {
    document.body.scrollTop = 0;
}


// ---------- typed.js ---------- //

function initTypedJs() {
    // Check if Typed exists and is callable, if callable it executes the function
    if(typeof Typed == "function") {
        // Creates a new Typed from the class .typed
        new Typed(".typed", {
            // Creates multiple strings
            strings: ["Mads Oellgaard.", "Turns to Moe.", "A Coder.", "a Web Developer.", "Problem solver.", "Gamer."],
            // The speed of which typing and deleting the strings
            typeSpeed: 75,
            // Loops the strings, so typing and deleting the strings never stops
            loop: true,
        });
    }
};
