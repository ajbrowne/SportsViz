google.load('visualization', '1', {packages: ['corechart']});
google.load('visualization', '1', {packages:['table']});
google.load('visualization', '1', {packages: ['gauge']});


var strings = new Array();
 for(i=0;i<11;i++){
      strings[i]=0;
    }


var name;
var query="";
var title;

var dataSourceUrl='https://docs.google.com/spreadsheet/tq?key=0Av1GLm4EhP6TdEQ0M2pZN1U0Ym1UTkNRNHROUGh1Y2c&tq=';
//var values = new Array("'Games Played'","Goals","Assists","Points","PIMS","PPG","SHG","ENG","GWG","GTG","Shots");
//strings[0]=1;
//strings[10]=1;
var visualization,visualization2,visualization3,visualization4;

    
    function drawViz(){
      var query = "select A, SUM(F), SUM(G)GROUP BY A label SUM(F) 'Goals', SUM(G) 'Assists'";
      
      var query = new google.visualization.Query(dataSourceUrl+query);
      visualization = new google.visualization.BarChart(document.getElementById('visualization_div'));
      query.send(handleQueryResponse);
      drawVisualizationPie();
      drawVisualizationPie2();
      drawVisualizationGauge();
      drawVisualizationTable();
      drawVisualizationTable2();
      drawVisualizationTable3();
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
        isStacked: 'true',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }
    
   
  
  
  function drawVisualizationPie(){
      query="",i;
      var count = 0;
     //alert(playerSearch.options.length);
      
      var query2 = "select A,sum(I) group by A";
      /*var query2 = "select A,sum(I) group by A";*/
  
      var query2 = new google.visualization.Query(dataSourceUrl+query2);
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
        legend: 'none',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }
    
function drawVisualizationPie2(){
      var query3 = "select A,sum(H) group by A";
  
      var query3 = new google.visualization.Query(dataSourceUrl+query3);
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
       
        legend: 'none',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }
    
    var visualizationTable;
function drawVisualizationTable(){
  var queryTable = "select A,sum(H) group by A order by sum(H) desc limit 5 label sum(H) 'Points'";
  
      var queryTable = new google.visualization.Query(dataSourceUrl+queryTable);
     
      visualizationTable = new google.visualization.Table(document.getElementById('div_table'));
      
      queryTable.send(handleQueryResponseTable);
}

function handleQueryResponseTable(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }
      var data = response.getDataTable();
      
      visualizationTable.draw(data, {
       
        legend: 'bottom',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }
    
var visualizationTable2;
function drawVisualizationTable2(){
  var queryTable = "select A,(sum(F)/sum(P)) group by A order by (sum(F)/sum(P)) desc limit 5 label (sum(F)/sum(P)) 'Goals per Shot'";
  
      var queryTable = new google.visualization.Query(dataSourceUrl+queryTable);
     
      visualizationTable2 = new google.visualization.Table(document.getElementById('div_table2'));
      
      queryTable.send(handleQueryResponseTable2);
}

function handleQueryResponseTable2(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }
      var data = new google.visualization.DataTable();
      data.addColumn('string','Name');
      data.addColumn('number','Goals per shot');
       data = response.getDataTable();
      //data.setCell(0,0,'Name');
      //data.setCell(0,1,'Goals per shot');
      //data.addColumn('number','Goals per shot');
      visualizationTable2.draw(data, {
       
        legend: 'bottom',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }
    
var visualizationTable3;
function drawVisualizationTable3(){
  var queryTable = "select D,sum(F) group by D label sum(F) 'Goals'";
  
      var queryTable = new google.visualization.Query(dataSourceUrl+queryTable);
     
      visualizationTable3 = new google.visualization.Table(document.getElementById('div_table3'));
      
      queryTable.send(handleQueryResponseTable3);
}

function handleQueryResponseTable3(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }
      var data = new google.visualization.DataTable();
       data = response.getDataTable();
      visualizationTable3.draw(data, {
       
        legend: 'bottom',
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }

function drawVisualizationGauge(){
      var query4 = "select sum(J) label sum(J) ''";
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
        redFrom: -20, redTo: -15,
          greenFrom:15, greenTo: 20,
          minorTicks: 10,
          min:-20, max:20,
        animation:{
          duration: 1000,
          easing: 'out',
        },
      });
    }

    google.setOnLoadCallback(drawViz);
    