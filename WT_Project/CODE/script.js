$(document).ready(function() {
    // Example of a jQuery function for enhanced interactivity
    $('a.nav-link').on('click', function() {
        $('body').fadeOut(500, function() {
            window.location.href = $(this).attr('href');
        });
        return false;
    });

    // Toggle dark mode
    $('#darkModeToggle').on('change', function() {
        if (this.checked) {
            $('body').addClass('dark-mode');
            $('#darkModeIcon').hide();
            $('#lightModeIcon').show();
        } else {
            $('body').removeClass('dark-mode');
            $('#darkModeIcon').show();
            $('#lightModeIcon').hide();
        }
    });
});
