<?php
$conn=mysql_connect("205.178.146.112","iosapp","Appetite221!");
if(!$conn)
	{exit("-- Connection Failed --" . $conn);}

mysql_select_db("phonegap1", $conn);
?>