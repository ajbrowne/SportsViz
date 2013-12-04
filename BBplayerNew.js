google.load('visualization', '1', {packages: ['corechart']});

var strings = new Array();
 for(i=0;i<11;i++){
      strings[i]=0;
    }


var name;
var query="";
var title;

var dataSourceUrl='https://docs.google.com/spreadsheet/tq?key=0Av1GLm4EhP6TdDRVSk1zUE5ka3IyQVpVUlFpLTR5T0E&tq=';
//var values = new Array("'Games Played'","Goals","Assists","Points","PIMS","PPG","SHG","ENG","GWG","GTG","Shots");
//strings[0]=1;
//strings[10]=1;
var visualization;
var values = new Array("'Games Played'","B","C","D","E","F","G","H","I");
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
    //strings[1]=1;
      //strings[2]=1;
   
}
    
function updateViz(){
      

     
    var fields = getQuery();
    //var fullQuery = "SELECT Name, Goals, Assists, Points FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name IN ("+query+")";
  
     var fullQuery = "SELECT A"+fields;
    
    var sendQuery = new google.visualization.Query(dataSourceUrl+fullQuery);
    //document.getElementById("modalTitle").innerHTML=fullQuery;
    //visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
    //updateTitle();
    //document.getElementById("playerName").innerHTML=fullQuery;
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
     if(count!=0){
          document.getElementById("playerName").innerHTML=title+"<small> MTU</small>";
     } else {
          document.getElementById("playerName").innerHTML="Michigan Tech Hockey";
     }
    }
    
    function drawViz(){
     dataSourceUrl='https://docs.google.com/spreadsheet/tq?'+window.location.search.substring(1)+'&tq=';
      var query = "select A, B, C";
      
      var query = new google.visualization.Query(dataSourceUrl+query);
      visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
      query.send(handleQueryResponse);
      //alert(window.location.search.substring(1));
      
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
   var message = "Chart Options";

   //For each checkbox see if it has been checked, record the value.
   // if(document.getElementById("points").checked){
   //  message=message+"@@@";
    //strings[3]=1;
   // }
   
   
      
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
         if(document.getElementById("saves").checked){
          strings[5]=1;
        } else {
          strings[5]=0;
        }
         if(document.getElementById("gm").checked){
          strings[6]=1;
        } else {
          strings[6]=0;
        }
         if(document.getElementById("ga").checked){
          strings[7]=1;
        } else {
          strings[7]=0;
        }
         
      
   
   
   
   document.getElementById("modalTitle").innerHTML=message;
   updateViz();
  }
    

    google.setOnLoadCallback(drawViz);
    