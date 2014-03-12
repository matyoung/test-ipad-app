<?php


include("connect.php");



$first=addslashes($_GET["firstname"]);

$last=addslashes($_GET["lastname"]);



$sql=sprintf("INSERT INTO Contact(first_nam, last_nam)VALUES('%s','%s');",



	
mysql_real_escape_string($first),



	
mysql_real_escape_string($last));




mysql_query($sql);



mysql_close($conn);


?>
