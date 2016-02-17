// alert("hello world!");
// console.log("hello world!");

function $(id) {
    retrun document.getElementById(id);
}

function add(num1, num2) {
    retrun num1+num2;
}

function renderResult(result) {
    $("result").innerHTML = result;
}

function addEventHandle() {
    var num1 = $("number1").value;
    var num2 = $("number2").value;
    var result = add(num1, num2);
    renderResult(result);
}

function initEvent() {
    $("addbtn").addeventListener("click", addEventHandle, false);
}
