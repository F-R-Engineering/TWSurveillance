function getLinks(url, callback) {
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
    var links = data.match(/<a href="(.*?)"/g);
    for (var i = 0; i < links.length; i++) {
        if (links[i].indexOf('screen=report&mode=') != -1) {
            console.log(links[i]);
        }
    }
}
getLinks('https://zz1.tribalwars.works/game.php?village=3106&screen=report', callback);
