          $(document).ready(function() {
              $(".carousel").carousel({
                  fullWidth: true
              });
              $('.carousel').carousel();
              setInterval(function() {
                  $('.carousel').carousel('next');
              }, 2000);
          });