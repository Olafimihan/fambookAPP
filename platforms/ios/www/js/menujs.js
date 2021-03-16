// var imei=null;
document.addEventListener('deviceready', function(){
    $('#errlogger').hide();
        
    var url = window.location.href;
    // alert(url)
    // alert('HEY!')
    


    

});

document.addEventListener("online", onOnline, false);
document.addEventListener("offline", onOffline, false);

// // var client_socket =null;

async function onOnline() {
    // await syncServer();
//  console.log(client_socket)   
    localStorage.setItem('network', 'ON');

}

function onOffline() {
    // Handle the offline event
    // alert('OFFLINE...')
    localStorage.setItem('network', 'OFF');
}

async function dele(){
    alert('Dele');
}

async function syncServer() {

    //get transport code dynamically on the fly
    // var referencenumber = +new Date(); // binder
    // let start = 

    $('.img').show('slow');

    if(localStorage.getItem('network')==="OFF"){
        alert("Your Network may be in Offline MODE: Turn on to continue");
        $('.img').hide('slow');

        return
    }
    
    var data_socket_transporter = io.connect("http://139.162.229.38:2000");

    let flightNumber =  Date.now();
    // console.log('At least i enter here')

    //  flightnumber = Math.random();
    localStorage.setItem('flightnumber', flightNumber)
    
    var poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    
    poultryDBHandler.transaction(updateProductionflightnumber   , errorCB, successCB);
    poultryDBHandler.transaction(updateDOCPurchaseflightnumber  , errorCB, successCB);
    poultryDBHandler.transaction(updateMortalityflightnumber    , errorCB, successCB);
    poultryDBHandler.transaction(updateFeedUsedflightnumber     , errorCB, successCB);
    poultryDBHandler.transaction(updateDrugUsedflightnumber     , errorCB, successCB);
    poultryDBHandler.transaction(updateFeedPurchasedflightnumber, errorCB, successCB);
    poultryDBHandler.transaction(updateDrugPurchasedflightnumber, errorCB, successCB);
    poultryDBHandler.transaction(updateSalesflightnumber        , errorCB, successCB);
    poultryDBHandler.transaction(updateExpenseflightnumber      , errorCB, successCB);

    async function updateProductionflightnumber(tx){
        tx.executeSql('update production set flightnumber=? where flightnumber = "NA" ', [flightNumber]);
    }
    
    async function updateDOCPurchaseflightnumber(tx){
        tx.executeSql('update broiler_trans_hist set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }
    
    async function updateMortalityflightnumber(tx){
        tx.executeSql('update mortality_hist set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }
    
    async function updateFeedUsedflightnumber(tx){
        tx.executeSql('update feedUsage set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }
    
    async function updateDrugUsedflightnumber(tx){
        tx.executeSql('update drug_dispensed set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }
    
    async function updateFeedPurchasedflightnumber(tx){
        tx.executeSql('update feedpurchase set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }
    
    async function updateDrugPurchasedflightnumber(tx){
        tx.executeSql('update drugpurchase set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }
    
    async function updateSalesflightnumber(tx){
        tx.executeSql('update sales_tbl set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }

    async function updateExpenseflightnumber(tx){
        tx.executeSql('update gl_tran_hist set flightnumber=? where flightnumber = "NA"', [flightNumber]);
    }

    /**GET All table data and send to server */
    var answerArray=[];
    var production_RS, mortality_RS, DOCPurchase_RS, feedused_RS, drugused_RS, feedpurchase_RS, drugpurchase_RS, sales_RS, expense_RS

    var production_sql  = "select * from production";
    var DOCpurchase_sql = "select * from broiler_trans_hist";
    var mortality_sql   = "select * from mortality_hist";
    var feedused_sql    = "select * from feedUsage";
    var feedpurchase_sql= "select * from feedpurchase";
    var drugpurchase_sql= "select * from drugpurchase";
    var drugused_sql    = "select * from drug_dispensed";
    var sales_sql       = "select * from sales_tbl";
    var expense_sql     = "select * from gl_tran_hist";
    var receipt_sql     = "select * from receipt";
    var payment_sql     = "select * from payment";
    
    var production_RS   =  await getClientDatabaseTableData(poultryDBHandler, production_sql,  'production');
    
    var DOCPurchase_RS  =  await getClientDatabaseTableData(poultryDBHandler, DOCpurchase_sql,  'doc');
    var mortality_RS    =  await getClientDatabaseTableData(poultryDBHandler, mortality_sql,    'mortality');
    var feedused_RS     =  await getClientDatabaseTableData(poultryDBHandler, feedused_sql,     'feedused');
    var feedpurchase_RS =  await getClientDatabaseTableData(poultryDBHandler, feedpurchase_sql, 'feedpurchased');
    var drugpurchase_RS =  await getClientDatabaseTableData(poultryDBHandler, drugpurchase_sql, 'drugpurchased');
    var drugused_RS     =  await getClientDatabaseTableData(poultryDBHandler, drugused_sql,     'drugused');
    var expense_RS      =  await getClientDatabaseTableData(poultryDBHandler, expense_sql,      'expense');
    var sales_RS        =  await getClientDatabaseTableData(poultryDBHandler, sales_sql,        'eggsales');
    
    var receipt_RS      =  await getClientDatabaseTableData(poultryDBHandler, receipt_sql,       'receipt');
    var payment_RS      =  await getClientDatabaseTableData(poultryDBHandler, payment_sql,       'payment');
    
    
    // console.log(DOCPurchase_RS.value);

    function filter(arr, criteria) {
        return arr.filter(function(obj) {
            return Object.keys(criteria).every(function(c) {
            return obj[c] == criteria[c];
            });
        });
    };
      
    // var waiting_list    = await getFlightNumberWaitingList(poultryDBHandler);

    
    // console.log(production_RS);

    var fnumber={
        tblkey: "flightnumber",
        value: localStorage.getItem('flightnumber')
    }

    var user_id = localStorage.getItem('data')[0];
    // console.log(fnumber)

    var sender_detail_andCredentials = {
        user_id: user_id,
        IMEI: localStorage.getItem('IMEI')
    }

    answerArray.push(DOCPurchase_RS);
    answerArray.push(feedpurchase_RS);
    answerArray.push(drugpurchase_RS);
    answerArray.push(feedused_RS);
    answerArray.push(drugused_RS);
    answerArray.push(production_RS);
    answerArray.push(mortality_RS);
    answerArray.push(expense_RS);
    answerArray.push(sales_RS);
    answerArray.push(receipt_RS);
    answerArray.push(payment_RS);
    // answerArray.push(fnumber);

    var transportObject = []
    transportObject.push(fnumber)
    transportObject.push(answerArray)
    transportObject.push(sender_detail_andCredentials)

    // console.log(answerArray);

    // var arraObj = await removeDuplicates(answerArray);

    // console.log(data_socket_transporter);

    /**     emit a socket event to pass the array Object to server 
     *      This portion sends the local db data to the cloud server
     *      Using socket.io event: [upload local db]
     *      And an event listener: [delete flightnumber records on client]
     *      in order to delete all the sent records
     * 
    */

   $('.img').show('slow');

   data_socket_transporter.emit('upload local db', transportObject);
   
   data_socket_transporter.on('process_flow', (status)=>{
        $('#errlogger').show();
        
        $("#errlogger").html(status);
    
   });
    
   data_socket_transporter.on('authentication failure', ()=>{
       alert('Device may not be Authorised for Posting!!!');
       $('.img').hide('slow');
       return;
   });
   
   data_socket_transporter.on('request failure', (data)=>{
        alert(data.msg);
        return;
   });

    data_socket_transporter.on('stock avalability', (data) => {
            // console.log('You have no enough stock quantity to dispense for birds...')
            alert('You have no enough stock quantity to dispense for birds...')
            $('.img').hide('slow');
            $('#errlogger').hide();
        
            return
    });

   data_socket_transporter.on('flightnumber duplication', (data)=>{
    
        //Array Contains:

        // resp: resp,
        // data: result,
        // flightnumber: flightnumber
        alert('There was an attempted duplication...but it was rolled back!!!')
        return

   })

   data_socket_transporter.on('errmsg', (error)=>{
        alert(error);
        return
   })

   data_socket_transporter.on('delete flightnumber records on client', ( data )=>{
        data = JSON.parse(data);

        // console.log(data)
        // console.log(data.length)

        var flightnumber = data.flightnumber
        // console.log(flightnumber);

        $('#errlogger').hide();
        var db = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

        

        deleteEntry(db, 'delete from broiler_trans_hist');
        deleteEntry(db, 'delete from production');
        deleteEntry(db, 'delete from mortality_hist');
        deleteEntry(db, 'delete from drug_dispensed');
        deleteEntry(db, 'delete from drugpurchase');
        deleteEntry(db, 'delete from feedUsage');
        deleteEntry(db, 'delete from feedpurchase');
        deleteEntry(db, 'delete from sales_tbl');
        deleteEntry(db, 'delete from gl_tran_hist');
        deleteEntry(db, 'delete from receipt');
        deleteEntry(db, 'delete from payment');
        
        deleteEntry(db, 'delete from banks');
        deleteEntry(db, 'delete from pens');
        deleteEntry(db, 'delete from goods');
        deleteEntry(db, 'delete from goods_table');
        deleteEntry(db, 'delete from general_ledger');
        deleteEntry(db, 'delete from feeds');
        deleteEntry(db, 'delete from customer');
        deleteEntry(db, 'delete from supplier');

        insertClientsDependentDBTables(db, data);

        function deleteEntry(db, sql_stmt) { 
            let dd= sql_stmt
            db.transaction(function(tx) {
                tx.executeSql(sql_stmt, [],
                    //On Success
                    function(tx, result) {
                        console.log('Deleted successfully');
                        $('.img').hide('slow');
                    },
                    //On Error
                    function(err) {
                        // console.log(error)
                        console.log(err.code)
                        console.log(dd)
                        console.log('Something went Wrong');
                        // $('.img').hide();
                    });
            });
        }
        
    })

    data_socket_transporter.on('flightnumber status', ()=>{

    })
    
    async function removeDuplicates(data){
        return data.filter((value, index) => data.indexOf(value) ===index);
    }

    async function getClientDatabaseTableData(db, select_sql, tbl){
        return new Promise((resolve, reject)=>{
            db.transaction((tx)=>{
                tx.executeSql(select_sql, [], 
                    function(tx2, result) { 
                        var str_val;
                        var str_arr= [];

                        for (var x=0; x < result.rows.length; x++){
                            str_val = result.rows.item(x); 
                            // console.log(tbl)
                            if(tbl==='doc'){ //ADD OTHER OBJECT THAT HAS AMOUNT: production, feeedused, feedpurchased, drugused, drugpurchased, expense, sales
                                if(str_val.amount > 0){ 
                                    str_arr.push(JSON.stringify(str_val));
                                }
                            }else if(tbl==='expense'){
                                if(str_val.amount > 0){
                                    str_arr.push(JSON.stringify(str_val));
                                }
                                
                            }
                            else if(tbl==='production'){
                                if(str_val.quantity > 0){
                                    str_arr.push(JSON.stringify(str_val));
                                }
                                
                            }else if(tbl==='drugused') {
                                if(str_val.qty > 0){ 
                                    str_arr.push(JSON.stringify(str_val));
                                }
                                
                            }
                            else if(tbl==='feedpurchased') {
                                if(str_val.qty > 0){ 
                                    str_arr.push(JSON.stringify(str_val));
                                }
                                
                            }
                            else if(tbl==='drugpurchased') {
                                if(str_val.qty > 0){ 
                                    str_arr.push(JSON.stringify(str_val));
                                }
                                
                            }
                            else if(tbl==='mortality'){
                                if(str_val.quantity > 0){
                                    str_arr.push(JSON.stringify(str_val));
                                }
                            }
                            else if(tbl==='eggsales'){
                                if(str_val.quantity > 0){
                                    str_arr.push(JSON.stringify(str_val));
                                }
                            }
                            else if(tbl==='feedused'){
                                if(str_val.qty > 0){
                                    str_arr.push(JSON.stringify(str_val));
                                }
                            }
                            else if(tbl==='receipt'){
                                if(str_val.amount > 0){
                                    str_arr.push(JSON.stringify(str_val));
                                }
                            }
                            else if(tbl==='payment'){
                                if(str_val.amount > 0){
                                    str_arr.push(JSON.stringify(str_val));
                                }
                            }
                        }
                         
                        var outObj={
                            tblkey: tbl,
                            value: str_arr
                        }
                        resolve(outObj);
                    }, 
                    function(err) {
                        reject(err)
                        console.log(err)
                        console.log('Doc error')
                    }
                );
            })
        })

    }
    
    var insertClientsDependentDBTables = async (poultryDBHandler, resultSet) => {
        // console.log(resultSet)
        poultryDBHandler.transaction(insertDrugs, errorCB, successCB);
        poultryDBHandler.transaction(insertCustomers, errorCB, successCB);
        poultryDBHandler.transaction(insertSuppliers, errorCB, successCB);
        poultryDBHandler.transaction(insertFeeds, errorCB, successCB);
        poultryDBHandler.transaction(inserteggs, errorCB, successCB);
        poultryDBHandler.transaction(insertAccts, errorCB, successCB);
        poultryDBHandler.transaction(insertPens, errorCB, successCB);
        poultryDBHandler.transaction(insertBanks, errorCB, successCB);

        function insertBanks(tx){
            var len = resultSet.banks.length;
            var x=0;
            var j=0, id, description, amt, stocklevel;

            for(x; x < len; x++){
                j++
                id          = resultSet.banks[x].banks_id;
                description = resultSet.banks[x].bank_name; 
                tx.executeSql("INSERT INTO banks(`bank_id`, `bank_name`) VALUES (?, ?)", [id, description] );
    
            }
    
        }
    
        function insertDrugs(tx){
            var len = resultSet.drugs.length;
            // console.log(len)
            var x=0;
            var j=0, id, description, amt, stocklevel
            for(x; x < len; x++){
                j++
                id          = resultSet.drugs[x].goods_id;
                description = resultSet.drugs[x].description;
                amt         = resultSet.drugs[x].amount;
                stocklevel  = resultSet.drugs[x].stock_level;
    
                tx.executeSql("INSERT INTO goods(`goods_id`, `description`, `amount`, `stock_level`) VALUES (?, ?, ?, ?)", [id, description, amt, stocklevel] );
    
            }
            
        }
    
        function insertCustomers(tx){
            // var note = document.getElementById('note').value;
            var len = resultSet.customers.length;
            // console.log(len)
            var x=0;
            var j=0, id, description, amt, stocklevel
            for(x; x < len; x++){
                j++
                id          = resultSet.customers[x].cust_id;
                description = resultSet.customers[x].cust_company_name; 
    
                tx.executeSql("INSERT INTO customer(`cust_id`, `cust_company_name`) VALUES (?, ?)", [id, description] );
    
            }
            
        }
    
        function insertSuppliers(tx){
            // var note = document.getElementById('note').value;
            var len = resultSet.suppliers.length;
            // console.log(len)
            var x=0;
            var j=0, id, description, amt, stocklevel
            for(x; x < len; x++){
                j++
                id          = resultSet.suppliers[x].supplier_id;
                description = resultSet.suppliers[x].supplier_company_name;
                tx.executeSql("INSERT INTO supplier(`supplier_id`, `supplier_company_name`) VALUES (?, ?)", [id, description] );
            }
            
        }
        
        function insertFeeds(tx){
            var len = resultSet.feeds.length;
            var x=0;
            var j=0, id, description, cost, price
            for(x; x < len; x++){
                j++
                id          = resultSet.feeds[x].product_id;
                description = resultSet.feeds[x].description;
                cost        = resultSet.feeds[x].cost_price;
                price       = resultSet.feeds[x].sell_price;
                tx.executeSql("INSERT INTO feeds(`id`, `feedname`, `cost_price`, `sell_price`) VALUES (?, ?, ?, ?)", [id, description, cost, price] );
            }
            
        }
    
        function inserteggs(tx){
            // var note = document.getElementById('note').value;
            var len = resultSet.eggs.length;
            // console.log(len)
            var x=0;
            var j=0, id, description, amt, stocklevel, cost, price
            for(x; x < len; x++){
                j++
                id          = resultSet.eggs[x].goods_id;
                description = resultSet.eggs[x].goods_description;
                cost        = resultSet.eggs[x].buy_price;
                price       = resultSet.eggs[x].sell_price;
                stocklevel  = resultSet.eggs[x].stock_level;
    
                tx.executeSql("INSERT INTO goods_table(`goods_id`, `goods_description`, `buy_price`, `sell_price`, `stock_level`) VALUES (?, ?, ?, ?, ?)", [id, description, cost, price, stocklevel] );
    
            }
            
        }
    
        function insertAccts(tx){
            // var note = document.getElementById('note').value;
            var len = resultSet.glAcct.length;
            // console.log(len)
            var x=0;
            var j=0, id, description, amt, stocklevel
            for(x; x < len; x++){
                j++
                id          = resultSet.glAcct[x].account_id;
                description = resultSet.glAcct[x].account_title;
    
                tx.executeSql("INSERT INTO general_ledger(`account_id`, `account_title`) VALUES (?, ?)", [id, description] );
    
            }
            
        }
    
        function insertPens(tx){
            // var note = document.getElementById('note').value;
            var len = resultSet.pen.length;
            // console.log(len)
            var x=0;
            var j=0, id, description, amt, stocklevel
            for(x; x < len; x++){
                j++
                id          = resultSet.pen[x].pen_id;
                description = resultSet.pen[x].pen_name; 
    
                tx.executeSql("INSERT INTO pens(`pen_id`, `pen_name`) VALUES (?, ?)", [id, description] );
    
            }
            
        }
    
        function errorCB(err) {
            console.info("Error processing SQL: "+err.code);
            errorLogger(err);
        }
    
        function successCB() {
            // console.info("Inserted success!!!: "+idx+" records");
        }
     
    }
    
    async function getFlightNumberWaitingList(poultryDBHandler){
        return new Promise((resolve, reject)=>{
            poultryDBHandler.transaction((tx)=>{
                tx.executeSql('select * from broiler_trans_hist ', [], _successCB, _errorCB);
            })

            function _successCB(tx, result){
                // console.log()
                // console.log()

                var len = result.rows.length
                var data = result.rows.item[0].purchase_id

                // console.log(len)
                // console.log(data)
                
                for(var x; x < len; x++){
                    console.log(result.rows.item[x].purchase_id)
                    // console.log(result.rows.item(x).trans_date)
                    // console.log(result.rows.item(x).amount)
                    // console.log(result.rows.item(x).flightnumber)

                }
            }
            function _errorCB(err){
                console.log(err)
                console.log(err.code)
                console.log(err.message)
            }
        })
    } 

    var getDOCData= async (poultryDBHandler) => {
        return new Promise((resolve, reject) => {
            poultryDBHandler.transaction((tx)=>{
                tx.executeSql("select b.purchase_id, p.pen_name, b.trans_date, b.quantity, b.buy_price from broiler_trans_hist b inner join pens p ON p.pen_id = b.pen_id order by purchase_id desc", [], 
                    function(tx2, result) {
                        console.log(result);
                    
                    }, 
                    function(err) {
                        console.log(err)
                        console.log('Doc error')
                    }
    
                
                );
    
                
            })
    
        });
        
    }
    
    var _igetClientDatabaseTableData = async (db, create_sql, tbl) => {
        
    
     
    };
     

    function errorCB(err) {
        // console.info("Error updating flightnumber column: "+err.code);
        errorLogger(err);
    }
    
    function flerrorCB(err) {
        // console.info("Error updating flightnumber column: "+err.code);
        errorLogger(err);
    }
    
    function successCB() {
        // console.info("flightnumber update successful!!! ");
        
    }
    
    function flsuccessCB() {
        // console.info("data spooled successfully!!! ");
        
    }

    function errorLogger(err){
        $('#errlogger').html(err)

    }
    
     
}

var manageClicked=(_val) => {
    // alert(_val) 
    //doc, feed, drug

    localStorage.setItem('_win', _val)
    // if (_val==='syncserver') {
    //     await syncServer();
    // }

}