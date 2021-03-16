/** CREATE ALL REQUIRED OPERATIONAL DATABASE TABLES FOR ALL CLIENTS DEVICES RUNNING THE APP */

// document.addEventListener('deviceready', function() {
//     window.sqlitePlugin.echoTest(function() {
//       console.log('ECHO test OK');
//     });
// });
var createClientsDependentDBTablesforClients= async (resultSet) => {
    // console.log('dele 2')
    var pen_sql         ="CREATE TABLE if not exists `pens` (`pen_id` integer primary key, `pen_name` text)"; 
    var bank_sql        ="CREATE TABLE if not exists `banks` (`bank_id` integer primary key, `bank_name` text)"; 
    var cust_sql        ="CREATE TABLE if not exists `customer` (cust_id integer, cust_company_name text) ";
    var users_sql       ="CREATE TABLE if not exists `webusers` (`UserID` text, `PassWord` text, `RoleId` text)"; 
    var eggs_sql        ="CREATE TABLE if not exists `goods_table` (`goods_id` integer primary key, `goods_description` text, `buy_price` numeric, `sell_price` numeric, `stock_level` integer ) ";
    var supp_sql        ="CREATE TABLE if not exists `supplier` (supplier_id integer primary key, supplier_company_name text)";
    var feed_sql        ="CREATE TABLE IF NOT EXISTS `feeds` (id integer primary key, feedname text, cost_price numeric, sell_price numeric, stock_level integer)";
    var goods_sql       ="CREATE TABLE if not exists `goods` (goods_id integer primary key, description text, amount numeric, stock_level integer)";
    var prod_sql        ="CREATE TABLE if not exists `production` (refnos integer primary key autoincrement, trans_date text, penid integer, productid integer, quantity integer, amount numeric, user_id text, currentweek integer, flightnumber text)";
    var acct_sql        ="CREATE TABLE if not exists `general_ledger` (account_id text, account_title text)";    
    var drugusage_sql   ="CREATE TABLE if not exists `drugusage` (refnos integer primary key autoincrement, penid integer, trans_date text, stock_id integer, quantity integer, price numeric, currentweek integer, flightnumber text)";
    var morta_sql       ="CREATE TABLE if not exists `mortality_hist` (mortality_id integer primary key autoincrement, pen_id integer, date text, quantity integer, currentweek integer, flightnumber text)";
    //trans_type will hold pcv values in gl_trans_hist table
    var expense_sql     ="CREATE TABLE if not exists `gl_tran_hist` (`hist_id` integer primary key AUTOINCREMENT, `serial_numb` double, `account_id` text, `valuedate` text, `narrative` text, `trans_type` text, `amount` numeric, `user_id` text, currentweek integer, flightnumber text)";
    var doc_purchase    ="CREATE TABLE if not exists `broiler_trans_hist` (`purchase_id` integer primary key AUTOINCREMENT, `trans_date` text, `invoice_no` text, `trans_type` text, `amount` numeric, `pen_id` integer, `quantity` integer, `buy_price` numeric, `user_id` text, `supplierid` integer, `goods_id` integer, `age` integer, flightnumber text)";
    var feed_purchase   ="create table if not exists `feedpurchase` (refnos integer primary key autoincrement, supplier integer, goods_id integer, invoice text, qty integer, buy_price numeric, dated text, user_id text, flightnumber text) ";
    var drug_purchase   ="create table if not exists `drugpurchase` (refnos integer primary key autoincrement, supplier integer, goods_id integer, invoice text, qty integer, buy_price numeric, dated text, user_id text, flightnumber text) ";
    
    var feed_usage      ="create table if not exists `feedUsage` (refnos integer primary key autoincrement, pen_id integer, goods_id integer, qty integer, cost_price numeric, dated text, user_id text, flightnumber text) ";
    var drug_dispensed  ="create table if not exists `drug_dispensed` (refnos integer primary key autoincrement, pen_id integer, goods_id integer, qty integer, cost_price numeric, dated text, user_id text, flightnumber text) ";
    var sales_history   ="create table if not exists `sales_tbl` (refnos integer primary key autoincrement, trans_date text, goods_id integer, cust_id integer, quantity integer, uc_price numeric, us_price numeric, invoice integer, currentweek integer, flightnumber text) ";
    var err_logger      ="create table if not exists `error_logger` (refnos integer primary key autoincrement, error_message text, dated text, module_id text, timer text ) ";
    var invoice_tbl     ="create table if not exists `invoice_tbl` (refnos integer primary key autoincrement, invoice_no integer ) ";
    
    var receipt_tbl     ="create table if not exists `receipt` (refnos integer primary key autoincrement, cust_id integer, trans_date text, amount numeric, methodid integer ) ";
    var payment_tbl     ="create table if not exists `payment` (refnos integer primary key autoincrement, supplier_id integer, trans_date text, amount numeric, methodid integer ) ";

    var db = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    await createClientDatabaseTable(db, pen_sql, 'pen'); //1            Y
    await createClientDatabaseTable(db, acct_sql, 'acct'); //2          Y    
    await createClientDatabaseTable(db, users_sql, 'user'); //3         Y
    await createClientDatabaseTable(db, eggs_sql, 'egg'); //4           Y
    await createClientDatabaseTable(db, feed_sql, 'feed'); //5          Y
    await createClientDatabaseTable(db, cust_sql, 'cust'); //6          Y
    await createClientDatabaseTable(db, supp_sql, 'supp'); //7          Y
    await createClientDatabaseTable(db, goods_sql, 'goods'); //8        Y
    await createClientDatabaseTable(db, prod_sql, 'prod'); //9
    await createClientDatabaseTable(db, morta_sql, 'morta'); //10
    await createClientDatabaseTable(db, drugusage_sql, 'drugs');//11
    await createClientDatabaseTable(db, expense_sql, 'expense'); //12
    await createClientDatabaseTable(db, doc_purchase, 'doc'); //13
    await createClientDatabaseTable(db, feed_purchase, 'feed_p'); //14
    await createClientDatabaseTable(db, drug_purchase, 'drug_p'); //15

    await createClientDatabaseTable(db, feed_usage, 'feedusage'); //16
    await createClientDatabaseTable(db, drug_dispensed, 'drug_dispensed'); //17
    await createClientDatabaseTable(db, sales_history, 'sales_tbl'); //18
    await createClientDatabaseTable(db, err_logger, 'error_log'); //19
    await createClientDatabaseTable(db, invoice_tbl, 'invoice_tbl'); //20
    await createClientDatabaseTable(db, bank_sql, 'bank'); //21
    await createClientDatabaseTable(db, receipt_tbl, 'receipt'); //22
    await createClientDatabaseTable(db, payment_tbl, 'payment'); //23

    /**INsertion */
    await insertClientsDependentDBTables(db, resultSet);


}

