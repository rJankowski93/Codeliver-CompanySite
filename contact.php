<?php

require_once('phpMailer/class.phpmailer.php');

$mail             = new PHPMailer(); // defaults to using php "mail()"

$body = $_POST['message'];

$mail->AddReplyTo($_POST['email'],$_POST['name']);

$mail->SetFrom($_POST['email'], $_POST['name']);

$mail->AddReplyTo($_POST['email'],$_POST['name']);

$address = "rafal.jankowski.93@gmail.com";

$mail->AddAddress($address, "Codeliver");

$mail->Subject    = "Zapytanie strone Codeliver";

$mail->MsgHTML($body);

if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} else {
  echo "Message sent!";
}