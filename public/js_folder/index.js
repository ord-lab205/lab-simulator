//global variables

var id = 1; // Table ID
var myVar;  // setTimeInterval function
var pos = 0;
var pos2=0;
var elem = document.getElementById("myAnimation");   
const elem2 = document.getElementById("myAnimation2");
console.log(1);

//main function train 1

function fnBehaviorSSE()
{
  console.log(`Success. Function 'fnBehaviorSSE' is in operation.`);
  let sse = new EventSource(`http://127.0.0.1:80/index/sse`);
  sse.onmessage = e => {
    myFunction(e);
    // if (pos == 1465) {
    //   pos = 0;
    //   document.getElementById('bulb1').src='/css/imgs/gray.png'
    //   document.getElementById('bulb2').src='/css/imgs/gray.png'
    //   document.getElementById('bulb3').src='/css/imgs/gray.png'
    //   document.getElementById('bulb4').src='/css/imgs/gray.png'
    //   myTrain2();
    // } else {
    //   if ((pos == 210) || (pos == 450) || (pos == 900) || (pos == 1150)) {
    //       console.log(2);
    //       myFunction(arrRow);
    //   }
    //   pos++;
    //   elem.style.left = pos + 'px'; 
    // }
  }
  setTimeout(() => {
    sse.close();
    console.log(`SSE Connection is close.`);
  }, 10000);
}


function myMove() {
  fnBehaviorSSE();
  // var id1 = setInterval(frame, 5);
  // function frame() {
  //   if (pos == 1465) {
  //     pos = 0;
  //     clearInterval(id1);
  //     document.getElementById('bulb1').src='/css/imgs/gray.png'
  //     document.getElementById('bulb2').src='/css/imgs/gray.png'
  //     document.getElementById('bulb3').src='/css/imgs/gray.png'
  //     document.getElementById('bulb4').src='/css/imgs/gray.png'

  //     myTrain2();

  //   } else {
  //     if ((pos == 210) || (pos == 450) || (pos == 900) || (pos == 1150)){
  //         myFunction()
  //     } 
  //     pos++; 
  //     elem.style.left = pos + 'px'; 

  //   }
  // }
}


//main function train 2

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
      if ((pos2 == -210) || (pos2 == -450) || (pos2== -900) || (pos2 == -1150)){
          myFunction()
      } 
      pos2--; 
      elem2.style.left = pos2 + 'px'; 

    }
  }
}

//random integer for NOISE and VARIABLE
function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function random_item(items)
  {  
  return items[Math.floor(Math.random()*items.length)];    
  }
  
  var items = ['Clear', 'Fog', 'Clear', 'Snow', 'Rain', 'Clear'];


  // function random_item2(items2)
  // {  
  // return items2[Math.floor(Math.random()*items2.length)];    
  // }
  
  // var items2 = ['Animal Detected', 'No Animals', 'No Animals', 'No Animals'];




// intert rows function

