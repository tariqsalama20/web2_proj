<?php
require 'connection.php';
if(isset($_GET["showdata"])){
    $query="SELECT * FROM store";
    $result=mysqli_query($myconnection,$query);
    echo "<table><tr><td>type</td><td>target</td><td>Date</td></tr>";
    while($r=mysqli_fetch_array($result)){
        $st=$r["stype"];
        $star=$r["starget"];
        $tim=$r["stime"];
        echo "<tr><td>".$st."</td><td>".$star."</td><td>".$tim."</td></tr>";        
    }
    echo "<table>";
}
?>