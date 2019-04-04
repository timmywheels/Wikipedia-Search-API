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
                document.getElementById("list").appendChild(listNode);
            });
            data[2].forEach(function(item) {
                    var para = document.createElement('P');
                    var t = document.createTextNode(item);
                    para.appendChild(t);
                    document.getElementsByTagName('li').appendChild(para);


                });
        });
}
