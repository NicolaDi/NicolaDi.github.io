var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Circuit.jpg') {
        myImage.setAttribute ('src','images/RealCircuit.jpg');
    } else {
        myImage.setAttribute ('src', 'images/Circuit.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Immettere il nome per favore.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Benvenuto nel mio sito, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Benvenuto nel mio sito, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}