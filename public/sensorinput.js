
var socket = new WebSocket('ws://localhost:9992/');
var data   = [{roomid : "ROOM1",value:32},{roomid : "ROOM2",value:35}];
var motion = [{motion:"",exitId:"exit1"},{motion:"",exitId:"exit2"},{motion:"",exitId:"exit3"}];
var violate = [{violate:"NO",exitId:"exit1"},{violate:"NO",exitId:"exit2"},{violate:"NO",exitId:"exit3"}];
var deviceValue = { exit1 : {deviceId:"RFID658",exitId:"exit1"},exit2:{deviceId:"RFID765",exitId:"exit2"},exit3:{deviceId:"RFID885",exitId:"exit3"}};
socket.onopen = function(event) {
  //log('Opened connection 🎉');
  //var json = JSON.stringify({ message: 'Hello' });
  //socket.send(json);
  //log('Sent: ' + json);
}

socket.onerror = function(event) {
  log('Error: ' + JSON.stringify(event));
}

socket.onmessage = function (event) {
  //log('Received: ' + event.data);
}

socket.onclose = function(event) {
  log('Closed connection 😱');
}



document.querySelector('#send').addEventListener('click', function(event) {
  var room1tem    = document.querySelector('#in_temp_room1').value;
  var room2temp   = document.querySelector('#in_temp_room2').value;
  var motionExit1 = document.querySelector('#in_exit1_motion').value;
  var motionExit2 = document.querySelector('#in_exit2_motion').value;
  var motionExit3 = document.querySelector('#in_exit3_motion').value;
  var vilateExit1 = document.querySelector('#in_exit1_violate').value;
  var vilateExit2 = document.querySelector('#in_exit2_violate').value;
  var vilateExit3 = document.querySelector('#in_exit3_violate').value;
  var exitDevic1  = document.querySelector('#in_exit1_device').value; 
  var exitDevic2  = document.querySelector('#in_exit2_device').value; 
  var exitDevic3  = document.querySelector('#in_exit3_device').value; 


  var result    = {temparature: [],pressure : [],movement : [],violate : [],devices:[]};


  var temparatureVal = [];
  if(data[0].value != room1tem){
    data[0].value  = room1tem;
    temparatureVal.push(data[0])
  }
  if(data[1].value != room2temp){
    data[1].value  = room2temp;
    temparatureVal.push(data[1])
  }
  result.temparature  = temparatureVal;

  var motionDetector = [];
  if(motion[0].motion != motionExit1){
    motion[0].motion  = motionExit1;
    motionDetector.push(motion[0])
  }
  if(motion[1].motion != motionExit2){
    motion[1].motion  = motionExit2;
    motionDetector.push(motion[1])
  }
  if(motion[2].motion != motionExit3){
    motion[2].motion  = motionExit3;
    motionDetector.push(motion[2])
  }
  result.movement  = motionDetector;


  var violateDetector = [];
  if(violate[0].violate != vilateExit1){
    violate[0].violate  = vilateExit1;
    violateDetector.push(violate[0])
  }
  if(violate[1].violate != vilateExit2){
    violate[1].violate  = vilateExit2;
    violateDetector.push(violate[1])
  }
  if(violate[2].violate != vilateExit3){
    violate[2].violate  = vilateExit3;
    violateDetector.push(violate[2])
  }
  result.violate  = violateDetector;



  deviceValue.exit1.deviceId  = exitDevic1;
  deviceValue.exit2.deviceId  = exitDevic2;
  deviceValue.exit3.deviceId  = exitDevic3;
  result.devices  = deviceValue;


  var json = JSON.stringify(result);
  socket.send(json);
  //log('Sent: ' + json);
});



var log = function(text) {
  var li = document.createElement('li');
  li.innerHTML = text;
  document.getElementById('log').appendChild(li);
}

window.addEventListener('beforeunload', function() {
  socket.close();
});