var insertClientsDependentDBTables= async (poultryDBHandler, resultSet) => {
    console.log(resultSet)
    poultryDBHandler.transaction(insertDrugs, errorCB, successCB);
    poultryDBHandler.transaction(insertUser, errorCB, successCB);
    poultryDBHandler.transaction(insertCustomers, errorCB, successCB);
    poultryDBHandler.transaction(insertSuppliers, errorCB, successCB);
    poultryDBHandler.transaction(insertFeeds, errorCB, successCB);
    poultryDBHandler.transaction(inserteggs, errorCB, successCB);
    poultryDBHandler.transaction(insertAccts, errorCB, successCB);
    poultryDBHandler.transaction(insertPens, errorCB, successCB);
    poultryDBHandler.transaction(insertInvoice, errorCB, successCB);
    poultryDBHandler.transaction(insertBanks, errorCB, successCB);
     

    function insertBanks(tx){
        var len = resultSet.banks.length;
        var x=0;
        var j=0, id, description, amt, stocklevel
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
        // var note = document.getElementById('note').value;
        var len = resultSet.feeds.length;
        // console.log(len)
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

    function insertUser(tx){
        /** Insert web Users data */
        var data = resultSet.msg; //localStorage.getItem('data')
        // console.log("User: "+data[0])
        // console.log("Pass: "+data[1])
        // var arr = data.split(',')

        // var name = arr[0], pass = arr[1];

        tx.executeSql("INSERT INTO webusers (`UserID`, `PassWord`, `RoleId`) VALUES (?, ?, ?)", [data[0], data[1], 'attendant'] );

    }

    function insertInvoice(tx){
        tx.executeSql("INSERT INTO invoice_tbl (`invoice_no`) VALUES (?)", [0] );

    }

    function errorCB(err) {
        console.info("Error processing SQL: "+err.code);
        errorLogger(err);
    }

    function successCB() {
        // console.info("Inserted success!!!: "+idx+" records");
    }
 
}

let errorLogger=(err)=>{
    console.log(err)
}
    
var deleteAllTables= async (tx) => { 
    console.log('dele 3')
    tx.executeSql('drop table pens', [], success, error);
    tx.executeSql('drop table customer', [], success, error);
    tx.executeSql('drop table webusers', [], success, error);
    tx.executeSql('drop table goods_table', [], success, error);
    tx.executeSql('drop table supplier', [], success, error);
    tx.executeSql('drop table feeds', [], success, error);
    tx.executeSql('drop table goods', [], success, error);
    tx.executeSql('drop table production', [], success, error);
    tx.executeSql('drop table mortality_hist', [], success, error);
    tx.executeSql('drop table general_ledger', [], success, error);
    tx.executeSql('drop table drugusage', [], success, error);
    tx.executeSql('drop table gl_tran_hist', [], success, error);
    tx.executeSql('drop table broiler_trans_hist', [], success, error);
    tx.executeSql('drop table feedpurchase', [], success, error);
    tx.executeSql('drop table drugpurchase', [], success, error);
    console.log('dele 4')
}

var success=() => {
    
}

var error=() => {

}

var createClientDatabaseTable = async (db, create_sql, tbl) => {
    var dt  = new Date();
    // console.info(create_sql)
    
    db.transaction(populateDB, errorCB, successCB);

    function populateDB(tx){
        tx.executeSql(create_sql);
    }

    function errorCB(err) {
        console.info('Error: '+tbl)
        console.info("Error processing SQL: "+err.code);
    }

    function successCB() {
        // console.info('Success: '+tbl)
        // console.info("success!");
    }

 
};
 
// var createSuccess=()=>{

// }


var insertRecord=(db, sql_stmt, resultSet)=>{

    db.transaction(insertNote, errorCB, successCB);

    function insertNote(tx){
        var note = document.getElementById('note').value;
        tx.executeSql("INSERT INTO notes(note) VALUES (?)",[note]);
    }

    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }

    function successCB() {
    // alert("success!");
    }
}
 

