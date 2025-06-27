var searchBtn = document.getElementById('searchBtn');
searchBtn.onclick = function() {
    var data = ["Result Found", "Result Not Found"];
    var index = Math.floor(Math.random() * 2);
    var result = data[index];
    var searchResult = document.getElementById('searchResult');
    searchResult.innerText = result;
};
