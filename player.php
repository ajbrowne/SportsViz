<!DOCTYPE html>
<html>
  <head>
    <title>Sports Viz</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="/Users/thecrazycamper/Documents/Bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <style>
            
            body{
              margin-top: 60px;
                background-color:#ffffff;
                width: 80%;
                margin-left:auto;
                margin-right:auto;
                
            }
            
            footer{
                padding-top:5px;
                padding-left:11px;
                padding-right:11px;
                padding-bottom:11px;
                color: #ffffff;
            }
            
            #mainFrame{
              /*background-color: #ffffff;*/
              padding-bottom: 0px;
              
              
            }
            
            #mainFrame playerHeader{
              /*background-color: #ffffff;*/
              padding-top: 0px;
              
            }
            
            #break{
                border-bottom: solid 1px;
            }
            
            #buffer{
                /*background-image: -webkit-linear-gradient(top,#dddddd,#000000);
                background-image: -moz-linear-gradient(top,#dddddd,#000000);*/
                height:6px;
            }
            
            #hello{
                height:225px;
            }
            #about{
                color: #ffffff;
                
            }
            #about p{
                width: 60%;
            }
            #education{
                padding-top: 40px;
                /*background: #000000;*/
                /*background-image: -webkit-linear-gradient(top,#000000,#323232);
                background-image: -moz-linear-gradient(top,#000000,#323232);*/
                color: #ffffff;
            }
            #education dl dd{
                color: #dddddd;
            }
            #education-contents{
                padding:22px;
                padding-top:0px;
            }
            #class-cs2{
                width: 25%;
                border: 0px;
                border-color: transparent;
            }
            #work{
                padding-top:40px;
                /*background: #323232;*/
                /*background-image: -webkit-linear-gradient(top,#323232,#4c4c4c);
                background-image: -moz-linear-gradient(top,#323232,#4c4c4c);*/
            }
            #work h1{
                color: #ffffff;
            }
            #work h2{
                color: #ffffff;
            }
            #work2013{
                /*background-image: -webkit-linear-gradient(top,#4c4c4c,#5d5d5d);
                background-image: -moz-linear-gradient(top,#4c4c4c,#5d5d5d);*/
                /*background: #4c4c4c;*/
            }
            #work2012{
                /*background-image: -webkit-linear-gradient(top,#5d5d5d,#6e6e6e);
                background-image: -moz-linear-gradient(top,#5d5d5d,#6e6e6e);*/
                /*background: #5d5d5d;*/
            }
            #work2011{
                /*background-image: -webkit-linear-gradient(top,#6e6e6e,#7f7f7f);
                background-image: -moz-linear-gradient(top,#6e6e6e,#7f7f7f);*/
                /*background: #6e6e6e;*/
            }
            @media (max-width: 480px) {
               body{
                width: 100%;
               }
               
               #about p{
                width: 100%;
                }
            
                #break{
                    border-bottom: solid 1px;
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                #workbox{
                    width: auto;
                    margin-right: 24px;
                }
            }
            
            /* CS Class Descriptions */
            #cs1{color: #979797;}
            #cs2{color: #979797;}
            #cs3{color: #979797;}
            #cs4{color: #979797;}
            #cs5{color: #979797;}
            
            /* Economics Class Descriptions */
            #ec1{color: #979797;}
            #ec2{color: #979797;}
            #ec3{color: #979797;}
            #ec4{color: #979797;}
           
            #2011row{
                padding-right: 20px;
            }
            
            
        </style>
        
  
  
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript" src="./chart2.js"></script>
    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="/Users/thecrazycamper/Documents/Bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/twitterbootstrap/js/bootstrap-tab.js"></script>
      <link rel="import" href="/header.html">
  </head>
  <?php include("header.html");?>
  
<body data-spy="scroll" data-target="#menubar">
    
    <!--<ul id="myTab" class="nav nav-tabs">
              <li class="active"><a href="#points" data-toggle="tab">Points</a></li>
              <li><a href="#player" data-toggle="tab">Player</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div class="tab-pane fade in active" id="points">
                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
              </div>
              <div class="tab-pane fade" id="player">
                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
              </div>

            </div>-->
  <div class="container-fluid" id="mainFrame">
    <div class="span5" id="playerHeader">
      <h1 id="playerName">Player Name <small>MTU</small></h1>
    </div>
    <div class="span2 offset1">
     <input type="text" class="search-query" placeholder="Search for Players" id="playerSearch">
    </div>
    <div class="span2 offset1">
      <button class="btn btn-primary" onclick="drawVisualization2()">Submit</button>
    </div>
  </div> 
  <div class="container-fluid" id="visualization_div" style="align: center; width: 100%; height: 600px;"></div>
  
 
 

 
 
    
  </body>
 <div id="buffer"></div>
  <footer>
    <center>
    Baja Enterprises<br>
    <small><font color="#8f8f8f">engineering | development | design</font></small><br>
    </center>
  </footer>
  
</html>