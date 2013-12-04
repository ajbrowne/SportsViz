google.load('visualization', '1', {packages: ['corechart']});
google.load('visualization', '1', {packages: ['gauge']});

var strings = new Array();
 for(i=0;i<11;i++){
      strings[i]=0;
    }


var name;
var query="";
var title;
var startDate="";
var endDate="";

var dataSourceUrl='https://docs.google.com/spreadsheet/tq?key=0Av1GLm4EhP6TdEQ0M2pZN1U0Ym1UTkNRNHROUGh1Y2c&tq=';
var dataSourceUrl2=dataSourceUrl;
var dataSourceUrl3=dataSourceUrl;

function setStartEnd(start,end){
     startDate = start;
     endDate = end;
}

var values = new Array("'Games Played'","F","G","H","I","K","L","M","N","O","P");
//strings[0]=1;
//strings[10]=1;
var visualization,visualization2,visualization3,visualization4;

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
    document.getElementById("playerName").innerHTML="Brad Stebner <small> MTU</small>";
   //drawVisualizationPie();
}
    
function updateViz(){
      
      query="",i;
      var count = 0;
     //alert(playerSearch.options.length);
          for (i=0;i<playerSearch.options.length;i++) {
           if (playerSearch.options[i].selected) {
              if(count!=0){
                query = query+",";
              }
                query = query + "'"+ playerSearch.options[i].text + "'";
                count = count +1;
            }
          }
       if(query == ""){
          var fields = getQuery();
          var fullQuery = "SELECT B"+fields+" WHERE B <= '"+endDate+" 00:00:00' AND B >= '"+startDate+" 00:00:00'";
          document.getElementById("playerName").innerHTML = "Michigan Tech Hockey";
       } else {
           var fields = getQuery();
          //var fullQuery = "SELECT Name, Goals, Assists, Points FROM 1gPQDMXOhPIteyigdbatmSdQJNyLH1ofQImUhkU0 WHERE Name IN ("+query+")";
          var fullQuery = "SELECT B"+fields+" WHERE A="+query+" AND B > date '"+startDate+"' AND B < date '"+endDate+"'";//+" 00:00:00' AND B >= '"+startDate+" 00:00:00'";//A IN ("+query+")"; //AND B <= '"+endDate+" 00:00:00' AND B >= '"+startDate+" 00:00:00'";
          updateTitle();
          //document.getElementById("playerName").innerHTML=fullQuery+"<small> MTU</small>";
       }
         var sendQuery = new google.visualization.Query(dataSourceUrl+fullQuery);
          //visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
          sendQuery.send(handleQueryResponse);
          drawVisualizationPie();
      drawVisualizationPie2();
      drawVisualizationGauge();
}
    
    function updateTitle(){
      title="",i;
     var count = 0;
      for (i=0;i<playerSearch.options.length;i++) {
       if (playerSearch.options[i].selected) {
        count = count +1;
          if(count<2){
            title = title + playerSearch.options[i].text + "";
          } else {
            title = count +" Players Selected";
          }
       }
    }
    document.getElementById("playerName").innerHTML=title+"<small> MTU</small>";
    }
    
    function drawViz(){
      //var dataSourceUrl='https://www.google.com/fusiontables/gvizdata?tq=';
      //var query = "SELECT DATE, Assists FROM 1_IN550zppAYGzEFN9KkVKu3SNQxy3NyZ8N0UdRs WHERE DATE >= '08/01/2013 00:00:00'";
      
      //var dataSourceUrl='https://spreadsheets.google.com/a/mtu.edu/tq?key=0AtNHXyRLcru2dFBERm1xY0JPMGRzMF9YWTFOS0JFbnc&tq=';
      
      var query = "select B, I, H WHERE A='Jimmy Davis'";
      
      //https://www.google.com/fusiontables/embedviz?viz=GVIZ&t=TABLE&q=select+col0%2C+col1%2C+col2%2C+col3%2C+col4%2C+col5%2C+col6%2C+col7%2C+col8%2C+col9%2C+col10%2C+col11%2C+col12+from+1_IN550zppAYGzEFN9KkVKu3SNQxy3NyZ8N0UdRs&containerId=gviz_canvas
      
      var query = new google.visualization.Query(dataSourceUrl+query);
      visualization = new google.visualization.LineChart(document.getElementById('visualization_div'));
      query.send(handleQueryResponse);
      
      drawVisualizationPie();
      drawVisualizationPie2();
      drawVisualizationGauge();
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
    //message=message+"Points";
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

function drawVisualizationPie(){
      query="",i;
      var count = 0;
     //alert(playerSearch.options.length);
          for (i=0;i<playerSearch.options.length;i++) {
           if (playerSearch.options[i].selected) {
              if(count!=0){
                query = query+",";
              }
                query = query + "'"+ playerSearch.options[i].text + "'";
                count = count +1;
            }
          }
     
      
      var query2 = "select C,sum(I) WHERE A="+query+" group by C";
      /*var query2 = "select A,sum(I) group by A";*/
  
      var query2 = new google.visualization.Query(dataSourceUrl2+query2);
      visualization2 = new google.visualization.PieChart(document.getElementById('penalty_div'));
      query2.send(handleQueryResponsePie);
    }
    
function handleQueryResponsePie(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDataTable();
      visualization2.draw(data, {
        legend: 'bottom',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }
    
    
    function drawVisualizationPie2(){
     
     query="",i;
      var count = 0;
     //alert(playerSearch.options.length);
          for (i=0;i<playerSearch.options.length;i++) {
           if (playerSearch.options[i].selected) {
              if(count!=0){
                query = query+",";
              }
                query = query + "'"+ playerSearch.options[i].text + "'";
                count = count +1;
            }
          }
     
      
      var query3 = "select C,sum(H) WHERE A="+query+" group by C";
  
      var query3 = new google.visualization.Query(dataSourceUrl3+query3);
      visualization3 = new google.visualization.PieChart(document.getElementById('penalty_div2'));
      query3.send(handleQueryResponsePie2);
    }
    
function handleQueryResponsePie2(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDataTable();
      visualization3.draw(data, {
       
        legend: 'bottom',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }

function drawVisualizationGauge(){
      
      query="",i;
      var count = 0;
     //alert(playerSearch.options.length);
          for (i=0;i<playerSearch.options.length;i++) {
           if (playerSearch.options[i].selected) {
              if(count!=0){
                query = query+",";
              }
                query = query + "'"+ playerSearch.options[i].text + "'";
                count = count +1;
            }
          }
     
      
      var query4 = "select sum(J)  WHERE A="+query+" label sum(J) ''";
  
      var query4 = new google.visualization.Query(dataSourceUrl+query4);
      visualization4 = new google.visualization.Gauge(document.getElementById('pm_gauge'));
      query4.send(handleQueryResponseGauge);
    }
    
function handleQueryResponseGauge(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDataTable();
      visualization4.draw(data, {
        legend:'+/-',
        redFrom: -10, redTo: -5,
          greenFrom:5, greenTo: 10,
          minorTicks: 5,
          min:-10, max:10,
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }

    google.setOnLoadCallback(drawViz);
    