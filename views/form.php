<?php
  $name = $_POST["name"];
  $visitor_email = $_POST["email"];
  $message = $_POST["message"]
    
  $email_from = "support@alix.glitch.me";
  $email_subject = "New Form Contact Us";
  $email_body = "User Name: $name.\n"
                "User Email: $visitor_email. \n"
                "User Message: $message. \n";

  $to = "ayaanatri@gmail.com";
  $headers = "Form $email_form \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";

  
?>