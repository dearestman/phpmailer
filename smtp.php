<?php
    require_once('phpmailer.inc.php');
//      $body             = file_get_contents('test.html');
//      $body             = eregi_replace("[\]",'',$body); 
      $body             =   
                          "Весна пришла лучистым солнцем,
                          Пьяня как терпкое вино.
                          Игриво млея под оконцем
                          Сквозь снег виднеется говно.

                          Улыбки ожили на лицах
                          В глазах добавилось огня
                          И пешеходы будто птицы
                          летят над кучками паря

                          И сквозь весны благоуханье  
                          Сквозь ароматов карнавал
                          Нас не подводит обонянье:
                          в подъезде снова кто-то ссал";  
    $mail             = new PHPMailer();
    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->Host       = "10.129.210.231"; // SMTP server
    $mail->SMTPAuth   = false;                  // enable SMTP authentication
    $mail->From       = "skalin@r29.nalog.ru";
    $mail->FromeName  = "Skalin Stepan";
    $mail->Sender     = "skalin@r29.nalog.ru";
    $mail->Username   = "skalin";
    //$mail->Password   = "123456789test";
    $mail->SMTPDebug  = false;
    $mail->Charset    = "UTF-8";
    $mail->AddReplyTo("skalin@r29.nalog.ru","Stepan Skalin");
    $mail->Subject    = "Seminar Registration";

    $mail->Body    = $body;

    $address = "u290923@r29.nalog.ru";

    $mail->AddAddress($address, "Skalin Stepan");
        
    $address = "skalin@r29.nalog.ru";

    $mail->AddAddress($address, "Skalin Stepan");

    $address = "StepanSkalin@r29.nalog.ru";

    $mail->AddAddress($address, "Skalin Stepan");
    
    if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
      echo "Message sent!";
    }

                              
 
?>
