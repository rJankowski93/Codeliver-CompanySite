<?php
$to      = 'janiu25@gmail.com';
$name = $_POST['name'];
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
	'Content-type: text/html; charset=utf-8';

mail($to, $name, $message, $headers);
header("Location: index.html");
?>