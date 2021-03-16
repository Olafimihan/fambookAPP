
// var socket = io.connect("http://127.0.0.1:5050");
var client_socket = io.connect("http://139.162.229.38:2000");

// console.log(client_socket);


//var socket = io.connect("http://treschicpro.online:2035");
$(document).ready(function(){
    // socket.on('errmsg', (result)=>{
    //     /** Returned Value: */
    //     console.log(result.error);
    
    // })

    // console.log('Dele here for real...');

    // socket.emit('feederlist');
    // socket.on('feederlist', (list) => {
    //     console.log(list);
    //     $('#feeders').html(list.result);
    // });
    
}) 
   
var Fregister = () => {
    let activity="A new user registered successfully";
    
    var regObj = {
        userid: $("#username").val(),
        email:  $("#email").val(),
        pwd:    $("#pwd").val(),
        phone:  $("#phone").val()
    }

    // socket.emit('register', regObj);
    // socket.on('register', (regObj) => {
    //     /** CALL the method to push for user logs */
    //     FauditTrail($("#username").val(), activity, 1);

    //     /** Returned Value: */
    //     console.log(regObj.result);
    //     /** use the returned code to talk to user */

    // }); 
}

var Flogin = () => {
    var userid=$("#email").val();
    var pwd   =$("#pwd").val();

    let activity="User with ID "+userid+" loggoed into the Application successfully";
    
    var loginObj = {
        email: $("#email").val(),
        pwd: $("#pwd").val()
    }

    $.ajax({
        url: "http://75.127.75.161/login",
        data: "email="+userid+"&pwd="+pwd,
        cache: false,
        type: "POST",
        success: function(data){
            
            alert(data)
        },
        error: function(data){
            
        },
        dataType: "text"
    })
    console.log(loginObj);

    // socket.emit('login', loginObj);
    
    // socket.on('login', (loginObj) => {
    //     /** Returned Value: */
    //     console.log(loginObj.result);
        
    //     if(loginObj.result=='success') {
    //         /** CALL the method to push for user logs */
    //         FauditTrail(userid, activity, 1);

    //         window.location='index.html'
    //     } else {
    //         window.location='404.html'
    //     }
    // });
}

var Fnewdevice = () => {
    var ip = $("#ipaddress").val();
    var user = 'dele';
    var inObj = {ip: ip, user: user};

    // socket.emit('newdevice', inObj);
    // socket.on('newdevice', (outObj) => {
    //     console.log(outObj.result);
    // });
}

var FauditTrail = (userid, activity, deviceid) => {
    var inObj = {
        userid: userid,
        activity: activity,
        deviceid: deviceid
    };

    socket.emit('insertaudittrail', inObj);
}

var getPanelInformation = (id) => {
    // socket.emit('panelData', id);
    // socket.on('panelData', (info)=>{
    //     console.log(info.result);
    //     // $("#fp_name").html(info.a);
    //     // $("#fp_coordinate").html(info.a);
    //     // $("#fp_address").html(info.a);
    //     // $("#fp_phone").html(info.a);
        
    //     // $(".info").removeClass("hidden");



    // });
}


