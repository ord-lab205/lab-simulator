var id = 1; // Table ID
var myVar;  // setTimeInterval function
var pos = 0;
var pos2=0;
var elem = document.getElementById("myAnimation");   
const elem2 = document.getElementById("myAnimation2");
function myMove() {
  // var elem = document.getElementById("myAnimation");   
  // const elem2 = document.getElementById("myAnimation2");

  var id1 = setInterval(frame, 5);
  // var id2 = setInterval(frame, 5);
  function frame() {
    if (pos == 1465) {
      pos = 0;
      clearInterval(id1);
      document.getElementById('bulb1').src='/css/imgs/gray.png'
      document.getElementById('bulb2').src='/css/imgs/gray.png'
      document.getElementById('bulb3').src='/css/imgs/gray.png'
      document.getElementById('bulb4').src='/css/imgs/gray.png'
      // pos = 0;
      // elem2.style.left = 0 + 'px';
      // myMove();
      myTrain2();



    } else {
      if ((pos == 210) || (pos == 450) 
      ){
          intersection()
      } else {
       if ((pos == 900) || (pos == 1150)){
          residentialarea()
       }
      } 


      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function myTrain2() {
  var id2 = setInterval(frame, 5);
  function frame() {
    if (pos2 == -1465) {
      clearInterval(id2);
      document.getElementById('bulb1').src='/css/imgs/gray.png'
      document.getElementById('bulb2').src='/css/imgs/gray.png'
      document.getElementById('bulb3').src='/css/imgs/gray.png'
      document.getElementById('bulb4').src='/css/imgs/gray.png'
      pos2 = 0;
      elem.style.left = 0 + 'px'; 
      elem2.style.left = 0 + 'px';




    } else {
      if ((pos2 == -210) || (pos2 == -450)){
          tunnel()
      } else{
        if ((pos2== -900) || (pos2 == -1150)){
          bridge()
        }
      } 
      pos2--; 
      elem2.style.left = pos2 + 'px'; 
    }
  }
}


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function random_item(items)
{  
return items[Math.floor(Math.random()*items.length)];    
}




function intersection() {



    var table = document.getElementById("intersection");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);

    cell1.innerHTML = id;  
    id++;

    var vibration1 = randomInteger(100,60);
    var vibration2 = randomInteger(90,60);
    var vibration3 = randomInteger(60,40);
    var noise1 = randomInteger(100,60);
    var noise2 = randomInteger(90,60);
    var noise3 = randomInteger(60,40);
    
    cell3.innerHTML = vibration1;
    cell4.innerHTML = vibration2;
    cell5.innerHTML = vibration3;
    cell6.innerHTML = noise1;
    cell7.innerHTML = noise2;
    cell8.innerHTML = noise3;
    
    var sensorName1 = "Intersection A1";
    var sensorName2 = "Intersection A2";




    if (pos == 210 ){
      cell2.innerHTML = sensorName1;
      cell9.innerHTML = "x축";
      cell10.innerHTML = "y축";
      cell11.innerHTML = "z축";

      pic="/css/imgs/green.png";
     }else 
     if (pos == 450){
       cell2.innerHTML= sensorName2;
       cell9.innerHTML = "x축";
       cell10.innerHTML = "y축";
       cell11.innerHTML = "z축";

       pic="/css/imgs/green.png";
     }

     if (pos == 210) {
        document.getElementById('bulb1').src=pic;
     }else if (pos = 450){
        document.getElementById('bulb2').src=pic;
     }


}






    function residentialarea() {

      var table = document.getElementById("residensialarea");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);
      var cell11 = row.insertCell(10);
  
      cell1.innerHTML = id;
      id++;

      var vibration1 = randomInteger(100,60);
      var vibration2 = randomInteger(90,60);
      var vibration3 = randomInteger(60,40);
      var noise1 = randomInteger(100,60);
      var noise2 = randomInteger(90,60);
      var noise3 = randomInteger(60,40);
      
      cell3.innerHTML = vibration1;
      cell4.innerHTML = vibration2;
      cell5.innerHTML = vibration3;
      cell6.innerHTML = noise1;
      cell7.innerHTML = noise2;
      cell8.innerHTML = noise3;
      
      var sensorName1 = "General A1";
      var sensorName2 = "General A2";
      var sensorName3 = "Residence area A3";
      var sensorName4 = "Residence area A4";
      var sensorName5 = "Tunnel B1";
      var sensorName6 = "Tunnel B2";
      var sensorName7 = "Bridge B3";
      var sensorName8 = "Bridge B4";
  
      if (pos == 900){
        cell2.innerHTML = sensorName3;
        cell9.innerHTML = "<span style='color: green;'> clear </span>";
        cell10.innerHTML = "<span style='color: green;'> clear </span>";
        cell11.innerHTML = "<span style='color: green;'> clear </span>";
        pic="/css/imgs/green.png";

        }else if(pos == 1150){
          cell2.innerHTML = sensorName4;
          cell9.innerHTML = "<span style='color: green;'> clear </span>";
          cell10.innerHTML = "<span style='color: green;'> clear </span>";
          cell11.innerHTML = "<span style='color: green;'> clear </span>";
          pic="/css/imgs/green.png";
          
        }
      
        if (pos == 900) {
            document.getElementById('bulb3').src=pic;
         }else if (pos = 1150){
            document.getElementById('bulb4').src=pic;
         }
  }























      function tunnel() {

        var table = document.getElementById("tunnell");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
    
        cell1.innerHTML = id;
        id++;
  
        var vibration1 = randomInteger(100,60);
        var vibration2 = randomInteger(90,60);
        var vibration3 = randomInteger(60,40);
        var noise1 = randomInteger(100,60);
        var noise2 = randomInteger(90,60);
        var noise3 = randomInteger(60,40);
        
        cell3.innerHTML = vibration1;
        cell4.innerHTML = vibration2;
        cell5.innerHTML = vibration3;
        cell6.innerHTML = noise1;
        cell7.innerHTML = noise2;
        cell8.innerHTML = noise3;
        
        var sensorName1 = "General A1";
        var sensorName2 = "General A2";
        var sensorName3 = "Residence area A3";
        var sensorName4 = "Residence area A4";
        var sensorName5 = "Tunnel B1";
        var sensorName6 = "Tunnel B2";
        var sensorName7 = "Bridge B3";
        var sensorName8 = "Bridge B4";
    
       
       if (pos2 == -210 ){
        cell2.innerHTML = sensorName5;
        cell9.innerHTML = "x축";
        cell10.innerHTML = "y축";
        cell11.innerHTML = "z축";
        pic="/css/imgs/green.png";
       }else 
       if (pos2 == -450){
         cell2.innerHTML= sensorName6;
         cell9.innerHTML = "x축";
         cell10.innerHTML = "y축";
         cell11.innerHTML = "z축";
         pic="/css/imgs/green.png";
       }



       if (pos2 == -250){
        document.getElementById('bulb4').src=pic;
      } else if (pos2 == -450){
        document.getElementById('bulb3').src=pic;
      }


    }



        function bridge() {

          var table = document.getElementById("bridgee");
          var row = table.insertRow(-1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
          var cell8 = row.insertCell(7);
          var cell9 = row.insertCell(8);
          var cell10 = row.insertCell(9);
          var cell11 = row.insertCell(10);
      
          cell1.innerHTML = id;
          id++;
      
          var vibration1 = randomInteger(100,60);
          var vibration2 = randomInteger(90,60);
          var vibration3 = randomInteger(60,40);
          var noise1 = randomInteger(100,60);
          var noise2 = randomInteger(90,60);
          var noise3 = randomInteger(60,40);
          
          cell3.innerHTML = vibration1;
          cell4.innerHTML = vibration2;
          cell5.innerHTML = vibration3;
          cell6.innerHTML = noise1;
          cell7.innerHTML = noise2;
          cell8.innerHTML = noise3;
          
          var sensorName1 = "General A1";
          var sensorName2 = "General A2";
          var sensorName3 = "Residence area A3";
          var sensorName4 = "Residence area A4";
          var sensorName5 = "Tunnel B1";
          var sensorName6 = "Tunnel B2";
          var sensorName7 = "Bridge B3";
          var sensorName8 = "Bridge B4";
      
         
         if (pos2 == -900 ){
          cell2.innerHTML = sensorName7;
          cell9.innerHTML = "x축";
          cell10.innerHTML = "y축";
          cell11.innerHTML = "z축";
          pic="/css/imgs/green.png";
         }else 
         if (pos2 == -1150){
           cell2.innerHTML= sensorName8;
           cell9.innerHTML = "x축";
           cell10.innerHTML = "y축";
           cell11.innerHTML = "z축";
           pic="/css/imgs/green.png";
         }
  
         if (pos2== -900){
            document.getElementById('bulb2').src=pic;
          } else if (pos2==-1150){
            document.getElementById('bulb1').src=pic;
          }
  
  
        }
