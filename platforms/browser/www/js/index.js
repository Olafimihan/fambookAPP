/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var device = null;
var myDB = null;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
        // document.addEventListener('backbutton', )

        function onOnline() {
            // Handle the online event
            // alert('ONLINE...')
        }

        function onOffline() {
            // Handle the offline event
            // alert('OFFLINE...')
        }
        // document.addEventListener('deviceready', function(){
        //     // var poultryDB = window.sqlitePlugin.openDatabase("poultryDB.db", "2.0", "poultry data", 20000000);
        //         // // var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});
        //         // // myDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});

                
        //     /** Open the appropriate window based on device status */
            
                
        // }, false);

        // this call will be used to keep tracking auditors to each question coordinate
        var watchID = navigator.geolocation.watchPosition(watchSuccess, watchError, {enableHighAccuracy: true}); 
        
    },
    createDB: function(){
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        //Create a local database on device
        model = device.model
        localStorage.setItem("model", device.model)
        localStorage.setItem("IMEI", device.serial)

        // // var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});
        // // console.log(poultryDB);

        // poultryDB.transaction(function(tx) {
            /** TABLES Creation */
            // createClientsDependentDBTablesforClients();
            // openWindow();
        // });

        // console.log('dele 1');
        if(localStorage.getItem('status')){
            window.location='login.html';
        }else{
            window.location='register.html';
        }
         
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    ,
    openWindow: function() {
        
        
    } 
};

var watchSuccess = (position) => {
    var GPS_loc = position.coords.latitude +", "+ position.coords.longitude;
    // console.log(GPS_loc);
  
    localStorage.setItem("geolocation", GPS_loc);
    var device = localStorage.getItem("IMEI");
    // $("#succ").html('Wayching!!!You are at: '+ GPS_loc);
    // console.log(device)
    // report the coordinate to the cloud server every 120 sec
  
    setInterval(()=>{
      // 
      // $.ajax({
      //   url: "http://75.127.75.161:4000/reportcoordinate",
      //   cache: false,
      //   type: "GET",
      //   data: "gps="+GPS_loc+"&device="+device,
      //   dataType: "JSON",
      //   success: function(data){
      //     // alert(data.ans);
      //     // console.log(data.ans);
      //     // console.log(data);
      //   },
      //   error: function(error){
          
      //     // alert(error.statusText)
      //     // alert(Object.keys(error));
      //   }
      // });  
    }, 120000);
  
    
  }

  
  function watchError(error) {
    // alert('code: '    + error.code    + '\n' +
    //       'message: ' + error.message + '\n');
  }
  
app.initialize();