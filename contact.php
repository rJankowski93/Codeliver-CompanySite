<?php
$to      = 'janiu25@gmail.com';
$name = $_POST['name'];
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
	'Content-type: text/html; charset=utf-8';

mail($to, $name, $message, $headers);
header("Location: index.html");
?>


<?php
    require_once('class.phpmailer.php');    //dodanie klasy phpmailer
    require_once('class.smtp.php');    //dodanie klasy smtp
    $mail = new PHPMailer();    //utworzenie nowej klasy phpmailer
    $mail->From = "janiu25@gmail.com";    //adres e-mail użyty do wysyłania wiadomości
    $mail->FromName = $_POST['name'];   //imię i nazwisko lub nazwa użyta do wysyłania wiadomości
    $mail->AddReplyTo($_POST['email'], 'mailing'); //adres e-mail nadawcy oraz jego nazwa
                                                 //w polu "Odpowiedz do"  
    $mail->Host = "smtp.gmail.pl";    //adres serwera SMTP wysyłającego e-mail
    $mail->Mailer = "smtp";    //do wysłania zostanie użyty serwer SMTP
    $mail->SMTPAuth = true;    //włączenie autoryzacji do serwera SMTP
    $mail->Username = "janiu25@gmail.com";    //nazwa użytkownika do skrzynki e-mail
    $mail->Password = "champi198";    //hasło użytkownika do skrzynki e-mail
    $mail->Port = 465; //port serwera SMTP zależny od konfiguracji dostawcy usługi poczty
    $mail->Subject = "Zapytanie ze strony";    //Temat wiadomości, można stosować zmienne i znaczniki HTML
    $mail->Body = $_POST['message'];    //Treść wiadomości, można stosować zmienne i znaczniki HTML     
    $mail->AddAddress ("janiu25@gmail.com","Login");    //adres skrzynki e-mail oraz nazwa
                                                    //adresata, do którego trafi wiadomość
     if($mail->Send())    //sprawdzenie wysłania, jeśli wiadomość została pomyślnie wysłana
        {                      
        echo 'E-mail został wysłany'; //wyświetl ten komunikat
        }            
    else    //w przeciwnym wypadku
        {           
        echo 'E-mail nie mógł zostać wysłany';    //wyświetl następujący
        }
  ?> 
  
  
  
  
  <?php
require_once('PHPMailerAutoload.php'); # patch where is PHPMailer / ścieżka do PHPMailera

$mail = new PHPMailer;
$mail->CharSet = "UTF-8";

$mail->IsSMTP();
$mail->Host = 'smtp.gmail.com'; # Gmail SMTP host
$mail->Port = 465; # Gmail SMTP port
$mail->SMTPAuth = true; # Enable SMTP authentication / Autoryzacja SMTP
$mail->Username = "janiu25@gmail.com"; # Gmail username (e-mail) / Nazwa użytkownika
$mail->Password = "champi198"; # Gmail password / Hasło użytkownika
$mail->SMTPSecure = 'ssl';

#$mail->From = ''; # REM: Gmail put Your e-mail here
$mail->FromName =  $_POST['name']; # Sender name
$mail->AddAddress('janiu25@gmail.com', 'Login'); # # Recipient (e-mail address + name) / Odbiorca (adres e-mail i nazwa)

$mail->IsHTML(true); # Email @ HTML

$mail->Subject = "Tytul"
$mail->AltBody = $_POST['message'];

if(!$mail->Send()) {
echo 'Some error... / Jakiś błąd...';
echo 'Mailer Error: ' . $mail->ErrorInfo;
exit;
}

echo 'Message has been sent (OK) / Wiadomość wysłana (OK)';

?>