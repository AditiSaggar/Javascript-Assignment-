let input=document.getElementById("inputArea");


function calculate(number){
    input.value=input.value+number;
}

function result(){
    input.value=eval(input.value);
}

function clr(){
    input.value="";
}



