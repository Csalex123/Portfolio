<?php

header('Content-Type: text/html; charset=utf-8');
require_once 'phpmailer/PHPMailerAutoload.php';

// require_once $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/haut-2/phpmailer/PHPMailerAutoload.php';

if (isset($_POST['name'])) {

    $mensagem = "<h3>Novo contato enviado do Portfolio</h3>";

    $mensagem .= "<br />";

    $mensagem .= "<b>Nome:</b> " . utf8_decode($_POST['name']);

    $mensagem .= "<br />";

    $mensagem .= "<b>E-mail:</b> " . $_POST['email'];

    $mensagem .= "<br /><br />";

    $mensagem .= "<b>Mensagem:</b> " . utf8_decode($_POST['message']);

    $mensagem .= "<br /><br />";


    $mail = new PHPMailer;


    $mail->isSMTP();

    $mail->Host = 'smtp.gmail.com';

    $mail->SMTPAuth = true;

    $mail->SMTPSecure = "tls";

    $mail->Username = "alexricardodesenvolvedorweb@gmail.com";

    $mail->Password = "Csa48957312";

    $mail->Port = 587;


    $mail->setFrom('Alex.Ricardo1999@hotmail.com', 'FORMULARIO - PORTFOLIO');


    $mail->addAddress('Alex.Ricardo1999@hotmail.com', 'FORMULARIO - PORTFOLIO');


    $mail->isHTML(true);

    $mail->Subject = utf8_decode('[Contato - Portfolio] Enviado por ' . $_REQUEST['nome']);

    $mail->Body = ($mensagem);
    $mail->AltBody = nl2br(strip_tags($mensagem));

    if ($mail->send()) {
        echo "Enviado com sucesso";
    }
}
