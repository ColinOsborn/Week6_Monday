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
    console.log(results.data[1].name);
    var name = results.data[1].name;
    $("body").append("<h1>"+name+"</h1>");
    console.log(results.data[0].name);

    var states = results.data;
    for(i=0; i<states.length; i++) {
      console.log(states[i].name, states[i].capital, states[i].enteredUnion, states[i].population);
      var name = states[i].name;
      var cap = states[i].capital;
      var entered = states[i].enteredUnion;
      var pop = states[i].population;
      $("body").append("<h1>"+name+"</h1>");
      $("body").append("<h3>"+cap+"</h3>");
      $("body").append("<h4>"+entered+"</h4>");
      $("body").append("<h4>"+pop+"</h4>");
    }
      var flag = results.data[0].symbols[1].flag;
      console.log(results.data[0].symbols[1].flag);
      $("body").append("<img>."+flag);
    //var flag = results.data[i].symbols[1].name;
    //["data"][0]["symbols"][1]["flag"]
     //$("body").append("img"+flag);
  }
});
