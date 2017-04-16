 $(document).ready(function(){

       var token;
      

       $("#logbtn").click(function(e){
          e.preventDefault();
     
    var userNamex = $('#user-name').val();
    var passwordx = $('#passwordA').val();

     $('#user-name').val("");
     $('#passwordA').val(""); 
     $("#logerror").text("");
     
  var root = 'http://localhost:8081/api';

     $.ajax({
        url: root +'/auth/login/',
        type:'POST',
        contentType:'application/json',
        data:JSON.stringify({"userName": userNamex,"password": passwordx}),
        success:function(data){
            console.log(data);
            $("#itw, #headrow").show();
            $("#log, #itw2, #editInterview2, #headrow2").hide();
      
            token = data.token;
var root = 'http://localhost:8081/api';
           $.ajax({

            url: root + '/locations/',
            method: 'GET',
            data:JSON.parse,
             beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  token );
        }

            }).then(function(data) {
            for (var i=0; i<data.length;i++){
            $("#demo").append(data[i]+ "<br>");
        }
          
            });
                    },
        error: function (data) {
            console.log(data);
            $("#logerror").text("Invalid Username or Password. Please try again.");
        }
        });
        
    });

          $("#buttonmodalwindow").click (function activateModal() {
   
    var modalEl = document.createElement('div');
    modalEl.style.width = '600px';
    modalEl.style.height = '500px';
    modalEl.style.margin = '100px auto';
    modalEl.style.backgroundColor = '#fff';
    modalEl.style.h2 = 'Candidate'
    mui.overlay('on', modalEl);
  });

  


       $("#btnmyinterview").click(function(){
$("#contentmyinterview, #headrow").show();
$("#itw2, #headrow2").hide();
});
      $("#btnnewinterview").click(function(){
$("#itw2, #headrow2").show();
$("#contentmyinterview, #headrow").hide();

//prevent duplicate options
$("#position, #location, #room, #assigned").empty();

var root = 'http://localhost:8081/api';

//LOADING POSITIONS
$.ajax({

            url: root + '/positions/',
            method: 'GET',
            data:JSON.parse,
             beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  token );
        }

            }).then(function(data) {
            for (var i=0; i<data.length;i++){
            $("#position").append("<option>"+data[i]+ "</option>");
        }
          
            });

//LOADING LOCATIONS
$.ajax({

            url: root + '/locations/',
            method: 'GET',
            data:JSON.parse,
             beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  token );
        }

            }).then(function(data) {
            for (var i=0; i<data.length;i++){
            $("#location").append("<option>"+data[i]+ "</option>");
        }
          
            });           

//LOADING ROOMS in KOSICE
$.ajax({

            url: root + '/locations/KOSICE/rooms/',
            method: 'GET',
            data:JSON.parse,
             beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  token );
        }

            }).then(function(data) {
            for (var i=0; i<data.length;i++){
            $("#room").append("<option>"+data[i]+ "</option>");
        }
          
            });  

//LOADING PERSONS
$.ajax({

            url: root + '/users/',
            method: 'GET',
            data:JSON.parse,
             beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  token );
        }

            }).then(function(data) {
            for (var i=0; i<data.length;i++){
            $("#assigned").append("<option>"+data[i].loginName+ "</option>");
        }
          
            });

});

//DATE AND TIME PICKERS
$("#inpdate").datepicker();
$("#inptime").timepicker({startTime: '8:00'}); 

$("#saveNI").click(function () {
        var root = 'http://localhost:8081/api';

        var firstname = $("#inpname").val();
        var lastname = $("#inpsurname").val();
        var phone = $("#inpphone").val();
        var email = $("#inpemail").val();
        var skype = $("#inpskype").val();
        var dateTime = $("#inpdate").val();
        var time = $("#inptime").val();
        var position = $("#inpposition").val();
        var location = $("#inplocation").val();
        var room = $("#inproom").val();

        var assigned = $("#inpassignedperson").val();

var re;

re=/^(\D)/;
valid=re.test(firstname);
if (valid==false){      //warning if name input is empty 
     $("#modaltext").text("Letters are required!");
      var message = $(this).attr("data");
      $(message).fadeIn("fast"); 
      $(message).find(".closewindow, #closeOK").click(function(){
        $(message).fadeOut("fast");
      });             
    }

        var objcandidate = {
            "candidate": {
                "firstName": firstname,
                "lastName": lastname,
                "phone": phone,
                "email": email,
                "skype": skype,
                "position": position
            },
            "interview": {
                "dateTime": dateTime,
                "location": location,
                "room": room,
                
            }
        }

         


alert("bla2");
        $.ajax({
            url: root + '/interviews',
            type: 'POST',
            contentType: 'application/json',
           data: JSON.stringify(objcandidate),


            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'BEARER ' + token);
            },
            success: function (objcandidate) {
                console.log(objcandidate);
                alert("bla");
            },
            error: function (objcandidate) {
                console.log(objcandidate);
                alert("post failed");
            }
        });

    });


       $("#logout").click(function(){
     var root = 'http://localhost:8081/api';     

     $.ajax({
        url: root +'/auth/logout/',
        type:'POST',
         beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  token );
        },
        success:function(data){
            console.log(data);
            $("#itw, #itw2").hide();
            $("#log").show();
            
                    },
        error: function (data) {
            console.log(data);
           alert("Logout failed");
        }
        });
     
 });
     
  });     
