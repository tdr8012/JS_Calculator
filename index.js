const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;
}


function  clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
        display.value = eval(display.value); //Executing JS from a string is an enormous security risk.
    //                       It is far too easy for a bad actor to run arbitrary 
    //                       (like it wants ) code when you use eval() 
    //                       kinda like built in cal

    }
    catch(error){
        display.value = "Error"
    }
}