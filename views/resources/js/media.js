
function loungeRadioOut() {
    $("#selectedOutput").text("Lounge Radio");
    $.post('/api/deviceNames', {
        output: JSON.stringify("loungeRadio:")
    }).then(result => {
        console.log(result);
    })
}

function smartTVOut() {
    $("#selectedOutput").text("Smart TV");
    $.post('/api/deviceNames', {
        output: JSON.stringify("smartTV:")
    }).then(result => {
        console.log(result);
    })
}

function appleTVOut() {
    $("#selectedOutput").text("Apple TV");
    $.post('/api/deviceNames', {
        output: JSON.stringify("appleTV:")
    }).then(result => {
        console.log(result);
    })
}

function wholeHouseOut() {
    $("#selectedOutput").text("Whole House");
    $.post('/api/deviceNames', {
        output: JSON.stringify("wholeHouse:")
    }).then(result => {
        console.log(result);
    })
}

function bedroomHeadphonesOut() {
    var deviceName = prompt("Please enter room.");
    if (deviceName == null || deviceName == "") {
        value = "User cancelled the prompt!";
    } else {
        value = "bedroomHeadphones:" + deviceName;
        $("#selectedOutput").text(deviceName + " Headphones");
        $.post('/api/deviceNames', {
            output: JSON.stringify(value)
        }).then(result => {
            console.log(result);
        })
    }
}

function bedroomSpeakersOut() {
    var deviceName = prompt("Please enter room.");
    if (deviceName == null || deviceName == "") {
        value = "User cancelled the prompt!";
    } else {
        value = "bedroomSpeakers:" + deviceName;
        $("#selectedOutput").text(deviceName + " Bedroom Speakers");
        $.post('/api/deviceNames', {
            output: JSON.stringify(value)
        }).then(result => {
            console.log(result);
        })
    }
}

function freeToAirTVIn() {
    $("#selectedInput").text("Free To Air TV");
    $.post('/api/deviceNames', {
        output: JSON.stringify("freeToAirTV:")
    }).then(result => {
        console.log(result);
    })
}

function appleTVIn() {
    $("#selectedInput").text("Apple TV");
    $.post('/api/deviceNames', {
        output: JSON.stringify("appleTV:")
    }).then(result => {
        console.log(result);
    })
}

function loungeRadioIn() {
    $("#selectedInput").text("Lounge Radio");
    $.post('/api/deviceNames', {
        output: JSON.stringify("loungeRadio:")
    }).then(result => {
        console.log(result);
    })
}

function phoneIn() {
    var deviceName = prompt("Please enter your name.");
    if (deviceName == null || deviceName == "") {
        value = "User cancelled the prompt!";
    } else {
        value = "phone:" + deviceName;
        $("#selectedInput").text(deviceName + " Phone");
        $.post('/api/deviceNames', {
            output: JSON.stringify(value)
        }).then(result => {
            console.log(result);
        })
    }
}

function ipadIn() {
    var deviceName = prompt("Please enter your name.");
    if (deviceName == null || deviceName == "") {
        value = "User cancelled the prompt!";
    } else {
        value = "ipad:" + deviceName;
        $("#selectedInput").text(deviceName + " iPad");
        $.post('/api/deviceNames', {
            output: JSON.stringify(value)
        }).then(result => {
            console.log(result);
        })
    }
}

function clearIn() {
    $("#selectedInput").text("NONE SELECTED");
}
function clearOut() {
    $("#selectedOutput").text("NONE SELECTED");
}