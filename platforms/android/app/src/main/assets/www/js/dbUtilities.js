
// var client_socket =null;



document.addEventListener('deviceready', function(){
    var poultryDBHandler;

    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    // console.log(poultryDBHandler)

    // $('#purchaseDOC').show();
    // $('#purchaseFeed').hide();
    // $('#purchaseDrugs').hide();

    
    // poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    // poultryDBHandler = window.openDatabase("poultryDB.db", "2.0", "poultry Data", 20000000);
    // console.log(poultryDBHandler);

    console.log("Menu: "+localStorage.getItem('_win'));

    if(localStorage.getItem('_win')==='doc'){
        // alert('dele')
        var DOCdata  = getDOCData    (poultryDBHandler);
    
        $('#purchaseDOC').show();
        $('#purchaseFeed').hide();
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();
        
    }else if(localStorage.getItem('_win')==='feed'){
        var Feeddata = getFeedData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').show();
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();
        
    }else if(localStorage.getItem('_win')==='drug'){
        var Drugdata = getDrugData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide();
        $('#purchaseDrugs').show();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();
        

    } else if(localStorage.getItem('_win')==='production') {
        var Proddata = getProductionData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide();
        $('#purchaseDrugs').hide();

        $('#productionEntry').show();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();
        
    } else if(localStorage.getItem('_win')==='mortality') {
        var mortadata = getMortalityData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide();
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').show();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();
        
    } else if(localStorage.getItem('_win')==='feedusage'){
        var feeduseddata = getFeedServedData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide();
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').show();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();

    }else if(localStorage.getItem('_win')==='dispensary'){
        var dispensarydata = getDrugDispensedData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide();
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').show();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();

    }else if(localStorage.getItem('_win')==='expenses' ){
        var dispensarydata = getFarmExpenseData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide(); 
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').show();
        $('#salesEntry').hide();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();
        

    }else if(localStorage.getItem('_win')==='eggsales' ){
        var dispensarydata = getEggSalesData   (poultryDBHandler);
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide(); 
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').show();
        $('#syncServer').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#layersalesEntry').hide();

    } else if(localStorage.getItem('_win')==='syncserver' ){
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide(); 
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        $('#paymentEntry').hide();
        $('#receiptEntry').hide();
        $('#syncServer').show();
        $('#layersalesEntry').hide();

        $('.img').hide();

        document.addEventListener("online", onOnline, true);
        document.addEventListener("offline", onOffline, false);
        
        async function onOnline() {
            // await dele()
            $('.img').show();
            await syncServer();
            $('.img').hide();
        }
        
        function onOffline() {
            // Handle the offline event
            $('.img').hide();
            // alert('OFFLINE...')
        } 
    }else if(localStorage.getItem('_win')==='payment' ) {
        var dispensarydata = getPayment   (poultryDBHandler);
        
        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide(); 
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        
        $('#syncServer').hide();
        $('#receiptEntry').hide();
        $('#paymentEntry').show();
        $('#layersalesEntry').hide();
        
        // payment_supplier

    }else if(localStorage.getItem('_win')==='receipt'){ //
        var dispensarydata = getReceipt   (poultryDBHandler);

        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide(); 
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        
        $('#syncServer').hide();
        $('#receiptEntry').show();
        $('#paymentEntry').hide();
        $('#layersalesEntry').hide();

    }else if(localStorage.getItem('_win')==='birdsales'){
        var dispensarydata = getReceipt   (poultryDBHandler);

        $('#purchaseDOC').hide();
        $('#purchaseFeed').hide(); 
        $('#purchaseDrugs').hide();

        $('#productionEntry').hide();
        $('#mortalityEntry').hide();
        $('#feedusageEntry').hide();
        $('#drugdispensaryEntry').hide();
        $('#expenseEntry').hide();
        $('#salesEntry').hide();
        
        $('#syncServer').hide();
        $('#receiptEntry').hide();
        $('#paymentEntry').hide();
        $('#layersalesEntry').show();

    }
     //salesEntry

    var supplier = getSupplierDDL(poultryDBHandler);
    var customer = getCustomerDDL(poultryDBHandler);
    var pen      = getPenDDL     (poultryDBHandler);
    var drug     = getDrugsDDL   (poultryDBHandler);
    var feed     = getFeedsDDL   (poultryDBHandler);
    var eggs     = getEggsDDL    (poultryDBHandler); 
    var glacct   = getGLDDL      (poultryDBHandler); 
    var bank     = getBanksDDL   (poultryDBHandler); 
    
    // var eggs     = getEggsDDL    (poultryDBHandler); 
    // var eggs     = getEggsDDL    (poultryDBHandler); 
    
    $('#DOC_saver').click(async function(){
        await saveDOCPurchaseData(poultryDBHandler);
    });
      
    $('#feed_save').click(async function(){
        await saveFeedPurchaseData(poultryDBHandler);
    });
    
    $('#drug_save').click(async function(){
        await saveDrugPurchaseData(poultryDBHandler);
    });
    
    $('#prod_save').click(async function(){
        await saveEggProductionData(poultryDBHandler);
    });
    
    $('#morta_save').click(async function(){
        await saveDailyMortalityData(poultryDBHandler);
    });
    
    $('#feedused_save').click(async function(){
        await saveDailyFeedUsedData(poultryDBHandler);
    });
    
    $('#drugdispensary_save').click(async function(){
        await saveDailyDrugDispensedData(poultryDBHandler);
    });
    
    $('#expense_save').click(async function(){
        await saveDailyFarmExpenseData(poultryDBHandler);
    });
    
    $('#save_save').click(async function(){
        await saveDailySalesData(poultryDBHandler);
    });
    $('#layer_save').click(async function(){
        await saveLayerSalesData(poultryDBHandler);
    });
    
    $('#save_pull').click(async function(){
        var custid=$('#sales_customer').val();
        var dated=$('#sales_dated').val();

        await getDailySalesDataWithParams(poultryDBHandler, custid, dated);

    });

    $('#layer_pull').click(async function(){
        await getLayerSalesData(poultryDBHandler); 
        
        //(poultryDBHandler, custid, dated);

    });

    $('#pay_save').click(async function(){
        await savePaymentData(poultryDBHandler);
    });

    $('#receipt_save').click(async function(){
        await saveReceiptData(poultryDBHandler);
    });
    
}) //end of deviceready event listener

