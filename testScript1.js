function getHTML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            return xhr.responseText;
        }
    }
    xhr.send();
};

console.log(getHTML('https://zz1.tribalwars.works/game.php?village=3106&screen=report'));
