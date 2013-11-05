google.load('visualization', '1', {packages: ['corechart']});

var strings = new Array();
 for(i=0;i<11;i++){
      strings[i]=0;
    }


var name;
var query="";
var title;


var values = new Array("'Games Played'","Goals","Assists","Points","PIMS","PPG","SHG","ENG","GWG","GTG","Shots");
//strings[0]=1;
//strings[10]=1;
var visualization;

  //window.onload = init();
function init(){
      /*points.onclick = function() {
        if(strings[3]==1){
          strings[3]=0;
        } else {
          strings[3]=1;
        }
        //updateViz();
      }*/
      
      //Turn on some options so the code doesn't die when player is selected
      strings[1]=1;
      strings[2]=1;
    
   
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
    var fullQuery = "SELECT DATE"+fields+" FROM 1_IN550zppAYGzEFN9KkVKu3SNQxy3NyZ8N0UdRs WHERE NAME = "+query;
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
      var query = "SELECT DATE, Assists FROM 1_IN550zppAYGzEFN9KkVKu3SNQxy3NyZ8N0UdRs WHERE NAME = 'Blake Hietala'";
      
      //https://www.google.com/fusiontables/embedviz?viz=GVIZ&t=TABLE&q=select+col0%2C+col1%2C+col2%2C+col3%2C+col4%2C+col5%2C+col6%2C+col7%2C+col8%2C+col9%2C+col10%2C+col11%2C+col12+from+1_IN550zppAYGzEFN9KkVKu3SNQxy3NyZ8N0UdRs&containerId=gviz_canvas
      
      var query = new google.visualization.Query(dataSourceUrl+query);
      visualization = new google.visualization.LineChart(document.getElementById('visualization_div'));
      query.send(handleQueryResponse);
    }
    
    function handleQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDataTable();
      //visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
      visualization.draw(data, {
        legend: 'bottom',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
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
    
function update(){
  //var frm = document.querySelectorAll(".btn-group > button.btn");
   var message = "Your chose: ";

   //For each checkbox see if it has been checked, record the value.
   if(document.getElementById("points").checked){
    message=message+"@@@";
    //strings[3]=1;
   }
   
   
      
  if(document.getElementById("points").checked){
    strings[3]=1;
  } else {
    strings[3]=0;
  }
      
      
     
        if(document.getElementById("goals").checked){
          strings[1]=1;
        } else {
          strings[1]=0;
        }
      
         if(document.getElementById("assists").checked){
          strings[2]=1;
        } else {
          strings[2]=0;
        }
         if(document.getElementById("pims").checked){
          strings[4]=1;
        } else {
          strings[4]=0;
        }
         if(document.getElementById("ppg").checked){
          strings[5]=1;
        } else {
          strings[5]=0;
        }
         if(document.getElementById("shg").checked){
          strings[6]=1;
        } else {
          strings[6]=0;
        }
         if(document.getElementById("eng").checked){
          strings[7]=1;
        } else {
          strings[7]=0;
        }
         if(document.getElementById("gwg").checked){
          strings[8]=1;
        } else {
          strings[8]=0;
        }
         if(document.getElementById("gtg").checked){
          strings[9]=1;
        } else {
          strings[9]=0;
        }
         if(document.getElementById("shots").checked){
          strings[10]=1;
        } else {
          strings[10]=0;
        }
      
   
   
   
   document.getElementById("modalTitle").innerHTML=message;
   updateViz();
  }
    

    google.setOnLoadCallback(drawViz);
    