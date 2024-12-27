<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

// Customizing headers for CORS
header('Access-Control-Allow-Origin: http://localhost:5173'); // Allow requests from frontend port
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Allow specific HTTP methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow specific headers
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ivan.kukshyn@gmail.com';
        $mail->Password = 'jgkm tmkn vsox yuyf';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';
        $mail->setLanguage('ru', 'phpmailer/language/');
        $mail->isHTML(true);

        // Получение данных от пользователя
        $name = htmlspecialchars(trim($_POST['name']));
        $email = htmlspecialchars(trim($_POST['email']));
        $phone = htmlspecialchars(trim($_POST['phone']));
        $subject = htmlspecialchars(trim($_POST['subject']));
        $message = htmlspecialchars(trim($_POST['message']));

        // Настройка отправителя и получателя
        $mail->setFrom($email, $name);
        $mail->addAddress('ivan.kukshyn@gmail.com');

        // Содержание письма
        $mail->Subject = 'New mail from Portfolio';
        $mail->Body = "
            <h1>New mail</h1>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <h2><strong>Subject:</strong> $subject</h2>
            <p><strong>Message:</strong> $message</p>
        ";

        // Отправка письма
        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
