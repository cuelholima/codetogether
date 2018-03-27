
function loadDoc(url) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("model").innerHTML = this.responseText;
        }
    };
    xhttp.open("get", url, true);
    xhttp.send();
}