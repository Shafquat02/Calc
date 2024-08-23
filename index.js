let result = document.getElementById('res');

function Clear() {
    result.value = '';
}

function Back() {
    let str = result.value;
    result.value = str.substring(0, str.length - 1);
}

function Solve(op) {
    let str = result.value;
    result.value = str + op;
}

function Result() {
    let str = result.value;
    result.value = eval(str);
}