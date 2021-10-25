var id = 1; // Table ID
var myVar;  // setTimeInterval function

// Train animation
// init part, set your own values
var sat = {
    elt: null
    ,a: 0         // in radian
    ,r: 300         // radius
    ,da: 0.01     // in radian
    ,x: 0
    ,y: 0
    // Center is actualy center (100, 100) minus
    // half the size of the orbiting object 15x15
    ,center: { x: (100 - 50), y: (100 - 50) }
}
  let train_pos = 1.60;
sat.move = function(){
    // each modification
    // train_pos += 1.60;
    this.a += this.da
    // console.log('this.a:', this.a.toFixed(2));
    // console.log(train_pos)
    this.x = this.center.x - (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    //console.log(this.x, this.y);
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px"; 
    //  let qoldiq = this.a.toFixed(2)%train_pos.toFixed(2)
    //  console.log('qoldiq: ',qoldiq);
    if(this.a.toFixed(2) == 1.60) {
        myFunction();
        


    }else if (this.a.toFixed(2) == 3.20){
        myFunction();
        
        // alert('hi')
        
    }else if (this.a.toFixed(2) == 4.80) {
        myFunction();
        // alert('hi')
       
    }else if(this.a.toFixed(2) == 6.40){
        myFunction();
        
        // alert('hi')
       

        this.a = 0;
        document.getElementById('bulb1').src='/css/imgs/gray.png'
       // myFunction();
    }
   
    function myFunction() {
        var table = document.getElementById("table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var noise = randomInteger(110,60);
        var vibration = randomInteger(110,60);
    
        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
      
        cell1.innerHTML = id;


        if (id==4){
            id=1;
          }else{
              id++;
          } 

        cell2.innerHTML = noise;
        cell3.innerHTML = vibration;
        var pic;
       
      
        if((noise >= 85)&&(vibration >= 90)){
            cell4.innerHTML = "<span style='color: red;'> Bad </span>";
            cell5.innerHTML = "<span style='color: red;'> Emergency section</span>";
            pic="/css/imgs/green.png";
      
          }else if (vibration >=90){
      
              cell4.innerHTML = "<span style='color: red;'> Bad </span>";  
              cell5.innerHTML = "Warning Vibration";
              pic="/css/imgs/red.png";
              
          }else if (noise >=90){
              cell4.innerHTML = "<span style='color: red;'> Bad </span>";  
              cell5.innerHTML = "Warning Noise";
              pic="/css/imgs/red.png";
          } 
          else{
            cell4.innerHTML = "<span style='color: green;'> Good </span>";
            cell5.innerHTML = "Done";
            pic="/css/imgs/green.png";
          }
          document.getElementById('bulb1').src=pic;    
    }
   
    
    




}































sat.elt = document.getElementById('sat1');
let loopTimer 

let stop_train = document.querySelector('.stop')
let start_train = document.querySelector('.start');

start_train.addEventListener('click', ()=>{
    loopTimer = setInterval(function(){
        sat.move();
         
    }, 15);
})

stop_train.addEventListener('click', ()=>{
    clearInterval(loopTimer)
})





