<?php
if ((isset($_POST["i"]))&&(isset($_POST["year"]))&&(isset($_POST["month"]))){
	$i=(int)$_POST["i"];
	if ($i>=0){
		$m=$_POST["month"];
		$y=$_POST["year"];
		if (file_exists("rezerve.txt"))
			$af=file("rezerve.txt");
		$j=0;
		$f=fopen("rezerve.txt","w");
		foreach ($af as $taf){
			$a=explode("|",rtrim($taf));
			if (((int)$a[2]==(int)$m)&&((int)$a[3]==(int)$y)){
					if ((int)$j!=(int)$i){
						$j++;
						fwrite($f,$taf."\n");
					}else{
						$j++;
					}
			}else{
					fwrite($f,$taf."\n");
			}
		}
		fclose($f);	
	}
	Header("Location:main.php?year=$y&month=$m");
}else{
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta name="description" content=""/>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta http-equiv="Content-Language" content="ru" />
	<link href="css/site.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<style>.alt{background:#eae8dc; border: #999 1px solid;position:absolute;font-size:11px; width:490px;padding:5px;margin:260px 0 0 0;display:none;}</style>
	<!--[if lte IE 7]><style>.alt{background:#eae8dc; border: #999 1px solid;position:absolute;font-size:11px; width:490px;padding:5px;margin:330px 0 0 0;display:none;}</style><![endif]-->
	<link rel="SHORTCUT ICON" href="media/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="cal/tcal.css">
	<script language="JavaScript" src="cal/tcal.js"></script>
	<title>Online сервис "Расчет пени по налогам"</title>
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
		<img class="speach-photo" src="css/speach_p.png" width="50" height="51" alt="М.В. Мишустин" />
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
function fotdel($o){
  switch ($o){
    case 1: $res="(01) Общий отдел";break;
    case 2: $res="(02) Отдел контроля налоговых органов";break;
    case 3: $res="(03) Отдел регистрации и учета налогоплательщиков";break;
    case 4: $res="(04) Отдел работы с налогоплательщиками";break;
    case 5: $res="(05) Финансовый отдел";break;
    case 6: $res="(06) Аналитический отдел";break;
    case 7: $res="(07) Отдел досудебного аудита"; break;
    case 8: $res="(08) Отдел кадров";break;
    case 9: $res="(09) Отдел информационных технологий";break;
    case 10: $res="(10) Правовой отдел";break;
    case 11: $res="(11) Отдел обеспечения процедуры банкротства";break;
    case 12: $res="(12) Контрольный отдел";break;
    case 13: $res="(13) Отдел безопасности";break;
    case 14: $res="(14) Хозяйственный отдел";break;
    case 15: $res="(16) Отдел камерального контроля";break;
    case 16: $res="(17) Отдел налогообложения Физических лиц";break;
    case 17: $res="ФНС России";break;   
    case 18: $res="Совещание, без видеоконференцсвязи";break;  
	case 19: $res="(18) Отдел налогообложения юридических лиц";break;
	case 20: $res="(19) Отдел внедрения АИС-3";break; 
	case 21: $res="(20) Контрольный отдел №2";break;
	case 22: $res="(21) Отдел урегулирование задолженности";break;
	case 23: $res="Руководство";break;
  }
  return $res;
}
function finsp($ins){
$i=(int)$ins;
$res="";
if ($i>=1000000000){
  $res="УФНС России по АО и НАО\n";
  $i-=1000000000;
}
if ($i>=100000000){
  $res="ИФНС России по КН<br>";
  $i-=100000000;
}
if ($i>=10000000){
  $res.="МИФНС России љ 9<br>";
  $i-=10000000;
}
if ($i>=1000000){
  $res.="МИФНС России љ 8<br>";
  $i-=1000000;
}
if ($i>=100000){
  $res.="МИФНС России љ 6<br>";
  $i-=100000;
}
if ($i>=10000){
  $res.="МИФНС России љ 5<br>";
  $i-=10000;
}
if ($i>=1000){
  $res.="МИФНС России љ 4<br>";
  $i-=1000;
}
if ($i>=100){
  $res.="МИФНС России љ 3<br>";
  $i-=100;
}
if ($i>=10){
  $res.="МИФНС России љ 1<br>";
  $i-=10;
}
if ($i>0){
  $res.="ИФНС России по г. Архангельску<br>";
}
  return $res;
}  
function fzal($zal){
  switch ($zal){
    case 1: $res="214";break;
	case 2: $res="311а Рудакова С.Н.";break;
    case 3: $res="Акт. зал";  
	case 4: $res="Комп. класс";  
	case 5: $res="105(ВКС)";
  }
  return $res;
}
  if (!isset($_GET['month'])) {
    $m=(int)date("m");
    echo "<br><h1>Месяц был не выбран!</h1><br>";
  }else{
    $m=(int)$_GET['month'];
  }
  if (!isset($_GET['year'])) {
    $y=(int)date("Y");
    echo "<br><h1>Год был не выбран!</h1><br>";
  }else{
    $y=(int)$_GET['year'];
  }
  if (file_exists("rezerve.txt"))
    $af=file("rezerve.txt");
    echo "<form action=\"".$_SERVER['SCRIPT_NAME']."\" method=\"POST\">";
    echo "<input name=\"i\" type=\"hidden\" value=\"-1\">";
    echo "<input name=\"year\" type=\"hidden\" value=\"$y\">";
    echo "<input name=\"month\" type=\"hidden\" value=\"$m\">";
    echo "<table border=\"1\" cellspacing=\"5\">";
    echo "<tr><th>Инициатор видеоконференции</th><th>Дата</th><th>Время начала</th><th>Время окончания</th><th>Налоговый орган</th><th>Зал</th><th>Отметить для удаления</th></tr>";
  $i=0;
  foreach ($af as $taf){
    $a=explode("|",rtrim($taf));
    if (((int)$a[2]==(int)$m)&&((int)$a[3]==(int)$y)){
		echo "<tr>";
		echo "<td>".fotdel($a[6])."</td>";
		echo "<td>".$a[1].".".$a[2].".".$a[3]."</td>";
		echo "<td>".$a[4]."</td>";	
		echo "<td>".$a[5]."</td>";
		echo "<td>".finsp($a[7])."</td>";
		echo "<td>".fzal($a[0])."</td>";
		echo "<td><input name=\"i\" type=\"radio\" value=\"$i\">Убрать</td>";
		$i++;
		echo "</tr>";    
    }
  }
  echo "</table><br>";
  echo "<input type=submit name=\"doGo\" value=\"Убрать резервирование\">";
?>
<br>
<form action="main.php" method="GET">
<br>
<input type=submit name="doGo" value="Назад">
<br>
</form>

<br>


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
						Все права защищены и охраняются законом.
				</div>
				<div class="float-right">



				</div>

				<div class="footer-copyright">


				</div>

			</div>
			<!-- /Footer -->
</body>

</html>
<?php
}
?>
