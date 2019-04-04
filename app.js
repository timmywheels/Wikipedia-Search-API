function submit() {
    const wikiQuery = document.getElementById('query').value;
    var cors = "https://cors-anywhere.herokuapp.com/";
    var api = cors + "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiQuery + "&limit=10&namespace=0&format=json&origin=*&utf8=&format=json";

    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            data[1].forEach(function(item) {
                const listNode = document.createElement('li');
                listNode.innerHTML = item;
                listNode.className = 'listElement';
                var t = document.createTextNode("");
                var para = document.createElement('p');
                para.className = "pElement";
                var h = document.createElement("h1");
                h.className = "h1Element";
                listNode.appendChild(h);
                para.appendChild(t);
                listNode.appendChild(para);
                document.getElementById("list").appendChild(listNode);
                
            });
            var named = document.getElementById("list");
            var tags = named.getElementsByTagName("p");
            for (var i = 0; i < tags.length; i++) {
                tags[i].innerHTML = data[2][i];
            }
            
            var h1tags = named.getElementsByTagName("h1");
            for (var i = 0; i < h1tags.length; i++) {
                h1tags[i].innerHTML= `<a href = ${data[3][i]}>${data[3][i]}</a>;`;
            }
        });
    document.getElementById("container").style.display = "none";
    document.getElementById("button-home").style.display = "block";
}
function home() {
    location.reload();
}
