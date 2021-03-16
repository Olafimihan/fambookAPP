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

var app = { //08148578653
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("online", this.onOnline.bind(this), false);
        document.addEventListener("offline", this.onOffline.bind(this), false);

        // function () {
        //     // Handle the online event
        //     // alert('ONLINE...')
        // }

        // function onOffline() {
        //     // Handle the offline event
        //     // alert('OFFLINE...')
        // }
        // document.addEventListener('deviceready', function(){
        //     // var poultryDB = window.sqlitePlugin.openDatabase("poultryDB.db", "2.0", "poultry data", 20000000);
        //         // // var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});
        //         // // myDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});

                
        //     /** Open the appropriate window based on device status */
            
                
        // }, false);


        // this call will be used to keep tracking auditors to each question coordinate
        var watchID = navigator.geolocation.watchPosition(watchSuccess, watchError, {enableHighAccuracy: true}); 
        
    },
    createDB: function() {
        
    },
    onOnline: function(){

    },
    onOffline: function(){
        alert('This in OFFLiNe mode')
        event.preventDefault();
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        //Create a local database on device
        model = device.model;
        localStorage.setItem("model", device.model);
        localStorage.setItem("IMEI", device.serial);
        localStorage.setItem("IMEI3", device.uuid);
        localStorage.setItem("IMEI2", device.imei);
        

        document.addEventListener("backbutton", this.backButton.bind(this), false);

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
    backButton: function(){
        alert('pressed back button')
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
  
    localStorage.setItem("geolocation", GPS_loc);
    var device = localStorage.getItem("IMEI");

    setInterval(()=>{
        
    }, 120000);
  
    
}

  
function watchError(error) {
// alert('code: '    + error.code    + '\n' +
//       'message: ' + error.message + '\n');
}
  
app.initialize();