/* When user clicks hyperlink with class of "deleteUer", call function below:  */

$(document).ready(function() {
    $('.deleteUser').on('click', deleteUser);
});


/* Delete user function. Use AJAX call to pass info to DELETE route: */

function deleteUser() {
    var confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation) {
        $.ajax({
            type: 'DELETE',
            url: '/users/delete/' + $(this).data('id')
        }).done(function(response) {
            window.location.replace('/');
        });
        window.location.replace('/');
    } else {
        return false;
    }
}