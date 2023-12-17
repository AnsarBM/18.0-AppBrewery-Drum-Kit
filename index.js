/* 18.0 Drum kit*/

/* document.querySelector("button").addEventListener("click", handleClick); /* Do not add the () after the function handleClick() because if you do, 
                                                                            every time the page is refreshed this line will be executed. 
                                                                            We need this line to be executed only after clicking the button*/

/*function handleClick(){
    alert("I got clicked!");
} */

/* //Change this handleClick function to anomymous function by combining the two.
document.querySelector("button").addEventListener("click", function(){alert("I got clicked!")});

// Here only the first button responds. We will need to change it buy imposing the same property to all buttons. 
*/


/* var numberOfDrumButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numberOfDrumButtons;i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click", function(){
       
        // What to do when click is detected.
         alert("I got clicked!");
    
    });
} 
*/

/*********************************************/

/*18.2 Drum Kit: Play sounds on a website*/
var numberOfDrumButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numberOfDrumButtons;i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        var key =  buttonInnerHTML;
        makeSound(key);
        buttonAnimation(key);

    });
}

document.addEventListener("keydown", function(event){
    //console.log(buttonPressed);   // This will show you on the console which button was pressed
    //console.log(buttonPressed.key);  // This will provide you they key that was pressed. If it was "a", then a will be displayed on the console.

    var buttonPressed = event.key;
    var key =  buttonPressed;
    makeSound(key);
    buttonAnimation(key);
    
});


// Below is the function which is called to provide sound when the key is pressed on the keyboard or clicked on the screen.
function makeSound(key){
    switch (key) {
        case "w":
            var sound = "tom-1";
        break;

        case "a":
            var sound = "tom-2";
        break;

        case "s":
            var sound = "tom-3";
        break;

        case "d":
            var sound = "tom-4";
        break;

        case "j":
            var sound = "snare";
        break;

        case "k":
            var sound = "crash";
        break;

        case "l":
            var sound = "kick-bass";
        break;               

        default:
            console.log(key);
        break;
    }

    var audioFilePath = "./sounds/" + sound + ".mp3";
    var audio = new Audio(audioFilePath);
    audio.play();
}


// Below is the function that provides animation when the key is pressed on the keyboard or clicked on the screen.

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");  // this add the shadow on the button when it is pressed. But it does not go back to original initial state.
    setTimeout(function(){                                        // setTimeout will remove the shadow from the button after 100 (that is 0.1 seconds)
        activeButton.classList.remove("pressed") ;
    }, 100);
}