


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
      tx.executeSql('select count(refnos) from production ', [], appendValue, errorCB);
      tx.executeSql('select count(refnos) from production ', [], appendValue, errorCB);
 
        tx.executeSql("select * from webusers", [], function(tx, result){
          var len = result.rows.length;
          // console.log('length: '+ len)
        
          for (var i=0; i<len; i++){
            var UserID = result.rows.item(i).UserID;
            var PassWord = result.rows.item(i).PassWord;
            $("#TableData").append("<table class='table table-bordered'><tr><td>" + result.rows.item(i).UserID + "</td><td>" + result.rows.item(i).PassWord + "</td></tr></table>");
          }
          // console.log('Delleeeeeyyy.....')
          // alert(len )

          if(len>0){
              window.location='menu.html'
          }else{
            window.location='login.html'
          }
        
        }, errorCB);
    }, errorCB, successCB);

    function appendValue(val, key){

    }

    function errorCB(err) {
        // alert(err.code);
        console.log(err)
    }
    
    function successCB() {
    // alert("success!");
    }
}

var loginSuccessCB = ()=>{
    // alert('Welcome!!!')
}

var loginErrorCB = () => {
    // alert('Good bye!!!')
}

var deleteDataPool=() => {
  var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
  poultryDB.transaction(function(tx){ 
    tx.executeSql("delete from production",         [], function(tx, result){}, errorCB);
    tx.executeSql("delete from mortality_hist",     [], function(tx, result){}, errorCB);
    tx.executeSql("delete from drug_dispensed",     [], function(tx, result){}, errorCB);
    tx.executeSql("delete from drugpurchase",       [], function(tx, result){}, errorCB);
    tx.executeSql("delete from feedUsage",          [], function(tx, result){}, errorCB);
    tx.executeSql("delete from feedpurchase",       [], function(tx, result){}, errorCB);
    tx.executeSql("delete from sales_tbl",          [], function(tx, result){}, errorCB);
    tx.executeSql("delete from gl_tran_hist",       [], function(tx, result){}, errorCB);
    tx.executeSql("delete from receipt",            [], function(tx, result){}, errorCB);
    tx.executeSql("delete from payment",            [], function(tx, result){}, errorCB);
    tx.executeSql("delete from feedpurchase",       [], function(tx, result){}, errorCB);
    tx.executeSql("delete from broiler_trans_hist", [], function(tx, result){}, errorCB);

  }, errorCB, successCB);

  function errorCB(err) {
    alert("Error processing SQL: "+err.code);
    console.log(err)
  }

  function successCB() {
    alert("success!");
  }


}

var penDataPool=() => {
    var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    poultryDB.transaction(function(tx){
 
        // var sql ='select s.refnos, c.cust_company_name, s.trans_date, g.pen_name, s.quantity, s.us_price from layersales_tbl s inner join customer c on c.cust_id = s.cust_id inner join pens g on g.pen_id = s.pen_id order by refnos desc'
        var sql ='select s.refnos, s.cust_id, s.trans_date, s.pen_id, s.quantity, s.us_price from layersales_tbl s order by refnos desc'
        tx.executeSql(sql, [], function(tx, result){
          var len = result.rows.length;
        console.log(len)
        var str = "<table id='bs4-table' class='table table-bordered table-striped'>";

                    
        str += "<thead><tr><th>ref#</th><th>cust id</th><th>name</th><th>Penname</th><th>Qty</th></tr></thead>";
        str += "<tbody>";

          for (var i=0; i<len; i++){
            var cust_id = result.rows.item(i).cust_id;
            // var description = result.rows.item(i).flightnumber;
            var cust_company_name = result.rows.item(i).cust_id;
            var pen_name = result.rows.item(i).pen_id;
            // var qty = result.rows.item(i).quantity;
            // console.log(goods_id)
            // console.log(description)
            str += "<tr><td>"+ i++ +"</td><td>"+cust_id+"</td><td>"+cust_company_name+"</td><td>"+pen_name+"</td><td><button id='"+pen_name+"' class='btn btn-danger' onclick='truncateTable(this.id)' >Delete</button></td></tr>";
                        
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

function truncateTable(db) {
  sql_stmt ="truncate table production"; 
  console.log(sql_stmt);

  let dd= sql_stmt
  db.transaction(function(tx) {
      tx.executeSql(sql_stmt, [],
          //On Success
          function(tx, result) {
              // console.log('Deleted successfully');
              $('.img').hide('slow');
          },
          //On Error
          function(err) {
              // console.log(error)
              // console.log(err.code)
              // console.log(dd)
              console.log('Something went Wrong');
              // $('.img').hide();
          });
  });
}