var WriteSuppliersData= async (tx, resultSet)=>{
    var executeQuery = "INSERT INTO supplier (`supplier_id`, `supplier_company_name`) VALUES (?, ?)";
    var len = resultSet.suppliers.length
    // console.log(len)
    var id, name, qty, bprice, sp1, sp2, sp3, sp4, stock_level;

    for (var x=0; x<len; x++){
        // console.log(resultSet.pen[x])
        id   = resultSet.suppliers[x].supplier_id;
        name = resultSet.suppliers[x].supplier_company_name;

        /** Insert each row */
        tx.executeSql(executeQuery, [id, name], function(tx2, result) {
            // console.log(result);
        },
        function(error) {
            console.log('suppliers');
            console.log(error);
        });

    }

}

var WriteCustomersData= async (tx, resultSet)=>{
    var executeQuery = "INSERT INTO customer (`cust_id`, `cust_company_name`) VALUES (?, ?)";
    var len = resultSet.customers.length
    // console.log(len)
    var id, name, qty, bprice, sp1, sp2, sp3, sp4, stock_level;

    for (var x=0; x<len; x++){
        // console.log(resultSet.pen[x])
        id   = resultSet.customers[x].cust_id;
        name = resultSet.customers[x].cust_company_name;

        /** Insert each row */
        tx.executeSql(executeQuery, [id, name], function(tx2, result) {
            // console.log(result);
        },
        function(error) {
            console.log('customers');
            console.log(error);
        });

    }

}

