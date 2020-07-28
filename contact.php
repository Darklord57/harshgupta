<?php
if(isset($_POST['submit'])){
$name=$_POST['name'];
$email=$_POST['email'];

$body=$_POST['body'];


$to = "sharmatarun1019@gmail.com";
$subject = "Response From Website";
$message = "Name: ".$name."\n"."Email: ".$email."\n"."Message: "."\n\n".$body;
$headers = "From: ".$email;

if(mail()){
    echo "<h1>Sent Successfully</h1>";
} else{
    echo "Something went wrong";
}

}
?>