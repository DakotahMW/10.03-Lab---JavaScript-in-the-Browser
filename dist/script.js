function myLineUp(){
    let result = "";

    let status = ""; //string tell the status
    let date = ""; // string tell date
    let players = "" // string tell list of player

    let form = document.getElementById("lineUpForm"); // get form element

    let section = form.children; // array of each section of form element

    let statusSection = section[0]; // status section
    let dateSection = section[1];   // date section
    let playersSection = section[2];    // player section

    if(statusSection.children[3].checked){ // check if final button is checked
        status = "status: fianls"
    } else{
        status = "status: draft"    // the draft button must else be pressed since there's only two option
    }

    dateSection = "date: " + dateSection.children[0].value; // get value from select element


    players = "players: ";
    let nonSelected = true; //purpose: check if no player is selected
    for(let i = 1; i < playersSection.children.length; i++){// i start at one since index 0 is the legend element
        if(playersSection.children[i].children[0].checked){
            nonSelected = false;
            players+=  playersSection.children[i].children[0].value + ", "; // add each player name into the string
        }
    }

    if(nonSelected){
        players = "players: none"; // say it none since no player is there
    } else{
        players = players.substring(0, players.length - 2); // trim extra ", " at end of string
    }


    result = players + " --- " + dateSection + " --- " + status; // but all section string together
    console.log(result);   // print the result into the console
    
    
    let formResult = document.getElementById("formResult");


    formResult.children[0].innerHTML = "INFO SUBMISSION: " + result;
    formResult.hidden = false;
}

//FormData

document.getElementById("submit_button").addEventListener("click", myLineUp);