var WriteFeedData = async (tx, resultSet) => {
    var executeQuery = "INSERT INTO feeds (`id`, `feedname`, `cost_price`, `sell_price`, `stock_level`) VALUES (?, ?, ?, ?, ?)";
    var len = resultSet.feeds.length
    // console.log(len)
    var id, name, qty, bprice, sp1, sp2, sp3, sp4, stock_level;

    for (var x=0; x<len; x++){
        // console.log(resultSet.pen[x])
        id          = resultSet.feeds[x].product_id;
        name        = resultSet.feeds[x].description;
        bprice      = resultSet.feeds[x].cost_price;
        sp1         = resultSet.feeds[x].sell_price;
        stock_level = resultSet.feeds[x].quantity;
        // console.log(resultSet.rows.item(x).pen_name)

        /** Insert each row */
        tx.executeSql(executeQuery, [id, name, bprice, sp1, stock_level], function(tx2, result) {
            // console.log(result);
        },
        function(error) {
            console.log('feed');
            console.log(error);
        });

    }

}

var WriteEggsTblData= async (tx, resultSet) => {
    var executeQuery = "INSERT INTO goods_table (`goods_id`, `goods_description`, `buy_price`, `sell_price`, `stock_level`) VALUES (?, ?, ?, ?, ?)";
    var len = resultSet.eggs.length
    // console.log(len)
    var id, name, qty, bprice, sp1, sp2, sp3, sp4, stock_level;

    for (var x=0; x<len; x++){
        // console.log(resultSet.pen[x])
        id          = resultSet.eggs[x].goods_id;
        name        = resultSet.eggs[x].goods_description;
        bprice      = resultSet.eggs[x].buy_price;
        sp1         = resultSet.eggs[x].sell_price;
        // sp2         = resultSet.eggs[x].sell_price2;
        // sp3         = resultSet.eggs[x].sell_price3;
        // sp4         = resultSet.eggs[x].sell_corporate;
        stock_level = resultSet.eggs[x].stock_level;
        // console.log(resultSet.rows.item(x).pen_name)

        tx.executeSql(executeQuery, [id, name, bprice, sp1, stock_level], function(tx2, result) {
            // console.log(result);
        },
        function(error) {
            console.log('Egg');
            console.log(error);
        });

    }

}

var WriteClientWebuserData= async (tx, resultSet)=>{
    var executeQuery = "INSERT INTO webusers (`UserID`, `PassWord`, `RoleId`) VALUES (?, ?, ?)";

    var data = resultSet.msg; //localStorage.getItem('data')
    console.log("User: "+data[0])
    console.log("Pass: "+data[1])
    // var arr = data.split(',')

    // var name = arr[0], pass = arr[1];

    tx.executeSql(executeQuery, [data[0], data[1], 'attend'], function(tx2, result) {
        // console.log(result);
    },
    function(error) {
        console.log('user');
        console.log(error);
    });

    // tx.executeSql('SELECT * FROM webusers', [], function(tx2, results) {
    //     var len = results.rows.length, i;

        
    //     $("#rowCount").append(len);
    //     for (i = 0; i < len; i++) {
    //         // str +=results.rows.item(i).pen_name + ".....<td>....." + results.rows.item(i).quantity_of_birds ;
    //         $("#TableData").append("<tr><td>" + results.rows.item(i).UserID + "</td><td>" + results.rows.item(i).PassWord + "</td></tr>");
    //     }
    // }, null);

}


