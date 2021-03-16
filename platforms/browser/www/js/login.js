


window.onload= async function() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    // Register the event listener
    console.log('Dele Olaf...')
    document.addEventListener("backbutton", onBackKeyDown, false);
}

// Handle the back button
//
function onBackKeyDown() {
  alert('KeyBack pressed')
  return
}

// document.addEventListener("backbutton", yourCallbackFunction, false);
// function onLoad() {
//     document.addEventListener("deviceready", onDeviceReady, false);
// }

// // device APIs are available
// //
// function onDeviceReady() {
//     // Register the event listener
//     document.addEventListener("backbutton", onBackKeyDown, false);
//     console.log('Here loggin in for back button test')
// }

// // Handle the back button
// //
// function onBackKeyDown() {
//     alert('Back key pressed...')
// }



var login = () => {
    var user = $('#Username').val();
    var pass = $('#Password').val();

    var dataObj = {
        user: user,
        pass: pass
    }

    console.log(dataObj)

    var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    // window.location='menu.html'
    
    poultryDB.transaction(function(tx){
 
        tx.executeSql("select * from webusers", [], function(tx, result){
          var len = result.rows.length;
        
          for (var i=0; i<len; i++){
            var UserID = result.rows.item(i).UserID;
            var PassWord = result.rows.item(i).PassWord;
            $("#TableData").append("<table class='table table-bordered'><tr><td>" + result.rows.item(i).UserID + "</td><td>" + result.rows.item(i).PassWord + "</td></tr></table>");
          }
          console.log('Delleeeeeyyy.....')
          // alert(len )

          if(len>0){
              window.location='menu.html'
          }else{
            window.location='login.html'
          }
        
        }, errorCB);
    }, errorCB, successCB);

    function errorCB(err) {
        // alert("Error processing SQL: "+err.code);
        console.log(err)
    }
    
    function successCB() {
    // alert("success!");
    }
}

var loginSuccessCB = ()=>{
    // alert('Welcome!!!')
}

var loginErrorCB = ()=>{
    // alert('Good bye!!!')
}

var penDataPool=() => {
    var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    poultryDB.transaction(function(tx){
 
        tx.executeSql("select * from production", [], function(tx, result){
          var len = result.rows.length;
        console.log(len)
        var str = "<table id='bs4-table' class='table table-bordered table-striped'>";

                    
        str += "<thead><tr><th>Date</th><th>Feed</th><th>Qty</th><th>Amt</th></tr></thead>";
        str += "<tbody>";

          for (var i=0; i<len; i++){
           var goods_id = result.rows.item(i).refnos;
           var description = result.rows.item(i).flightnumber;
           console.log(goods_id)
           console.log(description)
           str += "<tr><td>"+goods_id+"</td><td>"+description+"</td><td><button class='btn btn-danger' >Delete</button></td></tr>";
                        
        //    $("#TableData").append("<table class='table table-bordered'><tr><td>" + goods_id + "</td><td>" + description + "</td></tr></table>");
          }
          str += "</tbody>";
                    str += "</table>";

                    $("#TableData").html(str)

        
        }, errorCB);
    }, errorCB, successCB);

    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
        console.log(err)
    }
    
    function successCB() {
    // alert("success!");
    }
}