function sendInvite(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log('added');
        }
    };
    
    try {
        var nameFirst = document.getElementById('firstname').value;
        var nameLast = document.getElementById('surname').value;
        var numberPeople = document.getElementById('number').value;
        var arrivalStatus = document.querySelector('input[name="Status"]:checked').value;
        xhttp.open("POST", "registration", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify({ firstname: nameFirst, surname: nameLast, number: numberPeople, status: arrivalStatus }));

        document.getElementById('downHead').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    } catch (exception) {
        // Not all fields had a value
        document.getElementById('fail').innerHTML = 'Du måste fylla i alla fält';
    }

}