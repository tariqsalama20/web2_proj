<?php
require 'connection.php';

//load
if(isset($_POST["loading"])){
    $myl=json_decode($_POST["loading"],true);
    for($i=0;$i<count($myl);$i++){
        $type=$myl[$i]['type'];
        $target=$myl[$i]['target'];
        $time=$myl[$i]['time'];
        $myquery="INSERT INTO store VALUES(NULL,'$type', '$target','$time');";
         if(mysqli_query($myconnection,$myquery)) echo "load insert";
        else echo "load is not inserted";
     }  
}

//unload
if(isset($_POST["unloading"])){
    $myl1=json_decode($_POST["unloading"],true);
    for($i=0;$i<count($myl1);$i++){
        $type=$myl1[$i]['type'];
        $target=$myl1[$i]['target'];
        $time=$myl1[$i]['time'];
        $myquery="INSERT INTO store VALUES(NULL,'$type', '$target','$time');";
         if(mysqli_query($myconnection,$myquery)) echo "unload insert";
        else echo "unload is not inserted";
     }  
}

//click
if(isset($_POST["generat"])){
    $myl2=json_decode($_POST["generat"],true);
    for($i=0;$i<count($myl2);$i++){
        $type=$myl2[$i]['type'];
        $target=$myl2[$i]['target'];
        $time=$myl2[$i]['time'];
        $myquery="INSERT INTO store VALUES(NULL,'$type', '$target','$time');";
         if(mysqli_query($myconnection,$myquery)) echo "generate insert";
        else echo "generateis not inserted";
     }  
}

//leter generate
if(isset($_POST["genleter"])){
    $myl4=json_decode($_POST["genleter"],true);
    for($i=0;$i<count($myl4);$i++){
        $type=$myl4[$i]['type'];
        $target=$myl4[$i]['target'];
        $time=$myl4[$i]['time'];
        $myquery="INSERT INTO store VALUES(NULL,'$type', '$target','$time');";
         if(mysqli_query($myconnection,$myquery)) echo "letter insert";
        else echo "letter not inserted";
     }  
}

?>
