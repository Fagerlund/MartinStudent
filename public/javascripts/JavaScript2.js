// Initialize application
init();

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function switchView() {
    document.getElementById('downHead').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

function init() {
    var firstname = getCookie('firstname');
    var lastname = getCookie('lastname');
    var status = getCookie('status');
    if (firstname && lastname && status) {
        document.getElementById('downHead').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('firstname').value = firstname;
        document.getElementById('surname').value = lastname;
    }
}

function sendInvite() {
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

function changePrefix() {
    var number = document.getElementById('number');
    var prefix = 'Jag ';
    if (number.value > number.defaultValue) {
        prefix = 'Vi ';
    }
    document.getElementById('kommer').innerHTML = prefix + 'kommer';
    document.getElementById('kommerInte').innerHTML = prefix + 'kommer inte';
    document.getElementById('kommerKanske').innerHTML = prefix + 'kommer kanske';
};

$("#boxshow > div:gt(0)").hide();
setInterval(function () {
    $('#boxshow > div:first')
      .fadeOut(1000)
      .next()
      .delay(500).fadeIn(1000)
      .end()
      .appendTo('#boxshow');
}, 3000);
