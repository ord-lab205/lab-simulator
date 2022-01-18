var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.get('/', function (request, response){
  fetchData (response);
  console.log('Done. Displayed Data!!');
});

var con = mysql.createConnection({
    host:"localhost",
    port:3308,
    user:"root",
    password:"123456",
    database:"train_database"
})

con.connect(function(err){
  if (err){ throw err;}
  console.log("Connected to the Database!!");
})


function executeQuery(sql, cb) {
  con.query(sql, function (error, result, fields){
    if(error) {throw error;}
      cb(result);
  })
}


function fetchData (response){
  exercuteQuery("Select * from train", function(result){
    console.log(result);
    response.write('<table><tr>');
    for (var column in result[0]){
      response.write('<td><label>' + column + '</label></td>');
      response.write('</tr>');
    }

    for (var row in result){
      response.write('<tr>');
      for (var column in result[row]){
        response.write('<td><label>' + result[row][column] + '</label></td>');
      }
      response.write('</tr>');
    }
    response.end('</table>');
  });
}


app.listen(8080, function(){
  console.log('Listening to port 7070');
})





















// con.connect(function(err) {
//     if (err) throw err;
//     //Select all customers and return the result object:
//     con.query("SELECT * FROM train", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
      
//     });
//   });
// app.listen(1337);

// http.createServer((request, response) => {
//   console.log('server work');
//   response.end('gooo');
// }).listen(3000);