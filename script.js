$('#search-button').on('click', function () {
  $.getJSON('https://newsapi.org/v2/')
    $.ajax({
url : 'https://newsapi.org/v2/',
type: 'get',
dataType: 'json',
data: {
    'apikey' : '004a8a961b74417c86f2406034bc5d92',
    'country' :'id'
},
success: function (result) {
if (result.Response == "True") {
    let movies = result.Search;

    $.each(movies, function (i,data) {
        $('#movie-list').append(`
        <div class="card" >
  <img class="card-img-top" src="`+data.urlToImage +`" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `)
    });

}else {
    $('#movie-list').getJSON(
    <div class="col">
    <h1 class="text-center">`+ result.Error +`</h1>
    </div>
    )
    }
}
   });
});
