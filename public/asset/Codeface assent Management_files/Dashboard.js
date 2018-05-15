
var tempTrendRoom1   = [];
var tempTrendRoom2   = [];
var roomTempValue    =  {"ROOM1" : 31,"ROOM1":32};
var timer            = null;
var motionPloteImage = {"exit1" : {"entryType": "DOWN",id:"exit1_motion_plotter"}, "exit2" : {"entryType": "LEFT",id:"exit2_motion_plotter"},"exit3" : {"entryType": "UP",id:"exit3_motion_plotter"}};
var motionImage      =  { "DOWN"  : {"ENTRY": "exit_down_icon.png" ,"EXIT":"exit_up_icon.png" ,"NO" : ""},
                          "UP"    : {"ENTRY": "exit_up_icon.png" ,"EXIT":"exit_down_icon.png","NO" :""},
                          "LEFT"  : {"ENTRY": "exit_left_icon.png" ,"EXIT":"exit_right_icon.png","NO" : ""},
                          "RIGHT" : {"ENTRY": "exit_right_icon.png" ,"EXIT":"exit_left_icon.png","NO" : ""}
                        }
var devices         = {};
var deviceInfo     = {
  "RFID658" : {
       name : "Computer",brand : "Apple" ,model : "Mac Pro",type : "rental"
  },
  "RFID765" : {
       name : "Mobile",brand : "Samsung" ,model:"Samsung S8",type : "rental"
  },
  "RFID658" : {
       ame : "Mobile",brand : "Apple" ,model : "Iphone 10",type : "rental"
  }
}
var blink   = function(time, interval){
    timer = window.setInterval(function(){
        $(".plot_blink").css("opacity", "0.1");
        window.setTimeout(function(){
            $("img").css("opacity", "1");
        }, 100);
    }, interval);
    //window.setTimeout(function(){clearInterval(timer);}, time);
}

var showTemparature = function (roodId){
    var tempValue  =  roomTempValue[roodId];
    $("#temp_sensor_value").text(tempValue+"°C");
    $("#temp_sensor_View").modal("show");
}
var buildTemparatureTrend   = function (roomId){
  var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Temparature');
      var roomValue  = (roomId == "ROOM1") ? tempTrendRoom1 : tempTrendRoom2;
      data.addRows(roomValue);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Temparature'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('temp_trend'));

      chart.draw(data, options);
}
var plotImage = function (imgId,imgSrc,isvilote,roomId){
  if(imgSrc.length  > 0){
    $("#"+imgId).attr("src","./asset/"+imgSrc);
    $("#"+imgId).show();
  }else {
    $("#"+imgId).hide();
  }

  if(typeof(isvilote) != "undefined"){
      $("#"+imgId).addClass("showDeviceId");
      $("#"+imgId).data( "roomid",roomId);
      $("#"+imgId).removeClass("plot_blink");
  }else {
    $("#"+imgId).removeClass("showDeviceId");
    $("#"+imgId).removeData( "roomid" );
    $("#"+imgId).addClass("plot_blink");
  }
  
}
var updateMovement  = function(data,timestamp){
    for(var i=0 ; i < data.length ; i++){
        var ploterid    = motionPloteImage[data[i].exitId]["id"];
        var ploterImage = motionImage[motionPloteImage[data[i].exitId]["entryType"]][data[i].motion];
        plotImage (ploterid,ploterImage);
    }
}

var updateViolation  = function(data,timestamp){
    for(var i=0 ; i < data.length ; i++){
      if(data[i].violate == "YES"){
        var ploterid    = motionPloteImage[data[i].exitId]["id"];
        var ploterImage = "vilote_entry.png";
        plotImage (ploterid,ploterImage,true);
      }
    }
}

var getDeviceValue    = function (data){
    return (deviceInfo(devices[data].deviceId));
}

var showDeviceInfo  = function (roomId){
  var deviceDetail  = getDeviceValue(roomId);

  $("#device_name").text(deviceDetail.name);
  $("#device_brand").text(deviceDetail.model);
  $("#device_model").text(deviceDetail.type);

  $("#temp_device_View").model("show");
}

var updateSensorValue = function (data){
    if(data.temparature != null && data.temparature.length > 0){
      updateTemprature(data.temparature,data.timestamp);
    }

    if(data.movement != null && data.movement.length > 0){
      updateMovement(data.movement,data.timestamp);
      
    }

    if(data.violate != null && data.violate.length > 0){
      updateViolation(data.violate,data.timestamp);
    }

    devices = data.devices;
}
var updateTemprature   = function(data,timestamp){
      var getHourValue    = new Date(timestamp).getMinutes();
      var chart = chart || new google.visualization.Gauge(document.getElementById('chart_div'));
       for(var i=0 ; i< data.length ; i++){
          var roomtemp =  data[i];
          var index    = null;
          roomTempValue[roomtemp.roomid]   = roomtemp.value;
          if(roomtemp.roomid == "ROOM1"){
            chartDataValue.setValue(0, 1, roomtemp.value);
            tempTrendRoom1.push([getHourValue,parseInt(roomtemp.value)]);
                
          }else if(roomtemp.roomid == "ROOM2"){
            chartDataValue.setValue(1, 1, roomtemp.value);
            tempTrendRoom2.push([getHourValue,parseInt(roomtemp.value)]);
          }
      }
      chart.draw(chartDataValue, options);
    }
var socket = new WebSocket('ws://localhost:9992/');
socket.onopen = function(event) {
  console.log('Opened connection');
  //log('Opened connection 🎉');
  //var json = JSON.stringify({ message: 'Hello' });
  //socket.send(json);
  //log('Sent: ' + json);
}

socket.onerror = function(event) {
  //log('Error: ' + JSON.stringify(event));
}

socket.onmessage = function (event) {
  //log('Received: ' + event.data);
  console.log('recived ....');
  var data   =JSON.parse(event.data);
  if(data != null)updateSensorValue(data);
}

socket.onclose = function(event) {
  //log('Closed connection 😱');
  console.log('connection closed...');
}

/*document.querySelector('#close').addEventListener('click', function(event) {
  socket.close();
  //log('Closed connection 😱');
});

document.querySelector('#send').addEventListener('click', function(event) {
  var json = JSON.stringify({ message: 'Hey there' });
  socket.send(json);
  //log('Sent: ' + json);
});*/
window.addEventListener('beforeunload', function() {
  socket.close();
});