window.onload= async function() {
    // $('#purchaseDOC').show();
    // $('#purchaseFeed').hide();
    // $('#purchaseDrugs').hide();
    
    // // poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    // // poultryDBHandler = window.openDatabase("poultryDB.db", "2.0", "poultry Data", 20000000);
    // console.log(poultryDBHandler);

    // console.log('OnLoad');

    // var supplier = await getSupplierDDL(poultryDBHandler);
    // var pen      = await getPenDDL(poultryDBHandler);
    // // console.log(supplier);

    // $('#doc_supplier').html(supplier);
    // $('#feed_supplier').html(supplier);
    // $('#drug_supplier').html(supplier);

    // $('#doc_pen').html(pen);
    
    // // $('#doc_pen').html(pen);
    // $('#doc_pen').html(pen);

    // document.getElementById('supplier').value=supplier
}
 
// var getSupplierDDL= async (poultryDBHandler) => {
//     return new Promise((resolve, reject) => {
//         poultryDBHandler.transaction((tx) => {
//             tx.executeSql("select * from supplier", [], 
//                 function(tx2, result) {
//                     var len = result.rows.length, i;
//                     var ref, name
                    
//                     var val = "<option value='" +0+ "'>"+"Select a Supplier....."+"</option>";

//                     for(i=0; i<len; i++){
//                         ref = result.rows.item(i).supplier_id
//                         name = result.rows.item(i).supplier_company_name

//                         val += "<option value='" + ref + "'>";
//                         val += name;  
//                         val += "</option>";
//                     }
//                     resolve(val);
                   
//                 }, 
//                 function(err) {
//                     console.log(err)
//             });

//         }); //dbHandler

//     });
    
// }

var getSupplierDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from supplier", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name;
                    // console.log(result);
                    // console.log(len);
                    var val = "<option value='" +0+ "'>"+"Select a supplier....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).supplier_id;
                        name = result.rows.item(i).supplier_company_name;

                        // console.log(ref)
                        // console.log(name)
                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }

                    // console.log(val)
                    $('#doc_supplier').html(val);
                    $('#feed_supplier').html(val);
                    $('#drug_supplier').html(val); 
                    $('#payment_supplier').html(val); 
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
    
}

var getPenDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from pens", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name;
                    // console.log(result);
                    // console.log(len);
                    var val = "<option value='" +0+ "'>"+"Select a Pen house....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).pen_id
                        name = result.rows.item(i).pen_name

                        // console.log(ref)
                        // console.log(name)
                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }

                    // console.log(val)
                    $('#doc_pen').html(val);
                    
                    $('#drug_drugs').html(val);
                    $('#prod_pen').html(val);
                    $('#morta_pen').html(val);
                    $('#feedusage_pen').html(val);
                    $('#used_pen').html(val);
                    $('#dispensary_pen').html(val);
                    $('#layer_pen').html(val);
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
}
var getBanksDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from banks", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name;
                    // console.log(result);
                    // console.log(len);
                    var val = "<option value='" +0+ "'>"+"Select Bank....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).bank_id
                        name = result.rows.item(i).bank_name

                        // console.log(ref)
                        // console.log(name)
                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }

                    // console.log(val)
                    $('#pay_method').html(val);
                    $('#receipt_method').html(val);
                    
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
}

var getNextInvoiceNumber= async (poultryDBHandler)=>{
    return new Promise((resolve, reject)=>{
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select invoice_no from invoice_tbl', [], 
            function(tx, result){
                var nxt_inv = result.rows.item(0).invoice_no + 1;

                $('#sales_invoice').val(nxt_inv);
                /**update value as well */
                tx.executeSql('update invoice_tbl set invoice_no = invoice_no + 1', [], 
                function(tx, res){
                    console.log('Invoice updated with...'+nxt_inv)
                }, 
                function(err){
                    console.log(err)
                })
                resolve(nxt_inv)
            }, 
            function(err){
                console.log(err)
            })

            
            
        })
    })
}

var getDOCData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select b.purchase_id, p.pen_name, b.trans_date, b.quantity, b.buy_price from broiler_trans_hist b inner join pens p ON p.pen_id = b.pen_id order by purchase_id desc", [], 
                function(tx2, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";

                    
                    str += "<thead><tr><th>Date</th><th>Pen</th><th>Qty</th><th>Amt</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from broiler_trans_hist where purchase_id=?";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).purchase_id
                        penid = result.rows.item(i).pen_name
                        dated = result.rows.item(i).trans_date
                        name = result.rows.item(i).supplierid
                        qty = result.rows.item(i).quantity
                        rate = result.rows.item(i).buy_price

                        amt = qty * rate;
                    
                        str += "<tr><td>"+dated+"</td><td>"+penid+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='doc' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        // str += "<tr><td>"+dated+"</td><td>"+ref+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-success' id='"+ref+"' value='"+del_Qry+"' placeholder='"+poultryDBHandler+"'  onclick=deleteDOCEntry(this.id, this.value, this.placeholder) ><i class='img/b_drop.png'><i/>Delete</button></td></tr>";
                    
                        // console.log(ref)
                        // console.log(dated)
                        // console.log(name)
                    }
                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str)

                    // resolve(val);
                
                }, 
                function(err) {
                    console.log(err)
                    console.log('Doc error')
                }

            
            );

            
        })

    });
    
}

