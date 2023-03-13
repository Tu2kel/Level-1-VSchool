const readlineSync = require("readline-sync");
  
//#region INTRO
//Answers questions
const userName = readlineSync.question("State your name = ");
console.log(userName + "!" + " ...I Wanna Play a 🤡 !GAME!");

readlineSync.question(
  "🤡 For Years you Locked yourself away; ESCAPING from Life, NOW! You Are Truly Locked away. " +
    ":" +
    " Press Enter"
);

readlineSync.question(
  "🤡 In order to Escape the room, You SIMPLY need to find the KEY and open the door." +
    ":" + " Press Enter"
    
);

readlineSync.question(
  "🤡 However...All HOLES aren't the KEY to the answer, Some Holes may just Swallow you WHOLE" + ":" + " Press Enter"
);

readlineSync.question(
  "🤡 Will You Escape to hold on to YOUR LIFE?" + ":" + " Press Enter"
);


readlineSync.question(
  "🤡 LIVE or DIE...Make Your Choice" + ":" + " Press Enter"
);

//#endregion
/*-----------------------------------------INTRO ABOVE--------------------------------------------*/

/*-----------------------------------------START BELOW--------------------------------------------*/
// GLOBAL VARIABLES
let isAlive = true // ALLOWS PLAYER TO CONTINUE WITH CHOICES; IF FALSE GAME COMPLETES
// let hasKey = false;
let hasKey = false;

//WHILE LOOP Kept player Alive through all iterations as If statement Comes to an End
while (isAlive == true) {
  choice = readlineSync.keyIn(
    userName + " Press 1 to search 😈 the Hole for the Key :" + " Press 2 to continue your search :" + " Press 3 to Open the Door ",
  );

//HAND IN HOLE CHOICE 1
    if (choice == 1) {
        console.log(userName + " you put your hand in the HOLE and triggered Toxic ☠️ Gasses filling the room. !GAME 🤡 OVER!");
        isAlive = false;

// FINDS KEY
            } else if (choice == 2 && hasKey == false) {
                console.log(
                userName + " Shakily has found the KEY"
                );
                hasKey = true;

                    } else if (choice == 2 && hasKey == true) {
                        console.log(
                        userName + " is Frantic and drops the key; then grabs the key and heads toward the door."
                        );

//OPENS THE DOOR                        
                            } else if (choice == 3 && hasKey == false) {
                                console.log(
                                "LOCKED!" + " A Countdown has started and a slow ☠️ Toxin is Released"
                                );

                                    } else if (choice == 3 && hasKey == true) {
                                        console.log(userName + " 🤡 You fought Well for this 2nd Chance at Life...Live or we may meet yet again");
                                        isAlive = false;
                                    }
}