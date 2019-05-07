function calculate() {

    let field1 = document.getElementById("num1").value;
    let field2 = document.getElementById("num2").value;
    let field3 = document.getElementById("num3").value;
    let field4 = document.getElementById("num4").value;
    let field5 = document.getElementById("num5").value;
    let field6 = document.getElementById("num6").value;
    let field7 = document.getElementById("num7").value;

    let result1 = parseFloat(field1) + parseFloat(field2) + parseFloat(field3) + parseFloat(field4) + parseFloat(field5) + parseFloat(field6) + parseFloat(field7);

    let result = result1 / 7;

    /*document.write( (result));*/

    if (!isNaN(result)) {
        document.getElementById("answer").innerHTML = "You have eaten on average " + Math.round(result) + " food rich in fibre per day this week";

    }



if (result >= 1) {

	window.location = "star.html";

}

else {

	console.log("the menu is not here")
}


}