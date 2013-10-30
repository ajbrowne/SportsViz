google.load('visualization', '1', {packages: ['corechart']});

var visualization;
  
function drawVisualization() {
  // To see the data that this visualization uses, browse to
  // http://spreadsheets.google.com/ccc?key=pCQbetd-CptGXxxQIG7VFIQ
  var query = new google.visualization.Query(
      'https://www.google.com/fusiontables/gvizdata?tq=SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0');

  // Apply query language.
  //query.setQuery('SELECT A,D WHERE D > 100 ORDER BY D');

  // Send the query with a callback function.
  visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  //visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
  visualization.draw(data, {legend: 'bottom'});
}

google.setOnLoadCallback(drawVisualization);