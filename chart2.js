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
    }

    google.setOnLoadCallback(drawVisualization);
    
    