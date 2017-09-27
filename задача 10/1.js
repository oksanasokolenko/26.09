var button = document.getElementById('start'),
    input = document.getElementById('d1');

button.addEventListener('click', onKeyUp, false);

function onKeyUp() {
    console.log(check());
}

function check() {

    var num = input.value;

    if (num > 10) {
        return (num * num)
    }
    else if (num < 7) {
        return ("число меньше 7")
    }
    else {
        return num;
    }

}


