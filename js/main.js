(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
       itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
      $(this).addClass('active');

     portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");

    // Agregar evento de escucha al enviar el formulario
    document.getElementById("request").addEventListener("submit", function (event) {
        // Obtener referencias a los campos del formulario
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        // Validar los campos del formulario
        if (nameInput.value.trim() === "") {
            alert("Por favor ingresa tu nombre.");
            nameInput.focus();
            event.preventDefault(); // Detener el envío del formulario
            return false;
        }

        if (emailInput.value.trim() === "") {
            alert("Por favor ingresa tu correo electrónico.");
            emailInput.focus();
            event.preventDefault(); // Detener el envío del formulario
            return false;
        }

        // Puedes agregar más validaciones según tus requisitos...

        // Cambiar el valor del campo formSent a "1" después de validar el formulario
        document.getElementById("formSent").value = "1";

        // Mostrar el mensaje emergente
        modal.style.display = "block";

        // Opcional: cerrar el mensaje emergente después de cierto tiempo
        setTimeout(function () {
            modal.style.display = "none";
        }, 10000); // 10000 milisegundos = 10 segundos
       
        this.submit();

        // Envía el formulario
        // Si prefieres que el formulario se envíe después de mostrar el mensaje, elimina este this.submit();
    });

    // Cerrar el mensaje emergente al hacer clic en el botón de cierre
   closeButton.addEventListener("click", function () {
      modal.style.display = "none"; // Ocultar el mensaje emergente al hacer clic en el botón de cierre
    });

    // Cerrar el mensaje emergente al hacer clic fuera de él
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Ocultar el mensaje emergente al hacer clic fuera de él
        }
    });
});


