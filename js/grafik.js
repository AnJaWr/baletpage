$(document).ready(function() {
    $('[show]').on('click', function() {
        var showme = $(this).attr('show')

        $('td').css({ "color": "black", "visibility": "hidden" })
        $('.' + showme).css({ "color": "red", "visibility": "visible" })
    })
})