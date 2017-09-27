var input = document.querySelector('[data-input]');

input.addEventListener('keyup', onKeyUp);

function onKeyUp(e) {

    if (e.key === 'Enter') {
        console.log( trimURL(input.value) );
    }

}

function trimURL(url) {

    // url = url.replace('http://', '').replace('https://', '');

    // url = url.replace(/http:\/\/|https:\/\//, '');

    var index = url.indexOf('//') + 2;
    // url = url.slice(index !== 1 ? index : 0);

    console.log(url.split('//'));
    console.log(url.split('//')[1]);
    console.log(url.split('//')[1].replace('www.', ''));

    url = url.split('//')[1].replace('www.', '');

    return url;

    // 'k'.charCodeAt(0)
}