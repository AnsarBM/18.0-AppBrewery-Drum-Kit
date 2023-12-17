/*Deeper Understanding of JavaScript Objects*/
/* Constructor function: This is the Object. Think like this; a factory that creates similar objects. NOTE: It always begins with the capital letter.*/
/*this.clean is a function which is also called Method.*/

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function (){                                
        alert("Cleaning in Progress!");
    }
}

// Here we get houseKeeper1 object created from HouseKeeper factory
var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);