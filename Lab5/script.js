function add(x, y){
    return x+y;
}
console.log("Sum: " + add(5,9));

const add1=(a,b)=> {
return a+b;
}
console.log("Sum1: " + add1(5,6));

var divBox = document.getElementById("dom-1");

divBox.addEventListener("click",()=> {
   console.log("Clicked!!")
});

var output= document.getElementById("out")
var input1= document.getElementById("inp-1")
var input2= document.getElementById("inp-2")
var outputButton= document.getElementById("btn")

outputButton.addEventListener("click",()=> {
    var x = parseInt(input1.value);
    var y = parseInt(input2.value);
    var sum = x+y;
    console.log(sum);
    output.innerText=sum;
    output.innerHTML= `<div style="color: red"><p> ${sum} </p></div>`   // ` refers dynamic string
})