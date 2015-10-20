$.ajax({
  url: "https://api.myjson.com/bins/20gec",
  type: 'GET',
  data: {
    format: 'json'
  },
  error: function(){
    alert('An error has occurred');
  },
  success: function(results){
    console.log(results);
  }
});
