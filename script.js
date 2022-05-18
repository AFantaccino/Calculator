const screen = document.querySelector(".screen")
const numbButt = document.querySelectorAll(".number")
const addctButt = document.querySelector(".operationplus")
const subtButt = document.querySelector(".operationminus")
const multplButt = document.querySelector(".operationics")
const divslButt = document.querySelector(".operationbar")
const cancButt = document.querySelector(".cancbutton")
const singlecancButt = document.querySelector(".singlecancbutton")
const dotButt = document.querySelector(".dot")
const operateButt = document.querySelector(".submit")

let numInput = "";
let num1 = 0;
let num2 = 0;
let dotcounter = 0;
let operator = "";

function clear(){
    num1 = 0;
    screen.innerHTML = "";
    numInput = "";
    operator = "";
    dotcounter = 0;
}

function setNum1(){
    num1 = +numInput
    numInput = "";
}

function setNum2(){
    num2 = +numInput
    numInput = "";
}

cancButt.addEventListener("click", ()=> {
    clear();
})

singlecancButt.addEventListener("click", ()=> {
    if (operator != ""){
        screen.textContent = screen.textContent.slice(0, -1)
        operator = ""
    }
    else {
        screen.textContent = screen.textContent.slice(0, -1)
        numInput = numInput.slice(0, -1)
    }
})

dotButt.addEventListener("click", ()=>{
    if(screen.textContent == "") screen.innerHTML = ""
    else{
        if(dotcounter == 0){
            screen.textContent+=".";
            numInput += ".";
            dotcounter++;
        }
    }
})

function numbersListeners(){
    for (let index = 0; index <= 9; index++) {
        let currentNumb = document.getElementById("num"+`${index}`)
        currentNumb.addEventListener("click", ()=>{

            if (screen.textContent == 0 && num1 == 0) numInput = "";
            if (screen.textContent == 0) screen.innerHTML = "";
            if (screen.textContent == "Cannot divide by Zero") clear();

            screen.textContent += `${index}`;
            numInput += `${index}`;
            console.log(numInput)
        })
    }
}

addctButt.addEventListener("click", ()=>{
    if(screen.textContent == "") screen.innerHTML = ""
    else{
        dotcounter = 0;
        if(operator != "") {
            setNum2();
            operate(num1, operator, num2)  
        }
        screen.textContent+="+";
        operator = "+";
        if (num1 == 0) setNum1()
        else setNum2();
    }
})

subtButt.addEventListener("click", ()=>{
    dotcounter = 0;
    if(operator != "") {
        setNum2();
        operate(num1, operator, num2)  
    }
    screen.textContent+="-";
    operator = "-";
    if (num1 == 0) setNum1()
    else setNum2();
    
})

multplButt.addEventListener("click", ()=>{
    if(screen.textContent == "") screen.innerHTML = ""
    else{
        dotcounter = 0;
        if(operator != "") {
            setNum2();
            operate(num1, operator, num2)  
        }
        screen.textContent+="x";
        operator = "*";
        if (num1 == 0) setNum1()
        else setNum2();
    }      
})

divslButt.addEventListener("click", ()=>{
    if(screen.textContent == "") screen.innerHTML = ""
    else{
        dotcounter = 0;
        if(operator != "") {
            setNum2();
            operate(num1, operator, num2)  
        }
        screen.textContent+="/";
        operator = "/";
        if (num1 == 0) setNum1()
        else setNum2();
    }
})

operateButt.addEventListener("click", ()=>{
    setNum2();
    operate(num1, operator, num2)
})

function operate(nu1, sign, nu2){
    if (sign == "+"){
        screen.textContent = nu1 + nu2;
        num1 = nu1 + nu2;
        num2 = 0;
        operator = "";
        dotcounter = 0;
    }
    if (sign == "-"){
        screen.textContent = nu1 - nu2;
        num1 = nu1 - nu2;
        num2 = 0;
        operator = "";
        dotcounter = 0;
    }
    if (sign == "*"){
        screen.textContent = nu1 * nu2;
        num1 = nu1 * nu2;
        num2 = 0;
        operator = "";
        dotcounter = 0;
    }
    if (sign == "/"){
        if(num2 == 0) screen.textContent = "Cannot divide by Zero"
        else{
            screen.textContent = Math.round((nu1 / nu2)*100)/100;
            num1 = Math.round((nu1 / nu2)*100)/100;
            num2 = 0;
            operator = "";
            dotcounter = 0;
        }
    }
    
}

