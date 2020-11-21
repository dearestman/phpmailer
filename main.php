<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta name="description" content=""/>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251"/>
	<meta http-equiv="Content-Language" content="ru" />
	<link href="css/site.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<style>.alt{background:#eae8dc; border: #999 1px solid;position:absolute;font-size:11px; width:490px;padding:5px;margin:260px 0 0 0;display:none;}</style>
	<!--[if lte IE 7]><style>.alt{background:#eae8dc; border: #999 1px solid;position:absolute;font-size:11px; width:490px;padding:5px;margin:330px 0 0 0;display:none;}</style><![endif]-->
	<link rel="SHORTCUT ICON" href="media/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="cal/tcal.css">
	<script language="JavaScript" src="cal/tcal.js"></script>
	<title>Резервирование зала видеоконференции</title>
</head>
<body>

<div>
	<div class="wrapper-left">
	<div id="main-wrapper" class="wrapper-right">
	<div class="container">

<!-- Header_Middle -->

<div id="ctl01_pnlReg" class="flag-bg local">
<div class="header-top">
	<div class="header-icons">
		<a href="http://www.r29.nalog.ru/sitemap/" class="icon_map" title="Карта сайта"></a>
	</div>
</div>
<div class="header-middle">

	<div class="gerb"><img src="css/r29.png" alt="Управление ФНС по Архангельской области и Ненецкому автономному округу" height="46" /></div>

	<a href="http://www.r29.nalog.ru/" class="header-title">
		<img src="css/site_tit.png" width="356" height="18" alt="Управление ФНС" />
		по Архангельской области и Ненецкому автономному округу
	</a>

	<div class="header-sign">
		
		<div>
			<a href="http://www.government.ru/" class="text-gray">Правительство РФ</a>
			<br />
			<a href="http://www.minfin.ru/" class="text-gray">Минфин России</a>
		</div>
	</div>

	<div class="header-speach">
		<!-- <img class="speach-photo" src="css/speach_p.png" width="50" height="51" alt="М.В. Мишустин" />-->
		<div class="text-gray">Прямая речь</div>
		"Федеральная налоговая служба - это сервисная компания"
	</div>


</div>

</div>
<!-- /Header_Middle -->




<!-- Menu -->
<div class="menu">
	<div class="float-left"><a href="http://www.nalog.ru/" title="Федеральная налоговая служба" class="sign-bottom"></a></div>
</div>
<!-- /Menu -->
		<div>
			<div id="content">



<?php
   if (!isset($_GET['year'])) {
    $currenty=(int)date("Y");
  }else{
    $currenty=(int)$_GET['year'];
  }
  if (!isset($_GET['month'])) {
    $currentm=(int)date("m");
  }else{
    $currentm=(int)$_GET['month'];
    if ($currentm == 13){
      $currentm = 1;
	  $currenty = $currenty + 1;
	}
    if ($currentm == 0){
      $currentm=12;
	  
	}
  }
?>

<br>
<?php
if (isset($_GET['good']))
  echo "<br><h1>Семинар зарезервирован!</h1><br>";
//dnei v 2012 gody

$day[2017][1]=31;
$day[2017][2]=28;
$day[2017][3]=31;
$day[2017][4]=30;
$day[2017][5]=31;
$day[2017][6]=30;
$day[2017][7]=31;
$day[2017][8]=31;
$day[2017][9]=30;
$day[2017][10]=31;
$day[2017][11]=30;
$day[2017][12]=31;

$day[2018][1]=31;
$day[2018][2]=28;
$day[2018][3]=31;
$day[2018][4]=30;
$day[2018][5]=31;
$day[2018][6]=30;
$day[2018][7]=31;
$day[2018][8]=31;
$day[2018][9]=30;
$day[2018][10]=31;
$day[2018][11]=30;
$day[2018][12]=31;

$day[2019][1]=31;
$day[2019][2]=28;
$day[2019][3]=31;
$day[2019][4]=30;
$day[2019][5]=31;
$day[2019][6]=30;
$day[2019][7]=31;
$day[2019][8]=31;
$day[2019][9]=30;
$day[2019][10]=31;
$day[2019][11]=30;
$day[2019][12]=31;

$day[2020][1]=31;
$day[2020][2]=29;
$day[2020][3]=31;
$day[2020][4]=30;
$day[2020][5]=31;
$day[2020][6]=30;
$day[2020][7]=31;
$day[2020][8]=31;
$day[2020][9]=30;
$day[2020][10]=31;
$day[2020][11]=30;
$day[2020][12]=31;

//$currentd=(int)date("d");
//$currenty=(int)date("Y");

//pervii calendarnii rab den nedeli
function prd($y,$m){
//pervaya subbota mesyaca
  
  $sat[2017][1]=7;
  $sat[2017][2]=4;
  $sat[2017][3]=4;
  $sat[2017][4]=1;
  $sat[2017][5]=6;
  $sat[2017][6]=3;
  $sat[2017][7]=1;
  $sat[2017][8]=5;
  $sat[2017][9]=2;
  $sat[2017][10]=7;
  $sat[2017][11]=4;
  $sat[2017][12]=2;
  
  $sat[2018][1]=6;
  $sat[2018][2]=3;
  $sat[2018][3]=3;
  $sat[2018][4]=7;
  $sat[2018][5]=5;
  $sat[2018][6]=2;
  $sat[2018][7]=7;
  $sat[2018][8]=4;
  $sat[2018][9]=1;
  $sat[2018][10]=6;
  $sat[2018][11]=3;
  $sat[2018][12]=1;
  
  $sat[2019][1]=5;
  $sat[2019][2]=2;
  $sat[2019][3]=2;
  $sat[2019][4]=6;
  $sat[2019][5]=4;
  $sat[2019][6]=1;
  $sat[2019][7]=6;
  $sat[2019][8]=3;
  $sat[2019][9]=7;
  $sat[2019][10]=5;
  $sat[2019][11]=2;
  $sat[2019][12]=7;
  
  $sat[2020][1]=4;
  $sat[2020][2]=1;
  $sat[2020][3]=7;
  $sat[2020][4]=4;
  $sat[2020][5]=2;
  $sat[2020][6]=6;
  $sat[2020][7]=4;
  $sat[2020][8]=1;
  $sat[2020][9]=5;
  $sat[2020][10]=3;
  $sat[2020][11]=7;
  $sat[2020][12]=6;
  
  $tsat=(int)$sat[(int)$y][(int)$m];
  switch ($tsat){ 
    case 1: $res=1;break;	
	  case 2: $res=5;break;	
	  case 3: $res=4;break;	
	  case 4: $res=3;break;	
	  case 5: $res=2;break;	
	  case 6: $res=1;break;	
    default: $res=1;break;			
	}
	return $res;  
}
//proveryaet yavlyaetsa li den vihodnim
function is_budni($y,$m,$d){
  
  $sat[2017][1]=7;
  $sat[2017][2]=4;
  $sat[2017][3]=4;
  $sat[2017][4]=1;
  $sat[2017][5]=6;
  $sat[2017][6]=3;
  $sat[2017][7]=1;
  $sat[2017][8]=5;
  $sat[2017][9]=2;
  $sat[2017][10]=7;
  $sat[2017][11]=4;
  $sat[2017][12]=2;
  
  $sat[2018][1]=6;
  $sat[2018][2]=3;
  $sat[2018][3]=3;
  $sat[2018][4]=7;
  $sat[2018][5]=5;
  $sat[2018][6]=2;
  $sat[2018][7]=7;
  $sat[2018][8]=4;
  $sat[2018][9]=1;
  $sat[2018][10]=6;
  $sat[2018][11]=3;
  $sat[2018][12]=1;
  
  $sat[2019][1]=5;
  $sat[2019][2]=2;
  $sat[2019][3]=2;
  $sat[2019][4]=6;
  $sat[2019][5]=4;
  $sat[2019][6]=1;
  $sat[2019][7]=6;
  $sat[2019][8]=3;
  $sat[2019][9]=7;
  $sat[2019][10]=5;
  $sat[2019][11]=2;
  $sat[2019][12]=7;
  
  $sat[2020][1]=4;
  $sat[2020][2]=1;
  $sat[2020][3]=7;
  $sat[2020][4]=4;
  $sat[2020][5]=2;
  $sat[2020][6]=6;
  $sat[2020][7]=4;
  $sat[2020][8]=1;
  $sat[2020][9]=5;
  $sat[2020][10]=3;
  $sat[2020][11]=7;
  $sat[2020][12]=6;
  
  switch ($d) {
  case ($sat[$y][$m]-6): $res=false;break;
  case ($sat[$y][$m]): $res=false;break;
  case ($sat[$y][$m]+1): $res=false;break;
  case ($sat[$y][$m]+7): $res=false;break;
  case ($sat[$y][$m]+8): $res=false;break;
  case ($sat[$y][$m]+14): $res=false;break;
  case ($sat[$y][$m]+15): $res=false;break;
  case ($sat[$y][$m]+21): $res=false;break;
  case ($sat[$y][$m]+22): $res=false;break;
  case ($sat[$y][$m]+28): $res=false;break;
  case ($sat[$y][$m]+29): $res=false;break;
  default: $res=true;break;	
  }
  return $res;  
}
if (file_exists("rezerve.txt"))
  $af=file("rezerve.txt");

    
function show_table($y,$m,$d){
  global $af;
  echo "<form name=\"$d.$m.$y\" action=\"reg.php\" method=\"POST\">";
  echo "<input name=\"year\" type=\"hidden\"  value=\"$y\">";
  echo "<input name=\"month\" type=\"hidden\"  value=\"$m\">";
  echo "<input name=\"day\" type=\"hidden\"  value=\"$d\">";  
  echo "<table border=\"2\">";
  echo "<TR><TH bgcolor=\"grey\" colspan=\"3\">$d.$m.$y</TH></TR>";
  echo "<TR><TH bgcolor=\"white\" colspan=\"3\"><input type=\"submit\" name=\"dogo\"></TH></TR>";
  echo "<TR><TH bgcolor=\"grey\">214</TH></TH><TH bgcolor=\"grey\">311а</TH><TH bgcolor=\"grey\">Комп. класс</TH><TH bgcolor=\"grey\">105</TH></TR>";
  foreach ($af as $taf){
    $a=explode("|",rtrim($taf));
    if (((int)$a[1]==(int)$d)&&((int)$a[2]==(int)$m)&&((int)$a[3]==(int)$y)){
      $link="more.php?day=".$d."&month=".$m."&year=".$y."&zal=".$a[0]."&btime=".$a[4]."&web=".$a[8];
	  $bg = ($a[8] == 1) ? ' bgcolor="#ffe659"' : ''; 
      switch ($a[0]) {
		case 1:echo "<TR><TD".$bg."><a href=\"$link\">$a[4]-$a[5]</TD><TD> </TD><TD> </TD><TD> </TD></TR>";break;
		case 2:echo "<TR><TD> </TD><TD".$bg."><a href=\"$link\">$a[4]-$a[5]</TD><TD> </TD><TD> </TD></TR>";break;
		case 3:echo "<TR><TD> </TD><TD> </TD><TD".$bg."><a href=\"$link\">$a[4]-$a[5]</TD><TD> </TD></TR>";break;
		case 4:echo "<TR><TD> </TD><TD> </TD><TD".$bg."><a href=\"$link\">$a[4]-$a[5]</TD><TD> </TD></TR>";break;
		case 5:echo "<TR><TD> </TD><TD> </TD><TD> </TD><TD".$bg."><a href=\"$link\">$a[4]-$a[5]</TD></TR>";break;
		default:echo "<TR><TD> </TD><TD><TD> </TD> </TD></TR>";break;
	  }
    }
  }
  echo "</table>";
  echo "</form>";
}
function fmonth($m, $y){
  switch ((int)$m){
  case 1: $res='Январь '.$y;break;
  case 2: $res='Февраль '.$y;break;
  case 3: $res='Март '.$y;break;
  case 4: $res='Апрель '.$y;break;
  case 5: $res='Май '.$y;break;
  case 6: $res='Июнь '.$y;break;
  case 7: $res='Июль '.$y;break;
  case 8: $res='Август '.$y;break;
  case 9: $res='Сентябрь '.$y;break;
  case 10: $res='Октябрь '.$y;break;
  case 11: $res='Ноябрь '.$y;break;
  case 12: $res='Декабрь '.$y;break;
  }
  echo $res;
}
echo "<table  border=\"0\" cellspacing=\"25\" align=\"center\">";

echo "<form action=\"".$_SERVER['SCRIPT_NAME']."\" method=\"GET\"";
echo "<TR><TH bgcolor=\"white\">";
$tm1=$currentm - 1;
echo "<button type=\"submit\" name=\"month\" value=\"$tm1\" name=\"year\" value=\"$y\">Предыдущий месяц </button>";
echo "</TH>";
echo "<TH bgcolor=\"red\" colspan=\"3\" align=\"center\">";
fmonth($currentm,$currenty);
echo "</TH>";
echo "<TH bgcolor=\"white\">";
$tm2=$currentm + 1;
echo "<button type=\"submit\" name=\"month\" value=\"$tm2\">Следующий месяц </button>";
echo "</TH></TR>";
echo "</form>";

echo "<TR><TH bgcolor=\"red\" align=\"center\">Понедельник</TH><TH bgcolor=\"red\" align=\"center\">Вторник</TH><TH bgcolor=\"red\" align=\"center\">Среда</TH><TH bgcolor=\"red\" align=\"center\">Четверг</TH><TH bgcolor=\"red\" align=\"center\">Пятница</TH></TR>";
$j=0;
for ($i=1;$i<=42;$i++){
if ($i<prd($currenty,$currentm)){
  echo "<TD></TD>";
}else{
  $j++;
  if ((is_budni($currenty,$currentm,$j))&&($j<=$day[$currenty][$currentm])){
    echo "<TD>";
    show_table($currenty,$currentm,$j);
    echo "</TD>";
  }  
}
if (($i==7)||($i==14)||($i==21)||($i==28))
  echo "</TR><TR>";
if ($i==35)
    echo "</TR>";
}  
echo "</table>";

?>



			</div><!-- #content -->
		</div>
						</div>
					</div>
				</div>
			</div>
<!-- Footer -->
			<div class="footer footer-inner">
				<div class="float-left">
		Copyright &copy; 2005-2011 ФНС России<br />
						Все права защищены и охраняются законом<a href="del.php?month=<?=$currentm;?>&year=<?=$currenty;?>">.</a>
				</div>
				<div class="float-right">



				</div>

				<div class="footer-copyright">


				</div>

			</div>
			<!-- /Footer -->
</body>

</html>
