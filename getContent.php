<?php 
	$dir = getcwd();
	$flag = 0;
	if($curdir = opendir($dir))
	{
		$indexarr = scandir($dir);
		foreach ($indexarr as $key => $value) {
			if($value!='.'&&$value!='..')
			if(file_exists($value."/index.php") || file_exists($value."/index.html"))
					echo "<a href='$value' target=\"_blank\" class=\"button\">$value</a>";
		}
	}
?>