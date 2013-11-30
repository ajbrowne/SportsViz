google.load('visualization', '1', {packages: ['corechart']});
    function drawVisualization() {
      if($('#playerSearch').val()==""){
        document.getElementById("playerName").innerHTML="MTU Hockey";
           var queryText = encodeURIComponent("SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Total Points by Player",
          "vAxis": {"title": "Name"},
          "hAxis": {"title": "Points"},
          "isStacked": "true"
        }
      }); 
        } else {
            document.getElementById("playerName").innerHTML=$('#playerSearch').val();
      var queryText = encodeURIComponent("SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name = '"+$('#playerSearch').val()+"'",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Total Points by Player",
          "vAxis": {"title": "Name"},
          "hAxis": {"title": "Points"},
          "isStacked": "true"
        }
      });
    }
    }
    
    function drawVisualization2() {
        if($('#playerSearch').val()==""){
            document.getElementById("playerName").innerHTML="MTU Hockey";
           var queryText = encodeURIComponent("SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Total Points by Player",
          "vAxis": {"title": "Name"},
          "hAxis": {"title": "Points"},
          "isStacked": "true"
        }
      }); 
        } else {
            document.getElementById("playerName").innerHTML=$('#playerSearch').val()+"<small> MTU</small>";
      var queryText = encodeURIComponent("SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name = '"+$('#playerSearch').val()+"'",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Total Points by Player",
          "vAxis": {"title": "Name"},
          "hAxis": {"title": "Points"},
          "isStacked": "true"
        }
      });
    }
    drawVisualizationPie();
    }

function drawVisualizationPie(){
      var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?key=0Av1GLm4EhP6TdEJWbWVpWjFrMXI4N0pHUGVCclJEMVE&tq=';
      
      var query = "select A,sum(I) group by A";
  
      var query = new google.visualization.Query(dataSourceUrl+query);
      visualization = new google.visualization.PieChart(document.getElementById('penalty_div'));
      query.send(handleQueryResponsePie);
    }
    
    function handleQueryResponsePie(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDataTable();
      visualization.draw(data, {
        legend: 'bottom',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }


    google.setOnLoadCallback(drawVisualization);
    
    