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