<?php
$user="root";
$password="";
$host="localhost";
$d="mystorage";
$myconnection=mysqli_connect($host,$user,$password,$d);
if($myconnection);
else echo "not connected";
?>