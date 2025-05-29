<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "flynixes@gmail.com"; // البريد اللي هتستقبل عليه الرسالة
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    $email_content = "الاسم: $name\n";
    $email_content .= "البريد الإلكتروني: $email\n\n";
    $email_content .= "الموضوع: $subject\n\n";
    $email_content .= "الرسالة:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($to, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "success";
    } else {
        http_response_code(500);
        echo "error";
    }
} else {
    http_response_code(403);
    echo "forbidden";
}
?>
