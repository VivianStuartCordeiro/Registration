$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = $(this).serialize();

        // Send data to PHP script
        $.ajax({
            type: 'POST',
            url: 'process.php', // Ensure this path is correct
            data: formData,
            success: function(response) {
                $('#result').html(response);
                $('#registrationForm')[0].reset(); // Reset the form
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Error: " + textStatus, errorThrown); // Log the error for debugging
                $('#result').html('<p>An error occurred. Please try again.</p>');
            }
        });
    });
});