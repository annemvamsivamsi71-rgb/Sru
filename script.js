function showMessage() {
    alert("Welcome to Campus Carpool Matching Board!");
}

function findRide() {
    let name = document.getElementById("name").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;

    if (name === "" || from === "" || to === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    let rideData = {
        name: name,
        from: from,
        to: to,
        date: date
    };

    firebase.database().ref("rides").push(rideData);

    document.getElementById("result").innerHTML =
        "<h3>Ride Request Submitted Successfully!</h3>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>From:</b> " + from + "</p>" +
        "<p><b>Destination:</b> " + to + "</p>" +
        "<p><b>Date:</b> " + date + "</p>";
}