var WritePenTblData= async (tx, resultSet)=>{
    var executeQuery = "INSERT INTO pens (`pen_id`, `pen_name`) VALUES (?, ?)";
    var len = resultSet.pen.length
    // console.log(resultSet.pen)
    var id, name, qty, dob, week;

    for (var x=0; x<len; x++){
        // console.log(resultSet.pen[x])
        id = resultSet.pen[x].pen_id;
        name = resultSet.pen[x].pen_name;
        // console.log(name + "|" + qty + "|" + dob + "|" + week);

        tx.executeSql(executeQuery, [id, name], 
            function(tx, result) {
                // console.log(result);
            },
            function(error) {
                console.log('Pen');
                console.log(error);
            }
        );

    }

    // tx.executeSql('SELECT * FROM pens', [], function(tx2, results) {
    //     var len = results.rows.length, i;

        
    //     $("#rowCount").append(len);
    //     for (i = 0; i < len; i++) {
    //         // str +=results.rows.item(i).pen_name + ".....<td>....." + results.rows.item(i).quantity_of_birds ;
    //         $("#TableData").append("<tr><td>" + results.rows.item(i).pen_name + "</td><td>" + results.rows.item(i).quantity_of_birds + "</td><td>" + results.rows.item(i).flightnumber + "</td></tr>");
    //     }
        
    // }, null);
    // // alert(str)

}

var WriteAcctLedgerTbl= async (tx, resultSet)=>{
    /**PEN TABLE AREA */
    var executeQuery = "INSERT INTO general_ledger (`account_id`, `account_title`) VALUES (?, ?)";
    var len = resultSet.glAcct.length
    // console.log(len)
    var acct_id, acct_title

    for (var x=0; x<len; x++){
        // console.log(resultSet.pen[x])
        acct_id = resultSet.glAcct[x].account_id;
        acct_title = resultSet.glAcct[x].account_title;
        // console.log(resultSet.rows.item(x).pen_name)

        tx.executeSql(executeQuery, [acct_id, acct_title], function(tx2, result) {
            // console.log(result);
        },
        function(error) {
            console.log('Ledger Error');
            console.log(error);
        });

    }

    // tx.executeSql('SELECT * FROM general_ledger', [], function(tx2, results) {
    //     var len = results.rows.length, i;

        
    //     $("#rowCount").append(len);
    //     for (i = 0; i < len; i++) {
    //         // str +=results.rows.item(i).pen_name + ".....<td>....." + results.rows.item(i).quantity_of_birds ;
    //         $("#TableData").append("<tr><td>" + results.rows.item(i).account_id + "</td><td>" + results.rows.item(i).account_title+ "</td></tr>");
    //     }
    // }, null);
    // alert(str)
}

var createDrugPurchaseHistoryTable= async (drug_purchase, tx) => {
    tx.executeSql(drug_purchase, [], penSuccessCB, penErrorCB);
}

var createFeedPurchaseHistoryTable= async (feed_purchase, tx) => {
    tx.executeSql(feed_purchase, [], penSuccessCB, penErrorCB);
}

var createDOCPurchaseHistoryTable= async (doc_purchase, tx) => {
    tx.executeSql(doc_purchase, [], penSuccessCB, penErrorCB);
}

var createExpenseHistoryTable= async (expense_sql, tx, resultSet) => {
    tx.executeSql(expense_sql, [], penSuccessCB, penErrorCB);
}

var createDrugusageHistoryTable= async (drugusage_sql, tx, resultSet)=>{
    tx.executeSql(drugusage_sql, [], penSuccessCB, penErrorCB);
}

var createMortalityHistoryTable= async (morta_sql, tx, resultSet)=>{
    tx.executeSql(morta_sql, [], penSuccessCB, penErrorCB);
}

var createProductionHistoryTable= async (prod_sql, tx, resultSet)=>{
    tx.executeSql(prod_sql, [], penSuccessCB, penErrorCB);
}



var penSuccessCB=(tx, result)=>{
    // alert('done')
    console.log(result);
}

var penErrorCB=(error)=>{
    // alert('error')s
    console.log(error);
}
/** END PEN TABLE */

