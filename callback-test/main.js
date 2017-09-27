function f1() {
    alert('!!!');
}


function f2() {
    console.log('!!!')
}

function call(func) {

    setTimeout(function () {
        func();
    }, 1000);

}

var a = document.querySelector('input').value;

if (a > 2) {
    call(f1);
} else {
    call(f2);
}