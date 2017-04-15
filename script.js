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
});


/*$("#saveNI").click(function(e){
 var root = 'http://localhost:8081/api';   
    
e.preventDefault();
    var firstname = $("#inpname").val();
    var lastname= $("#inpsurname").val();
     var phone = $("#inpphone").val();
    var email= $("#inpemail").val();
    var skype= $("#inpskype").val();
    var date= $("#inpdate").val();
    var time= $("#inptime").val();
     var position= $("#inpposition").val();
     var location= $("#inplocation").val();
     var room= $("#inproom").val();

    var assigned= $("#inpassignedperson").val();

    /*var d = new Date();
    var month = d.getMonth()+1;
    var hours = d.getHours(); 
    var minutes = d.getMinutes();
    if (minutes < 10){
      minutes = "0" + minutes
    };  */
   // var dateTime= $("#inpposition").val();
    /*var objcandidate = { "candidate":[{"firstname": name, "lastname": lastname, "phone": phone, "email": email, "skype": skype, "position": position}], 
     "interviews":[{"date": date,"time": time,"location": location, "room": room, "assigned": assigned}],
 } 

      var formData = objcandidate.serialize();  
/*function buildQuery(formData) {
        var Result= '';
        if(typeof(formData)== 'formData') {
            jQuery.each(obj, function(key, value) {
                Result+= (Result) ? '&' : '';
                if(typeof(value)== 'formData' && value.length) {
                    for(var i=0; i<value.length; i++) {
                        Result+= [key+'[]', encodeURIComponent(value[i])].join('=');
                    }
                } else {
                    Result+= [key, encodeURIComponent(value)].join('=');
                }
            });
        }
        return Result;
    }*/

    /* $.ajax({

        url: root +'/interviews',
        type:'POST',
        contentType:'application/json',

       //data:JSON.stringify(formData),
       data:formData,
       //data:buildQuery(formData), 
        
         beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  token );
        },  

        success:function(objcandidate){
            console.log(objcandidate);
           // $("#tableMIH").append("<tr>"+"<td>"+newobjcandidate.candidate.firstname+"</td>") //+"<td>"+newobjcandidate.candidate.lastname+"</td>"+"<td>"newobjcandidate.candidate.phone+"</td>"+"<td>"+newobjcandidate.candidate.email+"</td>"+"<td>"+newobjcandidate.candidate.skype+"</td>"+"<td>"+newobjcandidate.candidate.position+"</td>"+"</tr>");
             alert ("bla");     
                    },
        error: function (objcandidate) {
             console.log(objcandidate);
           alert ("post failed");
        }
        });
      });*/

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