var getFeedData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql("select f.refnos, f.dated, fs.feedname, f.qty, f.buy_price from feedpurchase f inner join feeds fs ON fs.id = f.goods_id order by refnos desc", [], 
                function(tx2, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";

                    
                    str += "<thead><tr><th>Date</th><th>Feed</th><th>Qty</th><th>Amt</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from feedpurchase where refnos=?";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).refnos
                        goods_id = result.rows.item(i).feedname
                        dated = result.rows.item(i).dated
                        // name = result.rows.item(i).supplierid
                        qty = result.rows.item(i).qty
                        rate = result.rows.item(i).buy_price

                        amt = qty * rate;
                    
                        str += "<tr><td>"+dated+"</td><td>"+goods_id+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='feed' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        // str += "<tr><td>"+dated+"</td><td>"+ref+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-success' id='"+ref+"' value='"+del_Qry+"' placeholder='"+poultryDBHandler+"'  onclick=deleteDOCEntry(this.id, this.value, this.placeholder) ><i class='img/b_drop.png'><i/>Delete</button></td></tr>";
                    
                        // console.log(ref)
                        // console.log(dated)
                        // console.log(name)
                    }
                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str)

                    // resolve(val);
                
                }, 
                function(err) {
                    console.log(err)
                    console.log('Doc error')
                }

            
            );

            
        })

    });
    
}

var getDrugData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql("select d.refnos, g.description, d.dated, d.qty, d.buy_price from drugpurchase d inner join goods g ON g.goods_id = d.goods_id order by refnos desc", [], 
                function(tx2, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";

                    
                    str += "<thead><tr><th>Date</th><th>Drug</th><th>Qty</th><th>Amt</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from drugpurchase where refnos=?";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).refnos
                        goods_id = result.rows.item(i).description
                        dated = result.rows.item(i).dated
                        // name = result.rows.item(i).supplierid
                        qty = result.rows.item(i).qty
                        rate = result.rows.item(i).buy_price

                        amt = qty * rate;
                    
                        str += "<tr><td>"+dated+"</td><td>"+goods_id+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='drug' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        // str += "<tr><td>"+dated+"</td><td>"+ref+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-success' id='"+ref+"' value='"+del_Qry+"' placeholder='"+poultryDBHandler+"'  onclick=deleteDOCEntry(this.id, this.value, this.placeholder) ><i class='img/b_drop.png'><i/>Delete</button></td></tr>";
                    
                        // console.log(ref)
                        // console.log(dated)
                        // console.log(name)
                    }
                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str)

                    // resolve(val);
                
                }, 
                function(err) {
                    console.log(err)
                    console.log('Doc error')
                }

            
            );

            
        })

    });
    
}

var getProductionData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql("select p.refnos, p.trans_date, p.pieces, p.srcdoc, ps.pen_name, gt.goods_description, p.quantity from production p inner join pens ps ON ps.pen_id = p.penid inner join goods_table gt ON gt.goods_id = p.productid  order by p.refnos desc", [], 
                function(tx2, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk, pieces, srcdoc;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";

                    
                    str += "<thead><tr><th>Date</th><th>Pen</th><th>Product</th><th>Crates</th><th>Pieces</th><th>Inv#</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from production where refnos=?";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).refnos
                        pen_id = result.rows.item(i).pen_name
                        dated = result.rows.item(i).trans_date
                        product = result.rows.item(i).goods_description
                        qty = result.rows.item(i).quantity
                        pieces = result.rows.item(i).pieces
                        srcdoc = result.rows.item(i).srcdoc

                        str += "<tr><td>"+dated+"</td><td>"+pen_id+"</td><td>"+product+"</td><td>"+qty+"</td><td>"+pieces+"</td><td>"+srcdoc+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='production' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        // str += "<tr><td>"+dated+"</td><td>"+ref+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-success' id='"+ref+"' value='"+del_Qry+"' placeholder='"+poultryDBHandler+"'  onclick=deleteDOCEntry(this.id, this.value, this.placeholder) ><i class='img/b_drop.png'><i/>Delete</button></td></tr>";
                    
                        // console.log(ref)
                        // console.log(dated)
                        // console.log(name)
                    }
                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str)

                    // resolve(val);
                
                }, 
                function(err) {
                    console.log(err)
                    console.log('Doc error')
                }

            
            );

            
        })

    });
    
}

var getMortalityData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        // var sql = "select p.refnos, p.date, ps.pen_name, p.quantity from mortality_hist m inner join pens ps ON ps.pen_id = m.pen_id order by mortality_id";
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select m.mortality_id, m.pen_id, m.date, m.quantity, p.pen_name from mortality_hist m inner join pens p ON p.pen_id = m.pen_id order by mortality_id desc ', [], 
                function(tx2, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";

                    
                    str += "<thead><tr><th>Date</th><th>Pen</th><th>Morta.Qty</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from mortality_hist where mortality_id=?";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).mortality_id
                        pen_id = result.rows.item(i).pen_name
                        dated = result.rows.item(i).date
                        
                        qty = result.rows.item(i).quantity
                        // wk = result.rows.item(i).currentweek

                        str += "<tr><td>"+dated+"</td><td>"+pen_id+"</td><td>"+qty+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='mortality' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        // str += "<tr><td>"+dated+"</td><td>"+ref+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-success' id='"+ref+"' value='"+del_Qry+"' placeholder='"+poultryDBHandler+"'  onclick=deleteDOCEntry(this.id, this.value, this.placeholder) ><i class='img/b_drop.png'><i/>Delete</button></td></tr>";
                    
                        // console.log(ref)
                        // console.log(dated)
                        // console.log(name)
                    }
                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str)

                    // resolve(val);
                
                }, 
                function(err) {
                    console.log(err)
                    console.log('Doc error')
                }

            
            );

            
        })

    });
    
}

var getFeedServedData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        // var sql = "select p.refnos, p.date, ps.pen_name, p.quantity from mortality_hist m inner join pens ps ON ps.pen_id = m.pen_id order by mortality_id";
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select f.refnos, p.pen_name, f.dated, fs.feedname, f.qty from feedUsage f inner join pens p on p.pen_id = f.pen_id inner join feeds fs on fs.id = f.goods_id order by f.refnos desc  ', [], 
                function(tx2, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";
                    
                    str += "<thead><tr><th>Date</th><th>Pen</th><th>Feed</th><th>Bags</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from feedUsage where refnos=?";

                    for(i=0; i<len; i++) {
                        ref     = result.rows.item(i).refnos
                        pen_id  = result.rows.item(i).pen_name
                        dated   = result.rows.item(i).dated
                        goods_id= result.rows.item(i).feedname
                        qty     = result.rows.item(i).qty

                        var bgqty=0;
                        if(qty>0){
                            bgqty = qty/25;
                        }
                        

                        str += "<tr><td>"+dated+"</td><td>"+pen_id+"</td><td>"+goods_id+"</td><td>"+bgqty+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='feedused' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str);
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err)
                    console.log('Doc error')
                }

            
            );

            
        })

    });
    
}

