const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;
}


function  clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
        /*     display.value = eval(display.value); //Executing JS from a string is an enormous security risk.
        //                       It is far too easy for a bad actor to run arbitrary 
        //                       (like it wants ) code when you use eval() 
        //                       kinda like built in cal
        */
        const expression = display.value;

        const match = expression.match(/^(-?\d+\.?\d*)([\+\-\*\/])(-?\d+\.?\d*)$/);

        /*
        when used with capturing groups (i.e., parts of the pattern in parentheses) — returns an array like this:
            [
            fullMatch,   // The entire string that matched the pattern
            group1,      // First capturing group
            group2,      // Second capturing group
            group3,      // Third capturing group
            ...
            ]

        */

        if(!match){
            display.value("Error");
            return;
        }
       
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);
        let result;
        if(operator === '+'){

        } else if(operator === '-'){
            result = num1 - num2;
        } else if(operator === '+'){
            result = num1 + num2;
        } else if(operator === '/'){
            if (num2 === 0){
                display.value = "Infinity";
                return;
            }
            result = num1 / num2;
        } else{
            result = num1 * num2;
        }

        display.value = result;
        
    }
    catch(error){
        display.value = "Error"
    }
}