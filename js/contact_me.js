$(document).ready(function() {
    $("#msg-send").hide();
    $("#sending").hide();
    $("#send").hide();
    
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
          
        },
        submitSuccess: function($form, event) {
            $("#contact").hide();
            $("#msg-send").show().fadeIn(3000);
            $("#send").show().fadeIn(3000);
            
            event.preventDefault(); 
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            var firstName = name; 
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://alexricardoteste.000webhostapp.com/sendEmail/contact-me.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
 
                 
                    // $('#success').html("<div class='alert alert-success'>");
                    // $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    //     .append("</button>");
                    // $('#success > .alert-success')
                    //     .append("<strong>Sua mensagem foi enviada! </strong>");
                    // $('#success > .alert-success')
                    //     .append('</div>');
                   
                    // $('#contactForm').trigger("reset");
                },
                error: function() {
                    
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Me desculpe " + firstName + ", parece que meu servidor de e-mail não está respondendo. Por favor, tente novamente mais tarde!");
                    $('#success > .alert-danger').append('</div>');
                    
                    //Limpa todos os campos
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    // $("a[data-toggle=\"tab\"]").click(function(e) {
    //     e.preventDefault();
    //     $(this).tab("show");
    // });
});

// $('#name').focus(function() {
//     $('#success').html('');
// });
