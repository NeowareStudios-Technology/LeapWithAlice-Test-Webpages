function formCheck(){
        var checkName = $("#name").val();
        var checkMessage = $("#message").val();
        var patt = /(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)/g;
        if( patt.test(checkName) == false && patt.test(checkMessage) == false ){
		// If our form doesn't match the regex ie. containing a <tag>, submit it
            //$("#preloader").show();
		alert("submitting form... click ok to continue");
          return true;
        } else {
	    // else the name or message contains an html <tag> and we deny the request to submit it.
            alert("There were errors in your form! Please try again.");
            return false;
        }
      }


        $("#btn_submit").click(function(e){
          e.preventDefault(); // don't allow to submit on default
          if (formCheck() == false){
          return false;
          } else {
          var name = $("#name").val();
          var email = $("#email").val();
          var message = $("#message").val();
          var error = "";
          // Returns successful data submission message when the entered information is stored in database.
          var dataString = 'name='+ name + '&email='+ email + '&message='+ message;
          if(name==''||email==''||message=='') {
            $(".error").show().html("Please fill in all of the fields!");
	    $("#preloader").hide();
            return false;
		  
          } else {
            // AJAX Code To Submit Form.
            $.ajax({
              type: "POST",
              url: "https://www.starlimeweb.com/leapwithalice.io/",
              data: dataString,
              cache: false,
	      crossDomain: true,
	      //dataType: 'json',
              success: function(result){
		 var frm = document.getElementById('contact-form')[0];
                 //$("#preloader").show(); // if successful, show a "loader"
		 alert("sent!");
                 frm.reset(); // reset form to not allow multiple submissions
              }
            });// show success message
//             setTimeout(function(){ 
//              alert("sent");
// 		    //$(".success").show();
//              $(".preloader").hide();
//            }, 2500);
          }
          return false;
          }
          });
	  });
