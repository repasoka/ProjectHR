 $(document).ready(function(){

       $("#logbtn").click(function(e){
          e.preventDefault();
     
    var userNamex = $('#user-name').val();
    var passwordx = $('#passwordA').val(); 

    var root = 'http://localhost:8081/api';

     $.ajax({
        url: root +'/auth/login/',
        type:'POST',
        contentType:'application/json',
        data:JSON.stringify({"userName": userNamex,"password": passwordx}),
        success:function(data){
            console.log(data);
            $("#itw").show();
            $("#log").hide();
            
           $.ajax({

            url: root + '/locations/',
            method: 'GET',
            data:JSON.parse,
             beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'BEARER ' +  data.token );
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
       $("#logout").click(function(){
          
var root = 'http://localhost:8081/api';
     $.ajax({
        url: root +'/auth/logout/',
        type:'POST',
        success:function(data){
            console.log(data);
            $("#itw").hide();
            $("#log").show();
            
                    },
        error: function (data) {
            console.log(data);
           alert("Logout imposible");
        }
        });
     
});
       });