window.onload= function(){
    $('.progress').hide();
}

var registerDevice = async () => {
    $('.progress').show('slow');

    
    var uname = document.getElementById('Username').value;
    var email = document.getElementById('email').value;  
    var pass  = document.getElementById('password').value;    
    var phone = document.getElementById('phone').value;    
    var pass2 = pass; //document.getElementById('passkey').value;   
 
    var dataobj ={
        uname: uname,
        email: email,
        pass: pass,
        imei: localStorage.getItem('IMEI'),
        coordinate: localStorage.getItem('geolocation'),
        phone: phone
    }
    console.log(dataobj)
    
    $.ajax({
        url: "http://139.162.229.38:2000/register",
        cache: false,
        data: {insertObject: JSON.stringify(dataobj)},
        type: "post",
        success: function(data){
            // console.log(data)
            if(data.resp =='success'){
                var arraydata = data.msg;
                localStorage.setItem('status', 'registered');
                // localStorage.setItem('user', arraydata[0])
                // console.log(arraydata)
                localStorage.setItem('data', arraydata);
                /**LOCAL DATABASE CREATION methods/services CALLs */

                // var poultryDB = window.openDatabase("poultryDB.db", "2.0", "poultry data", 20000000);
                // var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});

                    // console.log(poultryDB);

                    // poultryDB.transaction(function(tx) {
                        /** TABLES Creation */
                createClientsDependentDBTablesforClients(data);
                $('.progress').hide();
                // if(val==='success'){
                //     $('.login').click();
                // }
                // $('.login').click();

                $('#login').click(function(){
                    alert('clicked!')
                })
                    // });
                // var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});
                // myDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});

                
                // window.location='login.html';
                // window.location='page-login.html';

            } else if(data.resp =='error') {
                // var arraydata = data.msg;
                alert(data.msg)
                //send a Mail to informing Admin of the failure and info
            }
        },
        error: function(err){
            console.log(err)
        },
        dataType: "JSON"
    })
     
}

var successCB = () => {
    // default PARAM: transaction object and query result
    alert("dbcreate", "Error occurred while creating the table.");

}

var errorCB = () => {
    // default PARAM: transaction object and query result
    alert("dbcreate", "Error occurred while creating the table.");

}