var getDrugDispensedData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        // var sql = "select d.refnos, p.pen_name, d.dated, fs.description, d.qty from drug_dispensed d inner join pens p on p.pen_id = f.pen_id inner join goods fs on fs.goods_id = d.goods_id order by d.refnos desc ";
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select d.refnos, p.pen_name, d.dated, g.description, d.qty from drug_dispensed d inner join pens p ON p.pen_id = d.pen_id inner join goods g ON g.goods_id = d.goods_id order by d.refnos desc', [], 
                function(tx, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";
                    
                    str += "<thead><tr><th>Date</th><th>Pen</th><th>Drug</th><th>Qty(kg)</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from drug_dispensed where refnos=?";

                    for(i=0; i<len; i++) {
                        ref     = result.rows.item(i).refnos
                        pen_id  = result.rows.item(i).pen_name
                        dated   = result.rows.item(i).dated
                        goods_id= result.rows.item(i).description
                        qty     = result.rows.item(i).qty

                        str += "<tr><td>"+dated+"</td><td>"+pen_id+"</td><td>"+goods_id+"</td><td>"+qty+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='dispensary' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str);
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err)
                    console.log('Doc error')
                }

            
            );

            
        })

    });
    
}

var getFarmExpenseData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        // var sql = "select d.refnos, p.pen_name, d.dated, fs.description, d.qty from drug_dispensed d inner join pens p on p.pen_id = f.pen_id inner join goods fs on fs.goods_id = d.goods_id order by d.refnos desc ";
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select gl.hist_id, g.account_title, gl.valuedate, gl.amount from gl_tran_hist gl inner join general_ledger g ON g.account_id = gl.account_id order by gl.hist_id desc', [], 
                function(tx, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";
                    
                    str += "<thead><tr><th>Date</th><th>Account</th><th>Amount(N)</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from gl_tran_hist where hist_id=?";

                    for(i=0; i<len; i++) {
                        ref     = result.rows.item(i).hist_id
                        acct_id  = result.rows.item(i).account_title
                        dated   = result.rows.item(i).valuedate
                        amt     = result.rows.item(i).amount

                        str += "<tr><td>"+dated+"</td><td>"+acct_id+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='expenses' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str);
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err)
                    console.log('Doc error')
                }
            
            );

        })

    });
    
}

var getLayerSalesData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        
        poultryDBHandler.transaction((tx) => {
            tx.executeSql('select s.refnos, c.cust_company_name, s.trans_date, p.pen_name, s.quantity, s.us_price from layersales_tbl s inner join pens p ON p.pen_id = s.pen_id inner join customer c ON c.cust_id = s.cust_id order by refnos desc', [], 
                function(tx, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk;
                    $("#result_holder").html('');
                    var str = "<table id='ajax-datatable' style='overflow: scroll' class='display table table-bordered table-striped'>";
                    str += "<thead><tr><th>Date</th><th>Customer</th><th>Pen</th><th>Qty</th><th>Amt</th></tr></thead>";
                    str += "<tbody>";
                    var del_Qry = "delete from layersales_tbl where refnos=?";
                    var count=0;

                    for(i=0; i<len; i++) {

                        ref      = result.rows.item(i).refnos;
                        custid   = result.rows.item(i).cust_company_name;
                        dated    = result.rows.item(i).trans_date;

                        pen      = result.rows.item(i).pen_name;
                        qty      = result.rows.item(i).quantity;
                        rate     = result.rows.item(i).us_price;

                        count++;
                        var amt = qty * rate;
                        str += "<tr><td>"+dated+"</td><td>"+custid+"</td><td>"+pen+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='eggsales' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str);
                    $("#layerreccount").html("Record #: "+count);
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err.message)
                    console.log('Doc error')
                }
            
            );

        })

    });
    
}

var getEggSalesData= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql('select s.refnos, c.cust_company_name, s.trans_date, g.goods_description, s.quantity, s.us_price from sales_tbl s inner join customer c on c.cust_id = s.cust_id inner join goods_table g on g.goods_id = s.goods_id order by refnos desc', [], 
                function(tx, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk;
                    $("#result_holder").html('')

                    var str = "<table id='ajax-datatable' style='overflow: scroll' class='display table table-bordered table-striped'>";
                    
                    str += "<thead><tr><th>Date</th><th>Customer</th><th>Eggs</th><th>Qty</th><th>Amt</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from sales_tbl where refnos=?";

                    for(i=0; i<len; i++) {
                        ref     = result.rows.item(i).refnos
                        custid  = result.rows.item(i).cust_company_name
                        dated   = result.rows.item(i).trans_date
                        item     = result.rows.item(i).goods_description
                        qty      = result.rows.item(i).quantity
                        rate     = result.rows.item(i).us_price
                        // inv      = result.rows.item(i).invoice

                        var amt = qty * rate;
                        str += "<tr><td>"+dated+"</td><td>"+custid+"</td><td>"+item+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='eggsales' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str);
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err)
                    console.log('Doc error')
                }
            
            );

        })

    });
    
}

