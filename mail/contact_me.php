
<?php

require_once('vendor/autoload.php');

if(empty($_POST['name'])  || empty($_POST['email']) ||  empty($_POST['message'])){
    echo "Campos vázios!";
    return false;
}

$nome = $_POST['name'];
$email = $_POST['email'];
$mensagem = $_POST['message'];


$from = new SendGrid\Email("Alex Ricardo", "cslt436@gmail.com");
$subject = "Mensagem de contato";
$to = new SendGrid\Email("Alex Ricardo", "cslt436@gmail.com");
$content = new SendGrid\Content("text/html", "Olá Alex Ricardo, <br>Você tem uma nova mensagem de contato<br><br><b>Nome:</b> $nome<br><b>Email:</b> $email <br><b>Mensagem:</b> $mensagem");

$mail = new SendGrid\Mail($from, $subject, $to, $content);
$apiKey = ('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');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);

return true;

?>



