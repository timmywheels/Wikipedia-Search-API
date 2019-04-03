function submit() {
    const wikiQuery = document.getElementById('query').value;
    var api = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiQuery + "&format=json&callback=?";

    fetch(api).then(response => response)
        .then(data => {
            console.log(data);
        });
}