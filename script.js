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