//= require jquery
//= require bootstrap-sprockets
//= require jasny-bootstrap.min
//= require jquery_ujs
//= require jquery-ui
//= require toastr
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

$(function() {
    $("#add-new-group").hide();

    $('body').on('click', '#add-group-btn', function () {
        $("#add-new-group").slideToggle(function() {
            $('#new_group').focus();
        });
        return false
    });

    $('body').on('click', '#save-group-btn', function(event) {
        event.preventDefault();

        var newGroup = $('#new_group');
        var inputGroup = newGroup.closest('.input-group')

        $.ajax({
            url: "/groups",
            method: "post",
            data: { 
                group: { name: $('#new_group').val() }
            },
            success: function(group) {
                if (group.id != null) {
                    inputGroup
                        inputGroup.removeClass('has-error');
                        inputGroup.next('.text.danger').remove();

                        var newOption = $('<option />')
                                                .attr('value', group.id)
                                                .attr('selected', true)
                                                .text(group.name);

                        $('#contact_group_id').append(newOption);

                        newGroup.val("");
                }
            },
            error: function(xhr) {
                var errors = xhr.responseJSON;
                var error = errors.join(", ");
                if (error) {
                    inputGroup.next('.text-danger').detach();

                    inputGroup
                        .addClass('has-error')
                        .after('<p class="text-danger">' + error + "</p>");
                }
            }
        });
    });
});

$(document).on('click', '.pagination a[data-remote=true], a.list-group-item', function() {
    history.pushState({}, '', $(this).attr('href'));
});

$(window).on('popstate', function() {
    $.get(document.location.href);
});