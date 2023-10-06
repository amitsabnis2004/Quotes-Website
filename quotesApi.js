function newQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('quoteContainer').innerHTML = data.content;
    })
    .catch(error => console.log(error));
}