function myFunction(e) {
    var sensorName1 = "A1";
    var sensorName2 = "A2";
    var sensorName3 = "A3";
    var sensorName4 = "A4";
    var sensorName5 = "A5";
    var sensorName6 = "A6";
    var sensorName7 = "A7";
    var sensorName8 = "A8";
    var table = document.getElementById("table");
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
    var cell11 = row.insertCell(9);

    let arrRow = e.data.split(',');
    console.log(arrRow);

    var noise = arrRow[1];
    var noise1 = arrRow[2];
    var noise2 = arrRow[3];
    var vibration = arrRow[4];
    var vibration1 = arrRow[5];
    var vibration2 = arrRow[6];


    // insert sensors
    cell2.innerHTML = arrRow[0];
    cell3.innerHTML = noise;
    cell4.innerHTML = noise1;
    cell5.innerHTML = noise2;
    cell6.innerHTML = vibration;
    cell7.innerHTML = vibration1;
    cell8.innerHTML = vibration2;
    cell9.innerHTML = arrRow[7];
    cell10.innerHTML = arrRow[8];
    cell11.innerHTML = arrRow[9];
    var pic;
     

    cell1.innerHTML = id;
    id++;
    
    // //main function to insert datas
    // if (pos == 210) {
    //   cell9.innerHTML = random_item(items);
    //       }else {
    //         cell9.innerHTML = random_item(items);
    //       }
    // if (pos == 210 || pos2 == -210){

    //   if(pos==210){
    //     cell2.innerHTML = sensorName1;
    //   }else if (pos2==-210){
    //     cell2.innerHTML = sensorName5;
    //   }
      
    //   if((noise >= 85)&&(vibration >= 90)){
        
    //     cell11.innerHTML = "<span style='color: red;'> Bad </span>";
    //     cell10.innerHTML = "<span style='color: red;'> Emergency section</span>";
    //     pic="/css/imgs/red.png";
  
    //   }else if (vibration >=90){
  
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Vibration! <br> (Over 90VdB!)";
    //       pic="/css/imgs/red.png";
          
    //   }else if (noise >=90){
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Noise! <br> (Over 85dB!)";
    //       pic="/css/imgs/red.png";
    //   } 
    //   else{
    //     cell11.innerHTML = "<span style='color: green;'> Good </span>";
    //     cell10.innerHTML = "Done";
    //     pic="/css/imgs/green.png";
    //   }


    //   if (pos2== -210){
    //     document.getElementById('bulb4').src=pic;
    //   } else if (pos==210){
    //     document.getElementById('bulb1').src=pic;
    //   }
      

      
    

    // } else if (pos == 450 || pos2 == -450){
      

    //   if(pos==450){
    //     cell2.innerHTML = sensorName2;
    //   }else if (pos2==-450){
    //     cell2.innerHTML = sensorName6;
    //   }
          
    //   if (pos == 450){
    //     cell9.innerHTML = random_item(items);
    //   }else {
    //     cell9.innerHTML = random_item(items);
        
    //   }

    //   if((noise >= 85)&&(vibration >= 90)){
        
    //     cell11.innerHTML = "<span style='color: red;'> Bad </span>";
    //     cell10.innerHTML = "<span style='color: red;'> Emergency section</span>";
    //     pic="/css/imgs/red.png";
  
    //   }else if (vibration >=90){
  
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Vibration! <br> (Over 90VdB!)";
    //       pic="/css/imgs/red.png";
          
    //   }else if (noise >=90){
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Noise! <br> (Over 85dB!)";
    //       pic="/css/imgs/red.png";
    //   } 
    //   else{
    //     cell11.innerHTML = "<span style='color: green;'> Good </span>";
    //     cell10.innerHTML = "Done";
    //     pic="/css/imgs/green.png";
    //   }


    //   if (pos2== -450){
    //     document.getElementById('bulb3').src=pic;
    //   } else if (pos==450){
    //     document.getElementById('bulb2').src=pic;
    //   }
      





    // } else if (pos == 900 || pos2 == -900){

    //   cell9.innerHTML = random_item(items);
      
    //   if(pos==900){
    //     cell2.innerHTML = sensorName3;
    //   }else if (pos2==-900){
    //     cell2.innerHTML = sensorName7;
    //   }
      


    //    if((noise >= 85)&&(vibration >= 90)){
        
    //     cell11.innerHTML = "<span style='color: red;'> Bad </span>";
    //     cell10.innerHTML = "<span style='color: red;'> Emergency section</span>";
    //     pic="/css/imgs/red.png";
  
    //   }else if (vibration >=90){
  
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Vibration! <br> (Over 90VdB!)";
    //       pic="/css/imgs/red.png";
          
    //   }else if (noise >=90){
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Noise! <br> (Over 85dB!)";
    //       pic="/css/imgs/red.png";
    //   } 
    //   else{
    //     cell11.innerHTML = "<span style='color: green;'> Good </span>";
    //     cell10.innerHTML = "Done";
    //     pic="/css/imgs/green.png";
    //   }




      
    //   if (pos2== -900){
    //     document.getElementById('bulb2').src=pic;
    //   } else if (pos== 900){
    //     document.getElementById('bulb3').src=pic;
    //   }


    // } else if (pos == 1150 || pos2 == - 1150){

    //   cell9.innerHTML = random_item(items);



    //   if(pos==1150){
    //     cell2.innerHTML = sensorName4;
    //   }else if (pos2==-1150){
    //     cell2.innerHTML = sensorName8;
    //   }



    //   if((noise >= 85)&&(vibration >= 90)){
        
    //     cell11.innerHTML = "<span style='color: red;'> Bad </span>";
    //     cell10.innerHTML = "<span style='color: red;'> Emergency section</span>";
    //     pic="/css/imgs/red.png";
  
    //   }else if (vibration >=90){
  
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Vibration! <br> (Over 90VdB!)";
    //       pic="/css/imgs/red.png";
          
    //   }else if (noise >=90){
    //       cell11.innerHTML = "<span style='color: red;'> Bad </span>";  
    //       cell10.innerHTML = "Warning Noise! <br> (Over 85dB!)";
    //       pic="/css/imgs/red.png";
    //   } 
    //   else{
    //     cell11.innerHTML = "<span style='color: green;'> Good </span>";
    //     cell10.innerHTML = "Done";
    //     pic="/css/imgs/green.png";
    //   }




      
    //   if (pos2== -1150){
    //     document.getElementById('bulb1').src=pic;
    //   } else if (pos==1150){
    //     document.getElementById('bulb4').src=pic;
    //   }
      
    
    // }
  }



  var myApp = new function () {
    this.printTable = function () {
        var tab = document.getElementById('table');

        table.rel = 'stylesheet';  
        table.type = 'text/css'; 
        table.href = 'css/index.css';

        var win = window.open('', '', 'height=720,width=1280');
        win.document.write(tab.outerHTML);
        win.document.close();
        // win.print();
    }
}