var getDailySalesDataWithParams= async (poultryDBHandler, t_customer, t_dated) => {
    return new Promise((resolve, reject) => {
        // var sql = "select d.refnos, p.pen_name, d.dated, fs.description, d.qty from drug_dispensed d inner join pens p on p.pen_id = f.pen_id inner join goods fs on fs.goods_id = d.goods_id order by d.refnos desc ";
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select s.refnos, c.cust_company_name, s.trans_date, g.goods_description, s.quantity, s.us_price from sales_tbl s inner join customer c on c.cust_id = s.cust_id inner join goods_table g on g.goods_id = s.goods_id where s.cust_id=? and s.trans_date=? order by refnos desc', [t_customer, t_dated], 
                function(tx, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, qty, penid, wk;
                    $("#result_holder").html('')
                    var reccount=0;

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";
                    
                    str += "<thead><tr><th>Date</th><th>Customer</th><th>Eggs</th><th>Qty</th><th>Amt</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from sales_tbl where refnos=?";

                    for(i=0; i<len; i++) {
                        reccount++;
                        ref     = result.rows.item(i).refnos
                        custid  = result.rows.item(i).cust_company_name
                        dated   = result.rows.item(i).trans_date
                        item     = result.rows.item(i).goods_description
                        qty      = result.rows.item(i).quantity
                        rate     = result.rows.item(i).us_price
                        // inv      = result.rows.item(i).invoice

                        var amt = qty * rate;
                        str += "<tr><td>"+dated+"</td><td>"+custid+"</td><td>"+item+"</td><td>"+qty+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='eggsales' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str);
                    $("#reccount").html('<b>Record count: </b>'+reccount );
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err)
                    console.log('Doc error')
                }
            
            );

        })

    });
    
}

var getPayment= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        // var sql = "select d.refnos, p.pen_name, d.dated, fs.description, d.qty from drug_dispensed d inner join pens p on p.pen_id = f.pen_id inner join goods fs on fs.goods_id = d.goods_id order by d.refnos desc ";
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select p.refnos, s.supplier_company_name, p.trans_date, b.bank_name, p.amount from payment p inner join supplier s on s.supplier_id = p.supplier_id inner join banks b on b.bank_id = p.methodid order by p.refnos desc ', [], 
                function(tx, result) {
                    console.log(result);
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, suppid, qty, bank, wk;
                    $("#result_holder").html('')
                    var reccount=0;

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";
                    
                    str += "<thead><tr><th>Date</th><th>Supplier</th><th>Bank</th><th>Amount</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from payment where refnos=?";

                    for(i=0; i<len; i++) {
                        reccount++;
                        ref     = result.rows.item(i).refnos
                        suppid  = result.rows.item(i).supplier_company_name
                        dated   = result.rows.item(i).trans_date
                        bank     = result.rows.item(i).bank_name
                        amt      = result.rows.item(i).amount
                          
                         
                        str += "<tr><td>"+dated+"</td><td>"+suppid+"</td><td>"+bank+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='payment' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";

                    $("#result_holder").html(str);
                    $("#reccount").html('<b>Record count: </b>'+reccount );
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err)
                    console.log('Doc error')
                }
            
            );

        })

    });
    
}

var getReceipt= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        // var sql = "select r.refnos, c.cust_company_name, r.trans_date, b.bank_name, r.amount from receipt r inner join customer c on c.cust_id = r.cust_id inner join banks b on b.bank_id = r.methodid  ";
        poultryDBHandler.transaction((tx)=>{
            tx.executeSql('select r.refnos, c.cust_company_name, r.trans_date, b.bank_name, r.amount from receipt r inner join customer c on c.cust_id = r.cust_id inner join banks b on b.bank_id = r.methodid ', [], 
                function(tx, result) {
                    console.log(JSON.stringify(result));
                    var len = result.rows.length, i;
                    var ref, name, dated, rate, amt, custid, qty, bank, wk;
                    $("#result_holder").html('')
                    var reccount=0;

                    var str = "<table id='ajax-datatable' class='display table table-bordered table-striped'>";
                    
                    str += "<thead><tr><th>Date</th><th>Customer</th><th>Bank</th><th>Amount</th></tr></thead>";
                    str += "<tbody>";

                    var del_Qry = "delete from receipt where refnos=?";

                    for(i=0; i<len; i++) {
                        reccount++;
                        ref     = result.rows.item(i).refnos
                        custid  = result.rows.item(i).cust_company_name
                        dated   = result.rows.item(i).trans_date
                        bank    = result.rows.item(i).bank_name
                        amt     = result.rows.item(i).amount
                          
                         
                        str += "<tr><td>"+dated+"</td><td>"+custid+"</td><td>"+bank+"</td><td>"+amt+"</td><td><button class='btn btn-danger' id='"+ref+"' value='"+del_Qry+"' name='receipt' onclick='deleteEntry(this.id, this.value, this.name)' >Delete</button></td></tr>";
                        
                    }

                    str += "</tbody>";
                    str += "</table>";
// alert(str)
                    $("#result_holder").html(str);
                    $("#reccount").html('<b>Record count: </b>'+reccount );
                
                }, 
                function(err) {
                    console.log(err.code)
                    console.log(err)
                    console.log('Doc error')
                }
            
            );

        })

    });
    
}

function deleteEntry(id, sql_stmt, code){ 
    // var db = window.openDatabase("poultryDB.db", "2.0", "poultry data", 20000000);
    var db = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    db.transaction(function(tx) {
        tx.executeSql(sql_stmt, [id],
            //On Success
            function(tx, result) {
                console.log('Deleted successfully');
                if(code==='doc'){
                    getDOCData(db);
                }else if(code==='feed'){
                    getFeedData(db);
                }else if(code==='drug'){
                    getDrugData(db);
                }else if(code==='production'){
                    getProductionData(db);
                }else if(code==='mortality'){
                    getMortalityData(db);
                }else if(code==='feedused'){
                    getFeedServedData(db);
                }else if(code==='dispensary'){
                    getDrugDispensedData(db);
                }else if(code==='expenses'){
                    getFarmExpenseData(db);
                }else if(code==='eggsales'){
                    getEggSalesData(db);
                }else if(code==='payment'){
                    getPayment(db);
                }else if(code==='receipt'){
                    getPayment(db);
                }else if(code==='birdsales'){
                    getLayerSalesData(db);
                }
                
            },
            //On Error
            function(error) {
                console.log(error)
                console.log(error.code)
                console.log(error.message)
                console.log('Something went Wrong');
            });
    });
}
// other methods here
function deleteDOCEntry(id, sql_stmt, myDB){
    // myDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    console.log(myDB)
    console.log(id)
    console.log(sql_stmt)

    myDB.transaction(function(transaction) {
        transaction.executeSql(sql_stmt, [id],
            //On Success
            function(tx, result) {
                console.log('Delete successfully');
            },
            //On Error
            function(error) {
                console.log('Something went Wrong');
            });
    });
}

var getCustomerDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from customer", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name
                    
                    var val = "<option value='" +0+ "'>"+"Select a Customer....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).cust_id
                        name = result.rows.item(i).cust_company_name

                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }
                    $("#sales_customer").html(val);
                    $("#receipt_customer").html(val);
                    $("#layer_customer").html(val);
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
}

var getEggsDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from goods_table", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name
                    
                    var val = "<option value='" +0+ "'>"+"Select Egg Type....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).goods_id
                        name = result.rows.item(i).goods_description

                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }

                    $("#prod_egg").html(val)
                    $("#sales_egg").html(val)
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
}

var getGLDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from general_ledger ", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name
                    
                    var val = "<option value='" +0+ "'>"+"Select GL Account....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).account_id
                        name = result.rows.item(i).account_title

                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }

                    $("#gl_acct").html(val)
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
}

var getDrugsDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from goods", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name
                    
                    var val = "<option value='" +0+ "'>"+"Select drug/item....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).goods_id
                        name = result.rows.item(i).description

                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }
                    // console.log(val)
                    $('#drug_drugs').html(val);
                    $('#dispensary_drug').html(val);
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
}

var getFeedsDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            // console.log('LADELE!')
            tx.executeSql("select * from feeds", [], 
                function(tx2, result) {
                    console.log(result)
                    var len = result.rows.length, i;
                    var ref, name
                    
                    var val = "<option value='" +0+ "'>"+"Select Feed....."+"</option>";

                    for(i=0; i<len; i++) {
                        ref = result.rows.item(i).id
                        name = result.rows.item(i).feedname

                        // console.log(id)
                        // console.log(name)

                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }

                    console.log(val)
                    $('#feed_feeds').html(val);
                    $('#used_feed').html(val);
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err.code)
                    console.log('error')
            });
        });
    });
}

var getPensDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            // console.log('LADELE!')
            tx.executeSql("select * from pens where quantity_of_birds > 0", [], 
                function(tx2, result) {
                    console.log(result)
                    var len = result.rows.length, i;
                    var ref, name
                    
                    var val = "<option value='" +0+ "'>"+"Select Pen....."+"</option>";

                    for(i=0; i<len; i++) {
                        ref = result.rows.item(i).id
                        name = result.rows.item(i).feedname

                        // console.log(id)
                        // console.log(name)

                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }

                    console.log(val)
                    $('#feed_feeds').html(val);
                    $('#used_feed').html(val);
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err.code)
                    console.log('error')
            });
        });
    });
}

