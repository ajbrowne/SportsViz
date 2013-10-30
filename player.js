google.load('visualization', '1', {packages: ['corechart']});

var strings = new Array();
for(i=0;i<11;i++){
  strings[i]=0;
}

var name;
var query="";
var title;

/*var points = document.getElementById("Points"),
        goals = document.getElementById("Goals"),
        assists = document.getElementById("Assists"),
        pims = document.getElementById("PIMS"),
        ppg = document.getElementById("PPG"),
        shg = document.getElementById("SHG"),
        eng = document.getElementById("ENG"),
        gwg = document.getElementById("GWG"),
        gtg = document.getElementById("GTG"),
        shots = document.getElementById("Shots");
        
        
        goals.addEventListener("click", changeState, false);
        assists.addEventListener("click", changeState, false);
        pims.addEventListener("click", changeState, false);
        ppg.addEventListener("click", changeState, false);
        shg.addEventListener("click", changeState, false);
        eng.addEventListener("click", changeState, false);
        gwg.addEventListener("click", changeState, false);
        gtg.addEventListener("click", changeState, false);
        shots.addEventListener("click", changeState, false);*/

var values = new Array("'Games Played'","Goals","Assists","Points","PIMS","PPG","SHG","ENG","GWG","GTG","Shots");
strings[0]=1;
strings[10]=1;
var visualization;

