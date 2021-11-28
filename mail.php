<?php
$to = ['d.m.luzhin@yandex.ru', 'adm@it-live.ru']; // Основной email

$subject = isset($_POST['subject']) ? $_POST['subject'] : 'Запрос с лендинга Медассистент';
if (isset($_POST['name'])) $message = '<p>Имя: ' . $_POST['name'] . '</p>';
if (isset($_POST['phone'])) $message .= '<p>Телефон: ' . $_POST['phone'] . '</p>';

if (isset($message)) {

    $from = "adm@it-live.ru";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From: ' . $from . "\r\n";

    foreach($to as $email) mail($email, $subject, $message, $headers);
}
?>
