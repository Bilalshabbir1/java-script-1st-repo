// Ch # 1-7 | Introduction to javaScript | Data Types | Alerts | Arthmetic Operator

document.getElementById("AlertString").onclick = function () {
    alert("bilal shabbir")

    document.getElementById("statement").innerHTML = 'alert("bilal shabbir")';
    document.getElementById("clearStatement btn").onclick = function () {
        document.getElementById("statement").innerHTML = '';
    }
}
document.getElementById("AlertName").onclick = function () {
    alert(208338)


    document.getElementById("statement").innerHTML = 'alert(208338)';
    document.getElementById("clearStatement btn").onclick = function () {
        document.getElementById("statement").innerHTML = '';
    }

}
// variables Names

document.getElementById("VariablesNames").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("OutPut").innerHTML = "";


    let html = " <ul><li>A variabels name can't contain any space.</li><li> A varibale name can contain only letters,numbers, dolrs,sign,and underscorce . </li><li> Trough A variable name can't be any of javascript keywords,It can contain keywords . For example,<code> userAlter </code> and <code> my var </code>are iligal</li>"

    document.getElementById("OutPut").innerHTML = html;
    document.getElementById("clearOutput btn").onclick = function () {
        document.getElementById("OutPut").innerHTML = '';
    }

}
// camel Case example

document.getElementById("camelCaseExample").onclick = function () {

    document.getElementById("statement").innerHTML = "";
    document.getElementById("OutPut").innerHTML = "";

    let html = "<h3>Example</h3><ul><li>A variabels name can't contain any space.</li><li> A varibale name can contain only letters,numbers, dolrs,sign,and underscorce . </li><li> Trough A variable name can't be any of javascript keywords,It can contain keywords . For example,<code> userAlter </code> and <code> my var </code>are iligal</li>"


    document.getElementById("OutPut").innerHTML = html;

    document.getElementById("clearOutput btn").onclick = function () {
        document.getElementById("OutPut").innerHTML = '';
    }
}


// Math expression


document.getElementById("Sum2Numbers").onclick = function () {

     document.getElementById("statement").innerHTML = "";
     document.getElementById("OutPut").innerHTML = "";

 let num1 = 8
 let num2 = 7
 let sum = num1 + num2;


document.getElementById("OutPut").innerHTML = "<p class=text-center>" + sum + "</p> ";

let statement = "let num1 =" + num1 +";<br>let num2 =" + num2 +";<br>let sum = num1 + num2;"

document.getElementById("statement").innerHTML = statement;
document.getElementById("clearOutput btn").onclick = function (){
    document.getElementById("OutPut").innerHTML = "";
    document.getElementById("statement").innerHTML = "";
}
}
// Subtract Numbers

document.getElementById("Sbtract2Numbers").onclick = function () {

     document.getElementById("statement").innerHTML = "";
     document.getElementById("OutPut").innerHTML = "";

 let num1 = 8
 let num2 = 7
 let sum = num1 - num2;


document.getElementById("OutPut").innerHTML = "<p class=text-center>" + sum + "</p> ";

let statement = "let num1 =" + num1 +";<br>let num2 =" + num2 +";<br>let sum = num1 - num2;"

document.getElementById("statement").innerHTML = statement;
document.getElementById("clearOutput btn").onclick = function (){
    document.getElementById("OutPut").innerHTML = "";
    document.getElementById("statement").innerHTML = "";
}
}

// Mltiple Numbers
document.getElementById("Multiple2Numbers").onclick = function () {

     document.getElementById("statement").innerHTML = "";
     document.getElementById("OutPut").innerHTML = "";

 let num1 = 8
 let num2 = 7
 let sum = num1 * num2;


document.getElementById("OutPut").innerHTML = "<p class=text-center>" + sum + "</p> ";

let statement = "let num1 =" + num1 +";<br>let num2 =" + num2 +";<br>let sum = num1 * num2;"

document.getElementById("statement").innerHTML = statement;
document.getElementById("clearOutput btn").onclick = function (){
    document.getElementById("OutPut").innerHTML = "";
    document.getElementById("statement").innerHTML = "";
}
}
// Divide Numbbers
document.getElementById("Divide2Numbers").onclick = function () {

     document.getElementById("statement").innerHTML = "";
     document.getElementById("OutPut").innerHTML = "";

 let num1 = 10
 let num2 = 5
 let sum = num1 / num2;


document.getElementById("OutPut").innerHTML = "<p class=text-center>" + sum + "</p> ";

let statement = "let num1 =" + num1 +";<br>let num2 =" + num2 +";<br>let sum = num1 / num2;"

document.getElementById("statement").innerHTML = statement;
document.getElementById("clearOutput btn").onclick = function (){
    document.getElementById("OutPut").innerHTML = "";
    document.getElementById("statement").innerHTML = "";
}
}
// Calculate some numbers
document.getElementById("Calculate2Numbers").onclick = function () {

     document.getElementById("statement").innerHTML = "";
     document.getElementById("OutPut").innerHTML = "";
let someCalclation = 20/2+3*2**3-(3+2);
     document.getElementById("OutPut").innerHTML = "<p class=text-center>" + someCalclation + "</p> ";
let statement = "let someCalclation = 20/2+3*2**3-(3+2);"

document.getElementById("statement").innerHTML = statement;

document.getElementById("clearOutput btn").onclick = function (){
    document.getElementById("OutPut").innerHTML = "";
    document.getElementById("statement").innerHTML = "";
}


}