//var chart = new google.visualization.BarChart(document.getElementById('visualization_div'));
    function drawVisualization() {
      var fields = getQuery();
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
            document.getElementById("playerName").innerHTML="MTU Hockey";
           var queryText = encodeURIComponent("SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Total Points by Player",
          "vAxis": {"title": "Name"},
          "hAxis": {"title": "Points"},
          "isStacked": "false"
        },
        "animation":{"duration": 1000, "easing": "out"}
      });
    }
    }
    
    function init(){
      points.onclick = function() {
        if(strings[3]==1){
          strings[3]=0;
        } else {
          strings[3]=1;
        }
        updateViz();
      }
    }
    
    function updateViz(){
      var dataSourceUrl='https://www.google.com/fusiontables/gvizdata?tq=';
      
      query="",i;
      var count = 0;
      for (i=0;i<playerSearch.options.length;i++) {
       if (playerSearch.options[i].selected) {
          if(count!=0){
            query = query+",";
          }
            query = query + "'"+ playerSearch.options[i].text + "'";
            count = count +1;
        }
      }
    
    var fields = getQuery();
    //var fullQuery = "SELECT Name, Goals, Assists, Points FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name IN ("+query+")";
    var fullQuery = "SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name IN ("+query+")";
    var sendQuery = new google.visualization.Query(dataSourceUrl+fullQuery);
    //visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
    updateTitle();
    sendQuery.send(handleQueryResponse);
    }
    
    function updateTitle(){
      title="",i;
     var count = 0;
      for (i=0;i<playerSearch.options.length;i++) {
       if (playerSearch.options[i].selected) {
        count = count +1;
          if(count<2){
            title = title + playerSearch.options[i].text + "<br>";
          } else {
            title = count +" Players Selected";
          }
       }
    }
    document.getElementById("playerName").innerHTML=title+"<small> MTU</small>";
    }
    
    function drawViz(){
      var dataSourceUrl='https://www.google.com/fusiontables/gvizdata?tq=';
      var query = "SELECT Name, Goals, Assists FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0";
      
      var query = new google.visualization.Query(dataSourceUrl+query);
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
      visualization.draw(data, {legend: 'bottom',animation:{
        duration: 1000,
        easing: 'out',
      },});
    }
    
    var points = document.getElementById("Points"),
        goals = document.getElementById("Goals"),
        assists = document.getElementById("Assists"),
        pims = document.getElementById("PIMS"),
        ppg = document.getElementById("PPG"),
        shg = document.getElementById("SHG"),
        eng = document.getElementById("ENG"),
        gwg = document.getElementById("GWG"),
        gtg = document.getElementById("GTG"),
        shots = document.getElementById("Shots");
        
      
    
    
    function getQuery(){
      var str = "";
      for (i=0;i<11;i++){
        if(strings[i]==1){
          str=str+ ", "+values[i];
        }
      }
      return str;
    }
    
    
    function drawVisualization2() {
      name = $('#playerSearch').val();
      //var e = document.getElementById("playerSearch");
      //var strUser = e.options[e.selectedIndex].text;
      var fields = getQuery();
      query="",i;
      var count = 0;
      for (i=0;i<playerSearch.options.length;i++) {
       if (playerSearch.options[i].selected) {
          if(count!=0){
            query = query+",";
          }
            query = query + "'"+ playerSearch.options[i].text + "'";
            count = count +1;
       }
    }
    
     title="",i;
     count = 0;
      for (i=0;i<playerSearch.options.length;i++) {
       if (playerSearch.options[i].selected) {
        count = count +1;
          if(count<2){
            title = title + playerSearch.options[i].text + "<br>";
          } else {
            title = count +" Players Selected";
          }
       }
    }
    
      //str=str+"'";
      //var name2 = name.replace(/,/g , "','");
      //var newchar = '|';
      //var name2 = name.split(',').join(newchar);
        if($('#playerSearch').val()==""){
            document.getElementById("playerName").innerHTML="MTU Hockey";
           var queryText = encodeURIComponent("SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Total Points by Player",
          "vAxis": {"title": "Name"},
          "hAxis": {"title": "Points"},
          "isStacked": "false"
        },
        "animation":{"duration": 1000, "easing": "out"}
      }); 
        } else {
        document.getElementById("playerName").innerHTML=title+"<small> MTU</small>";
        var queryText = encodeURIComponent("SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
        google.visualization.drawChart({
          "containerId": "visualization_div",
          "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
          "query":"SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name IN ("+query+")",
          "refreshInterval": 5,
          "chartType": "BarChart",
          "options": {
            "title":"Total Points by Player",
            "vAxis": {"title": "Name"},
            "hAxis": {"title": "Points"},
            "isStacked": "false"
          },
        "animation":{"duration": 1000, "easing": "out"}
        });
    }
    }
    
    
    function drawVisualization3() {
      //name = $('#playerSearch').val();
      //var e = document.getElementById("playerSearch");
      //var strUser = e.options[e.selectedIndex].text;
      var fields = getQuery();
      
    
      //str=str+"'";
      //var name2 = name.replace(/,/g , "','");
      //var newchar = '|';
      //var name2 = name.split(',').join(newchar);
        if($('#playerSearch').val()==""){
            document.getElementById("playerName").innerHTML="MTU Hockey";
           var queryText = encodeURIComponent("SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0",
        "refreshInterval": 5,
        "chartType": "BarChart",
        "options": {
          "title":"Total Points by Player",
          "vAxis": {"title": "Name"},
          "hAxis": {"title": "Points"},
          "isStacked": "false"
        }
      }); 
        } else {
        document.getElementById("playerName").innerHTML=fields+"<small> MTU</small>";
        var queryText = encodeURIComponent("SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0");
        google.visualization.drawChart({
          "containerId": "visualization_div",
          "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
          "query":"SELECT Name"+fields+" FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name IN ("+query+")",
          "refreshInterval": 5,
          "chartType": "BarChart",
          "options": {
            "title":"Total Points by Player",
            "vAxis": {"title": "Name"},
            "hAxis": {"title": "Points"},
            "isStacked": "false"
          }
        });
    }
    }
    
    function statPress(){
      var points = document.getElementById("Points"),
        goals = document.getElementById("Goals"),
        assists = document.getElementById("Assists"),
        pims = document.getElementById("PIMS"),
        ppg = document.getElementById("PPG"),
        shg = document.getElementById("SHG"),
        eng = document.getElementById("ENG"),
        gwg = document.getElementById("GWG"),
        gtg = document.getElementById("GTG"),
        shots = document.getElementById("Shots");
        
        
        goals.addEventListener("click", changeState, false);
        assists.addEventListener("click", changeState, false);
        pims.addEventListener("click", changeState, false);
        ppg.addEventListener("click", changeState, false);
        shg.addEventListener("click", changeState, false);
        eng.addEventListener("click", changeState, false);
        gwg.addEventListener("click", changeState, false);
        gtg.addEventListener("click", changeState, false);
        shots.addEventListener("click", changeState, false);
    }
    
    function changeState(event){
      var source = event.target.id;
      if(source == "Points"){
        if(strings[3]==1){
          strings[3]=0;
        } else {
          strings[3]=1;
        }
      } else if (source == "Goals"){
        if(strings[1]==1){
          strings[1]=0;
        } else {
          strings[1]=1;
        }
      } else if (source =="Assists"){
         if(strings[2]==1){
          strings[2]=0;
        } else {
          strings[2]=1;
        }
      } else if (source =="PIMS"){
         if(strings[4]==1){
          strings[4]=0;
        } else {
          strings[4]=1;
        }
      } else if (source =="PPG"){
         if(strings[5]==1){
          strings[5]=0;
        } else {
          strings[5]=1;
        }
      } else if (source =="SHG"){
         if(strings[6]==1){
          strings[6]=0;
        } else {
          strings[6]=1;
        }
      } else if (source =="ENG"){
         if(strings[7]==1){
          strings[7]=0;
        } else {
          strings[7]=1;
        }
      } else if (source =="GWG"){
         if(strings[8]==1){
          strings[8]=0;
        } else {
          strings[8]=1;
        }
      } else if (source =="GTG"){
         if(strings[9]==1){
          strings[9]=0;
        } else {
          strings[9]=1;
        }
      }  else if (source =="Shots"){
         if(strings[10]==1){
          strings[10]=0;
        } else {
          strings[10]=1;
        }
      }
    }
    
    function pressPoints(){ strings[3]=1;
    drawVisualization3();}
    /*function pressGoals(){ strings[]=1; }
    function pressAssists(){ strings[]=1; }
    function pressPenaltyMinutes(){ strings[]=1; }
    function pressPowerplayGoals(){ strings[]=1; }
    function pressShorthandedGoals(){ strings[]=1; }
    function pressENG(){ strings[]=1; }
    function pressGWG(){ strings[]=1; }
    function pressGTG(){ strings[]=1; }
    function pressShots(){ strings[]=1; }
    function pressGamesPlayed(){ strings[]=1; }*/

    google.setOnLoadCallback(drawViz);
    