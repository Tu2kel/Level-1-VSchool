
/*-------------------RED-----------------------------------------*/
var reds = document.getElementById("reds")

function handleRedsClick() {
    reds.style.backgroundColor = "red"
    console.log("RED!!");
}
reds.addEventListener("mousedown", handleRedsClick)

/*-------------------RED---Above--------------------------------------*/
/*-------------------BLUE-----------------------------------------*/

var blues = document.getElementById("blues")

function handleBluesClick() {
    blues.style.backgroundColor = "blue"
    console.log("BLUE FINALLY!");
}
blues.addEventListener("mouseover", handleBluesClick)

/*-------------------BLUE--Above---------------------------------------*/

/*-------------------GREEN-----------------------------------------*/
var greens = document.getElementById("greens")

function handleGreensClick() {
    greens.style.backgroundColor = "green"
    console.log("It's GREEN!");

}

greens.addEventListener("dblclick", handleGreensClick)


/*-------------------GREEN-----Above------------------------------------*/


/*-------------------YELLOW-----------------------------------------*/

var yellows = document.getElementById("yellows")

function handleYellowsClick() {
    yellows.style.backgroundColor = "#cad52a"
    console.log("It's YELLOW!");

}

yellows.addEventListener("mouseleave", handleYellowsClick)

/*-------------------YELLOW------Above-----------------------------------*/

/*-------------------ORANGE-----------------------------------------*/

var oranges = document.getElementById("oranges")

function handleOrangesClick() {
    oranges.style.backgroundColor = "orange"
    console.log("It's ORANGE!");
}

oranges.addEventListener("wheel", handleOrangesClick)

/*-------------------ORANGE----Above------------------------------*/

/*-------------------Keyboard--------------------------------*/

const keyboard = document.querySelector("reds", "blues", "greens", "yellows", "oranges");

document.addEventListener("keypress", e => {

    if(e.key === "b") {
        blues.style.backgroundColor= "blue"
        console.log("Keyed BLUE!!");

        } else if (e.key === "r") {
            reds.style.backgroundColor= "red"
            console.log("Keyed RED!!");

            } else if (e.key === "g") {
                console.log("Keyed GREEN!!");
                greens.style.backgroundColor = "green"

                } else if (e.key === "y") {
                    console.log("Keyed YELLOW!!");
                    yellows.style.backgroundColor = "yellow"
                    
                    } else if (e.key === "o") {
                        console.log("Keyed ORANGE!!");
                        oranges.style.backgroundColor = "orange"
                    
                     }  
                    
                        
})

