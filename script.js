//1.display number on the text field
function displayNumber(num){
    result.value+=num
}
//2.clear the text field
function cleartext(){
    result.value="" //it will assign an a empty value to the text field
}
//3.evaluate the expression
function evaluateexpression(){
    // exp=result.value//4*6
    // output=eval(result.value)//24=eval(4*6)  //eval is the method used in the javascript for calculation
    // result.value=output//4*6=24
    result.value=eval(result.value)
}
//4.remove last character from the textfield
function removelastcharacter(){
    result.value=result.value.slice(0,-1)
}