function getHTML(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function callback(data) {
    console.log(data);
}

getHTML('https://zz1.tribalwars.works/game.php?village=3106&screen=report', callback);
