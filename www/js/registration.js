window.onload= function(){
    $('.progress').hide();
}

var registerDevice =  () => {
    $('.progress').show('slow');
    
    var token = document.getElementById('token').value;
    var uname = document.getElementById('Username').value;
    var email = document.getElementById('email').value;  
    var pass  = document.getElementById('password').value;    
    var phone = document.getElementById('phone').value;    
    var pass2 = pass; //document.getElementById('passkey').value;   
 
    var dataobj = {
        token: token,
        uname: uname,
        email: email,
        pass: pass,
        imei: localStorage.getItem('IMEI'),
        coordinate: localStorage.getItem('geolocation'),
        phone: phone
    }

    console.log(dataobj)
    
    $.ajax({
        url: "http://139.162.192.74:2021/register",
        cache: false,
        data: {insertObject: JSON.stringify(dataobj)},
        type: "post",
        success:   function(data){
            console.log(data)
            if(data.resp =='success'){
                var arraydata = data.msg;
                localStorage.setItem('status', 'registered');
                // localStorage.setItem('user', arraydata[0])
                // console.log(arraydata)
                localStorage.setItem('data', arraydata);
                
                var resp =  createClientsDependentDBTablesforClients(data);

                console.log(resp);
                $('.progress').hide();
                 
                console.log(resp);
                
                $('#login').click(function(){
                    // alert('clicked!')
                });

                // });
                // var poultryDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});
                // myDB = window.sqlitePlugin.openDatabase({name: "poultryDB.db", location: 'default'});

                
                // window.location='login.html';
                // window.location='page-login.html';

            } else if(data.resp =='error') {
                // var arraydata = data.msg;
                // alert(data.msg)
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