/* 
	выравнивание страницы по высоте
	Когда страница маленькая по высоте, то ей добавляется высоты, чтобы фон был на всю видимую область на экране

jQuery.event.add(window, "load", resizeFrame);
jQuery.event.add(window, "resize", resizeFrame);
var InitialMainWrapperHeight=null;
function resizeFrame() {
	var max_height = $(window).height() - $("#main-wrapper").offset().top * 2;
	if (InitialMainWrapperHeight==null) InitialMainWrapperHeight = $("#main-wrapper").height()
	if (InitialMainWrapperHeight < max_height) $("#main-wrapper").height(max_height);
}
*/
/* 
	Функция для скрывания больших блоков с помощью ссылки 
	Требуется два объекта - ссылка и большой объект (div, table)
	На ссылке должна стоять надпись "Показать" и вызов этой вункции
	Большой объект должен быть скрыт по умолчанию (style="display:none")
	Файл в кодировке utf-8. Поэтому его можно вызывать со страниц, которые показывают свой текст в utf-8
	Пример
	<a id="a_identificator" href="javascript:a_div_flip('a_identificator', 'div_identificator')">Показать</a>
	<div id="div_identificator" style="display:none">Содержимое большого объекта</div>
*/


function a_div_flip(a, div) {
	var tab = document.getElementById(div);
	var href = document.getElementById(a);
	if (tab.style.display == 'none') {
		tab.style.display = 'block';
		href.innerHTML = 'Скрыть';
	}
	else {
		tab.style.display = 'none';
		href.innerHTML = 'Показать';
	}
}

/* Функция поддержки формы поиска. Вешается на поле ввода (input type="text") */
function SendSearch_Key(ev, text) {
	if (!ev) ev = window.event;
	if (ev.keyCode == 13) { SendSearch(text); return false; }
}
/* Функция поддержки формы поиска. Вешается на кнопку поиска (div) */
function SendSearch(text) {

	//debugger;
	var tx = document.getElementById(text);

	var oldForm = document.getElementById("MainForm");
	oldForm.action = "/search/";
	//document.body.removeChild(oldForm);


	var inp = document.createElement("input");
	inp.type = "text";
	inp.name = "text";
	inp.value = tx.value;

	var f = document.createElement("form");
	f.appendChild(inp);

	// Add it to the document body
	document.body.appendChild(f);

	// Add action and method attributes
	f.action = "/search/";
	f.method = "POST"

	// Call the form's submit method
	f.submit();

	return false;


//	var newURL = "/search/?text=" + encodeURI(tx.value);
//	window.location.href = newURL;
}
