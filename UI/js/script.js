function loadDoc() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var mangmtImg = document.getElementsByClassName('management__img');
            mangmtImg[0].getElementsByTagName("img")[0].src = JSON.parse(this.responseText).data[0].url;
            document.getElementById("name").innerHTML = JSON.parse(this.responseText).data[0].name;
            document.getElementById("designation").innerHTML = JSON.parse(this.responseText).data[0].designation;
            document.getElementById("boxtextone").innerHTML = JSON.parse(this.responseText).data[0].boxtextone;
            document.getElementById("boxvalueone").innerHTML = JSON.parse(this.responseText).data[0].boxvalueone;
            document.getElementById("boxtexttwo").innerHTML = JSON.parse(this.responseText).data[0].boxtexttwo;
            document.getElementById("boxvaluetwo").innerHTML = JSON.parse(this.responseText).data[0].boxvaluetwo;
            //    document.getElementById("management-data").innerHTML = data.data;
        }
    };
    xhttp.open("GET", "./js/management.json", true);
    xhttp.send();
}


loadDoc();
