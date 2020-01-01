$("#navbarSupportedContent").on('show.bs.collapse', function() {
    $('a.navitem').click(function() {
        $("#navbarSupportedContent").collapse('hide');
    });
});