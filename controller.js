function redirectToSf() {
    setTimeout(function() {
        window.location.href = "https://login.salesforce.com/services/oauth2/authorize?client_id=3MVG9ZF4bs_.MKuhz4g8P5ekGrXioDA_DRHzFk.YxjkXAEJCpF0HxAOy7z1ORStgvz1EItya.hunm.6NEdNa3&redirect_uri=https://dinostagno.github.io/Kepler-1b/&response_type=code";
    }, 1000);
}
function accessDataSf() {
    var http = new XMLHttpRequest();
    var url = 'https://login.salesforce.com/services/oauth2/token';
    var params = 'grant_type=password&client_id=3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn&client_secret=5CC14D5C61AB61C49E16DE550455A03AFB12B578F88B32D548BD5585F5707E54&username=dpaolostagno@gmail.com&password=ArchBash@2022e4P0ast5TIaxNmQgo5r1hO0Mh';
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin', 'https://dinostagno.github.io');

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}
function accessDataSf2() {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 00D2E000000mpVn!ARIAQOqHuHVOEbUYjwAV44oDlKFb6si2f7qKTwVFIb_japx9N.y7Ugha3ZZ5MULi9suwF_TTdLx6V8LfsphqaPNUMP6eLHBw'
        },
        body: JSON.stringify({ Name: 'Cristian barria2' })
    };
    fetch('https://dinostagno-dev-ed.my.salesforce.com/services/data/v39.0/sobjects/Account/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}