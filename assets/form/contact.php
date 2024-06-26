<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Get the email address 
    $to = 'ygsyp01@gmail.com';

    if (!$to) {
        // Handle case where EMAIL_ADDRESS is not set
        echo json_encode(array('status' => 'error', 'message' => 'Error: Email address not configured.'));
        exit; // Stop further execution
    }

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email successfully sent, redirect or display success message
        echo json_encode(array('status' => 'success', 'message' => 'Your message has been sent.'));
    } else {
        // Failed to send email
        echo json_encode(array('status' => 'error', 'message' => 'Sorry, unable to send your message. Please try again later.'));
    }
} else {
    // Not a POST request, show an error
    echo json_encode(array('status' => 'error', 'message' => 'Error: Invalid request method.'));
}
?>