var getGLAccountDDL= async (poultryDBHandler) => {
    return new Promise((resolve, reject) => {
        poultryDBHandler.transaction((tx) => {
            tx.executeSql("select * from general_ledger", [], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    var ref, name
                    
                    var val = "<option value='" +0+ "'>"+"Select an Expense Account....."+"</option>";

                    for(i=0; i<len; i++){
                        ref = result.rows.item(i).account_id
                        name = result.rows.item(i).account_title

                        val += "<option value='" + ref + "'>";
                        val += name;  
                        val += "</option>";
                    }
                    resolve(val);
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });
    });
}

var calculateDOCAmount=()=>{
    $('#doc_amt').val($('#doc_qty').val() * $('#doc_cost').val()); 
}

var calculateFeedAmount=()=>{
    $('#feed_amt').val( $('#feed_qty').val() * $('#feed_cost').val() ); 
}

var calculateDrugAmount=()=>{
    $('#drug_amt').val($('#drug_qty').val() * $('#drug_cost').val()); 
}

var convertFeedBagToKg=(bag)=>{
    var kg = bag * 25;
    $('#used_qty').val(kg)
}

var calculateSalesAmount=()=>{
    $('#sales_amt').val( $('#sp').val() * $('#sales_qty').val() )
}

var calculatelayerSalesAmount=()=>{
    $('#layer_amt').val( $('#layer_sp').val() * $('#layer_qty').val() )
}

var getCost=(val)=>{
    var dbHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    
    return new Promise((resolve, reject)=>{
        dbHandler.transaction((tx)=>{
            tx.executeSql("select balance, quantity_of_birds from pens", [val], 
                function(tx2, result) {
                    var len = result.rows.length, i;
                    balance=0, qty=0;
                     
                    for(i=0; i<len; i++){
                        balance = result.rows.item(i).balance;
                        qty = result.rows.item(i).quantity_of_birds;
                    }
                    resolve(balance/qty);

                    balance = 
                    $('#layer_sp').val(balance/qty)
                    $('#layer_sp').focus();
                   
                }, 
                function(err) {
                    console.log(err)
            });
        });


    })
}

var convertFeedKgToBag=(kg)=>{
    if(kg>0){
        var bag = kg / 25;
    
    }else{
        alert('Value above 0 allowed!!!')
        return;
    }
    $('#used_bag').val(bag)
}

var getData=(id)=>{
    $('#sales_invoice').val("")
}

var saveDOCPurchaseData= async (poultryDBHandler) => {
    var supplier = $('#doc_supplier').val();
    var pen      = $('#doc_pen').val();
    var cost     = $('#doc_cost').val();
    var qty      = $('#doc_qty').val();
    var amt      = $('#doc_amt').val();
    var dob      = $('#doc_dob').val();
    var inv      = $('#doc_invoice').val();
    console.log("Pen:"+ pen)
    poultryDBHandler.transaction(insertDoc, errorCB, docsuccessCB);

    function insertDoc(tx) {
        tx.executeSql('insert into broiler_trans_hist (trans_date, invoice_no, amount, pen_id, quantity, buy_price, user_id, supplierid, goods_id, age, flightnumber) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [dob, inv, amt, pen, qty, cost, "local", supplier, "DOC", 0, "NA" ]);
        
    }

}

var saveFeedPurchaseData= async (poultryDBHandler) => {
    var supplier = $('#feed_supplier').val();
    var feed     = $('#feed_feeds')   .val();
    var dated    = $('#feed_dated')   .val();
    var inv      = $('#feed_invoice') .val();
    var cost     = $('#feed_cost')    .val();
    var qty      = $('#feed_qty')     .val();
    var amt      = $('#feed_amt')     .val();

    poultryDBHandler.transaction(insertFeed, errorCB, feedsuccessCB);

    function insertFeed(tx) {
        tx.executeSql('insert into feedpurchase (supplier, goods_id, qty, buy_price, dated, invoice, flightnumber) values (?, ?, ?, ?, ?, ?, ?)', [supplier, feed, qty, cost, dated, inv, "NA" ]);
    }

}

var saveDrugPurchaseData= async (poultryDBHandler) => {
    var supplier = $('#drug_supplier').val();
    var drug     = $('#drug_drugs')   .val();
    var dated    = $('#drug_dated')   .val();
    var inv      = $('#drug_invoice') .val();
    var cost     = $('#drug_cost')    .val();
    var qty      = $('#drug_qty')     .val();
    var amt      = $('#drug_amt')     .val();

    poultryDBHandler.transaction(insertDrug, errorCB, drugsuccessCB);

    function insertDrug(tx) {
        tx.executeSql('insert into drugpurchase (supplier, goods_id, qty, buy_price, dated, invoice, flightnumber) values (?, ?, ?, ?, ?, ?, ?)', [supplier, drug, qty, cost, dated, inv, "NA" ]);
    }

}

var saveEggProductionData= async (poultryDBHandler) => {
    var dated   = $('#prod_dated').val();
    var penid   = $('#prod_pen')  .val();
    var product = $('#prod_egg')  .val();
    var qty     = $('#prod_qty')  .val();
    var pieces  = $('#prod_piece')  .val();
    var srcdoc  = $('#prod_srcdoc')  .val();

    var amt=0; var user_id="manager"; var wk;

    if(dated==="" || dated===null){
        alert('Empty Date not allowed!!!');
        return;
    }

    poultryDBHandler.transaction(insertProduction, errorCB, productionsuccessCB);
    // refnos, trans_date, penid, productid, quantity, amount, user_id, currentweek
    function insertProduction(tx) {
        tx.executeSql('insert into production (trans_date, penid, productid, quantity, amount, user_id, currentweek, flightnumber, pieces, srcdoc) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [dated, penid, product, qty, amt, user_id, wk, "NA", pieces, srcdoc ]);
    }

}

var saveDailyMortalityData= async (poultryDBHandler) => {
    var dated = $('#morta_dated').val();
    var penid = $('#morta_pen')  .val();
    var qty   = $('#morta_qty')  .val();
    var doc   = $('#morta_srcdoc')  .val();

    var amt   = 0; var user_id="manager"; var wk=0;

    poultryDBHandler.transaction(insertMortality, errorCB, mortalitysuccessCB);
    function insertMortality(tx) {
        tx.executeSql('insert into mortality_hist (pen_id, date, quantity, currentweek, flightnumber, srcdoc) values (?, ?, ?, ?, ?, ?)', [penid, dated, qty, wk, "NA", doc ]);
    }

}

var saveDailyFeedUsedData= async (poultryDBHandler) => {
    var dated = $('#used_dated').val();
    var penid = $('#used_pen')  .val();
    var feedid= $('#used_feed') .val();
    var qty   = $('#used_qty')  .val();
    // var bag   = $('#used_bag').val();

    var cp=0; 

    var amt   = 0; var user_id="manager"; var wk=0;

    poultryDBHandler.transaction(insertFeedUsed, errorCB, feedusedsuccessCB);
    function insertFeedUsed(tx) {
        tx.executeSql('insert into feedUsage (pen_id, goods_id, qty, cost_price, dated, flightnumber) values (?, ?, ?, ?, ?, ?)', [penid, feedid, qty, cp, dated, "NA" ]);
    }

}

var saveDailyDrugDispensedData= async (poultryDBHandler) => {
    var dated  = $('#dispensary_dated').val();
    var penid  = $('#dispensary_pen').val();
    var drugid = $('#dispensary_drug').val();
    var qty    = $('#dispensary_qty').val();
    // var bag   = $('#used_bag').val();

    var cp=0; 

    var amt   = 0; var user_id="manager"; var wk=0;

    poultryDBHandler.transaction(insertDrugUsed, errorCB, drugusedsuccessCB);
    function insertDrugUsed(tx) {
        tx.executeSql('insert into drug_dispensed (pen_id, goods_id, qty, cost_price, dated, flightnumber) values (?, ?, ?, ?, ?, ?)', [penid, drugid, qty, cp, dated, "NA" ]);
    }

}

var saveDailyFarmExpenseData= async (poultryDBHandler) => {
    var dated   = $('#gl_dated').val();
    var acctid  = $('#gl_acct').val();
    var amt     = $('#gl_amt').val();
    var narr    = $('#gl_narration').val();
    var pcv     = $('#gl_pcv').val();

    var cp=0; 

    var user_id="manager"; var wk=0;

    poultryDBHandler.transaction(insertFarmDailyExpense, errorCB, dailyExpensesuccessCB);
    function insertFarmDailyExpense(tx) {
        tx.executeSql('insert into gl_tran_hist (account_id, valuedate, narrative, amount, trans_type, flightnumber) values (?, ?, ?, ?, ?, ?)', [acctid, dated, narr, amt, pcv, "NA" ]);
    }

}

var saveDailySalesData = async (poultryDBHandler) => {
    if($('#sales_invoice').val()==="" || $('#sales_invoice').val()===null){
        alert('Invoice# can not be null!!!');
        return
        // var inv = await getNextInvoiceNumber(poultryDBHandler);
    }
    var dated       = $('#sales_dated').val();
    var custid      = $('#sales_customer').val();
    
    var invoice     = $('#sales_invoice').val();

    var product     = $('#sales_egg').val();
    var qty         = $('#sales_qty').val();
    var prc         = $('#sp').val();
    var cp=0;  
    var user_id="manager"; var wk=0;
    // ttype=0 ==sales; 9==cracks
    var ttype   = $("input[name='sales']:checked").val();
        
    console.log('Sales Inserted...');

    poultryDBHandler.transaction(insertEggSales, errorCB, eggSalessuccessCB);
    function insertEggSales(tx) {
        tx.executeSql('insert into sales_tbl (trans_date, goods_id, cust_id, quantity, us_price, invoice, flightnumber, currentweek) values (?, ?, ?, ?, ?, ?, ?, ?)', [dated, product, custid, qty, prc, invoice, "NA", ttype ]);
    }

}

var saveLayerSalesData= async (poultryDBHandler) => {
    if($('#layer_invoice').val()==="0"){
        alert('Invoice# can not be null!!!');
        return
        // var inv = await getNextInvoiceNumber(poultryDBHandler);
    }

    var dated       = $('#layer_dated').val();
    var custid      = $('#layer_customer').val();
    
    var invoice     = $('#layer_invoice').val();

    var penid     = $('#layer_pen').val();
    var qty         = $('#layer_qty').val();
    var prc         = $('#layer_sp').val();
    var amt         = $('#layer_amt').val();

    var cp=0;  
    var user_id="manager"; var wk=0; 

    poultryDBHandler.transaction(insertLayerSales, errorCB, layerSalessuccessCB);
    function insertLayerSales(tx) {
        tx.executeSql('insert into layersales_tbl (trans_date, pen_id, cust_id, quantity, us_price, flightnumber) values (?, ?, ?, ?, ?, ?)', [dated, penid, custid, qty, prc, "NA" ]);
    }
}

var savePaymentData= async (poultryDBHandler) => {
    var dated       = $('#pay_dated').val();
    var suppid      = $('#payment_supplier').val();
    // var cheque     = $('#pay_cheque').val();
    var method     = $('#pay_method').val();
    var amt         = $('#pay_amt').val();
    // var narra       = $('#pay_narra').val();

    var cp=0; 

    var user_id="manager"; var wk=0;

    // if(invoice==="0"){
    //     getNextInvoice();
    // }
    poultryDBHandler.transaction(insertPayment, errorCB, paymentsuccessCB);
    function insertPayment(tx) {
        tx.executeSql('insert into payment (supplier_id, trans_date, amount, methodid) values (?, ?, ?, ?)', [suppid, dated, amt, method ]);
    }

}

var saveReceiptData= async (poultryDBHandler) => {
    var dated       = $('#receipt_dated').val();
    var custid      = $('#receipt_customer').val();
    // var cheque     = $('#pay_cheque').val();
    var method     = $('#receipt_method').val();
    var amt         = $('#receipt_amt').val();
    // var narra       = $('#pay_narra').val();

    var cp=0; 

    var user_id="manager"; var wk=0;

    // if(invoice==="0"){
    //     getNextInvoice();
    // }
    poultryDBHandler.transaction(insertReceipt, errorCB, receiptsuccessCB);
    function insertReceipt(tx) {
        console.log("custid: "+custid)
        console.log("Date : "+dated)
        console.log("Amount: "+amt)
        console.log("method: "+method)
        tx.executeSql('insert into receipt (cust_id, trans_date, amount, methodid) values (?, ?, ?, ?)', [custid, dated, amt, method ]);
    }

}

function errorCB(err) {
    console.info("Error processing SQL: "+err.code);
    console.info(err);
    console.info(err.code);
    console.info(err.message);

    /**Initiate a mail message here and send the error to MAIL */
    errorLogger
}

async function getNextInvoice(){
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    getNextInvoiceNumber(poultryDBHandler);
}

function successCB(){
    console.info("Feed Purchase inserted successfully!!!");
}

function docsuccessCB() {
    console.info("Feed Purchase inserted successfully!!!");
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    getDOCData(poultryDBHandler); 
}
function feedsuccessCB() {
    console.info("Feed Purchase inserted successfully!!!");
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    getFeedData(poultryDBHandler)
    
}
function drugsuccessCB() {
    console.info("Drug Purchase inserted successfully!!!");
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getDrugData(poultryDBHandler);
}

function productionsuccessCB() {
    console.info("Production inserted successfully!!!");
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getProductionData(poultryDBHandler);
}

function mortalitysuccessCB() {
    console.info("Mortality inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getMortalityData(poultryDBHandler);
}
function feedusedsuccessCB() {
    console.info("Feed Used inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getFeedServedData(poultryDBHandler);
}

function drugusedsuccessCB() {
    console.info("Drug Dispensed Used inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getDrugDispensedData(poultryDBHandler);
}

function dailyExpensesuccessCB() {
    console.info("Daily farm expense inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getFarmExpenseData(poultryDBHandler); 
}

function eggSalessuccessCB() {
    console.info("Sales inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getEggSalesData(poultryDBHandler);
}
function layerSalessuccessCB() {
    console.info("Layers Sales inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getLayerSalesData(poultryDBHandler);
}
function paymentsuccessCB() {
    console.info("Payment inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getPayment(poultryDBHandler);
}
function receiptsuccessCB() {
    console.info("Receipt inserted successfully!!!");
    // console.log(tx)
    // console.log(res)
    poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    getReceipt(poultryDBHandler);
}

function getItemData(id){
    console.log('ID: '+id);
    var db = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});

    db.transaction((tx)=>{
        tx.executeSql('select * from goods_table where goods_id = ?', [id], 
        function(tx, result){
            console.log(result)
            for(var x =0; x< result.rows.length; x++){

                $('#cp').val(result.rows.item(x).buy_price);
                $('#sp').val(result.rows.item(x).sell_price);
                // $('#sales_invoice').val('');
            }
        }, 
        function(err){
            console.log(err.code)
            errorLogger(err)
        })
    })
}

function getBirthDate(penid){
    // poultryDBHandler = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: "default"});
    // console.log('pen id: '+ penid)
    // console.log(poultryDBHandler)

    // poultryDBHandler.transaction((tx)=>{
    //     tx.executeSql('select * from pens where pen_id = ?', [penid], 
    //         function(tx, rs){
    //             var len = rs.rows.length
    //             console.log(len)
    //             var dated;

    //             for(var x=0; x<len; x++){
    //                 dated  = rs.rows.item(x).supplier;
    //             }
    //         }, 
            
    //         function(err){
    //             console.log(err)
        
    //         })
    // })

}