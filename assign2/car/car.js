// change car image
function changeImageToRed () {
    document.getElementById("changeCar").src = "red.jpg";

    document.getElementById("redButton").style.backgroundColor = "lightblue";
    document.getElementById("blueButton").style.backgroundColor = "white";
    document.getElementById("silverButton").style.backgroundColor = "white";
    document.getElementById("whiteButton").style.backgroundColor = "white";
    document.getElementById("blackButton").style.backgroundColor = "white";
};

function changeImageToBlue(){
    document.getElementById("changeCar").src = "blue.jpg";

    document.getElementById("redButton").style.backgroundColor = "white";
    document.getElementById("blueButton").style.backgroundColor = "lightblue";
    document.getElementById("silverButton").style.backgroundColor = "white";
    document.getElementById("whiteButton").style.backgroundColor = "white";
    document.getElementById("blackButton").style.backgroundColor = "white";
};

function changeImageToSilver(){
    document.getElementById("changeCar").src = "silver.jpg";
    document.getElementById("redButton").style.backgroundColor = "white";
    document.getElementById("blueButton").style.backgroundColor = "white";
    document.getElementById("silverButton").style.backgroundColor = "lightblue";
    document.getElementById("whiteButton").style.backgroundColor = "white";
    document.getElementById("blackButton").style.backgroundColor = "white";
};

function changeImageToWhite(){
    document.getElementById("changeCar").src = "white.jpg";
    document.getElementById("redButton").style.backgroundColor = "white";
    document.getElementById("blueButton").style.backgroundColor = "white";
    document.getElementById("silverButton").style.backgroundColor = "white";
    document.getElementById("whiteButton").style.backgroundColor = "lightblue";
    document.getElementById("blackButton").style.backgroundColor = "white";
};

function changeImageToBlack(){
    document.getElementById("changeCar").src = "black.jpg";
    document.getElementById("redButton").style.backgroundColor = "white";
    document.getElementById("blueButton").style.backgroundColor = "white";
    document.getElementById("silverButton").style.backgroundColor = "white";
    document.getElementById("whiteButton").style.backgroundColor = "white";
    document.getElementById("blackButton").style.backgroundColor = "lightblue";
};


// Calculating Total

// variables
var config = {
    GManual: 17790.00, 
    GAuto: 18590.00, 
    SManual: 22455.00, 
    SAuto: 23155.00
}

var factory = {
    combo1: 1235.00, 
    combo2: 3354.00, 
    noCombo: 0.00
}

var dealer = {
    stereo: 550.00, 
    security: 399.00, 
    mirror: 295.00
}

// helpers to calculate total
function configTotal() {
    var total = 0;
    if (document.getElementById("GManual").checked) {
        total = config.GManual;
    } else if (document.getElementById("GAuto").checked) {
        total = config.GAuto;
    } else if (document.getElementById("SManual").checked) {
        total = config.SManual;
    } else if (document.getElementById("SAuto").checked) {
        total = config.SAuto;
    }
    return total;
}

function factoryTotal() {
    var total = 0;
    if (document.getElementById("combo1").checked) {
        total = factory.combo1;
    } else if (document.getElementById("combo2").checked) {
        total = factory.combo2;
    } else if (document.getElementById("noCombo").checked) {
        total = factory.noCombo;
    }
    return total;
}

function dealerTotal() {
    var total = 0;
    if (document.getElementById("stereo").checked) {
        total = dealer.stereo;
    } else if (document.getElementById("security").checked) {
        total = dealer.security;
    } else if (document.getElementById("mirror").checked) {
        total = dealer.mirror;
    }
    return total;
}

// calculates total
function calcTotal() {
    var total = configTotal() + factoryTotal() + dealerTotal();
    return total;
}
// append text when total is pressed
function writeTotal() {
    var div = document.getElementById('total');
    var total = calcTotal().toFixed(2);
    var totalString = total.toLocaleString();
    console.log(total);
    div.innerHTML = "$" + totalString;
}



