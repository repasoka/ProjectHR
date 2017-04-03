 $(document).ready(function(){

       $("#logbtn").click(function(e){
          e.preventDefault();
     
    var userNamex = $('#user-name').val();
    var passwordx = $('#passwordA').val(); 

    var root = 'http://localhost:8081/api/auth/login';

     $.ajax({
        url: root,
        type:'POST',
        contentType:'application/json',
        data:JSON.stringify({"userName": userNamex,"password": passwordx}),
        success:function(data){
            console.log(data);
            alert('Successfully Loaded');
        },
        error: function (data) {
            console.log(data);
           alert('unSuccessfully Loaded');
}
        });
    });
});