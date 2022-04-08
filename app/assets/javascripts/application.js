//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap-sprockets
//= require jasny-bootstrap.min
//= require_tree .

$(function() {
    $('#term').autocomplete({
        source: "/contacts/autocomplete",
        minLength: 3,
        select: function (event, ui) {
            $('#term').val(ui.item.value);
            $(this).closest('form').submit();
        }
    })
});