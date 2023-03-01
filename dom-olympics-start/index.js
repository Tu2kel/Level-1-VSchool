//#region Added Header
var header = document.getElementById("header")
    header.textContent = ("JavaScript Made This !!")
    header.style.fontSize = "40px"
    header.style.fontWeight = "bold"

var headText = document.createElement("span")
    headText.textContent = ("Anthony Kelley Sr.") 
    document.body.append(headText)
    headText.style.color = "red" 
    headText.style.fontSize = "20px"
    headText.style.fontStyle = "italic"
    /* CODE WORKS BUT SIMPLER TYING BOTH IN CSS AS SPAN TAG

    headText.style.position = "relative"
    headText.style.bottom = "300px"
    headText.style.left = "270px"

    */

var headText2 = document.createElement("span")
    headText2.textContent = (" wrote the JavaScript")
    document.body.appendChild(headText2)
    headText2.style.fontSize = "25px"
    headText2.style.fontWeight = "bold"
    /*
    CODE WORKS BUT SIMPLER TYING BOTH IN CSS AS SPAN TAG
    headText2.style.position = "relative"
    headText2.style.bottom = "300px"
    headText2.style.left = "270px"
    
    */

//#endregion


//#region TEXTING 
    var changeMess = document.getElementsByClassName("message")

    changeMess[0].textContent = ("Changing My Career")
    changeMess[1].textContent = ("What School are you going through")
    changeMess[2].textContent = ("VSchool")
    changeMess[3].textContent = ("ahh!! Future Software Engineer")
    

    

    //#endregion

//#region DELETE TEXTS
    let ltop = document.querySelector(".ltop");
    let rtop = document.querySelector(".rtop");
    let lbtm = document.querySelector(".lbtm");
    let rbtm = document.querySelector(".rbtm");

    const clear = document.querySelector("#clear-button");
        clear.addEventListener("click", (e) => {
            ltop.textContent = ""
            ltop.style.visibility = "hidden" 

            rtop.innerHTML = ""
            rtop.style.visibility = "hidden"

            lbtm.innerHTML = ""
            lbtm.style.visibility = "hidden"

            rbtm.innerHTML = ""
            rbtm.style.visibility = "hidden"
                       
            
            console.log("Form Cleared🥳");
           
        })
                
//#endregion
        
    //#region CHANGE TEXT BG    

    let theme = document.querySelector("#theme-drop-down")

        document.addEventListener("change",  (e) => {
            if (theme.value === "theme-one") {
                ltop.style.backgroundColor = this.target = "blue"
                lbtm.style.backgroundColor = this.target = "blue"
            
                rtop.style.backgroundColor = this.target = "gold"
                rbtm.style.backgroundColor = this.target = "gold"
                    console.log("Theme 1")
                    
            } else if (theme.value === "theme-two") {


            ltop.style.backgroundColor = this.target = "red"
            lbtm.style.backgroundColor = this.target = "red"
            
            rtop.style.backgroundColor = this.target = "grey"
            rbtm.style.backgroundColor = this.target = "grey"
                console.log("Theme 2")

            
            
            console.log(e)
        }
    })

//#endregion


/*NEED TO LEARN  **Gold**

- Be able to add more messages using the form at the bottom.

EXTRA CREDIT

- Every other message will be posted on the right in one color, and the next on the left the other color.

*/


    
                
            


//                 sendMess[4].textContent = ("Yes, I am going to be a Software Engineer")
//                 sendMess[5].textContent = ("You should give that up, it's too hard")
//                 sendMess[6].textContent = ("Yea, it is because I don't know it yet, I'm learning")
//                 sendMess[7].textContent = ("You should just go to school get the logistics certs")[i]
//                 sendMess[8].textContent = ("Yea, not what I want to continue")[i]
//                 sendMess[9].textContent = ("This not for you, it's more for people that can understand it better")[i]
//                 sendMess[10].textContent = ("I AM GOING TO BE A SOFTWARE ENGINEER, whether you support me or not")[i]

//                 addMess.append(sendMess)

//                 console.log("Message Sent");


//#region SUBMIT MESS