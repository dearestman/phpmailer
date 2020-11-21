var __aspxInvalidDimension = -10000;
var __aspxInvalidPosition = -10000;
var __aspxAbsoluteLeftPosition = -10000;
var __aspxAbsoluteRightPosition = 10000;
var __aspxMenuZIndex = 21998;
var __aspxPopupControlZIndex = 11998;
var  __aspxCheckSizeCorrectedFlag = true;
var __aspxCallbackSeparator = ":";
var __aspxItemIndexSeparator = "i";
var __aspxCallbackResultPrefix = "/*DX*/";
var __aspxItemClassName = "dxi";
var __aspxAccessibilityEmptyUrl = "javascript:;";
var __aspxClassesScriptParsed = false;
var __aspxDocumentLoaded = false; 
var __aspxEmptyAttributeValue = { };
var __aspxEmptyCachedValue = { };
var __aspxCachedRules = { };
var __aspxStyleCount = 0;
var __aspxStyleNameCache = { };
var __aspxCultureInfo = {
 twoDigitYearMax: 2029,
 ts: ":",
 ds: "/",
 am: "AM",
 pm: "PM",
 monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
 genMonthNames: null,
 abbrMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
 abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
 dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
 numDecimalPoint: ".",
 numPrec: 2,
 numGroupSeparator: ",", 
 numGroups: [ 3 ],
 numNegPattern: 1,
 numPosInf: "Infinity", 
 numNegInf: "-Infinity", 
 numNan: "NaN",
 currency: "$",
 currDecimalPoint: ".",
 currPrec: 2,
 currGroupSeparator: ",",
 currGroups: [ 3 ],
 currPosPattern: 0,
 currNegPattern: 0,
 percentPattern: 0,
 shortTime: "h:mm tt",
 longTime: "h:mm:ss tt",
 shortDate: "M/d/yyyy",
 longDate: "dddd, MMMM dd, yyyy",
 monthDay: "MMMM dd",
 yearMonth: "MMMM, yyyy"
};
__aspxCultureInfo.genMonthNames = __aspxCultureInfo.monthNames;
function _aspxGetInvariantDateString(date) {
 if(!date)
  return "01/01/0001";
 var day = date.getDate();
 var month = date.getMonth() + 1;
 var year = date.getFullYear();
 var result = "";
 if(month < 10)
  result += "0";
 result += month.toString() + "/";
 if(day < 10)
  result += "0";
 result += day.toString() + "/";
 if(year < 1000)
  result += "0";
 result += year.toString();
 return result;
}
function _aspxGetInvariantDateTimeString(date) {
 var dateTimeString = _aspxGetInvariantDateString(date);
 var time = {
  h: date.getHours(),
  m: date.getMinutes(),
  s: date.getSeconds()
 };
 for(var key in time) {
  var str = time[key].toString();
  if(str.length < 2)
   str = "0" + str;
  time[key] = str;
 }
 dateTimeString += " " + time.h + ":" + time.m + ":" + time.s;
 var msec = date.getMilliseconds();
 if(msec > 0)
  dateTimeString += "." + msec.toString();
 return dateTimeString;
}
function _aspxExpandTwoDigitYear(value) {
 value += 1900;
 if(value + 99 < __aspxCultureInfo.twoDigitYearMax)
  value += 100;
 return value;  
}
function _aspxToUtcTime(date) {
 var result = new Date();
 result.setTime(date.valueOf() + 60000 * date.getTimezoneOffset());
 return result;
}
function _aspxToLocalTime(date) {
 var result = new Date();
 result.setTime(date.valueOf() - 60000 * date.getTimezoneOffset());
 return result; 
}
function _aspxAreDatesEqualExact(date1, date2) {
 if(date1 == null && date2 == null)
  return true;
 if(date1 == null || date2 == null)
  return false;
 return date1.getTime() == date2.getTime(); 
}
function _aspxFixTimezoneGap(oldDate, newDate) {
 var diff = newDate.getHours() - oldDate.getHours();
 if(diff == 0)
  return;
 var sign = (diff == 1 || diff == -23) ? -1 : 1;
 var trial = new Date(newDate.getTime() + sign * 3600000);
 if(sign > 0 || trial.getDate() == newDate.getDate())
  newDate.setTime(trial.getTime());
}
var ASPxKey = {
 F1     : 112,
 F2     : 113,
 F3     : 114,
 F4     : 115,
 F5     : 116,
 F6     : 117,
 F7     : 118,
 F8     : 119,
 F9     : 120,
 F10    : 121,
 F11    : 122,
 F12    : 123,
 Ctrl   : 17,
 Shift  : 16,
 Alt    : 18,
 Enter  : 13,
 Home   : 36,
 End    : 35,
 Left   : 37,
 Right  : 39,
 Up     : 38,
 Down   : 40,
 PageUp    : 33,
 PageDown  : 34,
 Esc    : 27,
 Space  : 32,
 Tab    : 9,
 Backspace : 8,
 Delete    : 46,
 Insert    : 45,
 ContextMenu  : 93,
 Windows   : 91,
 Decimal   : 110
};
var ASPxCallbackType = {
 Data: "d",
 Common: "c"
};
var __aspxServerForm = null;
function _aspxGetServerForm() {
 if (!_aspxIsExistsElement(__aspxServerForm)) {
  if(typeof(window.__aspxServerFormID) != "undefined")
   __aspxServerForm = _aspxGetElementById(window.__aspxServerFormID);
  if (!__aspxServerForm) 
   __aspxServerForm = document.forms[0];
 }
 return __aspxServerForm;
}
function _aspxGetActiveElement() {
 try{
  return document.activeElement;
 } catch(e) {
 }
 return null;
}
var __aspxUserAgent = navigator.userAgent.toLowerCase();
var __aspxMozilla,
 __aspxIE,
 __aspxFirefox,
 __aspxNetscape,
 __aspxSafari,
 __aspxChrome,
 __aspxOpera,
 __aspxBrowserVersion, 
 __aspxBrowserMajorVersion, 
 __aspxWindowsPlatform,
 __aspxMacOSPlatform,
 __aspxMacOSMobilePlatform,
 __aspxWebKitFamily, 
 __aspxNetscapeFamily; 
function _aspxIdentUserAgent(userAgent) {
 var browserTypesOrderedList = [ "Mozilla", "IE", "Firefox", "Netscape", "Safari", "Chrome", "Opera", "Opera10" ];
 var defaultBrowserType = "IE";
 var defaultPlatform = "Win";
 var defaultVersions = { Safari: 2, Chrome: 0.1, Mozilla: 1.9, Netscape: 8, Firefox: 2, Opera: 9, IE: 6 };
 if(!userAgent || userAgent.length == 0) {
  _aspxFillUserAgentInfo(browserTypesOrderedList, defaultBrowserType, defaultVersions[defaultBrowserType], defaultPlatform);
  return;
 }
 try {
  var platformIdentStrings = {
   "Windows": "Win",
   "Macintosh": "Mac",
   "Mac OS": "Mac",
   "Mac_PowerPC": "Mac",
   "cpu os": "MacMobile",
   "cpu iphone os": "MacMobile"
  };
  var optSlashOrSpace = "(?:/|\\s*)?";
  var version = "(\\d+)(?:\\.((?:\\d+?[1-9])|\\d)0*?)?";
  var optVersion = "(?:" + version + ")?";
  var patterns = {
   Safari: "applewebkit(?:.*?(?:version/" + version + "[\\.\\w\\d]*?(?:\\s+mobile\/\\S*)?\\s+safari))?",
   Chrome: "chrome" + optSlashOrSpace + optVersion,
   Mozilla: "mozilla(?:.*rv:" + optVersion + ".*Gecko)?",
   Netscape: "(?:netscape|navigator)\\d*/?\\s*" + optVersion,
   Firefox: "firefox" + optSlashOrSpace + optVersion,
   Opera: "opera" + optSlashOrSpace + optVersion,
   Opera10: "opera.*\\s*version" + optSlashOrSpace + optVersion,
   IE: "msie\\s*" + optVersion
  };
  var browserType;
  var version = -1;
  for(var i = 0; i < browserTypesOrderedList.length; i++) {
   var browserTypeCandidate = browserTypesOrderedList[i];
   var regExp = new RegExp(patterns[browserTypeCandidate], "i");
   if(regExp.compile)
    regExp.compile(patterns[browserTypeCandidate], "i");
   var matches = regExp.exec(userAgent);
   if(matches && matches.index >= 0) {
    browserType = browserTypeCandidate;
    if(browserType == "Opera10")
     browserType = "Opera";
    version = -1;
    var versionStr = "";
    if(matches[1]) {
     versionStr += matches[1];
     if(matches[2])
      versionStr += "." + matches[2];
    }
    if(versionStr != "") {
     version = parseFloat(versionStr);
     if(version == NaN)
      version = -1;
    }
   }
  }
  if(!browserType)
   browserType = defaultBrowserType;
  if(version == -1)
   version = defaultVersions[browserType];
  var platform;
  var minOccurenceIndex = Number.MAX_VALUE;
  for(var identStr in platformIdentStrings) {
   var occurenceIndex = userAgent.indexOf(identStr);
   if(occurenceIndex >= 0 && occurenceIndex < minOccurenceIndex) {
    minOccurenceIndex = occurenceIndex;
    platform = platformIdentStrings[identStr];
   }
  }
  if(!platform)
   platform = defaultPlatform;
  _aspxFillUserAgentInfo(browserTypesOrderedList, browserType, version, platform);
 } catch(e) {
  _aspxFillUserAgentInfo(browserTypesOrderedList, defaultBrowserType, defaultVersions[defaultBrowserType], defaultPlatform);
 }
}
function _aspxFillUserAgentInfo(browserTypesOrderedList, browserType, version, platform) {
 for(var i = 0; i < browserTypesOrderedList.length; i++) {
  var type = browserTypesOrderedList[i];
  eval("__aspx" + type + " = type == browserType");
 }
 __aspxBrowserVersion = Math.floor(10.0 * version) / 10.0;
 __aspxBrowserMajorVersion = Math.floor(__aspxBrowserVersion);
 __aspxWindowsPlatform = platform == "Win";
 __aspxMacOSPlatform = platform == "Mac";
 __aspxMacOSMobilePlatform = platform == "MacMobile";
 __aspxWebKitFamily = __aspxSafari || __aspxChrome;
 __aspxNetscapeFamily = __aspxNetscape || __aspxMozilla || __aspxFirefox;
}
_aspxIdentUserAgent(__aspxUserAgent);
function _aspxArrayInsert(array, element, position){
 if(0 <= position && position < array.length){
  for(var i = array.length; i > position; i --)
   array[i] = array[i - 1];
  array[position] = element;
 }
 else
  array.push(element);
}
function _aspxArrayRemove(array, element){
 var index = _aspxArrayIndexOf(array, element);
 if(index > -1) _aspxArrayRemoveAt(array, index);
}
function _aspxArrayRemoveAt(array, index){
 if(index >= 0  && index < array.length){
  for(var i = index; i < array.length - 1; i++)
   array[i] = array[i + 1];
  array.pop();
 }
}
function _aspxArrayClear(array){
 while(array.length > 0)
  array.pop();
}
function _aspxArrayIndexOf(array, element, comparer) {
 if(!comparer) {
  for(var i = 0; i < array.length; i++) {
   if(array[i] == element)
    return i;
  }
 } else {
  for(var i = 0; i < array.length; i++) {
   if(comparer(array[i], element))
    return i;
  }
 }
 return -1;
}
function _aspxArrayIntegerAscendingSort(array){
 array.sort(function(i1, i2){
  if (i1 > i2)
   return 1;
  else if (i1 < i2)
   return -1;
  else
   return 0;
 });
}
function _aspxCollectionsUnionToArray(firstCollection, secondCollection) {
 var result = [];
 var firstCollectionLength = firstCollection.length;
 var secondCollectionLength = secondCollection.length;
 for(var i = 0; i <  firstCollectionLength + secondCollectionLength; i++) {
  if(i < firstCollectionLength) 
   result.push(firstCollection[i]);
  else 
   result.push(secondCollection[i - firstCollectionLength]);
 }  
 return result;
}
function _aspxCollectionToArray(collection) {
 var array = [];
 for(var i = 0; i < collection.length; i++)
  array.push(collection[i]);
 return array;
}
function _aspxCreateHashTableFromArray(array) {
 var hash = [];
 for(var i = 0; i < array.length; i++)
  hash[array[i]] = 1;
 return hash;
}
function _aspxCreateIndexHashTableFromArray(array) {
 var hash = [];
 for(var i = 0; i < array.length; i++)
  hash[array[i]] = i;
 return hash;
}
var __aspxDefaultBinarySearchComparer = function(arrayElement, value) {
 if(arrayElement == value)
  return 0;
 else
  return arrayElement < value ? -1 : 1;
};
function _aspxArrayBinarySearch(array, value, binarySearchComparer, startIndex, length) {
 if(!binarySearchComparer)
  binarySearchComparer = __aspxDefaultBinarySearchComparer;
 if(!_aspxIsExists(startIndex))
  startIndex = 0;
 if(!_aspxIsExists(length))
  length = array.length - startIndex;  
 var endIndex = (startIndex + length) - 1;
 while (startIndex <= endIndex) {
  var middle =  (startIndex + ((endIndex - startIndex) >> 1));
  var compareResult = binarySearchComparer(array[middle], value);
  if (compareResult == 0)
   return middle;
  if (compareResult < 0)
   startIndex = middle + 1;
  else
   endIndex = middle - 1;
 }
 return -(startIndex + 1);
}
function _aspxApplyReplacement(text, replecementTable) {
 for(var i = 0; i < replecementTable.length; i++) {
  var replacement = replecementTable[i];
  text = text.replace(replacement[0], replacement[1]);
 }
 return text;
}
function _aspxEncodeHtml(html) {
 return _aspxApplyReplacement(html, [
  [ /&quot;/g, '&quotx;' ], [ /"/g, '&quot;' ],
  [ /&amp;/g,  '&ampx;'  ], [ /&/g, '&amp;'  ],
  [ /&lt;/g,   '&ltx;'   ], [ /</g, '&lt;'   ],
  [ /&gt;/g,   '&gtx;'   ], [ />/g, '&gt;'   ]
 ]);
}
function _aspxDecodeHtml(html) {
 return _aspxApplyReplacement(html, [
  [ /&gt;/g,   '>' ], [ /&gtx;/g,  '&gt;'   ],
  [ /&lt;/g,   '<' ], [ /&ltx;/g,  '&lt;'   ],
  [ /&amp;/g,  '&' ], [ /&ampx;/g, '&amp;'  ],
  [ /&quot;/g, '"' ], [ /&quotx;/g,'&quot;' ]
 ]);
}
function _aspxParseShortcutString(shortcutString) {
 if(!shortcutString)
  return 0;
 var isCtrlKey = false;
 var isShiftKey = false;
 var isAltKey = false;
 var keyCode = null;
 var shcKeys = shortcutString.toString().split("+");
 if (shcKeys.length > 0) {
  for (var i = 0; i < shcKeys.length; i++) {
   var key = _aspxTrim(shcKeys[i].toUpperCase());
   switch (key) {
    case "CTRL":
     isCtrlKey = true;
     break;
    case "SHIFT":
     isShiftKey = true;
     break;
    case "ALT":
     isAltKey = true;
     break;
    case "F1": keyCode = ASPxKey.F1; break;
    case "F2": keyCode = ASPxKey.F2; break;
    case "F3": keyCode = ASPxKey.F3; break;
    case "F4": keyCode = ASPxKey.F4; break;
    case "F5": keyCode = ASPxKey.F5; break;
    case "F6": keyCode = ASPxKey.F6; break;
    case "F7": keyCode = ASPxKey.F7; break;
    case "F8": keyCode = ASPxKey.F8; break;
    case "F9": keyCode = ASPxKey.F9; break;
    case "F10":   keyCode = ASPxKey.F10; break;
    case "F11":   keyCode = ASPxKey.F11; break;
    case "F12":   keyCode = ASPxKey.F12; break;
    case "ENTER": keyCode = ASPxKey.Enter; break;
    case "HOME":  keyCode = ASPxKey.Home; break;
    case "END":   keyCode = ASPxKey.End; break;
    case "LEFT":  keyCode = ASPxKey.Left; break;
    case "RIGHT": keyCode = ASPxKey.Right; break;
    case "UP": keyCode = ASPxKey.Up; break;
    case "DOWN":  keyCode = ASPxKey.Down; break;
    case "PAGEUP": keyCode = ASPxKey.PageUp; break;
    case "PAGEDOWN": keyCode = ASPxKey.PageDown; break;
    case "SPACE": keyCode = ASPxKey.Space; break;
    case "TAB":   keyCode = ASPxKey.Tab; break;
    case "BACK":  keyCode = ASPxKey.Backspace; break;
    case "CONTEXT": keyCode = ASPxKey.ContextMenu; break;
    case "ESCAPE":
    case "ESC":
     keyCode = ASPxKey.Esc;
     break;
    case "DELETE":
    case "DEL":
     keyCode = ASPxKey.Delete;
     break;
    case "INSERT":
    case "INS":
     keyCode = ASPxKey.Insert;
     break;
    case "PLUS":
     keyCode = "+".charCodeAt(0);
     break;
    default:
     keyCode = key.charCodeAt(0);
     break;
   }
  }
 } else
  alert("Invalid shortcut");
 return _aspxGetShortcutCode(keyCode, isCtrlKey, isShiftKey, isAltKey);
}
function _aspxGetShortcutCode(keyCode, isCtrlKey, isShiftKey, isAltKey) {
 var value = keyCode & 0xFFFF;
 var flags = 0;
 flags |= isCtrlKey ? 1 << 0 : 0;
 flags |= isShiftKey ? 1 << 2 : 0;
 flags |= isAltKey ? 1 << 4 : 0;
 value |= flags << 16;
 return value;
}
function _aspxGetShortcutCodeByEvent(evt) {
 return _aspxGetShortcutCode(_aspxGetKeyCode(evt), evt.ctrlKey, evt.shiftKey, evt.altKey);
}
function _aspxIsPasteShortcut(evt){
 var keyCode = _aspxGetKeyCode(evt);
 if (__aspxNetscapeFamily && evt.which == 0)  
  keyCode = evt.keyCode;
 return (evt.ctrlKey && (keyCode == 118  || (keyCode == 86))) ||
     (evt.shiftKey && !evt.ctrlKey && !evt.altKey &&
     (keyCode == ASPxKey.Insert)) ;
}
var ASPxImageUtils = {
 IsAlphaFilterNeed: function(src){
  return __aspxIE && __aspxBrowserVersion < 7 && this.IsPng(src);
 },
 IsPng: function(src){
  return src.slice(-3).toLowerCase() == "png";
 },
 GetImageFilterStyle: function(src){
  return "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + src + ", sizingMethod=scale)";
 },
 GetImageSrc: function (image){
  if(_aspxIsAlphaFilterUsed(image)){ 
   var filter = image.style.filter;
   var regSrc = new RegExp("src=", "g");
   var regPng = new RegExp(".png", "g");
   var beginIndex = regSrc.exec(filter).lastIndex;
   var endIndex = regPng.exec(filter).lastIndex;
   return filter.substring(beginIndex, endIndex);
  } 
  return image.src;
 },
 SetImageSrc: function(image, src){
  var isAlphaFilterNeed = this.IsAlphaFilterNeed(src);
  if(isAlphaFilterNeed){
   image.src = __aspxEmptyImageUrl;
   image.style.filter = this.GetImageFilterStyle(src);
  } else {
   image.src = src;
   image.style.filter = "";
  }
 },
 SetSize: function(image, width, height){
  image.style.width = width + "px";
  image.style.height = height + "px";
 },
 GetSize: function(image, isWidth){
  return (isWidth ? image.offsetWidth : image.offsetHeight);
 }
};
function _aspxAddAlphaImageLoaderTarget(id, imageUrl) {
 if(!window._aspxAlphaImageLoaderTargets)
  window._aspxAlphaImageLoaderTargets = [];
 window._aspxAlphaImageLoaderTargets.push({ elementId: id, bgImageUrl: imageUrl });
}
function _aspxEnsureAlphaImageLoaderApplierRegistered() {
 if(!window._aspxPostponedAlphaImageLoaderApplierAdded) {
  var handler = function() {
   if(window._aspxAlphaImageLoaderTargets) {
    for(var i = 0; i < window._aspxAlphaImageLoaderTargets.length; i++) {
     var target = window._aspxAlphaImageLoaderTargets[i];
     _aspxApplyAlphaImageLoaderToBackground(target.elementId, target.bgImageUrl);
    }
    window._aspxAlphaImageLoaderTargets = [];
   }
  };
  if(typeof(aspxGetControlCollection) == "function")
   aspxGetControlCollection().ControlsInitialized.AddHandler(handler);
  else
   window.attachEvent("onload", handler);
  window._aspxPostponedAlphaImageLoaderApplierAdded = true;
 }
}
function _aspxApplyAlphaImageLoaderToBackground(elementId, bgImageUrl) {
 var element = document.all[elementId];
 if(element && element.length)
  element = document.getElementById(elementId);
 element.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + bgImageUrl + ", sizingMethod=crop)";
}
function _aspxApplyAlphaImageLoaderToImage(image) {
 if(image.alphaImageLoaderApplied)
  return;
 if(window.__aspxEmptyImageUrl) {
  image.alphaImageLoaderApplied = true;
  var imageUrl = image.src;
  image.src = window.__aspxEmptyImageUrl;
  image.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + imageUrl + ", sizingMethod=scale)";
 } else {
  var token = window.setInterval(function() {
   if(window.__aspxEmptyImageUrl) {
    _aspxApplyAlphaImageLoaderToImage(image);
    window.clearInterval(token);
   }
  }, 100);
 }
}
var __aspxVerticalScrollBarWidth;
function _aspxGetVerticalScrollBarWidth() {
 if(typeof(__aspxVerticalScrollBarWidth) == "undefined") {
  var container = document.createElement("DIV");
  container.style.cssText = "position: absolute; top: 0px; left: 0px; visibility: hidden; width: 200px; height: 150px; overflow: hidden";
  document.body.appendChild(container);
  var child = document.createElement("P");
  container.appendChild(child);
  child.style.cssText = "width: 100%; height: 200px;";
  var widthWithoutScrollBar = child.offsetWidth;
  container.style.overflow = "scroll";
  var widthWithScrollBar = child.offsetWidth;
  if(widthWithoutScrollBar == widthWithScrollBar)
   widthWithScrollBar = container.clientWidth;
  __aspxVerticalScrollBarWidth = widthWithoutScrollBar - widthWithScrollBar;
  document.body.removeChild(container);
 }
 return __aspxVerticalScrollBarWidth;
}
function _aspxGetVerticalOverflow(element) {
 if(__aspxIE || __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome)
  return element.style.overflowY;
 return element.style.overflow;
}
function _aspxSetVerticalOverflow(element, value) {
 if(__aspxIE || __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome)
  element.style.overflowY = value;
 else
  element.style.overflow = value;
}
function _aspxHideScrollBarCore(element, scrollName) {
 if(element.tagName == "IFRAME") {
  if((element.scrolling == "yes") || (element.scrolling == "auto")) {
   _aspxChangeAttribute(element, "scrolling", "no");
   return true;
  }
 }
 else if(element.tagName == "DIV") {
  if((element.style[scrollName] == "scroll") || (element.style[scrollName] == "auto")) {
   _aspxChangeStyleAttribute(element, scrollName, "hidden");
   return true;
  }
 }
 return false;
}
function _aspxRestoreScrollBarCore(element, scrollName) {
 if(element.tagName == "IFRAME")
  return _aspxRestoreAttribute(element, "scrolling");
 else if(element.tagName == "DIV")
  return _aspxRestoreStyleAttribute(element, scrollName);
 return false;
}
function _aspxSetScrollBarVisibilityCore(element, scrollName, isVisible) {
 return isVisible ? _aspxRestoreScrollBarCore(element, scrollName) : _aspxHideScrollBarCore(element, scrollName);
}
function _aspxSetScrollBarVisibility(element, isVisible) {
 if(_aspxSetScrollBarVisibilityCore(element, "overflow", isVisible)) 
  return true;
 var result = _aspxSetScrollBarVisibilityCore(element, "overflowX", isVisible)
  || _aspxSetScrollBarVisibilityCore(element, "overflowY", isVisible);
 return result;
}
function _aspxSetTimeout(callString, timeout){
 return window.setTimeout(callString, timeout);
}
function _aspxClearTimer(timerID){
 if(timerID > -1)
  window.clearTimeout(timerID);
 return -1;
}
function _aspxSetInterval(callString, interval){
 return window.setInterval(callString, interval);
}
function _aspxClearInterval(timerID){
 if(timerID > -1)
  window.clearInterval(timerID);
 return -1;
}
function _aspxSetInnerHtml(element, html) {
 if(__aspxIE) {
  element.innerHTML = "<em>&nbsp;</em>" + html;
  element.removeChild(element.firstChild);
 } else
  element.innerHTML = html;
}
function _aspxGetInnerText(container) {
 if (__aspxNetscapeFamily)
  return container.textContent;
 else if (__aspxWebKitFamily) {
  var filter = _aspxGetHtml2PlainTextFilter();
  filter.innerHTML = container.innerHTML;
  _aspxSetElementDisplay(filter, true);
  var innerText = filter.innerText;
  _aspxSetElementDisplay(filter, false);
  return innerText;
 } else
  return container.innerText;
}
var __aspxHtml2PlainTextFilter = null;
function _aspxGetHtml2PlainTextFilter() {
 if (__aspxHtml2PlainTextFilter == null) {
  __aspxHtml2PlainTextFilter = document.createElement("DIV");
  __aspxHtml2PlainTextFilter.style.width = "0";
  __aspxHtml2PlainTextFilter.style.height = "0";
  _aspxSetElementDisplay(__aspxHtml2PlainTextFilter, false);
  document.body.appendChild(__aspxHtml2PlainTextFilter);
 }
 return __aspxHtml2PlainTextFilter;
}
function _aspxCreateHiddenField(name, id) {
 var input = document.createElement("INPUT");
 input.setAttribute("type", "hidden");
 if(name)
  input.setAttribute("name", name);
 if(id)
  input.setAttribute("id", id);
 return input;
}
function _aspxCloneObject(srcObject) {
  if(typeof(srcObject) != 'object' || srcObject == null)
 return srcObject;
  var newObject = { };
  for(var i in srcObject) 
 newObject[i] = srcObject[i];
  return newObject;
}
function _aspxIsExists(obj){
 return (typeof(obj) != "undefined") && (obj != null);
}
function _aspxIsFunction(obj){
 return typeof(obj) == "function";
}
function _aspxGetDefinedValue(value, defaultValue){
 return (typeof(value) != "undefined") ? value : defaultValue;
}
function _aspxGetKeyCode(srcEvt) {
 return __aspxNetscapeFamily || __aspxOpera ? srcEvt.which : srcEvt.keyCode;
}
function _aspxSetInputSelection(input, startPos, endPos){
 startPos = _aspxGetDefinedValue(startPos, 0);
 endPos = _aspxGetDefinedValue(endPos, input.value.length);
 if (__aspxIE) {
  var range = input.createTextRange();
  range.collapse(true);
  range.moveStart("character", startPos);
  range.moveEnd("character", endPos - startPos);
  range.select();
 } else {
  try {
   input.setSelectionRange(startPos, endPos);
  } catch(e) { }
 }
}
function _aspxClearInputSelection(input, carretPos){
 var length = typeof(carretPos) == "undefined" ?  input.value.length : carretPos;
 _aspxSetSelection(input, length, length); 
}
function _aspxGetSelectionInfo(input) {
 var start, end;
 if(__aspxIE){
  var range = document.selection.createRange();
  var rangeCopy = range.duplicate();
  range.move('character', -input.value.length);
  range.setEndPoint('EndToStart', rangeCopy);
  start = range.text.length;
  end = start + rangeCopy.text.length;
 } else {
  start = input.selectionStart;
  end = input.selectionEnd;
 }
 return { startPos: start, endPos: end };
}
function  _aspxHasInputSelection(input){
 var selectionInfo = _aspxGetSelectionInfo(input);
 return selectionInfo.startPos == selectionInfo.endPos;
}
function _aspxPreventElementDrag(element) {
 if(__aspxIE)
  _aspxAttachEventToElement(element, "dragstart", _aspxPreventEvent);
 else
  _aspxAttachEventToElement(element, "mousedown", _aspxPreventEvent);
}
function _aspxPreventElementDragAndSelect(element, isSkipMouseMove){
 if(__aspxWebKitFamily)
  _aspxAttachEventToElement(element, "selectstart", _aspxPreventEventAndBubble);
 if(__aspxIE){
  _aspxAttachEventToElement(element, "selectstart", new function(){ return false;});
  if(!isSkipMouseMove)
   _aspxAttachEventToElement(element, "mousemove", _aspxClearSelectionOnMouseMove);
  _aspxAttachEventToElement(element, "dragstart", _aspxPreventDragStart);
 }
}
function _aspxSetElementAsUnselectable(element, isWithChild) {
 if (element && element.nodeType == 1) {
  element.unselectable = "on";
  if (__aspxNetscapeFamily)
   element.onmousedown = new function() { return false; };
  if(isWithChild === true){
   for(var j = 0; j < element.childNodes.length; j ++)
    _aspxSetElementAsUnselectable(element.childNodes[j]);
  }
 }
}
function _aspxIsWidthSetInPercentage(width) {
 return width.indexOf('%') != -1;
}
function _aspxClearSelection() {
 try {
  if (window.getSelection) {
   if (__aspxWebKitFamily)
    window.getSelection().collapse();
   else
    window.getSelection().removeAllRanges();
  }
  else if (document.selection) {
   if(document.selection.empty)
    document.selection.empty();
   else if(document.selection.clear)
    document.selection.clear();
  }
 } catch(e) {
 }
}
function _aspxClearSelectionOnMouseMove(evt) {
 if (!__aspxIE || (evt.button != 0)) 
  _aspxClearSelection();
}
function _aspxPreventDragStart(evt) {
 evt = _aspxGetEvent(evt);
 var element = _aspxGetEventSource(evt);
 element.releaseCapture(); 
 return false;
}
function _aspxSetElementSelectionEnabled(element, value) {
 var userSelectValue = value ? "" : "none";
 var func = value ? _aspxDetachEventFromElement : _aspxAttachEventToElement;
 if(__aspxFirefox)
  element.style.MozUserSelect = userSelectValue;
 else if(__aspxWebKitFamily)
  element.style.KhtmlUserSelect = userSelectValue;
 else if(__aspxOpera)
  func(element, "mousemove", _aspxClearSelection);
 else {
  func(element, "selectstart", function() { return false; });
  func(element, "mousemove", _aspxClearSelection);
 }
}
function _aspxGetElementById(id) {
 if(document.getElementById)
  return document.getElementById(id);
 else
  return document.all[id];
}
function _aspxGetInputElementById(id) {
 var elem = _aspxGetElementById(id);
 if(!__aspxIE)
  return elem;
 if(elem) {
  if(elem.id == id)
   return elem;
  else {
   for(var i = 1; i < document.all[id].length; i++) {
    if(document.all[id][i].id == id)
     return document.all[id][i];
   }
  }
 }
 return null;
}
function _aspxGetElementByIdInDocument(documentObj, id) {
 if(documentObj.getElementById)
  return documentObj.getElementById(id);
 else
  return documentObj.all[id];
}
function _aspxGetIsParent(parentElement, element) {
 while(element != null){
  if(element == parentElement)
   return true;
  if(element.tagName == "BODY")
   return false;
  element = element.parentNode;
 }
 return false;
}
function _aspxGetParentById(element, id) {
 element = element.parentNode;
 while(element != null){
  if(element.id == id)
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxGetParentByTagName(element, tagName) {
 tagName = tagName.toUpperCase();
 while(element != null) {
  if(element.tagName == "BODY")
   return null;
  if(element.tagName == tagName)
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxElementHasCssClass(element, className) {
 return !!element.className.match("(^|\\s)" + className + "(\\s|$)");
}
function _aspxElementCssClassContains(element, className) {
 return element.className.indexOf(className) != -1;
}
function _aspxGetChildNodesByClassName(parent, className) {
 return _aspxGetChildNodes(parent, function(elem) { return elem.className && _aspxElementHasCssClass(elem, className); });
}
function _aspxGetDescendantNodesByClassName(parent, className) {
 return _aspxGetDescendantNodes(parent, function(elem) { return elem.className && _aspxElementHasCssClass(elem, className); });
}
function _aspxGetParentByClassNameInternal(element, className, selector) {
 while(element != null) {
  if(element.tagName == "BODY")
   return null;
  if(selector(element, className))
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxGetParentByPartialClassName(element, className) {
 return _aspxGetParentByClassNameInternal(element, className, _aspxElementCssClassContains);
}
function _aspxGetParentByClassName(element, className) {
 return _aspxGetParentByClassNameInternal(element, className, _aspxElementHasCssClass);
}
function _aspxGetParentByTagNameAndAttributeValue(element, tagName, attrName, attrValue) {
 tagName = tagName.toUpperCase();
 while(element != null) {
  if(element.tagName == "BODY")
   return null;
  if(element.tagName == tagName && element[attrName] == attrValue)
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxGetChildById(element, id) {
 if(!__aspxIE)
  return _aspxGetElementById(id);
 else{
  var element = element.all[id];
  if(!element)
   return null;
  else if(!_aspxIsExists(element.length)) 
   return element;
  else
   return _aspxGetElementById(id);
 }
}
function _aspxGetElementsByTagName(element, tagName) {
 tagName = tagName.toUpperCase();
 if(element != null){
  var elementAllExists = !!element.all;
  var opera10_50 = __aspxOpera && elementAllExists && !element.all.tags;
  if (elementAllExists && !opera10_50 && (!__aspxFirefox || __aspxBrowserVersion < 3))
   return __aspxNetscape ? element.all.tags[tagName] : element.all.tags(tagName);
  else
   return element.getElementsByTagName(tagName);
 }
 return null;
}
function _aspxGetChildByTagName(element, tagName, index) {
 if(element != null){    
  var collection = _aspxGetElementsByTagName(element, tagName);
  if(collection != null){
   if(index < collection.length)
    return collection[index];
  }
 }
 return null;
}
function _aspxRetrieveByPredicate(scourceCollection, predicate) {
 if(!predicate)
  return scourceCollection;
 var result = [];
 for(var i = 0; i < scourceCollection.length; i++) {
  var element = scourceCollection[i];
  if(predicate(element)) 
   result.push(element);
 }
 return result;
}
function _aspxGetChildNodes(parent, predicate) {
 return _aspxRetrieveByPredicate(parent.childNodes, predicate);
}
function _aspxGetDescendantNodes(parent, predicate) {
 var c = parent.all || parent.getElementsByTagName('*');
 return _aspxRetrieveByPredicate(c, predicate);
}
function _aspxGetElementNodes(parent) {
 if(!parent) return null;
 return _aspxGetChildNodes(parent, function(e) { return e.nodeType == 1 })
}
function _aspxGetElementNodesByPredicate(parent, predicate) {
 if(!parent) return null;
 if(!predicate) return _aspxGetElementNodes(parent);
 return _aspxGetChildNodes(parent, function(e) { return e.nodeType == 1 && predicate(e); })
}
function _aspxGetChildTextNode(element, index) {
 if(element != null){
  var collection = [ ];
  _aspxGetChildTextNodeCollection(element, collection);
  if(index < collection.length)
   return collection[index];
 }
 return null;
}
function _aspxGetChildTextNodeCollection(element, collection) {
 for(var i = 0; i < element.childNodes.length; i ++){
  var childNode = element.childNodes[i];
  if(_aspxIsExists(childNode.nodeValue))
   collection.push(childNode);
  _aspxGetChildTextNodeCollection(childNode, collection);
 }
}
function _aspxGetChildrenByPartialClassName(element, className) {
 var collection = element.all || element.getElementsByTagName('*');
 var ret = [ ];
 if(collection != null) {
  for(var i = 0; i < collection.length; i ++) {
   if(_aspxElementCssClassContains(collection[i], className))
    ret.push(collection[i]);
  }
 }
 return ret;
}
function _aspxGetParentByPartialId(element, idPart){
 while(element != null){
  if(element.id) {
   if(element.id.indexOf(idPart) > -1) return element;
  }
  element = element.parentNode;
 }
 return null;
}
function _aspxGetElementsByPartialId(element, partialName, list) {
 if(element.id && element.id.indexOf(partialName) > -1) {
  list.push(element);
 }
 if(element.childNodes)
 for(var i = 0; i < element.childNodes.length; i ++) {
  _aspxGetElementsByPartialId(element.childNodes[i], partialName, list);
 }
}
function _aspxGetElementDocument(element) {
 return element.document || element.ownerDocument;
}
function _aspxIFrameWindow(name) {
 if(__aspxIE)
  return window.frames[name].window;
 else{
  var frameElement = document.getElementById(name);
  return (frameElement != null) ? frameElement.contentWindow : null;
 }
}
function _aspxIFrameDocument(name) {
 if(__aspxIE)
  return window.frames[name].document;
 else{
  var frameElement = document.getElementById(name);
  return (frameElement != null) ? frameElement.contentDocument : null;
 }
}
function _aspxIFrameDocumentBody(name) {
 var doc = _aspxIFrameDocument(name);
 return (doc != null) ? doc.body : null;
}
function _aspxIFrameElement(name) {
 if(__aspxIE)
  return window.frames[name].window.frameElement;
 else
  return document.getElementById(name);
}
function _aspxRemoveElement(element) {
 if(element && element.parentNode)
  element.parentNode.removeChild(element);
}
function _aspxReplaceTagName(element, newTagName) {
 if (element.nodeType != 1)
  return null;
 if (element.nodeName == newTagName)
  return element;
 var doc = element.ownerDocument;
 var newElem = doc.createElement(newTagName);
 _aspxCopyAllAttributes(element, newElem);
 for (var i = 0; i < element.childNodes.length; i++)
  newElem.appendChild(element.childNodes[i].cloneNode(true));
 element.parentNode.replaceChild(newElem, element);
 return newElem;
}
function _aspxRemoveOuterTags(element) {
 if (__aspxIE) {
  element.insertAdjacentHTML( 'beforeBegin', element.innerHTML ) ;
  _aspxRemoveElement(element);
 } else {
  var docFragment = element.ownerDocument.createDocumentFragment();
  for (var i = 0; i < element.childNodes.length; i++)
   docFragment.appendChild(element.childNodes[i].cloneNode(true));
  element.parentNode.replaceChild(docFragment, element);
 }
}
function _aspxWrapElementInNewElement(element, newElementTagName) { 
 var wrapElement = null;
 if (__aspxIE) {
  var wrapElement = element.ownerDocument.createElement(newElementTagName);
  wrapElement.appendChild(element.cloneNode(true));
  element.parentNode.insertBefore(wrapElement, element);
  element.parentNode.removeChild(element);
 } else {
  var docFragment = element.ownerDocument.createDocumentFragment();
  wrapElement = element.ownerDocument.createElement(newElementTagName);
  docFragment.appendChild(wrapElement);
  wrapElement.appendChild(element.cloneNode(true));
  element.parentNode.replaceChild(docFragment, element);
 }
 return wrapElement;
}
function _aspxInsertElementAfter(newElement, targetElement) {
 var parentElem = targetElement.parentNode;
 if(parentElem.childNodes[parentElem.childNodes.length - 1] == targetElement)
  parentElem.appendChild(newElement);
 else
  parentElem.insertBefore(newElement, targetElement.nextSibling);
}
function _aspxGetEvent(evt){
 return (typeof(event) != "undefined" && event != null && __aspxIE) ? event : evt; 
}
function _aspxPreventEvent(evt){
 if (__aspxNetscapeFamily)
  evt.preventDefault();
 else
  evt.returnValue = false;
 return false;
}
function _aspxPreventEventAndBubble(evt){
 _aspxPreventEvent(evt);
 if (__aspxNetscapeFamily)
  evt.stopPropagation();
 evt.cancelBubble = true;
 return false;
}
function _aspxCancelBubble(evt){
 evt.cancelBubble = true;
 return false;
}
function _aspxGetEventSource(evt){
 evt = _aspxGetEvent(evt);
 if(!_aspxIsExists(evt)) return null; 
 return __aspxIE ? evt.srcElement : evt.target;
}
function _aspxGetEventX(evt){
 return evt.clientX  - _aspxGetIEDocumentClientOffsetInternal(true) + (__aspxSafari && __aspxBrowserVersion < 3 ? 0 : _aspxGetDocumentScrollLeft());
}
function _aspxGetEventY(evt){
 return evt.clientY - _aspxGetIEDocumentClientOffsetInternal(false) + (__aspxSafari && __aspxBrowserVersion < 3 ? 0 : _aspxGetDocumentScrollTop());
}
function _aspxGetIEDocumentClientOffsetInternal(IsX){
 var clientOffset = 0;
 if(__aspxIE){
  if(document.documentElement)
   clientOffset = IsX ? document.documentElement.clientLeft : document.documentElement.clientTop;
  if(clientOffset == 0 && document.body)
   var clientOffset = IsX ? document.body.clientLeft : document.body.clientTop;
 }
 return clientOffset;
}
function _aspxGetIsLeftButtonPressed(evt){
 evt = _aspxGetEvent(evt);
 if(!evt) return false;
 if(__aspxIE)
  return evt.button == 1;
 else if(__aspxNetscapeFamily || __aspxWebKitFamily)
  return evt.which == 1;
 else if (__aspxOpera)
  return evt.button == 0;  
 return true;  
}
function _aspxGetWheelDelta(evt){
 var ret = __aspxNetscapeFamily ? -evt.detail : evt.wheelDelta;
 if (__aspxOpera && __aspxBrowserVersion < 9)
  ret = -ret;
 return ret;
}
function _aspxDelCookie(name){
 _aspxSetCookieInternal(name, "", new Date(1970, 1, 1));
}
function _aspxGetCookie(name) {
 name = escape(name);
 var cookies = document.cookie.split(';');
 for(var i = 0; i < cookies.length; i++) {
  var cookie = _aspxTrim(cookies[i]);
  if(cookie.indexOf(name + "=") == 0)
   return unescape(cookie.substring(name.length + 1, cookie.length));
  else if(cookie.indexOf(name + ";") == 0 || cookie === name)
   return "";
 }
 return null;
}
function _aspxSetCookie(name, value, expirationDate){
 if(!_aspxIsExists(value)) {
  _aspxDelCookie(name);
  return;
 }
 if(!ASPxIdent.IsDate(expirationDate)) {
  expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
 }
 _aspxSetCookieInternal(name, value, expirationDate);
}
function _aspxSetCookieInternal(name, value, date){
 document.cookie = escape(name) + "=" + escape(value.toString()) + "; expires=" + date.toGMTString() + "; path=/";
}
function _aspxGetElementDisplay(element){
 return element.style.display != "none";
}
function _aspxSetElementDisplay(element, value){
 element.style.display = value ? "" : "none";
}
function _aspxGetElementVisibility(element){
 return element.style.visibility != "hidden";
}
function _aspxSetElementVisibility(element, value){
 element.style.visibility = value ? "" : "hidden";
}
function _aspxElementIsVisible(element){
 while(element && element.tagName != "BODY") {
  if(!_aspxGetElementVisibility(element) || !_aspxGetElementDisplay(element))
     return false;
  element = element.parentNode;
 }
 return true;
}
function _aspxElementIsDisplayed(element) {
 while(element && element.tagName != "BODY") {
  if(!_aspxGetElementDisplay(element))
     return false;
  element = element.parentNode;
 }
 return true;
}
function _aspxAddStyleSheetLinkToDocument(doc, linkUrl) {
 var newLink = _aspxCreateStyleLink(doc, linkUrl);
 var head = _aspxGetHeadElementOrCreateIfNotExist(doc);
 head.appendChild(newLink);
}
function _aspxGetHeadElementOrCreateIfNotExist(doc) {
 var elements = _aspxGetElementsByTagName(doc, "head");
 var head = null;
 if (elements.length == 0) {
  head = doc.createElement("head");
  head.visibility = "hidden";
  doc.insertBefore(head, doc.body);
 } else
  head = elements[0];
 return head;
}
function _aspxCreateStyleLink(doc, url) {
 var newLink = doc.createElement("link");
 _aspxSetAttribute(newLink, "href", url);
 _aspxSetAttribute(newLink, "type", "text/css");
 _aspxSetAttribute(newLink, "rel", "stylesheet");
 return newLink;
}
function _aspxGetCurrentStyle(element){
 if (__aspxIE)
  return element.currentStyle;
 else if (__aspxOpera && __aspxBrowserVersion < 9)
  return window.getComputedStyle(element, null);
 else
  return document.defaultView.getComputedStyle(element, null);
}
function _aspxIsElementRightToLeft(element) {
 return _aspxGetCurrentStyle(element).direction.toUpperCase().indexOf("RTL") > -1;
}
function _aspxCreateStyleSheetInDocument(doc) {
 if(__aspxIE)
  return doc.createStyleSheet();
 else {
  var styleSheet = doc.createElement("STYLE");
  _aspxGetChildByTagName(doc, "HEAD", 0).appendChild(styleSheet);
  return styleSheet.sheet;
 }
}
function _aspxCreateStyleSheet(){
 return _aspxCreateStyleSheetInDocument(document);
}
function _aspxGetStyleSheetRules(styleSheet){
 try {
  return __aspxIE ? styleSheet.rules : styleSheet.cssRules;
 }
 catch(e) {
  return null;
 }
}
function _aspxGetStyleSheetRule(className){
 if(__aspxCachedRules[className]) {
  if(__aspxCachedRules[className] != __aspxEmptyCachedValue)
   return __aspxCachedRules[className];
  return null;
 }
 for(var i = 0; i < document.styleSheets.length; i ++){
  var styleSheet = document.styleSheets[i];
  var rules = _aspxGetStyleSheetRules(styleSheet);
  if(rules != null){
   for(var j = 0; j < rules.length; j ++){
    if(rules[j].selectorText == "." + className){
     __aspxCachedRules[className] = rules[j];
     return rules[j];
    }
   }
  }
 }
 __aspxCachedRules[className] = __aspxEmptyCachedValue;
 return null;
}
function _aspxCreateImportantStyleRule(styleSheet, cssText) {
 if(__aspxStyleNameCache[cssText])
  return __aspxStyleNameCache[cssText];
 var newText = "";
 var attributes = cssText.split(";");
 for(var i = 0; i < attributes.length; i++){
  if(attributes[i] != "")
   newText += attributes[i] + " !important;";
 }
 var className = "dxh" + __aspxStyleCount;
 _aspxAddStyleSheetRule(styleSheet, "." + className, newText);
 __aspxStyleCount++;
 __aspxStyleNameCache[cssText] = className;
 return className; 
}
function _aspxRemoveStyleSheetRule(styleSheet, index){
 var rules = _aspxGetStyleSheetRules(styleSheet);
 if(rules != null && rules.length > 0 && rules.length >= index){
  if(__aspxIE)
   styleSheet.removeRule(index);
  else   
   styleSheet.deleteRule(index);  
 }    
}
function _aspxAddStyleSheetRule(styleSheet, selector, cssText){
 if(!cssText) return;
 if(__aspxIE)
  styleSheet.addRule(selector, cssText);
 else
  styleSheet.insertRule(selector + " { " + cssText + " }", styleSheet.cssRules.length);
}
function _aspxGetPointerCursor() {
 return "pointer";
}
function _aspxSetPointerCursor(element) {
 if(element.style.cursor == "")
  element.style.cursor = _aspxGetPointerCursor();
}
function _aspxSetElementFloat(element, value) {
 if(_aspxIsExists(element.style.cssFloat))
  element.style.cssFloat = value;
 else if(_aspxIsExists(element.style.styleFloat))
  element.style.styleFloat = value;
 else
  _aspxSetAttribute(element.style, "float", value);
}
function _aspxGetElementFloat(element) {
 var currentStyle = _aspxGetCurrentStyle(element);
 if(_aspxIsExists(currentStyle.cssFloat))
  return currentStyle.cssFloat;
 if(_aspxIsExists(currentStyle.styleFloat))
  return currentStyle.styleFloat;
 return _aspxGetAttribute(currentStyle, "float");
}
var _aspxWebKit3TDRealInfo = {
 GetOffsetTop: function(tdElement){
  switch(_aspxGetCurrentStyle(tdElement).verticalAlign){
   case "middle":
    return Math.round(tdElement.offsetTop - (tdElement.offsetHeight - tdElement.clientHeight )/2 + tdElement.clientTop);
   case "bottom":
    return tdElement.offsetTop - tdElement.offsetHeight + tdElement.clientHeight + tdElement.clientTop;
  }
  return tdElement.offsetTop;
 },
 GetClientHeight: function(tdElement){
  var valign = _aspxGetCurrentStyle(tdElement).verticalAlign;
  switch(valign){
   case "middle":
    return tdElement.clientHeight + tdElement.offsetTop * 2;
   case "top":
    return tdElement.offsetHeight - tdElement.clientTop * 2;
   case "bottom":
    return tdElement.clientHeight + tdElement.offsetTop;
  }
  return tdElement.clientHeight;
 }
}
function _aspxGetIsValidPosition(pos){
 return pos != __aspxInvalidPosition && pos != -__aspxInvalidPosition;
}
function _aspxGetAbsoluteX(curEl){
 return _aspxGetAbsolutePositionX(curEl);
}
function _aspxGetAbsoluteY(curEl){
 return _aspxGetAbsolutePositionY(curEl);
}
function _aspxSetAbsoluteX(element, x){
 element.style.left = _aspxPrepareClientPosForElement(x, element, true) + "px";
}
function _aspxSetAbsoluteY(element, y){
 element.style.top = _aspxPrepareClientPosForElement(y, element, false) + "px";
}
function _aspxGetAbsolutePositionX(element){
 if (__aspxIE)
  return _aspxGetAbsolutePositionX_IE(element);
 else if (__aspxFirefox && __aspxBrowserVersion >= 3)
  return _aspxGetAbsolutePositionX_FF3(element);
 else if (__aspxOpera)
  return _aspxGetAbsolutePositionX_Opera(element);
 else if(__aspxNetscapeFamily && (!__aspxFirefox || __aspxBrowserVersion < 3))
  return _aspxGetAbsolutePositionX_NS(element);
 else if(__aspxWebKitFamily)
  return _aspxGetAbsolutePositionX_Safari(element);
 else
  return _aspxGetAbsolutePositionX_Other(element);
}
function _aspxGetAbsolutePositionX_Opera(curEl){
 var isFirstCycle = true;
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, true);
 while (curEl != null) {
  pos += curEl.offsetLeft;
  if(!isFirstCycle)
   pos -= curEl.scrollLeft;
  curEl = curEl.offsetParent;
  isFirstCycle = false;
 }
 pos += document.body.scrollLeft;
 return pos;
}
function _aspxGetAbsolutePositionX_IE(element){
 if(element == null || __aspxIE && element.parentNode == null) return 0; 
 return element.getBoundingClientRect().left + _aspxGetDocumentScrollLeft() - _aspxGetIEDocumentClientOffsetInternal(true);
}
function _aspxGetAbsolutePositionX_FF3(element){
 if(element == null) return 0;
 var x = element.getBoundingClientRect().left + _aspxGetDocumentScrollLeft();
 return Math.round(x);
}
function _aspxGetAbsolutePositionX_NS(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, true);
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetLeft;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollLeft;
  if (!isFirstCycle && __aspxFirefox){
   var style = _aspxGetCurrentStyle(curEl);
   if(curEl.tagName == "DIV" && style.overflow != "visible")
    pos += _aspxPxToInt(style.borderLeftWidth);
  }
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxGetAbsolutePositionX_Safari(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_WebKit(curEl, true);
 var isSafariVerNonLessThan3OrChrome = __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome;
 if(curEl != null){
  var isFirstCycle = true;
  if(isSafariVerNonLessThan3OrChrome && curEl.tagName == "TD") {
   pos += curEl.offsetLeft;
   curEl = curEl.offsetParent;
   isFirstCycle = false;
  }
  while (curEl != null) {
   pos += curEl.offsetLeft;
   if(isSafariVerNonLessThan3OrChrome && !isFirstCycle && (curEl.tagName == "TD" || curEl.tagName == "TABLE"))
    pos += curEl.clientLeft;
   isFirstCycle = false;
   curEl = curEl.offsetParent;
  }
 }
 return pos;
}
function _aspxGetAbsolutePositionX_Other(curEl){
 var pos = 0;
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetLeft;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollLeft;
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxGetAbsolutePositionY(element){
 if (__aspxIE)
  return _aspxGetAbsolutePositionY_IE(element);
 else if (__aspxFirefox && __aspxBrowserVersion >= 3)
  return _aspxGetAbsolutePositionY_FF3(element);
 else if (__aspxOpera)
  return _aspxGetAbsolutePositionY_Opera(element);
 else if(__aspxNetscapeFamily && (!__aspxFirefox || __aspxBrowserVersion < 3))
  return _aspxGetAbsolutePositionY_NS(element);
 else if(__aspxWebKitFamily)
  return _aspxGetAbsolutePositionY_Safari(element);
 else
  return _aspxGetAbsolutePositionY_Other(element);
}
function _aspxGetAbsolutePositionY_Opera(curEl){
 var isFirstCycle = true;
 if(curEl && curEl.tagName == "TR" && curEl.cells.length > 0)
  curEl = curEl.cells[0];
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, false);
 while (curEl != null) {
  pos += curEl.offsetTop;
  if(!isFirstCycle)
   pos -= curEl.scrollTop;
  curEl = curEl.offsetParent;
  isFirstCycle = false;
 }
 pos += document.body.scrollTop;
 return pos;
}
function _aspxGetAbsolutePositionY_IE(element){
 if(element == null || __aspxIE && element.parentNode == null) return 0; 
 return element.getBoundingClientRect().top + _aspxGetDocumentScrollTop() - _aspxGetIEDocumentClientOffsetInternal(false);
}
function _aspxGetAbsolutePositionY_FF3(element){
 if(element == null) return 0;
 var y = element.getBoundingClientRect().top + _aspxGetDocumentScrollTop();
 return Math.round(y);
}
function _aspxGetAbsolutePositionY_NS(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, false);
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetTop;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollTop;
  if (!isFirstCycle && __aspxFirefox){
   var style = _aspxGetCurrentStyle(curEl);
   if(curEl.tagName == "DIV" && style.overflow != "visible")
    pos += _aspxPxToInt(style.borderTopWidth);
  }
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxGetAbsolutePositionY_Safari(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_WebKit(curEl, false);
 var isSafariVerNonLessThan3OrChrome = __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome;
 if(curEl != null){
  var isFirstCycle = true;
  if(isSafariVerNonLessThan3OrChrome && curEl.tagName == "TD") {
   pos += _aspxWebKit3TDRealInfo.GetOffsetTop(curEl);
   curEl = curEl.offsetParent;
   isFirstCycle = false;
  }
  while (curEl != null) {
   pos += curEl.offsetTop;
   if(isSafariVerNonLessThan3OrChrome && !isFirstCycle && (curEl.tagName == "TD" || curEl.tagName == "TABLE"))
    pos += curEl.clientTop;
   isFirstCycle = false;
   curEl = curEl.offsetParent;
  }
 }
 return pos;
}
function _aspxGetAbsoluteScrollOffset_OperaFF(curEl, isX) {
 var pos = 0;   
 var isFirstCycle = true;
 while (curEl != null) {
  if(curEl.tagName == "BODY")
   break;
  var style = _aspxGetCurrentStyle(curEl);
  if(style.position == "absolute")
   break;
  if(!isFirstCycle && curEl.tagName == "DIV" && (style.position == "" || style.position == "static"))
   pos -= isX ? curEl.scrollLeft : curEl.scrollTop;
  curEl = curEl.parentNode;
  isFirstCycle = false;
 }
 return pos; 
}
function _aspxGetAbsoluteScrollOffset_WebKit(curEl, isX) {
 var pos = 0;   
 var isFirstCycle = true;
 var step = 0;
 var absoluteWasFoundAtStep = -1;
 while (curEl != null) {
  if(curEl.tagName == "BODY")
   break;
  var style = _aspxGetCurrentStyle(curEl);
  var positionIsDefault = style.position == "" || style.position == "static";
  var absoluteWasFoundAtPreviousStep = absoluteWasFoundAtStep >= 0 && absoluteWasFoundAtStep < step;
  if(!isFirstCycle && curEl.tagName == "DIV" && (!positionIsDefault || !absoluteWasFoundAtPreviousStep))
   pos -= isX ? curEl.scrollLeft : curEl.scrollTop;
  if(style.position == "absolute")
   absoluteWasFoundAtStep = step;
  curEl = curEl.parentNode;
  isFirstCycle = false;
  step ++;
 }
 return pos; 
}
function _aspxGetAbsolutePositionY_Other(curEl){
 var pos = 0;
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetTop;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollTop;
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxPrepareClientPosForElement(pos, element, isX) {
 pos -= _aspxGetPositionElementOffset(element, isX);
 return pos;
}
function _aspxGetIE8ElementOffset(element, isX) {
    var div = document.createElement('div');
    div.style.top = "0px";
    div.style.left = "0px";
    div.visibility = "hidden";
    div.style.position = _aspxGetCurrentStyle(element).position;
    element.parentNode.appendChild(div); 
    var realPos = isX ? _aspxGetAbsoluteX(div) : _aspxGetAbsoluteY(div);
    element.parentNode.removeChild(div);
    return realPos;
}
function _aspxTestElementParentsByFunc(element, func) {
 while(element) {  
  var tagName = element.tagName;
  if(tagName == "HTML" || tagName == "BODY" )
   return false;
  if(func(element)) 
   return true;
  element = element.parentNode; 
 }
 return false;   
}
function _aspxGetPositionElementOffset(element, isX) {
 var curEl = element.offsetParent;
 var offset = 0;
 var scroll = 0;
 var isThereFixedParent = false;
 var isFixed = false;
 var position = "";
 while(curEl != null) {
  var tagName = curEl.tagName;
  if(tagName == "HTML"){
   break;
  }
  if(tagName == "BODY"){
   if(!__aspxOpera && !__aspxChrome){
    var style = _aspxGetCurrentStyle(curEl);
    if(style.position != "" && style.position != "static"){
     offset += _aspxPxToInt(isX ? style.left : style.top);
     offset += _aspxPxToInt(isX ? style.marginLeft : style.marginTop);
    }
   }
   break;
  }
  if(tagName != "TD" && tagName != "TR") {
   var style = _aspxGetCurrentStyle(curEl);
   isFixed = style.position == "fixed";
   if(isFixed) {
    isThereFixedParent = true;
    if(__aspxIE && __aspxBrowserVersion >= 8) {
     return _aspxGetIE8ElementOffset(element, isX); 
    }
   }
   if (style.position == "absolute" || isFixed || style.position == "relative") {
    offset += isX ? curEl.offsetLeft : curEl.offsetTop;
    if (__aspxIE || __aspxOpera && __aspxBrowserVersion >= 9 || __aspxSafari && __aspxMacOSPlatform)
     offset += _aspxPxToInt(isX ? style.borderLeftWidth : style.borderTopWidth);
   }
  }
  scroll += isX ? curEl.scrollLeft : curEl.scrollTop;
  curEl = curEl.offsetParent;
 }
 offset -= scroll; 
 if((__aspxIE && __aspxBrowserVersion >= 7 || __aspxFirefox && __aspxBrowserVersion >= 3) && isThereFixedParent)
  offset += isX ? _aspxGetDocumentScrollLeft() : _aspxGetDocumentScrollTop();
 return offset;
}
function _aspxPxToInt(px) {
 var result = 0;
 if (px != null && px != "") {
  try {
   var indexOfPx = px.indexOf("px");
   if (indexOfPx > -1)
    result = parseInt(px.substr(0, indexOfPx));
  } catch(e) { }
 }
 return result;
}
function _aspxPercentageToFloat(perc) {
 var result = 0;
 if(perc != null && perc != "") {
  try {
   var indexOfPerc = perc.indexOf("%");
   if(indexOfPerc > -1)
    result = parseFloat(perc.substr(0, indexOfPerc)) / 100;
  } catch(e) { }
 }
 return result;
}
function _aspxGetLeftRightBordersAndPaddingsSummaryValue(element) {
 var currentStyle = _aspxGetCurrentStyle(element);
 var value = _aspxPxToInt(currentStyle.paddingLeft) + _aspxPxToInt(currentStyle.paddingRight);
 if(currentStyle.borderLeftStyle != "none")
  value += _aspxPxToInt(currentStyle.borderLeftWidth);
 if(currentStyle.borderRightStyle != "none")
  value += _aspxPxToInt(currentStyle.borderRightWidth);  
 return value;
}
function _aspxGetTopBottomBordersAndPaddingsSummaryValue(element) {
 var currentStyle = _aspxGetCurrentStyle(element);
 var value = _aspxPxToInt(currentStyle.paddingTop) + _aspxPxToInt(currentStyle.paddingBottom);
 if(currentStyle.borderTopStyle != "none")
  value += _aspxPxToInt(currentStyle.borderTopWidth);
 if(currentStyle.borderBottomStyle != "none")
  value += _aspxPxToInt(currentStyle.borderBottomWidth);
 return value;
}
function _aspxGetClearClientWidth(element) {
 return element.offsetWidth - _aspxGetLeftRightBordersAndPaddingsSummaryValue(element);
}
function _aspxGetClearClientHeight(element) {
 return element.offsetHeight - _aspxGetTopBottomBordersAndPaddingsSummaryValue(element);
}
function _aspxSetOffsetWidth(element, widthValue) {
 var currentStyle = _aspxGetCurrentStyle(element);
 var value = widthValue - _aspxPxToInt(currentStyle.marginLeft) - _aspxPxToInt(currentStyle.marginRight);
  value -= _aspxGetLeftRightBordersAndPaddingsSummaryValue(element);
 if(value > -1)
  element.style.width = value + "px";
}
function _aspxSetOffsetHeight(element, heightValue) {
 var currentStyle = _aspxGetCurrentStyle(element);
 var value = heightValue - _aspxPxToInt(currentStyle.marginTop) - _aspxPxToInt(currentStyle.marginBottom);
  value -= _aspxPxToInt(currentStyle.paddingTop) + _aspxPxToInt(currentStyle.paddingBottom) +
   _aspxPxToInt(currentStyle.borderTopWidth) + _aspxPxToInt(currentStyle.borderBottomWidth); 
 if(value > -1)
  element.style.height = value + "px";
}
function _aspxFindOffsetParent(element) {
 if(__aspxIE && __aspxBrowserVersion < 8)
  return element.offsetParent;
 var currentElement = element.parentNode;
 while(_aspxIsExistsElement(currentElement) && currentElement.tagName != "BODY") {
  if (currentElement.offsetWidth > 0 && currentElement.offsetHeight > 0)
   return currentElement;
  currentElement = currentElement.parentNode;
 }
 return document.body;
}
function _aspxGetDocumentScrollTop(){
 if(__aspxWebKitFamily || __aspxIE && __aspxBrowserVersion == 5.5 || document.documentElement.scrollTop == 0) {
  if(__aspxMacOSMobilePlatform) 
   return window.pageYOffset;
  else 
   return document.body.scrollTop;
 }
 else
  return document.documentElement.scrollTop;
}
function _aspxGetDocumentScrollLeft(){
 if(__aspxIE && __aspxBrowserVersion < 8) {
  var body = document.body || document.documentElement;
  if(_aspxIsElementRightToLeft(body))
   return body.scrollWidth - body.scrollLeft - body.clientWidth;
 }
 if(__aspxWebKitFamily || __aspxIE && __aspxBrowserVersion == 5.5 || document.documentElement.scrollLeft == 0)
  return document.body.scrollLeft;
 return document.documentElement.scrollLeft;
}
function _aspxGetDocumentClientWidth(){
 if(__aspxWebKitFamily || __aspxIE && __aspxBrowserVersion == 5.5 || document.documentElement.clientWidth == 0)
  return document.body.clientWidth;
 else
  return document.documentElement.clientWidth;
}
function _aspxGetDocumentClientHeight(){
 if(__aspxWebKitFamily)
  return document.documentElement.clientHeight; 
 else if(__aspxOpera) 
  return __aspxBrowserVersion >= 9.6 ? document.documentElement.clientHeight : document.body.clientHeight;
 else if(__aspxIE && __aspxBrowserVersion == 5.5 ||  document.documentElement.clientHeight == 0)
  return document.body.clientHeight;
 else
  return document.documentElement.clientHeight;
}
function _aspxSetStylePosition(element, x, y){
 element.style.left = x + "px";
 element.style.top = y + "px";
}
function _aspxSetStyleSize(element, width, height){
 element.style.width = width + "px";
 element.style.height = height + "px";
}
function _aspxGetDocumentWidth(){
 var bodyWidth = document.body.offsetWidth;
 var docWidth = (__aspxIE && __aspxBrowserMajorVersion != 7) ? document.documentElement.clientWidth : document.documentElement.offsetWidth;
 var bodyScrollWidth = document.body.scrollWidth;
 var docScrollWidth = document.documentElement.scrollWidth;
 return _aspxGetMaxDimensionOf(bodyWidth, docWidth, bodyScrollWidth, docScrollWidth);
}
function _aspxGetDocumentHeight(){
 var bodyHeight = document.body.offsetHeight;
 var docHeight = (__aspxIE && __aspxBrowserMajorVersion != 7) ? document.documentElement.clientHeight : document.documentElement.offsetHeight;
 var bodyScrollHeight = document.body.scrollHeight;
 var docScrollHeight = document.documentElement.scrollHeight;
 var maxHeight = _aspxGetMaxDimensionOf(bodyHeight, docHeight, bodyScrollHeight, docScrollHeight);
 if(__aspxOpera && __aspxBrowserVersion >= 9.6){
  if(__aspxBrowserVersion < 10)
   maxHeight = _aspxGetMaxDimensionOf(bodyHeight, docHeight, bodyScrollHeight);
  var visibleHeightOfDocument = document.documentElement.clientHeight;
  if(maxHeight > visibleHeightOfDocument)
   maxHeight = _aspxGetMaxDimensionOf(window.outerHeight, maxHeight);
  else
   maxHeight = document.documentElement.clientHeight;
  return maxHeight;
 }
 return maxHeight;
}
function _aspxGetDocumentMaxClientWidth(){
 var bodyWidth = document.body.offsetWidth;
 var docWidth = document.documentElement.offsetWidth;
 var docClientWidth = document.documentElement.clientWidth;
 return _aspxGetMaxDimensionOf(bodyWidth, docWidth, docClientWidth);
}
function _aspxGetDocumentMaxClientHeight(){
 var bodyHeight = document.body.offsetHeight;
 var docHeight = document.documentElement.offsetHeight;
 var docClientHeight = document.documentElement.clientHeight;
 return _aspxGetMaxDimensionOf(bodyHeight, docHeight, docClientHeight);
}
function _aspxGetMaxDimensionOf(){
 var max = __aspxInvalidDimension;
 for (var i = 0; i < arguments.length; i++){
  if(max < arguments[i])
   max = arguments[i];
 }
 return max;
}
function _aspxGetClientLeft(element){
 return _aspxIsExists(element.clientLeft) ? element.clientLeft : (element.offsetWidth - element.clientWidth) / 2;
}
function _aspxGetClientTop(element){
 return _aspxIsExists(element.clientTop) ? element.clientTop : (element.offsetHeight - element.clientHeight) / 2;
}
function _aspxRemoveBorders(element) {
 if(!element)
  return;
 element.style.borderWidth = 0;
 for(var i = 0; i < element.childNodes.length; i++) {
  var child = element.childNodes[i];
  if(child.style)
   child.style.border = "0";
 }
}
function _aspxSetBackground(element, background) {
 if(!element)
  return;
 element.style.backgroundColor = background;
 for(var i = 0; i < element.childNodes.length; i++) {
  var child = element.childNodes[i];
  if(child.style)
   child.style.backgroundColor = background;
 }
}
function _aspxDoElementClick(element) {
 try{
  element.click();
 }
 catch(e){ 
 }
}
function _aspxSetFocus(element) {
 window.setTimeout(function() { 
  try {
   element.focus();
   if (__aspxIE && document.activeElement != element)
    element.focus();
  } catch (e) {
  }
 }, 100);
}
function _aspxIsFocusableCore(element, skipContainerVisibilityCheck) {
 var current = element;
 while(current) {
  if (current == element || !skipContainerVisibilityCheck(current)) {
   if (current.tagName == "BODY")
    return true;
   if (current.disabled || !_aspxGetElementDisplay(current) || !_aspxGetElementVisibility(current))
    return false;
  }
  current = current.parentNode;
 }
 return true;
}
function _aspxIsFocusable(element) {
 return _aspxIsFocusableCore(element, function() { return false; });
}
function _aspxAttachEventToElement(element, eventName, func) {
 if(__aspxNetscapeFamily || __aspxWebKitFamily)
  element.addEventListener(eventName, func, true);
 else {
  if(eventName.toLowerCase().indexOf("on") != 0) 
   eventName = "on" + eventName;
  element.attachEvent(eventName, func);
 }
}
function _aspxDetachEventFromElement(element, eventName, func) {
 if(__aspxNetscapeFamily || __aspxWebKitFamily)
  element.removeEventListener(eventName, func, true);
 else {
  if(eventName.toLowerCase().indexOf("on") != 0) 
   eventName = "on" + eventName;
  element.detachEvent(eventName, func);
 }
}
function _aspxAttachEventToDocument(eventName, func) {
 _aspxAttachEventToElement(document, eventName, func);
}
function _aspxDetachEventFromDocument(eventName, func) {
 _aspxDetachEventFromElement(document, eventName, func);
}
function _aspxCreateEventHandlerFunction(funcName, controlName, withHtmlEventArg) {
 return withHtmlEventArg ?
  new Function("event", funcName + "('" + controlName + "', event);") :
  new Function(funcName + "('" + controlName + "');");
}
function _aspxGetMouseWheelEventName(){
 return __aspxNetscapeFamily ? "DOMMouseScroll" : "mousewheel";
}
function _aspxCreateClass(parentClass, properties) {
 var ret = function() {
  if (ret.preparing) 
   return delete(ret.preparing);
  if (ret.constr) {
   this.constructor = ret;
   ret.constr.apply(this, arguments);
  }
 }
 ret.prototype = {};
 if(parentClass) {
  parentClass.preparing = true;
  ret.prototype = new parentClass;
  ret.prototype.constructor = parentClass;
  ret.constr = parentClass;
 }
 if(properties) {
  var constructorName = "constructor";
  for(var name in properties){
   if (name != constructorName) 
    ret.prototype[name] = properties[name];
  }
  if (properties[constructorName] && properties[constructorName] != Object)
   ret.constr = properties[constructorName];
 }
 return ret;
}
function _aspxGetAttribute(obj, attrName){
 if(obj.getAttribute)
  return obj.getAttribute(attrName);
 else if(obj.getPropertyValue)
  return obj.getPropertyValue(attrName);
 return null;
}
function _aspxSetAttribute(obj, attrName, value){
 if(obj.setAttribute)
  obj.setAttribute(attrName, value);
 else if(obj.setProperty)
  obj.setProperty(attrName, value, "");
}
function _aspxRemoveAttribute(obj, attrName){
 if(obj.removeAttribute)
  obj.removeAttribute(attrName);
 else if(obj.removeProperty)
  obj.removeProperty(attrName);
}
function _aspxIsExistsAttribute(obj, attrName){
 var value = _aspxGetAttribute(obj, attrName);
 return (value != null) && (value !== "");
}
function _aspxSetOrRemoveAttribute(obj, attrName, value) {
 if (!value)
  _aspxRemoveAttribute(obj, attrName);
 else
  _aspxSetAttribute(obj, attrName, value);
}
function _aspxSaveAttribute(obj, attrName, savedObj, savedAttrName){
 if(!_aspxIsExistsAttribute(savedObj, savedAttrName)){
  var oldValue = _aspxIsExistsAttribute(obj, attrName) ? _aspxGetAttribute(obj, attrName) : __aspxEmptyAttributeValue;
  _aspxSetAttribute(savedObj, savedAttrName, oldValue);
 }
}
function _aspxChangeAttributeExtended(obj, attrName, savedObj, savedAttrName, newValue){
 _aspxSaveAttribute(obj, attrName, savedObj, savedAttrName);
 _aspxSetAttribute(obj, attrName, newValue);
}
function _aspxChangeAttribute(obj, attrName, newValue){
 _aspxChangeAttributeExtended(obj, attrName, obj, "saved" + attrName, newValue);
}
function _aspxChangeStyleAttribute(obj, attrName, newValue){
 _aspxChangeAttributeExtended(obj.style, attrName, obj, "saved" + attrName, newValue);
}
function _aspxResetAttributeExtended(obj, attrName, savedObj, savedAttrName){
 _aspxSaveAttribute(obj, attrName, savedObj, savedAttrName);
 _aspxSetAttribute(obj, attrName, "");
 _aspxRemoveAttribute(obj, attrName);
}
function _aspxResetAttribute(obj, attrName){
 _aspxResetAttributeExtended(obj, attrName, obj, "saved" + attrName);
}
function _aspxResetStyleAttribute(obj, attrName){
 _aspxResetAttributeExtended(obj.style, attrName, obj, "saved" + attrName);
}
function _aspxRestoreAttributeExtended(obj, attrName, savedObj, savedAttrName){
 if(_aspxIsExistsAttribute(savedObj, savedAttrName)){
  var oldValue = _aspxGetAttribute(savedObj, savedAttrName);
  if(oldValue != __aspxEmptyAttributeValue)
   _aspxSetAttribute(obj, attrName, oldValue);
  else
   _aspxRemoveAttribute(obj, attrName);
  _aspxRemoveAttribute(savedObj, savedAttrName);
  return true;
 }
 return false;
}
function _aspxRestoreAttribute(obj, attrName){
 return _aspxRestoreAttributeExtended(obj, attrName, obj, "saved" + attrName);
}
function _aspxRestoreStyleAttribute(obj, attrName){
 return _aspxRestoreAttributeExtended(obj.style, attrName, obj, "saved" + attrName);
}
function _aspxCopyAllAttributes(sourceElem, destElement) {
 var attrs = sourceElem.attributes;
 for (var n = 0; n < attrs.length; n++) {
  var attr = attrs[n];
  if (attr.specified) {
   var attrName = attr.nodeName;
   var attrValue = sourceElem.getAttribute(attrName, 2);
   if (attrValue == null)
    attrValue = attr.nodeValue;
   destElement.setAttribute(attrName, attrValue, 0); 
  }
 }
 if (sourceElem.style.cssText !== '')
  destElement.style.cssText = sourceElem.style.cssText;
}
function _aspxRemoveAllAttributes(element, excludedAttributes) {
 var excludedAttributesHashTable = {};
 if (excludedAttributes)
  excludedAttributesHashTable = _aspxCreateHashTableFromArray(excludedAttributes);
 if (element.attributes) {
  var attrArray = element.attributes;
  for (var i = 0; i < attrArray.length; i++) {
   var attrName = attrArray[i].name;
   if (!_aspxIsExists(excludedAttributesHashTable[attrName.toLowerCase()])) {
    try {
     attrArray.removeNamedItem(attrName);
    } catch (e) { }
   }
  }
 }
}
function _aspxRemoveStyleAttribute(element, attrName) {
 if (element.style) {
  if (__aspxFirefox && element.style[attrName]) 
   element.style[attrName] = "";
  if (element.style.removeAttribute && element.style.removeAttribute != "")
   element.style.removeAttribute(attrName);
  else if (element.style.removeProperty && element.style.removeProperty != "")
   element.style.removeProperty(attrName);
 }
}
function _aspxRemoveAllStyles(element) {
 if (element.style) {
  for(var key in element.style)
   _aspxRemoveStyleAttribute(element, key);
    _aspxRemoveAttribute(element, "style");
 }
}
function _aspxChangeTabIndexAttribute(element){
 var attribute = _aspxGetTabIndexAttribute(); 
 if(_aspxGetAttribute(element, attribute) != -1)
    _aspxChangeAttribute(element, attribute, -1);
}
function _aspxRestoreTabIndexAttribute(element){
 var attribute = _aspxGetTabIndexAttribute();
 if(_aspxIsExistsAttribute(element, attribute)) 
    if(_aspxGetAttribute(element, attribute) == -1)   
    if(_aspxIsExistsAttribute(element, "saved" + attribute)){
    var oldValue = _aspxGetAttribute(element, "saved" + attribute);
    if(oldValue != __aspxEmptyAttributeValue)
     _aspxSetAttribute(element, attribute, oldValue);
    else {
    if (__aspxWebKitFamily) 
     _aspxSetAttribute(element, attribute, 0); 
    _aspxRemoveAttribute(element, attribute);   
    }
    _aspxRemoveAttribute(element, "saved" + attribute); 
    }
}
function _aspxGetTabIndexAttribute(){
 return __aspxIE  ? "tabIndex" : "tabindex";
}
function _aspxChangeAttributesMethod(enabled){
 return enabled ? _aspxRestoreAttribute : _aspxResetAttribute;
}
function _aspxInitiallyChangeAttributesMethod(enabled){
 return enabled ? _aspxChangeAttribute : _aspxResetAttribute;
}
function _aspxChangeStyleAttributesMethod(enabled){
 return enabled ? _aspxRestoreStyleAttribute : _aspxResetStyleAttribute;
}
function _aspxInitiallyChangeStyleAttributesMethod(enabled){
 return enabled ? _aspxChangeStyleAttribute : _aspxResetStyleAttribute;
}
function _aspxChangeEventsMethod(enabled){
 return enabled ? _aspxAttachEventToElement : _aspxDetachEventFromElement;
}
function _aspxChangeDocumentEventsMethod(enabled){
 return enabled ? _aspxAttachEventToDocument : _aspxDetachEventFromDocument;
}
function _aspxTrimStart(str) { 
 var re = /\s*((\S+\s*)*)/;
 return str.replace(re, "$1"); 
}
function _aspxTrimEnd(str) { 
 var re = /((\s*\S+)*)\s*/;
 return str.replace(re, "$1"); 
}
function _aspxTrim(str) { 
 return _aspxTrimStart(_aspxTrimEnd(str)); 
}
function _aspxInsert(str, subStr, index) { 
 var leftText = str.slice(0, index);
 var rightText = str.slice(index);
 return leftText + subStr + rightText;
}
function _aspxInsertEx(str, subStr, startIndex, endIndex) { 
 var leftText = str.slice(0, startIndex);
 var rightText = str.slice(endIndex);
 return leftText + subStr + rightText;
}
function _aspxNavigateUrl(url, target) {
 var javascriptPrefix = "javascript:";
 if(url == "")
  return;
 else if(url.indexOf(javascriptPrefix) != -1) 
  eval(url.substr(javascriptPrefix.length));
 else {
  try{
   if(target != "")
    _aspxNavigateTo(url, target);
   else
    location.href = url;
  }
  catch(e){
  }
 }
}
function _aspxNavigateTo(url, target) {
 var lowerCaseTarget = target.toLowerCase();
 if("_top" == lowerCaseTarget)
  top.location.href = url;
 else if("_self" == lowerCaseTarget)
  location.href = url;
 else if("_search" == lowerCaseTarget)
  window.open(url, 'blank');
 else if("_media" == lowerCaseTarget)
  window.open(url, 'blank');
 else if("_parent" == lowerCaseTarget)
  window.parent.location.href = url;
 else if("_blank" == lowerCaseTarget)
  window.open(url, 'blank');
 else {
  var frame = _aspxGetFrame(top.frames, target);
  if(frame != null)
   frame.location.href = url;
  else
   window.open(url, 'blank');
 }
}
function _aspxGetFrame(frames, name) {
 if(frames[name])
  return frames[name];
 for(var i = 0; i < frames.length; i++) {
  try {
   var frame = frames[i];
   if(frame.name == name) 
    return frame; 
   frame = _aspxGetFrame(frame.frames, name);
   if(frame != null)   
    return frame; 
  } catch(e) {
  } 
 }
 return null;
}
function _aspxToHex(d) {
 return (d < 16) ? ("0" + d.toString(16)) : d.toString(16);
}
function _aspxColorToHexadecimal(colorValue) {
 if (typeof(colorValue) == "number") {
  var r = colorValue & 0xFF;
  var g = (colorValue >> 8) & 0xFF;
  var b = (colorValue >> 16) & 0xFF;
  return "#" + _aspxToHex(r) + _aspxToHex(g) + _aspxToHex(b);
 }
 if (colorValue && (colorValue.substr(0, 3).toLowerCase() == "rgb")) {
  var re = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/;
  var regResult = colorValue.match(re);
  if (regResult) {
   var r = parseInt(regResult[1]);
   var g = parseInt(regResult[2]);
   var b = parseInt(regResult[3]);
   return "#" + _aspxToHex(r) + _aspxToHex(g) + _aspxToHex(b);
  }
  return null;
 } 
 if (colorValue && (colorValue.charAt(0) == "#"))
  return colorValue;
 return null;
}
function _aspxFormatCallbackArg(prefix, arg) {
 if(prefix == null && arg == null)
  return ""; 
 if(prefix == null) prefix = "";
 if(arg == null) arg = "";
 if(arg != null && !_aspxIsExists(arg.length) && _aspxIsExists(arg.value))
  arg = arg.value;
 arg = arg.toString();
 return [prefix, '|', arg.length, '|' , arg].join('');
}
function _aspxFormatCallbackArgs(callbackData) {
 var sb = [ ];
 for(var i = 0; i < callbackData.length; i++)
  sb.push(_aspxFormatCallbackArg(callbackData[i][0], callbackData[i][1]));
 return sb.join("");
}
function _aspxIsValidElement(element){
 if(__aspxIE)
  return element.parentNode && element.parentNode.tagName;
 else {
  if(!__aspxOpera && element.offsetParent != null)
   return true;
  while(element != null){
   if(element.tagName == "BODY")
    return true;
   element = element.parentNode;
  }
  return false;
 }
}
function _aspxIsValidElements(elements) {
 if (!elements)
  return false; 
 for(var i = 0; i < elements.length; i++) {
  if(elements[i] && !_aspxIsValidElement(elements[i]))
   return false;
 }
 return true;
}
function _aspxIsExistsElement(element) {
 return element && _aspxIsValidElement(element);
}
function _aspxFindParentByTestFunc(element, testFunc){
 if (!testFunc) return null;
 while(element != null && element.tagName != "BODY"){
  if(testFunc(element))
   return element;
  element = element.parentNode;
 }
 return null;
}
ASPxClientEvent = _aspxCreateClass(null, {
 constructor: function() {
  this.handlerInfoList = [];
 },
 AddHandler: function(handler, executionContext) {
  if(typeof(executionContext) == "undefined")
   executionContext = null;
  var handlerInfo = ASPxClientEvent.CreateHandlerInfo(handler, executionContext);
  this.handlerInfoList.push(handlerInfo);
 },
 RemoveHandler: function(handler, executionContext) {
  for(var i = this.handlerInfoList.length - 1; i >= 0; i--) {
   var handlerInfo = this.handlerInfoList[i];
   if(handlerInfo.handler == handler && (!executionContext || handlerInfo.executionContext == executionContext)) {
    _aspxArrayRemoveAt(this.handlerInfoList, i);
    return;
   }
  }
 },
 ClearHandlers: function() {
  this.handlerInfoList.length = 0;
 },
 FireEvent: function(obj, args) {
  for(var i = 0; i < this.handlerInfoList.length; i++) {
   var handlerInfo = this.handlerInfoList[i];
   handlerInfo.handler.call(handlerInfo.executionContext, obj, args);
  }
 },
 InsertFirstHandler: function(handler, executionContext){
  if(typeof(executionContext) == "undefined")
   executionContext = null;
  var handlerInfo = ASPxClientEvent.CreateHandlerInfo(handler, executionContext);
  _aspxArrayInsert(this.handlerInfoList, handlerInfo, 0);
 },
 IsEmpty: function() {
  return this.handlerInfoList.length == 0;
 }
});
ASPxClientEvent.CreateHandlerInfo = function(handler, executionContext) {
 return {
  handler: handler,
  executionContext: executionContext
 };
};
ASPxClientEventArgs = _aspxCreateClass(null, {
 constructor: function() {
 }
});
ASPxClientEventArgs.Empty = new ASPxClientEventArgs();
ASPxClientCancelEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
  this.cancel = false;
 }
});
ASPxClientProcessingModeEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(processOnServer){
  this.constructor.prototype.constructor.call(this);
  this.processOnServer = processOnServer;
 }
});
ASPxClientProcessingModeCancelEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(processOnServer){
  this.constructor.prototype.constructor.call(this, processOnServer);
  this.cancel = false;
 }
});
ASPxClientBeginCallbackEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(command){
  this.constructor.prototype.constructor.call(this);
  this.command = command;
 }
});
ASPxClientEndCallbackEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
 }
});
ASPxClientCustomDataCallbackEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(result) {
  this.constructor.prototype.constructor.call(this);
  this.result = result;
 }
});
ASPxClientCallbackErrorEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(message){
  this.constructor.prototype.constructor.call(this);
  this.message = message;
  this.handled = false;
 }
});
if(_aspxIsFunction(window.WebForm_InitCallbackAddField)) {
 (function() {
  var original = window.WebForm_InitCallbackAddField;
  window.WebForm_InitCallbackAddField = function(name, value) {
   if(typeof(name) == "string" && name)
    original.apply(null, arguments);
  };
 })();
}
ASPxPostHandler = _aspxCreateClass(null, {
 constructor: function() {
  this.Post = new ASPxClientEvent();
  this.PostFinalization = new ASPxClientEvent();
  this.ReplaceGlobalPostFunctions();
  this.HandleDxCallbackBeginning();
  this.HandleMSAjaxRequestBeginning();
 },
 OnPost: function() {
  this.Post.FireEvent(this, ASPxClientEventArgs.Empty);
  this.PostFinalization.FireEvent(this, ASPxClientEventArgs.Empty);
 },
 ReplaceGlobalPostFunctions: function() {
  if(_aspxIsFunction(window.__doPostBack))
   this.ReplaceDoPostBack();
  if(_aspxIsFunction(window.WebForm_DoCallback))
   this.ReplaceDoCallback();
  var form = _aspxGetServerForm();
  if(form == null)
   return;
  if(form.submit)
   this.ReplaceFormSubmit(form);
  this.ReplaceFormOnSumbit(form);
  form = null;
 },
 HandleDxCallbackBeginning: function() {
  aspxGetControlCollection().BeforeInitCallback.AddHandler(function() {
   _aspxRaisePostHandlerOnPost(false, true);
  });
 },
 HandleMSAjaxRequestBeginning: function() {
  if(window.Sys && Sys.WebForms && Sys.WebForms.PageRequestManager && Sys.WebForms.PageRequestManager.getInstance) {
   var pageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
   if(pageRequestManager != null && ASPxIdent.IsArray(pageRequestManager._onSubmitStatements)) {
    pageRequestManager._onSubmitStatements.unshift(function() {
     _aspxRaisePostHandlerOnPost(true); return true;
    });
   }
  }
 },
 ReplaceDoPostBack: function() {
  var original = __doPostBack;
  __doPostBack = function(eventTarget, eventArgument) {
   _aspxRaisePostHandlerOnPost();
   original(eventTarget, eventArgument);
  };
 },
 ReplaceDoCallback: function() {
  var original = WebForm_DoCallback;
  WebForm_DoCallback = function(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync) {
   var postHandler = aspxGetPostHandler();
   if(postHandler.dxCallbackHandled)
    delete postHandler.dxCallbackHandled;
   else
    _aspxRaisePostHandlerOnPost();
   return original(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync);
  };
 },
 ReplaceFormSubmit: function(form) {
  var original = form.submit;
  form.submit = function() {
   _aspxRaisePostHandlerOnPost();
   var callee = arguments.callee;
   this.submit = original;
   var submitResult = this.submit();
   this.submit = callee;
   return submitResult;
  };
 },
 ReplaceFormOnSumbit: function(form) {
  var original = form.onsubmit;
  form.onsubmit = function() {
   var postHandler = aspxGetPostHandler();
   if(postHandler.msAjaxRequestBeginningHandled)
    delete postHandler.msAjaxRequestBeginningHandled;
   else
    _aspxRaisePostHandlerOnPost();
   return _aspxIsFunction(original) ? original() : true;
  };
  form = null;
 }
});
function _aspxRaisePostHandlerOnPost(isMSAjaxRequestBeginning, isDXCallbackBeginning) {
 var postHandler = aspxGetPostHandler();
 if(postHandler) {
  if(isMSAjaxRequestBeginning)
   postHandler.msAjaxRequestBeginningHandled = true;
  else if(isDXCallbackBeginning)
   postHandler.dxCallbackHandled = true;
  postHandler.OnPost();
 }
}
function aspxGetPostHandler() {
 if (!window.__aspxPostHandler)
  window.__aspxPostHandler = new ASPxPostHandler();
 return window.__aspxPostHandler;
}
ASPxClientControlsInitializedEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(isCallback) {
  this.isCallback = isCallback;
 }
});
ASPxClientControlCollection = _aspxCreateClass(null, {
 constructor: function(){
  this.elements = new Object();
  this.windowResizeSubscribers = [];
  this.prevWndWidth = "";
  this.prevWndHeight = "";
  this.BeforeInitCallback = new ASPxClientEvent();
  this.ControlsInitialized = new ASPxClientEvent();
 },
 Add: function(element){
  this.elements[element.name] = element;
 },
 Remove: function(element) {
  this.elements[element.name] = null;
 },
 Get: function(name){
  return this.elements[name];
 },
 ForEachControl: function(processFunc, context) {
  if(!context)
   context = this;
  for(var name in this.elements) {
   var control = this.elements[name];
   if(ASPxIdent.IsASPxClientControl(control))
    if(processFunc.call(context, control))
     return;
  }
 },
 AdjustControls: function(container, checkSizeCorrectedFlag) {
  if(typeof(container) == "undefined")
   container = null;
  if(typeof(checkSizeCorrectedFlag) == "undefined")
   checkSizeCorrectedFlag = false;
  var collection = this;
  window.setTimeout(function() {
   collection.ProcessControlsInContainer(container, function(control) {
    control.AdjustControl(checkSizeCorrectedFlag);
   });
  }, 0);
 },
 CollapseControls: function(container, checkSizeCorrectedFlag) {
  this.ProcessControlsInContainer(container, function(control) {
   control.CollapseControl(checkSizeCorrectedFlag);
  });
 },
 AtlasInitialize: function(isCallback) {
  _aspxProcessScriptsAndLinks("", isCallback);
 },
 Initialize: function() {
  this.InitializeElements(false );
  if(typeof(Sys) != "undefined" && typeof(Sys.Application) != "undefined")
   Sys.Application.add_load(aspxCAInit);
  this.InitWindowSizeCache();
 },
 InitializeElements: function(isCallback) {
  this.ForEachControl(function(control){
   if(!control.isInitialized)
    control.Initialize();
  });
  if(typeof(_aspxGetEditorStretchedInputElementsManager) != "undefined")
   _aspxGetEditorStretchedInputElementsManager().Initialize();
  this.AfterInitializeElements(true);
  this.AfterInitializeElements(false);
  this.RaiseControlsInitialized(isCallback);
 },
 AfterInitializeElements: function(leadingCall) {
  this.ForEachControl(function(control){
   if (control.leadingAfterInitCall && leadingCall || !control.leadingAfterInitCall && !leadingCall) {
    if(!control.isInitialized)
     control.AfterInitialize();
   }
  });
 },
 DoFinalizeCallback: function() {
  this.ForEachControl(function(control){
   control.DoFinalizeCallback();
  });
 },
 ProcessControlsInContainer: function(container, processFunc) {
  if(container)
   this.ForEachControl(function(control){
    if(this.IsControlInContainer(container, control))
     processFunc(control);
   });
 },
 IsControlInContainer: function(container, control) {
  if(control.GetMainElement) {
   var mainElement = control.GetMainElement();
   if(mainElement && (mainElement != container)) {
    if(_aspxGetIsParent(container, mainElement))
     return true;
   }
  }
  return false;
 },
 RaiseControlsInitialized: function(isCallback) {
  if(!this.ControlsInitialized.IsEmpty()){
   if(typeof(isCallback) == "undefined")
    isCallback = true;
   var args = new ASPxClientControlsInitializedEventArgs(isCallback);
   this.ControlsInitialized.FireEvent(this, args);
  }
 },
 Before_WebForm_InitCallback: function(){
  var args = new ASPxClientEventArgs();
  this.BeforeInitCallback.FireEvent(this, args);
 },
 InitWindowSizeCache: function(){
  this.prevWndWidth = document.documentElement.clientWidth;
  this.prevWndHeight = document.documentElement.clientHeight;
 },
 BrowserWindowSizeChanged: function(){
  var wndWidth = document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
  var wndHeight = document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
  var browserWindowSizeChanged = (this.prevWndWidth != wndWidth) || (this.prevWndHeight != wndHeight);
  if(browserWindowSizeChanged){
   this.prevWndWidth = wndWidth;
   this.prevWndHeight = wndHeight;
   return true;
  }
  return false;
 },
 SubscribeObjectToBrowserWindowResize: function(object){
  this.windowResizeSubscribers.push(object);
 },
 OnBrowserWindowResize: function(evt){
  if(this.BrowserWindowSizeChanged()){
   this.ForEachControl(function(control) {
    control.OnBrowserWindowResizeInternal(evt);
   });
    for(var i = 0; i < this.windowResizeSubscribers.length; i++)
    this.windowResizeSubscribers[i].OnBrowserWindowResize(evt);
  }
 }
});
ASPxClientControl = _aspxCreateClass(null, {
 constructor: function(name){
  this.isASPxClientControl = true;
  this.name = name;
  this.uniqueID = name;  
  this.enabled = true;
  this.clientEnabled = true;
  this.clientVisible = true;
  this.rtl = false;
  this.autoPostBack = false;
  this.allowMultipleCallbacks = true;
  this.callBack = null;
  this.savedCallbacks = null;
  this.isNative = false;
  this.requestCount = 0;
  this.isInitialized = false;
  this.initialFocused = false;
  this.leadingAfterInitCall = false; 
  this.sizeCorrectedOnce = false;
  this.serverEvents = [];
  this.dialogContentHashTable = { };
  this.sizeCorrectedOnce = false;
  this.loadingPanelElement = null;
  this.loadingDivElement = null;  
  this.hasPhantomLoadingPanel = false;
  this.mainElement = null;
  this.renderIFrameForPopupElements = false;
  this.widthValueSetInPercentage = false;
  this.sizingConfig = {
   allowSetWidth: true,
   allowSetHeight: true,
   correction : false,
   adjustControl : false
  };
  this.Init = new ASPxClientEvent();
  this.BeginCallback = new ASPxClientEvent();
  this.EndCallback = new ASPxClientEvent();
  this.CallbackError = new ASPxClientEvent();
  this.CustomDataCallback = new ASPxClientEvent();
  aspxGetControlCollection().Add(this);  
 },
 Initialize: function() {
  if(this.callBack != null)
   this.InitializeCallBackData();
 },
 InlineInitialize: function() {
 },
 InitailizeFocus: function() {
  if(this.initialFocused && this.IsVisible())
   this.Focus();
 },
 AfterInitialize: function() {
  this.AdjustControl(__aspxCheckSizeCorrectedFlag);
  this.InitailizeFocus();
  this.isInitialized = true;
  this.RaiseInit();
  if(this.savedCallbacks) {
   for(var i = 0; i < this.savedCallbacks.length; i++) 
    this.CreateCallbackInternal(this.savedCallbacks[i].arg, this.savedCallbacks[i].command, 
     false, this.savedCallbacks[i].callbackInfo);
   this.savedCallbacks = null;
  }
  this.UpdateWidthCorrectionRequired();
 },
 InitializeCallBackData: function() {
 },
 RenderExistsOnPage: function() {
  return _aspxIsExistsElement(this.GetMainElement());
 },
 GetWidth: function() {
  return this.GetMainElement().offsetWidth;
 },
 GetHeight: function() {
  return this.GetMainElement().offsetHeight;
 },
 SetWidth: function(width) {
  if(this.sizingConfig.allowSetWidth)
   this.SetSizeCore("width", width, "GetWidth", false);
 },
 SetHeight: function(height) {
  if(this.sizingConfig.allowSetHeight)
   this.SetSizeCore("height", height, "GetHeight", false);
 },
 SetSizeCore: function(sizePropertyName, size, getFunctionName, corrected) {
  if(size < 0)
   return;
  this.GetMainElement().style[sizePropertyName] = size + "px";
  if(this.sizingConfig.adjustControl)
   this.AdjustControl(false, true);
  if(this.sizingConfig.correction && !corrected) {
   var realSize = this[getFunctionName]();
   if(realSize != size) {
    var correctedSize = size - (realSize - size);
    this.SetSizeCore(sizePropertyName, correctedSize, getFunctionName, true);
   }
  }
 },
 CollapseControl: function(checkSizeCorrectedFlag) {
 },
 AdjustControl: function(checkSizeCorrectedFlag, nestedCall) {
  if(checkSizeCorrectedFlag && this.sizeCorrectedOnce || ASPxClientControl.adjustControlLocked && !nestedCall) {
   this.TryShowPhantomLoadingPanel();
   return;
  }
  ASPxClientControl.adjustControlLocked = true;
  try {
   var mainElement = this.GetMainElement();
   if (!mainElement || !this.IsDisplayed())
    return;
   this.AdjustControlCore();
   this.TryShowPhantomLoadingPanel();
   this.sizeCorrectedOnce = true;
  } finally {
   delete ASPxClientControl.adjustControlLocked;
  }
 },
 UpdateWidthCorrectionRequired: function() {
  var mainElement = this.GetMainElement();
  if(mainElement) {
   var mainElementStyle = _aspxGetCurrentStyle(mainElement);
   this.widthValueSetInPercentage = _aspxIsWidthSetInPercentage(mainElementStyle.width);
  }
 },
 OnBrowserWindowResize: function(evt) {
 },
 AdjustControlCore: function() {
 },
 OnBrowserWindowResizeInternal: function(evt){
  if(this.widthValueSetInPercentage) 
   this.OnBrowserWindowResize(evt);
 },
 RegisterServerEventAssigned: function(eventNames){
  for(var i = 0; i < eventNames.length; i++)
   this.serverEvents[eventNames[i]] = true;
 },
 IsServerEventAssigned: function(eventName){
  return !!this.serverEvents[eventName];
 },
 GetChild: function(idPostfix){
  var mainElement = this.GetMainElement();
  return mainElement ? _aspxGetChildById(mainElement, this.name + idPostfix) : null;
 },
 GetItemElementName: function(element) {
  var name = "";
  if(element.id)
   name = element.id.substring(this.name.length + 1);
  return name;
 },
 GetLinkElement: function(element) {
  if (element == null) return null;
  return (element.tagName == "A") ? element : _aspxGetChildByTagName(element, "A", 0);
 },
 GetInternalHyperlinkElement: function(parentElement, index) {
  var element = _aspxGetChildByTagName(parentElement, "A", index);
  if (element == null) 
   element = _aspxGetChildByTagName(parentElement, "SPAN", index);
  return element;
 },
 GetMainElement: function(){
  if(!_aspxIsExistsElement(this.mainElement))
   this.mainElement = _aspxGetElementById(this.name);
  return this.mainElement;
 },
 OnControlClick: function(clickedElement, htmlEvent) {
 },
 IsLoadingContainerVisible: function(){
  return this.IsVisible();
 },
 GetLoadingPanelElement: function(){
  return _aspxGetElementById(this.name + "_LP");
 },
 CloneLoadingPanel: function(element, parent) {
  var clone = element.cloneNode(true);
  clone.id = element.id + "V";
  parent.appendChild(clone);
  return clone;
 },
 CreateLoadingPanelInsideContainer: function(parentElement, hideContent, collapseHeight, collapseWidth) {
  if(this.ShouldHideExistingLoadingPanel())
   this.HideLoadingPanel();
  if(parentElement == null)
   return null;
  if(!this.IsLoadingContainerVisible()) {
   this.hasPhantomLoadingPanel = true;
   return null;
  }
  var element = this.GetLoadingPanelElement();
  if (element != null){
   var width = collapseWidth ? 0 : parentElement.clientWidth;
   var height = collapseHeight ? 0 : parentElement.clientHeight;
   if(hideContent){
    for(var i = 0; i < parentElement.childNodes.length; i++){
     if(parentElement.childNodes[i].style)
      parentElement.childNodes[i].style.display = "none";
    }
   }
   else
    parentElement.innerHTML = "";
   var table = document.createElement("TABLE");
   parentElement.appendChild(table);
   table.border = 0;
   table.cellPadding = 0;
   table.cellSpacing = 0;
   table.style.height = (height > 0) ? height + "px" : "100%";
   table.style.width = (width > 0) ? width + "px" : "100%";
   var tbody = document.createElement("TBODY");
   table.appendChild(tbody);
   var tr = document.createElement("TR");
   tbody.appendChild(tr);
   var td = document.createElement("TD");
   tr.appendChild(td);
   td.align = "center";
   td.vAlign = "middle";
   element = this.CloneLoadingPanel(element, td);
   _aspxSetElementDisplay(element, true);
   this.loadingPanelElement = element;
   return element;
  } else
   parentElement.innerHTML = "&nbsp;";
  return null;
 },
 CreateLoadingPanelWithAbsolutePosition: function(parentElement, offsetElement) {
  if(this.ShouldHideExistingLoadingPanel())
   this.HideLoadingPanel();
  if(parentElement == null)
   return null;
  if(!this.IsLoadingContainerVisible()) {
   this.hasPhantomLoadingPanel = true;
   return null;
  }
  if(!offsetElement)
   offsetElement = parentElement;
  var element = this.GetLoadingPanelElement();
  if(element != null) {
   element = this.CloneLoadingPanel(element, parentElement);
   element.style.position = "absolute";
   _aspxSetElementDisplay(element, true);
   this.SetLoadingPanelLocation(offsetElement, element);
   this.loadingPanelElement = element;
   return element;
  }
  return null;
 },
 CreateLoadingPanelInline: function(parentElement){
  if(this.ShouldHideExistingLoadingPanel())
   this.HideLoadingPanel();
  if(parentElement == null)
   return null;
  if(!this.IsLoadingContainerVisible()) {
   this.hasPhantomLoadingPanel = true;
   return null;
  }
  var element = this.GetLoadingPanelElement();
  if(element != null) {
   element = this.CloneLoadingPanel(element, parentElement);
   _aspxSetElementDisplay(element, true);
   this.loadingPanelElement = element;
   return element;
  }
  return null;
 },
 ShowLoadingPanel: function() {
 },
 HideLoadingPanel: function() {
  this.hasPhantomLoadingPanel = false;
  if(_aspxIsExistsElement(this.loadingPanelElement)) {
   _aspxRemoveElement(this.loadingPanelElement);
   this.loadingPanelElement = null;
  }
 },
 SetLoadingPanelLocation: function(offsetElement, loadingPanel, x, y, offsetX, offsetY) {
  if(!_aspxIsExists(x) || !_aspxIsExists(y)){
   var x1 = _aspxGetAbsoluteX(offsetElement);
   var y1 = _aspxGetAbsoluteY(offsetElement);
   var x2 = x1;
   var y2 = y1;
   if(offsetElement == document.body){
    x2 += _aspxGetDocumentMaxClientWidth();
    y2 += _aspxGetDocumentMaxClientHeight();
   }
   else{
    x2 += offsetElement.offsetWidth;
    y2 += offsetElement.offsetHeight;
   }
   if(x1 < _aspxGetDocumentScrollLeft())
    x1 = _aspxGetDocumentScrollLeft();
   if(y1 < _aspxGetDocumentScrollTop())
    y1 = _aspxGetDocumentScrollTop();
   if(x2 > _aspxGetDocumentScrollLeft() + _aspxGetDocumentClientWidth())
    x2 = _aspxGetDocumentScrollLeft() + _aspxGetDocumentClientWidth();
   if(y2 > _aspxGetDocumentScrollTop() + _aspxGetDocumentClientHeight())
    y2 = _aspxGetDocumentScrollTop() + _aspxGetDocumentClientHeight();
   x = x1 + ((x2 - x1 - loadingPanel.offsetWidth) / 2);
   y = y1 + ((y2 - y1 - loadingPanel.offsetHeight) / 2);
  }
  if(_aspxIsExists(offsetX) && _aspxIsExists(offsetY)){
   x += offsetX;
   y += offsetY;
  }
  loadingPanel.style.left = _aspxPrepareClientPosForElement(x, loadingPanel, true) + "px";
  loadingPanel.style.top = _aspxPrepareClientPosForElement(y, loadingPanel, false) + "px";
 },
 TryShowPhantomLoadingPanel: function() {
  if(this.hasPhantomLoadingPanel && this.InCallback())
   this.ShowLoadingPanel();
  this.hasPhantomLoadingPanel = false;
 },
 GetLoadingDiv: function(){
  return _aspxGetElementById(this.name + "_LD");
 },
 CreateLoadingDiv: function(parentElement, offsetElement){
  if(this.ShouldHideExistingLoadingPanel())
   this.HideLoadingDiv();
  if(parentElement == null || !this.IsLoadingContainerVisible()) return null;
  if(!offsetElement)
   offsetElement = parentElement;
  var div = this.GetLoadingDiv();
  if(div != null){
   div = div.cloneNode(true);
   parentElement.appendChild(div);
   _aspxSetElementDisplay(div, true);
   this.SetLoadingDivBounds(offsetElement, div);
   this.loadingDivElement = div;
   return div;
  }
  return null;
 },
 SetLoadingDivBounds: function(offsetElement, loadingDiv) {
  var absX = (offsetElement == document.body) ? 0 : _aspxGetAbsoluteX(offsetElement);
  var absY = (offsetElement == document.body) ? 0 : _aspxGetAbsoluteY(offsetElement);
  loadingDiv.style.left = _aspxPrepareClientPosForElement(absX, loadingDiv, true) + "px";
  loadingDiv.style.top = _aspxPrepareClientPosForElement(absY, loadingDiv, false) + "px";
  var width = (offsetElement == document.body) ? _aspxGetDocumentWidth() : offsetElement.offsetWidth;
  var height = (offsetElement == document.body) ? _aspxGetDocumentHeight() : offsetElement.offsetHeight;
  if(height < 0) 
   height = 0;
  _aspxSetStyleSize(loadingDiv, width, height); 
  var correctedWidth = 2 * width - loadingDiv.offsetWidth;
  if(correctedWidth <= 0) correctedWidth = width;
  var correctedHeight = 2 * height - loadingDiv.offsetHeight;
  if(correctedHeight <= 0) correctedHeight = height;
  _aspxSetStyleSize(loadingDiv, correctedWidth, correctedHeight);
 },
 HideLoadingDiv: function() {
  if(_aspxIsExistsElement(this.loadingDivElement)){
   _aspxRemoveElement(this.loadingDivElement);
   this.loadingDivElement = null;
  }
 },
 RaiseInit: function(){
  if(!this.Init.IsEmpty()){
   var args = new ASPxClientEventArgs();
   this.Init.FireEvent(this, args);
  }
 },
 RaiseBeginCallbackInternal: function(command){
  if(!this.BeginCallback.IsEmpty()){
   var args = new ASPxClientBeginCallbackEventArgs(command);
   this.BeginCallback.FireEvent(this, args);
  }
 },
 RaiseBeginCallback: function(command){
  this.RaiseBeginCallbackInternal(command);
  if(typeof(aspxGetGlobalEvents) != "undefined")
   aspxGetGlobalEvents().OnBeginCallback(this, command);
 },
 RaiseEndCallback: function(){
  if(!this.EndCallback.IsEmpty()){
   var args = new ASPxClientEndCallbackEventArgs();
   this.EndCallback.FireEvent(this, args);
  }
  if(typeof(aspxGetGlobalEvents) != "undefined")
   aspxGetGlobalEvents().OnEndCallback(this);
 },
 RaiseCallbackError: function(message) {
  if(!this.CallbackError.IsEmpty()) {
   var args = new ASPxClientCallbackErrorEventArgs(message);
   this.CallbackError.FireEvent(this, args);
   if(args.handled)
    return { isHandled: true, errorMessage: args.message };
  }
  if(typeof(aspxGetGlobalEvents) != "undefined") {
   var args = new ASPxClientCallbackErrorEventArgs(message);
   aspxGetGlobalEvents().OnCallbackError(this, args);
   if(args.handled)
    return { isHandled: true, errorMessage: args.message };
  }
  return { isHandled: false, errorMessage: message };
 },
 IsVisible: function() {
  var element = this.GetMainElement();
  return _aspxElementIsVisible(element);
 },
 IsDisplayed: function() {
  var element = this.GetMainElement();
  while(element && element.tagName != "BODY") {
   if(!_aspxGetElementDisplay(element)) 
    return false;
   element = element.parentNode;
  }
  return true;
 },
 Focus: function() {
 },
 GetClientVisible: function(){
  return this.GetVisible();
 },
 SetClientVisible: function(visible){
  this.SetVisible(visible);
 },
 GetVisible: function(){
  return this.clientVisible;
 },
 SetVisible: function(visible){
  if(this.clientVisible != visible){
   this.clientVisible = visible;
   _aspxSetElementDisplay(this.GetMainElement(), visible);
   if (visible) {
    this.AdjustControl(__aspxCheckSizeCorrectedFlag);
    var mainElement = this.GetMainElement();
    if(mainElement)
     aspxGetControlCollection().AdjustControls(mainElement, __aspxCheckSizeCorrectedFlag);
   }
  }
 },
 GetEnabled: function() {
  return this.clientEnabled;
 },
 SetEnabled: function(enabled) {
  this.clientEnabled = enabled;
  if(ASPxClientControl.setEnabledLocked)
   return;
  else
   ASPxClientControl.setEnabledLocked = true;
  aspxGetControlCollection().ProcessControlsInContainer(this.GetMainElement(), function(control) {
   if(_aspxIsFunction(control.SetEnabled))
    control.SetEnabled(enabled);
  });
  delete ASPxClientControl.setEnabledLocked;
 },
 InCallback: function() {
  return this.requestCount > 0;
 },
 DoBeginCallback: function(command) {
  this.RaiseBeginCallback(command || "");
  aspxGetControlCollection().Before_WebForm_InitCallback();
  if(typeof(WebForm_InitCallback) != "undefined" && WebForm_InitCallback) {
   __theFormPostData = "";
   __theFormPostCollection = [ ];
   this.ClearPostBackEventInput("__EVENTTARGET");
   this.ClearPostBackEventInput("__EVENTARGUMENT");
   WebForm_InitCallback();
   this.savedFormPostData = __theFormPostData;   
   this.savedFormPostCollection = __theFormPostCollection;
  }
 },
 ClearPostBackEventInput: function(id){
  var element = _aspxGetElementById(id);
  if(element != null) element.value = "";
 },
 PerformDataCallback: function(arg, handler) {
  this.CreateCustomDataCallback(arg, "", handler);
 }, 
 CreateCallback: function(arg, command) {
  var callbackInfo = this.CreateCallbackInfo(ASPxCallbackType.Common, null);
  this.CreateCallbackByInfo(arg, command, callbackInfo);
 },
 CreateCustomDataCallback: function(arg, command, handler) {
  var callbackInfo = this.CreateCallbackInfo(ASPxCallbackType.Data, handler);
  this.CreateCallbackByInfo(arg, command, callbackInfo);
 },
 CreateCallbackByInfo: function(arg, command, callbackInfo) {
  if(!this.CanCreateCallback()) return;
  if(typeof(WebForm_DoCallback) != "undefined" && WebForm_DoCallback && __aspxDocumentLoaded)
   this.CreateCallbackInternal(arg, command, true, callbackInfo);
  else {
   if(!this.savedCallbacks)
    this.savedCallbacks = [];
   var callbackInfo = { arg: arg, command: command, callbackInfo: callbackInfo };
   if(this.allowMultipleCallbacks)
    this.savedCallbacks.push(callbackInfo);
   else
    this.savedCallbacks[0] = callbackInfo;
  }
 },
 CreateCallbackInternal: function(arg, command, viaTimer, callbackInfo) {
  this.requestCount++;
  this.DoBeginCallback(command);
  if(typeof(arg) == "undefined")
   arg = "";
  if(typeof(command) == "undefined")
   command = "";
  var callbackID = this.SaveCallbackInfo(callbackInfo);
  if(viaTimer)
   window.setTimeout("aspxCreateCallback('" + this.name + "', '" + escape(arg) + "', '" + escape(command) + "', " + callbackID + ");", 0);
  else
   this.CreateCallbackCore(arg, command, callbackID);
 },
 CreateCallbackCore: function(arg, command, callbackID) {
  __theFormPostData = this.savedFormPostData;
  __theFormPostCollection = this.savedFormPostCollection;
  this.callBack(this.GetSerializedCallbackInfoByID(callbackID) + arg);
 },
 CanCreateCallback: function() {
  return this.allowMultipleCallbacks || !this.InCallback();
 },
 DoLoadCallbackScripts: function() {
  _aspxProcessScriptsAndLinks(this.name);
 },
 DoEndCallback: function() {
  this.requestCount--;
  if(this.HideLoadingPanelOnCallback()) {
   this.HideLoadingDiv();
   this.HideLoadingPanel();
  }
  this.RaiseEndCallback();
 },
 DoFinalizeCallback: function() {
 },
 HideLoadingPanelOnCallback: function() {
  return true;
 },
 ShouldHideExistingLoadingPanel: function() {
  return true;
 },
 EvalCallbackResult: function(resultString){
  return eval(resultString)
 },
 DoCallback: function(result) {
  result = _aspxTrim(result);
  if(result.indexOf(__aspxCallbackResultPrefix) != 0) 
   this.ProcessCallbackGeneralError(result);
  else {
   var resultObj = null;
   try {
    resultObj = this.EvalCallbackResult(result);
   } 
   catch(e) {
   }
   if(resultObj) {
    if(resultObj.redirect){
     window.location.href = resultObj.redirect;
     this.DoLoadCallbackScripts(); 
    }
    else if(resultObj.generalError){
     this.ProcessCallbackGeneralError(resultObj.generalError);
     this.DoLoadCallbackScripts(); 
    }
    else {
     var errorObj = resultObj.error;
     if(errorObj)
      this.ProcessCallbackError(errorObj);
     else {
      if(resultObj.cp) {
       for(var name in resultObj.cp)
        this[name] = resultObj.cp[name];
      }
      var callbackInfo = this.DequeueCallbackInfo(resultObj.id);
      if(callbackInfo.type == ASPxCallbackType.Data) 
       this.ProcessCustomDataCallback(resultObj.result, callbackInfo);
      else 
       this.ProcessCallback(resultObj.result);
     }
     this.DoLoadCallbackScripts();
    }
   } 
  }
 },
 DoCallbackError: function(result) {
  this.HideLoadingDiv();
  this.HideLoadingPanel();
  this.ProcessCallbackGeneralError(result); 
 },
 DoControlClick: function(evt) {
  this.OnControlClick(_aspxGetEventSource(evt), evt);
 },
 ProcessCallback: function(result) {
  this.OnCallback(result);
 },
 ProcessCustomDataCallback: function(result, callbackInfo) {
  if(callbackInfo.handler != null)
   callbackInfo.handler(this, result);
  this.RaiseCustomDataCallback(result);
 },
 RaiseCustomDataCallback: function(result) {
  if(!this.CustomDataCallback.IsEmpty()) {
   var arg = new ASPxClientCustomDataCallbackEventArgs(result);
   this.CustomDataCallback.FireEvent(this, arg);
  }
 },
 OnCallback: function(result) {
 },
 CreateCallbackInfo: function(type, handler) {
  return { type: type, handler: handler };
 },
 GetSerializedCallbackInfoByID: function(callbackID) {
  return this.GetCallbackInfoByID(callbackID).type + callbackID + __aspxCallbackSeparator;
 },
 SaveCallbackInfo: function(callbackInfo) {
  var activeCallbacksInfo = this.GetActiveCallbacksInfo();
  for(var i = 0; i < activeCallbacksInfo.length; i++) {
   if(activeCallbacksInfo[i] == null) {
    activeCallbacksInfo[i] = callbackInfo;
    return i;
   }
  }
  activeCallbacksInfo.push(callbackInfo);
  return activeCallbacksInfo.length - 1;
 },
 GetActiveCallbacksInfo: function() {
  var persistentProperties = this.GetPersistentProperties();
  if(!persistentProperties.activeCallbacks)
   persistentProperties.activeCallbacks = [ ];
  return persistentProperties.activeCallbacks;
 },
 GetPersistentProperties: function() {
  var storage = _aspxGetPersistentControlPropertiesStorage();
  var persistentProperties = storage[this.name];
  if(!persistentProperties) {
   persistentProperties = { };
   storage[this.name] = persistentProperties;
  }
  return persistentProperties;
 },
 GetCallbackInfoByID: function(callbackID) {
  return this.GetActiveCallbacksInfo()[callbackID];
 },
 DequeueCallbackInfo: function(index) {
  var activeCallbacksInfo = this.GetActiveCallbacksInfo();
  if(index < 0 || index >= activeCallbacksInfo.length)
   return null;
  var result = activeCallbacksInfo[index];
  activeCallbacksInfo[index] = null;
  return result;
 },
 ProcessCallbackError: function(errorObj) {
  var data = errorObj.data || null;
  var result = this.RaiseCallbackError(errorObj.message);
  if(!result.isHandled)
   this.OnCallbackError(result.errorMessage, data);
 },
 OnCallbackError: function(errorMessage, data) {
  if(errorMessage)
   alert(errorMessage);
 },
 ProcessCallbackGeneralError: function(errorMessage) {
  var result = this.RaiseCallbackError(errorMessage);
  if(!result.isHandled)
   this.OnCallbackGeneralError(result.errorMessage);
 },
 OnCallbackGeneralError: function(errorMessage) {
  this.OnCallbackError(errorMessage, null);
 },
 SendPostBack: function(params) {
  __doPostBack(this.uniqueID, params);
 }
});
ASPxClientControl.AdjustControls = function(container){
 aspxGetControlCollection().AdjustControls(container);
};
ASPxClientControl.Cast = function(obj) {
 if(typeof obj == "string")
  return window[obj];
 return obj;
};
ASPxIdent = { };
ASPxIdent.IsDate = function(obj) {
 return obj && obj.constructor == Date;
};
ASPxIdent.IsRegExp = function(obj) {
 return obj && obj.constructor === RegExp;
};
ASPxIdent.IsArray = function(obj) {
 return obj && obj.constructor == Array;
};
ASPxIdent.IsASPxClientControl = function(obj) {
 return obj && obj.isASPxClientControl;
};
ASPxIdent.IsASPxClientEdit = function(obj) {
 return obj && obj.isASPxClientEdit;
};
ASPxIdent.IsASPxClientRadioButtonList = function(obj) {
 return obj && obj.isASPxClientRadioButtonList;
};
ASPxClientControl.GetControlCollection = function(){
 return aspxGetControlCollection();
}
var __aspxControlCollection = null;
function aspxGetControlCollection(){
 if(__aspxControlCollection == null)
  __aspxControlCollection = new ASPxClientControlCollection();
 return __aspxControlCollection;
}
var __aspxPersistentControlPropertiesStorage = null;
function _aspxGetPersistentControlPropertiesStorage() {
 if(__aspxPersistentControlPropertiesStorage == null)
  __aspxPersistentControlPropertiesStorage = { };
 return __aspxPersistentControlPropertiesStorage;
}
function _aspxFunctionIsInCallstack(currentCallee, targetFunction, depthLimit) {
 var candidate = currentCallee;
 var depth = 0;
 while(candidate && depth <= depthLimit) {
  candidate = candidate.caller;
  if(candidate == targetFunction)
   return true;
  depth++;
 }
 return false;
}
function aspxCAInit() {
 var isAppInit = typeof(Sys$_Application$_doInitialize) != "undefined" &&
  _aspxFunctionIsInCallstack(arguments.callee, Sys$_Application$_doInitialize, 10 );
 aspxGetControlCollection().AtlasInitialize(!isAppInit);
}
function aspxCreateCallback(name, arg, command, callbackID){
 var control = aspxGetControlCollection().Get(name);
 if(control != null)
  control.CreateCallbackCore(unescape(arg), unescape(command), callbackID);
}
function aspxCallback(result, context){
 var collection = aspxGetControlCollection();
 collection.DoFinalizeCallback();
 var control = collection.Get(context);
 if(control != null)
  control.DoCallback(result);
}
function aspxCallbackError(result, context){
 var control = aspxGetControlCollection().Get(context);
 if(control != null)
  control.DoCallbackError(result, false);
}
function aspxCClick(name, evt) {
 var control = aspxGetControlCollection().Get(name);
 if(control != null) control.DoControlClick(evt);
}
_aspxAttachEventToElement(window, "resize", aspxGlobalWindowResize);
function aspxGlobalWindowResize(evt){
 aspxGetControlCollection().OnBrowserWindowResize(evt); 
}
_aspxAttachEventToElement(window, "load", aspxClassesWindowOnLoad);
function aspxClassesWindowOnLoad(evt){
 __aspxDocumentLoaded = true;
 ASPxResourceManager.SynchronizeResources();
 aspxGetControlCollection().Initialize();
 _aspxInitializeScripts();
 _aspxInitializeLinks();
 _aspxInitializeFocus();
}
function aspxFireDefaultButton(evt, buttonID) {
 if(_aspxIsDefaultButtonEvent(evt, buttonID)) {
  var defaultButton = _aspxGetElementById(buttonID);
  if(defaultButton && defaultButton.click) {
   if(_aspxIsFocusable(defaultButton))
    defaultButton.focus();
   _aspxDoElementClick(defaultButton);
   _aspxPreventEventAndBubble(evt);
   return false;
  }
 }
 return true;
}
function _aspxIsDefaultButtonEvent(evt, defaultButtonID) {
 if(evt.keyCode != ASPxKey.Enter)
  return false;
 var srcElement = _aspxGetEventSource(evt);
 if(!srcElement || srcElement.id === defaultButtonID)
  return true;
 var tagName = srcElement.tagName;
 var type = srcElement.type;
 return tagName != "TEXTAREA" && tagName != "BUTTON" && tagName != "A" &&
  (tagName != "INPUT" || type != "checkbox" && type != "radio" && type != "button" && type != "submit" && type != "reset");
}
ASPxResourceManager = {
 HandlerStr: "DXR.axd?r=",
 InputElements: {},
 ResourceHashes: {},
 SynchronizeResources: function(){
  this.SynchronizeResourcesElements(_aspxGetIncludeScripts(), "src", "DXScript");
 },
 SynchronizeResourcesElements: function(elements, urlAttr, id){
  var s = this.GetResourcesElementsString(elements, urlAttr, id);
  this.UpdateInputElement(id, s);
 },
 GetResourcesElementsString: function(elements, urlAttr, id){
  if(!this.ResourceHashes[id]) 
   this.ResourceHashes[id] = {};
  var hash = this.ResourceHashes[id];
  for(var i = 0; i < elements.length; i++) {
   var resourceUrl = _aspxGetAttribute(elements[i], urlAttr);
   if(resourceUrl) {
    var pos = resourceUrl.indexOf(this.HandlerStr);
    if(pos > -1){
     var list = resourceUrl.substr(pos + this.HandlerStr.length);
     var ampPos = list.lastIndexOf("-");
     if(ampPos > -1)
      list = list.substr(0, ampPos);
     var indexes = list.split(",");
     for(var j = 0; j < indexes.length; j++)
      hash[indexes[j]] = indexes[j];
    }
    else
     hash[resourceUrl] = resourceUrl;
   }
  }
  var array = [];
  for(var key in hash) 
   array.push(key);
  return array.join(",");
 },
 UpdateInputElement: function(typeName, list){
  var inputElement = this.InputElements[typeName];
  if(!_aspxIsExistsElement(inputElement)){
   inputElement = this.CreateInputElement(typeName);
   this.InputElements[typeName] = inputElement;
  }
  if(_aspxIsExistsElement(inputElement))
   inputElement.value = list;
 },
 CreateInputElement: function(typeName){
  var inputElement = _aspxCreateHiddenField(typeName);
  var form = _aspxGetServerForm();
  if(form) {
   form.appendChild(inputElement);
   return inputElement;
  }
  return null;
 }
};
var __aspxIncludeScriptPrefix = "dxis_";
var __aspxStartupScriptPrefix = "dxss_";
var __aspxIncludeScriptsCache = {};
var __aspxCreatedIncludeScripts = [];
var __aspxAppendedScriptsCount = 0;
var __aspxCallbackOwnerNames = [];
var __aspxScriptsRestartHandlers = { };
function _aspxGetScriptCode(script) {
 var text = __aspxWebKitFamily ? script.firstChild.data : script.text;
 var comment = "<!--";
 var pos = text.indexOf(comment);
 if(pos > -1)
  text = text.substr(pos + comment.length);
 return text;
}
function _aspxAppendScript(script) {
 var parent = document.getElementsByTagName("head")[0];
 if(!parent)
  parent = document.body;
 if(parent)
  parent.appendChild(script);
}
function _aspxIsAlphaFilterUsed(img){
 return (__aspxIE && img.style.filter.indexOf("progid:DXImageTransform.Microsoft.AlphaImageLoader") > -1);
}
function _aspxIsKnownIncludeScript(script) {
 return !!__aspxIncludeScriptsCache[script.src];
}
function _aspxCacheIncludeScript(script) {
 __aspxIncludeScriptsCache[script.src] = 1;
}
function _aspxProcessScriptsAndLinks(ownerName, isCallback) {
 if(!__aspxDocumentLoaded) return; 
 _aspxProcessScripts(ownerName, isCallback);
 _aspxSweepDuplicatedLinks();
 _aspxMoveLinkElements();
 __aspxCachedRules = { };
}
function _aspxGetStartupScripts() {
 return _aspxGetScriptsCore(__aspxStartupScriptPrefix);
}
function _aspxGetIncludeScripts() {
 return _aspxGetScriptsCore(__aspxIncludeScriptPrefix);
}
function _aspxGetScriptsCore(prefix) {
 var result = [];
 var scripts = document.getElementsByTagName("SCRIPT");
 for(var i = 0; i < scripts.length; i++) {
  if (scripts[i].id.indexOf(prefix) == 0)
   result.push(scripts[i]);
 }
 return result;
}
function _aspxGetLinks() {
 var result = [];
 var links = document.getElementsByTagName("LINK");;
 for(var i = 0; i < links.length; i++) 
  result[i] = links[i];
 return result;
}
function _aspxInitializeLinks() {
 var links = _aspxGetLinks();
 for(var i = 0; i < links.length; i++)
  links[i].loaded = true; 
}
function _aspxInitializeScripts() {
 var scripts = _aspxGetIncludeScripts();
 for(var i = 0; i < scripts.length; i++)
  _aspxCacheIncludeScript(scripts[i]);   
 var startupScripts = _aspxGetStartupScripts();
 for(var i = 0; i < startupScripts.length; i++)
  startupScripts[i].executed = true; 
}
function _aspxSweepDuplicatedLinks() {
 if((__aspxIE && __aspxBrowserVersion < 7) || __aspxOpera)
  return;
 var hash = { };
 var links = _aspxGetLinks();
 for(var i = 0; i < links.length; i++) {
  var href = links[i].href;
  if(!href)
   continue;
  if(hash[href]){
   if(!hash[href].loaded && links[i].loaded){
    _aspxRemoveElement(hash[href]);
    hash[href] = links[i];
   }
   else
    _aspxRemoveElement(links[i]);
  }
  else
   hash[href] = links[i];
 }
}
function _aspxSweepDuplicatedScripts() {
 var hash = { };
 var scripts = _aspxGetIncludeScripts();
 for(var i = 0; i < scripts.length; i++) {
  var src = scripts[i].src;
  if(!src) continue;
  if(hash[src])
   _aspxRemoveElement(scripts[i]);
  else
   hash[src] = scripts[i];
 }
}
function _aspxProcessScripts(ownerName, isCallback) {
 var scripts = _aspxGetIncludeScripts();
 var previousCreatedScript = null;
 var firstCreatedScript = null;
 for(var i = 0; i < scripts.length; i++) {
  var script = scripts[i];
  if(script.src == "") continue; 
  if(_aspxIsKnownIncludeScript(script))
   continue;
  var createdScript = document.createElement("script");
  createdScript.type = "text/javascript";
  createdScript.src = script.src;
  createdScript.id = script.id;
  function AreScriptsEqual(script1, script2) {
   return script1.src == script2.src;
  }
  if(_aspxArrayIndexOf(__aspxCreatedIncludeScripts, createdScript, AreScriptsEqual) >= 0)
   continue;
  __aspxCreatedIncludeScripts.push(createdScript);
  _aspxRemoveElement(script);
  if(__aspxIE) {
   createdScript.onreadystatechange = new Function("_aspxOnScriptReadyStateChangedCallback(this, \"" + ownerName + "\");");
  } else if(__aspxWebKitFamily) {
   createdScript.onload = new Function("_aspxOnScriptLoadCallback(this, \"" + ownerName + "\");");
   if(firstCreatedScript == null)
    firstCreatedScript = createdScript;
   createdScript.nextCreatedScript = null;
   if(previousCreatedScript != null)
    previousCreatedScript.nextCreatedScript = createdScript;
   previousCreatedScript = createdScript;
  } else {
   createdScript.onload = new Function("_aspxOnScriptLoadCallback(this, \"" + ownerName + "\");");
   _aspxAppendScript(createdScript);
   _aspxCacheIncludeScript(createdScript);
  }
 }
 if(firstCreatedScript != null) {
  _aspxAppendScript(firstCreatedScript);
  _aspxCacheIncludeScript(firstCreatedScript);
 }
 __aspxCallbackOwnerNames.push(ownerName);
 if(__aspxCreatedIncludeScripts.length == 0)
  _aspxFinalizeScriptProcessing(ownerName, isCallback);
}
function _aspxFinalizeScriptProcessing(ownerName, isCallback) {
 __aspxCreatedIncludeScripts = [];
 __aspxAppendedScriptsCount = 0;
 _aspxSweepDuplicatedScripts();
 _aspxRunStartupScripts(isCallback);
 ASPxResourceManager.SynchronizeResources();
 while(__aspxCallbackOwnerNames.length > 0) {
  var callbackOwnerName = __aspxCallbackOwnerNames.pop();
  var callbackOwner = aspxGetControlCollection().Get(callbackOwnerName);
  if(callbackOwner)
   callbackOwner.DoEndCallback();
 }
}
function _aspxRunStartupScripts(isCallback) {
 var scripts = _aspxGetStartupScripts();
 var code;
 for(var i = 0; i < scripts.length; i++){
  if(!scripts[i].executed) {
   code = _aspxGetScriptCode(scripts[i]);
   eval(code);
   scripts[i].executed = true;
  }
 }
 if(__aspxDocumentLoaded) 
  aspxGetControlCollection().InitializeElements(isCallback);
 for(var key in __aspxScriptsRestartHandlers)
  __aspxScriptsRestartHandlers[key]();
}
function _aspxOnScriptReadyStateChangedCallback(scriptElement, ownerName) {
 if(scriptElement.readyState == "loaded") {
  _aspxCacheIncludeScript(scriptElement);
  for(var i = 0; i < __aspxCreatedIncludeScripts.length; i++) {
   var script = __aspxCreatedIncludeScripts[i];
   if(_aspxIsKnownIncludeScript(script)) {
    if(!script.executed) {
     script.executed = true;
     _aspxAppendScript(script);
     __aspxAppendedScriptsCount++;
    }
   } else
    break;
  }
  if(__aspxCreatedIncludeScripts.length == __aspxAppendedScriptsCount)
   _aspxFinalizeScriptProcessing(ownerName);
 }
}
function _aspxOnScriptLoadCallback(scriptElement, ownerName) {
 __aspxAppendedScriptsCount++;
 if(scriptElement.nextCreatedScript) {
  _aspxAppendScript(scriptElement.nextCreatedScript);
  _aspxCacheIncludeScript(scriptElement.nextCreatedScript);
 }
 if(__aspxCreatedIncludeScripts.length == __aspxAppendedScriptsCount)
  _aspxFinalizeScriptProcessing(ownerName);
}
function _aspxAddScriptsRestartHandler(objectName, handler) {
 __aspxScriptsRestartHandlers[objectName] = handler;
}
function _aspxMoveLinkElements() {
 if(__aspxIE)
  return;
 var head = _aspxGetElementsByTagName(document, "head")[0];
 var bodyLinks = _aspxGetElementsByTagName(document.body, "link");
 for(var i = 0; i < bodyLinks.length; i++)
  head.appendChild(bodyLinks[i]);
}
_aspxToJson = function(param){
 var paramType = typeof(param);
 if((paramType == "undefined") || (param == null))
  return null;
 if((paramType == "object") && (typeof(param.__toJson) == "function"))
  return param.__toJson();
 if((paramType == "number") || (paramType == "boolean"))
  return param;
 if(param.constructor == Date)
  return "\"" + _aspxGetInvariantDateTimeString(param) + "\"";
 if(paramType == "string") {
  var result = param.replace(/\\/g, "\\\\");
  result = result.replace(/"/g, "\\\"");
  result = result.replace(/</g, "\\u003c");
  result = result.replace(/>/g, "\\u003e");
  return "\"" + result + "\"";
 }
 if(param.constructor == Array){
  var values = [];
  for(var i = 0; i < param.length; i++)
   values.push(_aspxToJson(param[i]));
  return "[" + values.join(",") + "]";
 }
 var exceptKeys = {};
 if(ASPxIdent.IsArray(param.__toJsonExceptKeys))
  exceptKeys = _aspxCreateHashTableFromArray(param.__toJsonExceptKeys);
 exceptKeys["__toJsonExceptKeys"] = 1;
 var values = [];
 for(var key in param){
  if(_aspxIsFunction(param[key]))
   continue;
  if(exceptKeys[key] == 1)
   continue;
  values.push(_aspxToJson(key) + ":" + _aspxToJson(param[key]));
 }
 return "{" + values.join(",") + "}";
}
function _aspxEmulateDocumentOnMouseDown(evt) {
 _aspxEmulateOnMouseDown(document, evt);
}
function _aspxEmulateOnMouseDown(element, evt) {
 if(__aspxIE)
  element.fireEvent("onmousedown", evt);
 else if(!__aspxWebKitFamily){
  var emulatedEvt = document.createEvent("MouseEvents");
  emulatedEvt.initMouseEvent("mousedown", true, true, window, 0, evt.screenX, evt.screenY, 
   evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, false, 0, null);
  element.dispatchEvent(emulatedEvt);
 }
}
function _aspxCreateHtmlElementFromString(str) {
 var dummy = document.createElement("DIV");
 dummy.innerHTML = str;
 return dummy.firstChild;
}
function _aspxCreateIFrame(params) {
 var iframeHtmlString = "<iframe frameborder='0'";
 if(params) {
  if(params.id)
   iframeHtmlString += " id='" + params.id + "'";
  if(params.name)
   iframeHtmlString += " name='" + params.name + "'";
  if(params.title)
   iframeHtmlString += " title='" + params.title + "'";
  if(params.scrolling)
   iframeHtmlString += " scrolling='" + params.scrolling + "'";
  if(params.src)
   iframeHtmlString += " src='" + params.src + "'";
 }
 iframeHtmlString += "></iframe>";
 return _aspxCreateHtmlElementFromString(iframeHtmlString);
}
ASPxKbdHelper = _aspxCreateClass(null, {
 constructor: function(control) {
  this.control = control;
 },
 Init: function() {
  ASPxKbdHelper.GlobalInit();
  var element = this.GetFocusableElement();
  element.tabIndex = Math.max(element.tabIndex, 0);
  var instance = this;
  _aspxAttachEventToElement(element, "click", function(e) {
   instance.HandleClick(e);
  });  
  _aspxAttachEventToElement(element, "focus", function(e) {    
   if(!instance.CanFocus(e))
    return true;
   ASPxKbdHelper.active = instance;
  });
  _aspxAttachEventToElement(element, "blur", function() {
   delete ASPxKbdHelper.active;
  });    
 },
 GetFocusableElement: function() { return this.control.GetMainElement(); },
 CanFocus: function(e) {
  var tag = _aspxGetEventSource(e).tagName;
  if(tag == "A" || tag == "TEXTAREA" || tag == "INPUT" || tag == "SELECT")
   return false; 
  return true;
 },
 HandleClick: function(e) {
  if(!this.CanFocus(e))
   return;
  this.Focus();
 },
 Focus: function() {
  this.GetFocusableElement().focus();   
 },
 HandleKeyDown: function(e) { }, 
 HandleKeyPress: function(e) { }, 
 HandleKeyUp: function(e) { }
});
ASPxKbdHelper.GlobalInit = function() {
 if(ASPxKbdHelper.ready)
  return;
 _aspxAttachEventToDocument("keydown", ASPxKbdHelper.OnKeyDown);
 _aspxAttachEventToDocument("keypress", ASPxKbdHelper.OnKeyPress);
 _aspxAttachEventToDocument("keyup", ASPxKbdHelper.OnKeyUp);
 ASPxKbdHelper.ready = true; 
};
ASPxKbdHelper.swallowKey = false;
ASPxKbdHelper.accessKeys = { };
ASPxKbdHelper.ProcessKey = function(e, actionName) {
 if(!ASPxKbdHelper.active) 
  return;
 if(!ASPxKbdHelper.swallowKey) 
  ASPxKbdHelper.swallowKey = ASPxKbdHelper.active[actionName](e);
 if(ASPxKbdHelper.swallowKey)
  _aspxPreventEvent(e);
};
ASPxKbdHelper.OnKeyDown = function(e) {
 ASPxKbdHelper.swallowKey = false; 
 if(e.ctrlKey && e.shiftKey && ASPxKbdHelper.TryAccessKey(_aspxGetKeyCode(e)))
  _aspxPreventEvent(e);  
 else 
  ASPxKbdHelper.ProcessKey(e, "HandleKeyDown"); 
};
ASPxKbdHelper.OnKeyPress = function(e) { ASPxKbdHelper.ProcessKey(e, "HandleKeyPress"); };
ASPxKbdHelper.OnKeyUp = function(e) { ASPxKbdHelper.ProcessKey(e, "HandleKeyUp"); };
ASPxKbdHelper.RegisterAccessKey = function(obj) {
 var key = obj.accessKey;
 if(!key) return;
 ASPxKbdHelper.accessKeys[key.toLowerCase()] = obj.name;
};
ASPxKbdHelper.TryAccessKey = function(code) {
 var name = ASPxKbdHelper.accessKeys[String.fromCharCode(code).toLowerCase()];
 if(!name) return false;
 var obj = aspxGetControlCollection().Get(name);
 if(!obj) return false;
 var el = obj.GetMainElement();
 if(!el) return false;
 el.focus();
 return true;
};
function _aspxDelayedFunctionCall(object, functionName) {
 var callTimerIdPropertyName = "delayed" + functionName + "CallTimerId";
 var additionalCallRequiredPropertyName = "delayed" + functionName + "AdditionalCallRequired";
 if(!object[callTimerIdPropertyName] || object[callTimerIdPropertyName] == -1) {
  var timeoutFunction = function() {
   object[functionName]();
   object[callTimerIdPropertyName] = _aspxClearTimer(object[callTimerIdPropertyName]);
   if(object[additionalCallRequiredPropertyName]) {
    object[additionalCallRequiredPropertyName] = false;
    object[callTimerIdPropertyName] = _aspxSetTimeout(timeoutFunction, 0);
   }
  };
  object[callTimerIdPropertyName] = _aspxSetTimeout(timeoutFunction, 0);
 }
 else
  object[additionalCallRequiredPropertyName] = true;
}
var __aspxFocusedElement = null;
function aspxOnElementFocused(evt) {
 evt = _aspxGetEvent(evt);
 if(evt && evt.target)
  __aspxFocusedElement = evt.target;
}
function _aspxInitializeFocus() {
 if(!document.activeElement)
  _aspxAttachEventToDocument("focus", aspxOnElementFocused);
}
function _aspxGetFocusedElement() {
 if(document.activeElement)
  return document.activeElement;
 return __aspxFocusedElement;
}
function _aspxChangeElementContainer(element, container, savePreviousContainer) {
 if(element.parentNode != container) {
  var parentNode = element.parentNode;
  parentNode.removeChild(element);
  container.appendChild(element);
  if(savePreviousContainer)
   element.previousContainer = parentNode;
 }
}
function _aspxRestoreElementContainer(element) {
 if(element.previousContainer) {
  _aspxChangeElementContainer(element, element.previousContainer, false);
  element.previousContainer = null;
 }
}
var ASPxIFrameHelper = {};
ASPxIFrameHelper.SetIFrameUrl = function(iframe, url) {
 if(iframe && url)
  iframe.src = url;
};
ASPxIFrameHelper.RefreshIFrame = function(iframe, url) {
 if(iframe) {
  if(__aspxIE) {
   try {
    iframe.contentWindow.location.reload();
   }
   catch(e) {
    iframe.src = url;
   }
  }
  else
   iframe.src = url;
 }
};
ASPxIFrameHelper.AddRandomParamToUrl = function(url) {
 var param = Math.floor(Math.random()*100000).toString();
 if(url.indexOf("?") == -1)
  param = "?" + param;
 var anchorIndex = url.indexOf("#");
 return anchorIndex == -1
  ? url + param
  : url.substr(0, anchorIndex) + param + url.substr(anchorIndex);
};
var ASPxCacheHelper = {};
ASPxCacheHelper.GetCachedValue = function(obj, cacheName, func, cacheObj) {
 if(!cacheObj)
  cacheObj = obj;
 if(!cacheObj.cache)
  cacheObj.cache = {};
 if(!_aspxIsExists(cacheObj.cache[cacheName]))
  cacheObj.cache[cacheName] = func.apply(obj, []);
 return cacheObj.cache[cacheName];
};
ASPxCacheHelper.DropCachedValue = function(cacheObj, cacheName) {
 cacheObj.cache[cacheName] = null;
};  
ASPxClientUtils = {};
ASPxClientUtils.agent = __aspxUserAgent;
ASPxClientUtils.opera = __aspxOpera;
ASPxClientUtils.opera9 = __aspxOpera && __aspxBrowserMajorVersion == 9;
ASPxClientUtils.safari = __aspxSafari;
ASPxClientUtils.safari3 = __aspxSafari && __aspxBrowserMajorVersion == 3;
ASPxClientUtils.safariMacOS = __aspxSafari && __aspxMacOSPlatform;
ASPxClientUtils.chrome = __aspxChrome;
ASPxClientUtils.ie = __aspxIE;
ASPxClientUtils.ie55 = __aspxIE && __aspxBrowserVersion == 5.5;
;
ASPxClientUtils.ie7 = __aspxIE && __aspxBrowserMajorVersion == 7;
ASPxClientUtils.firefox = __aspxFirefox;
ASPxClientUtils.firefox3 = __aspxFirefox && __aspxBrowserMajorVersion == 3;
ASPxClientUtils.mozilla = __aspxMozilla;
ASPxClientUtils.netscape = __aspxNetscape;
ASPxClientUtils.browserVersion = __aspxBrowserVersion;
ASPxClientUtils.browserMajorVersion = __aspxBrowserMajorVersion;
ASPxClientUtils.macOSPlatform = __aspxMacOSPlatform;
ASPxClientUtils.windowsPlatform = __aspxWindowsPlatform;
ASPxClientUtils.webKitFamily = __aspxWebKitFamily;
ASPxClientUtils.netscapeFamily = __aspxNetscapeFamily;
ASPxClientUtils.ArrayInsert = _aspxArrayInsert;
ASPxClientUtils.ArrayRemove = _aspxArrayRemove;
ASPxClientUtils.ArrayRemoveAt = _aspxArrayRemoveAt;
ASPxClientUtils.ArrayClear = _aspxArrayClear;
ASPxClientUtils.ArrayIndexOf = _aspxArrayIndexOf;
ASPxClientUtils.AttachEventToElement = _aspxAttachEventToElement;
ASPxClientUtils.DetachEventFromElement = _aspxDetachEventFromElement;
ASPxClientUtils.GetEventSource = _aspxGetEventSource;
ASPxClientUtils.GetEventX = _aspxGetEventX;
ASPxClientUtils.GetEventY = _aspxGetEventY;
ASPxClientUtils.GetKeyCode = _aspxGetKeyCode;
ASPxClientUtils.PreventEvent = _aspxPreventEvent;
ASPxClientUtils.PreventEventAndBubble = _aspxPreventEventAndBubble;
ASPxClientUtils.PreventDragStart = _aspxPreventDragStart;
ASPxClientUtils.ClearSelection = _aspxClearSelection;
ASPxClientUtils.IsExists = _aspxIsExists;
ASPxClientUtils.IsFunction = _aspxIsFunction;
ASPxClientUtils.GetAbsoluteX = _aspxGetAbsoluteX;
ASPxClientUtils.GetAbsoluteY = _aspxGetAbsoluteY;
ASPxClientUtils.SetAbsoluteX = _aspxSetAbsoluteX;
ASPxClientUtils.SetAbsoluteY = _aspxSetAbsoluteY;
ASPxClientUtils.GetDocumentScrollTop = _aspxGetDocumentScrollTop;
ASPxClientUtils.GetDocumentScrollLeft = _aspxGetDocumentScrollLeft;
ASPxClientUtils.GetDocumentClientWidth = _aspxGetDocumentClientWidth;
ASPxClientUtils.GetDocumentClientHeight = _aspxGetDocumentClientHeight;
ASPxClientUtils.GetIsParent = _aspxGetIsParent;
ASPxClientUtils.GetParentById = _aspxGetParentById;
ASPxClientUtils.GetParentByTagName = _aspxGetParentByTagName;
ASPxClientUtils.GetParentByClassName = _aspxGetParentByPartialClassName;
ASPxClientUtils.GetChildById = _aspxGetChildById;
ASPxClientUtils.GetChildByTagName = _aspxGetChildByTagName;
ASPxClientUtils.SetCookie = _aspxSetCookie;
ASPxClientUtils.GetCookie = _aspxGetCookie;
ASPxClientUtils.DeleteCookie = _aspxDelCookie;
ASPxClientUtils.GetShortcutCode = _aspxGetShortcutCode; 
ASPxClientUtils.GetShortcutCodeByEvent = _aspxGetShortcutCodeByEvent;
ASPxClientUtils.StringToShortcutCode = _aspxParseShortcutString;
ASPxClientUtils.Trim = _aspxTrim; 
ASPxClientUtils.TrimStart = _aspxTrimStart;
ASPxClientUtils.TrimEnd = _aspxTrimEnd;
__aspxClassesScriptParsed = true;

var __aspxStateItemsExist = false;
var __aspxHoverStyleSheet = null;
var __aspxPressedStyleSheet = null;
var __aspxSelectedStyleSheet = null;
var __aspxDisabledStyleSheet = null;
var __aspxFocusedItemKind = "FocusedStateItem";
var __aspxHoverItemKind = "HoverStateItem";
var __aspxPressedItemKind = "PressedStateItem";
var __aspxSelectedItemKind = "SelectedStateItem";
var __aspxDisabledItemKind = "DisabledStateItem";
var __aspxCachedStatePrefix = "cached";
ASPxStateItem = _aspxCreateClass(null, {
 constructor: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, kind){
  this.name = name;
  this.classNames = classNames;
  this.customClassNames = [];
  this.resultClassNames = [];
  this.cssTexts = cssTexts;
  this.postfixes = postfixes;
  this.imageObjs = imageObjs;
  this.imagePostfixes = imagePostfixes;
  this.kind = kind;
  this.enabled = true;
  this.needRefreshBetweenElements = false;
  this.elements = null;
  this.images = null;
  this.linkColor = null;
  this.lintTextDecoration = null;
 },
 GetCssText: function(index){
  if(_aspxIsExists(this.cssTexts[index]))
   return this.cssTexts[index];
  return this.cssTexts[0];
 },
 CreateStyleRule: function(index){
  if(this.GetCssText(index) == "") return "";
  var styleSheet = this.GetStyleSheet();
  if(styleSheet)
   return _aspxCreateImportantStyleRule(styleSheet, this.GetCssText(index));  
  return ""; 
 },
 GetClassName: function(index){
  if(_aspxIsExists(this.classNames[index]))
   return this.classNames[index];
  return this.classNames[0];
 },
 GetResultClassName: function(index){
  if(!_aspxIsExists(this.resultClassNames[index])) {
   if(!_aspxIsExists(this.customClassNames[index]))
    this.customClassNames[index] = this.CreateStyleRule(index);
   if(this.GetClassName(index) != "" && this.customClassNames[index] != "")
    this.resultClassNames[index] = this.GetClassName(index) + " " + this.customClassNames[index];
   else if(this.GetClassName(index) != "")
    this.resultClassNames[index] = this.GetClassName(index);
   else if(this.customClassNames[index] != "")
    this.resultClassNames[index] = this.customClassNames[index];
   else
    this.resultClassNames[index] = "";
  }
  return this.resultClassNames[index];
 },
 GetStyleSheet: function(){
  if(!__aspxDisabledStyleSheet)
   __aspxDisabledStyleSheet = _aspxCreateStyleSheet();
  if(!__aspxSelectedStyleSheet)
   __aspxSelectedStyleSheet = _aspxCreateStyleSheet();
  if(!__aspxHoverStyleSheet)
   __aspxHoverStyleSheet = _aspxCreateStyleSheet();
  if(!__aspxPressedStyleSheet)
   __aspxPressedStyleSheet = _aspxCreateStyleSheet();
  switch(this.kind){
   case __aspxDisabledItemKind:
    return __aspxDisabledStyleSheet;
   case __aspxHoverItemKind:
    return __aspxHoverStyleSheet;
   case __aspxPressedItemKind:
    return __aspxPressedStyleSheet;
   case __aspxSelectedItemKind:
    return __aspxSelectedStyleSheet;
  }
  return null;
 },
 GetElements: function(element){
  if(!this.elements || !_aspxIsValidElements(this.elements)){
   if(this.postfixes && this.postfixes.length > 0){
    this.elements = [ ];
    var parentNode = element.parentNode;
    if(parentNode){
     for(var i = 0; i < this.postfixes.length; i++){
      var id = this.name + this.postfixes[i];
      this.elements[i] = _aspxGetChildById(parentNode, id);
      if(!this.elements[i])
       this.elements[i] = _aspxGetElementById(id);
     }
    }
   }
   else
    this.elements = [element];
  }
  return this.elements;
 },
 GetImages: function(element){
  if(!this.images || !_aspxIsValidElements(this.images)){
   this.images = [ ];
   if(this.imagePostfixes && this.imagePostfixes.length > 0){
    var elements = this.GetElements(element);
    for(var i = 0; i < this.imagePostfixes.length; i++){
     var id = this.name + this.imagePostfixes[i];
     for(var j = 0; j < elements.length; j++){
      if(!elements[j]) continue;
      if(elements[j].id == id)
       this.images[i] = elements[j];
      else
       this.images[i] = _aspxGetChildById(elements[j], id);
      if(this.images[i])
       break;
     }
    }
   }
  }
  return this.images;
 },
 Apply: function(element){
  if(!this.enabled) return;
  try{
   this.ApplyStyle(element);
   if(this.imageObjs && this.imageObjs.length > 0)
    this.ApplyImage(element);
  }
  catch(e){
  }
 },
 ApplyStyle: function(element){
  var elements = this.GetElements(element);
  for(var i = 0; i < elements.length; i++){
   if(!elements[i]) continue;
   var className = elements[i].className.replace(this.GetResultClassName(i), "");
   elements[i].className = _aspxTrim(className) + " " + this.GetResultClassName(i);
   if(!__aspxOpera || __aspxBrowserVersion >= 9)
    this.ApplyStyleToLinks(elements, i);
  }
 },
 ApplyStyleToLinks: function(elements, index){
  var linkCount = 0;
  var savedLinkCount = -1;
  if(_aspxIsExists(elements[index]["savedLinkCount"]))
   savedLinkCount = parseInt(elements[index]["savedLinkCount"]);
  do{
   if(savedLinkCount > -1 && savedLinkCount <= linkCount)
    break;
   var link = elements[index]["link" + linkCount];
   if(!link){
    link = _aspxGetChildByTagName(elements[index], "A", linkCount);
    if(!link)
     link = _aspxGetChildByTagName(elements[index], "SPAN", linkCount); 
    if(link)
     elements[index]["link" + linkCount] = link;
   }
   if(link)
    this.ApplyStyleToLinkElement(link, index);
   else
    elements[index]["savedLinkCount"] = linkCount;
   linkCount++;
  }
  while(link != null)
 },
 ApplyStyleToLinkElement: function(link, index){
  if(this.GetLinkColor(index) != "")
   _aspxChangeAttributeExtended(link.style, "color", link, "saved" + this.kind + "Color", this.GetLinkColor(index));
  if(this.GetLinkTextDecoration(index) != "")
   _aspxChangeAttributeExtended(link.style, "textDecoration", link, "saved" + this.kind + "TextDecoration", this.GetLinkTextDecoration(index));
 },
 ApplyImage: function(element){
  var images = this.GetImages(element);
  for(var i = 0; i < images.length; i++){
   if(!images[i] || !this.imageObjs[i]) continue;
   if(_aspxIsAlphaFilterUsed(images[i]))   
    _aspxChangeAttributeExtended(images[i].style, "filter", images[i], "saved" + this.kind + "Filter", 
     "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.imageObjs[i] + ", sizingMethod=scale)");    
   else{
    var useSpriteImage = typeof(this.imageObjs[i]) != "string";
    var newUrl = "", newCssClass = "", newBackground = "";
    if(useSpriteImage){
     newUrl = __aspxEmptyImageUrl;           
     if(this.imageObjs[i].spriteCssClass) 
      newCssClass = this.imageObjs[i].spriteCssClass;
     if(this.imageObjs[i].spriteBackground)
      newBackground = this.imageObjs[i].spriteBackground;
    }
    else{
     newUrl = this.imageObjs[i];
     if(_aspxIsExistsAttribute(images[i].style, "background"))   
      newBackground = " ";
    }
    if(newUrl != "")
     _aspxChangeAttributeExtended(images[i], "src", images[i], "saved" + this.kind + "Src", newUrl);
    if(newCssClass != "")
     this.ApplyImageClassName(images[i], newCssClass);
    if(newBackground != ""){
     if(__aspxWebKitFamily) {
      var savedBackground = _aspxGetAttribute(images[i].style, "background") + " " + images[i].style["backgroundPosition"];
      _aspxSetAttribute(images[i], "saved" + this.kind + "Background", savedBackground);
      _aspxSetAttribute(images[i].style, "background", newBackground);
     }
     else
      _aspxChangeAttributeExtended(images[i].style, "background", images[i], "saved" + this.kind + "Background", newBackground);
    }     
   }
  }
 },
 ApplyImageClassName: function(element, newClassName){
  var className = element.className.replace(newClassName, "");
  _aspxSetAttribute(element, "saved" + this.kind + "ClassName", className);
  element.className = className + " " + newClassName;
 },
 Cancel: function(element){
  if(!this.enabled) return;
  try{  
   this.CancelStyle(element);
   if(this.imageObjs && this.imageObjs.length > 0)
    this.CancelImage(element);
  }
  catch(e){
  }
 },
 CancelStyle: function(element){
  var elements = this.GetElements(element);
  for(var i = 0; i < elements.length; i++){
   if(!elements[i]) continue;
   var className = _aspxTrim(elements[i].className.replace(this.GetResultClassName(i), ""));
   elements[i].className = className;
   if(!__aspxOpera || __aspxBrowserVersion >= 9)
    this.CancelStyleFromLinks(elements, i);
  }
 },
 CancelStyleFromLinks: function(elements, index){
  var linkCount = 0;
  var savedLinkCount = -1;
  if(_aspxIsExists(elements[index]["savedLinkCount"]))
   savedLinkCount = parseInt(elements[index]["savedLinkCount"]);
  do{
   if(savedLinkCount > -1 && savedLinkCount <= linkCount)
    break;
   var link = elements[index]["link" + linkCount];
   if(!link){
    link = _aspxGetChildByTagName(elements[index], "A", linkCount);
    if(!link)
     link = _aspxGetChildByTagName(elements[index], "SPAN", linkCount); 
    if(link)
     elements[index]["link" + linkCount] = link;
   }
   if(link)
    this.CancelStyleFromLinkElement(link, index);
   else
    elements[index]["savedLinkCount"] = linkCount;
   linkCount++;
  }
  while(link != null)
 },
 CancelStyleFromLinkElement: function(link, index){
  if(this.GetLinkColor(index) != "")
   _aspxRestoreAttributeExtended(link.style, "color", link, "saved" + this.kind + "Color");
  if(this.GetLinkTextDecoration(index) != "")
   _aspxRestoreAttributeExtended(link.style, "textDecoration", link, "saved" + this.kind + "TextDecoration");
 },
 CancelImage: function(element){
  var images = this.GetImages(element);
  for(var i = 0; i < images.length; i++){
   if(!images[i] || !this.imageObjs[i]) continue;
   if(_aspxIsAlphaFilterUsed(images[i]))
    _aspxRestoreAttributeExtended(images[i].style, "filter", images[i], "saved" + this.kind + "Filter");
   else{
    _aspxRestoreAttributeExtended(images[i], "src", images[i], "saved" + this.kind + "Src");
    this.CancelImageClassName(images[i]);
    _aspxRestoreAttributeExtended(images[i].style, "background", images[i], "saved" + this.kind + "Background");
   }
  }
 },
 CancelImageClassName: function(element){
  var savedClassName = _aspxGetAttribute(element, "saved" + this.kind + "ClassName");
  if(_aspxIsExists(savedClassName)) {
   element.className = savedClassName;
   _aspxRemoveAttribute(element, "saved" + this.kind + "ClassName");
  }
 },
 Clone: function(){
  return new ASPxStateItem(this.name, this.classNames, this.cssTexts, this.postfixes, 
   this.imageObjs, this.imagePostfixes, this.kind);
 },
 IsChildElement: function(element){
  if(element != null){
   var elements = this.GetElements(element);
   for(var i = 0; i < elements.length; i++){
    if(!elements[i]) continue;
    if(_aspxGetIsParent(elements[i], element)) 
     return true;
   }
  }
  return false;
 },
 GetLinkColor: function(index){
  if(!_aspxIsExists(this.linkColor)){
   var rule = _aspxGetStyleSheetRule(this.customClassNames[index]);
   this.linkColor = rule ? rule.style.color : null;
   if(!_aspxIsExists(this.linkColor)){
    var rule = _aspxGetStyleSheetRule(this.GetClassName(index));
    this.linkColor = rule ? rule.style.color : null;
   }
   if(this.linkColor == null) 
    this.linkColor = "";
  }
  return this.linkColor;
 },
 GetLinkTextDecoration: function(index){
  if(!_aspxIsExists(this.linkTextDecoration)){
   var rule = _aspxGetStyleSheetRule(this.customClassNames[index]);
   this.linkTextDecoration = rule ? rule.style.textDecoration : null;
   if(!_aspxIsExists(this.linkTextDecoration)){
    var rule = _aspxGetStyleSheetRule(this.GetClassName(index));
    this.linkTextDecoration = rule ? rule.style.textDecoration : null;
   }
   if(this.linkTextDecoration == null) 
    this.linkTextDecoration = "";
  }
  return this.linkTextDecoration;
 }
});
ASPxClientStateEventArgs = _aspxCreateClass(null, {
 constructor: function(item, element){
  this.item = item;
  this.element = element;
  this.toElement = null;
  this.fromElement = null;
  this.htmlEvent = null;
 }
});
ASPxStateController = _aspxCreateClass(null, {
 constructor: function(){
  this.focusedItems = { };
  this.hoverItems = { };
  this.pressedItems = { };
  this.selectedItems = { };
  this.disabledItems = { };
  this.currentFocusedElement = null;
  this.currentFocusedItemName = null;
  this.currentHoverElement = null;
  this.currentHoverItemName = null;
  this.currentPressedElement = null;
  this.currentPressedItemName = null;
  this.savedCurrentPressedElement = null;
  this.savedCurrentMouseMoveSrcElement = null;
  this.AfterSetFocusedState = new ASPxClientEvent();
  this.AfterClearFocusedState = new ASPxClientEvent();
  this.AfterSetHoverState = new ASPxClientEvent();
  this.AfterClearHoverState = new ASPxClientEvent();
  this.AfterSetPressedState = new ASPxClientEvent();
  this.AfterClearPressedState = new ASPxClientEvent();
  this.AfterDisabled = new ASPxClientEvent();
  this.AfterEnabled = new ASPxClientEvent();
  this.BeforeSetFocusedState = new ASPxClientEvent();
  this.BeforeClearFocusedState = new ASPxClientEvent();
  this.BeforeSetHoverState = new ASPxClientEvent();
  this.BeforeClearHoverState = new ASPxClientEvent();
  this.BeforeSetPressedState = new ASPxClientEvent();
  this.BeforeClearPressedState = new ASPxClientEvent();
  this.BeforeDisabled = new ASPxClientEvent();
  this.BeforeEnabled = new ASPxClientEvent();
  this.FocusedItemKeyDown = new ASPxClientEvent();
 }, 
 AddHoverItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes){
  this.AddItem(this.hoverItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxHoverItemKind);
  this.AddItem(this.focusedItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxFocusedItemKind);
 },
 AddPressedItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes){
  this.AddItem(this.pressedItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxPressedItemKind);
 },
 AddSelectedItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes){
  this.AddItem(this.selectedItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxSelectedItemKind);
 },
 AddDisabledItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes){
  this.AddItem(this.disabledItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxDisabledItemKind);
 },
 AddItem: function(items, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, kind){
  var stateItem = new ASPxStateItem(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, kind);
  if(postfixes && postfixes.length > 0){
   for(var i = 0; i < postfixes.length; i ++){
    items[name + postfixes[i]] = stateItem;
   }
  }
  else
   items[name] = stateItem;
  __aspxStateItemsExist = true;
 },
 RemoveHoverItem: function(name){
  this.RemoveItem(this.hoverItems, name);
  this.RemoveItem(this.focusedItems, name);
 },
 RemovePressedItem: function(name){
  this.RemoveItem(this.pressedItems, name);
 },
 RemoveSelectedItem: function(name){
  this.RemoveItem(this.selectedItems, name);
 },
 RemoveDisabledItem: function(name){
  this.RemoveItem(this.disabledItems, name);
 },
 RemoveItem: function(items, name){
  delete items[name];
 },
 GetFocusedElement: function(srcElement){
  return this.GetItemElement(srcElement, this.focusedItems, __aspxFocusedItemKind);
 },
 GetHoverElement: function(srcElement){
  return this.GetItemElement(srcElement, this.hoverItems, __aspxHoverItemKind);
 },
 GetPressedElement: function(srcElement){
  return this.GetItemElement(srcElement, this.pressedItems, __aspxPressedItemKind);
 },
 GetSelectedElement: function(srcElement){
  return this.GetItemElement(srcElement, this.selectedItems, __aspxSelectedItemKind);
 },
 GetDisabledElement: function(srcElement){
  return this.GetItemElement(srcElement, this.disabledItems, __aspxDisabledItemKind);
 },
 GetItemElement: function(srcElement, items, kind){
  if(srcElement && srcElement[__aspxCachedStatePrefix + kind]){
   var cachedElement = srcElement[__aspxCachedStatePrefix + kind];
   if(cachedElement != __aspxEmptyCachedValue)
    return cachedElement;
   return null;
  }
  var element = srcElement;
  while(element != null) {
   var item = items[element.id];
   if(item){
    this.CacheItemElement(srcElement, kind, element);
    element[kind] = item;
    return element;
   }
   element = element.parentNode;
  }
  this.CacheItemElement(srcElement, kind, __aspxEmptyCachedValue);
  return null;
 },
 CacheItemElement: function(srcElement, kind, value){
  if(srcElement && !srcElement[__aspxCachedStatePrefix + kind])
   srcElement[__aspxCachedStatePrefix + kind] = value;
 },
 DoSetFocusedState: function(element, fromElement){
  var item = element[__aspxFocusedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.fromElement = fromElement;
   this.BeforeSetFocusedState.FireEvent(this, args);
   item.Apply(element);
   this.AfterSetFocusedState.FireEvent(this, args);
  }
 },
 DoClearFocusedState: function(element, toElement){
  var item = element[__aspxFocusedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.toElement = toElement;
   this.BeforeClearFocusedState.FireEvent(this, args);
   item.Cancel(element);
   this.AfterClearFocusedState.FireEvent(this, args);
  }
 },
 DoSetHoverState: function(element, fromElement){
  var item = element[__aspxHoverItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.fromElement = fromElement;
   this.BeforeSetHoverState.FireEvent(this, args);
   item.Apply(element);
   this.AfterSetHoverState.FireEvent(this, args);
  }
 },
 DoClearHoverState: function(element, toElement){
  var item = element[__aspxHoverItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.toElement = toElement;
   this.BeforeClearHoverState.FireEvent(this, args);
   item.Cancel(element);
   this.AfterClearHoverState.FireEvent(this, args);
  }
 },
 DoSetPressedState: function(element){
  var item = element[__aspxPressedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   this.BeforeSetPressedState.FireEvent(this, args);
   item.Apply(element);
   this.AfterSetPressedState.FireEvent(this, args);
  }
 },
 DoClearPressedState: function(element){
  var item = element[__aspxPressedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   this.BeforeClearPressedState.FireEvent(this, args);
   item.Cancel(element);
   this.AfterClearPressedState.FireEvent(this, args);
  }
 },
 SetCurrentFocusedElement: function(element){
  if(this.currentFocusedElement && !_aspxIsValidElement(this.currentFocusedElement)){
   this.currentFocusedElement = null;
   this.currentFocusedItemName = "";
  }
  if(this.currentFocusedElement != element){
   var oldCurrentFocusedElement = this.currentFocusedElement;
   var item = (element != null) ? element[__aspxFocusedItemKind] : null;
   var itemName = (item != null) ? item.name : "";
   if(this.currentFocusedItemName != itemName){
    if(this.currentHoverItemName != "")
     this.SetCurrentHoverElement(null);
    if(this.currentFocusedElement != null)
     this.DoClearFocusedState(this.currentFocusedElement, element);
    this.currentFocusedElement = element;
    item = (element != null) ? element[__aspxFocusedItemKind] : null;
    this.currentFocusedItemName = (item != null) ? item.name : "";
    if(this.currentFocusedElement != null)
     this.DoSetFocusedState(this.currentFocusedElement, oldCurrentFocusedElement);
   }
  }
 },
 SetCurrentHoverElement: function(element){
  if(this.currentHoverElement && !_aspxIsValidElement(this.currentHoverElement)){
   this.currentHoverElement = null;
   this.currentHoverItemName = "";
  }
  if(this.currentHoverElement != element){
   var oldCurrentHoverElement = this.currentHoverElement;
   var item = (element != null) ? element[__aspxHoverItemKind] : null;
   var itemName = (item != null) ? item.name : "";
   if(this.currentHoverItemName != itemName || (item != null && item.needRefreshBetweenElements)){
    if(this.currentFocusedItemName != "")
     this.SetCurrentFocusedElement(null);
    if(this.currentHoverElement != null)
     this.DoClearHoverState(this.currentHoverElement, element);
    item = (element != null) ? element[__aspxHoverItemKind] : null;
    if(item == null || item.enabled){
     this.currentHoverElement = element;
     this.currentHoverItemName = (item != null) ? item.name : "";
     if(this.currentHoverElement != null)
      this.DoSetHoverState(this.currentHoverElement, oldCurrentHoverElement);
    }
   }
  }
 },
 SetCurrentPressedElement: function(element){
  if(this.currentPressedElement && !_aspxIsValidElement(this.currentPressedElement)){
   this.currentPressedElement = null;
   this.currentPressedItemName = "";
  }
  if(this.currentPressedElement != element){
   if(this.currentPressedElement != null)
    this.DoClearPressedState(this.currentPressedElement);
   var item = (element != null) ? element[__aspxPressedItemKind] : null;
   if(item == null || item.enabled){
    this.currentPressedElement = element;
    this.currentPressedItemName = (item != null) ? item.name : "";
    if(this.currentPressedElement != null)
     this.DoSetPressedState(this.currentPressedElement);
   }
  }
 },
 SetCurrentFocusedElementBySrcElement: function(srcElement){
  var element = this.GetFocusedElement(srcElement);
  this.SetCurrentFocusedElement(element);
 },
 SetCurrentHoverElementBySrcElement: function(srcElement){
  var element = this.GetHoverElement(srcElement);
  this.SetCurrentHoverElement(element);
 },
 SetCurrentPressedElementBySrcElement: function(srcElement){
  var element = this.GetPressedElement(srcElement);
  this.SetCurrentPressedElement(element);
 },
 SelectElement: function(element){
  var item = element[__aspxSelectedItemKind];
  if(item)
   item.Apply(element);
 }, 
 SelectElementBySrcElement: function(srcElement){
  var element = this.GetSelectedElement(srcElement);
  if(element != null) this.SelectElement(element);
 }, 
 DeselectElement: function(element){
  var item = element[__aspxSelectedItemKind];
  if(item)
   item.Cancel(element);
 }, 
 DeselectElementBySrcElement: function(srcElement){
  var element = this.GetSelectedElement(srcElement);
  if(element != null) this.DeselectElement(element);
 },
 SetElementEnabled: function(element, enable){
  if(enable)
   this.EnableElement(element);
  else
   this.DisableElement(element);
 },
 DisableElement: function(element){
  var element = this.GetDisabledElement(element);
  if(element != null) {
   var item = element[__aspxDisabledItemKind];
   if(item){
    var args = new ASPxClientStateEventArgs(item, element);
    this.BeforeDisabled.FireEvent(this, args);
    if(item.name == this.currentPressedItemName)
     this.SetCurrentPressedElement(null);
    if(item.name == this.currentHoverItemName)
     this.SetCurrentHoverElement(null);
    item.Apply(element);
    this.SetMouseStateItemsEnabled(item.name, item.postfixes, false);
    this.AfterDisabled.FireEvent(this, args);
   }
  }
 }, 
 EnableElement: function(element){
  var element = this.GetDisabledElement(element);
  if(element != null) {
   var item = element[__aspxDisabledItemKind];
   if(item){
    var args = new ASPxClientStateEventArgs(item, element);
    this.BeforeEnabled.FireEvent(this, args);
    item.Cancel(element);
    this.SetMouseStateItemsEnabled(item.name, item.postfixes, true);
    this.AfterEnabled.FireEvent(this, args);
   }
  }
 }, 
 SetMouseStateItemsEnabled: function(name, postfixes, enabled){   
  if(postfixes && postfixes.length > 0){
   for(var i = 0; i < postfixes.length; i ++){
    this.SetItemsEnabled(this.hoverItems, name + postfixes[i], enabled);
    this.SetItemsEnabled(this.pressedItems, name + postfixes[i], enabled);
   }
  }
  else{
   this.SetItemsEnabled(this.hoverItems, name, enabled);
   this.SetItemsEnabled(this.pressedItems, name, enabled);
  }  
 },
 SetItemsEnabled: function(items, name, enabled){   
  if(items[name])
   items[name].enabled = enabled;
 },
 OnFocusMove: function(evt){
  var element = _aspxGetEventSource(evt);
  aspxGetStateController().SetCurrentFocusedElementBySrcElement(element);
 },
 OnMouseMove: function(evt, checkElementChanged){
  var srcElement = _aspxGetEventSource(evt);
  if(checkElementChanged && srcElement == this.savedCurrentMouseMoveSrcElement) return;
  this.savedCurrentMouseMoveSrcElement = srcElement;
  if(__aspxIE && !_aspxGetIsLeftButtonPressed(evt) && this.savedCurrentPressedElement != null)
   this.ClearSavedCurrentPressedElement();
  if(this.savedCurrentPressedElement == null)
   this.SetCurrentHoverElementBySrcElement(srcElement);
  else{
   var element = this.GetPressedElement(srcElement);
   if(element != this.currentPressedElement){
    if(element == this.savedCurrentPressedElement)
     this.SetCurrentPressedElement(this.savedCurrentPressedElement);
    else
     this.SetCurrentPressedElement(null);
   }
  }
 },
 OnMouseDown: function(evt){
  if(!_aspxGetIsLeftButtonPressed(evt)) return;
  var srcElement = _aspxGetEventSource(evt);
  this.OnMouseDownOnElement(srcElement);
 },
 OnMouseDownOnElement: function(element){
  if(this.GetPressedElement(element) == null) return;
  this.SetCurrentHoverElement(null);
  this.SetCurrentPressedElementBySrcElement(element);
  this.savedCurrentPressedElement = this.currentPressedElement;
 },
 OnMouseUp: function(evt){
  var srcElement = _aspxGetEventSource(evt);
  this.OnMouseUpOnElement(srcElement);
 },
 OnMouseUpOnElement: function(element){
  if(this.savedCurrentPressedElement == null) return;
  this.ClearSavedCurrentPressedElement();
  this.SetCurrentHoverElementBySrcElement(element);
 },
 OnMouseOver: function(evt){
  var element = _aspxGetEventSource(evt);
  if (element && element.tagName == "IFRAME")
   this.OnMouseMove(evt, true);
 },
 OnKeyDown: function(evt){
  var element = this.GetFocusedElement(_aspxGetEventSource(evt));
  if(element != null && element == this.currentFocusedElement) {
   var item = element[__aspxFocusedItemKind];
   if(item){
    var args = new ASPxClientStateEventArgs(item, element);
    args.htmlEvent = evt;
    this.FocusedItemKeyDown.FireEvent(this, args);
   }
  }
 },
 OnSelectStart: function(evt){
  if(this.savedCurrentPressedElement) {
   _aspxClearSelection();
   return false;
  }
 },
 ClearSavedCurrentPressedElement: function() {
  this.savedCurrentPressedElement = null;
  this.SetCurrentPressedElement(null);
 },
 ClearCache: function(srcElement, kind) {
  if(srcElement[__aspxCachedStatePrefix + kind])
   srcElement[__aspxCachedStatePrefix + kind] = null;
 },
 ClearElementCache: function(srcElement) {
  this.ClearCache(srcElement, __aspxFocusedItemKind);
  this.ClearCache(srcElement, __aspxHoverItemKind);
  this.ClearCache(srcElement, __aspxPressedItemKind);
  this.ClearCache(srcElement, __aspxSelectedItemKind);
  this.ClearCache(srcElement, __aspxDisabledItemKind);
 }
});
var __aspxStateController = null;
function aspxGetStateController(){
 if(__aspxStateController == null)
  __aspxStateController = new ASPxStateController();
 return __aspxStateController;
}
function aspxAddStateItems(method, namePrefix, classes){
 for(var i = 0; i < classes.length; i ++){
  for(var j = 0; j < classes[i][2].length; j ++) {
   var name = namePrefix;
   if(classes[i][2][j])
    name += "_" + classes[i][2][j];
   var postfixes = classes[i][3] || null;
   var imageObjs = (classes[i][4] && classes[i][4][j]) || null;
   var imagePostfixes = classes[i][5] || null;
   method.call(aspxGetStateController(), name, classes[i][0], classes[i][1], postfixes, imageObjs, imagePostfixes);
  }
 }
}
function aspxAddHoverItems(namePrefix, classes){
 aspxAddStateItems(aspxGetStateController().AddHoverItem, namePrefix, classes);
}
function aspxAddPressedItems(namePrefix, classes){
 aspxAddStateItems(aspxGetStateController().AddPressedItem, namePrefix, classes);
}
function aspxAddSelectedItems(namePrefix, classes){
 aspxAddStateItems(aspxGetStateController().AddSelectedItem, namePrefix, classes);
}
function aspxAddDisabledItems(namePrefix, classes){
 aspxAddStateItems(aspxGetStateController().AddDisabledItem, namePrefix, classes);
}
function aspxRemoveStateItems(method, namePrefix, classes){
 for(var i = 0; i < classes.length; i ++){
  for(var j = 0; j < classes[i][0].length; j ++) {
   var name = namePrefix;
   if(classes[i][0][j])
    name += "_" + classes[i][0][j];
   method.call(aspxGetStateController(), name);
  }
 }
}
function aspxRemoveHoverItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemoveHoverItem, namePrefix, classes);
}
function aspxRemovePressedItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemovePressedItem, namePrefix, classes);
}
function aspxRemoveSelectedItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemoveSelectedItem, namePrefix, classes);
}
function aspxRemoveDisabledItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemoveDisabledItem, namePrefix, classes);
}
function aspxAddAfterClearFocusedState(handler){
 aspxGetStateController().AfterClearFocusedState.AddHandler(handler);
}
function aspxAddAfterSetFocusedState(handler){
 aspxGetStateController().AfterSetFocusedState.AddHandler(handler);
}
function aspxAddAfterClearHoverState(handler){
 aspxGetStateController().AfterClearHoverState.AddHandler(handler);
}
function aspxAddAfterSetHoverState(handler){
 aspxGetStateController().AfterSetHoverState.AddHandler(handler);
}
function aspxAddAfterClearPressedState(handler){
 aspxGetStateController().AfterClearPressedState.AddHandler(handler);
}
function aspxAddAfterSetPressedState(handler){
 aspxGetStateController().AfterSetPressedState.AddHandler(handler);
}
function aspxAddAfterDisabled(handler){
 aspxGetStateController().AfterDisabled.AddHandler(handler);
}
function aspxAddAfterEnabled(handler){
 aspxGetStateController().AfterEnabled.AddHandler(handler);
}
function aspxAddBeforeClearFocusedState(handler){
 aspxGetStateController().BeforeClearFocusedState.AddHandler(handler);
}
function aspxAddBeforeSetFocusedState(handler){
 aspxGetStateController().BeforeSetFocusedState.AddHandler(handler);
}
function aspxAddBeforeClearHoverState(handler){
 aspxGetStateController().BeforeClearHoverState.AddHandler(handler);
}
function aspxAddBeforeSetHoverState(handler){
 aspxGetStateController().BeforeSetHoverState.AddHandler(handler);
}
function aspxAddBeforeClearPressedState(handler){
 aspxGetStateController().BeforeClearPressedState.AddHandler(handler);
}
function aspxAddBeforeSetPressedState(handler){
 aspxGetStateController().BeforeSetPressedState.AddHandler(handler);
}
function aspxAddBeforeDisabled(handler){
 aspxGetStateController().BeforeDisabled.AddHandler(handler);
}
function aspxAddBeforeEnabled(handler){
 aspxGetStateController().BeforeEnabled.AddHandler(handler);
}
function aspxAddFocusedItemKeyDown(handler){
 aspxGetStateController().FocusedItemKeyDown.AddHandler(handler);
}
function aspxSetHoverState(element){
 aspxGetStateController().SetCurrentHoverElementBySrcElement(element);
}
function aspxClearHoverState(evt){
 aspxGetStateController().SetCurrentHoverElementBySrcElement(null);
}
function aspxUpdateHoverState(evt){
 aspxGetStateController().OnMouseMove(evt, false);
}
function aspxSetFocusedState(element){
 aspxGetStateController().SetCurrentFocusedElementBySrcElement(element);
}
function aspxClearFocusedState(evt){
 aspxGetStateController().SetCurrentFocusedElementBySrcElement(null);
}
function aspxUpdateFocusedState(evt){
 aspxGetStateController().OnFocusMove(evt);
}
_aspxAttachEventToDocument("mousemove", aspxClassesDocumentMouseMove);
function aspxClassesDocumentMouseMove(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseMove(evt, true);
}
_aspxAttachEventToDocument("mousedown", aspxClassesDocumentMouseDown);
function aspxClassesDocumentMouseDown(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseDown(evt);
}
_aspxAttachEventToDocument("mouseup", aspxClassesDocumentMouseUp);
function aspxClassesDocumentMouseUp(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseUp(evt);
}
_aspxAttachEventToDocument("mouseover", aspxClassesDocumentMouseOver);
function aspxClassesDocumentMouseOver(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseOver(evt);
}
_aspxAttachEventToDocument("keydown", aspxClassesDocumentKeyDown);
function aspxClassesDocumentKeyDown(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnKeyDown(evt);
}
_aspxAttachEventToDocument("selectstart", aspxClassesDocumentSelectStart);
function aspxClassesDocumentSelectStart(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  return aspxGetStateController().OnSelectStart(evt); 
}

ASPxClientTimer = _aspxCreateClass(ASPxClientControl, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.interval = 60000;
  this.clientEnabled = true;
  this.timerID = -1;
  this.Tick = new ASPxClientEvent();
 }, 
 Initialize: function() {
  if (this.clientEnabled)
   this.Start();     
  this.constructor.prototype.Initialize.call(this);
 },
 GetStateInputElement: function(index){
  return _aspxGetElementById(this.name + "S");
 },  
 Start: function() {  
  this.Stop();
  this.timerID = _aspxSetInterval("aspxTTick(\"" + this.name + "\")", this.interval);
 },
 Stop: function() {   
  if(this.timerID == -1) return;
  this.timerID = _aspxClearInterval(this.timerID);
 }, 
 DoTick: function() {  
  var processOnServer = this.RaiseTick();      
  if(processOnServer)
   this.SendPostBack("TICK");
 }, 
 GetStateString: function(){
  return (this.clientEnabled ? "1" : "0") + ";" + this.interval;
 },
 UpdateState: function() {
  var element = this.GetStateInputElement();
  if (element != null) 
   element.value = this.GetStateString();
 },
 RaiseTick: function() {
  var processOnServer = this.IsServerEventAssigned("Tick");
  if(!this.Tick.IsEmpty()) {
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.Tick.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 GetEnabled: function() {
  return this.clientEnabled;
 },
 SetEnabled: function(enabled) { 
  if (enabled == this.clientEnabled) return;
   if (enabled)
   this.Start();
   else 
   this.Stop();     
   this.clientEnabled = enabled;
   this.UpdateState();
 },
 GetInterval: function() {
  return this.interval;
 },
 SetInterval: function(interval) {
  if (interval < 1) return;
  this.interval = interval; 
  if (this.clientEnabled) {
   this.Stop();
   this.Start();
  }     
  this.UpdateState();
 }
});
ASPxClientTimer.Cast = ASPxClientControl.Cast;
function aspxTTick(name){
 var timer = aspxGetControlCollection().Get(name);
 if(timer != null) timer.DoTick();
}

var __aspxClientValidationStateNameSuffix = "$CVS";
ASPxClientEditBase = _aspxCreateClass(ASPxClientControl, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
 },
 InlineInitialize: function(){
  this.InitializeEnabled(); 
 },
 InitializeEnabled: function() {
  this.SetEnabledInternal(this.clientEnabled, true);
 },
 GetValue: function() {
  var element = this.GetMainElement();
  if(_aspxIsExistsElement(element))
   return element.innerHTML;
  return "";
 },
 GetValueString: function(){
  var value = this.GetValue();
  return (value == null) ? null : value.toString();
 },
 SetValue: function(value) {
  if(value == null)
   value = "";
  var element = this.GetMainElement();
  if(_aspxIsExistsElement(element))
   element.innerHTML = value;
 },
 GetEnabled: function(){
  return this.enabled && this.clientEnabled;
 },
 SetEnabled: function(enabled){
  if(this.clientEnabled != enabled) {
   var errorFrameRequiresUpdate = this.GetIsValid && !this.GetIsValid();
   if(errorFrameRequiresUpdate && !enabled)
    this.UpdateErrorFrameAndFocus(false , null , true );
   this.clientEnabled = enabled;
   this.SetEnabledInternal(enabled, false);
   if(errorFrameRequiresUpdate && enabled)
    this.UpdateErrorFrameAndFocus(false );
  }
 },
 SetEnabledInternal: function(enabled, initialization){
  if(!this.enabled) return;
  if(!initialization || !enabled)
   this.ChangeEnabledStateItems(enabled);
  this.ChangeEnabledAttributes(enabled);
  if(__aspxChrome) {   
   var mainElement = this.GetMainElement();
   if(mainElement)
    mainElement.className = mainElement.className;
  } 
 },
 ChangeEnabledAttributes: function(enabled){
 },
 ChangeEnabledStateItems: function(enabled){
 }
});
ASPxValidationPattern = _aspxCreateClass(null, {
 constructor: function(errorText) {
  this.errorText = errorText;
 }
});
ASPxRequiredFieldValidationPattern = _aspxCreateClass(ASPxValidationPattern, {
 constructor: function(errorText) {
  this.constructor.prototype.constructor.call(this, errorText);
 },
 EvaluateIsValid: function(value) {
  return value != null && (value.constructor == Array || _aspxTrim(value.toString()) != "");
 }
});
ASPxRegularExpressionValidationPattern = _aspxCreateClass(ASPxValidationPattern, {
 constructor: function(errorText, pattern) {
  this.constructor.prototype.constructor.call(this, errorText);
  this.pattern = pattern;
 },
 EvaluateIsValid: function(value) {
  if (value == null) 
   return true;
  var strValue = value.toString();
  if (_aspxTrim(strValue).length == 0)
   return true;
  var regEx = new RegExp(this.pattern);
  var matches = regEx.exec(strValue);
  return matches != null && strValue == matches[0];
 }
});
function _aspxIsEditorFocusable(inputElement) {
 return _aspxIsFocusableCore(inputElement, function(container) {
  return container.getAttribute("errorFrame") == "errorFrame";
 });
}
var __aspxInvalidEditorToBeFocused = null;
ASPxValidationType = {
 PersonalOnValueChanged: "ValueChanged",
 PersonalViaScript: "CalledViaScript",
 MassValidation: "MassValidation"
};
ASPxErrorFrameDisplay = {
 None: "None",
 Static: "Static",
 Dynamic: "Dynamic"
};
ASPxEditElementSuffix = {
 ExternalTable: "_ET",
 ControlCell: "_CC",
 ErrorCell: "_EC",
 ErrorTextCell: "_ETC",
 ErrorImage: "_EI"
};
ASPxClientEdit = _aspxCreateClass(ASPxClientEditBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.isASPxClientEdit = true;
  this.inputElement = null;
  this.elementCache = { };
  this.convertEmptyStringToNull = true;
  this.readOnly = false;
  this.focused = false;
  this.focusEventsLocked = false;
  this.receiveGlobalMouseWheel = true;
  this.styleDecoration = null;
  this.widthCorrectionRequired = false;
  this.heightCorrectionRequired = false;
  this.customValidationEnabled = false;
  this.display = ASPxErrorFrameDisplay.Static;
  this.initialErrorText = "";
  this.causesValidation = false;
  this.validateOnLeave = true;
  this.validationGroup = "";
  this.sendPostBackWithValidation = null;
  this.validationPatterns = [];
  this.setFocusOnError = false;
  this.errorDisplayMode = "it";
  this.errorText = "";
  this.isValid = true;
  this.errorImageIsAssigned = false;
  this.clientValidationStateElement = null;
  this.notifyValidationSummariesToAcceptNewError = false;
  this.enterProcessed = false;
  this.keyDownHandlers = {};
  this.keyPressHandlers = {};
  this.keyUpHandlers = {};
  this.specialKeyboardHandlingUsed = false;
  this.onKeyDownHandler = null;
  this.onKeyPressHandler = null;
  this.onKeyUpHandler = null;
  this.onGotFocusHandler = null;
  this.onLostFocusHandler = null;
  this.GotFocus = new ASPxClientEvent();
  this.LostFocus = new ASPxClientEvent();
  this.Validation = new ASPxClientEvent();
  this.ValueChanged = new ASPxClientEvent();
  this.KeyDown = new ASPxClientEvent();
  this.KeyPress = new ASPxClientEvent();
  this.KeyUp = new ASPxClientEvent();
 },
 Initialize: function() {
  this.initialErrorText = this.errorText;
  ASPxClientEditBase.prototype.Initialize.call(this);
  this.InitializeKeyHandlers();
  this.UpdateClientValidationState();
  this.UpdateValidationSummaries(null , true );
 },
 InlineInitialize: function() {
  ASPxClientEditBase.prototype.InlineInitialize.call(this);
  if(this.styleDecoration != null)
   this.styleDecoration.Update();
 }, 
 InitSpecialKeyboardHandling: function(){
  this.onKeyDownHandler = _aspxCreateEventHandlerFunction("aspxKBSIKeyDown", this.name, true);
  this.onKeyPressHandler = _aspxCreateEventHandlerFunction("aspxKBSIKeyPress", this.name, true);
  this.onKeyUpHandler = _aspxCreateEventHandlerFunction("aspxKBSIKeyUp", this.name, true);
  this.onGotFocusHandler = _aspxCreateEventHandlerFunction("aspxESGotFocus", this.name, false);
  this.onLostFocusHandler = _aspxCreateEventHandlerFunction("aspxESLostFocus", this.name, false);
  this.specialKeyboardHandlingUsed = true;
  this.InitializeDelayedSpecialFocus();
 },
 InitializeKeyHandlers: function() {
 },
 AddKeyDownHandler: function(key, handler) {
  this.keyDownHandlers[key] = handler;
 },
 ChangeSpecialInputEnabledAttributes: function(element, method){
  element.autocomplete = "off";
  if(this.onKeyDownHandler != null)
   method(element, "keydown", this.onKeyDownHandler);
  if(this.onKeyPressHandler != null)
   method(element, "keypress", this.onKeyPressHandler);
  if(this.onKeyUpHandler != null)
   method(element, "keyup", this.onKeyUpHandler);
  if(this.onGotFocusHandler != null)
   method(element, "focus", this.onGotFocusHandler);
  if(this.onLostFocusHandler != null)
   method(element, "blur", this.onLostFocusHandler);
 },
 UpdateClientValidationState: function() {
  if(!this.customValidationEnabled)
   return;
  var mainElement = this.GetMainElement();
  if (mainElement) {
   var hiddenField = this.GetClientValidationStateHiddenField();
   if(hiddenField)
    hiddenField.value = _aspxEncodeHtml(!this.GetIsValid() ? ("-" + this.GetErrorText()) : "");
  }
 },
 UpdateValidationSummaries: function(validationType, initializing) {
  if(typeof(ASPxClientValidationSummary) != "undefined") {
   var summaryCollection = aspxGetClientValidationSummaryCollection();
   summaryCollection.OnEditorIsValidStateChanged(this, validationType, initializing && this.notifyValidationSummariesToAcceptNewError);
  }
 },
 GetCachedElementByIdSuffix: function(idSuffix) {
  var element = this.elementCache[idSuffix];
  if(!_aspxIsExistsElement(element)) {
   element = _aspxGetElementById(this.name + idSuffix);
   this.elementCache[idSuffix] = element;
  }
  return element;
 },
 FindInputElement: function(){
  return null;
 },
 GetInputElement: function(){
  if(!_aspxIsExistsElement(this.inputElement))
   this.inputElement = this.FindInputElement();
  return this.inputElement;
 },
 GetErrorImage: function() {
  return this.GetCachedElementByIdSuffix(ASPxEditElementSuffix.ErrorImage);
 },
 GetExternalTable: function() {
  return this.GetCachedElementByIdSuffix(ASPxEditElementSuffix.ExternalTable);
 },
 GetControlCell: function() {
  return this.GetCachedElementByIdSuffix(ASPxEditElementSuffix.ControlCell);
 },
 GetErrorCell: function() {
  return this.GetCachedElementByIdSuffix(ASPxEditElementSuffix.ErrorCell);
 },
 GetErrorTextCell: function() {
  return this.GetCachedElementByIdSuffix(this.errorImageIsAssigned ?
   ASPxEditElementSuffix.ErrorTextCell : ASPxEditElementSuffix.ErrorCell);
 },
 GetClientValidationStateHiddenField: function() {
  if(!this.clientValidationStateElement)
   this.clientValidationStateElement = this.CreateClientValidationStateHiddenField();
  return this.clientValidationStateElement;
 },
 CreateClientValidationStateHiddenField: function() {
  var mainElement = this.GetMainElement();
  var hiddenField = _aspxCreateHiddenField(this.uniqueID + __aspxClientValidationStateNameSuffix);
  mainElement.parentNode.appendChild(hiddenField);
  return hiddenField;
 },
 SetVisible: function(isVisible){
  if(this.clientVisible == isVisible)
   return;
  if(this.customValidationEnabled) {
   var errorFrame = this.GetExternalTable();
   if(errorFrame) {
    _aspxSetElementDisplay(errorFrame, isVisible);
    var isValid = !isVisible ? true : void(0);
    this.UpdateErrorFrameAndFocus(false , true , isValid );
   }
  }
  ASPxClientControl.prototype.SetVisible.call(this, isVisible);
 },
 GetValueInputToValidate: function() {
  return this.GetInputElement();
 },
 IsVisible: function() {
  if (!this.clientVisible)
   return false;
  var element = this.GetMainElement();
  if(!element) 
   return false;
  while(element && element.tagName != "BODY") {
   if (element.getAttribute("errorFrame") != "errorFrame" && (!_aspxGetElementVisibility(element) || !_aspxGetElementDisplay(element)))
    return false;
   element = element.parentNode;
  }
  return true;
 },
 AdjustControlCore: function() {
  this.CollapseControl();
  if (this.WidthCorrectionRequired())
   this.CorrectEditorWidth();
  else
   this.UnstretchInputElement();
  if (this.heightCorrectionRequired)
   this.CorrectEditorHeight();
 },
 WidthCorrectionRequired: function() {
  var mainElement = this.GetMainElement();
  if(_aspxIsExistsElement(mainElement)) {
   var mainElementCurStyle = _aspxGetCurrentStyle(mainElement);
   return this.widthCorrectionRequired && mainElementCurStyle.width != "" && mainElementCurStyle.width != "auto";
  }
  return false;
 },
 CorrectEditorWidth: function() {
 },
 CorrectEditorHeight: function() {
 },
 UnstretchInputElement: function() {
 },
 UseDelayedSpecialFocus: function() {
  return false;
 },
 GetDelayedSpecialFocusTriggers: function() {
  return [ this.GetMainElement() ];
 },
 InitializeDelayedSpecialFocus: function() {
  if(!this.UseDelayedSpecialFocus())
   return;
  this.specialFocusTimer = -1;    
  var instance = this;
  var handler = function() {
   window.setTimeout(function() { instance.SetFocus(); }, 0);
  };
  var triggers = this.GetDelayedSpecialFocusTriggers();
  for(var i = 0; i < triggers.length; i++)
   _aspxAttachEventToElement(triggers[i], "mousedown", handler);
 },
 IsFocusEventsLocked: function() {
  return this.focusEventsLocked;
 },
 LockFocusEvents: function() {
  if(!this.focused) return;
  this.focusEventsLocked = true;
 },
 UnlockFocusEvents: function() {
  this.focusEventsLocked = false;
 },
 ForceRefocusEditor: function() {
  this.LockFocusEvents();
  var inputElement = this.GetInputElement();
  if(inputElement && inputElement.blur)
   inputElement.blur();
  window.setTimeout("aspxGetControlCollection().Get('" + this.name + "').SetFocus();", 0);
 },
 IsEditorElement: function(element) {
  return this.GetMainElement() == element || _aspxGetIsParent(this.GetMainElement(), element);
 },
 IsElementBelongToInputElement: function(element) {
  return this.GetInputElement() == element;
 },
 OnFocusCore: function() {
  if(this.UseDelayedSpecialFocus())
   window.clearTimeout(this.specialFocusTimer);
  if (!this.IsFocusEventsLocked()){
   this.focused = true;
   ASPxClientEdit.SetFocusedEditor(this);
   if(this.styleDecoration != null && !this.readOnly)
    this.styleDecoration.Update();
   if(this.isInitialized)
    this.RaiseFocus();
  }
  else
   this.UnlockFocusEvents();
 },
 OnLostFocusCore: function() {
  if (!this.IsFocusEventsLocked()){
   this.focused = false;
   ASPxClientEdit.SetFocusedEditor(null);
   if(this.styleDecoration != null && !this.readOnly)
    this.styleDecoration.Update();
   this.RaiseLostFocus();
   if (this.validateOnLeave)
    this.SetFocusOnError();
  }
 },
 OnFocus: function() {
  if (!this.specialKeyboardHandlingUsed)
   this.OnFocusCore();
 },
 OnLostFocus: function() {
  if (this.isInitialized && !this.specialKeyboardHandlingUsed)
   this.OnLostFocusCore();
 },
 OnSpecialFocus: function() {
  if (this.isInitialized)
   this.OnFocusCore();
 },
 OnSpecialLostFocus: function() {
  if (this.isInitialized)
   this.OnLostFocusCore();
 },
 OnMouseWheel: function(evt){
 },
 OnValidation: function(validationType) {
  if(this.customValidationEnabled && this.isInitialized && _aspxIsExistsElement(this.GetMainElement()) &&
   (this.display == ASPxErrorFrameDisplay.None || this.GetExternalTable())) {
   this.BeginErrorFrameUpdate();
   try {
    this.SetIsValid(true, true );
    this.SetErrorText(this.initialErrorText, true );
    if(this.validateOnLeave || validationType != ASPxValidationType.PersonalOnValueChanged) {
     this.ValidateWithPatterns();
     this.RaiseValidation();
    }
    this.UpdateErrorFrameAndFocus(validationType == ASPxValidationType.PersonalOnValueChanged && this.validateOnLeave && !this.GetIsValid());
   } finally {
    this.EndErrorFrameUpdate();
   }
   this.UpdateValidationSummaries(validationType);
  }
 },
 OnValueChanged: function() {
  var processOnServer = this.RaiseValidationInternal();
  processOnServer = this.RaiseValueChangedEvent() && processOnServer;
  if (processOnServer)
   this.SendPostBackInternal("");
 },
 ParseValue: function() {
 },
 RaisePersonalStandardValidation: function() {
  if (_aspxIsFunction(window.ValidatorOnChange)) {
   var inputElement = this.GetValueInputToValidate();
   if (inputElement.Validators)
    window.ValidatorOnChange({ srcElement: inputElement });
  }
 },
 RaiseValidationInternal: function() {
  if (this.autoPostBack && this.causesValidation && this.validateOnLeave)
   return ASPxClientEdit.ValidateGroup(this.validationGroup);
  else {
   this.OnValidation(ASPxValidationType.PersonalOnValueChanged);
   return this.GetIsValid();
  }
 },
 RaiseValueChangedEvent: function(){
  return this.RaiseValueChanged();
 },
 SendPostBackInternal: function(postBackArg) {
  if (_aspxIsFunction(this.sendPostBackWithValidation))
   this.sendPostBackWithValidation(postBackArg);
  else
   this.SendPostBack(postBackArg);
 },
 SetElementToBeFocused: function() {
  if (this.IsVisible())
   __aspxInvalidEditorToBeFocused = this;
 },
 SetFocus: function(){
  var inputElement = this.GetInputElement();
  if (!inputElement) return; 
  if (_aspxGetActiveElement() != inputElement && _aspxIsEditorFocusable(inputElement)) 
   _aspxSetFocus(inputElement);
 },
 SetFocusOnError: function() {
  if (__aspxInvalidEditorToBeFocused == this) {
   this.SetFocus();
   __aspxInvalidEditorToBeFocused = null;
  }
 },
 BeginErrorFrameUpdate: function() {
  if(!this.errorFrameUpdateLocked)
   this.errorFrameUpdateLocked = true;
 },
 EndErrorFrameUpdate: function() {
  this.errorFrameUpdateLocked = false;
  var args = this.updateErrorFrameAndFocusLastCallArgs;
  if(args) {
   this.UpdateErrorFrameAndFocus(args[0], args[1]);
   delete this.updateErrorFrameAndFocusLastCallArgs;
  }
 },
 UpdateErrorFrameAndFocus: function(setFocusOnError, ignoreVisibilityCheck, isValid) {
  if(!this.GetEnabled() || !ignoreVisibilityCheck && !this.GetVisible())
   return;
  if(this.errorFrameUpdateLocked) {
   this.updateErrorFrameAndFocusLastCallArgs = [ setFocusOnError, ignoreVisibilityCheck ];
   return;
  }
  if(this.styleDecoration != null)
   this.styleDecoration.Update();
  if(typeof(isValid) == "undefined")
   isValid = this.GetIsValid();
  var externalTable = this.GetExternalTable();
  var isStaticDisplay = this.display == ASPxErrorFrameDisplay.Static;
  var isErrorFrameDisplayed = this.display != ASPxErrorFrameDisplay.None;
  if(isValid && isErrorFrameDisplayed) {
   if(isStaticDisplay) {
    externalTable.style.visibility = "hidden";
   } else {
    this.HideErrorCell();
    this.SaveErrorFrameStyles();
    this.ClearErrorFrameElementsStyles();
   }
  } else {
   var editorLocatedWithinVisibleContainer = this.IsVisible();
   if(isErrorFrameDisplayed) {
    if(this.widthCorrectionRequired) {
     if(editorLocatedWithinVisibleContainer)
      this.CollapseControl(); 
     else
      this.sizeCorrectedOnce = false;
    }
    this.UpdateErrorCellContent();
    if(isStaticDisplay) {
     externalTable.style.visibility = "visible";
    } else {
     this.EnsureErrorFrameStylesLoaded();
     this.RestoreErrorFrameElementsStyles();
     this.ShowErrorCell();
    }
   }
   if(editorLocatedWithinVisibleContainer) {
    if(isErrorFrameDisplayed && this.widthCorrectionRequired)
     this.AdjustControl(); 
    if(setFocusOnError && this.setFocusOnError && __aspxInvalidEditorToBeFocused == null)
     this.SetElementToBeFocused();
   }
  }
 },
 ShowErrorCell: function() {
  var errorCell = this.GetErrorCell();
  if(errorCell)
   _aspxSetElementDisplay(errorCell, true);
 },
 HideErrorCell: function() {
  var errorCell = this.GetErrorCell();
  if(errorCell)
   _aspxSetElementDisplay(errorCell, false);
 },
 SaveErrorFrameStyles: function() {
  this.EnsureErrorFrameStylesLoaded();
 },
 EnsureErrorFrameStylesLoaded: function() {
  if(typeof(this.errorFrameStyles) == "undefined") {
   var externalTable = this.GetExternalTable();
   var controlCell = this.GetControlCell();
   this.errorFrameStyles = {
    errorFrame: {
     cssClass: externalTable.className,
     style: this.ExtractElementStyleStringIgnoringVisibilityProps(externalTable)
    },
    controlCell: {
     cssClass: controlCell.className,
     style: this.ExtractElementStyleStringIgnoringVisibilityProps(controlCell)
    }
   };
  }
 },
 ClearErrorFrameElementsStyles: function() {
  this.ClearElementStyle(this.GetExternalTable());
  this.ClearElementStyle(this.GetControlCell());
 },
 RestoreErrorFrameElementsStyles: function() {
  var externalTable = this.GetExternalTable();
  externalTable.className = this.errorFrameStyles.errorFrame.cssClass;
  externalTable.style.cssText = this.errorFrameStyles.errorFrame.style;
  var controlCell = this.GetControlCell();
  controlCell.className = this.errorFrameStyles.controlCell.cssClass;
  controlCell.style.cssText = this.errorFrameStyles.controlCell.style;
 },
 ExtractElementStyleStringIgnoringVisibilityProps: function(element) {
  var savedVisibility = element.style.visibility;
  var savedDisplay = element.style.display;
  element.style.visibility = "";
  element.style.display = "";
  var styleStr = element.style.cssText;
  element.style.visibility = savedVisibility;
  element.style.display = savedDisplay;
  return styleStr;
 },
 ClearElementStyle: function(element) {
  if(!element)
   return;
  element.className = "";
  var excludedAttrNames = [
   "width", "display", "visibility",
   "position", "left", "top", "z-index",
   "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
   "float", "clear"
  ];
  var savedAttrValues = { };
  for(var i = 0; i < excludedAttrNames.length; i++) {
   var attrName = excludedAttrNames[i];
   var attrValue = element.style[attrName];
   if(attrValue)
    savedAttrValues[attrName] = attrValue;
  }
  element.style.cssText = "";
  for(var styleAttrName in savedAttrValues)
   element.style[styleAttrName] = savedAttrValues[styleAttrName];
 },
 UpdateErrorCellContent: function() {
  if (this.errorDisplayMode.indexOf("t") > -1)
   this.UpdateErrorText();
  if (this.errorDisplayMode == "i")
   this.UpdateErrorImage();
 },
 UpdateErrorImage: function() {
  var image = this.GetErrorImage();
  if (_aspxIsExistsElement(image)) {
   image.alt = this.errorText;
   image.title = this.errorText;
  } else {
   this.UpdateErrorText();
  }
 },
 UpdateErrorText: function() {
  var errorTextCell = this.GetErrorTextCell();
  if(_aspxIsExistsElement(errorTextCell))
   errorTextCell.innerHTML = _aspxEncodeHtml(this.errorText);
 },
 ValidateWithPatterns: function() {
  if (this.validationPatterns.length > 0) {
   var value = this.GetValue();
   for (var i = 0; i < this.validationPatterns.length; i++) {
    var validator = this.validationPatterns[i];
    if (!validator.EvaluateIsValid(value)) {
     this.SetIsValid(false, true );
     this.SetErrorText(validator.errorText, true );
     return;
    }
   }
  }
 },
 OnSpecialKeyDown: function(evt){
  this.RaiseKeyDown(evt);
  var handler = this.keyDownHandlers[evt.keyCode];
  if(handler) 
   return this[handler](evt);
  return false;
 },
 OnSpecialKeyPress: function(evt){
  this.RaiseKeyPress(evt);
  var handler = this.keyPressHandlers[evt.keyCode];
  if(handler) 
   return this[handler](evt);
  if(__aspxNetscapeFamily || __aspxOpera){
   if(evt.keyCode == ASPxKey.Enter)
    return this.enterProcessed;
  }
  return false;
 },
 OnSpecialKeyUp: function(evt){
  this.RaiseKeyUp(evt);
  var handler = this.keyUpHandlers[evt.keyCode];
  if(handler) 
   return this[handler](evt);
  return false;
 },
 OnKeyDown: function(evt) {
  if(!this.specialKeyboardHandlingUsed)
   this.RaiseKeyDown(evt);
 },
 OnKeyPress: function(evt) {
  if(!this.specialKeyboardHandlingUsed)
   this.RaiseKeyPress(evt);
 },
 OnKeyUp: function(evt) {
  if(!this.specialKeyboardHandlingUsed)
   this.RaiseKeyUp(evt);
 },
 RaiseKeyDown: function(evt){
  if(!this.KeyDown.IsEmpty()){
   var args = new ASPxClientEditKeyEventArgs(evt);
   this.KeyDown.FireEvent(this, args);
  }
 },
 RaiseKeyPress: function(evt){
  if(!this.KeyPress.IsEmpty()){
   var args = new ASPxClientEditKeyEventArgs(evt);
   this.KeyPress.FireEvent(this, args);
  }
 },
 RaiseKeyUp: function(evt){
  if(!this.KeyUp.IsEmpty()){
   var args = new ASPxClientEditKeyEventArgs(evt);
   this.KeyUp.FireEvent(this, args);
  }
 },
 RaiseFocus: function(){
  if(!this.GotFocus.IsEmpty()){
   var args = new ASPxClientEventArgs();
   this.GotFocus.FireEvent(this, args);
  }
 },
 RaiseLostFocus: function(){
  if(!this.LostFocus.IsEmpty()){
   var args = new ASPxClientEventArgs();
   this.LostFocus.FireEvent(this, args);
  }
 },
 RaiseValidation: function() {
  if(this.customValidationEnabled && !this.Validation.IsEmpty()) {
   var currentValue = this.GetValue();
   var args = new ASPxClientEditValidationEventArgs(currentValue, this.errorText, this.GetIsValid());
   this.Validation.FireEvent(this, args);
   this.SetErrorText(args.errorText, true );
   this.SetIsValid(args.isValid, true );
   if(args.value != currentValue)
    this.SetValue(args.value);
  }
 },
 RaiseValueChanged: function(){
  var processOnServer = this.autoPostBack;
  if(!this.ValueChanged.IsEmpty()){
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.ValueChanged.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;  
 },
 RequireStyleDecoration: function() {
  this.styleDecoration = new ASPxClientEditStyleDecoration(this);
  this.PopulateStyleDecorationPostfixes();
 }, 
 PopulateStyleDecorationPostfixes: function() {
  this.styleDecoration.AddPostfix("");
 },
 Focus: function(){
  this.SetFocus();
 },
 GetIsValid: function(){
  if((ASPxIdent.IsASPxClientRadioButtonList(this) || _aspxIsExistsElement(this.GetInputElement())) &&
   (this.display == ASPxErrorFrameDisplay.None || _aspxIsExistsElement(this.GetExternalTable())  ))
   return this.isValid;
  else
   return true;
 },
 GetErrorText: function(){
  return this.errorText;
 },
 SetIsValid: function(isValid, validating){
  if (this.customValidationEnabled) {
   this.isValid = isValid;
   this.UpdateErrorFrameAndFocus(false );
   this.UpdateClientValidationState();
   if(!validating)
    this.UpdateValidationSummaries(ASPxValidationType.PersonalViaScript);
  }
 },
 SetErrorText: function(errorText, validating){
  if (this.customValidationEnabled) {
   this.errorText = errorText;
   this.UpdateErrorFrameAndFocus(false );
   this.UpdateClientValidationState();
   if(!validating)
    this.UpdateValidationSummaries(ASPxValidationType.PersonalViaScript);
  }
 },
 Validate: function(){
  this.ParseValue();
  this.OnValidation(ASPxValidationType.PersonalViaScript);
 }
});
ASPxClientEdit.focusedEditorName = "";
ASPxClientEdit.GetFocusedEditor = function(){
 var focusedEditor = aspxGetControlCollection().Get(ASPxClientEdit.focusedEditorName);
 if(focusedEditor && !focusedEditor.focused){
  ASPxClientEdit.SetFocusedEditor(null);
  focusedEditor = null;
 }
 return focusedEditor;
}
ASPxClientEdit.SetFocusedEditor = function(editor){
 ASPxClientEdit.focusedEditorName = editor ? editor.name : "";
}
ASPxClientEdit.ClearEditorsInContainer = function(container, validationGroup, clearInvisibleEditors) {
 __aspxInvalidEditorToBeFocused = null;
 _aspxProcessEditorsInContainer(container, _aspxClearProcessingProc, _aspxClearChoiceCondition, validationGroup, clearInvisibleEditors, true );
 ASPxClientEdit.ClearExternalControlsInContainer(container, validationGroup, clearInvisibleEditors);
}
ASPxClientEdit.ClearEditorsInContainerById = function(containerId, validationGroup, clearInvisibleEditors) {
 var container = document.getElementById(containerId);
 this.ClearEditorsInContainer(container, validationGroup, clearInvisibleEditors);
}
ASPxClientEdit.ClearGroup = function(validationGroup, clearInvisibleEditors) {
 return this.ClearEditorsInContainer(null, validationGroup, clearInvisibleEditors);
}
ASPxClientEdit.ValidateEditorsInContainer = function(container, validationGroup, validateInvisibleEditors) {
 var summaryCollection;
 if(typeof(ASPxClientValidationSummary) != "undefined") {
  summaryCollection = aspxGetClientValidationSummaryCollection();
  summaryCollection.AllowNewErrorsAccepting(validationGroup);
 }
 var validationResult = _aspxProcessEditorsInContainer(container, _aspxValidateProcessingProc, _aspxValidateChoiceCondition, validationGroup, validateInvisibleEditors,
  false );
 validationResult.isValid = ASPxClientEdit.ValidateExternalControlsInContainer(container, validationGroup, validateInvisibleEditors) && validationResult.isValid;
 if(typeof(aspxGetGlobalEvents) != "undefined") {
  if(typeof(validateInvisibleEditors) == "undefined")
   validateInvisibleEditors = false;
  if(typeof(validationGroup) == "undefined")
   validationGroup = null;
  validationResult.isValid = aspxGetGlobalEvents().OnValidationCompleted(container, validationGroup,
   validateInvisibleEditors, validationResult.isValid, validationResult.firstInvalid, validationResult.firstVisibleInvalid);
 }
 if(summaryCollection)
  summaryCollection.ForbidNewErrorsAccepting(validationGroup);
 return validationResult.isValid;
}
ASPxClientEdit.ValidateEditorsInContainerById = function(containerId, validationGroup, validateInvisibleEditors) {
 var container = document.getElementById(containerId);
 return this.ValidateEditorsInContainer(container, validationGroup, validateInvisibleEditors);
}
ASPxClientEdit.ValidateGroup = function(validationGroup, validateInvisibleEditors) {
 return this.ValidateEditorsInContainer(null, validationGroup, validateInvisibleEditors);
}
ASPxClientEdit.AreEditorsValid = function(containerOrContainerId, validationGroup, checkInvisibleEditors) {
 var container = typeof(containerOrContainerId) == "string" ? document.getElementById(containerOrContainerId) : containerOrContainerId;
 var checkResult = _aspxProcessEditorsInContainer(container, _aspxEditorsValidProcessingProc, _aspxEditorsValidChoiceCondition, validationGroup,
  checkInvisibleEditors, false );
 checkResult.isValid = ASPxClientEdit.AreExternalControlsValidInContainer(containerOrContainerId, validationGroup, checkInvisibleEditors) && checkResult.isValid;
 return checkResult.isValid;
}
ASPxClientEdit.AreExternalControlsValidInContainer = function(containerId, validationGroup, validateInvisibleEditors) {
 if (typeof(ASPxClientHtmlEditor) != "undefined")
  return ASPxClientHtmlEditor.AreEditorsValidInContainer(containerId, validationGroup, validateInvisibleEditors);
 return true;
}
ASPxClientEdit.ClearExternalControlsInContainer = function(containerId, validationGroup, validateInvisibleEditors) {
 if (typeof(ASPxClientHtmlEditor) != "undefined")
  return ASPxClientHtmlEditor.ClearEditorsInContainer(containerId, validationGroup, validateInvisibleEditors);
 return true;
}
ASPxClientEdit.ValidateExternalControlsInContainer = function(containerId, validationGroup, validateInvisibleEditors) {
 if (typeof(ASPxClientHtmlEditor) != "undefined")
  return ASPxClientHtmlEditor.ValidateEditorsInContainer(containerId, validationGroup, validateInvisibleEditors);
 return true;
}
ASPxClientEditKeyEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(htmlEvent) {
  this.constructor.prototype.constructor.call(this);
  this.htmlEvent = htmlEvent;
 }
});
ASPxClientEditValidationEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(value, errorText, isValid) {
  this.constructor.prototype.constructor.call(this);
  this.errorText = errorText;
  this.isValid = isValid;
  this.value = value;
 }
});
ASPxClientEditStyleDecoration = _aspxCreateClass(null, {
 constructor: function(editor) {
  this.editor = editor;
  this.postfixList = [ ];
  this.styles = { };
  this.innerStyles = { };
 },
 GetStyleSheet: function() {
  if(!ASPxClientEditStyleDecoration.__sheet)
   ASPxClientEditStyleDecoration.__sheet = _aspxCreateStyleSheet();
  return ASPxClientEditStyleDecoration.__sheet;
 },
 AddPostfix: function(value, applyClass, applyBorders, applyBackground) {
  this.postfixList.push(value);
 },
 AddStyle: function(key, className, cssText) {
  this.styles[key] = this.CreateRule(className, cssText);
  this.innerStyles[key] = this.CreateRule("", this.FilterInnerCss(cssText));
 },
 CreateRule: function(className, cssText) { 
  return _aspxTrim(className + " " + _aspxCreateImportantStyleRule(this.GetStyleSheet(), cssText));
 },
 Update: function() {
  for(var i = 0; i < this.postfixList.length; i++) {
   var postfix = this.postfixList[i];
   var inner = postfix.length > 0;
   var element = _aspxGetElementById(this.editor.name + postfix);
   if(!element) continue;
   if(this.HasDecoration("I")) {
    var isValid = this.editor.GetIsValid();
    this.ApplyDecoration("I", element, inner, !isValid);
   }
   if(this.HasDecoration("F"))
    this.ApplyDecoration("F", element, inner, this.editor.focused);
   if(this.HasDecoration("N")) {
    var apply = !this.editor.focused;
    if(apply) {
     var value = this.editor.GetValue();
     apply = apply && (value == null || value == "" && this.editor.convertEmptyStringToNull);
    }    
    this.ApplyDecoration("N", element, inner, apply);
   }
  }   
 },
 HasDecoration: function(key) {
  return !!this.styles[key];
 },
 ApplyDecoration: function(key, element, inner, active) {
  var value = inner ? this.innerStyles[key] : this.styles[key];
  element.className = element.className.replace(value, "");
  if(active)
   element.className = _aspxTrim(element.className + " " + value);
 },
 FilterInnerCss: function(css) {
  return css.replace(/(border|background-image)[^:]*:[^;]+/gi, "");
 }
});
function aspxEGotFocus(name){
 var edit = aspxGetControlCollection().Get(name); 
 if(edit != null)
  edit.OnFocus();
}
function aspxELostFocus(name){
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null) 
  edit.OnLostFocus();
}
function aspxESGotFocus(name){
 var edit = aspxGetControlCollection().Get(name); 
 if(edit != null)
  edit.OnSpecialFocus();
}
function aspxESLostFocus(name){
 var edit = aspxGetControlCollection().Get(name);
 if(edit == null)
  return;
 if(edit.UseDelayedSpecialFocus())
  edit.specialFocusTimer = window.setTimeout(function() { edit.OnSpecialLostFocus(); }, 30);
 else
  edit.OnSpecialLostFocus();
}
function aspxEValueChanged(name){
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null)
  edit.OnValueChanged();
}
_aspxAttachEventToDocument("mousedown", aspxEMouseDown);
function aspxEMouseDown(evt) {
 var editor = ASPxClientEdit.GetFocusedEditor();
 var evtSource = _aspxGetEventSource(evt);
 if (editor != null && editor.IsEditorElement(evtSource) && !editor.IsElementBelongToInputElement(evtSource))
  editor.ForceRefocusEditor();
}
_aspxAttachEventToDocument(__aspxNetscapeFamily ? "DOMMouseScroll" : "mousewheel", aspxEMouseWheel);
function aspxEMouseWheel(evt) {
 var editor = ASPxClientEdit.GetFocusedEditor();
 if (editor != null && _aspxIsExistsElement(editor.GetMainElement()) && editor.focused && editor.receiveGlobalMouseWheel)
  editor.OnMouseWheel(evt);
}
function aspxKBSIKeyDown(name, evt){
 var control = aspxGetControlCollection().Get(name);
 if(control != null){
  var isProcessed = control.OnSpecialKeyDown(evt);
  if(isProcessed)
   return _aspxPreventEventAndBubble(evt);
 }
}
function aspxKBSIKeyPress(name, evt){
 var control = aspxGetControlCollection().Get(name);
 if(control != null){
  var isProcessed = control.OnSpecialKeyPress(evt);
  if(isProcessed)
   return _aspxPreventEventAndBubble(evt);
 }
}
function aspxKBSIKeyUp(name, evt){
 var control = aspxGetControlCollection().Get(name);
 if(control != null){
  var isProcessed = control.OnSpecialKeyUp(evt);
  if(isProcessed)
   return _aspxPreventEventAndBubble(evt);
 }
}
function aspxEKeyDown(name, evt){
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null)
  edit.OnKeyDown(evt);
}
function aspxEKeyPress(name, evt){
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null)
  edit.OnKeyPress(evt);
}
function aspxEKeyUp(name, evt){
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null)
  edit.OnKeyUp(evt);
}
ASPxValidationResult = _aspxCreateClass(null, {
 constructor: function(isValid, firstInvalid, firstVisibleInvalid) {
  this.isValid = isValid;
  this.firstInvalid = firstInvalid;
  this.firstVisibleInvalid = firstVisibleInvalid;
 }
});
function _aspxProcessEditorsInContainer(container, processingProc, choiceCondition, validationGroup, processInvisibleEditors, processDisabledEditors) {
 var allProcessedSuccessfull = true;
 var firstInvalid = null;
 var firstVisibleInvalid = null;
 var invalidEditorToBeFocused = null;
 aspxGetControlCollection().ForEachControl(function(control) {
  if (ASPxIdent.IsASPxClientEdit(control) && (processDisabledEditors || control.GetEnabled())) {
   var mainElement = control.GetMainElement();
   if (mainElement &&
    (container == null || _aspxGetIsParent(container, mainElement)) &&
    (processInvisibleEditors || control.IsVisible()) &&
    choiceCondition(control, validationGroup)) {
    var isSuccess = processingProc(control);
    if(!isSuccess) {
     allProcessedSuccessfull = false;
     if(firstInvalid == null)
      firstInvalid = control;
     var isVisible = control.IsVisible();
     if(isVisible && firstVisibleInvalid == null)
      firstVisibleInvalid = control;
     if (control.setFocusOnError && invalidEditorToBeFocused == null && isVisible)
      invalidEditorToBeFocused = control;
    }
   }
  }
 }, this);
 if (invalidEditorToBeFocused != null)
  invalidEditorToBeFocused.SetFocus();
 return new ASPxValidationResult(allProcessedSuccessfull, firstInvalid, firstVisibleInvalid);
}
function _aspxClearChoiceCondition(edit, validationGroup) {
 return !_aspxIsExists(validationGroup) || (edit.validationGroup == validationGroup);
}
function _aspxValidateChoiceCondition(edit, validationGroup) {
 return _aspxClearChoiceCondition(edit, validationGroup) && edit.customValidationEnabled;
}
function _aspxEditorsValidChoiceCondition(edit, validationGroup) {
 return _aspxValidateChoiceCondition(edit, validationGroup);
}
function _aspxClearProcessingProc(edit) {
 edit.SetValue(null);
 edit.SetIsValid(true);
 return true;
}
function _aspxValidateProcessingProc(edit) {
 edit.OnValidation(ASPxValidationType.MassValidation);
 return edit.GetIsValid();
}
function _aspxEditorsValidProcessingProc(edit) {
 return edit.GetIsValid();
}
function _aspxSetSelectionCore(inputElement, startPos, endPos) {
 if (__aspxIE) {
  var range = inputElement.createTextRange();
  range.collapse(true);
  range.moveStart("character", startPos);
  range.moveEnd("character", endPos - startPos);
  range.select();
 } else
  inputElement.setSelectionRange(startPos, endPos);
}
function _aspxSetSelection(inputElement, startPos, endPos, scrollToSelection) {
 var textLen = inputElement.value.length;
 if (endPos == -1 || endPos > textLen) 
  endPos = textLen;
 if (startPos > textLen) 
  startPos = textLen;
 if (startPos > endPos)
  return;
 _aspxSetSelectionCore(inputElement, startPos, endPos);
 if (scrollToSelection && inputElement.tagName == 'TEXTAREA') {
  var scrollHeight = inputElement.scrollHeight;
  var approxCaretPos = startPos;
  var scrollTop = Math.max(Math.round(approxCaretPos * scrollHeight / textLen  - inputElement.clientHeight / 2), 0);
  inputElement.scrollTop = scrollTop;
 }
}
function _aspxSetCaretPosition(inputElement, caretPos, scrollToSelection) {
 if(!scrollToSelection)
  scrollToSelection = true;
 if (caretPos == -1)
  caretPos = inputElement.value.length;
 _aspxSetSelection(inputElement, caretPos, caretPos, scrollToSelection);
}
var __aspxTEInputSuffix = "_I";
var __aspxTERawInputSuffix = "_Raw";
var __aspxPasteCheckInterval = 50;
ASPxEditorStretchedInputElementsManager = _aspxCreateClass(null, {
 constructor: function() {
  this.targetEditorNames = { };
 },
 Initialize: function() {
  this.InitializeTargetEditorsList();
 },
 InitializeTargetEditorsList: function() {
  aspxGetControlCollection().ForEachControl(function(control) {
   if(this.targetEditorNames[control.name])
    return;
   if(ASPxIdent.IsASPxClientTextEdit(control) && control.WidthCorrectionRequired()) {
    var inputElement = control.GetInputElement();
    if(inputElement && _aspxIsWidthSetInPercentage(inputElement.style.width))
     this.targetEditorNames[control.name] = true;
   }
  }, this);
 },
 HideInputElementsExceptOf: function(exceptedEditor) {
  var collection = aspxGetControlCollection();
  for(var editorName in this.targetEditorNames) {
   if(typeof(editorName) != "string")
    continue;
   var editor = collection.Get(editorName);
   if(!ASPxIdent.IsASPxClientEdit(editor)) continue;
   if(editor && editor != exceptedEditor) {
    var input = editor.GetInputElement();
    if(input) {
     var existentSavedDisplay = input._dxSavedDisplayAttr;
     if(!_aspxIsExists(existentSavedDisplay)) {
      input._dxSavedDisplayAttr = input.style.display;
      input.style.display = "none";
     }
    }
   }   
  }
 },
 ShowInputElements: function() {
  var collection = aspxGetControlCollection();
  for(var editorName in this.targetEditorNames) {
   if(typeof(editorName) != "string")
    continue;
   var editor = collection.Get(editorName);
   if(!ASPxIdent.IsASPxClientEdit(editor)) continue;
   if(editor) {
    var input = editor.GetInputElement();
    if(input) {
     var savedDisplay = input._dxSavedDisplayAttr;
     if(_aspxIsExists(savedDisplay)) {
      input.style.display = savedDisplay;
      _aspxRemoveAttribute(input, "_dxSavedDisplayAttr");
     }
    }
   }
  }
 }
});
var __aspxEditorStretchedInputElementsManager = null;
function _aspxGetEditorStretchedInputElementsManager() {
 if(!__aspxEditorStretchedInputElementsManager)
  __aspxEditorStretchedInputElementsManager = new ASPxEditorStretchedInputElementsManager();
 return __aspxEditorStretchedInputElementsManager;
}
ASPxWebKitDefaultKeyPressLockHelper = {
 EventSource: null,
 IsInitialized: false,
 Initialize: function() {
  if (!ASPxWebKitDefaultKeyPressLockHelper.IsInitialized) {
   _aspxAttachEventToDocument("keypress", ASPxWebKitDefaultKeyPressLockHelper.OnDocumentKeyPress);
   ASPxWebKitDefaultKeyPressLockHelper.IsInitialized = true;
  }
 },
 OnDocumentKeyPress: function(evt) {
  if (ASPxWebKitDefaultKeyPressLockHelper.EventSource == evt.srcElement) {
   _aspxPreventEvent(evt);
   ASPxWebKitDefaultKeyPressLockHelper.Unlock();
  }
 },
 Lock: function(evt) {
  ASPxWebKitDefaultKeyPressLockHelper.EventSource = evt.srcElement;
 },
 Unlock: function() {
  ASPxWebKitDefaultKeyPressLockHelper.EventSource = null;
 }
};
ASPxClientTextEdit = _aspxCreateClass(ASPxClientEdit, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);      
  this.isASPxClientTextEdit = true;
  this.nullText = "";
  this.escCount = 0;
  this.raiseValueChangedOnEnter = true;
  this.autoResizeWithContainer = false;
  this.lastChangedValue = null;
  this.maskInfo = null;  
  this.maskValueBeforeUserInput = "";
  this.maskPasteTimerID = -1;
  this.maskPasteLock = false;    
  this.maskPasteCounter = 0;
  this.maskTextBeforePaste = "";    
  this.maskHintHtml = "";
  this.maskHintTimerID = -1;
  this.displayFormat = null;
  this.TextChanged = new ASPxClientEvent();
 },
 Initialize: function(){
  this.SaveChangedValue();
  if(this.AllowPreventingDefaultEnterBehavior())
   ASPxWebKitDefaultKeyPressLockHelper.Initialize();
  ASPxClientEdit.prototype.Initialize.call(this);
  if(__aspxWebKitFamily)  
   this.CorrectMainElementWhiteSpaceStyle();
 },
 InlineInitialize: function(){
  ASPxClientEdit.prototype.InlineInitialize.call(this);
  if(this.maskInfo != null)
   this.InitMask();
 },
  CorrectMainElementWhiteSpaceStyle: function() {
  var inputElement = this.GetInputElement();
  if(inputElement && inputElement.parentNode) {
   if(this.IsElementHasWhiteSpaceStyle(inputElement.parentNode))
    inputElement.parentNode.style.whiteSpace = "normal";
  }
 },
 IsElementHasWhiteSpaceStyle: function(element) {
  var currentStyle = _aspxGetCurrentStyle(element);
  return currentStyle.whiteSpace == "nowrap" || currentStyle.whiteSpace == "pre";  
 },
 FindInputElement: function(){
  return this.isNative ? this.GetMainElement() : _aspxGetElementById(this.name + __aspxTEInputSuffix);
 },
 GetRawInputElement: function() {
  return _aspxGetElementById(this.name + __aspxTERawInputSuffix);
 },
 DecodeRawInputValue: function(value) {
  return value;
 },
 SetRawInputValue: function(value){
  this.GetRawInputElement().value = value;
 },
 SyncRawInputValue: function() {
  if(this.maskInfo != null)
   this.SetRawInputValue(this.maskInfo.GetValue());
  else
   this.SetRawInputValue(this.GetInputElement().value);
 },
 HasTextDecorators: function() {
  return this.nullText != "" || this.displayFormat != null;
 },
 CanApplyTextDecorators: function(){
  return !this.focused;
 },
 GetDecoratedText: function(value) {
  var isNull = value == null || (value === "" && this.convertEmptyStringToNull);
  if(isNull && this.nullText != "")
   return this.nullText;
  if(this.displayFormat != null)
   return ASPxFormatter.Format(this.displayFormat, value);
  if(this.maskInfo != null)
   return this.maskInfo.GetText();
  if(value == null)
   return "";
  return value;
 },
 ToggleTextDecoration: function() {
  if(this.readOnly) return;
  if(!this.HasTextDecorators()) return;
  if(this.focused) {
   var input = this.GetInputElement();
   var oldValue = input.value;
   var sel = _aspxGetSelectionInfo(input);
   this.ToggleTextDecorationCore();
   if(oldValue != input.value) {
    if(sel.startPos == 0 && sel.endPos == oldValue.length)
     sel.endPos = input.value.length;
    else
     sel.endPos = sel.startPos;
    _aspxSetInputSelection(input, sel.startPos, sel.endPos);
   }
  } else {
   this.ToggleTextDecorationCore();
  }
 },
 ToggleTextDecorationCore: function() {
  if(this.maskInfo != null) {   
   this.ApplyMaskInfo(false);
  } else {
   var input = this.GetInputElement();
   var rawValue = this.GetRawInputElement().value;
   var value = this.CanApplyTextDecorators() ? this.GetDecoratedText(rawValue) : rawValue;
   if(input.value != value)
    input.value = value;
  }
 },
 PopulateStyleDecorationPostfixes: function() {
  ASPxClientEdit.prototype.PopulateStyleDecorationPostfixes.call(this);
  this.styleDecoration.AddPostfix(__aspxTEInputSuffix);
 },
 GetValue: function() {
  var value = null;
  if(this.maskInfo != null)
   value = this.maskInfo.GetValue();
  else if(this.HasTextDecorators())
   value = this.GetRawInputElement().value;
  else
   value = this.GetInputElement().value;
  return (value == "" && this.convertEmptyStringToNull) ? null : value;
 },
 SetValue: function(value) {
  if(value == null) value = "";
  if(this.maskInfo != null) {
   this.maskInfo.SetValue(value);
   this.ApplyMaskInfo(false);
   this.SavePrevMaskValue();
  } 
  else if(this.HasTextDecorators()) {
   this.SetRawInputValue(value);
   this.GetInputElement().value = this.CanApplyTextDecorators() ? this.GetDecoratedText(value) : value;
  }
  else
   this.GetInputElement().value = value;
  if(this.styleDecoration != null)
   this.styleDecoration.Update();   
  this.SaveChangedValue();   
 },
 CollapseControl: function(checkSizeCorrectedFlag) {
  if (checkSizeCorrectedFlag && this.sizeCorrectedOnce)
   return;
  var mainElement = this.GetMainElement();
  if (!_aspxIsExistsElement(mainElement))
   return;
  if (this.WidthCorrectionRequired())
   this.GetInputElement().style.width = "0";
 },
 CorrectEditorWidth: function() {
  var inputElement = this.GetInputElement();
  var stretchedInputsManager = _aspxGetEditorStretchedInputElementsManager();
  var currentAciveElement = null;
  if (this.IsRestoreActiveElementAfterWidthCorrection()) 
   currentAciveElement = _aspxGetActiveElement();
  try {
   stretchedInputsManager.HideInputElementsExceptOf(this);
   _aspxSetOffsetWidth(inputElement, _aspxGetClearClientWidth(_aspxFindOffsetParent(inputElement)));
  } finally {
   stretchedInputsManager.ShowInputElements();
  }
  if (this.IsRestoreActiveElementAfterWidthCorrection()) 
   this.RestoreActiveElement(currentAciveElement);
 },
 UnstretchInputElement: function(){
  var inputElement = this.GetInputElement();
  var mainElement = this.GetMainElement();
  var mainElementCurStyle = _aspxGetCurrentStyle(mainElement);
  if (_aspxIsExistsElement(mainElement) && _aspxIsExistsElement(inputElement) && _aspxIsExistsElement(mainElementCurStyle) && 
   inputElement.style.width == "100%" &&
   (mainElementCurStyle.width == "" || mainElementCurStyle.width == "auto"))
   inputElement.style.width = "";
 },
 RestoreActiveElement: function(activeElement) {
  if (activeElement && activeElement.setActive && activeElement.tagName != "IFRAME")
   activeElement.setActive();
 },
 IsRestoreActiveElementAfterWidthCorrection: function() {
  return __aspxIE && __aspxBrowserVersion <= 7;
 },
 RaiseValueChangedEvent: function() {
  var processOnServer = ASPxClientEdit.prototype.RaiseValueChangedEvent.call(this);
  processOnServer = this.RaiseTextChanged(processOnServer);
  return processOnServer;
 },
 InitMask: function() {
  this.SetValue(this.DecodeRawInputValue(this.GetRawInputElement().value));
  this.validationPatterns.unshift(new ASPxMaskValidationPattern(this.maskInfo.errorText, this.maskInfo));
  this.maskPasteTimerID = _aspxSetInterval("aspxMaskPasteTimerProc('" + this.name + "')", __aspxPasteCheckInterval);
 },
 SavePrevMaskValue: function() {
  this.maskValueBeforeUserInput = this.maskInfo.GetValue();
 },
 FillMaskInfo: function() {
  var input = this.GetInputElement();
  if(!input) return; 
  var sel = _aspxGetSelectionInfo(input);
  this.maskInfo.SetCaret(sel.startPos, sel.endPos - sel.startPos);  
 },
 ApplyMaskInfo: function(applyCaret) {
  this.SyncRawInputValue();
  var input = this.GetInputElement();
  var text = this.GetMaskDisplayText();
  this.maskTextBeforePaste = text;
  if(input.value != text)
   input.value = text;
  if(applyCaret)
   _aspxSetInputSelection(input, this.maskInfo.caretPos, this.maskInfo.caretPos + this.maskInfo.selectionLength);
 },
 GetMaskDisplayText: function() {
  if(!this.focused && this.HasTextDecorators())
   return this.GetDecoratedText(this.maskInfo.GetValue());
  return this.maskInfo.GetText();
 },
 ShouldCancelMaskKeyProcessing: function(htmlEvent, keyDownInfo) {
  return htmlEvent.returnValue === false;
 }, 
 HandleMaskKeyDown: function(evt) {
  var keyInfo = _aspxMaskManager.CreateKeyInfoByEvent(evt);
  _aspxMaskManager.keyCancelled = this.ShouldCancelMaskKeyProcessing(evt, keyInfo);
  if(_aspxMaskManager.keyCancelled) {
   _aspxPreventEvent(evt);
   return;
  }
  this.maskPasteLock = true;
  this.FillMaskInfo();  
  var canHandle = _aspxMaskManager.CanHandleControlKey(keyInfo);   
  _aspxMaskManager.savedKeyDownKeyInfo = keyInfo;
  if(canHandle) {   
   _aspxMaskManager.OnKeyDown(this.maskInfo, keyInfo);
   this.ApplyMaskInfo(true);
   _aspxPreventEvent(evt);
  }
  _aspxMaskManager.keyDownHandled = canHandle;
  this.maskPasteLock = false;
  this.UpdateMaskHintHtml();
 },
 HandleMaskKeyPress: function(evt) {
  var keyInfo = _aspxMaskManager.CreateKeyInfoByEvent(evt);
  _aspxMaskManager.keyCancelled = _aspxMaskManager.keyCancelled || this.ShouldCancelMaskKeyProcessing(evt, _aspxMaskManager.savedKeyDownKeyInfo);
  if(_aspxMaskManager.keyCancelled) {
   _aspxPreventEvent(evt);
   return;
  }
  this.maskPasteLock = true;  
  var printable = _aspxMaskManager.savedKeyDownKeyInfo != null && _aspxMaskManager.IsPrintableKeyCode(_aspxMaskManager.savedKeyDownKeyInfo);
  if(printable) {
   _aspxMaskManager.OnKeyPress(this.maskInfo, keyInfo);
   this.ApplyMaskInfo(true);
  }
  if(printable || _aspxMaskManager.keyDownHandled)   
   _aspxPreventEvent(evt); 
  this.maskPasteLock = false;
  this.UpdateMaskHintHtml();
 },
 MaskPasteTimerProc: function() {
  if(this.maskPasteLock) return;
  this.maskPasteCounter++;
  var inputElement = this.inputElement;
  if(!inputElement || this.maskPasteCounter > 40) {
   this.maskPasteCounter = 0;
   inputElement = this.GetInputElement();
  if(!_aspxIsExistsElement(inputElement)) {
   this.maskPasteTimerID = _aspxClearInterval(this.maskPasteTimerID);
   return;  
  }
  }
  if(this.maskTextBeforePaste != inputElement.value) {
   this.maskInfo.ProcessPaste(inputElement.value, _aspxGetSelectionInfo(inputElement).endPos);
   this.ApplyMaskInfo(true);
  }
 },
 BeginShowMaskHint: function() {  
  if(!this.readOnly && this.maskHintTimerID == -1)
   this.maskHintTimerID = window.setInterval(aspxMaskHintTimerProc, 500);
 },
 EndShowMaskHint: function() {
  window.clearInterval(this.maskHintTimerID);
  this.maskHintTimerID = -1;
 },
 MaskHintTimerProc: function() {  
  if(this.maskInfo) {
   this.FillMaskInfo();
   this.UpdateMaskHintHtml();
  } else {
   this.EndShowMaskHint();
  }
 },
 UpdateMaskHintHtml: function() {  
  var hint =  this.GetMaskHintElement();
  if(!_aspxIsExistsElement(hint))
   return;
  var html = _aspxMaskManager.GetHintHtml(this.maskInfo);
  if(html == this.maskHintHtml)
   return;
  if(html != "") {
   var mainElement = this.GetMainElement();
   if(_aspxIsExistsElement(mainElement)) {
    hint.innerHTML = html;
    hint.style.position = "absolute";  
    hint.style.left = _aspxGetAbsoluteX(mainElement) + "px";
    hint.style.top = (_aspxGetAbsoluteY(mainElement) + mainElement.offsetHeight + 2) + "px";
    hint.style.display = "block";    
   }   
  } else {
   hint.style.display = "none";
  }
  this.maskHintHtml = html;
 },
 HideMaskHint: function() {
  var hint =  this.GetMaskHintElement();
  if(_aspxIsExistsElement(hint))
   hint.style.display = "none";
  this.maskHintHtml = "";
 },
 GetMaskHintElement: function() {
  return _aspxGetElementById(this.name + "_MaskHint");
 },
 OnMouseWheel: function(evt){
  if(this.readOnly || this.maskInfo == null) return;
  this.FillMaskInfo();
  _aspxMaskManager.OnMouseWheel(this.maskInfo, _aspxGetWheelDelta(evt) < 0 ? -1 : 1);
  this.ApplyMaskInfo(true);
  _aspxPreventEvent(evt);
  this.UpdateMaskHintHtml();
 }, 
 OnBrowserWindowResize: function(evt) {
  if(!this.autoResizeWithContainer)
   this.AdjustControl();
 },
 IsValueChanged: function() {
    return this.GetValue() != this.lastChangedValue; 
 },
 AllowPreventingDefaultEnterBehavior: function() {
  return __aspxWebKitFamily && !this.autoPostBack;
 },
 OnKeyDown: function(evt) {        
  var returnValue = undefined;
  if (_aspxGetKeyCode(evt) == ASPxKey.Enter && this.AllowPreventingDefaultEnterBehavior()){ 
   ASPxWebKitDefaultKeyPressLockHelper.Lock(evt); 
   returnValue = true;
   }
  if(__aspxIE && _aspxGetKeyCode(evt) == ASPxKey.Esc) {   
   if(++this.escCount > 1) {
    _aspxPreventEvent(evt);
    return returnValue;
   }
  } else {
   this.escCount = 0;
  }
  ASPxClientEdit.prototype.OnKeyDown.call(this, evt);
  if(!this.IsRaiseStandardOnChange(evt)) {
   if(!this.readOnly && this.maskInfo != null)
    this.HandleMaskKeyDown(evt);
  }
  return returnValue;
 },
 OnKeyPress: function(evt) {
  ASPxClientEdit.prototype.OnKeyPress.call(this, evt);
  if(!this.readOnly && this.maskInfo != null)
   this.HandleMaskKeyPress(evt);
 },
 OnKeyUp: function(evt) {
  if(this.IsRaiseStandardOnChange(evt))
   this.RaiseStandardOnChange();
  if(this.HasTextDecorators())
   this.SyncRawInputValue();
  ASPxClientEdit.prototype.OnKeyUp.call(this, evt);
 },
 IsRaiseStandardOnChange: function(evt){
  return !this.specialKeyboardHandlingUsed && this.raiseValueChangedOnEnter && evt.keyCode == ASPxKey.Enter;
 },
 OnFocusCore: function() {
  var wasLocked = this.IsFocusEventsLocked();
  if(!this.GetEnabled()){
   var inputElement = this.GetInputElement();
   if(inputElement) 
    inputElement.blur();
   return;
  }
  ASPxClientEdit.prototype.OnFocusCore.call(this);
  if(this.maskInfo != null) {
   this.SavePrevMaskValue();
   this.BeginShowMaskHint();
  }
  if(!wasLocked)
   this.ToggleTextDecoration();
 },
 OnLostFocusCore: function() {
  var wasLocked = this.IsFocusEventsLocked();
  ASPxClientEdit.prototype.OnLostFocusCore.call(this);
  if(this.maskInfo != null) {
   this.EndShowMaskHint();
   this.HideMaskHint();   
   if(this.maskInfo.ApplyFixes(null))
    this.ApplyMaskInfo(false);
   this.RaiseStandardOnChange();
  }
  if(!wasLocked)
   this.ToggleTextDecoration();
  this.escCount = 0;
 },
 OnValueChanged: function() { 
  if(this.maskInfo != null) {
   if(this.maskInfo.GetValue() == this.maskValueBeforeUserInput) 
    return;
   this.SavePrevMaskValue();
  }
  if(this.HasTextDecorators())
   this.SyncRawInputValue();
  if(!this.IsValueChanged()) return;
  this.SaveChangedValue(); 
  ASPxClientEdit.prototype.OnValueChanged.call(this);
 }, 
 OnTextChanged: function() {
 },
 SaveChangedValue: function() {
  this.lastChangedValue = this.GetValue();
 },
 RaiseStandardOnChange: function(){
  var element = this.GetInputElement();
  if(element && element.onchange) {
   element.onchange({ target: this.GetInputElement() });
  }
 },
 RaiseTextChanged: function(processOnServer){
  if(!this.TextChanged.IsEmpty()){
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.TextChanged.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;  
 },
 GetText: function(){
  if(this.maskInfo != null) {
   return this.maskInfo.GetText();
  } else {
   var value = this.GetValue();
   return value != null ? value : "";
  }
 },
 SetText: function (value){
  if(this.maskInfo != null) {
   this.maskInfo.SetText(value);
   this.ApplyMaskInfo(false);
   this.SavePrevMaskValue();
  } else {
   this.SetValue(value);
  }
 },
 SelectAll: function() {
  this.SetSelection(0, -1, false);
 },
 SetCaretPosition: function(pos) {
  var inputElement = this.GetInputElement();
  _aspxSetCaretPosition(inputElement, pos);
 },
 SetSelection: function(startPos, endPos, scrollToSelection) { 
  var inputElement = this.GetInputElement();
  _aspxSetSelection(inputElement, startPos, endPos, scrollToSelection);
 },
 ChangeEnabledAttributes: function(enabled){
  var inputElement = this.GetInputElement();
  if(inputElement){
   this.ChangeInputEnabledAttributes(inputElement, _aspxChangeAttributesMethod(enabled), enabled);
   if(this.specialKeyboardHandlingUsed)
    this.ChangeSpecialInputEnabledAttributes(inputElement, _aspxChangeEventsMethod(enabled));
   this.ChangeInputEnabled(inputElement, enabled, this.readOnly);
  }
 },
 ChangeEnabledStateItems: function(enabled){
  if(!this.isNative) {
   var sc = aspxGetStateController();
   sc.SetElementEnabled(this.GetMainElement(), enabled);
   sc.SetElementEnabled(this.GetInputElement(), enabled);
  }
 },
 ChangeInputEnabled: function(element, enabled, readOnly){
  if(this.UseReadOnlyForDisabled())
   element.readOnly = !enabled || readOnly;
  else
   element.disabled = !enabled;
 },
 ChangeInputEnabledAttributes: function(element, method, enabled){
  if(enabled && __aspxWebKitFamily && element.tabIndex == -1)
   element.tabIndex = null;
  method(element, "tabIndex");
  if(!enabled) element.tabIndex = -1;
  method(element, "onclick");
  if(!this.NeedFocusCorrectionWhenDisabled())
   method(element, "onfocus");
  method(element, "onblur");
  method(element, "onkeydown");
  method(element, "onkeypress");
  method(element, "onkeyup");
 },
 UseReadOnlyForDisabled: function(){
  return (__aspxIE || __aspxOpera) && !this.isNative;
 },
 NeedFocusCorrectionWhenDisabled: function(){
  return __aspxIE && !this.isNative;
 }
});
ASPxIdent.IsASPxClientTextEdit = function(obj) {
 return !!obj.isASPxClientTextEdit;
};
ASPxMaskValidationPattern = _aspxCreateClass(ASPxValidationPattern, {
 constructor: function(errorText, maskInfo) {
  this.constructor.prototype.constructor.call(this, errorText);
  this.maskInfo = maskInfo;
 },
 EvaluateIsValid: function(value) {
  return this.maskInfo.IsValid();
 }
});
ASPxClientTextBoxBase = _aspxCreateClass(ASPxClientTextEdit, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.sizingConfig.allowSetHeight = false;
  this.sizingConfig.adjustControl = true;
 }
});
ASPxClientTextBox = _aspxCreateClass(ASPxClientTextBoxBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.isASPxClientTextBox = true;
 }
});
ASPxClientTextBox.Cast = ASPxClientControl.Cast;
ASPxIdent.IsASPxClientTextBox = function(obj) {
 return !!obj.isASPxClientTextBox;
};
var __aspxMMinHeight = 34;
ASPxClientMemo = _aspxCreateClass(ASPxClientTextEdit, { 
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);        
  this.isASPxClientMemo = true;
  this.raiseValueChangedOnEnter = false;
 },
 CollapseControl: function(checkSizeCorrectedFlag) {
  if (checkSizeCorrectedFlag && this.sizeCorrectedOnce)
   return;
  var mainElement = this.GetMainElement();
  var inputElement = this.GetInputElement();
  if (!_aspxIsExistsElement(mainElement) || !_aspxIsExistsElement(inputElement))
   return;
  ASPxClientTextEdit.prototype.CollapseControl.call(this, checkSizeCorrectedFlag);
  var mainElementCurStyle = _aspxGetCurrentStyle(mainElement);
  if (this.heightCorrectionRequired && mainElement && inputElement) {
   if (mainElement.style.height == "100%" || mainElementCurStyle.height == "100%") {
    mainElement.style.height = "0";
    mainElement.wasCollapsed = true;
   }
   inputElement.style.height = "0";
  }
 },
 CorrectEditorHeight: function() {
  var mainElement = this.GetMainElement();
  if(mainElement.wasCollapsed) {
   mainElement.wasCollapsed = null;
   _aspxSetOffsetHeight(mainElement, _aspxGetClearClientHeight(_aspxFindOffsetParent(mainElement)));
  }
  if(!this.isNative) {
   var inputElement = this.GetInputElement();
   var inputClearClientHeight = _aspxGetClearClientHeight(_aspxFindOffsetParent(inputElement));
   if(__aspxIE && __aspxBrowserVersion < 8)
     inputClearClientHeight -= 2;
   if(__aspxIE) {
    var calculatedMainElementStyle = _aspxGetCurrentStyle(mainElement);
    inputClearClientHeight += _aspxPxToInt(calculatedMainElementStyle.borderTopWidth) + _aspxPxToInt(calculatedMainElementStyle.borderBottomWidth);
   }
   if(inputClearClientHeight < __aspxMMinHeight)
    inputClearClientHeight = __aspxMMinHeight;
   _aspxSetOffsetHeight(inputElement, inputClearClientHeight);
   mainElement.style.height = "100%";
  }
 },
 SetWidth: function(width) {
  this.constructor.prototype.SetWidth.call(this, width);
  if(__aspxIE)
   this.AdjustControl();
 },
 SetHeight: function(height) {
  this.GetInputElement().style.height = "1px";
  this.constructor.prototype.SetHeight.call(this, height);
  this.GetInputElement().style.height = this.GetMainElement().clientHeight + "px";
 },
 ClearErrorFrameElementsStyles: function() {
  var textarea = this.GetInputElement();
  if(!textarea)
   return;
  var scrollBarPosition = textarea.scrollTop;
  ASPxClientTextEdit.prototype.ClearErrorFrameElementsStyles.call(this);
  if(__aspxFirefox)
   textarea.scrollTop = scrollBarPosition;
 },
 AllowPreventingDefaultEnterBehavior: function() {
  return false; 
 }
});
ASPxClientMemo.Cast = ASPxClientControl.Cast;
ASPxIdent.IsASPxClientMemo = function(obj) {
 return !!obj.isASPxClientMemo;
};
ASPxClientButtonEditBase = _aspxCreateClass(ASPxClientTextBoxBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);        
  this.allowUserInput = true;
  this.allowMouseWheel = true;
  this.buttonCount = 0;
  this.ButtonClick = new ASPxClientEvent();
 },
 GetButton: function(number) {
  return this.GetChild("_B" + number);
 },
 ProcessInternalButtonClick: function(buttonIndex) {
  return false;
 },
 OnButtonClick: function(number){
  var processOnServer = this.RaiseButtonClick(number);
  if (!this.ProcessInternalButtonClick(number) && processOnServer)
   this.SendPostBack('BC:' + number);
 },
 OnKeyPress: function(evt) {
  if(this.allowUserInput)
   ASPxClientTextBoxBase.prototype.OnKeyPress.call(this, evt);
 },
 SelectInputElement: function() {
  var element = this.GetInputElement();
  if(_aspxIsExistsElement(element)) {
   _aspxSetFocus(element);
   element.select();  
  }
 },
 RaiseButtonClick: function(number){
  var processOnServer = this.autoPostBack || this.IsServerEventAssigned("ButtonClick");
  if(!this.ButtonClick.IsEmpty()){
   var args = new ASPxClientButtonEditClickEventArgs(processOnServer, number);
   this.ButtonClick.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 ChangeEnabledAttributes: function(enabled){
  ASPxClientTextEdit.prototype.ChangeEnabledAttributes.call(this, enabled);
  for(var i = 0; i < this.buttonCount; i++){
   var element = this.GetButton(i);
   if(element) 
    this.ChangeButtonEnabledAttributes(element, _aspxChangeAttributesMethod(enabled));
  }
 },
 ChangeEnabledStateItems: function(enabled){
  ASPxClientTextEdit.prototype.ChangeEnabledStateItems.call(this, enabled);
  for(var i = 0; i < this.buttonCount; i++){
   var element = this.GetButton(i);
   if(element) 
    aspxGetStateController().SetElementEnabled(element, enabled);
  }
 },
 ChangeButtonEnabledAttributes: function(element, method){
  method(element, "onclick");
  method(element, "ondblclick");
  method(element, "onmousedown");
  method(element, "onmouseup");
 },
 ChangeInputEnabled: function(element, enabled, readOnly){
  ASPxClientTextEdit.prototype.ChangeInputEnabled.call(this, element, enabled, readOnly || !this.allowUserInput);
 }
});
ASPxClientButtonEdit = _aspxCreateClass(ASPxClientButtonEditBase, {
});
ASPxClientButtonEdit.Cast = ASPxClientControl.Cast;
ASPxClientButtonEditClickEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(processOnServer, buttonIndex){
  this.constructor.prototype.constructor.call(this, processOnServer);
  this.buttonIndex = buttonIndex;
 }
});
function aspxETextChanged(name) { 
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null) edit.OnTextChanged(); 
}
function aspxBEClick(name,number){
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null) edit.OnButtonClick(number);
}
function aspxMaskPasteTimerProc(name){
 var edit = aspxGetControlCollection().Get(name);
 if(edit != null) edit.MaskPasteTimerProc();
}
function aspxMaskHintTimerProc() {
 var focusedEditor = ASPxClientEdit.GetFocusedEditor();
 if(focusedEditor != null && _aspxIsFunction(focusedEditor.MaskHintTimerProc))
  focusedEditor.MaskHintTimerProc();
}
function _aspxSetFocusToTextEditWithDelay(name) {
 _aspxSetTimeout("var edit = aspxGetControlCollection().Get('" + name + "'); __aspxIE ? edit.SetCaretPosition(0) : edit.SetFocus();", 500);
}
ASPxDateFormatter = _aspxCreateClass(null, {
 constructor: function() {
  this.date = new Date(2000, 0, 1);
  this.mask;
  this.specifiers = {};     
  this.spPositions = [];    
  this.knownSpecifiers = ["d", "M", "y", "H", "h", "m", "s", "f", "F", "g", "t"];
  this.savedYear = -1;
  this.isYearParsed = false;
  this.parsedMonth = -1;
  this.replacers = {
   "d": this.ReplaceDay,
   "M": this.ReplaceMonth,
   "y": this.ReplaceYear,
   "H": this.ReplaceHours23,
   "h": this.ReplaceHours12,
   "m": this.ReplaceMinutes,
   "s": this.ReplaceSeconds,
   "F": this.ReplaceMsTrimmed,
   "f": this.ReplaceMs,
   "g": this.ReplaceEra,
   "t": this.ReplaceAmPm
  };
  this.parsers = {
   "d": this.ParseDay,
   "M": this.ParseMonth,
   "y": this.ParseYear,
   "H": this.ParseHours,
   "h": this.ParseHours,
   "m": this.ParseMinutes,
   "s": this.ParseSeconds,
   "F": this.ParseMs,
   "f": this.ParseMs,
   "g": this.ParseEra,
   "t": this.ParseAmPm
  };
 },
 Format: function(date) {
  this.date = date;
  var sp;
  var pos;
  var replacerKey;
  var result = this.mask;
  for(var i = 0; i < this.spPositions.length; i++) {
   pos = this.spPositions[i];
   sp = this.specifiers[pos];
   replacerKey = sp.substr(0, 1);
   if(this.replacers[replacerKey]) {
    result = result.substr(0, pos) + this.replacers[replacerKey].call(this, sp.length) + result.substr(pos + sp.length);
   }
  }
  return result;
 }, 
 Parse: function(str) {
  var now = new Date();  
  this.savedYear = now.getFullYear();
  this.isYearParsed = false;
  this.parsedMonth = -1;
  this.date = new Date(2000, 0, now.getDate());    
  this.strToParse = str;
  this.catchNumbers(str);  
  var parserKey;
  var sp;
  var pos;
  var parseResult;
  var error = false;
  this.hasAmPm = false;
  for(var i = 0; i < this.spPositions.length; i++) {
   pos = this.spPositions[i];
   sp = this.specifiers[pos];
   parserKey = sp.substr(0, 1);
   if(this.parsers[parserKey]) {
    parseResult = this.parsers[parserKey].call(this, sp.length);
    if(!parseResult) {
     error = true;
     break;
    }
   }
  }
  if(error)
   return false;
  if(this.hasAmPm) {
   if(!this.fixHours())
    return false;
  }
  if(!this.isYearParsed)
   this.date.setYear(this.savedYear);
  if(this.parsedMonth < 0)
   this.parsedMonth = now.getMonth();   
  this.ApplyMonth();
  return this.date;  
 },
 ApplyMonth: function() {
  var trial;
  var day = this.date.getDate();
  while(true) {
   trial = new Date();
   trial.setTime(this.date.getTime());   
   trial.setMonth(this.parsedMonth);
   if(trial.getMonth() == this.parsedMonth)
    break;
   --day;
   this.date.setDate(day);
  }
  _aspxFixTimezoneGap(this.date, trial);
  this.date = trial;
 },
 SetFormatString: function(mask) {
  if(mask.length == 2 && mask.charAt(0) == "%")
   mask = mask.charAt(1);
  this.specifiers = {}; 
  this.spPositions = [];
  this.mask = "";
  var subt = 0;
  var pos = 0;
  var startPos = 0;
  var ch;
  var prevCh = "";
  var skip = false;
  var backslash = false;
  var sp = "";    
  while(true) {
   ch = mask.charAt(pos);
   if(ch == "") {
    if(sp.length > 0)
     this.RegisterSpecifier(startPos, sp);
    break;
   }
   if(ch == "\\" && !backslash) {
    backslash = true;
    subt++;
   } else {
    if(!backslash && (ch == "'" || ch == '"')) {
     skip = !skip;
     subt++;
    } else {     
     if(!skip) {
      if(ch == "/")
       ch = __aspxCultureInfo.ds;       
      else if(ch == ":")
       ch = __aspxCultureInfo.ts;
      else if(this.IsKnownSpecifier(ch)) {
       if(prevCh.length == 0)
        prevCh = ch;
       if(ch == prevCh)
        sp += ch;
       else {
        if(sp.length > 0)
         this.RegisterSpecifier(startPos, sp);
        sp = ch;
        startPos = pos - subt;
       }
      }
     }     
     this.mask += ch;
    }      
    backslash = false;
   }            
   prevCh = ch;
   pos++;
  }
  this.spPositions.reverse();
 },
 RegisterSpecifier: function(pos, sp) {
  this.spPositions.push(pos);
  this.specifiers[pos] = sp; 
 },
 ReplaceDay: function(length) {
  if(length < 3) {
   var value = this.date.getDate().toString();
   return length == 2 ? this.padLeft(value, 2) : value;  
  } else if(length == 3) {
   return __aspxCultureInfo.abbrDayNames[this.date.getDay()];
  } else {
   return __aspxCultureInfo.dayNames[this.date.getDay()];
  }
 }, 
 ReplaceMonth: function(length) {
  var value = 1 + this.date.getMonth();
  switch(length) {
   case 1:
    return value.toString();
   case 2:
    return this.padLeft(value.toString(), 2);
   case 3:
    return __aspxCultureInfo.abbrMonthNames[value - 1];
   default:
    for(var i in this.specifiers) {
     var spec = this.specifiers[i];
     if(spec == "d" || spec == "dd")
      return __aspxCultureInfo.genMonthNames[value - 1];
  }
    return __aspxCultureInfo.monthNames[value - 1];
  }
 },
 ReplaceYear: function(length) {
  var value = this.date.getFullYear();
  if(length <= 2)
   value = value % 100;
  return this.padLeft(value.toString(), length);
 },
 ReplaceHours23: function(length) {
  var value = this.date.getHours().toString();
  return length > 1 ? this.padLeft(value, 2) : value;
 },
 ReplaceHours12: function(length) {
  var value = this.date.getHours() % 12;
  if(value == 0)
   value = 12;
  value = value.toString();
  return length > 1 ? this.padLeft(value, 2) : value;
 },
 ReplaceMinutes: function(length) {
  var value = this.date.getMinutes().toString();
  return length > 1 ? this.padLeft(value, 2) : value;
 },
 ReplaceSeconds: function(length) {
  var value = this.date.getSeconds().toString();
  return length > 1 ? this.padLeft(value, 2) : value;
 },
 ReplaceMsTrimmed: function(length) {   
  return this.formatMs(length, true);
 },
 ReplaceMs: function(length) { 
  return this.formatMs(length, false);
 },
 ReplaceEra: function(length) {
  return "A.D.";
 },
 ReplaceAmPm: function(length) {
  var value = this.date.getHours() < 12 ? __aspxCultureInfo.am : __aspxCultureInfo.pm;
  return length < 2 ? value.charAt(0) : value;
 },
 catchNumbers: function(str) {
  this.parseNumbers = [];  
  var regex = /\d+/g;  
  var match;
  for(;;) {
   match = regex.exec(str);
   if(!match)
    break;
   this.parseNumbers.push(this.parseDecInt(match[0]));
  }  
  var spCount = 0;
  var now = new Date();
  for(var i in this.specifiers) {
   var sp = this.specifiers[i];
   if(sp.constructor != String || !this.IsNumericSpecifier(sp)) continue;
   spCount++;
   if(this.parseNumbers.length < spCount) {    
    var defaultValue = 0;
    if(sp.charAt(0) == "y") defaultValue = now.getFullYear(); 
    this.parseNumbers.push(defaultValue);
   }
  }
  var excess = this.parseNumbers.length - spCount;
  if(excess > 0)
   this.parseNumbers.splice(spCount, excess);  
  this.currentParseNumber = this.parseNumbers.length - 1;
 },
 popParseNumber: function() {
  return this.parseNumbers[this.currentParseNumber--];
 },
 findAbbrMonth: function() {
  return this.findMonthCore(__aspxCultureInfo.abbrMonthNames);
 },
 findFullMonth: function() {
  return this.findMonthCore(__aspxCultureInfo.genMonthNames);
 }, 
 findMonthCore: function(monthNames) {
  var inputLower = this.strToParse.toLowerCase();
  for(var i = 0; i < monthNames.length; i++) {
   var monthName = monthNames[i].toLowerCase();
   if(monthName.length > 0 &&  inputLower.indexOf(monthName) > -1) {
    var empty = "";
    for(var j = 0; j < monthName.length; j++) empty += " ";
    this.strToParse = this.strToParse.replace(new RegExp(monthName, "gi"), empty);
    return 1 + parseInt(i);
   }
  }
  return false;
 },
 ParseDay: function(length) {
  if(length < 3) {
   var value = this.popParseNumber();
   if(value < 1 || value > 31)
    return false;
   this.date.setDate(value);
  }
  return true;
 },
 ParseMonth: function(length) {
  var value;
  switch(length){
   case 1:
   case 2:
    value = this.popParseNumber();
    break; 
   case 3:
    value = this.findAbbrMonth();
    break;
   default:
    value = this.findFullMonth();
    break;
  }
  if(value < 1 || value > 12)
   return false;
  this.parsedMonth = value - 1;
  return true;
 }, 
 ParseYear: function(length) {  
  var value = this.popParseNumber();
  if(value > 9999)
   return false;
  if(value < 100)
   value = _aspxExpandTwoDigitYear(value);
  this.date.setFullYear(value);
  this.isYearParsed = true;
  return true;
 },
 ParseHours: function(length) {
  var value = this.popParseNumber();
  if(value > 23)
   return false;
  this.date.setHours(value);
  return true;
 },
 ParseMinutes: function(length) {
  var value = this.parseMinSecCore();
  if(value == -1)
   return false;
  this.date.setMinutes(value);
  return true;
 },
 ParseSeconds: function(length) {
  var value = this.parseMinSecCore();
  if(value == -1)
   return false;
  this.date.setSeconds(value);
  return true;
 },
 ParseMs: function(length) {
  if(length > 3)
   length = 3;
  var thr = 1;
  for(var i = 0; i < length; i++)
   thr *= 10;
  thr -= 1;
  var value = this.popParseNumber();
  while(value > thr)
   value /= 10;
  this.date.setMilliseconds(Math.round(value));
  return true;
 },
 ParseEra: function(length) {
  return true;
 },
 ParseAmPm: function(length) {
  this.hasAmPm = __aspxCultureInfo.am.length > 0 && __aspxCultureInfo.pm.length > 0;
  return true;
 },
 parseDecInt: function(str) {
  return parseInt(str, 10);
 },
 padLeft: function(str, length) {
  while(str.length < length)
   str = "0" + str;
  return str;
 },
 formatMs: function(length, trim) {
  var value = Math.floor(this.date.getMilliseconds() * Math.pow(10, length - 3));
  value = this.padLeft(value.toString(), length);    
  if(trim) {
   var pos = value.length - 1;
   var req = false;
   while(value.charAt(pos) == "0") {
    req = true;
    pos--;
   }
   if(req)
    value = value.substring(0, pos + 1);   
  }
  return value;
 },
 parseMinSecCore: function() {
  var value = this.popParseNumber();
  return value > 59 ? -1 : value;
 },
 fixHours: function() {
  var am = __aspxCultureInfo.am.charAt(0).toLowerCase();
  var pm = __aspxCultureInfo.pm.charAt(0).toLowerCase();
  var str = this.strToParse.toLowerCase();
  var state = null;
  if(str.indexOf(am) > -1)
   state = "A";
  else if(str.indexOf(pm) > -1)
   state = "P";
  if(!state) return true;
  var h = this.date.getHours();
  switch(state) {
   case "P":
    if(h > 12) return false;
    if(h < 12)
     this.date.setHours(12 + h);
    break;
   case "A":
    if(h == 12)
     this.date.setHours(0);
  }
  return true;
 },
 IsNumericSpecifier: function(sp) {
  var ch = sp.charAt(0);
  if(ch == "g" || ch == "t" || ((ch == "M" || ch == "d") && sp.length > 2))
   return false;
  return true;
 },
 IsKnownSpecifier: function(sp) {
  if(sp.length > 1)
   sp = sp.charAt(0);
  for(var i = 0; i < this.knownSpecifiers.length; i++) {
   if(this.knownSpecifiers[i] == sp)
    return true;
  }
  return false;
 }
});
ASPxDateFormatter.Create = function(format) {
 var instance = new ASPxDateFormatter();
 instance.SetFormatString(format);
 return instance;
};
ASPxDateFormatter.ExpandPredefinedFormat = function(format) {
 switch(format) {
  case "d":
   return __aspxCultureInfo.shortDate;
  case "D":
   return __aspxCultureInfo.longDate;
  case "t":
   return __aspxCultureInfo.shortTime;
  case "T":
   return __aspxCultureInfo.longTime;
  case "g":
   return __aspxCultureInfo.shortDate + " " + __aspxCultureInfo.shortTime;   
  case "f":
   return __aspxCultureInfo.longDate + " " + __aspxCultureInfo.shortTime;
  case "G":
   return __aspxCultureInfo.shortDate + " " + __aspxCultureInfo.longTime;
  case "F":
  case "U":
   return __aspxCultureInfo.longDate + " " + __aspxCultureInfo.longTime;   
  case "M":
  case "m":
   return __aspxCultureInfo.monthDay;
  case "Y":
  case "y":
   return __aspxCultureInfo.yearMonth;   
  case "O":
  case "o":
   return "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffff";
  case "R":
  case "r":
   return "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'";
  case "s":
   return "yyyy'-'MM'-'dd'T'HH':'mm':'ss";
  case "u":
    return "yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
 }
 return format;
};
ASPxFormatter = {
 Format: function() {
  if(arguments.length < 1) 
   return "";
  var format = arguments[0];
  if(format == null)
   return "";
  var args;
  if(arguments.length > 1 && arguments[1] != null && arguments[1].constructor == Array) {
   args = arguments[1];
  } else {
   args = [ ];
   for(var i = 1; i < arguments.length; i++)
    args.push(arguments[i]);
  }
  var bag = [ ];
  var pos = 0;
  var savedPos = 0;  
  while(pos < format.length) {
   var ch = format.charAt(pos);
   pos++;
   if(ch == '{') {
    bag.push(format.substr(savedPos, pos - savedPos - 1));    
    if(format.charAt(pos) == "{") {
     savedPos = pos;
     pos++;
     continue;
    }
    var spec = this.ParseSpec(format, pos);
    var pos = spec.pos;
    var arg = args[spec.index];
    var argString;
    if(arg == null) {
     argString = "";
    } else if(typeof arg == "number") {
     argString = ASPxNumberFormatter.Format(spec.format, arg);
    } else if(arg.constructor == Date) {     
     if(spec.format != this.activeDateFormat) {
      this.activeDateFormat = spec.format;
      if(spec.format == "")
       spec.format = "G";      
      if(spec.format.length == 1)
       spec.format = ASPxDateFormatter.ExpandPredefinedFormat(spec.format);
      this.GetDateFormatter().SetFormatString(spec.format);
     }
     if(this.activeDateFormat == "U")
      arg = _aspxToUtcTime(arg);
     argString = this.GetDateFormatter().Format(arg);
    } else {
     argString = String(arg);     
     if(spec.format != "" && argString.length > 0) {
      var num = Number(argString.replace(",", "."));
      if(!isNaN(num))
       argString = ASPxNumberFormatter.Format(spec.format, num);
     }
    }
    var padLen = spec.width - argString.length;
    if(padLen > 0) {
     if(spec.left)
      bag.push(argString);
     for(var i = 0; i < padLen; i++)
      bag.push(" ");
     if(!spec.left)
      bag.push(argString);
    } else {
     bag.push(argString);
    }
    savedPos = pos;
   }
   else if(ch == "}" && pos < format.length && format.charAt(pos) == "}") {
    bag.push(format.substr(savedPos, pos - savedPos - 1));
    savedPos = pos;
    pos++;
   }
   else if (ch == "}") {
    return "";
   }
  }
  if(savedPos < format.length)
   bag.push(format.substr(savedPos));   
  return bag.join("");
 },
 ParseSpec: function(format, pos) {
  var result = {
   index: -1,   
   left: false,
   width: 0,
   format: "",
   pos: 0
  };
  var savedPos, ch;
  savedPos = pos;
  while(true) {   
   ch = format.charAt(pos);
   if(ch < "0" || ch > "9")
    break;
   pos++;
  }  
  if(pos > savedPos)
   result.index = Number(format.substr(savedPos, pos - savedPos));  
  if(format.charAt(pos) == ",") {
   pos++;
   while(true) {
    ch = format.charAt(pos);
    if(ch != " " && ch != "\t")
     break;
    pos++;
   }
   result.left = format.charAt(pos) == "-";
   if(result.left)
    pos++;   
   savedPos = pos;
   while(true) {
    ch = format.charAt(pos);
    if(ch < "0" || ch > "9")
     break;
    pos++;
   }
   if(pos > savedPos)
    result.width = Number(format.substr(savedPos, pos - savedPos));
  }
  if(format.charAt(pos) == ":") {
   pos++;
   savedPos = pos;
   while(format.charAt(pos) != "}")
    pos++;
   result.format = format.substr(savedPos, pos - savedPos);
  }
  pos++;
  result.pos = pos;
  return result;
 },
 activeDateFormat: null,
 GetDateFormatter: function() {
  if(!this.__dateFormatter)
   this.__dateFormatter = new ASPxDateFormatter();
  return this.__dateFormatter;
 }
};
ASPxNumberFormatter = {
 Format: function(format, value) {
  if(isNaN(value))
   return __aspxCultureInfo.numNan;
  if(!isFinite(value)) {
   return value > 0 
    ? __aspxCultureInfo.numPosInf 
    : __aspxCultureInfo.numNegInf;
  }
  this.FillFormatInfo(format);
  if(this.spec == "X")
   return this.FormatHex(value);
  this.FillDigitInfo(value);  
  switch(this.spec) {
   case "C":
    return this.FormatCurrency();
   case "D":
    return this.FormatDecimal();
   case "E":
    return this.FormatExp();
   case "F":
    return this.FormatFixed();
   case "G":   
    return this.FormatGeneral();
   case "N":
    return this.FormatNumber();
   case "P":
    return this.FormatPercent();
   default:
    if(this.custom)
     return this.FormatCustom(format);
    return "?";
  }
 },
 positive: true,
 digits: null,
 pointPos: 0, 
 spec: "",
 prec: -1,  
 upper: true,
 custom: false,
 FormatCurrency: function() {  
  if(this.prec < 0)
   this.prec = __aspxCultureInfo.currPrec;
  this.Round(this.prec);
  var bag = [ ];
  if(this.positive) {
   switch(__aspxCultureInfo.currPosPattern) {
    case 0:
     bag.push(__aspxCultureInfo.currency);
     break;
    case 2:
     bag.push(__aspxCultureInfo.currency, " ");     
     break;     
   }
  } else {
   switch(__aspxCultureInfo.currNegPattern) {
    case 0:
     bag.push("(", __aspxCultureInfo.currency);
     break;
    case 1:
     bag.push("-", __aspxCultureInfo.currency);
     break;
    case 2:
     bag.push(__aspxCultureInfo.currency, "-");
     break;
    case 3:
     bag.push(__aspxCultureInfo.currency);
     break;
    case 5:
    case 8:
     bag.push("-");
     break;
    case 9:
     bag.push("-", __aspxCultureInfo.currency, " ");
     break;
    case 12:
     bag.push(__aspxCultureInfo.currency, " -");
     break;
    case 14:
     bag.push("(", __aspxCultureInfo.currency, " ");
     break;
    case 15:
     bag.push("(");
     break;
   }
  }
  this.AppendGroupedInteger(bag, __aspxCultureInfo.currGroups, __aspxCultureInfo.currGroupSeparator);
  if(this.prec > 0) {
   bag.push(__aspxCultureInfo.currDecimalPoint);
   this.AppendDigits(bag, this.pointPos, this.pointPos + this.prec);
  }
  if(this.positive) {
   switch(__aspxCultureInfo.currPosPattern) {
    case 1:
     bag.push(__aspxCultureInfo.currency);
     break;
    case 3:
     bag.push(" ", __aspxCultureInfo.currency);
     break;     
   }   
  } else {
   switch(__aspxCultureInfo.currNegPattern) {
    case 0:
    case 14:
     bag.push(")");
     break;
    case 3:
     bag.push("-");
     break;
    case 5:
     bag.push(__aspxCultureInfo.currency);
     break;
    case 8:
     bag.push(" ", __aspxCultureInfo.currency);
     break;
    case 10:
     bag.push(" ", __aspxCultureInfo.currency, "-");
     break;
    case 15:
     bag.push(" ", __aspxCultureInfo.currency, ")");
     break;
   }
  }
  return bag.join("");
 }, 
 FormatDecimal: function() {
  if(this.prec < this.pointPos)
   this.prec = this.pointPos;
  if(this.prec < 1)
   return "0";
  var bag = [ ];
  if(!this.positive)
   bag.push("-");
  this.AppendDigits(bag, this.pointPos - this.prec, this.pointPos);
  return bag.join("");
 },
 FormatExp: function() {  
  if(this.prec < 0)
   this.prec = 6;
  this.Round(1 - this.pointPos + this.prec);
  return this.FormatExpCore(3);
 },
 FormatExpCore: function(minExpDigits) {
  var bag = [ ];
  if(!this.positive)
   bag.push("-");
  this.AppendDigits(bag, 0, 1);
  if(this.prec > 0) {
   bag.push(__aspxCultureInfo.numDecimalPoint);
   this.AppendDigits(bag, 1, 1 + this.prec);
  }
  bag.push(this.upper ? "E" : "e");
  var order = this.pointPos - 1;  
  if(order >= 0) {
   bag.push("+");
  } else {
   bag.push("-");
   order = -order;
  }
  var orderStr = String(order);
  for(var i = orderStr.length; i < minExpDigits; i++)
   bag.push(0);
  bag.push(orderStr);
  return bag.join("");
 },
 FormatFixed: function() {
  if(this.prec < 0)
   this.prec = __aspxCultureInfo.numPrec;
  this.Round(this.prec);
  var bag = [ ];
  if(!this.positive)
   bag.push("-");
  if(this.pointPos < 1)
   bag.push(0);
  else
   this.AppendDigits(bag, 0, this.pointPos);
  if(this.prec > 0) {
   bag.push(__aspxCultureInfo.numDecimalPoint);
   this.AppendDigits(bag, this.pointPos, this.pointPos + this.prec);
  }
  return bag.join(""); 
 },
 FormatGeneral: function() {
  var hasFrac = this.pointPos < this.digits.length;
  var allowExp;
  if(this.prec < 0) {
   allowExp = hasFrac;
   this.prec = hasFrac ? 15 : 10;
  } else {   
   allowExp = true;
   if(this.prec < 1)
    this.prec = hasFrac ? 15 : 10;
   this.Round(this.prec - this.pointPos);
  }
  if(allowExp) {
   if(this.pointPos > this.prec || this.pointPos <= -4) {
    this.prec = this.digits.length - 1;
    return this.FormatExpCore(2);
   }
  }
  this.prec = Math.min(this.prec, Math.max(1, this.digits.length)) - this.pointPos;
  return this.FormatFixed();
 },
 FormatNumber: function() {
  if(this.prec < 0)
   this.prec = __aspxCultureInfo.numPrec;
  this.Round(this.prec);
  var bag = [ ];
  if(!this.positive) {
   switch(__aspxCultureInfo.numNegPattern) {
    case 1:
     bag.push("-");
     break;
    case 2:
     bag.push("- ");
     break;
   }
  }
  this.AppendGroupedInteger(bag, __aspxCultureInfo.numGroups, __aspxCultureInfo.numGroupSeparator);
  if(this.prec > 0) {
   bag.push(__aspxCultureInfo.numDecimalPoint);
   this.AppendDigits(bag, this.pointPos, this.pointPos + this.prec);
  }
  if(!this.positive) {
   switch(__aspxCultureInfo.numNegPattern) {
    case 3:
     bag.push("-");
     break;
   }
  }
  return bag.join("");
 },
 FormatPercent: function() {
  if(this.prec < 0)
   this.prec = __aspxCultureInfo.numPrec;
  if(this.digits.length > 0)
   this.pointPos += 2;
  this.Round(this.prec);
  var bag = [ ];
  if(!this.positive)
   bag.push("-");
  if(__aspxCultureInfo.percentPattern == 2)
   bag.push("%");    
  this.AppendGroupedInteger(bag, __aspxCultureInfo.numGroups, __aspxCultureInfo.numGroupSeparator);
  if(this.prec > 0) {
   bag.push(__aspxCultureInfo.numDecimalPoint);
   this.AppendDigits(bag, this.pointPos, this.pointPos + this.prec);
  }  
  switch(__aspxCultureInfo.percentPattern) {
   case 0:
    bag.push(" %");
    break;
   case 1:
    bag.push("%");
    break;
  }  
  return bag.join("");
 },
 FormatHex: function(value) {
  var result = value.toString(16);
  if(result.indexOf("(") > -1)
   return result;
  result = this.upper ? result.toUpperCase() : result.toLowerCase();
  if(this.prec <= result.length)
   return result;
  var bag = [ ];
  for(var i = result.length; i < this.prec; i++)
   bag.push(0);
  bag.push(result);
  return bag.join("");
 },
 FormatCustom: function(format) {
  var sectionList = this.GetCustomFormatSections(format);
  var section = this.SelectCustomFormatSection(sectionList);
  if(section == "")
   return this.positive ? "" : "-";
  var info = this.ParseCustomFormatSection(section);
  var lists = this.CreateCustomFormatLists(info);
  if(sectionList.length > 2 && section != sectionList[2]) {
   var zero = lists.i.concat(lists.f).join("").split(0).join("") == "";
   if(zero) {
    section = sectionList[2];
    info = this.ParseCustomFormatSection(section);
    lists = this.CreateCustomFormatLists(info);   
   }   
  }
  return this.FormatCustomCore(section, info, lists);
 },
 GetCustomFormatSections: function(format) {
  var sections = [ ];
  var escaping = false;
  var quote = "";
  var length = 0;
  var prevPos = 0;
  for(var i = 0; i < format.length; i++) {
   var ch = format.charAt(i);
   if(!escaping && quote == "" && ch == ";") {
    sections.push(format.substr(prevPos, length));
    length = 0;
    prevPos = i + 1;
    if(sections.length > 2)
     break;
   } else {
    if(escaping)
     escaping = false;
    else if(ch == quote)
     quote = quote == "" ? ch : "";
    else if(ch == "\\")
     escaping = true;
    else if(ch == "'" || ch == '"')
     quote = ch;
    ++length;
   }
  }
  if(length > 0)
   sections.push(format.substr(prevPos, length));
  if(sections.length < 1)
   sections.push(format);
  return sections;
 },
 SelectCustomFormatSection: function(sections) {
  if(!this.positive && sections.length > 1 && sections[1] != "") {
   this.positive = true;
   return sections[1];
  }
  if(this.digits.length < 1 && sections.length > 2 && sections[2] != "")
   return sections[2];
  return sections[0];
 },
 CreateCustomFormatInfo: function() {
  return {
   pointPos: -1,
   grouping: false,
   exp: false,
   expShowPlus: false,
   percent: false,
   scaling: 0,
   intDigits: 0,
   fracDigits: 0,
   expDigits: 0,
   intSharps: 0,
   fracSharps: 0, 
   expSharps: 0
  };
 },
 ParseCustomFormatSection: function(section) {  
  var quote = "";
  var area = "i"; 
  var canParseIntSharps = true;
  var result = this.CreateCustomFormatInfo();
  var groupSeparators = 0;  
  for(var i = 0; i < section.length; i++) {
   var ch = section.charAt(i);   
   if(ch == quote) {
    quote = "";    
    continue;
   }
   if(quote != "")
    continue;
   if(area == "e" && ch != "0" && ch != "#") {
    area = result.pointPos < 0 ? "i" : "f";
    i--;
    continue;
   }
   switch(ch) {
    case "\\":
     i++;
     continue;
    case "'":
    case '"':
     quote = ch;
     continue;
    case "#":
    case "0":
     if(ch == "#") {
      switch(area) {
       case "i":
        if(canParseIntSharps)
         result.intSharps++;
        break;
       case "f":
        result.fracSharps++;
        break;
       case "e":
        result.expSharps++;
        break;
      }
     } else {
      canParseIntSharps = false;
      switch(area) {
       case "f":
        result.fracSharps = 0;        
        break;
       case "e":
        result.expSharps = 0;
        break;
      }
     }
     switch(area) {
      case "i":
       result.intDigits++;
       if(groupSeparators > 0)
        result.grouping = true;
       groupSeparators = 0;
       break;
      case "f":
       result.fracDigits++;  
       break;
      case "e":
       result.expDigits++;
       break;
     }
     break;
    case "e":
    case "E":
     if(result.exp)
      break;
     result.exp = true;     
     area = "e"; 
     if(i < section.length - 1) {
      var next = section.charAt(1 + i);
      if(next == "+" || next == "-") {
       if(next == "+")
        result.expShowPlus = true;
       i++;
      }
      else if(next != "0" && next != "#") {
       result.exp = false;
       if(result.pointPos < 0)
        area = "i";       
      }
     }
     break;
    case ".":
     area = "f";
     if(result.pointPos < 0)
      result.pointPos = i;
     break;
    case "%":
     result.percent = true;     
     break;
    case ",":
     if(area == "i" && result.intDigits > 0)
      groupSeparators++;
     break;
    default:
     break;
   }
  }
  if(result.expDigits < 1)
   result.exp = false;
  else
   result.intSharps = 0;
  if(result.fracDigits < 1)
   result.pointPos = -1;
  result.scaling = 3 * groupSeparators;  
  return result;
 },
 CreateCustomFormatLists: function(info) {
  var intList = [ ];
  var fracList = [ ];
  var expList = [ ];
  if(this.digits.length > 0) {
   if(info.percent)
    this.pointPos += 2;
   this.pointPos -= info.scaling;
  }
  var expPositive = true;
  if(info.exp && (info.intDigits > 0 || info.fracDigits > 0)) {
   var diff = 0;
   if(this.digits.length > 0) {
    this.Round(info.intDigits + info.fracDigits - this.pointPos);
    diff -= this.pointPos - info.intDigits;
    this.pointPos = info.intDigits;
   }
   expPositive = diff <= 0;   
   expList = String(diff < 0 ? -diff : diff).split("");
  } else {
   this.Round(info.fracDigits);
  }
  if(this.digits.length < 1 || this.pointPos < 1)
   intList = [ 0 ];
  else
   this.AppendDigits(intList, 0, this.pointPos);
  this.AppendDigits(fracList, this.pointPos, this.digits.length);
  if(info.exp) {
   while(intList.length < info.intDigits)
    intList.unshift(0);
   while(expList.length < info.expDigits - info.expSharps)
    expList.unshift(0);
   if(expPositive && info.expShowPlus)
    expList.unshift("+");
   else if(!expPositive)
    expList.unshift("-");
  } else {
   while(intList.length < info.intDigits - info.intSharps)
    intList.unshift(0);    
   if(info.intSharps >= info.intDigits) {
    var zero = true;
    for(var i = 0; i < intList.length; i++) {
     if(intList[i] != 0) {
      zero = false;
      break;
     }
    }
    if(zero)
     intList = [ ];
   }
  }
  while(fracList.length < info.fracDigits - info.fracSharps)
   fracList.push(0);
  return {
   i: intList,
   f: fracList,
   e: expList
  };
 },
 FormatCustomCore: function(section, info, lists) {
  var intLen = 0; 
  var total = 0;
  var groupIndex = 0; 
  var counter = 0;
  var groupSize = 0;
  if(info.grouping && __aspxCultureInfo.numGroups.length > 0) {
   intLen = lists.i.length;
   for(var i = 0; i < __aspxCultureInfo.numGroups.length; i++) {
    total += __aspxCultureInfo.numGroups[i];
    if(total <= intLen)
     groupIndex = i;
   }
   groupSize = __aspxCultureInfo.numGroups[groupIndex];
   var fraction = intLen > total ? intLen - total : 0;
   if(groupSize == 0) {
    while(groupIndex >= 0 && __aspxCultureInfo.numGroups[groupIndex] == 0)
     groupIndex--;
    groupSize = fraction > 0 ? fraction : __aspxCultureInfo.numGroups[groupIndex];
   }
   if(fraction == 0) {
    counter = groupSize;
   } else {
    groupIndex += Math.floor(fraction / groupSize);
    counter = fraction % groupSize;
    if(counter == 0)
     counter = groupSize;
    else
     groupIndex++;
   }
  } else {
   info.grouping = false;
  }
  var bag = [ ];
  var area = "i";
  var intSharps = 0;
  var intListIndex = 0;
  var fracListIndex = 0;
  var savedCh = "";
  for(var i = 0; i < section.length; i++) {
   var ch = section.charAt(i);
   if(ch == savedCh) {
    savedCh = "";
    continue;
   }
   if(savedCh != "") {
    bag.push(ch);
    continue;
   }
   switch(ch) {
    case "\\":
     ++i;
     if(i < section.length)
      bag.push(section.charAt(i));
     continue;
    case "'":
    case '"':     
     savedCh = ch;
     continue;
    case "#":     
    case "0":
     if(area == "i") {
      intSharps++;
      if(ch == "0" || info.intDigits - intSharps < lists.i.length + intListIndex) {
       while(info.intDigits - intSharps + intListIndex < lists.i.length) {
        bag.push(lists.i[intListIndex]);
        intListIndex++;
        if(info.grouping && --intLen > 0 && --counter == 0) {
         bag.push(__aspxCultureInfo.numGroupSeparator);
         if(--groupIndex < __aspxCultureInfo.numGroups.length && groupIndex >= 0)
          groupSize = __aspxCultureInfo.numGroups[groupIndex];
         counter = groupSize;
        }
       }
      }
     } else if(area == "f") {
      if(fracListIndex < lists.f.length) {
       bag.push(lists.f[fracListIndex]);
       fracListIndex++;
      }
     }
     break;
    case "e":
    case "E":
     if(lists.e == null || !info.exp) {
      bag.push(ch);
      break;
     }
     for(var q = i + 1; q < section.length; q++) {
      if(q == i + 1 && (section.charAt(q) == "+" || section.charAt(q) == "-"))
       continue;                   
      if(section.charAt(q) == "0" || section.charAt(q) == "#")
       continue;
      break;
     }
     i = q - 1;
     area = info.pointPos < 0 ? "i" : "f";
     bag.push(ch);
     bag = bag.concat(lists.e);
     lists.e = null;      
     break;
    case ".":
     if(info.pointPos == i && lists.f.length > 0)
      bag.push(__aspxCultureInfo.numDecimalPoint);
     area = "f";
     break;
    case ",":
     break;
    default:
     bag.push(ch);
     break;
   }
  }
  if(!this.positive)
   bag.unshift("-");
  return bag.join("");
 },
 FillDigitInfo: function(value) {
  this.positive = true;
  if(value < 0) {
   value = -value;
   this.positive = false;   
  }
  this.digits = [ ];
  this.pointPos = 0;    
  if(value == 0 || !isFinite(value) || isNaN(value)) {
   this.pointPos = 1;
   return;
  }
  var list = String(value).split("e");
  var str = list[0];
  if(list.length > 1) {   
   this.pointPos = Number(list[1]);
  }
  var frac = false;
  var decimalCount = 0;
  for(var i = 0; i < str.length; i++) {
   var ch = str.charAt(i);
   if(ch == ".") {
    frac = true;
   } else {
    if(frac)
     decimalCount++;     
    if(ch != "0" || this.digits.length > 0)
     this.digits.push(Number(ch));
   }
  }
  this.pointPos += this.digits.length - decimalCount;
 },
 FillFormatInfo: function(format) {
  this.upper = true;
  this.custom = false;
  this.prec = -1;
  var spec;
  if(format == null || format.length < 1)
   spec = "G";
  else
   spec = format.charAt(0);
  if(spec >= "a" && spec <= "z") {
   spec = spec.toUpperCase();
   this.upper = false;
  }
  if(spec >= "A" && spec <= "Z") {   
   if(format != null && format.length > 1) {
    var prec = Number(format.substr(1));
    if(!isNaN(prec))
     this.prec = prec;
    else
     this.custom = true;
   }
  } else {
   this.custom = true;   
  }  
  this.spec = this.custom ? "0" : spec;
 },
 Round: function(shift) {
  var amount = this.digits.length - this.pointPos - shift;
  if(amount <= 0) 
   return;
  var cutPos = this.pointPos + shift;
  if(cutPos < 0) {
   this.digits = [ ];
   this.pointPos = 0;
   return;
  }
  var digit = this.digits[cutPos];
  if(digit > 4) { 
   for(var i = 0; i < amount; i++) {
    var index = cutPos - 1 - i;
    if(index < 0) {
     this.digits.unshift(0);
     this.pointPos++;
     cutPos++;
     index++;
    }
    digit = this.digits[index];    
    if(digit < 9) {
     this.digits[index] = 1 + digit;
     break;
    } else {
     this.digits[index] = 0;
     amount++;
    }
   }
  }
  for(var i = cutPos - 1; i >= 0; i--) {
   if(this.digits[i] > 0) break;
   cutPos--;
  }
  this.digits.splice(cutPos, this.digits.length - cutPos);
 },
 AppendGroupedInteger: function(list, groups, separator) { 
  if(this.pointPos < 1) {
   list.push(0);
   return;
  }
  var total = 0;
  var groupIndex = 0;
  for(var i = 0; i < groups.length; i++) {
   total += groups[i];
   if(total <= this.pointPos)
    groupIndex = i;
   else
    break;
  }
  if(groups.length > 0 && total > 0) {
   var counter;
   var groupSize = groups[groupIndex];
   var fraction = this.pointPos > total ? this.pointPos - total : 0;
   if(groupSize == 0) {
    while(groupIndex >= 0 && groups[groupIndex] == 0)
     groupIndex--;
    groupSize = fraction > 0 ? fraction : groups[groupIndex];
   }
   if(fraction == 0) {
    counter = groupSize;
   } else {
    groupIndex += Math.floor(fraction / groupSize);
    counter = fraction % groupSize;
    if(counter == 0)
     counter = groupSize;
    else
     groupIndex++;
   }
   var i = 0;
   while(true) {
    if(this.pointPos - i <= counter || counter == 0) {
     this.AppendDigits(list, i, this.pointPos);
     break;
    }
    this.AppendDigits(list, i, i + counter);
    list.push(separator);
    i += counter;    
    groupIndex--;     
    if(groupIndex < groups.length && groupIndex >= 0)
     groupSize = groups[groupIndex];
    counter = groupSize;
   }
  } else {
   this.AppendDigits(list, 0, this.pointPos);   
  }  
 },
 AppendDigits: function(list, start, end) {
  for(var i = start; i < end; i++) {
   if(i < 0 || i >= this.digits.length)
    list.push(0);
   else
    list.push(this.digits[i]);
  }
 }
};
var __aspxLoadFilteredItemsCallbackPrefix = "CBLF";
var __aspxCorrectFilterCallbackPrefix = "CBCF";
var __aspxtCurrentSelectedItemCallbackPrefix = "CBSI";
var __aspxDropDownNameSuffix = "_DDD";
var __aspxCalendarNameSuffix = "_C";
var __aspxListBoxNameSuffix = "_L";
var __aspxItemImageCellClassName = "dxeIIC";
ASPxClientDropDownEditBase = _aspxCreateClass(ASPxClientButtonEditBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.DropDown = new ASPxClientEvent();
  this.CloseUp = new ASPxClientEvent();
  this.ddHeightCache = __aspxInvalidDimension;
  this.ddWidthCache = __aspxInvalidDimension;
  this.mainElementWidthCache = __aspxInvalidDimension;
  this.dropDownButtonIndex = -1;
  this.droppedDown = false;
  this.ddButtonPushed = false;
  this.lastSuccessText = "";
  this.isToolbarItem = false;
  this.allowFocusDropDownWindow = false;
  this.pcIsShowingNow = false;
  aspxGetDropDownCollection().Add(this);
 },
 Initialize: function(){
  var pc = this.GetPopupControl();
  if(pc) {
   pc.allowCorrectYOffsetPosition = false;
   pc.dropDownEditName = this.name;
  }
  this.AssignClientAttributes();
  this.InitLastSuccessText();
  if(this.RefocusOnClickRequired()){ 
   var clickFunc = new Function("aspxGetControlCollection().Get('" + this.name + "').ForceRefocusEditor();");
   _aspxAttachEventToElement(this.GetMainElement(), "click", clickFunc);
  }
  ASPxClientButtonEditBase.prototype.Initialize.call(this);
 },
 InitLastSuccessText: function(){
  var rawText = this.GetTextInternal();
  this.SetLastSuccessTest(rawText);
 },
 AssignClientAttributes: function(){
  var element = this.GetDropDownButton();
  if(_aspxIsExistsElement(element))
   _aspxPreventElementDragAndSelect(element, true);
 },
 RefocusOnClickRequired: function(){
  return false;
 },
 GetDropDownButton: function(){
  return this.GetButton(this.dropDownButtonIndex);
 },
 GetPopupControl: function(){
  return aspxGetControlCollection().Get(this.name + __aspxDropDownNameSuffix);
 },
 GetDropDownInnerControlName: function(suffix){
  var pc = this.GetPopupControl();
  if(pc)
   return this.GetPopupControl().name + suffix;
  return "";
 },
 GetDropDownItemImageCell: function() {
  return _aspxGetChildrenByPartialClassName(this.GetMainElement(), __aspxItemImageCellClassName)[0];
 },
 GetIsControlWidthWasChanged: function(){
  return this.mainElementWidthCache == __aspxInvalidDimension || this.mainElementWidthCache != this.GetMainElement().clientWidth;
 },
 GetDropDownHeight: function(){
  return 0;
 },
 GetDropDownWidth: function(){
  return 0;
 },
 GetDropDownIsWindowElement: function(id, pcPostfix) {
  var pos = id.lastIndexOf(pcPostfix);
  if(pos != -1) {
   var name = id.substring(0, pos);
   var pc = aspxGetPopupControlCollection().Get(name);
   if(pc && pc.dropDownEditName)
    return aspxGetDropDownCollection().Get(pc.dropDownEditName);
  }
  return null;
 },
 GetDropDownParents: function() {
  var parents = [ ];
  var mainElement = this.GetMainElement();
  var pcPostfix = __aspxPCWIdSuffix + "-1";
  var element = mainElement.parentNode;
  while(element != null){
   if(element.tagName == "BODY")
    break;
   if(element.id) {
    var dropDown = this.GetDropDownIsWindowElement(element.id, pcPostfix);
    if(dropDown != null)
     parents.push(dropDown);
   }
   element = element.parentNode;
  }
  return parents.reverse();
 },
 BeforePopupControlResizing: function() {
 },
 AfterPopupControlResizing: function() {
 },
 ShowDropDownArea: function(isRaiseEvent){
  this.SetPCIsShowingNow(true);
  aspxGetDropDownCollection().RegisterDroppedDownControl(this, this.GetDropDownParents());
  this.lockListBoxClick = true;
  this.lockClosing = true; 
  var pc = this.GetPopupControl();
  var element = this.GetMainElement();
  var pcwElement = pc.GetWindowElement(-1);
  _aspxSetElementDisplay(pcwElement, true);
  var height = this.GetDropDownHeight();
  var width = this.GetDropDownWidth();
  this.BeforePopupControlResizing();
  if(this.ddHeightCache != height || this.ddWidthCache != width){
   pc.SetSize(width, height);
   this.ddHeightCache = height;
   this.ddWidthCache = width;
  }
  this.AfterPopupControlResizing();
  pc.popupVerticalOffset = - _aspxGetClientTop(element);
  this.RaiseDropDownEventRequired = isRaiseEvent;
  pc.ShowAtElement(element);
  this.droppedDown = true;
  this.lockClosing = false;
 },
 HideDropDownArea: function(isRaiseEvent){
  if(this.lockClosing || !this.droppedDown) return;
  this.DropDownButtonPop();
  var pc = this.GetPopupControl();
  if (pc){
   aspxGetDropDownCollection().UnregisterDroppedDownControl(this);
   pc.Hide();
   if(isRaiseEvent)
    this.RaiseCloseUp();
   this.droppedDown = false;
  }
 },
 ProcessInternalButtonClick: function(buttonIndex) {
  return this.dropDownButtonIndex == buttonIndex;
 },
 ToggleDropDown: function(){
  this.OnApplyChanges();
  if(this.droppedDown)
   this.HideDropDownArea(true);
  else
   this.ShowDropDownArea(true);  
 },
 GetTextInternal: function(){
  var text = ASPxClientButtonEditBase.prototype.GetValue.call(this);
  return text != null ? text : "";
 },
 SetTextInternal: function(text){
  if(!this.readOnly)
   ASPxClientButtonEditBase.prototype.SetValue.call(this, text);
 },
 SetLastSuccessTest: function(text){
  if(text == null) text = "";
  this.lastSuccessText = text;
 },
 SetPCIsShowingNow: function(value){
  this.pcIsShowingNow = value;
 },
 OnValueChanged: function() {
  this.SetLastSuccessTest(this.GetTextInternal());
  ASPxClientEdit.prototype.OnValueChanged.call(this);
 },
 OnApplyChanges: function(){
 },
 OnCancelChanges: function(){
  var isCancelProcessed = (this.GetTextInternal() != this.lastSuccessText);
  this.SetTextInternal(this.lastSuccessText);
  return isCancelProcessed;
 },
 OnFocus: function(){
  this.OnSetFocus(true);
  ASPxClientButtonEditBase.prototype.OnFocus.call(this);
 },
 OnLostFocus: function(){
  this.OnSetFocus(false);
  ASPxClientButtonEditBase.prototype.OnLostFocus.call(this);
 },
 OnSetFocus: function(isFocused){
  aspxGetDropDownCollection().SetFocusedDropDownName(isFocused ? this.name : "");
 },
 IsEditorElement: function(element) {
  if(ASPxClientButtonEditBase.prototype.IsEditorElement.call(this, element))
   return true;
  if(this.allowFocusDropDownWindow)
   return false;
  var pc = this.GetPopupControl();
  if(pc != null) {
   var windowElement = pc.GetWindowElement(-1);
   return windowElement == element || _aspxGetIsParent(windowElement, element);
  }
  return false;
 },
 OnPopupControlShown: function(){
  this.SetPCIsShowingNow(false);
  if(this.RaiseDropDownEventRequired){
   this.RaiseDropDownEventRequired = false;
   _aspxSetTimeout("aspxDDBRaiseDropDownByTimer(\"" + this.name + "\")", 0);
  }
 },
 IsCanToDropDown: function(){
  return true;
 },
 OnDropDown: function(evt) { 
  if(!this.isInitialized) 
   return true;
  if(!this.IsCanToDropDown()) {
   this.ForceRefocusEditor();
   return true;
  }
  if(__aspxIE || __aspxOpera){
   if(!this.droppedDown) {
    _aspxEmulateOnMouseDown(this.GetMainElement(), evt);
    aspxGetStateController().ClearSavedCurrentPressedElement();
   }
  }
  this.OnDropDownCore(evt);
  return _aspxCancelBubble(evt); 
 },
 OnDropDownCore: function(evt) {
  if(!this.droppedDown)
   this.DropDownButtonPush();
  this.ToggleDropDown();
  this.ForceRefocusEditor();
 },
 DropDownButtonPush: function(){
  if(this.droppedDown || this.ddButtonPushed) return;
  this.ddButtonPushed = true;
  if(__aspxIE || __aspxOpera) 
   this.DropDownButtonPushPop(true);
  else
   this.DropDownButtonPushMozilla();
 }, 
 DropDownButtonPop: function(force){
  if((!this.droppedDown || !this.ddButtonPushed) && !force) return;
  this.ddButtonPushed = false;
  if(__aspxIE || __aspxOpera) 
   this.DropDownButtonPushPop(false);
  else
   this.DropDownButtonPopMozilla();
 },
 DropDownButtonPushPop: function(isPush){
  var buttonElement = this.GetDropDownButton();
  if(buttonElement){
   var controller = aspxGetStateController();
   var element = controller.GetPressedElement(buttonElement);
   if(element){
    if(isPush){
     controller.SetCurrentHoverElement(null);
     controller.DoSetPressedState(element);
    } else {
     controller.DoClearPressedState(element);
     controller.SetCurrentPressedElement(null);
     controller.SetCurrentHoverElement(element);
    }
   }
  }
 },
 DropDownButtonPushMozilla: function(){
  this.DisableStyleControllerForDDButton();
  var controller = aspxGetStateController();
  controller.savedCurrentPressedElement = null;
 },
 DropDownButtonPopMozilla: function(){
  this.EnableStyleControllerForDDButton();
  var controller = aspxGetStateController();
  var buttonElement = this.GetDropDownButton();
  if(buttonElement){
   var element = controller.GetPressedElement(buttonElement);
   if(element)
    controller.DoClearPressedState(element);
   controller.currentPressedElement = null;
   element = controller.GetHoverElement(buttonElement);
   if(element)
    controller.SetCurrentHoverElement(element);
  }
 },
 EnableStyleControllerForDDButton: function(){
  var element = this.GetDropDownButton();
  if(element){
   var controller = aspxGetStateController();
   this.ReplaceElementControlStyleItem(controller.hoverItems, __aspxHoverItemKind, element, this.ddButtonHoverStyle);
   this.ReplaceElementControlStyleItem(controller.pressedItems, __aspxPressedItemKind, element, this.ddButtonPressedStyle);
   this.ReplaceElementControlStyleItem(controller.selectedItems, __aspxSelectedItemKind, element, this.ddButtonSelectedStyle);
  }
 },
 DisableStyleControllerForDDButton: function(){
  var element = this.GetDropDownButton();
  if(element){
   var controller = aspxGetStateController();
   this.ddButtonHoverStyle = this.ReplaceElementControlStyleItem(controller.hoverItems, __aspxHoverItemKind, element, null);
   this.ddButtonPressedStyle = this.ReplaceElementControlStyleItem(controller.pressedItems, __aspxPressedItemKind, element, null);
   this.ddButtonSelectedStyle = this.ReplaceElementControlStyleItem(controller.selectedItems, __aspxSelectedItemKind, element, null);
  }
 },
 ReplaceElementControlStyleItem: function(items, kind, element, newStyleItem){
  var styleItem = items[element.id];
  items[element.id] = newStyleItem;
  element[kind] = newStyleItem;
  return styleItem;
 },
 CloseDropDownByDocumentOrWindowEvent: function(causedByWindowResizing){
  if(!causedByWindowResizing || !this.pcIsShowingNow)
   this.HideDropDownArea(true);
 },
 OnDocumentMouseUp: function() {
  this.DropDownButtonPop();
 },
 OnDDButtonMouseMove: function(evt){
 },
 OnCloseUp: function(evt){
  this.HideDropDownArea(true);
 },
 OnOpenAnotherDropDown: function(){
  this.HideDropDownArea(true);
 },
 OnTextChanged: function() {
  if(!this.ChangedByEnterKeyPress())
   this.OnTextChangedInternal();
 },
 OnTextChangedInternal: function() {
  this.ParseValue();
 },
 ChangedByEnterKeyPress: function() {
  if(__aspxFirefox || __aspxWebKitFamily) 
   if(this.enterKeyPressed) {
    this.enterKeyPressed = false;
    return true;
   } 
  return false;
 },
 ChangeEnabledAttributes: function(enabled){
  ASPxClientButtonEditBase.prototype.ChangeEnabledAttributes.call(this, enabled);
  var btnElement = this.GetDropDownButton();
  if(btnElement)
   this.ChangeButtonEnabledAttributes(btnElement, _aspxChangeAttributesMethod(enabled));
  var inputElement = this.GetInputElement();
  if(inputElement)
   this.ChangeInputCellEnabledAttributes(inputElement.parentNode, _aspxChangeAttributesMethod(enabled));
  var imageCell = this.GetDropDownItemImageCell();
  if(_aspxIsExists(imageCell))
   this.ChangeImageCellEnabledAttributes(imageCell, _aspxChangeAttributesMethod(enabled));
 },
 ChangeEnabledStateItems: function(enabled){
  ASPxClientButtonEditBase.prototype.ChangeEnabledStateItems.call(this, enabled);
  var btnElement = this.GetDropDownButton();
  if(btnElement)
   aspxGetStateController().SetElementEnabled(btnElement, enabled);
 },
 ChangeInputCellEnabledAttributes: function(element, method){
  method(element, "onclick");
  method(element, "onkeyup");
  method(element, "onmousedown");
  method(element, "onmouseup");
 },
 ChangeImageCellEnabledAttributes: function(imageCell, method){
  method(imageCell, "onmousedown");
 },
 InitializeKeyHandlers: function() {
  this.AddKeyDownHandler(ASPxKey.Enter, "OnEnter");
  this.AddKeyDownHandler(ASPxKey.Esc, "OnEscape");
  this.AddKeyDownHandler(ASPxKey.PageUp, "OnPageUp");
  this.AddKeyDownHandler(ASPxKey.PageDown, "OnPageDown");
  this.AddKeyDownHandler(ASPxKey.End, "OnEndKeyDown");
  this.AddKeyDownHandler(ASPxKey.Home, "OnHomeKeyDown");
  this.AddKeyDownHandler(ASPxKey.Left, "OnArrowLeft");
  this.AddKeyDownHandler(ASPxKey.Right, "OnArrowRight");
  this.AddKeyDownHandler(ASPxKey.Up, "OnArrowUp");
  this.AddKeyDownHandler(ASPxKey.Down, "OnArrowDown");
  this.AddKeyDownHandler(ASPxKey.Tab, "OnTab");
 },
 OnArrowUp: function(evt){
  if(evt.altKey) {
   this.ToggleDropDown();
   return true;
  }
  return false;
 },
 OnArrowDown: function(evt){
  if(evt.altKey) {
   this.ToggleDropDown();
   return true;
  }
  return false;
 },
 OnPageUp: function(evt){
  return false;
 }, 
 OnPageDown: function(evt){
  return false;
 },
 OnEndKeyDown: function(evt){
  return false;
 },
 OnHomeKeyDown: function(evt){
  return false;
 },
 OnArrowLeft: function(evt){
  return false;
 },
 OnArrowRight: function(evt){
  return false;
 },
 OnEscape: function(evt){
  var isCancelProcessed = this.OnCancelChanges() || this.droppedDown;
  this.HideDropDownArea(true);
  return isCancelProcessed;
 },
 OnEnter: function(evt){
  return false;
 },
 OnTab: function(evt){
  return false;
 },
 RaiseCloseUp: function(){
  if(!this.CloseUp.IsEmpty()){
   var args = new ASPxClientEventArgs();
   this.CloseUp.FireEvent(this, args);
  }
 },
 RaiseDropDown: function(){
  if(!this.DropDown.IsEmpty() && this.isInitialized){
   var args = new ASPxClientEventArgs();
   this.DropDown.FireEvent(this, args);
  }
 },
 AdjustDropDownWindow: function(){
  var pc = this.GetPopupControl();
  if(pc) {
   if(__aspxIE && __aspxBrowserVersion >= 8)
    aspxGetPopupControlCollection().LockWindowResizeByBodyScrollVisibilityChanging();
   pc.AdjustSize();
   pc.UpdatePositionAtElement(this.GetMainElement());
   if(__aspxIE && __aspxBrowserVersion >= 8)
    aspxGetPopupControlCollection().UnlockWindowResizeByBodyScrollVisibilityChanging();
  }
 },
 ResetDropDownSizeCache: function(){
  this.ddHeightCache = __aspxInvalidDimension;
  this.ddWidthCache = __aspxInvalidDimension;
 },
 ShowDropDown: function(){
  this.ShowDropDownArea(false);
 },
 HideDropDown: function(){
  this.HideDropDownArea(false);
 }
});
ASPxClientDropDownEdit = _aspxCreateClass(ASPxClientDropDownEditBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.dropDownWindowHeight = "";
  this.dropDownWindowWidth = "";
  this.allowFocusDropDownWindow = true;
  this.needAdjustControlsInDropDownWindow = true;
 },
 InlineInitialize: function(){
  this.InitSpecialKeyboardHandling();
  ASPxClientDropDownEditBase.prototype.InlineInitialize.call(this);
 },
 RefocusOnClickRequired: function(){
  return __aspxIE;
 },
 BeforePopupControlResizing: function() {
  var divContainer = this.GetDropDownDivContainer();
  if(divContainer && this.needAdjustControlsInDropDownWindow) {
   this.AdjustControlsInDropDownWindow();
   _aspxSetElementDisplay(divContainer, false);
  }
 },
 AfterPopupControlResizing: function() {
  var divContainer = this.GetDropDownDivContainer();
  if(divContainer && this.needAdjustControlsInDropDownWindow) {
   _aspxSetElementDisplay(divContainer, true);
   this.AdjustControlsInDropDownWindow();
   this.needAdjustControlsInDropDownWindow = false;
  }
 },
 AdjustControlsInDropDownWindow: function() {
  var pc = this.GetPopupControl();
  var pcwElement = pc.GetWindowElement(-1);
  aspxGetControlCollection().ProcessControlsInContainer(pcwElement, function(control) {
   control.AdjustControl(false);
  });
 },
 GetDropDownDivContainer: function() {
  return _aspxGetElementById(this.name + __aspxDropDownNameSuffix + "_DDDC");
 },
 GetKeyValueInputElement: function(){
  return _aspxGetElementById(this.name + "KV");
 },
 GetDropDownHeight: function(){
  if(this.dropDownWindowHeight != "")
   return this.dropDownWindowHeight;
  return ASPxClientDropDownEditBase.prototype.GetDropDownHeight.call(this);
 },
 GetDropDownWidth: function(){
  if(this.dropDownWindowWidth != "")
   return this.dropDownWindowWidth;
  return this.GetMainElement().offsetWidth;
 },
 CloseDropDownByDocumentOrWindowEvent: function(causedByWindowResizing){
  if(!aspxGetPopupControlCollection().WindowResizeByBodyScrollVisibilityChangingLocked())
   ASPxClientDropDownEditBase.prototype.CloseDropDownByDocumentOrWindowEvent.call(this, causedByWindowResizing);
 },
 OnBrowserWindowResize: function(evt){
  this.needAdjustControlsInDropDownWindow = true;
 },
 OnEnter: function(evt){
  return this.droppedDown;
 },
 OnEscape: function(evt){
  this.HideDropDownArea(true);
  return this.droppedDown;
 },
 OnTextChanged: function() {
  this.OnValueChanged();
 },
 GetKeyValueInternal: function(){
  var element = this.GetKeyValueInputElement();
  if(element != null && element.value != "")
   return element.value;
  else
   return null;
 },
 SetKeyValueInternal: function(keyValue){
  var element = this.GetKeyValueInputElement();
  if(element != null) element.value = keyValue;
 },
 GetKeyValue: function(){
  return this.GetKeyValueInternal();
 },
 SetKeyValue: function(keyValue){
  this.SetKeyValueInternal(keyValue);
 }
});
ASPxClientDropDownEdit.Cast = ASPxClientControl.Cast;
ASPxClientDropDownCollection = _aspxCreateClass(ASPxClientControlCollection, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
  this.droppedControlName = "";
  this.droppedParentNames = [ ];
  this.focusedControlName = "";
  aspxGetControlCollection().SubscribeObjectToBrowserWindowResize(this);
 },
 SetFocusedDropDownName: function(name){
  this.focusedControlName = name;
 },
 ResetDroppedDownControl: function(){
  this.droppedControlName = "";
 },
 ResetDroppedDownParentCollection: function(startDroppedDownControlName) {
  var regArray = [ ];
  for(var i = 0; i < this.droppedParentNames.length; i++) {
   if(this.droppedParentNames[i] == startDroppedDownControlName)
    break;
   regArray.push(this.droppedParentNames[i]);
  }
  this.droppedParentNames = regArray;
  if(this.droppedParentNames.length > 0) {
   this.droppedControlName = this.droppedParentNames[this.droppedParentNames.length - 1];
   _aspxArrayRemoveAt(this.droppedParentNames, this.droppedParentNames.length - 1);
  }
 },
 ResetFocusedControl: function(){
  this.focusedControlName = "";
 },
 GetFocusedDropDown: function(){
  var control = this.GetDropDownControlInternal(this.focusedControlName);
  if(control == null) this.ResetFocusedControl();
  return control;
 },
 GetDroppedDropDown: function(){
  var control = this.GetDropDownControlInternal(this.droppedControlName);
  if(control == null) this.ResetDroppedDownControl();
  return control;
 },
 GetDroppedDropDownParents: function(startDroppedDownControlName) {
  var dropDownArray = [ ];
  var isNeedGetControl = false;
  for(var i = 0; i < this.droppedParentNames.length; i++) {
   if(this.droppedParentNames[i] == startDroppedDownControlName) isNeedGetControl = true;
   if(isNeedGetControl)
    var control = this.GetDropDownControlInternal(this.droppedParentNames[i]);
    if(control != null)
     dropDownArray.push(control);
  }
  return dropDownArray;
 },
 FindFirstNameForClose: function(newDroppedDownParentArray) {
  var firstNameToClose = newDroppedDownParentArray.length > 0 ? "" : this.droppedParentNames[i];
  for(var i = 0; i < this.droppedParentNames.length; i++) {
   if(_aspxArrayIndexOf(newDroppedDownParentArray, this.Get(this.droppedParentNames[i])) == -1) {
    firstNameToClose = this.droppedParentNames[i];
    break;
   }
  }
  return firstNameToClose;
 },
 GetDropDownControlInternal: function(name){
  var control = this.Get(name);
  var isControlExists = control && control.RenderExistsOnPage();
  if(!isControlExists)
   control = null;
  return control;
 },
 IsDroppedDropDownParentExist: function(name) {
  for(var i = 0; i < this.droppedParentNames.length; i++) {
   if(this.droppedParentNames[i] == name)
    return true;
  }
  return false;
 },
 OnDDButtonMouseMove: function(evt){
  var dropDownControl = this.GetDroppedDropDown();
  if(dropDownControl != null)
   dropDownControl.OnDDButtonMouseMove(evt);
 },
 OnDocumentMouseDown: function(evt){
  this.CloseDropDownByDocumentOrWindowEvent(evt, false);
  this.ClearFocusedDropDownByDocumentEvent(evt);
 },
 OnDocumentMouseUp: function(evt){
  var dropDownControl = this.GetDroppedDropDown();
  if(dropDownControl != null)
   dropDownControl.OnDocumentMouseUp();
 },
 OnBrowserWindowResize: function(evt){
  this.CloseDropDownByDocumentOrWindowEvent(evt, true);
  this.AdjustControls();
 },
 CloseDropDownByDocumentOrWindowEvent: function(evt, causedByWindowResizing){
  var dropDownControl = this.GetDroppedDropDown();
  if(dropDownControl != null && (this.IsEventNotFromControlSelf(evt, dropDownControl) || causedByWindowResizing))
   dropDownControl.CloseDropDownByDocumentOrWindowEvent(causedByWindowResizing);
  var childrenDropDownsToClose = this.GetDroppedDropDownParents(this.droppedParentNames[0]);
  if(childrenDropDownsToClose.length != 0) {
   childrenDropDownsToClose = childrenDropDownsToClose.reverse();
   this.ResetDroppedDownParentCollection(this.droppedParentNames[0]);
   var rollbackDroppedDownNames = [ ];
   for(var c = 0; c < childrenDropDownsToClose.length; c++) {
    if(this.IsEventNotFromControlSelf(evt, childrenDropDownsToClose[c]))
     childrenDropDownsToClose[c].CloseDropDownByDocumentOrWindowEvent(causedByWindowResizing);
    else
     rollbackDroppedDownNames.push(childrenDropDownsToClose[c].name);
   }
   if(rollbackDroppedDownNames != 0) {
    rollbackDroppedDownNames = rollbackDroppedDownNames.reverse();
    this.droppedParentNames = rollbackDroppedDownNames;
   }
  }
 },
 ClearFocusedDropDownByDocumentEvent: function(evt){
  var focusedDropDown = this.GetFocusedDropDown();
  if(focusedDropDown != null && this.IsEventNotFromControlSelf(evt, focusedDropDown))
   this.SetFocusedDropDownName("");  
 },
 AdjustControls: function(){
  this.ForEachControl(function(control) {
   control.AdjustControl(false);
  });
 },
 IsEventNotFromControlSelf: function(evt, control){
  var srcElement = _aspxGetEventSource(evt);
  var mainElement = control.GetMainElement();
  var popupControl = control.GetPopupControl();
  if(!srcElement || !mainElement || !popupControl) return true;
  return (!_aspxGetIsParent(mainElement, srcElement) &&
   !_aspxGetIsParent(popupControl.GetWindowElement(-1), srcElement));
 },
 RegisterDroppedDownControl: function(dropDownControl, droppedDownParentArray){
  var prevDropDownControl = this.GetDroppedDropDown();
  var areDroppedDownsCollectionParents = _aspxArrayIndexOf(droppedDownParentArray, prevDropDownControl) != -1;
  if(prevDropDownControl != null && prevDropDownControl != dropDownControl && !areDroppedDownsCollectionParents)
   prevDropDownControl.OnOpenAnotherDropDown();
  if(this.droppedParentNames.length > 0) {
   var firstDropDownsNameToClose = this.FindFirstNameForClose(droppedDownParentArray);
   if(firstDropDownsNameToClose != "") {
    var childrenDropDownsToClose = this.GetDroppedDropDownParents(firstDropDownsNameToClose);
    this.ResetDroppedDownParentCollection(firstDropDownsNameToClose);
    this.CloseDroppedDownCollection(childrenDropDownsToClose.reverse());
   }
  }
  this.droppedControlName = dropDownControl.name;
  this.droppedParentNames = [ ];
  for(var i = 0; i < droppedDownParentArray.length; i++)
   this.droppedParentNames.push(droppedDownParentArray[i].name);
 },
 UnregisterDroppedDownControl: function(dropDownControl){
  if(this.droppedControlName == dropDownControl.name)
   this.ResetDroppedDownControl();
  if(this.IsDroppedDropDownParentExist(dropDownControl.name)) {
   var prevDropDownControl = this.GetDroppedDropDown();
   if(prevDropDownControl != null)
    prevDropDownControl.OnOpenAnotherDropDown();
   var childrenDropDownsToClose = this.GetDroppedDropDownParents(dropDownControl.name);
   this.ResetDroppedDownParentCollection(dropDownControl.name);
   _aspxArrayRemoveAt(childrenDropDownsToClose, 0);
   this.CloseDroppedDownCollection(childrenDropDownsToClose.reverse());
  }
 },
 CloseDroppedDownCollection: function(dropDownParentArray) {
  for(var c = 0; c < dropDownParentArray.length; c++)
   dropDownParentArray[c].OnOpenAnotherDropDown();
 }
});
ASPxClientDateEdit = _aspxCreateClass(ASPxClientDropDownEditBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.dateFormatter = null;
  this.date = null;
  this.dateOnError = "u";
  this.allowNull = true;
  this.calendarOwnerName = null;
  this.calendarConsumerName = null;
  this.DateChanged = new ASPxClientEvent();
  this.ParseDate = new ASPxClientEvent();
 },
 Initialize: function() {
  if(this.calendarOwnerName == null) {
   var calendar = this.GetCalendar();
   if(calendar) {
    calendar.SelectionChanging.AddHandler(ASPxClientDateEdit.HandleCalendarSelectionChanging);
    calendar.MainElementClick.AddHandler(ASPxClientDateEdit.HandleCalendarMainElementClick);
    if (__aspxNetscapeFamily)
     calendar.GetMainElement().style.borderCollapse = "separate";
   }
  }
  ASPxClientDropDownEditBase.prototype.Initialize.call(this);
 },
 InlineInitialize: function(){
  this.InitSpecialKeyboardHandling();
  ASPxClientDropDownEditBase.prototype.InlineInitialize.call(this);
 },
 ShowDropDownArea: function(isRaiseEvent){
  var cal = this.GetCalendar();
  if(cal)   
   cal.SetValue(this.date);
  cal.forceMouseDown = true;
  __aspxActiveCalendar = cal;
  ASPxClientDateEdit.active = this;
  ASPxClientDropDownEditBase.prototype.ShowDropDownArea.call(this, isRaiseEvent);
  var calendarOwner = this.GetCalendarOwner();
  if(calendarOwner != null)
   calendarOwner.calendarConsumerName = this.name;
  this.calendarConsumerName = null;
 },    
 GetPopupControl: function() { 
  var calendarOwner = this.GetCalendarOwner();
  if(calendarOwner != null)
   return calendarOwner.GetPopupControl();
  return ASPxClientDropDownEditBase.prototype.GetPopupControl.call(this);
 },
 OnPopupControlShown: function() {
  if(this.calendarConsumerName != null)
   aspxGetControlCollection().Get(this.calendarConsumerName).OnPopupControlShown();
  else  
   ASPxClientDropDownEditBase.prototype.OnPopupControlShown.call(this);
 },
 GetCalendar: function() { 
  var name = this.GetDropDownInnerControlName(__aspxCalendarNameSuffix);
  return aspxGetControlCollection().Get(name);
 },
 GetCalendarOwner: function() {
  if(!this.calendarOwnerName)
   return null;
  return aspxGetControlCollection().Get(this.calendarOwnerName);
 },
 GetFormattedDate: function() {
  if(this.maskInfo != null)
   return this.maskInfo.GetValue();
  if(this.date == null)
   return this.focused ? "" : this.nullText;
  return this.dateFormatter.Format(this.date);
 },
 RaiseValueChangedEvent: function() {
  if(!this.isInitialized) return false;
  var processOnServer = ASPxClientEdit.prototype.RaiseValueChangedEvent.call(this);
  processOnServer = this.RaiseDateChanged(processOnServer);
  return processOnServer;
 },
 OnApplyChanges: function(){
  this.OnTextChanged();
 },
 OnCalendarSelectionChanging: function(date, select) {
  if(!this.GetCalendar().isDateChangingByKeyboard) {
   this.HideDropDownArea(true);
   if(date != null)
    this.ApplyExistingTime(date);
   this.ChangeDate(date);
   if(select)
    this.SelectInputElement();
  }
 },
 OnArrowUp: function(evt){ 
  var isProcessed = ASPxClientDropDownEditBase.prototype.OnArrowUp.call(this, evt);
  if(!isProcessed && this.droppedDown)
   return this.GetCalendar().OnArrowUp(evt);       
  return false;
 },
 OnArrowDown: function(evt){
  var isProcessed = ASPxClientDropDownEditBase.prototype.OnArrowDown.call(this, evt);
  if(!isProcessed && this.droppedDown)
   return this.GetCalendar().OnArrowDown(evt);
  return false;
 },
 OnArrowLeft: function(evt){
  if (this.droppedDown) {
   this.GetCalendar().OnArrowLeft(evt);
   return true;
  }
  return false;
 },
 OnArrowRight: function(evt){
  if (this.droppedDown) { 
   this.GetCalendar().OnArrowRight(evt);
   return true;
  }
  return false;
 },
 OnPageUp: function(evt){
  if (this.droppedDown) { 
   this.GetCalendar().OnPageUp(evt);
   return true;
  }
  return false;  
 },
 OnPageDown: function(evt){
  if (this.droppedDown) {
   this.GetCalendar().OnPageDown(evt);
   return true;
  }
  return false;  
 },
 OnEndKeyDown: function(evt) {
  if (this.droppedDown) {
   this.GetCalendar().OnEndKeyDown(evt);
   return true;
  }
  return false;
 },
 OnHomeKeyDown: function(evt) {
  if (this.droppedDown) {
   this.GetCalendar().OnHomeKeyDown(evt);
   return true;
  }
  return false; 
 },
 OnEnter: function() {
  this.enterProcessed = false; 
  if (this.droppedDown) {
   var calendar = this.GetCalendar();
   if (calendar.IsFastNavigationActive()) {
    calendar.GetFastNavigation().OnEnter();
   } else {
    this.OnCalendarSelectionChanging(this.GetCalendar().GetValue(), true);
   }
   this.enterProcessed = true;
  }
  else
   this.OnApplyChanges();
  return this.enterProcessed;
 },
 OnEscape: function() {
  if (this.droppedDown){
   if (this.GetCalendar().IsFastNavigationActive())
    this.GetCalendar().OnEscape();
   else
    this.HideDropDownArea(true);
  } else {
   this.ChangeDate(this.date);  
  }
  return true;
 },
 OnTab: function(evt){
  if(!this.droppedDown) return;
  var calendar = this.GetCalendar();
  if (calendar.IsFastNavigationActive()) 
   calendar.GetFastNavigation().Hide();
  this.OnCalendarSelectionChanging(this.GetCalendar().GetValue(), false);
 },
 ParseValue: function() { 
  this.ParseValueCore(true);
 },
 ParseValueCore: function(raiseChangedEvent) {
  var date;
  if(this.maskInfo != null) {
   date = _aspxMaskDateTimeHelper.GetDate(this.maskInfo);   
  } else {
   var text = this.GetInputElement().value;
   var userParseResult = this.GetUserParsedDate(text);
   if(userParseResult !== false) {
    date = userParseResult;
   } else {
    if(text == null || text == "")
     date = null;
    else
     date = this.dateFormatter.Parse(text);
   }   
  }
  this.ApplyParsedDate(date, raiseChangedEvent);
 },
 GetUserParsedDate: function(text) {
  if(!this.ParseDate.IsEmpty()) {
   var args = new ASPxClientParseDateEventArgs(text);
   this.ParseDate.FireEvent(this, args);
   if(args.handled)
    return args.date;
  }
  return false;
 },
 ApplyParsedDate: function(date, raiseChangedEvent) {
  if(date === false || !this.GetCalendar().IsDateInRange(date)) {
   switch(this.dateOnError) {
    case "n":
     date = null;
     break;
    case "t":
     date = new Date();
     break;
    default:
     date = this.date;
     break;
   }
  }
  if(!this.allowNull && date == null)
   date = this.date;
  if(raiseChangedEvent)
   this.ChangeDate(date);  
  else
   this.SetValue(date);
 },
 ApplyExistingTime: function(date) {
  if(this.date == null)  return;  
  var savedDay = date.getDate();
  date.setHours(this.date.getHours());
  var diff = date.getDate() - savedDay;
  if(diff != 0) {
   var sign = (diff == 1 || date.getDate() == 1) ? -1 : 1;
   date.setTime(date.getTime() + sign * 3600000);
  }
  date.setMinutes(this.date.getMinutes());
  date.setSeconds(this.date.getSeconds());
  date.setMilliseconds(this.date.getMilliseconds());
 },
 GetValue: function() {
  return this.date;
 }, 
 GetValueString: function() {
  return this.date != null ? _aspxGetInvariantDateTimeString(this.date) : null;
 },
 SetValue: function(date) {  
  this.date = date;
  if(this.maskInfo != null) {
   _aspxMaskDateTimeHelper.SetDate(this.maskInfo, date);
   this.ApplyMaskInfo(false);
   this.SavePrevMaskValue();
  } else {
   this.GetInputElement().value = this.GetFormattedDate();
   this.SyncRawInputValue();
   if(this.CanApplyTextDecorators())
    this.ToggleTextDecoration();
  }
  if(this.styleDecoration != null)
   this.styleDecoration.Update();
 },
 ChangeDate: function(date) { 
  var changed = !_aspxAreDatesEqualExact(this.date, date);
  this.SetValue(date);  
  if(changed) {
   this.RaisePersonalStandardValidation();
   this.OnValueChanged();
  }
 },
 GetText: function() {
  return this.GetFormattedDate();
 },
 SetText: function(value) {
  ASPxClientTextEdit.prototype.SetValue.call(this, value);
  if(this.maskInfo == null)
   this.ParseValueCore(false);
 }, 
 ShouldCancelMaskKeyProcessing: function(htmlEvent, keyDownInfo) {
  if(htmlEvent.altKey)
   return true;
  if(ASPxClientDropDownEditBase.prototype.ShouldCancelMaskKeyProcessing.call(this, htmlEvent, keyDownInfo))
   return true;  
  if(!this.droppedDown)
   return false;
  return !_aspxMaskManager.IsPrintableKeyCode(keyDownInfo) 
   && keyDownInfo.keyCode != ASPxKey.Backspace
   && keyDownInfo.keyCode != ASPxKey.Delete;
 },
 DecodeRawInputValue: function(value) {
  if(value == "N") return null;
  var date = new Date();
  date.setTime(Number(value));
  return _aspxToUtcTime(date);
 },
 SyncRawInputValue: function() {
  this.GetRawInputElement().value = this.date == null ? "N" : _aspxToLocalTime(this.date).valueOf();
 }, 
 HasTextDecorators: function() {
  return (this.maskInfo != null && this.date == null) || ASPxClientDropDownEditBase.prototype.HasTextDecorators.call(this);
 },
 GetMaskDisplayText: function() {
  if(!this.focused) {
   if(this.date == null)
    return this.nullText;
   if(this.HasTextDecorators())
    return this.GetDecoratedText(this.date);
  }
  return this.maskInfo.GetText();
 },
 ToggleTextDecorationCore: function() {
  if(this.maskInfo != null) {
   this.ApplyMaskInfo(false);
  } else {
   var text;
   var input = this.GetInputElement();
   if(this.focused) {
    text = this.GetFormattedDate();
   } else {
    if(this.date == null)
     text = this.nullText;
    else if(this.displayFormat != null)
     text = ASPxFormatter.Format(this.displayFormat, this.date);
    else
     text = this.GetFormattedDate();
   }
   if(input.value != text)
    input.value = text;   
  }
 },
 RaiseDateChanged: function(processOnServer) {
  if(!this.DateChanged.IsEmpty()) {
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.DateChanged.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 SetDate: function(date) {
  this.SetValue(date);
 },
 GetDate: function() {
  return this.date ? new Date(this.date.valueOf()) : null;
 },
 GetMinDate: function() {
  var cal = this.GetCalendar();
  if(cal)
   return cal.GetMinDate();
  return null;
 },
 SetMinDate: function(date) {
  var cal = this.GetCalendar();
  if(cal)
   cal.SetMinDate(date);
 },
 GetMaxDate: function() {
  var cal = this.GetCalendar();
  if(cal)
   return cal.GetMaxDate();
  return null;
 },
 SetMaxDate: function(date) {
  var cal = this.GetCalendar();
  if(cal)
   cal.SetMaxDate(date); 
 } 
});
ASPxClientDateEdit.active = null;
ASPxClientDateEdit.HandleCalendarSelectionChanging = function(s, e) {
 if(ASPxClientDateEdit.active == null) return;
 ASPxClientDateEdit.active.OnCalendarSelectionChanging(e.selection.GetFirstDate(), true);
};
ASPxClientDateEdit.HandleCalendarMainElementClick = function(s, e) {
 if(ASPxClientDateEdit.active == null) return;
 ASPxClientDateEdit.active.SetFocus();
};
ASPxClientParseDateEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(value) {
  this.constructor.prototype.constructor.call(this);
  this.value = value;
  this.date = null;
  this.handled = false;
 } 
});
__aspxCCValueInputSuffix = "VI";
ASPxClientComboBoxBase = _aspxCreateClass(ASPxClientDropDownEditBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.lbEventLockCount = 0;
  this.receiveGlobalMouseWheel = false;
  this.listBox = null;
  this.lastSuccessValue = "";
  this.islastSuccessValueInit = false;
  this.SelectedIndexChanged = new ASPxClientEvent();
 },
 Initialize: function(){
  this.InitializeListBoxOwnerName();
  ASPxClientDropDownEditBase.prototype.Initialize.call(this);
  this.InitLastSuccessValue();
 },
 InitializeListBoxOwnerName: function(){
  var lb = this.GetListBoxControl();
  if(lb)
   lb.ownerName = this.name;
 },
 InitLastSuccessValue: function(){
  this.SetLastSuccessValue(this.GetValue());
 },
 SetLastSuccessValue: function(value){
  this.lastSuccessValue = value;
  this.islastSuccessValueInit = true;
 },
 GetDropDownInnerControlName: function(suffix){
  return "";
 },
 GetListBoxControl: function(){
  if(!_aspxIsExistsElement(this.listBox)){
   var name = this.GetDropDownInnerControlName(__aspxListBoxNameSuffix);
   this.listBox = aspxGetControlCollection().Get(name);
  }
  return this.listBox;
 },
 GetCallbackArguments: function(){
  return this.GetListBoxCallbackArguments();
 },
 GetListBoxCallbackArguments: function(){
  var lb = this.GetListBoxControl();
  return lb.GetCallbackArguments();
 },
 SendCallback: function(){
  this.CreateCallback(this.GetCallbackArguments());
 },
 SendSpecialCallback: function(args){
  this.CreateCallback(args);
 },
 SetText: function (text){
  var lb = this.GetListBoxControl();
  var index = this.GetAdjustedSelectedIndexByText(lb, text);
  this.SelectIndex(index, false);
  this.SetTextInternal(text);
  this.SetLastSuccessTest(text);
  this.SetLastSuccessValue(index >= 0 ? lb.GetValue() : text);
 },
 GetValue: function(){
  var value = this.islastSuccessValueInit ? this.lastSuccessValue : this.GetValueInternal();
  if(this.convertEmptyStringToNull && value === "")
   value = null;
  return value;
 },
 GetValueInternal: function(){
  var text = this.GetTextInternal();
  var lb = this.GetListBoxControl();
  if (lb){
   var index = this.GetAdjustedSelectedIndexByText(lb, text);
   lb.SelectIndexSilent(index, false); 
   if(index != -1)
    return lb.GetValue();
  }
  return ASPxClientDropDownEditBase.prototype.GetValue.call(this);
 },
 SetValue: function(value){
  var lb = this.GetListBoxControl();
  lb.SetValue(value);
  var item = lb.GetSelectedItem();
  var text = item ? item.text : value;
  this.OnSelectionChangedCore(text, item, false);
  this.UpdateValueInput();
 },
 GetAdjustedSelectedIndexByText: function(lb, text){
  var lbSelectedItem = lb.GetSelectedItem();
  if(lbSelectedItem != null && lbSelectedItem.text == text)
   return lbSelectedItem.index;
  return this.FindItemIndexByText(lb, text);
 },
 FindItemIndexByText: function(lb, text){
  if (lb)
   return lb.FindItemIndexByText(text);
 },
 CollectionChanged: function(){
 },
 SelectIndex: function(index, initialize){
  var lb = this.GetListBoxControl();
  var isSelectionChanged = lb.SelectIndexSilentAndMakeVisible(index, initialize);
  var item = lb.GetSelectedItem();
  var text = item != null ? item.text : "";
  if(isSelectionChanged)
   this.OnSelectionChangedCore(text, item, false);
  this.UpdateValueInput();
  return isSelectionChanged;
 },
 OnSelectChanged: function(){
  if(this.lbEventLockCount > 0) return;
  var lb = this.GetListBoxControl();
  var item = lb.GetSelectedItem();
  var text = item != null ? item.text : "";
  this.OnSelectionChangedCore(text, item, false);
  if(!this.isToolbarItem)
   this.selectInputAfterRefocus = true;
  this.OnChange();
 },
 OnSelectionChangedCore: function(text, item, canBeRolledBack){
  this.SetTextInternal(text);
  this.ShowItemImage(item);
  if(!canBeRolledBack){
   this.SetLastSuccessTest(text);
   this.SetLastSuccessValue(item != null ? item.value : text);
  }
  if(this.filterStrategy && !canBeRolledBack)
   this.filterStrategy.OnSelectionChanged();
 },
 ShowItemImageByIndex: function(index){
  var item = this.GetItem(index);
  this.ShowItemImage(item);
 },
 ShowItemImage: function(item){
  var imageUrl = item != null ? item.imageUrl : "";
  this.SetSelectedImage(imageUrl);
 },
 GetDropDownImageElement: function(){
  var itemImageCell = this.GetDropDownItemImageCell();
  if(itemImageCell != null)
   return _aspxGetChildByTagName(itemImageCell, "IMG", 0);
  return null;
 },
 SetSelectedImage: function(imageUrl) {
  var imgElement = this.GetDropDownImageElement();
  if(imgElement != null) {
   imageUrl = imageUrl != "" ? imageUrl : window.__aspxEmptyImageUrl;
   imgElement.src = imageUrl;
   if(__aspxIE) {
    this.AdjustControl();
   }
  }
 },
 OnCallback: function(result) {
 },
 OnChange: function(){
  this.UpdateValueInput();
  this.RaisePersonalStandardValidation();
  this.OnValueChanged();
 },
 UpdateValueInput: function() {
 },
 RaiseValueChangedEvent: function() {
  if(!this.isInitialized) return;
  var processOnServer = ASPxClientTextEdit.prototype.RaiseValueChangedEvent.call(this);
  processOnServer = this.RaiseSelectedIndexChanged(processOnServer);
  return processOnServer;
 },
 RaiseSelectedIndexChanged: function(processOnServer) {
  if(!this.SelectedIndexChanged.IsEmpty()){
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.SelectedIndexChanged.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 AddItem: function(text, value, imageUrl){
  var index = this.GetListBoxControl().AddItem(text, value, imageUrl);
  this.CollectionChanged();
  return index;
 },
 InsertItem: function(index, text, value, imageUrl){
  this.GetListBoxControl().InsertItem(index, text, value, imageUrl);
  this.CollectionChanged();
 },
 RemoveItem: function(index){
  this.GetListBoxControl().RemoveItem(index);
  this.CollectionChanged();
 },
 ClearItems: function(){
  this.GetListBoxControl().ClearItems();
  this.ClearItemsInternal();
 },
 BeginUpdate: function(){
   this.GetListBoxControl().BeginUpdate();
 },
 EndUpdate: function(){
  this.GetListBoxControl().EndUpdate();
  this.CollectionChanged();
 },
 MakeItemVisible: function(index){
 },
 GetItem: function(index){
  return this.GetListBoxControl().GetItem(index);
 },
 FindItemByText: function(text){
  return this.GetListBoxControl().FindItemByText(text);
 },
 FindItemByValue: function(value){
  return this.GetListBoxControl().FindItemByValue(value);
 },
 GetItemCount: function(){
  return this.GetListBoxControl().GetItemCount(); 
 },
 GetSelectedIndex: function(){
  return this.GetListBoxControl().GetSelectedIndex();
 },
 SetSelectedIndex: function(index){
  this.SelectIndex(index, false);
 },
 GetSelectedItem: function(){
  var lb = this.GetListBoxControl();
  var index = lb.GetSelectedIndex();
  return lb.GetItem(index);
 },
 SetSelectedItem: function(item){
  var index = (item != null) ? item.index : -1;
  this.SelectIndex(index, false);
 },
 GetText: function(){
  return this.lastSuccessText;
 },
 PerformCallback: function(arg) {
 },
 ClearItemsInternal: function(){
  this.SetValue(null);
  this.CollectionChanged();
 }
});
ASPxClientComboBox = _aspxCreateClass(ASPxClientComboBoxBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.allowMultipleCallbacks = false;
  this.isCallbackMode = false;
  this.isPerformCallback = false;
  this.changeSelectAfterCallback = 0;
  this.incrementalFilteringMode = "None";
  this.filterStrategy = null;
  this.filterTimer = 100;
  this.filterMinLength = 0;
  this.initTextCorrectionRequired = false;
  this.isDropDownListStyle = true;
  this.defaultDropDownHeight = "";
  this.dropDownHeight = "";
  this.dropDownWidth = "";
  this.dropDownRows = 7;
  this.selectInputAfterRefocus = false;
  this.enterKeyPressed = false;
 },
 Initialize: function(){
  var lb = this.GetListBoxControl();
  this.InitializeListBoxOwnerName();
  this.FilterStrategyInitialize();
  var mainElement = this.GetMainElement();
  var input = this.GetInputElement();    
  var ddbutton = this.GetDropDownButton();
  if(this.isDropDownListStyle && __aspxIE){
   _aspxPreventElementDragAndSelect(mainElement, true);
   _aspxPreventElementDragAndSelect(input, true);
   if(ddbutton)
    _aspxPreventElementDragAndSelect(ddbutton, true);
  }
  if(this.isToolbarItem){
   mainElement.unselectable="on";
   input.unselectable="on";
   if(input.offsetParent)
    input.offsetParent.unselectable="on";
   if(ddbutton)
    ddbutton.unselectable="on";
   if(lb){
    var table = lb.GetListTable();
    for(var i = 0; i < table.rows.length; i ++){
     for(var j = 0; j < table.rows[i].cells.length; j ++)
      _aspxSetElementAsUnselectable(table.rows[i].cells[j], true);
    }
   }
  }
  this.RemoveRaisePSValidationFromListBox();
  this.RedirectStandardValidators();
  this.UpdateValueInput();
  this.InitListBoxScrollStyle();
  ASPxClientComboBoxBase.prototype.Initialize.call(this);
 },
 FilterStrategyInitialize: function() {
  if(this.incrementalFilteringMode == "Contains")
   this.filterStrategy = new ASPxContainsFilteringStrategy(this);
  else if(this.incrementalFilteringMode == "StartsWith")
   this.filterStrategy = new ASPxStartsWithFilteringStrategy(this);
  else if(this.incrementalFilteringMode == "None")
   this.filterStrategy = new ASPxComboBoxDisableFilteringStrategy(this);
  else this.filterStrategy = null;
  this.filterStrategy.Initialize();
 },
 InlineInitialize: function(){
  this.InsureInputValueCorrect();
  this.InitSpecialKeyboardHandling();
  ASPxClientComboBoxBase.prototype.InlineInitialize.call(this);
 },
 InsureInputValueCorrect: function(){ 
  if(this.initTextCorrectionRequired){
   var lb = this.GetListBoxControl();
   if(lb){
    var initSelectedIndex = lb.GetSelectedIndexInternal();
    if(initSelectedIndex >= 0){
     var initSelectedText = lb.GetItem(initSelectedIndex).text;
     var input = this.GetInputElement();
     var rawInput = this.GetRawInputElement();
     if(rawInput && rawInput.value != initSelectedText){
      rawInput.value = initSelectedText;
      input.value = this.GetDecoratedText(initSelectedText);
     } else if(input.value != initSelectedText)
      input.value = initSelectedText;
    }
   }
  }
 },
 ChangeEnabledAttributes: function(enabled){
  ASPxClientComboBoxBase.prototype.ChangeEnabledAttributes.call(this, enabled);
  var changeEventsMethod = _aspxChangeEventsMethod(enabled);
  var mainElement = this.GetMainElement();
  if(mainElement)
   changeEventsMethod(mainElement, _aspxGetMouseWheelEventName(), aspxCBMouseWheel);
  var btnElement = this.GetDropDownButton();
  if(btnElement)
   changeEventsMethod(btnElement, "onmousemove", aspxCBDDButtonMMove);
 },
 GetDropDownInnerControlName: function(suffix){
  return ASPxClientDropDownEditBase.prototype.GetDropDownInnerControlName.call(this, suffix);
 },
 AdjustControlCore: function() {
  ASPxClientEdit.prototype.AdjustControlCore.call(this);
  this.ResetDropDownSizeCache();
 },
 RemoveRaisePSValidationFromListBox: function() {
  var listBox = this.GetListBoxControl();
  if (listBox)
   listBox.RaisePersonalStandardValidation = function() { };
 },
 RedirectStandardValidators: function() {
  var valueInput = this.GetValueInput();
  if(_aspxIsExistsElement(valueInput) && valueInput.Validators) {
   for(var i = 0; i < valueInput.Validators.length; i++)
    valueInput.Validators[i].controltovalidate = valueInput.id;
  }
 },
 GetValueInputToValidate: function(){
  return this.GetValueInput();
 },
 GetValueInput: function(){
  return document.getElementById(this.name + "_" + __aspxCCValueInputSuffix);
 },
 GetListBoxScrollDivElement: function(){
  return this.GetListBoxControl().GetScrollDivElement();
 },
 UpdateValueInput: function() {
  var inputElement = this.GetValueInput();
  if(inputElement){
   var value = this.GetValue();
   inputElement.value = value != null ? value : "";
  }
 },
 VisibleCollectionChanged: function(){
  this.CollectionChangedCore();
 },
 CollectionChanged: function(){
  this.CollectionChangedCore();
 },
 CollectionChangedCore: function(byTimer){
  if(this.GetListBoxControl().APILockCount == 0){
   this.UpdateDropDownPositionAndSize();
   if(__aspxIE){ 
    var lb = this.GetListBoxControl();
    var selectedIndex = lb.GetSelectedIndex();
    if(selectedIndex > -1){
     var selectedItemTextCell = lb.GetItemFirstTextCell(selectedIndex);
     var controller = aspxGetStateController();
     controller.DeselectElementBySrcElement(selectedItemTextCell);
     controller.SelectElementBySrcElement(selectedItemTextCell);
    }
   }
  }
 },
 UpdateDropDownPositionAndSize: function(){
  this.InitDropDownSize();
  if(this.droppedDown){
   var pc = this.GetPopupControl();
   var element = this.GetMainElement();
   pc.UpdatePositionAtElement(element);
  }
 },
 InitListBoxScrollStyle: function(){
  this.PreventScrollSpoilDDShowing();
 },
 GetDropDownHeight: function(){
  return (this.ddHeightCache != __aspxInvalidDimension) ? this.ddHeightCache : this.InitListBoxHeight();
 },
 GetDropDownWidth: function(){
  return (this.ddWidthCache != __aspxInvalidDimension && !this.GetIsControlWidthWasChanged()) ? this.ddWidthCache : this.InitListBoxWidth();
 },
 InitDropDownSize: function(){
  if(!this.enabled || this.GetItemCount() == 0) return; 
  var pc = this.GetPopupControl();
  if(pc && this.IsDisplayed()) {
   var pcwElement = pc.GetWindowElement(-1);
   if(_aspxIsExistsElement(pcwElement)){
    var isPcwDisplayed = _aspxGetElementDisplay(pcwElement);
    if(!isPcwDisplayed)
     pc.SetWindowDisplay(-1, true);
    this.ddHeightCache = this.InitListBoxHeight();
    this.ddWidthCache = this.InitListBoxWidth();
    pc.SetSize(this.ddWidthCache, this.ddHeightCache);
    if(!isPcwDisplayed)
     pc.SetWindowDisplay(-1, false);
   }
  }
 },
 InitMainElementCache: function(){
  this.mainElementWidthCache = this.GetMainElement().clientWidth;
 },
 GetVisibleItemCount: function(lb){  
  var lbTable = lb.GetListTable();
  var count = this.GetItemCount();
  var visibleItemCount = 0;
  for(var i = 0; i < count; i ++){
   if(_aspxGetElementDisplay(lbTable.rows[i]))
    visibleItemCount++;
  }
  return visibleItemCount;
 },
 GetDefaultDropDownHeight: function(listHeight, count){
  if(this.defaultDropDownHeight == ""){
   this.defaultDropDownHeight = ((listHeight / count) * this.dropDownRows) + "px";
  }
  return this.defaultDropDownHeight;
 },
 InitListBoxHeight: function(){
  var lbScrollDiv = this.GetListBoxScrollDivElement();
  var height = this.dropDownHeight;
  var lb = this.GetListBoxControl();
  lb.GetMainElement().style.height = "0px";
  var lbHeight = 0;
  if(height == ""){
   var listHeight = lb.GetListTableHeight();
   var count = this.GetVisibleItemCount(lb);
   if(count > this.dropDownRows)
    height = this.GetDefaultDropDownHeight(listHeight, count);
   else
    height = count == 0 ? "0px" : listHeight + "px";
   lbScrollDiv.style.height = height;
   lbHeight = lbScrollDiv.offsetHeight;
  } else {
   var lbMainElement = lb.GetMainElement();
   lbMainElement.style.height = "0px";
   lbScrollDiv.style.height = "0px";
   lbMainElement.style.height = height;
   var trueLbOffsetHeight = lbMainElement.offsetHeight;
   var trueLbClientHeight = lbMainElement.clientHeight;
   lbScrollDiv.style.height = lbMainElement.clientHeight + "px";
   lbHeightCorrection = lbMainElement.offsetHeight - trueLbOffsetHeight;
   lbScrollDiv.style.height = (trueLbClientHeight - lbHeightCorrection) + "px";
   lbHeight = lbMainElement.offsetHeight;
  }
  lb.InitializePageSize();
  return lbHeight;
 },
 InitListBoxWidth: function(){
  this.InitMainElementCache();
  var mainElement = this.GetMainElement();
  var lbScrollDiv = this.GetListBoxScrollDivElement();
  var lb = this.GetListBoxControl();
  var lbMainElement = lb.GetMainElement();
  var lbTable = lb.GetListTable();
  var scrollWidth = 0;
  lbMainElement.style.width = "";
  lbScrollDiv.style.paddingRight = "0px";
  lbScrollDiv.style.width = "100%";
  if(this.dropDownWidth != ""){
   lbMainElement.style.width = this.dropDownWidth;
   var width = lbMainElement.clientWidth;
   var scrollInfo = this.SetLbScrollDivAndCorrectionForScroll(lb, width, false);
   width = scrollInfo.scrollDivWidth;
   scrollWidth = scrollInfo.scrollWidth;
   if(!__aspxIE) {
    var difference = lbTable.offsetWidth - lbScrollDiv.clientWidth;
    if(difference > 0){
     lbMainElement.style.width = (lbMainElement.offsetWidth + difference) + "px";
     lbScrollDiv.style.width = (lbMainElement.clientWidth)  + "px";
    }
   }
  } else {
   var pc = this.GetPopupControl();
   var width = lbTable.offsetWidth;
   var scrollInfo = this.SetLbScrollDivAndCorrectionForScroll(lb, width, true);
   width = scrollInfo.scrollDivWidth;
   scrollWidth = scrollInfo.scrollWidth;
   if(__aspxFirefox && lbMainElement.offsetWidth < lbScrollDiv.offsetWidth)
    lbMainElement.style.width = "0%"; 
   var widthDifference = mainElement.offsetWidth - lbMainElement.offsetWidth;
   if(widthDifference > 0){
    lbScrollDiv.style.width = (width + widthDifference) + "px";
    var twoBorderSize = (lbMainElement.offsetWidth - lbMainElement.clientWidth);
    lbMainElement.style.width = (width + widthDifference + twoBorderSize) + "px"; 
   }
  }
  if(lb.IsMultiColumn())
   lb.CorrectMultiColumnHeaderWidth(scrollWidth);
  return lbScrollDiv.offsetWidth;
 },
 SetLbScrollDivAndCorrectionForScroll: function(lb, width, widthByContent){
  var lbScrollDiv = this.GetListBoxScrollDivElement();
  var scrollWidth = lb.GetVerticalScrollBarWidth();
  var browserPutsScrollBarOnContent = __aspxIE && __aspxBrowserVersion > 5.5 && __aspxBrowserVersion < 8;
  var browserCanHaveScroll = lb.GetVerticalOverflow(lbScrollDiv) == "auto" || this.IsScrollSpoilDDShowing();
  if(browserPutsScrollBarOnContent) {
   width -= scrollWidth;
   lbScrollDiv.style.paddingRight = scrollWidth + "px";
  } else if(widthByContent && browserCanHaveScroll)
   width += scrollWidth;
  lbScrollDiv.style.width = width + "px";
  return {scrollDivWidth: width, scrollWidth: scrollWidth};
 },
 SelectIndexSilent: function(lb, index){
  this.lbEventLockCount ++;
  lb.SelectIndexSilentAndMakeVisible(index);
  this.ShowItemImageByIndex(index);
  this.lbEventLockCount --;
 },
 SelectInputElement: function(){
  var readOnlyBackup = undefined;
  if(__aspxWebKitFamily && this.inputElement.readOnly) {
   readOnlyBackup = this.inputElement.readOnly;
   this.inputElement.readOnly = false;
  }
  ASPxClientButtonEditBase.prototype.SelectInputElement.call(this);
  if(readOnlyBackup != undefined)
   this.inputElement.readOnly = readOnlyBackup;
 },
 GetDecoratedText: function(value){
  var selectedItem = this.GetSelectedItem();
  var lb = this.GetListBoxControl();
  if(this.displayFormat != null && lb.IsMultiColumn() && selectedItem != null){
   var textColumnCount = lb.GetItemTextCellCount();
   var texts = [textColumnCount];
   for(var i = 0; i < textColumnCount; i++){
    texts[i] = selectedItem.GetColumnTextByIndex(i)
   }
   return ASPxFormatter.Format(this.displayFormat, texts);
  } else
   return ASPxClientComboBoxBase.prototype.GetDecoratedText.call(this, value);
 },
 ShowDropDownArea: function(isRaiseEvent){
  var lb = this.GetListBoxControl();
  if(!lb || lb.GetItemCount() == 0) 
   return;
  if(!this.filterStrategy.IsShowDropDownAllowed()) {
   this.DropDownButtonPop(true); 
   return;
  }
  ASPxClientDropDownEditBase.prototype.ShowDropDownArea.call(this, isRaiseEvent);
  var rawText = this.GetTextInternal();
  var lbItem = lb.GetSelectedItem();
  var lbText = lbItem != null ? lbItem.text : "";
  if(rawText != lbText && rawText != null && lbText != ""){
   var newSelectedIndex = this.GetAdjustedSelectedIndexByText(lb, rawText);
   lb.SelectIndexSilent(newSelectedIndex, false);
  }
  this.EnsureSelectedItemVisibleOnShow(lb);
  lb.CallbackSpaceInit();
 },
 FireFoxRequiresCacheScrollBar: function(){
  return __aspxFirefox && __aspxBrowserVersion >= 3.6; 
 },
 BrowserRequiresCacheScrollBar: function(){
  return __aspxWebKitFamily || __aspxOpera || this.FireFoxRequiresCacheScrollBar(); 
 },
 HideDropDownArea: function(isRaiseEvent){
  if(this.filterStrategy)
   this.filterStrategy.OnBeforeHideDropDownArea();
  if(this.BrowserRequiresCacheScrollBar())
   this.CachedScrollTop();
  ASPxClientDropDownEditBase.prototype.HideDropDownArea.call(this, isRaiseEvent);
  this.PreventScrollSpoilDDShowing();
 },
 EnsureSelectedItemVisibleOnShow: function(listBox){
  if(this.BrowserRequiresCacheScrollBar()) 
   listBox.RestoreScrollTopFromCache();
  listBox.EnsureSelectedItemVisible();
 },
 CachedScrollTop: function(){
  this.GetListBoxControl().CachedScrollTop();
  if(this.BrowserRequiresCacheScrollBar()){ 
   var scrollDiv = this.GetListBoxScrollDivElement();
   if(scrollDiv != null)
    scrollDiv.scrollTop = 0;
  }
 },
 IsScrollSpoilDDShowing: function (){
  var pc = this.GetPopupControl();
  return (__aspxNetscapeFamily && pc.enableAnimation); 
 },
 EnableLBDivOverflow: function(){
  var divElement = this.GetListBoxScrollDivElement();
  divElement.style.overflow = "auto";
 },
 DisableLBDivOverflow: function(){
  var divElement = this.GetListBoxScrollDivElement();
  divElement.style.overflow = "hidden";
 },
 PreventScrollSpoilDDShowing: function(){
  if(this.IsScrollSpoilDDShowing())
   this.DisableLBDivOverflow();
 },
 IsFilterEnabled: function() {
  return this.incrementalFilteringMode != "None";
 },
 ChangeInputEnabled: function(element, enabled, readOnly){
  ASPxClientTextEdit.prototype.ChangeInputEnabled.call(this, element, enabled, readOnly || (this.isDropDownListStyle && !this.IsFilterEnabled()));
 },
 GetCallbackArguments: function(){
  var args = ASPxClientComboBoxBase.prototype.GetCallbackArguments.call(this);
  args += this.GetCallbackArgumentsInternal();
  return args;
 },
 GetCallbackArgumentsInternal: function(){
  var args = "";
  args = this.filterStrategy.GetCallbackArguments();
  return args;
 },
 ShowLoadingPanel: function() { 
  var lb = this.GetListBoxControl();
  var loadingParentElement = lb.GetScrollDivElement().parentNode;
  if(!this.loadingDivElement)
   this.CreateLoadingDiv(loadingParentElement);
  if(!this.loadingPanelElement)
   this.CreateLoadingPanelWithAbsolutePosition(loadingParentElement, loadingParentElement);
 },
 HideLoadingPanelOnCallback: function(){
  return false;
 },
 OnCallback: function(result) {
  if(this.filterStrategy.IsCallbackResultNotDiscarded()) {
   this.OnCallbackBeforeListBox();
   this.GetListBoxControl().OnCallback(result);
   this.OnCallbackInternal(result);
   this.OnCallbackFinally(true);
  }
 },
 DoEndCallback: function(){
  this.filterStrategy.BeforeDoEndCallback();
  ASPxClientDropDownEditBase.prototype.DoEndCallback.call(this); 
  this.filterStrategy.AfterDoEndCallback(); 
 },
 RaiseEndCallback: function(){
  if(this.preventEndCallbackRising)
   this.preventEndCallbackRising = false;
  else
   ASPxClientDropDownEditBase.prototype.RaiseEndCallback.call(this);
 },
 OnCallbackError: function(result, data){
  this.GetListBoxControl().OnCallbackError(result);
  this.OnCallbackFinally(false);
 },
 OnCallbackFinally: function(isSuccessful){
  this.filterStrategy.OnBeforeCallbackFinally();
  this.CollectionChanged();
  this.HideLoadingDiv();
  this.HideLoadingPanel();
  this.isPerformCallback = false;
  this.changeSelectAfterCallback = 0;
  if(isSuccessful)
   this.filterStrategy.OnAfterCallbackFinally();
 },
 OnCallbackBeforeListBox: function(){
  var lb = this.GetListBoxControl();
  this.changeSelectAfterCallback = lb.changeSelectAfterCallback;
 },
 OnCallbackCorrectSelectedIndex: function(){
  var lb = this.GetListBoxControl();
  if(this.changeSelectAfterCallback != 0)
   this.SetTextInternal(lb.GetSelectedItem().text);
 },
 OnCallbackInternal: function(result){
  this.OnCallbackCorrectSelectedIndex();
  if(this.isPerformCallback) {
   var lb = this.GetListBoxControl();
   var resultIsEmpty = lb.GetItemCount() == 0;
   if(resultIsEmpty)
    this.HideDropDownArea(true);
   else if(this.isDropDownListStyle)
     this.SelectIndex(0); 
  } 
  this.filterStrategy.OnCallbackInternal(result);
 },
 IsDropDownButtonClick: function(evt) {
  return _aspxGetIsParent(this.GetDropDownButton(), _aspxGetEventSource(evt));
 },
 OnDropDown: function(evt) {
  var returnValue = ASPxClientDropDownEditBase.prototype.OnDropDown.call(this, evt);
  if(this.IsDropDownButtonClick(evt)) {
   this.OnDropDownButtonClick();
   return returnValue;
  }
  return true;
 },
 OnDropDownButtonClick: function() {
  this.selectInputAfterRefocus = true;
  if(this.filterStrategy != null)
   this.filterStrategy.OnDropDownButtonClick();     
  this.ForceRefocusEditor();
 },
 SendCallback: function(){
  if(!this.pcIsShowingNow)
   this.ShowLoadingPanel();
  ASPxClientComboBoxBase.prototype.SendCallback.call(this);
 },
 SelectNeighbour: function (step){
  if(this.isToolBarItem && !this.droppedDown) return;
  var lb = this.GetListBoxControl();
  var step = this.filterStrategy.GetStepForClientFiltrationEnabled(lb, step);
  this.SelectNeighbourInternal(lb, step);
 },
 SelectNeighbourInternal: function(lb, step){
  if(this.droppedDown)
   this.lbEventLockCount ++;
  lb.SelectNeighbour(step);
  if(this.droppedDown){
   var selectedItem = lb.GetSelectedItem();
   this.OnSelectionChangedCore(selectedItem.text, selectedItem, true);
   this.lbEventLockCount --;
  } 
 },
 SetFocus: function() {
  ASPxClientEdit.prototype.SetFocus.call(this);
  if(this.selectInputAfterRefocus) {
   this.SelectInputElement(); 
   this.selectInputAfterRefocus = false;
  }
 },
 OnSpecialKeyDown: function(evt){
  if(this.filterStrategy)
   this.filterStrategy.OnSpecialKeyDown(evt);
  return ASPxClientEdit.prototype.OnSpecialKeyDown.call(this, evt);
 },
 OnArrowUp: function(evt){
  if(!this.isInitialized) return true;
  var isProcessed = ASPxClientDropDownEditBase.prototype.OnArrowUp.call(this, evt);
  if (!isProcessed)
   this.SelectNeighbour(-1);
  return true;
 },
 OnTextChanged: function(){
  if(!this.IsFocusEventsLocked())
   ASPxClientComboBoxBase.prototype.OnTextChanged.call(this);
 },
 OnTextChangedInternal: function() {
  if(this.filterStrategy.IsFilterMeetRequirementForMinLength()) {
   ASPxClientComboBoxBase.prototype.OnTextChangedInternal.call(this);
   this.filterStrategy.OnTextChanged();
  }
 },
 OnArrowDown: function(evt){
  if(!this.isInitialized) return true;
  var isProcessed = ASPxClientDropDownEditBase.prototype.OnArrowDown.call(this, evt);
  if (!isProcessed)
   this.SelectNeighbour(1);
  return true;
 },
 OnPageUp: function(){
  if(!this.isInitialized) return true;
  return this.OnPageButtonDown(false);
 },
 OnPageDown: function(){
  if(!this.isInitialized) return true;
  return this.OnPageButtonDown(true);
 },
 OnPageButtonDown: function(isDown){
  if(!this.isInitialized) return true;
  var lb = this.GetListBoxControl();
  if(lb){
   var direction = isDown ? 1 : -1;
   this.SelectNeighbour(lb.scrollPageSize * direction);
  }
  return true;
 },
 OnHomeKeyDown: function(evt){
  if(!this.isInitialized) return true;
  return this.OnHomeEndKeyDown(evt, true);
 },
 OnEndKeyDown: function(evt){
  if(!this.isInitialized) return true;
  return this.OnHomeEndKeyDown(evt, false);
 },
 OnHomeEndKeyDown: function(evt, isHome){
  if(!this.isInitialized) return true;
  var input = this.GetValueInput();
  if(input.readOnly || evt.ctrlKey){
   var lb = this.GetListBoxControl();
   var count = lb.GetItemCount();
   this.SelectNeighbour(isHome ? -count : count);
   return true;
  }
  return false;
 },
 OnEscape: function() {
  this.filterStrategy.OnEscape();
  ASPxClientComboBoxBase.prototype.OnEscape.call(this);
 },
 OnEnter: function(){
  if(!this.isInitialized) return true;
  if(this.isDropDownListStyle) this.enterKeyPressed = true;
  if(this.filterStrategy.IsCloseByEnterLocked()) return;
  this.enterProcessed = this.droppedDown; 
  if(!this.isEnterLocked) { 
   this.OnApplyChangesAndCloseWithEvents();
   this.filterStrategy.OnAfterEnter();
  }
  return this.enterProcessed;
 },
 OnTab: function(evt){
  if(!this.isInitialized) 
   return true;
  this.filterStrategy.OnTab();
 },
 OnApplyChanges: function(){
  if(!this.focused || (this.isDropDownListStyle && !this.IsFilterEnabled())) return;
  this.OnApplyChangesInternal();
 },
 OnApplyChangesAndCloseWithEvents: function(){
  this.OnApplyChangesInternal();
  this.HideDropDownArea(true);
 },
 OnApplyChangesInternal: function(){
  var text = this.GetInputElement().value;
  var isChanged = this.lastSuccessText != text;
  if(isChanged){
   var lb = this.GetListBoxControl();
   if(this.isDropDownListStyle && this.GetAdjustedSelectedIndexByText(lb, text) < 0){
    var lbItem = lb.GetSelectedItem();
    text = lbItem != null ? lbItem.text : this.lastSuccessText;
   }
   this.SetText(text);
   this.OnChange();
   this.filterStrategy.OnApplyChanges(); 
  } 
 },
 OnButtonClick: function(number){
  if(number != this.dropDownButtonIndex){
   this.HideDropDownArea(true);
  }
  ASPxClientButtonEditBase.prototype.OnButtonClick.call(this, number);
 },
 OnCancelChanges: function(){
  var isCancelProcessed = ASPxClientDropDownEditBase.prototype.OnCancelChanges.call(this);
  this.filterStrategy.OnCancelChanges();
  var lb = this.GetListBoxControl();
  var index = this.GetAdjustedSelectedIndexByText(lb, this.lastSuccessText);
  this.SelectIndexSilent(lb, index);
  return isCancelProcessed;
 },
 OnCloseUp: function(evt){
  var evt = _aspxGetEvent(evt);
  var scrollDiv = this.GetListBoxControl().GetScrollDivElement();
  var scrollDivID = scrollDiv ? scrollDiv.id : "";
  if(__aspxFirefox && evt.type == "mouseup" && 
   (_aspxGetEventSource(evt).tagName == "DIV" && scrollDivID == _aspxGetEventSource(evt).id)) 
   return;
  ASPxClientDropDownEditBase.prototype.OnCloseUp.call(this, evt);
 },
 OnDDButtonMouseMove: function(evt){
  return (this.droppedDown ? _aspxCancelBubble(evt) : true);
 },
 CloseDropDownByDocumentOrWindowEvent: function(causedByWindowResizing){
  this.OnApplyChangesInternal();
  ASPxClientDropDownEditBase.prototype.CloseDropDownByDocumentOrWindowEvent.call(this, causedByWindowResizing);
 },
 IsCanToDropDown: function(){
  return (this.GetListBoxControl().GetItemCount() > 0);
 },
 OnPopupControlShown: function(){
  if(!this.isInitialized) return;
  if(__aspxOpera) 
   this.GetListBoxControl().RestoreScrollTopFromCache();
  if(this.IsScrollSpoilDDShowing())
   _aspxSetTimeout("aspxCBMozillaOverflowOn(\"" + this.name + "\")", 100);
  if(this.lockListBoxClick)
   delete this.lockListBoxClick;
  if(this.InCallback()) this.ShowLoadingPanel();
  ASPxClientDropDownEditBase.prototype.OnPopupControlShown.call(this);
 },
 OnLBSelectedIndexChanged: function(){
  if(!this.lockListBoxClick) {
   this.OnSelectChanged();
   if(this.IsNavigationOnKeyPress()){
    if(this.selectInputAfterRefocus) {
     this.SelectInputElement();
     this.selectInputAfterRefocus = false;
    }
   } else
    this.ForceRefocusEditor();
  }
 },
 IsNavigationOnKeyPress: function() {
  var lb = this.GetListBoxControl();
  return lb.IsScrollOnKBNavigationLocked();
 },
 OnListBoxItemMouseUp: function(evt){
  if(!this.lockListBoxClick && !this.InCallback()){
   this.OnApplyChangesInternal();
   this.OnCloseUp(evt);
  }
 },
 OnMouseWheel: function(evt){
  if(this.allowMouseWheel && !this.droppedDown){
   var wheelDelta = _aspxGetWheelDelta(evt);
   if(wheelDelta > 0)
    this.SelectNeighbour(-1);
   else  if(wheelDelta < 0)
    this.SelectNeighbour(1);
   return _aspxPreventEvent(evt);
  }
 },
 OnOpenAnotherDropDown: function(){
  this.OnApplyChangesAndCloseWithEvents();
 },
 ParseValue: function() {
  var newText = this.GetInputElement().value;
  var oldText = this.GetText();
  if(oldText != newText){
   if(this.CanTextBeAccepted(newText, oldText)){
    this.SetText(newText);
    this.OnChange();
   } else
    this.SetTextInternal(oldText);
  }
 },
 CanTextBeAccepted: function(newText, oldText){
  var notAnyTextCanBeAccepted = this.isDropDownListStyle;
  if(notAnyTextCanBeAccepted){
   var lb = this.GetListBoxControl();
   var newTextPresentInItemCollection = this.GetAdjustedSelectedIndexByText(lb, newText) != -1;
   return newTextPresentInItemCollection;
  }
  return true;
 },
 MakeItemVisible: function(index){
  var lb = this.GetListBoxControl();
  lb.MakeItemVisible(index);
 },
 PerformCallback: function(arg) {
  this.isPerformCallback = true;
  this.filterStrategy.PerformCallback();
  this.ClearItemsInternal();
  this.GetListBoxControl().PerformCallback(arg);
 },
 ClearItemsInternal: function(){
  ASPxClientComboBoxBase.prototype.ClearItemsInternal.call(this);
  var lbScrollDiv = this.GetListBoxScrollDivElement();
  if(lbScrollDiv)
   lbScrollDiv.scrollTop = "0px";
 }
});
ASPxClientComboBox.Cast = ASPxClientControl.Cast;
ASPxComboBoxDisableFilteringStrategy = _aspxCreateClass(null, {
 constructor: function(comboBox) {
  this.comboBox = comboBox;
  this.isDropDownListStyle = this.comboBox.isDropDownListStyle;
  this.isApplyAndCloseAfterFiltration = false;
 },
 Initialize: function() {},
 AfterDoEndCallback: function() {},
 BeforeDoEndCallback: function() {},
 IsCallbackResultNotDiscarded: function() { return true; },
 IsCloseByEnterLocked: function() { return false; },
 OnAfterCallbackFinally: function() {
  if(this.isApplyAndCloseAfterFiltration){
   this.comboBox.OnApplyChangesAndCloseWithEvents();
   this.isApplyAndCloseAfterFiltration = false;
  }
 },
 OnAfterEnter: function() {}, 
 OnApplyChanges: function() {},
 OnBeforeCallbackFinally: function() {},
 OnBeforeHideDropDownArea: function() {},
 OnCallbackInternal: function(result) {},
 OnCancelChanges: function() {},
 OnDropDownButtonClick: function() {},
 OnEscape: function() {},
 OnFilteringKeyUp: function(evt) {},
 OnSelectionChanged: function() {},
 OnSpecialKeyDown: function(evt) {},
 OnTab: function() {
  if(this.comboBox.InCallback())
   this.isApplyAndCloseAfterFiltration = true;
  else
   this.comboBox.OnApplyChangesAndCloseWithEvents();
 },
 OnTextChanged: function() {},
 PerformCallback: function() {},
 GetCallbackArguments: function() { return ""; },
 GetInputElement: function() {
  return this.comboBox.GetInputElement();
 },
 GetListBoxControl: function() {
  return this.comboBox.GetListBoxControl();
 },
 GetStepForClientFiltrationEnabled: function(lb, step) {
  return step; 
 },
 IsFilterMeetRequirementForMinLength: function() {
  return true;   
 },
 IsShowDropDownAllowed: function() {
  return this.IsFilterMeetRequirementForMinLength();
 }
});
ASPxComboBoxIncrementalFilteringStrategy = _aspxCreateClass(ASPxComboBoxDisableFilteringStrategy, {
 constructor: function(comboBox) {
  this.constructor.prototype.constructor.call(this, comboBox);
  this.currentCallbackIsFiltration = false;
  this.refiltrationRequired = false;
  this.isEnterLocked = false;
  this.isLastFilteredKeyWasTab = false; 
  this.filter = "";
  this.filterInitialized = false;
  this.filterTimerId = -1;
  this.filterTimer = comboBox.filterTimer;
 },
 Initialize: function() {
   var input = this.GetInputElement();
   _aspxAttachEventToElement(input, "keyup", aspxCBKeyUp);
 },
 ClearFilter: function() {
  this.filter = "";
  this.filterInitialized = false;
 },
 SetFilter: function(value){
  this.filter = value;
  this.filterInitialized = true;
 },
 FilterCompare: function(value){
  if(!this.filterInitialized)
   return false;
  return this.filter == value;
 },
 FilterCompareLower: function(value){
  if(!this.filterInitialized)
   return false;
  return this.filter.toLowerCase() == value;
 },
 OnCallbackInternal: function(result){
  if(!this.currentCallbackIsFiltration)
   return;
  var lb = this.GetListBoxControl();
  if(lb.GetItemCount() == 0)
   this.comboBox.HideDropDownArea(true);
  else 
   this.OnFilterCallbackWithResult(lb);  
  this.isEnterLocked = false;
 },
 OnBeforeCallbackFinally: function() {
  this.currentCallbackIsFiltration = false;
 },
 OnEndFiltering: function(visibleCollectionChanged) {
  if(visibleCollectionChanged) 
   this.comboBox.VisibleCollectionChanged();
 },
 OnFilteringKeyUp: function(evt){
  if(this.comboBox.InCallback() || !this.comboBox.enabled) return;
  if(ASPxFilteringUtils.EventKeyCodeChangesTheInput(evt)){
   this.FilterStopTimer();
   var input = this.GetInputElement();
   var newFilter = input.value.toLowerCase();
   if(evt.keyCode == ASPxKey.Backspace && _aspxHasInputSelection(input) && this.FilterCompareLower(newFilter))
    this.FilteringBackspace();
   else
    this.FilterStartTimer();
  }
 },
 OnFilterCallbackHighlightAndSelect: function(lb){
  var firstItemText = lb.GetItem(0).text;
  var isTextClearing = !this.isDropDownListStyle && this.FilterCompare("") && !this.FilterCompare(firstItemText);
  if(!isTextClearing){
   var isFilterRollBack = this.CheckForFilterRollback(lb, firstItemText);
   var isNonFilterChangingCallback = (lb.GetSelectedItem() == null);
   if(isFilterRollBack || isNonFilterChangingCallback) {
    if(this.isLastFilteredKeyWasTab){
     this.isLastFilteredKeyWasTab = false;
     this.comboBox.SelectIndex(0);
     this.comboBox.OnChange(); 
    } else 
     this.HighlightTextAfterCallback(firstItemText);
   }
  }
 },
 OnFilterCallbackWithResult: function(lb) {
  this.OnFilterCallbackHighlightAndSelect(lb);
  var isNeedToKeepDropDownVisible = !this.comboBox.isPerformCallback && !this.isLastFilteredKeyWasTab;
  if(isNeedToKeepDropDownVisible)
   this.EnsureShowDropDownArea();
  this.OnEndFiltering();
 },
 OnSpecialKeyDown: function(evt) {
  if(ASPxFilteringUtils.EventKeyCodeChangesTheInput(evt))
    this.FilterStopTimer();
 },
 AfterDoEndCallback: function() {
  if(this.refiltrationRequired){
   this.refiltrationRequired = false;
   _aspxSetTimeout("aspxCBFilterByTimer('" + this.comboBox.name + "')", 0);
  }
 },
 BeforeDoEndCallback: function() {
  if(this.refiltrationRequired)
   this.comboBox.preventEndCallbackRising = true;
 },
 GetCallbackArguments: function() { 
  var args = "";
  if(!this.FilterCompare(""))
   args = this.GetCallbackArgumentFilter(this.filter);
  return args;
 }, 
 GetCallbackArgumentFilter: function(value){
  var callbackPrefix = this.isDropDownListStyle ? __aspxCorrectFilterCallbackPrefix : __aspxLoadFilteredItemsCallbackPrefix;
  return ASPxFilteringUtils.FormatCallbackArg(callbackPrefix, value);
 },
 PerformCallback: function() {
   this.ClearFilter();
 },
 SendFilteringCallback: function(){
  this.currentCallbackIsFiltration = true;
  this.comboBox.SendCallback();
 },
 IsCallbackResultNotDiscarded: function(){
  var result = !this.FilterChanged() || !this.currentCallbackIsFiltration;
  if(!result)
    this.refiltrationRequired = true;
  return result;
 },
 IsFilterTimerActive: function() {
  return (this.filterTimerId != -1);
 },
 FilterStopTimer: function() {
  this.filterTimerId = _aspxClearTimer(this.filterTimerId);
 },
 FilterStartTimer: function(){
  this.isEnterLocked = true;
  this.filterTimerId = _aspxSetTimeout("aspxCBFilterByTimer('" + this.comboBox.name + "')", this.filterTimer);
 },
 CheckForFilterRollback: function(lb, firstItemText){
  var isHasCorrection = false;
  var filter = this.filter.toLowerCase();
  firstItemText = firstItemText.toLowerCase();
  while(!this.IsSatisfy(firstItemText.toLowerCase(), filter)){
   filter = filter.slice(0, -1);
   isHasCorrection = true;
  }
  if(isHasCorrection){
   this.SetFilter(this.filter.substring(0, filter.length));
   this.GetInputElement().value = this.filter;
  } 
  return isHasCorrection;
 },
 EnsureShowDropDownArea: function(){
  if(!this.comboBox.droppedDown && !this.isApplyAndCloseAfterFiltration)
   this.comboBox.ShowDropDownArea(true);
 },
 FilterChanged: function(){
  return !this.FilterCompareLower(this.GetInputElement().value.toLowerCase());
 },
 FilteringStop: function(){
  this.isEnterLocked = false;
  if(!this.comboBox.isCallbackMode)
   this.FilteringStopClient();
 },
 FilteringStopClient: function(){
  var lb = this.GetListBoxControl();
  var listTable = lb.GetListTable();
  var count = lb.GetItemCount();
  for(var i = 0; i < count; i ++)
   _aspxSetElementDisplay(listTable.rows[i], true);
  this.comboBox.VisibleCollectionChanged();
  this.ClearFilter();
 },
 FilteringBackspace: function(){
  var input = this.GetInputElement();
  ASPxStartWithFilteringUtils.RollbackOneSuggestedChar(input);
  this.FilterStartTimer();
 },
 CheckFilterLength: function() {
  if(!this.IsFilterMeetRequirementForMinLength()) {
   this.comboBox.HideDropDownArea(true);
   var lb = this.GetListBoxControl();
   this.isApplyAndCloseAfterFiltration = false;
   lb.SelectIndex(-1, false); 
   return true;
  }
  return false;
 },
 Filtering: function(){
  this.FilterStopTimer();
  var input = this.GetInputElement();
  var newFilter = input.value;
  if(!this.FilterCompare(newFilter)){
   this.SetFilter(newFilter);
   if(this.CheckFilterLength())
    return;
   this.EnsureShowDropDownArea();
   if(this.comboBox.isCallbackMode)
    this.FilteringOnServer();
   else {
    this.FilteringOnClient(input); 
    this.isApplyAndCloseAfterFiltration = false;
   }
  } else {
   this.isEnterLocked = false;
   this.isApplyAndCloseAfterFiltration = false;
  }
 },
 FilteringOnServer: function(){
  if(!this.comboBox.InCallback()){
   var listBox = this.GetListBoxControl();
   listBox.ClearItems(); 
   listBox.serverIndexOfFirstItem = 0;
   listBox.SetScrollSpacerVisibility(true, false);
   listBox.SetScrollSpacerVisibility(false, false);
   this.SendFilteringCallback();
  }
 },
 FilteringOnClient: function (input) {
  var filter = this.filter.toLowerCase();
  var lb = this.GetListBoxControl();
  var listTable = lb.GetListTable();
  var count = lb.GetItemCount();
  var text = "";
  var isSatisfy = false;
  var firstSatisfyItemIndex = -1;
  if(this.isDropDownListStyle){
   var coincide = new Array(count);
   var maxCoincide = 0;
   for(var i = count - 1; i >= 0; i--){
    coincide[i] = this.GetCoincideCharCount(lb.GetItem(i).text.toLowerCase(), filter);
    if(coincide[i] > maxCoincide)
     maxCoincide = coincide[i];
   }
   filter = this.filter.substr(0, maxCoincide);
   input.value = filter;
  }
  for(var i = 0; i < count; i ++){
   text = lb.GetItem(i).text; 
   if(this.isDropDownListStyle) isSatisfy = coincide[i] == maxCoincide;
   else isSatisfy = this.IsSatisfy(text, filter);
   _aspxSetElementDisplay(listTable.rows[i], isSatisfy);
   if(firstSatisfyItemIndex == -1 && isSatisfy) {
    var isTextClearing = !this.isDropDownListStyle && this.FilterCompare("") && this.filter != text;
    this.OnFirstSatisfiedItemFound(i, text, isTextClearing);
    firstSatisfyItemIndex = i;
   }
  }
  if(this.isDropDownListStyle)
   this.SetFilter(filter);
  var visibleCollectionChanged = firstSatisfyItemIndex != -1;
  if(visibleCollectionChanged)
   lb.CopyCellWidths(0, firstSatisfyItemIndex);  
  else 
   this.comboBox.HideDropDownArea(true);
  this.isEnterLocked = false;
  this.OnEndFiltering(visibleCollectionChanged);
 },
 GetFirstVisibleItem: function(lb, listTable) {
  var itemCount = lb.GetItemCount();
  for(var i = 0; i < itemCount; i++)
   if(_aspxGetElementDisplay(listTable.rows[i]))
    return i;
  return -1;
 },
 GetVisibleItemsCount: function() {
  var lb = this.GetListBoxControl();
  var listTable = lb.GetListTable();
  var itemCount = lb.GetItemCount();
  var visibleItemCount = 0;
  for(var i = 0; i < itemCount; i++)
   if(_aspxGetElementDisplay(listTable.rows[i]))
    visibleItemCount++;
  return visibleItemCount;   
 },
 IsSelectedElementVisible: function(listTable, selectedIndex) {
  return _aspxGetElementDisplay(listTable.rows[selectedIndex]);
 },
 GetStepForClientFiltrationEnabled: function(lb, step) {
  if(this.comboBox.isCallbackMode) return step;
  var listTable = lb.GetListTable();
  var startIndex = this.comboBox.GetSelectedIndex();
  var firstVisibleElementIndex = this.GetFirstVisibleItem(lb, listTable);
  if(startIndex > -1) {
   if(!this.IsSelectedElementVisible(listTable, startIndex))
    return firstVisibleElementIndex - startIndex;
  } else return firstVisibleElementIndex + 1;
  var stepDirection = step > 0 ? 1 : -1;
  var count = lb.GetItemCount();
  var needVisibleItemCount = Math.abs(step);
  var outermostVisibleIndex = startIndex;
  for(var index = startIndex + stepDirection; needVisibleItemCount > 0; index += stepDirection){
   if(index < 0 || count <= index) break;
   if(_aspxGetElementDisplay(listTable.rows[index])) {
    outermostVisibleIndex = index;
    needVisibleItemCount--;
   }
  }
  step = outermostVisibleIndex - this.comboBox.GetSelectedIndex();
  return step;
 },
 GetCoincideCharCount: function(text, filter) {
  while(filter != "" && !this.IsSatisfy(text, filter)) {
   filter = filter.slice(0, -1);
  }
  return filter.length;
 },
 OnSelectionChanged: function() {
  this.ClearFilter();
 },
 IsFilterMeetRequirementForMinLength: function() {
  var inputElement = this.GetInputElement();
  var isFilterExists = inputElement && (inputElement.value || inputElement.value == "");
  return isFilterExists ? inputElement.value.length >= this.comboBox.filterMinLength : true;
 },
 IsSatisfy: function(text, filter) {},
 OnFirstSatisfiedItemFound: function(index, text, isTextClearing) {},   
 HighlightTextAfterCallback: function() {}
});
ASPxContainsFilteringStrategy = _aspxCreateClass(ASPxComboBoxIncrementalFilteringStrategy, {
 constructor: function(comboBox) {
  this.constructor.prototype.constructor.call(this, comboBox);
 },
 CheckForFilterRollback: function(lb, firstItemText) {
  return this.isDropDownListStyle ? 
   ASPxComboBoxIncrementalFilteringStrategy.prototype.CheckForFilterRollback.call(this, lb, firstItemText) : false;
 },
 IsSatisfy: function(text, filter) {
  return text.toLowerCase().indexOf(filter) != -1;
 },
 IsCloseByEnterLocked: function() {
  if(this.isDropDownListStyle) {
   if(this.GetVisibleItemsCount() == 1) return false;
   var selectedItem = this.comboBox.GetSelectedItem();
   if(selectedItem)
    if(this.GetInputElement().value == selectedItem.text)
     return false;
   return true;
  }
  return false;
 },
 FilteringOnClient: function(input) {
  this.UnselectContainsTextInItems();
  ASPxComboBoxIncrementalFilteringStrategy.prototype.FilteringOnClient.call(this, input);
 },
 OnApplyChanges: function() {
  this.OnFilterRollback();
 },
 OnBeforeCallbackFinally: function() {
  ASPxComboBoxIncrementalFilteringStrategy.prototype.OnBeforeCallbackFinally.call(this);   
  this.ReselectContainsTextInItems();
  this.SetDefautSelection();
 },
 OnCancelChanges: function() {
  this.OnFilterRollback();
 },
 OnDropDownButtonClick: function() {
  if(this.GetVisibleItemsCount() == 0 && this.isDropDownListStyle) 
   this.comboBox.OnCancelChanges();
 },
 OnTextChanged: function() {
  if(!this.comboBox.IsFocusEventsLocked())
   if(!this.comboBox.ChangedByEnterKeyPress())
    this.OnFilterRollback();
 },
 OnEndFiltering: function(visibleCollectionChanged) {
  this.SelectContainsTextInItems();
  this.SetDefautSelection();
  ASPxComboBoxIncrementalFilteringStrategy.prototype.OnEndFiltering.call(this, visibleCollectionChanged);  
 },
 OnFilterRollback: function() {
  if(this.comboBox.InCallback() && this.currentCallbackIsFiltration)
   return;
  if(this.comboBox.isCallbackMode) {    
   this.isApplyAndCloseAfterFiltration = true;
   if(this.comboBox.GetText() != "" && this.isDropDownListStyle) {
    this.comboBox.GetListBoxControl().ClearItems();
    this.comboBox.SendSpecialCallback(this.GetCurrentSelectedItemCallbackArguments());
   } else 
    this.Filtering();
   this.SetFilter(this.comboBox.GetText());
  }
 },
 OnBeforeHideDropDownArea: function(){
  if(!this.comboBox.isCallbackMode)
   this.FilteringStopClient();
 },
 FilteringStopClient: function(){
  ASPxComboBoxIncrementalFilteringStrategy.prototype.FilteringStopClient.call(this);
  this.UnselectContainsTextInItems();
 },
 GetCurrentSelectedItemCallbackArguments: function(){
  return ASPxFilteringUtils.FormatCallbackArg(__aspxtCurrentSelectedItemCallbackPrefix, "");
 },
 OnCallbackInternal: function() {
  if(!this.comboBox.isPerformCallback) 
   this.ReselectContainsTextInItems();
  ASPxComboBoxIncrementalFilteringStrategy.prototype.OnCallbackInternal.call(this); 
 },
 OnFirstSatisfiedItemFound: function() {
 },
 SetDefautSelection: function() {
  var visibleItemsCount = this.GetVisibleItemsCount();
  if(this.isDropDownListStyle && visibleItemsCount == 1) {
   var lb = this.GetListBoxControl();
   var listTable = lb.GetListTable();
   this.comboBox.SelectIndexSilent(lb, this.GetFirstVisibleItem(lb,listTable));
  }
 },
 UnselectContainsTextInItems: function() {
  this.ApplySelectionFunctionToItems(ASPxContainsFilteringUtils.UnselectContainsTextInElement, true);
 },
 ReselectContainsTextInItems: function() {
  if(this.filter != "")
   this.ApplySelectionFunctionToItems(ASPxContainsFilteringUtils.ReselectContainsTextInElement, false);
 },
 SelectContainsTextInItems: function() {
  if(this.filter != "")
   this.ApplySelectionFunctionToItems(ASPxContainsFilteringUtils.SelectContainsTextInElement, false);
 },
 ApplySelectionFunctionToItems: function(selectionFunction, applyToAllColumns) {
  var lb = this.GetListBoxControl();
  var count = lb.GetItemCount();
  for(var i = 0; i < count; i ++) {
   var item = lb.GetItemRow(i);
   if(applyToAllColumns || (!applyToAllColumns && _aspxGetElementDisplay(item))) 
    this.ApplySelectionFunctionToItem(item, selectionFunction, applyToAllColumns);     
  }
 },
 ApplySelectionFunctionToItem: function(item, selectionFunction, applyToAllColumns) {
  var itemValues = this.GetItemValuesByItem(item);
  var itemSelection = ASPxContainsFilteringUtils.GetColumnSelectionsForItem(itemValues, this.GetListBoxControl().textFormatString, this.filter); 
  if(applyToAllColumns) {
   for(var i = 0; i < item.cells.length; i++) 
    selectionFunction(item.cells[i], itemSelection[i]);
  } else {
   for(var i = 0; i < itemSelection.length; i++) 
    selectionFunction(item.cells[itemSelection[i].index], itemSelection[i]);
  }
 },
 GetItemValuesByItem: function(item) {
  var result = [];
  for(var i = 0; i < item.cells.length; i++) 
   result.push( _aspxGetInnerText(item.cells[i]));
  return result;
 }
});
ASPxFilteringUtils = {
 EventKeyCodeChangesTheInput: function(evt){
  if(_aspxIsPasteShortcut(evt))
   return true;
  else if(evt.ctrlKey)
   return false;
  var keyCode = _aspxGetKeyCode(evt);
  var isSystemKey = ASPxKey.Windows <= keyCode && keyCode <= ASPxKey.ContextMenu;
  var isFKey = ASPxKey.F1 <= keyCode && keyCode <= 127; 
  return ASPxKey.Delete <= keyCode && !isSystemKey && !isFKey || keyCode == ASPxKey.Backspace || keyCode == ASPxKey.Space;
 },
 FormatCallbackArg: function(prefix, arg) {
  return (_aspxIsExists(arg) ? prefix + "|" + arg.length + ';' + arg + ';' : "");
 }
};
ASPxFormatStringHelper = {
 PlaceHolderTemplateStruct: function(startIndex, length, index, placeHolderString){
  this.startIndex = startIndex;
  this.realStartIndex = 0;
  this.length = length;
  this.realLength = 0;
  this.index = index;
  this.placeHolderString = placeHolderString;
 },
 GetPlaceHolderTemplates: function(formatString){
  formatString = this.CollapseDoubleBrackets(formatString);
  var templates = this.CreatePlaceHolderTemplates(formatString);
  return templates;
 },
 CreatePlaceHolderTemplates: function(formatString){
  var templates = [];
  var templateStrings = formatString.match(/{[^}]+}/g);
  if(templateStrings != null){
   var pos = 0;
   for(var i = 0; i < templateStrings.length; i++){
    var tempString = templateStrings[i];
    var startIndex = formatString.indexOf(tempString, pos);
    var length = tempString.length;
    var indexString = tempString.slice(1).match(/^[0-9]+/);
    var index = parseInt(indexString);
    templates.push(new this.PlaceHolderTemplateStruct(startIndex, length, index, tempString));
    pos = startIndex + length;
   }
  }
  return templates;
 },
 CollapseDoubleBrackets: function(formatString){
  formatString = this.CollapseOpenDoubleBrackets(formatString);
  formatString = this.CollapseCloseDoubleBrackets(formatString);
  return formatString;
 },
 CollapseOpenDoubleBrackets: function(formatString){
  return formatString.replace(/{{/g, "_");
 },
 CollapseCloseDoubleBrackets: function(formatString){
  while(true){
   var index = formatString.lastIndexOf("}}");
   if(index == -1) 
    break;
   else
    formatString = formatString.substr(0, index) + "_" + formatString.substr(index + 2);
  }
  return formatString;
 }
};
ASPxStartWithFilteringUtils = {
 HighlightSuggestedText: function(input, suggestedText){
  var currentTextLenght = input.value.length;
  var suggestedTextLenght = suggestedText.length;
  input.value = suggestedText;
  if(currentTextLenght < suggestedTextLenght)
   _aspxSetInputSelection(input, currentTextLenght, suggestedTextLenght);
 },
 RollbackOneSuggestedChar: function(input){
  var currentText = input.value;
  var cutText = currentText.slice(0, -1);
  if(cutText != currentText)
   input.value = cutText;
 }
};
ASPxContainsFilteringUtils = {
 ColumnSelectionStruct: function(index, startIndex, length){
  this.index = index;
  this.length = length;
  this.startIndex = startIndex;
 },
 IsFilterCrossPlaseHolder: function(filterStartIndex, filterEndIndex, template) {
  var left = Math.max(filterStartIndex, template.realStartIndex);
  var right = Math.min(filterEndIndex,  template.realStartIndex + template.realLength);
  return left < right;
 },
 GetColumnSelectionsForItem: function(itemValues, formatString, filterString) {
  if(formatString == "") 
   return this.GetSelectionForSingleColumnItem(itemValues, filterString); 
  var result = [];
  var formatedString = ASPxFormatter.Format(formatString, itemValues);
  var filterStartIndex = formatedString.toLowerCase().indexOf(filterString.toLowerCase());
  if(filterStartIndex == -1) return result;
  var filterEndIndex = filterStartIndex + filterString.length;
  var templates = ASPxFormatStringHelper.GetPlaceHolderTemplates(formatString);
  this.SupplyTemplatesWithRealValues(itemValues, templates);
  for(var i = 0; i < templates.length ; i++) {
   if(this.IsFilterCrossPlaseHolder(filterStartIndex, filterEndIndex, templates[i])) 
    result.push(this.GetColumnSelectionsForItemValue(templates[i], filterStartIndex, filterEndIndex));
  }
  return result;
 },
 GetColumnSelectionsForItemValue: function(template, filterStartIndex, filterEndIndex) {
  var selectedTextStartIndex = filterStartIndex < template.realStartIndex ? 0 :
   filterStartIndex - template.realStartIndex;
  var selectedTextEndIndex = filterEndIndex >  template.realStartIndex + template.realLength ? template.realLength :
   filterEndIndex - template.realStartIndex;
  var selectedTextLength = selectedTextEndIndex - selectedTextStartIndex;
   return new this.ColumnSelectionStruct(template.index, selectedTextStartIndex, selectedTextLength);
 },
 GetSelectionForSingleColumnItem: function(itemValues, filterString) {
  var selectedTextStartIndex = itemValues[0].toLowerCase().indexOf(filterString.toLowerCase());
  var selectedTextLength = filterString.length;
  return [new this.ColumnSelectionStruct(0, selectedTextStartIndex, selectedTextLength)];
 },
 ResetFormatStringIndex: function(formatString, index) {
  if(index != 0)
   return formatString.replace(index.toString(), "0");
  return formatString;
 },
 SupplyTemplatesWithRealValues: function(itemValues, templates) {
  var shift = 0;
  for(var i = 0; i < templates.length; i++) {
   var formatString = this.ResetFormatStringIndex(templates[i].placeHolderString, templates[i].index);
   var currentItemValue = itemValues[templates[i].index];
   templates[i].realLength = ASPxFormatter.Format(formatString, currentItemValue).length;
   templates[i].realStartIndex  += templates[i].startIndex + shift; 
   shift += templates[i].realLength - templates[i].placeHolderString.length; 
  }
 },
 PrepareElementText: function(itemText) {
  if(itemText)
   return itemText.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
 },
 UnselectContainsTextInElement: function(element, selection) {
  var currentText =  _aspxGetAttribute(element, "DXText");
  if (_aspxIsExists(currentText)) 
   _aspxSetInnerHtml(element, ASPxContainsFilteringUtils.PrepareElementText(currentText));
 },
 ReselectContainsTextInElement: function(element, selection) {
  var currentText = _aspxGetInnerText(element);
  if(currentText.indexOf("</em>") != -1)
   ASPxContainsFilteringUtils.UnselectContainsTextInElement(element, selection);
  return ASPxContainsFilteringUtils.SelectContainsTextInElement(element, selection);
 },
 SelectContainsTextInElement: function(element, selection) {
  if(selection.startIndex == -1) return;
  var currentText =  _aspxGetAttribute(element, "DXText");
  if (!_aspxIsExists(currentText)) _aspxSetAttribute(element, "DXText", _aspxGetInnerText(element));
  var oldInnerText = _aspxGetInnerText(element);
  oldInnerText = ASPxContainsFilteringUtils.PrepareElementText(oldInnerText);
  var newInnerText = oldInnerText.substr(0, selection.startIndex) + "<em>" + 
         oldInnerText.substr(selection.startIndex, selection.length) + "</em>" + 
         oldInnerText.substr(selection.startIndex + selection.length);
  _aspxSetInnerHtml(element, newInnerText);
 }
};
ASPxStartsWithFilteringStrategy = _aspxCreateClass(ASPxComboBoxIncrementalFilteringStrategy, {
 constructor: function(comboBox) {
  this.constructor.prototype.constructor.call(this, comboBox);
 },
 IsSatisfy: function(text, filter) {
  return text.toLowerCase().indexOf(filter) == 0;
 },
 FilteringHighlightCompletedText: function(filterItemText){
  var input = this.GetInputElement();
  ASPxStartWithFilteringUtils.HighlightSuggestedText(input, filterItemText);
 },
 HighlightTextAfterCallback: function(firstItemText) {
  var lb = this.GetListBoxControl();
  this.FilteringHighlightCompletedText(firstItemText);
  if(!this.comboBox.isPerformCallback )
   this.comboBox.SelectIndexSilent(lb, 0);
 },
 OnAfterEnter: function() {
  this.ClearInputSelection();
 },
 OnBeforeHideDropDownArea: function() {
  this.FilteringStop();
 },
 OnFirstSatisfiedItemFound: function(index, text, isTextClearing) {
  var lb = this.GetListBoxControl();
  if(!isTextClearing) 
   this.FilteringHighlightCompletedText(text);
  this.comboBox.SelectIndexSilent(lb, isTextClearing ? -1 : index);
 },
 OnTab: function() {
  if(this.IsFilterTimerActive() || this.currentCallbackIsFiltration){
   this.isLastFilteredKeyWasTab = true;
   this.Filtering(); 
  }
     ASPxComboBoxDisableFilteringStrategy.prototype.OnTab.call(this);
 },
 ClearInputSelection: function() {
  var inputElement = this.comboBox.GetInputElement();
  _aspxClearInputSelection(inputElement);
 }
});
ASPxClientNativeComboBox = _aspxCreateClass(ASPxClientComboBoxBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.initSelectedIndex = -1;
  this.raiseValueChangedOnEnter = false;
 },
 Initialize: function(){
  var lb = this.GetListBoxControl();
  if(lb != null) lb.SetMainElement(this.GetMainElement());
  ASPxClientComboBoxBase.prototype.Initialize.call(this);
 },
 InitLastSuccessText: function(){
  this.SelectIndex(this.initSelectedIndex, true);
 },
 FindInputElement: function(){
  return this.GetMainElement();
 }, 
 GetDropDownInnerControlName: function(suffix){
  return this.name + suffix;
 },
 PerformCallback: function(arg) {
  this.GetListBoxControl().PerformCallback(arg);
 },
 GetTextInternal: function(){
  var selectedItem = this.GetSelectedItem();
  return (selectedItem != null) ? selectedItem.text : "";
 },
 SetText: function (text){
  var lb = this.GetListBoxControl();
  var index = this.FindItemIndexByText(lb, text);
  this.SelectIndex(index, false);
  this.SetLastSuccessTest((index > -1) ? text : "");
  this.SetLastSuccessValue((index > -1) ? lb.GetValue() : null);
 },
 GetValue: function(){
  var selectedItem = this.GetSelectedItem();
  return (selectedItem != null) ? selectedItem.value : null;
 },
 SetValue: function(value){
  var lb = this.GetListBoxControl();
  lb.SetValue(value);
  var item = lb.GetSelectedItem();
  var text = item ? item.text : value;
  this.SetLastSuccessTest((item != null) ? text : "");
  this.SetLastSuccessValue(item != null) ? item.value : null;
 },
 ForceRefocusEditor: function(){
 },
 OnCallback: function(result) {
  this.GetListBoxControl().OnCallback(result);
  if(this.GetItemCount() > 0)
   this.SetSelectedIndex(0);
 },
 OnTextChanged: function() {
  this.OnChange();
 },
 SetTextInternal: function(text){
 },
 ChangeEnabledAttributes: function(enabled){
  this.GetMainElement().disabled = !enabled;
 }
});
var __aspxDropDownCollection = null;
function aspxGetDropDownCollection(){
 if(__aspxDropDownCollection == null)
  __aspxDropDownCollection  = new ASPxClientDropDownCollection();
 return __aspxDropDownCollection;
}
_aspxAttachEventToDocument("mousedown", aspxDropDownDocumentMouseDown);
function aspxDropDownDocumentMouseDown(evt){
 return aspxGetDropDownCollection().OnDocumentMouseDown(evt);
}
_aspxAttachEventToDocument("mouseup", aspxDropDownDocumentMouseUp);
function aspxDropDownDocumentMouseUp(evt){
 return aspxGetDropDownCollection().OnDocumentMouseUp(evt);
}
function aspxDDDropDown(name, evt){
 if(_aspxGetIsLeftButtonPressed(evt)){
  var dd = aspxGetControlCollection().Get(name);
  if(dd)
   return dd.OnDropDown(evt);
 }
}
function aspxDDCloseUp(name, evt){
 var dd = aspxGetControlCollection().Get(name);
 dd.OnCloseUp(evt);
}
function aspxDDBPCShown(name){
 var cb = aspxGetControlCollection().Get(name);
 if(cb != null) cb.OnPopupControlShown();
}
function aspxDDBRaiseDropDownByTimer(name){
 var cb = aspxGetControlCollection().Get(name);
 if(cb != null) cb.RaiseDropDown();
}
function aspxCBLBSelectedIndexChanged(name, evt){
 var cb = aspxGetControlCollection().Get(name);
 if(cb != null) cb.OnLBSelectedIndexChanged();
}
function aspxCBLBItemMouseUp(name, evt){
 var cb = aspxGetControlCollection().Get(name);
 if(cb != null) cb.OnListBoxItemMouseUp(evt);
}
function aspxCBMozillaOverflowOn(name){
 var cb = aspxGetControlCollection().Get(name);
 cb.EnableLBDivOverflow();
}
function aspxCBDDButtonMMove(evt){
 return aspxGetDropDownCollection().OnDDButtonMouseMove(evt);
}
function aspxCBMouseWheel(evt){
 var srcElement = _aspxGetEventSource(evt);
 var focusedCB = aspxGetDropDownCollection().GetFocusedDropDown();
 if(focusedCB != null && _aspxGetIsParent(focusedCB.GetMainElement(), srcElement))
  return focusedCB.OnMouseWheel(evt);
}
function aspxCBKeyUp(evt){
 var cb = aspxGetDropDownCollection().GetFocusedDropDown();
 if (cb != null) 
  cb.filterStrategy.OnFilteringKeyUp(evt);
}
function aspxCBFilterByTimer(name){
 var cb = aspxGetControlCollection().Get(name);
 if(cb != null) cb.filterStrategy.Filtering();
}
var __aspxMenuAnimationAccelerator = 1/10;
var __aspxPCAnimationAccelerator = 1/3;
var __aspxAnimationDiscardPixels = 3;
var __aspxPopupShadowWidth = 5;
var __aspxPopupShadowHeight = 5;
var __aspxNotSetAlignIndicator = "NotSet";
var __aspxInnerAlignIndicator = "Sides";
function _aspxIsAlignNotSet(align){
 return align == __aspxNotSetAlignIndicator;
}
function _aspxIsInnerAlign(align){
 return align.indexOf(__aspxInnerAlignIndicator) != -1;
}
function _aspxIsOuterAlign(align){
 return (!this.IsInnerAlign(align)) && (!_aspxIsAlignNotSet(align));
}
function _aspxPopupPosition(position, isInverted){
 this.position = position;
 this.isInverted = isInverted;
}
function _aspxSegment(pos, len){
 this.pos = pos;
 this.len = len;
}
function _aspxRect(left, top, width, height){
 this.left = left;
 this.top = top;
 this.width = width;
 this.height = height;
}
function _aspxSize(width, height){
 this.width = width;
 this.height = height;
}
function _aspxFindPopupElementById(id){
 if(id == "") return null; 
 var popupElement = _aspxGetElementById(id);
 if(!_aspxIsExistsElement(popupElement)){
  var idParts = id.split("_");
  var uniqueId = idParts.join("$");
  popupElement = _aspxGetElementById(uniqueId);
 }
 return popupElement;
}
function _aspxFindEventSourceParentByTestFunc(evt, testFunc){
 return _aspxFindParentByTestFunc(_aspxGetEventSource(evt), testFunc);
}
function _aspxPreventContextMenu(evt){
 if (__aspxWebKitFamily){
  if(evt.stopPropagation)
   evt.stopPropagation();
  evt.returnValue = false;
  if(evt.preventDefault)
   evt.preventDefault();
 } else if (__aspxNetscapeFamily)
  evt.preventDefault();
}
function _aspxIsExistsAbsolutePosParent(element){
 return _aspxIsExistsParentWithSpecPosition(element, ["absolute"]);
}
function _aspxIsExistsAbsoluteOrRelativePosParent(element){
 return _aspxIsExistsParentWithSpecPosition(element, ["absolute", "relative"]);
}
function _aspxIsExistsParentWithSpecPosition(element, positions){
 var curEl = element.offsetParent;
 while(curEl != null) {
  for(var i = 0; i < positions.length; i ++){
   if (_aspxGetCurrentStyle(curEl).position == positions[i])
    return true;
  }
  curEl = curEl.offsetParent;
 }
 return false;
}
function _aspxAdjustPositionToClientScreen(element, shadowSize, pos, isX){
 var min = isX ? _aspxGetDocumentScrollLeft() : _aspxGetDocumentScrollTop();
 var max = min + (isX ? _aspxGetDocumentClientWidth() : _aspxGetDocumentClientHeight());
 max -= (isX ? element.offsetWidth + shadowSize : element.offsetHeight + shadowSize);
 if (pos > max) pos = max;
 if (pos < min) pos = min;
 return pos;
}
function _aspxGetPopupAbsoluteX(element, shadowWidth, popupElement, hAlign, hOffset, x, left, rtl){
 var width = element.offsetWidth;
 var bodyWidth = _aspxGetDocumentClientWidth();
 var elementX = _aspxGetAbsoluteX(popupElement);
 var scrollX = _aspxGetDocumentScrollLeft();
 if (hAlign == "WindowCenter"){
  var showAtPos = x != __aspxInvalidPosition && !popupElement;
  if(showAtPos)
   hAlign = "";
  else
   return new _aspxPopupPosition(Math.ceil(bodyWidth / 2 - width / 2) + scrollX + hOffset, false);
 }
 if (popupElement) {
  var leftX = elementX - width;
  var rightX = elementX + popupElement.offsetWidth;
  var innerLeftX = elementX;
  var innerRightX = elementX + popupElement.offsetWidth - width;
  var isMoreFreeSpaceLeft = bodyWidth - (rightX + width) < leftX - 2 * scrollX;
 }
 else
  hAlign = "";
 var isInverted = false; 
 if (hAlign == "OutsideLeft"){
  isInverted = !(leftX - scrollX > 0 || isMoreFreeSpaceLeft);
  if(isInverted)
   x = rightX - hOffset;
  else
   x = leftX + hOffset;
 }
 else if (hAlign == "LeftSides"){
  x =  innerLeftX + hOffset;
  x = _aspxAdjustPositionToClientScreen(element, shadowWidth, x, true);
 }
 else if (hAlign == "Center"){
  x =  elementX + Math.round((popupElement.offsetWidth  - width) / 2) + hOffset;
 }
 else if (hAlign == "RightSides"){
  x = innerRightX + hOffset;
  x = _aspxAdjustPositionToClientScreen(element, shadowWidth, x, true);
 }
 else if (hAlign == "OutsideRight"){
  isInverted = !(rightX + width < bodyWidth + scrollX || !isMoreFreeSpaceLeft);
  if(isInverted)
   x = leftX - hOffset;
  else
   x = rightX + hOffset;
 }
 else{
  if(rtl){
   if(!_aspxGetIsValidPosition(x))
    x = popupElement ? innerRightX : left;
   else
    x -= width;
   isInverted = x < scrollX && x - scrollX < bodyWidth / 2;
   if(isInverted)
    x = x + width + hOffset;
   else
    x = x - hOffset;
  } else {
   if (!_aspxGetIsValidPosition(x))
    x = popupElement ? elementX : left;
   isInverted = x - scrollX + width > bodyWidth && x - scrollX > bodyWidth / 2;
   if(isInverted)
    x = x - width - hOffset;
   else
    x = x + hOffset;
  }
 }
 return new _aspxPopupPosition(x, isInverted);
}
function _aspxGetPopupAbsoluteY(element, shadowHeight, popupElement, vAlign, vOffset, y, top){
 var height = element.offsetHeight;
 var bodyHeight = _aspxGetDocumentClientHeight(); 
 var elementY = _aspxGetAbsoluteY(popupElement);
 var scrollY = _aspxGetDocumentScrollTop();
 if (vAlign == "WindowCenter"){
  var showAtPos = y != __aspxInvalidPosition && !popupElement;
  if(showAtPos)
   hAlign = "";
  else
   return new _aspxPopupPosition(Math.ceil(bodyHeight / 2 - height / 2) + scrollY + vOffset, false);
 }
 if (popupElement) {
  var bottomY = elementY + popupElement.offsetHeight;
  var topY = elementY - height;
  var innerBottomY = elementY + popupElement.offsetHeight - height;
  var innerTopY = elementY;
  var isMoreFreeSpaceAbove = bodyHeight - (bottomY + height) < topY - 2 * scrollY;
 }
 else
  vAlign = "";
 var isInverted = false;
 if (vAlign == "Above"){
  isInverted = !(topY - scrollY > 0 || isMoreFreeSpaceAbove);
  if(isInverted)
   y = bottomY - vOffset;
  else
   y = topY + vOffset;
 }
 else if (vAlign == "TopSides"){
  y = innerTopY + vOffset;
  y = _aspxAdjustPositionToClientScreen(element, shadowHeight, y, false);
 }
 else if (vAlign == "Middle"){
  y =  elementY + Math.round((popupElement.offsetHeight  - height) / 2) + vOffset;
 }
 else if (vAlign == "BottomSides"){
  y = innerBottomY + vOffset;
  y = _aspxAdjustPositionToClientScreen(element, shadowHeight, y, false);
 }
 else if (vAlign == "Below"){
  isInverted = !(bottomY + height < bodyHeight + scrollY || !isMoreFreeSpaceAbove);
  if(isInverted)
   y = topY - vOffset;
  else
   y = bottomY + vOffset;
 }
 else{
  if (!_aspxGetIsValidPosition(y))
   y = popupElement ? _aspxGetAbsoluteY(popupElement) : top;
  isInverted = y - _aspxGetDocumentScrollTop() + height > bodyHeight && y - _aspxGetDocumentScrollTop() > bodyHeight / 2;
  if(isInverted)
   y = y - height - vOffset;
  else
   y = y + vOffset;
 }
 return new _aspxPopupPosition(y, isInverted);
}
function _aspxGetIntersectionRect(left1, top1, left2, top2, width, height){
 var segment1 = _aspxGetIntersectionSegment(left1, left2, width);
 var segment2 = _aspxGetIntersectionSegment(top1, top2, height);
 if (segment1 != null && segment2 != null){
  var left = segment1.pos;
  var top = segment2.pos;
  var width = segment1.len;
  var height = segment2.len;
  return new _aspxRect(left, top, width, height);
 }
 return null;
}
function _aspxGetIntersectionSegment(pos1, pos2, len){
 var posDifferense = Math.abs(pos1 - pos2);
 if (posDifferense <= len){
  var pos = pos1 > pos2 ? pos1 : pos2;
  var len = len - posDifferense;
  return new _aspxSegment(pos, len);
 }
 return null;
}
function _aspxRemoveFocus(parent){
 var input = document.createElement('div');
 _aspxConcealInputElement(input);
 parent.appendChild(input);
 input.focus();
 _aspxRemoveElement(input);
} 
function _aspxConcealInputElement(input){
 input.style.position = "absolute";
 input.style.left = 0;
 input.style.top = 0;
 if(__aspxWebKitFamily) {
    input.style.opacity = 0;
    input.style.width = 1;
    input.style.height = 1;
 } else {
  input.style.border = 0;
  input.style.width = 0;
  input.style.height = 0;
   }
}
function _aspxInitAnimationDiv(element, x, y, onTimerString, onAnimStopCallString){
 element.animationStart = new Date();
 element.absoluteLeft = x;
 element.absoluteTop = y;
 element.popuping = true;
 element.onTimerString = onTimerString;
 element.onAnimStopCallString = onAnimStopCallString;
 element.style.overflow = "hidden";
 element.style.position = "absolute";  
 _aspxSetStyleSize(element, element.offsetWidth, element.offsetHeight);
 _aspxSetStylePosition(element, x, y);
}
function _aspxOnAnimationTimer(animationDivElement, element, mainCell, iframeElement, animationDelay, animationMaxDelay, animationAccelerator){
 animationDivElement.timerID = _aspxClearTimer(element.timerID);
 var timeExpired = new Date() - animationDivElement.animationStart > animationMaxDelay;
 var left = !timeExpired ? _aspxGetNextAnimationPosInternal(element.offsetLeft, animationAccelerator) : 0;
 var top = !timeExpired ? _aspxGetNextAnimationPosInternal(element.offsetTop, animationAccelerator) : 0;
 element.style.top = top + "px";
 element.style.left = left + "px";
 var rect = _aspxGetIntersectionRect(animationDivElement.offsetLeft, animationDivElement.offsetTop, 
  element.offsetLeft + animationDivElement.offsetLeft, element.offsetTop + animationDivElement.offsetTop,
  mainCell.offsetWidth, mainCell.offsetHeight);
 if (rect && iframeElement){
  _aspxSetStylePosition(iframeElement, rect.left, rect.top);
  _aspxSetStyleSize(iframeElement, rect.width, rect.height);
 }
 if(timeExpired || (left == 0 && top == 0))
  _aspxAnimationFinished(animationDivElement);
 else 
  animationDivElement.timerID = window.setTimeout(animationDivElement.onTimerString, animationDelay);
}
function _aspxGetNextAnimationPosInternal(pos, animationAccelerator){
 pos = Math.round(pos * animationAccelerator);
 if (Math.abs(pos) < __aspxAnimationDiscardPixels)
  pos = 0;
 return pos;
}
function _aspxAnimationFinished(element){
 if(_aspxStopAnimation(element) && _aspxIsExists(element.onAnimStopCallString) && 
  element.onAnimStopCallString !== ""){
  window.setTimeout(element.onAnimStopCallString, 0);
 }
}
function _aspxStopAnimation(element){
 if(element.popuping){
  element.popuping = false;
  element.onTimerString = "";
  element.style.overflow = "visible";
  return true;
 }
 return false;
}
function _aspxGetAnimationHorizontalDirection(popupPosition, horizontalAlign, verticalAlign, rtl){
 if (_aspxIsInnerAlign(horizontalAlign) 
  && !_aspxIsInnerAlign(verticalAlign) 
  && !_aspxIsAlignNotSet(verticalAlign))
  return 0;
 var toTheLeft = (horizontalAlign == "OutsideLeft" || horizontalAlign == "RightSides" || (horizontalAlign == "NotSet" && rtl)) ^ popupPosition.isInverted;
 return toTheLeft ? 1 : -1;
}
function _aspxGetAnimationVerticalDirection(popupPosition, horizontalAlign, verticalAlign){
 if (_aspxIsInnerAlign(verticalAlign) 
  && !_aspxIsInnerAlign(horizontalAlign) 
  && !_aspxIsAlignNotSet(horizontalAlign))
  return 0;
 var toTheTop = (verticalAlign == "Above" || verticalAlign == "BottomSides") ^ popupPosition.isInverted;
 return toTheTop ? 1 : -1;
}
var __aspxHideBodyScrollCount = 0;
function _aspxHideBodyScroll(){
 __aspxHideBodyScrollCount++;
 if(__aspxHideBodyScrollCount > 1) 
  return;
 if(__aspxIE){
  _aspxChangeAttribute(document.body, "scroll", "no");
  _aspxChangeStyleAttribute(document.documentElement, "overflow", "hidden");
 } else if(__aspxFirefox && __aspxBrowserVersion < 3) { 
  var scrollTop = document.documentElement.scrollTop;
  _aspxChangeStyleAttribute(document.body, "overflow", "hidden");
  document.documentElement.scrollTop = scrollTop;
 } else
  _aspxChangeStyleAttribute(document.body, "overflow", "hidden");
   _aspxChangeStyleAttribute(document.body, "marginRight", "16px");
}
function _aspxRestoreBodyScroll(){
 __aspxHideBodyScrollCount--;
 if(__aspxHideBodyScrollCount > 0) 
  return;
 if(__aspxIE){
  _aspxRestoreAttribute(document.body, "scroll");
  _aspxRestoreStyleAttribute(document.documentElement, "overflow");
 }
 else
  _aspxRestoreStyleAttribute(document.body, "overflow");
 _aspxRestoreStyleAttribute(document.body, "marginRight");
 if(__aspxWebKitFamily){ 
  var scrollTop = document.body.scrollTop;
  var scrollLeft = document.body.scrollLeft;
  document.body.scrollTop ++;
  document.body.scrollTop --;
  document.body.scrollLeft ++;
  document.body.scrollLeft --;
  document.body.scrollLeft = scrollLeft;
  document.body.scrollTop = scrollTop;
 }
}
function _aspxCoordinatesInDocumentRect(x, y){
 var docScrollLeft = _aspxGetDocumentScrollLeft();
 var docScrollTop = _aspxGetDocumentScrollTop();
 return (x > docScrollLeft && y > docScrollTop && 
  x < _aspxGetDocumentClientWidth() + docScrollLeft && 
  y < _aspxGetDocumentClientHeight() + docScrollTop);
}
function _aspxGetElementZIndexArray(element){  
 var currentElement = element;
 var zIndexesArray = [0];
 while(currentElement && currentElement.tagName != "BODY") {
  if(currentElement.style) {
   if(typeof(currentElement.style.zIndex) != "undefined" && currentElement.style.zIndex != "")
    zIndexesArray.unshift(currentElement.style.zIndex);
  }
  currentElement = currentElement.parentNode;
 }
 return zIndexesArray;   
}
function _aspxIsHigher(higherZIndexArrat, zIndexArray){
 if (zIndexArray == null) return true;
 var count = (higherZIndexArrat.length >= zIndexArray.length) ? higherZIndexArrat.length : zIndexArray.length;
 for (var i = 0; i < count; i++) 
    if(typeof(higherZIndexArrat[i]) != "undefined" && typeof(zIndexArray[i]) != "undefined"){
    if (higherZIndexArrat[i] != zIndexArray[i]) return higherZIndexArrat[i] > zIndexArray[i];   
    } else return typeof(zIndexArray[i]) == "undefined";  
 return true;   
}
function _aspxTestIsPopupElement(element) {
 return !!element.DXPopupElementControl;
}
var _aspxClientOverControlUtils = {
 GetPopupElementByEvt: function(evt) {
  return _aspxFindEventSourceParentByTestFunc(evt, _aspxTestIsPopupElement);
 },
 OnMouseEvent: function (evt, mouseOver) {
  var popupElement = _aspxClientOverControlUtils.GetPopupElementByEvt(evt);
  if (mouseOver) 
   popupElement.DXPopupElementControl.OnPopupElementMouseOver(evt, popupElement);
  else 
   popupElement.DXPopupElementControl.OnPopupElementMouseOut(evt, popupElement);
 },
 OnMouseOut: function(evt) {
  _aspxClientOverControlUtils.OnMouseEvent(evt, false);
 },
 OnMouseOver: function(evt) {
  _aspxClientOverControlUtils.OnMouseEvent(evt, true);
 }
}
var __aspxPCWIdSuffix = "_PW";
function ASPxPCResizeCursorInfo(horizontalDirection, verticalDirection, horizontalOffset, verticalOffset){
 this.horizontalDirection = horizontalDirection;
 this.verticalDirection = verticalDirection;
 this.horizontalOffset = horizontalOffset;
 this.verticalOffset = verticalOffset;
 this.course = verticalDirection + horizontalDirection;
}
ASPxClientPopupControl = _aspxCreateClass(ASPxClientControl, {
 constructor: function(name){
  this.constructor.prototype.constructor.call(this, name);
  this.leadingAfterInitCall = true; 
  this.adjustInnerControlsSizeOnShow = true;
  this.animationDelay = 30;
  this.animationMaxDelay = 400;  
  this.appearAfter = 300;
  this.disappearAfter = 500;
  this.allowResize = false;
  this.enableAnimation = true;
  this.shadowVisible = true;
  this.allowCorrectYOffsetPosition = true; 
  this.contentUrl = "";
  this.contentUrlArray = [];
  this.contentLoadingMode = "Default"
  this.cookieName = "";
  this.closeAction = "OuterMouseClick";
  this.popupAction = "LeftMouseClick";
  this.closeActionArray = [];
  this.popupActionArray = [];
  this.popupElementID = "";
  this.popupElementIDArray = [];
  this.showOnPageLoad = false;
  this.showOnPageLoadArray = [];
  this.popupHorizontalAlign = __aspxNotSetAlignIndicator;
  this.popupVerticalAlign = __aspxNotSetAlignIndicator;
  this.popupHorizontalOffset = 0;
  this.popupVerticalOffset = 0;
  this.windows = []; 
  this.windowCount = 0;
  this.isDragged = false;
  this.isResized = false;
  this.zIndex = -1;
  this.left = 0;
  this.top = 0;
  this.iframeLoading = false;
  this.isDraggedArray = [];
  this.isResizedArray = [];
  this.zIndexArray = [];
  this.leftArray = [];
  this.topArray = [];
  this.height = 0;
  this.width = 0;
  this.heightArray = [];
  this.widthArray = [];
  this.iframeLoadingArray = [];
  this.isLiveResizingMode = true;
  this.isPopupPositionCorrectionOn = true;
  this.SSLSecureBlankUrl = "";
  this.windowElements = new Object();
  this.hideBodyScrollWhenModal = true;
  this.autoUpdatePosition = false;
  this.isNeedPopupedSet = false;
  this.cachedSize = null;
  this.cachedSizeArray = [];
  this.fakeDragDiv = null;
  this.popupElement = null;
  this.popupElements = [];
  this.headerHeight = 0;
  this.headerHeightArray = [];
  this.footerHeight = 0;
  this.footerHeightArray = [];
  this.ResizeBorderSize = 6;
  this.ResizeCornerBorderSize = 20;
  this.CloseButtonClick = new ASPxClientEvent();
  this.CloseUp = new ASPxClientEvent();
  this.Closing = new ASPxClientEvent();
  this.PopUp = new ASPxClientEvent();
  this.Resize = new ASPxClientEvent();
  this.Shown = new ASPxClientEvent();
  this.BeforeResizing = new ASPxClientEvent();
  this.AfterResizing = new ASPxClientEvent();
  aspxGetPopupControlCollection().Add(this);
 },
 InlineInitialize: function(){
  this.InitializeArrayCores();
 },
 Initialize: function(){
  if (this.HasDefaultWindow())
   this.InitializeWindow(-1);
  for(var i = 0; i < this.popupElementIDArray.length; i ++) 
   this.InitializeWindow(i);
  this.constructor.prototype.Initialize.call(this);
 },
 AfterInitialize: function(){
  if (this.HasDefaultWindow())
   this.AfterInitializeWindow(-1);
  for(var i = 0; i < this.popupElementIDArray.length; i ++) 
   this.AfterInitializeWindow(i);
  this.constructor.prototype.AfterInitialize.call(this);
 },
 InitializeArrayCores: function(){
  if (this.GetWindowCountCore() > 0){
   this.InitializeArray(this.contentUrlArray, "");
   this.InitializeArray(this.popupActionArray, this.popupAction);
   this.InitializeArray(this.closeActionArray, this.closeAction);
   this.InitializeArray(this.popupElementIDArray, "");
   this.InitializeArray(this.showOnPageLoadArray, false);
   this.InitializeArray(this.isDraggedArray, false);
   this.InitializeArray(this.isResizedArray, false);
   this.InitializeArray(this.zIndexArray, -1);    
   this.InitializeArray(this.leftArray, 0);
   this.InitializeArray(this.topArray, 0);
   this.InitializeArray(this.widthArray, 0);
   this.InitializeArray(this.heightArray, 0);
   this.InitializeArray(this.cachedSizeArray, null);
   this.InitializeArray(this.iframeLoadingArray, false);
   if (__aspxIE){
    this.InitializeArray(this.headerHeightArray, -1);
    this.InitializeArray(this.footerHeightArray, -1);
   }
  }
 },
 InitializeArray: function(array, defaultValue){
  if(array.length == 0){
   for (var i = 0; i < this.GetWindowCountCore(); i++)
    array[i] = defaultValue;
  }
 },
 InitializeWindow: function(index){
  this.GetPopupElement(index);
  var element = this.GetWindowElement(index);
  if (element != null){
   element.DXPopupWindowElement = true;
   element.onresize = new Function("aspxPWResize(\""+ this.name + "\",\"" + element.id + "\");");
   if (__aspxIE)
    this.AttachOnDragStartEventToWindowImages(index);
   this.InitIFrame(index);
   element.isHiding = false;
   element.isContentHeightInit = false;
   element.isPopupPositionCorrectionOn = this.isPopupPositionCorrectionOn || !this.GetShowOnPageLoad(index);
   if (this.GetShowOnPageLoad(index) && this.GetZIndex(index) > 0){
    this.FirstShowWindow(index, false);
    aspxGetPopupControlCollection().SetWindowElementZIndex(element, this.GetZIndex(index));
    element.isPopupPositionCorrectionOn = true;
   }
  }
 },
 InitIFrame: function(index){
  var contentIFrameElement = this.GetWindowContentIFrameElement(index);
  if(contentIFrameElement) {
   contentIFrameElement.popupControlName = this.name;
   contentIFrameElement.pcWndIndex = index;
   _aspxAttachEventToElement(contentIFrameElement, "load", aspxPCIframeLoad);
  }
 },
 AfterInitializeWindow: function(index){
  if (this.GetShowOnPageLoad(index) && this.GetZIndex(index) < 0){
   this.FirstShowWindow(index, true);
   var element = this.GetWindowElement(index);
   if (element != null)
    element.isPopupPositionCorrectionOn = true;  
  }
  this.EnsureContent(index, true);
 },
 AttachOnDragStartEventToWindowImages: function(index) {   
  this.AttachChildImagesPreventDragStartEvent(this.GetWindowHeaderElement(index));
  this.AttachChildImagesPreventDragStartEvent(this.GetWindowFooterElement(index));
 },
 AttachChildImagesPreventDragStartEvent: function(parentElem) {
  var images = parentElem == null ? null : _aspxGetElementsByTagName(parentElem, "img");
  if (images != null) {  
   for(var i = 0; i < images.length; i ++)
    images[i].ondragstart = new Function("return _aspxPreventDragStart(event)");  
   } 
 },
 FirstShowWindow: function(index, allowChangeZIndex){
  var isFreeWindow = this.GetIsDragged(index);
  var x = __aspxInvalidPosition;
  var y = __aspxInvalidPosition;
  if (isFreeWindow){
   x = this.GetWindowLeft(index);
   y = this.GetWindowTop(index);
   var popupHorizontalOffsetBackup = this.popupHorizontalOffset;
   var popupVerticalOffsetBackup = this.popupVerticalOffset;
   this.popupHorizontalOffset = 0;
   this.popupVerticalOffset = 0;
  }
  var enableAnimationBackup = this.enableAnimation;
  this.enableAnimation = false;
  this.DoShowWindowAtPos(index, x, y, isFreeWindow, false, allowChangeZIndex);
  this.enableAnimation = enableAnimationBackup;
  if (isFreeWindow){
   this.popupHorizontalOffset = popupHorizontalOffsetBackup ;
   this.popupVerticalOffset = popupVerticalOffsetBackup;
  }
 },
 GetIsDragged: function(index){
  if(0 <= index && index < this.isDraggedArray.length)
   return this.isDraggedArray[index];
  return this.isDragged;
 },
 SetIsDragged: function(index, value){
  if(0 <= index && index < this.isDraggedArray.length)
   this.isDraggedArray[index]=value;
  else   
   this.isDragged=value;
 },
 GetIsResized: function(index){
  if(0 <= index && index < this.isResizedArray.length)
   return this.isResizedArray[index];
  return this.isResized;
 },
 SetIsResized: function(index, value){
  if(0 <= index && index < this.isResizedArray.length)
   this.isResizedArray[index]=value;
  else   
   this.isResized=value;
 },
 HasDefaultWindow: function() {
  return this.GetWindowCountCore() == 0;
 },
 GetCurrentLeft: function(index){
  return this.GetPosition(index, true);
 },
 GetCurrentTop: function(index){
  return this.GetPosition(index, false);
 },
 GetHeaderHeight: function(index){
  if(0 <= index && index < this.headerHeightArray.length)
   return this.headerHeightArray[index];
  return this.headerHeight;
 },
 GetFooterHeight: function(index){
  if(0 <= index && index < this.footerHeightArray.length)
   return this.footerHeightArray[index];
  return this.footerHeight;
 },
 SetHeaderHeight: function(index, height){
  if(0 <= index && index < this.headerHeightArray.length)
   this.headerHeightArray[index] = height;
  else
   this.headerHeight = height;
 },
 SetFooterHeight: function(index, height){
  if(0 <= index && index < this.footerHeightArray.length)
   return this.footerHeightArray[index] = height;
  else 
   this.footerHeight = height;
 },
 GetPosition: function(index, isLeft){
  if(0 <= index && index < this.GetWindowCountCore())
   return  isLeft ? this.leftArray[index] : this.topArray[index];
  return  isLeft ? this.left : this.top;
 },
 SetPopupElementReference: function(index, popupElement, attach) {
  if(!_aspxIsExistsElement(popupElement)) return;
  var setReferenceFunction = attach ? _aspxAttachEventToElement : _aspxDetachEventFromElement;
  var windowPopupAction = this.GetWindowPopupAction(index);       
  if(windowPopupAction == "LeftMouseClick")
   setReferenceFunction(popupElement, "mouseup", aspxPEMEvent);
  else if (windowPopupAction == "RightMouseClick")
   setReferenceFunction(popupElement, "contextmenu", aspxPEMEvent);
  else if (windowPopupAction == "MouseOver") {
   setReferenceFunction(popupElement, "mouseover",  _aspxClientOverControlUtils.OnMouseOver );     
   setReferenceFunction(this.GetWindowElement(index), "mouseover", aspxPWEMOver);
  }     
  if (windowPopupAction == "LeftMouseClick" || windowPopupAction == "RightMouseClick") {
   setReferenceFunction(popupElement, "mousedown", aspxPEMEvent);
   this.isNeedPopupedSet = true;
  }  
  if(attach) {
   popupElement.DXPopupElementControl = this;
   popupElement.DXPopupWindowIndex = index;
   popupElement.isPopuped = false;
   this.SetPopupElementIDInternal(index, popupElement.id);
   this.SetPopupElementInternal(index, popupElement);
  } else 
     popupElement.DXPopupElementControl = popupElement.DXPopupWindowIndex = popupElement.isPopuped = undefined; 
 },
 AttachToPopupElement: function(index, newPopupElementId) {
  var oldPopupElementId = this.GetPopupElementIDInternal(index);
  var popupElementId = newPopupElementId || oldPopupElementId;
  var popupElement = _aspxFindPopupElementById(popupElementId);
  if(popupElementId != oldPopupElementId) 
   if(aspxGetPopupControlCollection().IsDisappearTimerActive()) {      
      aspxGetPopupControlCollection().ClearDisappearTimer();
      this.Hide(index);
   }
  this.SetPopupElementReference(index, popupElement, true);
 },
 DetachFromPopupElement: function(index) {
  var popupElement = this.GetPopupElementInternal(index);
  this.SetPopupElementIDInternal(index, "");
  this.SetPopupElementInternal(index, null);
  this.SetPopupElementReference(index, popupElement, false);
 },
 GetPopupElement: function(index){
  var popupElement = this.GetPopupElementInternal(index);
  var modalElement = this.GetWindowModalElement(index);
  if(modalElement)
   _aspxAttachEventToElement(modalElement, "mousedown", aspxPWMEMDown);
  if(!_aspxIsExistsElement(popupElement)){
   this.AttachToPopupElement(index);
  }
  return popupElement;
 },
 GetPopupElementInternal: function(index){
  if(0 <= index && index < this.GetWindowCountCore())
   return this.popupElements[index];
  return this.popupElement;
 },
 SetPopupElementInternal: function(index, element){
  if(0 <= index && index < this.GetWindowCountCore())
   this.popupElements[index] = element;
  else
   this.popupElement = element;
 },
 GetPopupElementIDInternal: function(index){
  if(0 <= index && index < this.GetWindowCountCore())
   return this.popupElementIDArray[index];
  return this.popupElementID;
 },
 SetPopupElementIDInternal: function(index, popupElementID) {
  if(0 <= index && index < this.GetWindowCountCore())
   this.popupElementIDArray[index] = popupElementID;
  else this.popupElementID = popupElementID;
 },
 GetShadowWidth: function(){
  return this.shadowVisible ? __aspxPopupShadowWidth : 0;
 },
 GetShadowHeight: function(){
  return this.shadowVisible ? __aspxPopupShadowHeight : 0;
 },
 GetShowOnPageLoad: function(index){
  if(0 <= index && index < this.showOnPageLoadArray.length)
   return this.showOnPageLoadArray[index];
  return this.showOnPageLoad;
 },
 GetWindowCountCore: function(){
  return (this.windows.length > 0) ? this.windows.length : this.windowCount;
 },
 GetWindowIFrame: function(index){
  var element = this.GetWindowElement(index);
  var iFrame = element.overflowElement;
  if(!iFrame) {
   iFrame = this.FindWindowIFrame(index);
   element.overflowElement = iFrame;
  }
  return iFrame;
 },
 FindWindowIFrame: function(index){
  return _aspxGetElementById(this.name + "_DXPWIF" + index);
 },
 GetWindowModalElement: function(index){
  var element = this.GetWindowElement(index);
  if(!element) return;
  var modalElement = element.modalElement;
  if(!modalElement) {
   modalElement = this.FindWindowModalElement(index);
   element.modalElement = modalElement;
   if(modalElement) {
    modalElement.DXModalPopupControl = this;
    modalElement.DXModalPopupWindowIndex = index;
   }
  }
  return modalElement;
 },
 FindWindowModalElement: function(index){
  return _aspxGetElementById(this.name + "_DXPWMB" + index);
 },
 GetWindowElementId: function(index){
  return this.name + __aspxPCWIdSuffix + index;
 },  
 WindowIsModal: function(index) {
  return !!this.GetWindowModalElement(index);
 },
 GetWindowElement: function(index){
  if(!_aspxIsExistsElement(this.windowElements[index]))
   this.windowElements[index] = _aspxGetElementById(this.GetWindowElementId(index));
  return this.windowElements[index];
 },
 GetWindowChild: function(index, idPostfix){
  return _aspxGetChildById(this.GetWindowElement(index), this.name + idPostfix);
 },
 GetWindowContentIFrameDivElementID: function(index){
  return this.name + "_CIFD" + index;
 },
 GetWindowContentIFrameDivElement: function(index){
  return this.GetWindowChild(index, "_CIFD" + index);
 },
 GetWindowContentIFrameElementId: function(index){
  return this.name + "_CIF" + index;
 },
 GetWindowContentIFrameElement: function(index){
  return this.GetWindowChild(index, "_CIF" + index);
 },
 GetWindowContentIFrameUrl: function(index){
  if(0 <= index && index < this.contentUrlArray.length)
   return this.contentUrlArray[index];
  return this.contentUrl;
 },
 GetWindowPopupAction: function(index){
  if(0 <= index && index < this.popupActionArray.length)
   return  this.popupActionArray[index];
  return this.popupAction;
 },
 GetWindowCloseAction: function(index){
  if(0 <= index && index < this.closeActionArray.length)
   return  this.closeActionArray[index];
  return this.closeAction;
 },
 SetWindowContentIFrameUrl: function(index, url){
  if(0 <= index && index < this.contentUrlArray.length)
   this.contentUrlArray[index] = url;
  else
   this.contentUrl = url;
 },
 ShowWindowContentUrl: function(index){
  var contentIFrame = this.GetWindowContentIFrameElement(index);
  if(__aspxNetscapeFamily || __aspxWebKitFamily){
   var contentIFrameDiv = this.GetWindowContentIFrameDivElement(index);
   if(contentIFrameDiv)
    this.AdjustIFrameDivHeight(this.GetWindowClientTable(index), contentIFrameDiv, contentIFrame);
   if(contentIFrame)
    contentIFrame.style.height = contentIFrameDiv.clientHeight + "px";
  }
  this.LoadWindowContentUrl(index);
  if(contentIFrame && contentIFrame.DXReloadAfterShowRequired) {
   this.RefreshWindowContentUrl(this.GetWindow(index));
   contentIFrame.DXReloadAfterShowRequired = false;
  }
 },
 LoadWindowContentUrl: function(index){
  var url = this.GetWindowContentIFrameUrl(index);
  this.LoadWindowContentFromUrl(index, url);
 },
 LoadWindowContentFromUrl: function(index, url){
  var element = this.GetWindowContentIFrameElement(index);
  if(element && element.src != url && element.DXSrcRaw != url){
   this.SetSrcToIframeElement(index, element, url);
   this.SetWindowContentIFrameUrl(index, element.src); 
  }
 },
 SetSrcToIframeElement: function(index, iframeElement, src){
  this.SetIframeLoading(index, true);
  iframeElement.src = src;
  iframeElement.DXSrcRaw = src;
 },
 GetWindowContentElement: function(index){
  return this.GetWindowChild(index, "_PWC" + index);
 },
 GetWindowHeaderElement: function(index){
  return this.GetWindowChild(index, "_PWH" + index);
 },
 GetWindowHeaderGripElement: function(index){
  return this.GetWindowChild(index, "_FGRP" + index);
 },
 GetWindowFooterElement: function(index){
  return this.GetWindowChild(index, "_PWF" + index);
 },
 GetWindowIndex: function(element){
  var id = element.id;
  var pos = id.lastIndexOf(__aspxPCWIdSuffix);
  return parseInt(id.substr(pos + __aspxPCWIdSuffix.length));
 },
 GetWindowMainCell: function(element){
  return this.GetWindowMainTable(element).rows[0].cells[this.rtl && this.shadowVisible ? 1 : 0];
 },
 GetWindowMainTable: function(element){
  var index = this.GetWindowIndex(element);
  var shadowTable = this.GetWindowChild(index, "_PWST" + index);
  return shadowTable != null ? shadowTable : element;
 },
 GetWindowClientTable: function(index){
  return this.GetWindowChild(index, "_CLW" + index);
 },
 GetWindowLeft: function(index){
  if(0 <= index && index < this.leftArray.length)
   return this.leftArray[index];
  return this.left;
 },
 SetWindowLeft: function(index, left){
  if(0 <= index && index < this.leftArray.length)
   this.leftArray[index] = left;
  else
   this.left = left;
 },
 GetWindowHeightInternal: function(index){
  if(0 <= index && index < this.heightArray.length)
   return this.heightArray[index];
  return this.height;
 },
 SetWindowHeight: function(index, height){
  if(0 <= index && index < this.heightArray.length)
   this.heightArray[index] = height;
  else 
   this.height = height;
 },
 GetWindowWidthInternal: function(index){
  if(0 <= index && index < this.widthArray.length)
   return this.widthArray[index];
  return this.width;
 },
 SetWindowWidth: function(index, width){
  if(0 <= index && index < this.widthArray.length)
   this.widthArray[index] = width;
  else 
   this.width = width;
 },
 GetWindowTop: function(index){
  if(0 <= index && index < this.topArray.length)
   return this.topArray[index];
  return this.top;
 },
 SetWindowTop: function(index, top){
  if(0 <= index && index < this.topArray.length)
   return this.topArray[index] = top;
  else
   return this.top = top;
 },
 GetWindowsStateInputElement: function(){
  return _aspxGetElementById(this.name + "WS");
 },
 GetZIndex: function(index){
  if (0 <= index && index < this.zIndexArray.length)
   return this.zIndexArray[index];
  return this.zIndex;
 },
 GetCurrentZIndex: function(index){
  var element = this.GetWindowElement(index);
  if(element != null) {
   if(element.style.zIndex != "") 
    return element.style.zIndex;
   if(0 <= index && index < this.GetWindowCountCore())
    return  this.zIndexArray[index];
   return this.zIndex;
  }
 },
 GetCurrentWindowWidth: function(index){
  var element = this.GetWindowElement(index);
  if(element != null) {
   var mainCell = this.GetWindowMainCell(element);
   if(mainCell.firstChild.offsetWidth > 0)
    return mainCell.firstChild.offsetWidth;
   return this.GetWindowWidthInternal(index);
  }
 },
 GetCurrentWindowHeight: function(index){
  var element = this.GetWindowElement(index);
  if(element != null) {
   var mainCell = this.GetWindowMainCell(element);
   if(mainCell.firstChild.offsetHeight > 0)
    return mainCell.firstChild.offsetHeight;
   return this.GetWindowHeightInternal(index);
  }
 },
 GetIframeLoading: function(index){
  if (0 <= index && index < this.iframeLoadingArray.length)
   return this.iframeLoadingArray[index];
  return this.iframeLoading;
 },
 SetIframeLoading: function(index, value){
  if(0 <= index && index < this.iframeLoadingArray.length)
   this.iframeLoadingArray[index] = value;
  else
   this.iframeLoading = value;
 },
 GetClientPopupPos: function(element, popupElement, pos, isX, isDragged){
  var index = this.GetWindowIndex(element);
  var popupPosition = null;
  if (isDragged)
   popupPosition = new _aspxPopupPosition(this.GetPosition(index, isX), false);
  else
   popupPosition = isX ? this.GetClientPopupPosX(element, popupElement, pos) : this.GetClientPopupPosY(element, popupElement, pos);
  popupPosition.position = _aspxPrepareClientPosForElement(popupPosition.position, element, isX);
  if(__aspxFirefox && __aspxBrowserVersion < 3 && this.GetWindowModalElement(index))
   popupPosition.position -= isX ? _aspxGetDocumentScrollLeft() : _aspxGetDocumentScrollTop();
  return popupPosition;
 },
 GetClientPopupPosX: function(element, popupElement, x){
  var mainElement = this.GetWindowMainCell(element);
  var popupPosition = _aspxGetPopupAbsoluteX(mainElement, this.GetShadowWidth(), popupElement, this.popupHorizontalAlign, this.popupHorizontalOffset, 
   x, this.GetWindowLeft(this.GetWindowIndex(element)), this.rtl);
  return this.CorrectPopupPositionForClientWindow(element, popupPosition, true);
 },
 GetClientPopupPosY: function(element, popupElement, y){
  var mainElement = this.GetWindowMainCell(element);
  var popupPosition = _aspxGetPopupAbsoluteY(mainElement, this.GetShadowHeight(), popupElement, this.popupVerticalAlign, this.popupVerticalOffset, 
   y, this.GetWindowTop(this.GetWindowIndex(element)));
  return (this.allowCorrectYOffsetPosition ? this.CorrectPopupPositionForClientWindow(element, popupPosition, false) : popupPosition);
 },
 CorrectPopupPositionForClientWindow: function(element, popupPosition, isX){
  if (element.isPopupPositionCorrectionOn){
   popupPosition.position = _aspxAdjustPositionToClientScreen(element, 
    isX ? this.GetShadowWidth() : this.GetShadowHeight(), popupPosition.position, isX);
  }
  return popupPosition;
 },
 DoShowWindow: function(index, evt){
  if (!this.InternalIsWindowVisible(index)){
   var x = _aspxGetEventX(evt);
   var y = _aspxGetEventY(evt);
   this.DoShowWindowAtPos(index, x, y, false, true, true);
  }
 },
 DoShowWindowAtPos: function(index, x, y, ignorePopupElement, closeOtherWindows, allowChangeZIndex){
  var element = this.GetWindowElement(index);
  if(element != null){
   if (this.adjustInnerControlsSizeOnShow) {
    var windowContent = this.GetWindowContentElement(index);
    var collection = aspxGetControlCollection();
    collection.CollapseControls(windowContent, __aspxCheckSizeCorrectedFlag);
   }
   this.FFTextCurFixShow(index, true);
   if (closeOtherWindows)
    aspxGetPopupControlCollection().DoHideAllWindows(null, this.GetWindowElementId(index), false);
   var isMoving = this.InternalIsWindowVisible(index);
   _aspxSetElementDisplay(element, true);
   if(this.IsContentCellHeightCorrectionRequired() && !element.isContentHeightInit){
    element.isContentHeightInit = true;
    this.PrepareContentCellForHeigthCorrection(index);
    this.CorrectContentCellHeight(element, false);
   }
   var cachedSize = this.GetWindowCachedSize(index);
   if(cachedSize != null){
    this.SetWindowSize(this.GetWindow(index), cachedSize.width, cachedSize.height);
    this.ResetWindowCachedSize(index);
   }
   this.RefreshRootDivElementSize(index);
   var popupElement = ignorePopupElement ? null : this.GetPopupElement(index);
   var isDragged = this.GetIsDragged(index);
   var horizontalPopupPosition = this.GetClientPopupPos(element, popupElement, x, true, isDragged);
   var verticalPopupPosition = this.GetClientPopupPos(element, popupElement, y, false, isDragged);
   var clientX = horizontalPopupPosition.position;
   var clientY = verticalPopupPosition.position;
   this.SetWindowPos(index, element, clientX, clientY);
   this.DoShowWindowModalElement(index);
   var isAnimationNeed = this.enableAnimation && !isMoving;
   if (isAnimationNeed)
    this.StartAnimation(element, index, horizontalPopupPosition, verticalPopupPosition);
   else
    _aspxSetElementVisibility(element, true);
   if (!isMoving){
    aspxGetPopupControlCollection().RegisterVisibleWindow(element, this, index);
    this.RaisePopUp(index);
    if(!this.enableAnimation)
     this.OnWindowShown(index);
   }
   if (allowChangeZIndex){
    aspxGetPopupControlCollection().ActivateWindowElement(element);
   }
   if(!isAnimationNeed && __aspxNetscape && this.GetWindowModalElement(index)){
    _aspxSetElementDisplay(element, false);
    _aspxSetElementDisplay(element, true);
   }
   this.ShowWindowContentUrl(index);
   if (this.adjustInnerControlsSizeOnShow) {
    collection.AdjustControls(windowContent, __aspxCheckSizeCorrectedFlag);
   }
  }
 },
 RefreshRootDivElementSize: function(index) {
  if(this.WindowRootElementIsDiv()) {  
   var window = this.GetWindowElement(index);
   var windowMainTable = this.GetWindowMainTable(window);
   _aspxSetStyleSize(window, windowMainTable.offsetWidth, windowMainTable.offsetHeight);  
  }
 },
 WindowRootElementIsDiv: function() {
  return this.enableAnimation;
 },
 DoShowWindowIFrame: function(index, x, y, width, height){
  if (!this.renderIFrameForPopupElements) return;
  var element = this.GetWindowElement(index);
  var iFrame = this.GetWindowIFrame(index);
  if(element && iFrame){
   var cell = this.GetWindowMainCell(element);
   if (width < 0)
    width = cell.offsetWidth;
   if (height < 0)
    height = cell.offsetHeight;
   _aspxSetStyleSize(iFrame, width, height);
   if (x != __aspxInvalidPosition && y != __aspxInvalidPosition)
    _aspxSetStylePosition(iFrame, x, y);
   _aspxSetElementDisplay(iFrame, true);
  }
 },
 DoShowWindowModalElement: function(index){
  var modalElement = this.GetWindowModalElement(index);
  if(modalElement){
   var bodyScrollHasJustBeingHidden = false;
   if(this.hideBodyScrollWhenModal && !this.IsWindowVisible(this.GetWindow(index))){
    bodyScrollHasJustBeingHidden = true;
    aspxGetPopupControlCollection().LockWindowResizeByBodyScrollVisibilityChanging();
    _aspxHideBodyScroll();
   }
   _aspxSetElementDisplay(modalElement, true);
   aspxGetPopupControlCollection().AdjustModalElementBounds(modalElement);
   _aspxSetElementVisibility(modalElement, true);
   aspxGetPopupControlCollection().RegisterVisibleModalElement(modalElement);
   if(bodyScrollHasJustBeingHidden)
    aspxGetPopupControlCollection().UnlockWindowResizeByBodyScrollVisibilityChanging();
  }
 },
 DoHideWindowCore: function(index){
  this.FFTextCurFixHide(index, true);
  var element = this.GetWindowElement(index);
  if(element != null){
   element.isHiding = true;
   this.SetIsDragged(index, false);
   this.UpdateWindowsStateInputElement();
   this.UpdateWindowsStateCookie();
   element.isHiding = false;
   _aspxStopAnimation(element);
   _aspxSetElementVisibility(element, false);
   _aspxSetElementDisplay(element, false);
   this.DoHideWindowModalElement(element);
   this.DoHideWindowIFrame(element);
   aspxGetPopupControlCollection().UnregisterVisibleWindow(element);
  }
 },
 DoHideWindow: function(index){
  if (!this.InternalIsWindowVisible(index)) return;
  var cancel = this.RaiseClosing(index);
  if(!cancel){
   this.DoHideWindowCore(index);
   this.RaiseCloseUp(index);
  }
  return cancel;
 },
 DoHideWindowIFrame: function(element){
  if (!this.renderIFrameForPopupElements) return;
  var iFrame = element.overflowElement;
  if(iFrame)
   _aspxSetElementDisplay(iFrame, false);
 },
 DoHideWindowModalElement: function(element){
  var modalElement = element.modalElement;
  if(modalElement){
   aspxGetPopupControlCollection().UnregisterVisibleModalElement(modalElement);
   if(this.hideBodyScrollWhenModal) {
    if(__aspxWebKitFamily)
     aspxGetPopupControlCollection().LockScrollEvent();
    _aspxRestoreBodyScroll();
    if(__aspxWebKitFamily)
     aspxGetPopupControlCollection().UnlockScrollEvent();
   }
   _aspxSetStyleSize(modalElement, 1, 1);
   _aspxSetElementVisibility(modalElement, false);
   _aspxSetElementDisplay(modalElement, false);
  }
 },
 SetWindowDisplay: function(index, value){
  var pcwElement = this.GetWindowElement(index);
  this.SetFFTextCurFixShowing(index, value, false);
  _aspxSetElementDisplay(pcwElement, value);
 },
 GetTextCurFixDiv: function(index){
  return _aspxGetElementById(this.name + "_" + "TCFix" + index);
 },
 FFTextCurFixShow: function(index, isSetVisibility){
  this.SetFFTextCurFixShowing(index, true, isSetVisibility);
 },
 FFTextCurFixHide: function(index, isSetVisibility){
  this.SetFFTextCurFixShowing(index, false, isSetVisibility);
 },
 IsFFTextCurFixRequired: function(index){
  return __aspxFirefox && this.GetWindowModalElement(index);
 },
 SetFFTextCurFixShowing: function(index, value, isSetVisibility){
  if(this.IsFFTextCurFixRequired(index)){
   var fixDiv = this.GetTextCurFixDiv(index);
   if(fixDiv){
    if(isSetVisibility)
     _aspxSetElementVisibility(fixDiv, value);
    _aspxSetElementDisplay(fixDiv, value);
   }
  }  
 },
 SetWindowPos: function(index, element, x, y){
  _aspxSetStylePosition(element, x, y);
  this.DoShowWindowIFrame(index, x, y, __aspxInvalidDimension, __aspxInvalidDimension);
  this.SetIsDragged(index, true);
  this.SetWindowLeft(index, _aspxGetAbsoluteX(element));
  this.SetWindowTop(index, _aspxGetAbsoluteY(element));
  this.UpdateWindowsStateInputElement();
  this.UpdateWindowsStateCookie();
 },
 OnWindowShown: function(windowIndex){
  this.EnsureContent(windowIndex, false);
  this.RaiseShowen(windowIndex);
 },
 EnsureContent: function(windowIndex, isInit){
  var element = this.GetWindowElement(windowIndex);
  if(element && !element.loaded && !element.loading){
   var shouldLoad = this.contentLoadingMode == "OnPageLoad" || this.contentLoadingMode == "OnFirstShow" && !isInit ;
   if(shouldLoad){
    element.loading = true;
    this.CreateWindowCallback(windowIndex, windowIndex);
   } else if(this.contentLoadingMode == "Default")
    element.loaded = true;
  }
 },
 CreateWindowCallback: function(windowIndex, argument){
  this.ShowLoadingPanel(windowIndex);
  this.CreateCallback(argument);
 },
 OnCallback: function(result){
  this.OnCallbackInternal(result.html, result.index, false);
 },
 OnCallbackError: function(result, data){
  this.OnCallbackInternal(result.html, result.index, true);
 },
 OnCallbackInternal: function(html, windowIndex, isError){
  var element = this.GetWindowElement(windowIndex);
  element.loaded = !isError;
  element.loading = false;
  this.SetWindowContentHtmlCore(windowIndex, html)
 },
 ShowLoadingPanel: function(windowIndex){
  var contentElement = this.GetWindowContentElement(windowIndex);
  this.CreateLoadingDiv(contentElement);
  this.CreateLoadingPanelWithAbsolutePosition(contentElement, contentElement);
 },
 ShouldHideExistingLoadingPanel: function() {
  return false;
 },
 IsLoadingContainerVisible: function(){
  return true;
 },
 PerformCallback: function(parameter) {
  this.PerformWindowCallback(null, parameter);
 },
 PerformWindowCallback: function(window, parameter) {
  if(!parameter)
   parameter = "";
  var index = (window != null) ? window.index : -1;
  var windowCallbackArguments = index + ";" + parameter;
  this.CreateWindowCallback(index, windowCallbackArguments);
 },
 PrepareContentCellForHeigthCorrection: function(windowIndex) {
  if(__aspxIE)
   this.GetWindowContentElement(windowIndex).style.height = "0px";
 },
 IsContentCellHeightCorrectionRequired: function() {
  return __aspxIE || __aspxOpera;
 },
 CorrectContentCellHeight: function(element, isResizing){
  if (__aspxIE)
   this.CorrectContentCellHeightIE(element, isResizing);
  if(__aspxOpera)
   this.CorrectContentCellHeightOpera(element, isResizing);
 },
 CorrectContentCellHeightOpera: function(element, isResizing){
  var index = this.GetWindowIndex(element);
  var contentIFrame = this.GetWindowContentIFrameElement(index);
  if(contentIFrame){
   contentIFrame.style.height = "0px"; 
   var contentIFrameDiv = this.GetWindowContentIFrameDivElement(index);
   if(contentIFrameDiv)
    contentIFrameDiv.style.height = "0px"; 
   var contentCell = this.GetWindowContentElement(index);
   var height = contentCell.clientHeight;
   contentIFrame.style.height = height + "px";
   if(contentIFrameDiv)
    contentIFrameDiv.style.height = contentIFrame.style.height;
   var correction = contentCell.clientHeight - height;
   contentIFrame.style.height = (height - correction) + "px";
   if(contentIFrameDiv)
    contentIFrameDiv.style.height = contentIFrame.style.height;
  }
 },
 CorrectContentCellHeightIE: function(element, isResizing){  
  var index = this.GetWindowIndex(element);
  var clientTable = this.GetWindowClientTable(index);
  var headerCell = this.GetWindowHeaderElement(index);
  var contentCell = this.GetWindowContentElement(index);
  var footerCell = this.GetWindowFooterElement(index);
  var windowMainCell = this.GetWindowMainCell(element);
  var mainCellHeight = windowMainCell.clientHeight - this.GetTwoVerticalPaddingSize(windowMainCell);
  var headerHeight = headerCell ? headerCell.offsetHeight : 0;
  var footerHeight = footerCell ? footerCell.offsetHeight : 0;
  if (isResizing){
   headerHeight = this.GetHeaderHeight(index);
   footerHeight = this.GetFooterHeight(index);
  }
  else{
   this.SetHeaderHeight(index, headerHeight);
   this.SetFooterHeight(index, footerHeight);
  }
  var correctedHeight = Math.max(0, mainCellHeight - headerHeight - footerHeight);
  contentCell.style.height = correctedHeight + "px";
  var verticalsPaddings = contentCell.offsetHeight - correctedHeight;
  contentCell.style.height = correctedHeight - verticalsPaddings + "px";
 },
 GetTwoVerticalPaddingSize: function(element){
  var heightWithBorders = element.clientHeight;
  var paddingTopBackup = element.style.paddingTop;
  var paddingBottomBackup = element.style.paddingBottom;
  element.style.paddingTop = "0px";
  element.style.paddingBottom = "0px";
  var heightWithoutBorders = element.clientHeight;
  element.style.paddingTop = paddingTopBackup;
  element.style.paddingBottom = paddingBottomBackup;
  return (heightWithBorders - heightWithoutBorders);
 },
 InternalIsWindowVisible: function(index){
  var element = this.GetWindowElement(index);
  return (element != null) ? _aspxGetElementVisibility(element) : false;
 },
 InternalIsWindowDisplayed: function(index){
  var element = this.GetWindowElement(index);
  return (element != null) ? _aspxGetElementDisplay(element) : false;
 },
 OnActivate: function(index, evt){
  var element = this.GetWindowElement(index);
  if (element != null)
   aspxGetPopupControlCollection().ActivateWindowElement(element, evt);
 },
 OnAnimationTimer: function(index){
  var animationDivElement = this.GetWindowElement(index);
  if(animationDivElement){
   var element = this.GetWindowMainTable(animationDivElement);
   var mainCell = this.GetWindowMainCell(animationDivElement);
   var iframeElement = this.GetWindowIFrame(index);
   _aspxOnAnimationTimer(animationDivElement, element, mainCell, iframeElement, this.animationDelay, this.animationMaxDelay,__aspxPCAnimationAccelerator);
  }
 },
 OnAnimationStop: function(index){
  this.OnWindowShown(index);
 },
 OnDragStart: function(evt, index){
  this.SetIsDragged(index, true);
  this.ShowDragCursor(index);
  var element = this.GetWindowElement(index);
  if(this.GetWindowContentIFrameElement(index))
   this.HideIframeElementBeforeDragging(index);  
  var gragXOffset = _aspxGetAbsoluteX(element) - _aspxGetEventX(evt);
  var gragYOffset = _aspxGetAbsoluteY(element) - _aspxGetEventY(evt);
  var xClientCorrection = _aspxGetPositionElementOffset(element, true);
  var yClientCorrection = _aspxGetPositionElementOffset(element, false);
  gragXOffset -= xClientCorrection;
  gragYOffset -= yClientCorrection;
  aspxGetPopupControlCollection().InitDragObject(this, index, gragXOffset, gragYOffset, xClientCorrection, yClientCorrection);
 },
 OnDrag: function(index, x, y, xClientCorrection, yClientCorrection) {
  var element = this.GetWindowElement(index);
  if(element != null){
   _aspxSetStylePosition(element, x, y);  
   this.SetWindowLeft(index, x + xClientCorrection);
   this.SetWindowTop(index, y + yClientCorrection);
   var iFrame = element.overflowElement;
   if(iFrame)
    _aspxSetStylePosition(iFrame, x, y);
   if (__aspxOpera) 
    _aspxClearSelection();
  }
 },
 OnDragStop: function(index) {
  var element = this.GetWindowElement(index);
  this.HideDragCursor(index);
  this.UpdateWindowsStateInputElement();
  this.UpdateWindowsStateCookie();
  if(this.GetWindowContentIFrameElement(index))
   this.ShowIframeElementAfterDragging(index);
 },
 OnPopupElementMouseOver: function(evt, popupElement) {
  if(popupElement != null) {
   var index = popupElement.DXPopupWindowIndex;
   if(!this.InternalIsWindowVisible(index)){
    aspxGetPopupControlCollection().SetAppearTimer(this.name, index, this.appearAfter);
    aspxGetPopupControlCollection().InitOverObject(this, index, evt);
   }
  }
 },
 OnPopupElementMouseOut: function(evt, popupElement) {
 },
 HideIframeElementBeforeDragging: function(index){
  var iframeElement = this.GetWindowContentIFrameElement(index);
  if(__aspxIE){
   this.CreateFakeDragDiv(iframeElement);
   _aspxSetElementDisplay(iframeElement, false);
  } else
   _aspxSetElementVisibility(iframeElement, false);
 },
 ShowIframeElementAfterDragging: function(index){
  var iframeElement = this.GetWindowContentIFrameElement(index);
  if(this.fakeDragDiv != null){
   this.RemoveFakeDragDiv(iframeElement);
   _aspxSetElementDisplay(iframeElement, true);
  } else
   _aspxSetElementVisibility(iframeElement, true);
 },
 CreateFakeDragDiv: function(iframe) {
  this.fakeDragDiv = document.createElement("div");
  _aspxSetStyleSize(this.fakeDragDiv, iframe.offsetWidth, iframe.offsetHeight);  
  iframe.parentElement.appendChild(this.fakeDragDiv);
 },
 RemoveFakeDragDiv: function(iframe) {
  iframe.parentElement.removeChild(this.fakeDragDiv);
  this.fakeDragDiv = null;
 },
 CreateResizePanel: function(index){
  var element = this.GetWindowElement(index);
  var mainCell = this.GetWindowMainCell(element);
  var resizePanel = document.createElement("DIV");
  element.parentNode.appendChild(resizePanel);
  resizePanel.style.overflow = "hidden";
  resizePanel.style.position = "absolute";
  resizePanel.style.zIndex = __aspxPopupControlZIndex + aspxGetPopupControlCollection().visiblePopupWindowIds.length * 2 + 2;
  if (!this.isLiveResizingMode)
   resizePanel.style.border = "black 1px dotted";
  return resizePanel;
 },
 OnResizeStart: function(evt, index){
   if (!aspxGetPopupControlCollection().IsResizeInint()){
   this.SetIsResized(index, true);
   var cursor = this.CreateResizeCursorInfo(evt, index);
   if (cursor.course != ""){
    var resizePanel = this.CreateResizePanel(index);
    this.UpdateResizeCursor(resizePanel, cursor.verticalDirection, cursor.horizontalDirection);
    aspxGetPopupControlCollection().InitResizeObject(this, index, cursor, resizePanel);
    this.OnResize(evt, index, cursor, resizePanel);
   }
  }
  return aspxGetPopupControlCollection().IsResizeInint();
 },
 OnResize: function(evt, index, cursor, resizePanel){
  this.OnResizePanel(evt, index, cursor, resizePanel);
  if (this.isLiveResizingMode)
   this.OnResizeWindow(index, cursor, resizePanel);
  if (!__aspxIE) 
   _aspxClearSelection();
 },
 OnResizePanel: function(evt, index, cursor, resizePanel){
  var x = _aspxGetEventX(evt);
  var y = _aspxGetEventY(evt);
  var element = this.GetWindowElement(index);
  var mainCell = this.GetWindowMainCell(element);
  var clientWindow = this.GetWindowClientTable(index);
  var left = _aspxGetAbsoluteX(mainCell);
  var top = _aspxGetAbsoluteY(mainCell);
  var newLeft = _aspxGetAbsoluteX(element);
  var newTop  = _aspxGetAbsoluteY(element);
  var newHeight = mainCell.offsetHeight;
  var newWidth = mainCell.offsetWidth;
  if(cursor.horizontalDirection == "e")
   newWidth = x - newLeft + cursor.horizontalOffset + 1;
  if(cursor.verticalDirection == "s")
   newHeight = y - newTop + cursor.verticalOffset + 1;
  if(cursor.horizontalDirection == "w") {
   newLeft = _aspxPrepareClientPosForElement(x, element, true) - cursor.horizontalOffset;
   newWidth = newWidth - (x - left) + cursor.horizontalOffset;
  }else
   newLeft = _aspxPrepareClientPosForElement(newLeft, element, true);
  if(cursor.verticalDirection == "n"){
   newTop =_aspxPrepareClientPosForElement(y, element, false) - cursor.verticalOffset;
   newHeight = newHeight - (y - top) + cursor.verticalOffset;
  }else
   newTop = _aspxPrepareClientPosForElement(newTop, element, false);
  if(!this.isLiveResizingMode){
   newWidth -= 2; 
   newHeight -= 2;
  }
  if(newWidth > 0 && newHeight > 0) {
   _aspxSetStylePosition(resizePanel, newLeft, newTop);
   _aspxSetStyleSize(resizePanel, newWidth, newHeight);
   this.SetWindowLeft(index, _aspxGetAbsoluteX(element));
   this.SetWindowTop(index, _aspxGetAbsoluteY(element));
  }
 },
 OnResizeWindow: function(index, cursor, resizePanel){
  this.SetClientWindowSize(index, resizePanel.offsetWidth, resizePanel.offsetHeight);
  var element = this.GetWindowElement(index);
  var mainCell = this.GetWindowMainCell(element);
  var heightCorrection = mainCell.offsetHeight - resizePanel.offsetHeight;
  var widthCorrection = mainCell.offsetWidth - resizePanel.offsetWidth;
  var left = _aspxGetAbsoluteX(resizePanel) - (cursor.horizontalDirection == "w" ? widthCorrection : 0);
  var top  = _aspxGetAbsoluteY(resizePanel) - (cursor.verticalDirection == "n" ?  heightCorrection : 0);
  left = _aspxPrepareClientPosForElement(left, element, true);
  top = _aspxPrepareClientPosForElement(top, element, false);
  _aspxSetStylePosition(element, left, top);
  if(this.InternalIsWindowVisible(index)) 
   this.DoShowWindowIFrame(index, left, top, __aspxInvalidDimension, __aspxInvalidDimension);
 },
 OnResizeStop: function(evt, index, cursor, resizePanel){
  if(this.allowResize){
   if (!this.isLiveResizingMode) {
    var collection = aspxGetControlCollection();
    var windowElement = this.GetWindowElement(index);
    collection.CollapseControls(windowElement);
    this.OnResizeWindow(index, cursor, resizePanel);
   }
   this.CreateResizeCursorInfo(evt, index);
   this.UpdateWindowsStateInputElement();
   this.UpdateWindowsStateCookie();
   this.RaiseResize(index);
   if (!this.isLiveResizingMode)
    collection.AdjustControls(windowElement);
  }
 },
 OnMouseDownModalElement: function(evt, index) {
  aspxGetPopupControlCollection().DoHideAllWindows(_aspxGetEventSource(evt), "", false);
  if (this.isNeedPopupedSet) {
   var popupElement = this.GetPopupElement(index);
   popupElement.isPopuped = true;
  }
 },
 SetClientWindowSize: function(index, width, height){
  var element = this.GetWindowElement(index);
  var mainCell = this.GetWindowMainCell(element);
  var clientWindow = this.GetWindowClientTable(index);
  element.style.height = "0px";
  element.style.width = "0px";
  var windowHorizontalTwoBorderSize = mainCell.offsetWidth - clientWindow.offsetWidth;
  var windowVerticalTwoBorderSize = mainCell.offsetHeight - clientWindow.offsetHeight;
  var contentIFrameDiv = this.GetWindowContentIFrameDivElement(index);
  var contentIFrame = this.GetWindowContentIFrameElement(index);
  width -= windowHorizontalTwoBorderSize;
  height -= windowVerticalTwoBorderSize;
  if(width < 0) width = 0;
  if(height < 0) height = 0;
  this.RaiseBeforeResizing(index);
  if (__aspxIE){
   this.PrepareContentCellForHeigthCorrection(index);
   mainCell.style.height = "0px"; 
  } else {
   if (contentIFrame)
    contentIFrame.style.height = "0px";
   if(contentIFrameDiv) 
    contentIFrameDiv.style.height = "0px";
  }
  _aspxSetStyleSize(clientWindow, width, height);
  var mainCellHeight = __aspxFirefox && height == 0 ? 1 : 0; 
  _aspxSetStyleSize(mainCell, width, mainCellHeight);
  if (__aspxNetscapeFamily){
   _aspxSetElementDisplay(element, false);
   _aspxSetElementDisplay(element, true);
  }
  _aspxSetStyleSize(element, clientWindow.offsetWidth + this.GetShadowWidth() + windowHorizontalTwoBorderSize, clientWindow.offsetHeight + this.GetShadowHeight() + windowVerticalTwoBorderSize);
  this.CorrectContentCellHeight(element, true);
  this.SetWindowWidth(index, clientWindow.offsetWidth);
  this.SetWindowHeight(index, clientWindow.offsetHeight);
  if(contentIFrameDiv)
   this.AdjustIFrameDivHeight(clientWindow, contentIFrameDiv, contentIFrame);
  if(contentIFrame)
   contentIFrame.style.height = "100%";
  this.RaiseAfterResizing(index);
 },
 GetIsSafariGreater4OrChromeGreater2: function(){
  return (__aspxSafari && __aspxBrowserVersion >= 4) || (__aspxChrome  && __aspxBrowserVersion >= 2);
 },
 AdjustIFrameDivHeight: function(clientWindow, contentIFrameDiv, contentIFrame){
  if(this.GetIsSafariGreater4OrChromeGreater2())
   this.AdjustIFrameDivHeight_Safari4(contentIFrameDiv);
  else if((__aspxOpera && __aspxBrowserVersion >= 9.5) || __aspxFirefox)
   this.AdjustIFrameDivHeight_OperaGreaterThan95_FireFox(clientWindow, contentIFrameDiv, contentIFrame);
  else
   contentIFrameDiv.style.height = "100%";
 },
 AdjustIFrameDivHeight_Safari4: function(contentIFrameDiv){
  var firstClientHeight = this.GetElementClientHeight(contentIFrameDiv.parentNode);
  contentIFrameDiv.style.height = firstClientHeight + "px";
  var secontClientHeight = this.GetElementClientHeight(contentIFrameDiv.parentNode);
  contentIFrameDiv.style.height = (2 * firstClientHeight - secontClientHeight) + "px";
 },
 AdjustIFrameDivHeight_OperaGreaterThan95_FireFox: function(clientWindow, contentIFrameDiv, contentIFrame){
  var clientWindowHeight = clientWindow.offsetHeight;
  contentIFrameDiv.style.height = "100%";
  var contentIFrameDivHeight = contentIFrameDiv.offsetHeight;
  contentIFrameDiv.style.height = contentIFrameDivHeight + "px";
  var clientWindowHeightDifference = clientWindow.offsetHeight - clientWindowHeight;
  contentIFrameDiv.style.height = (contentIFrameDivHeight - clientWindowHeightDifference) + "px";
 },
 GetElementClientHeight: function(element){
  if(this.GetIsSafariGreater4OrChromeGreater2() && element.tagName == "TD")
   return _aspxWebKit3TDRealInfo.GetClientHeight(element);
  return element.clentHeight;
 },
 SetWindowCachedSize: function(index, width, height) {
  if(0 <= index && index < this.heightArray.length)
   this.cachedSizeArray[index] = new _aspxSize(width, height);
  else 
   this.cachedSize = new _aspxSize(width, height);
 },
 GetWindowCachedSize: function(index) {
  if(0 <= index && index < this.heightArray.length)
   return this.cachedSizeArray[index];
  else 
   return this.cachedSize;
 },
 ResetWindowCachedSize: function(index) {
  if(0 <= index && index < this.heightArray.length)
   this.cachedSizeArray[index] = null;
  else 
   this.cachedSize = null;
 },
 CreateResizeCursorInfo: function(evt, index){  
  var element = this.GetWindowElement(index);
  var mainCell = this.GetWindowMainCell(element);
  var clientWindow = this.GetWindowClientTable(index);
  var headerElement = this.GetWindowHeaderElement(index);
  var left = _aspxGetAbsoluteX(mainCell);
  var top = _aspxGetAbsoluteY(mainCell);
  var x = _aspxGetEventX(evt);
  var y = _aspxGetEventY(evt);
  var leftOffset = Math.abs(x - left);
  var rightOffset = Math.abs(x - left - mainCell.offsetWidth + 1);
  var topOffset = Math.abs(y - top);
  var bottomOffset = Math.abs(y - top - mainCell.offsetHeight + 1);
  var cursorInfo = this.CreateResizeBorderCursorInfo(index, leftOffset, rightOffset, topOffset, bottomOffset);
  var gripCell = this.GetWindowHeaderGripElement(index);
  if (gripCell) {
   var gripCursorInfo = this.CreateGripCursorInfo(index, mainCell, gripCell, leftOffset, rightOffset, bottomOffset);
   if (gripCursorInfo)
    cursorInfo = gripCursorInfo;
  }
  this.UpdateResizeCursor(clientWindow, cursorInfo.verticalDirection, cursorInfo.horizontalDirection);
  this.UpdateResizeCursor(mainCell, cursorInfo.verticalDirection, cursorInfo.horizontalDirection);
  if (headerElement)
   this.UpdateResizeCursor(headerElement, cursorInfo.verticalDirection, cursorInfo.horizontalDirection);
  return cursorInfo;
 },
 CreateGripCursorInfo: function(index, mainCell, gripCell, leftOffset, rightOffset, bottomOffset){
  var gripWidth = this.rtl
   ? _aspxGetAbsoluteX(gripCell) - _aspxGetAbsoluteX(mainCell) + gripCell.offsetWidth
   : mainCell.offsetWidth - (_aspxGetAbsoluteX(gripCell) - _aspxGetAbsoluteX(mainCell));
  var gripHeight = mainCell.offsetHeight - (_aspxGetAbsoluteY(gripCell) - _aspxGetAbsoluteY(mainCell));
  if(gripHeight > bottomOffset) {
   if(this.rtl && gripWidth > leftOffset)
    return new ASPxPCResizeCursorInfo("w", "s", leftOffset, bottomOffset);
   if(gripWidth > rightOffset)
    return new ASPxPCResizeCursorInfo("e", "s", rightOffset, bottomOffset);
  }
  return null;
 },
 CreateResizeBorderCursorInfo: function(index, leftOffset, rightOffset, topOffset, bottomOffset){
  var ResizeBorderSize = this.ResizeBorderSize;
  var verticalDirection = this.GetResizeVerticalCourse(ResizeBorderSize, topOffset, bottomOffset);
  ResizeBorderSize = verticalDirection != "" ? this.ResizeCornerBorderSize : this.ResizeBorderSize;
  var horizontalDirection = this.GetResizeHorizontalCourse(ResizeBorderSize, leftOffset, rightOffset);
  if (verticalDirection == "" && horizontalDirection != "")
   verticalDirection = this.GetResizeVerticalCourse(this.ResizeCornerBorderSize, topOffset, bottomOffset);
  var horizontalOffset = leftOffset < rightOffset ? leftOffset : rightOffset;
  var verticalOffset = topOffset < bottomOffset ? topOffset : bottomOffset;
  return new ASPxPCResizeCursorInfo(horizontalDirection, verticalDirection, horizontalOffset, verticalOffset);
 },
 GetResizeVerticalCourse: function(ResizeBorderSize, topOffset, bottomOffset){
  if (ResizeBorderSize > topOffset) return "n";
  if (ResizeBorderSize > bottomOffset) return "s";
  return "";
 },
 GetResizeHorizontalCourse: function(ResizeBorderSize, leftOffset, rightOffset){
  if (ResizeBorderSize > leftOffset) return "w";
  if (ResizeBorderSize > rightOffset) return "e";
  return "";
 },
 UpdateResizeCursor: function(element, verticalDirection, horizontalDirection){
  var cursor = verticalDirection +  horizontalDirection;
  if (cursor != ""){
   cursor += "-resize";
   this.ShowTemporaryCursor(element, cursor);
  }
  else
   this.HideTemporaryCursor(element);
 },
 ShowTemporaryCursor: function(element, cursor){
  _aspxChangeStyleAttribute(element, "cursor", cursor);
 },
 HideTemporaryCursor: function(element){
  _aspxRestoreStyleAttribute(element, "cursor");
 },
 ResizeWindowIFrame: function(index){
  if (!this.renderIFrameForPopupElements) return;
  if (!this.InternalIsWindowVisible(index)) return;
  var iFrame = this.GetWindowIFrame(index);
  if(iFrame){ 
   var cell = this.GetWindowMainCell(this.GetWindowElement(index));
   _aspxSetStyleSize(iFrame, cell.offsetWidth, cell.offsetHeight);
  }
 },
 GetContentIFrameWindow: function(){
  var iframeElement = this.GetContentIFrame();  
  return iframeElement.contentWindow;
 },
 ShowDragCursor: function(index){
  var dragElement = this.GetDragElement(index);
  if (dragElement)
   this.ShowTemporaryCursor(dragElement, "move");
 },
 HideDragCursor: function(index){
  var dragElement = this.GetDragElement(index);
  if(dragElement != null)
   this.HideTemporaryCursor(dragElement);
 },
 GetDragElement: function(index){
  var headerElement = this.GetWindowHeaderElement(index);
  var element = this.GetWindowElement(index);
  if (element != null)
   return (headerElement != null ? headerElement : this.GetWindowMainCell(element));
  return null;
 },
 OnActivateMouseDown: function(evt, index){
  this.OnActivate(index, evt);
 },
 OnCloseButtonClick: function(index){
  this.RaiseCloseButtonClick(index);
  if(this.GetWindowCloseAction(index) != "None")
   this.DoHideWindow(index);
 },
 OnMouseDown: function(evt, index, isDraggingAllowed){
  if(_aspxGetIsLeftButtonPressed(evt)){
   _aspxClearSelection();
   var isResizing = false;
   if (this.allowResize)
    isResizing = this.OnResizeStart(evt, index);
   if (isDraggingAllowed && !isResizing)
    this.OnDragStart(evt, index);
  }
 },
 OnMouseMove: function(evt, index){
  this.CreateResizeCursorInfo(evt, index);
 },
 StartAnimation: function(animationDivElement, index, horizontalPopupPosition, verticalPopupPosition){
  var element = this.GetWindowMainTable(animationDivElement);
  var clientX = horizontalPopupPosition.position;
  var clientY = verticalPopupPosition.position;
  var args = "(\"" + this.name + "\", " + index + ")";
  var onTimerString = "aspxPCATimer" + args;
  var onAnimStopCallString = "aspxPCAStop" + args;
  _aspxInitAnimationDiv(animationDivElement, clientX, clientY, onTimerString, onAnimStopCallString);
  var horizontalDirection = _aspxGetAnimationHorizontalDirection(horizontalPopupPosition, this.popupHorizontalAlign, this.popupVerticalAlign, this.rtl);
  var verticalDirection = _aspxGetAnimationVerticalDirection(verticalPopupPosition, this.popupHorizontalAlign, this.popupVerticalAlign);
  var xPos = horizontalDirection * animationDivElement.offsetWidth;
  var yPos = verticalDirection * animationDivElement.offsetHeight;
  _aspxSetStylePosition(element, xPos, yPos);
  _aspxSetElementVisibility(animationDivElement, true);
  this.DoShowWindowIFrame(index, clientX, clientY, 0, 0);
  animationDivElement.timerID = window.setTimeout(animationDivElement.onTimerString, this.animationDelay);
 },
 GetWindowsState: function(){
  var state = "";
  if (this.HasDefaultWindow()){
   state += this.GetWindowState(-1);
  }
  for(var i = 0; i < this.GetWindowCountCore(); i ++) {
   state += this.GetWindowState(i);
   if(i < this.GetWindowCountCore() - 1) state += ";";
  }
  return state;
 },
 GetWindowState: function(index){
  var element = this.GetWindowElement(index);
  if (element != null){
   var mainCell = this.GetWindowMainCell(element);
   var visibleFlag = (!this.InternalIsWindowVisible(index) || element.isHiding) ? "0" : "1";
   var isDraggedFlag = this.GetIsDragged(index) ? "1" : "0";
   var zIndex = this.GetCurrentZIndex(index);
   var isResized = this.GetIsResized(index);
   var isResizedFlag = isResized ? "1" : "0";
   var width = isResized ? this.GetCurrentWindowWidth(index) : __aspxInvalidDimension;
   var height = isResized ? this.GetCurrentWindowHeight(index) : __aspxInvalidDimension;
   var state = visibleFlag + ":" + isDraggedFlag + ":" + zIndex + ":" + 
    this.GetCurrentLeft(index) + ":" + this.GetCurrentTop(index) + ":" + isResizedFlag + ":" +
    width + ":" + height;
   return state;
  }
  return "";
 },
 UpdateWindowsStateCookie: function(){
  if(this.cookieName == "") return;
  _aspxDelCookie(this.cookieName);
  _aspxSetCookie(this.cookieName, this.GetWindowsState());
 },
 UpdateWindowsStateInputElement: function(){
  var element = this.GetWindowsStateInputElement();
  if(element != null) element.value = this.GetWindowsState();
 },
 OnIFrameLoad: function(index){
  this.SetIframeLoading(index, false);
 },
 CreateWindows: function(windowsNames){
  for (var i = 0; i < windowsNames.length; i ++){
   var window = new ASPxClientPopupWindow(this, i, windowsNames[i]);
   this.windows.push(window);
  }
 },
 RaiseCloseButtonClick: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  if(!this.CloseButtonClick.IsEmpty()){
   var args = new ASPxClientPopupWindowEventArgs(window);
   this.CloseButtonClick.FireEvent(this, args);
  }
 },
 RaiseClosing: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  var cancel = false;
  if(!this.Closing.IsEmpty()){
   var args = new ASPxClientPopupWindowCancelEventArgs(window);
   this.Closing.FireEvent(this, args);
   cancel = args.cancel;
  }
  return cancel;
 },
 RaiseCloseUp: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  if(!this.CloseUp.IsEmpty()){
   var args = new ASPxClientPopupWindowEventArgs(window);
   this.CloseUp.FireEvent(this, args);
  }
 },
 RaisePopUp: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  if(!this.PopUp.IsEmpty()){
   var args = new ASPxClientPopupWindowEventArgs(window);
   this.PopUp.FireEvent(this, args);
  }
 },
 RaiseResize: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  if(!this.Resize.IsEmpty()){
   var args = new ASPxClientPopupWindowEventArgs(window);
   this.Resize.FireEvent(this, args);
  }
 },
 RaiseBeforeResizing: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  if(!this.BeforeResizing.IsEmpty()){
   var args = new ASPxClientPopupWindowEventArgs(window);
   this.BeforeResizing.FireEvent(this, args);
  }
 },
 RaiseAfterResizing: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  if(!this.AfterResizing.IsEmpty()){
   var args = new ASPxClientPopupWindowEventArgs(window);
   this.AfterResizing.FireEvent(this, args);
  }
 },
 RaiseShowen: function(index){
  var window = index < 0 ? null : this.GetWindow(index);
  if(!this.Shown.IsEmpty()){
   var args = new ASPxClientPopupWindowEventArgs(window);
   this.Shown.FireEvent(this, args);
  }
 },
 AdjustSize: function() {
  return this.SetSize(0, 0);
 },
 GetHeight: function(){
  return this.GetWindowHeight(null);
 },
 GetWidth: function(){
  return this.GetWindowWidth(null);
 },
 SetSize: function(width, height){
  this.SetWindowSize(null, width, height);
 },
 SetWidth: function(width) {
  this.SetSize(width, this.GetHeight());
 },
 SetHeight: function(height) {
  this.SetSize(this.GetWidth(), height);
 },
 GetWindowHeight: function(window){
  var index = (window != null) ? window.index : -1;
  var element = this.GetWindowElement(index);
  var mainCell = this.GetWindowMainCell(element);
  return mainCell.offsetHeight;
 },
 GetWindowWidth: function(window){
  var index = (window != null) ? window.index : -1;
  var element = this.GetWindowElement(index);
  var mainCell = this.GetWindowMainCell(element);
  return mainCell.offsetWidth;
 },
 SetWindowSize: function(window, width, height){
  var index = (window != null) ? window.index : -1;
  if(this.InternalIsWindowDisplayed(index)) {
   this.SetClientWindowSize(index, width, height);
   var iFrame = this.GetWindowIFrame(index);
   if(iFrame){
    var winElememnt = this.GetWindowElement(index);
    var realWidth = winElememnt.offsetWidth;
    var realHeight = winElememnt.offsetHeight;
    _aspxSetStyleSize(iFrame, realWidth, realHeight);
   }
  } else
   this.SetWindowCachedSize(index, width, height);
 },  
 GetContentHTML: function(){
  return this.GetContentHtml();
 },
 SetContentHTML: function(html){
  this.SetContentHtml(html);
 },
 GetContentHtml: function(){
  return this.GetWindowContentHtml(null);
 },
 SetContentHtml: function(html){
  this.SetWindowContentHtml(null, html);
 },
 GetContentIFrame: function(window){
  return this.GetWindowContentIFrame(null);
 },
 GetContentUrl: function(){
  return this.GetWindowContentUrl(null);
 },
 SetContentUrl: function(url){
  this.SetWindowContentUrl(null, url);
 },
 RefreshContentUrl: function(){
  this.RefreshWindowContentUrl(null);
 },
 SetWindowPopupElementID: function(window, popupElementId) {
  var index = (window != null) ? window.index : -1;
  if (popupElementId != this.GetPopupElementIDInternal(index)) {
   this.DetachFromPopupElement(index);
   this.AttachToPopupElement(index, popupElementId);
  }
 },
 SetPopupElementID: function(popupElementId) {
  this.SetWindowPopupElementID(null, popupElementId);
 },
 Show: function(){
  this.ShowWindow(null);
 },
 ShowAtElement: function(htmlElement){
  this.ShowWindowAtElement(null, htmlElement);
 },
 ShowAtElementByID: function(id){
  var htmlElement = document.getElementById(id);
  this.ShowWindowAtElement(null, htmlElement);
 },
 ShowAtPos: function(x, y){
  this.ShowWindowAtPos(null, Math.round(x), Math.round(y));
 },
 BringToFront: function(){
  this.BringWindowToFront(null);
 },
 Hide: function(){
  this.HideWindow(null);
 },
 IsWindowVisible: function(window){
  var index = (window != null) ? window.index : -1;
  return this.InternalIsWindowVisible(index);
 },
 IsVisible: function(){
  return this.InternalIsWindowVisible(-1);
 },
 GetWindow: function(index){
  return (0 <= index && index < this.windows.length) ? this.windows[index] : null;
 },
 GetWindowByName: function(name){
  for(var i = 0; i < this.windows.length; i ++)
   if(this.windows[i].name == name) return this.windows[i];
  return null;
 },
 GetWindowCount: function(){
  return this.GetWindowCountCore();
 },
 ShowWindow: function(window){
  var index = (window != null) ? window.index : -1;
  this.DoShowWindowAtPos(index, __aspxInvalidPosition, __aspxInvalidPosition, false, false, true);
 },
 ShowWindowAtElement: function(window, htmlElement){
  var index = (window != null) ? window.index : -1;
  var popupElementBackup = this.GetPopupElement(index);
  this.SetPopupElementInternal(index, htmlElement);
  this.ShowWindow(window);
  this.SetPopupElementInternal(index, popupElementBackup);
 },
 ShowWindowAtElementByID: function(window, id){
  var htmlElement = document.getElementById(id);
  this.ShowWindowAtElement(window, htmlElement);
 },
 ShowWindowAtPos: function(window, x, y){
  var index = (window != null) ? window.index : -1;
  this.DoShowWindowAtPos(index, x, y, true, false, true);
 },
 BringWindowToFront: function(window){
  var index = (window != null) ? window.index : -1;
  var element = this.GetWindowElement(index); 
  aspxGetPopupControlCollection().ActivateWindowElement(element);
 },
 HideWindow: function(window){
  var index = (window != null) ? window.index : -1;
  this.DoHideWindow(index);
 },
 GetWindowContentHTML: function(window){
  return this.GetWindowContentHtml(window);
 },
 SetWindowContentHTML: function(window, html){
  this.SetWindowContentHtml(window, html);
 },
 GetWindowContentHtml: function(window){
  var index = (window != null) ? window.index : -1;
  var element = this.GetWindowContentElement(index);
  return (element != null) ? element.innerHTML : "";
 },
 SetWindowContentHtml: function(window, html){
  var index = (window != null) ? window.index : -1;
  this.SetWindowContentHtmlCore(index, html);
 },
 SetWindowContentHtmlCore: function(index, html){
  var element = this.GetWindowContentElement(index);
  if(element != null){
   _aspxSetInnerHtml(element, html);
   this.ResizeWindowIFrame(index);
  }
 },
 GetWindowContentIFrame: function(window){
  var index = (window != null) ? window.index : -1;
  return this.GetWindowContentIFrameElement(index);
 },
 GetWindowContentUrl: function(window){
  var index = (window != null) ? window.index : -1;
  if(!this.IsWindowVisible(window))
   return this.GetWindowContentIFrameUrl(index);
  var element = this.GetWindowContentIFrameElement(index);
  return (element != null) ? element.src : "";
 },
 SetWindowContentUrl: function(window, url){
  var index = (window != null) ? window.index : -1;
  var element = this.GetWindowContentIFrameElement(index);
  var windowVisible = this.IsWindowVisible(window);
  if(windowVisible && element != null)
   this.ShowIframeElementAfterDragging(index);
  this.SetWindowContentIFrameUrl(index, url);
  var src = (__aspxIE && !windowVisible) ? this.SSLSecureBlankUrl : url;
  if (element == null)
   this.CreateWindowContentIFrameElement(index, src);
  else
   this.SetSrcToIframeElement(index, element, src);
 },
 RefreshWindowContentUrl: function(window){
  var index = (window != null) ? window.index : -1;
  if(__aspxIE)
   this.RefreshWindowContentUrlIE(index, window);
  else
   this.RefreshWindowContentUrlCommon(window);
 },
 RefreshWindowContentUrlIE: function(index, window){
  var windowVisible = this.InternalIsWindowVisible(index);
  if(windowVisible)
   this.RefreshWindowContentUrlIECore(index, window);
  else{
   var iframe = this.GetWindowContentIFrameElement(index);
   if(iframe)
    iframe.DXReloadAfterShowRequired = true;
  }
 },
 RefreshWindowContentUrlIECore: function(index, window){
  try{
   if(!this.GetIframeLoading(index)){
    var iframe = this.GetWindowContentIFrameElement(index);
    if(iframe)
     iframe.contentWindow.location.reload();
   }
  } catch(e) {
   this.RefreshWindowContentUrlCommon(window);
  }
 },
 RefreshWindowContentUrlCommon: function(window){
  this.SetWindowContentUrl(window, this.GetWindowContentUrl(window));
 },
 UpdatePosition: function(){
  this.UpdatePositionAtElement(this.GetPopupElement(-1));
 },
 UpdatePositionAtElement: function(popupElement){
  this.UpdateWindowPositionAtElement(null, popupElement);
 },
 UpdateWindowPosition: function(window){
  var index = (window != null) ? window.index : -1;
  this.UpdateWindowPositionAtElement(window, this.GetPopupElement(index));
 },
 UpdateWindowPositionAtElement: function(window, popupElement){
  var index = (window != null) ? window.index : -1;
  this.UpdateWindowPositionInternal(index, popupElement);
 },
 UpdateWindowPositionInternal: function(index, popupElement){
  var element = this.GetWindowElement(index);
  if(this.InternalIsWindowVisible(index) && element != null){
   var horizontalPopupPosition = this.GetClientPopupPos(element, popupElement, __aspxInvalidPosition, true, false);
   var verticalPopupPosition = this.GetClientPopupPos(element, popupElement, __aspxInvalidPosition, false, false);
   this.SetWindowPos(index, element, horizontalPopupPosition.position, verticalPopupPosition.position);
  } else
   this.DoShowWindowAtPos(index, __aspxInvalidDimension, __aspxInvalidDimension, false, false, false);
 },
 TryAutoUpdatePosition: function(){
  if(this.autoUpdatePosition) 
   this.UpdatePosition();   
 },
 CreateWindowContentIFrameElement: function(index, src){
  var content = this.GetWindowContentElement(index);
  var iframeParent = content;
  content.innerHTML = "";
  var iframe = this.CreateContentIFrameElement(index, src);
  var iframeDiv = null;
  if(!__aspxIE){
   iframeDiv = this.CreateContentIFrameDivElement(index);
   content.appendChild(iframeDiv);
   if (__aspxWebKitFamily) { 
    iframeDiv.style.height = content.clientHeight + "px";
    iframeDiv.style.height = "100%";
   } 
   iframeParent = iframeDiv;
  }
  iframeParent.appendChild(iframe);
  if(!__aspxIE){
   if(__aspxOpera)
    iframe.style.height = "100%";
   else
    iframe.style.height = iframeParent.clientHeight + "px";
  }
  this.InitIFrame(index);
  return iframe;
 },
 CreateContentIFrameElement: function(index, src){
  var iframe = document.createElement("IFRAME");
  iframe.id = this.GetWindowContentIFrameElementId(index);
  iframe.scrolling = "auto";
  iframe.frameBorder = 0;
  iframe.style.width = "100%";
  iframe.style.height = __aspxIE ? "100%" : "0px";
  this.SetSrcToIframeElement(index, iframe, src);
  return iframe;
 },
 CreateContentIFrameDivElement: function(index){
  var iframeDiv = document.createElement("DIV");
  iframeDiv.id = this.GetWindowContentIFrameDivElementID(index);
  iframeDiv.style.width = "100%";
  iframeDiv.style.height = "100%";
  return iframeDiv;
 },
 GetWindowHeaderTextCell: function(index){
  return this.GetWindowChild(index, "_PWH" + index + "T");
 },
 GetWindowHeaderImageCell: function(index){
  return this.GetWindowChild(index, "_PWH" + index + "I");
 },
 GetWindowFooterTextCell: function(index){
  return this.GetWindowChild(index, "_PWF" + index + "T");
 },
 GetWindowFooterImageCell: function(index){
  return this.GetWindowChild(index, "_PWF" + index + "I");
 },
 GetWindowHeaderImageUrl: function(index){
  var element = this.GetWindowHeaderImageCell(index);
  if(element != null){
   var img = _aspxGetChildByTagName(element, "IMG", 0);
   if(img != null)
    return img.src;
  }
  return "";
 },
 SetWindowHeaderImageUrl: function(index, url){
  var element = this.GetWindowHeaderImageCell(index);
  if(element != null){
   var img = _aspxGetChildByTagName(element, "IMG", 0);
   if(img != null)
    img.src = url;
  }
 },
 GetWindowFooterImageUrl: function(index){
  var element = this.GetWindowFooterImageCell(index);
  if(element != null){
   var img = _aspxGetChildByTagName(element, "IMG", 0);
   if(img != null)
    return img.src;
  }
  return "";
 },
 SetWindowFooterImageUrl: function(index, url){
  var element = this.GetWindowFooterImageCell(index);
  if(element != null){
   var img = _aspxGetChildByTagName(element, "IMG", 0);
   if(img != null)
    img.src = url;
  }
 },
 GetWindowHeaderNavigateUrl: function(index){
  var element = this.GetWindowHeaderTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    return link.href;
  }
  element = this.GetWindowHeaderImageCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    return link.href;
  }
  return "";
 },
 SetWindowHeaderNavigateUrl: function(index, url){
  var element = this.GetWindowHeaderTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    link.href = url;
  }
  var element = this.GetWindowHeaderImageCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    link.href = url;
  }
 },
 GetWindowFooterNavigateUrl: function(index){
  var element = this.GetWindowFooterTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    return link.href;
  }
  element = this.GetWindowFooterImageCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    return link.href;
  }
  return "";
 },
 SetWindowFooterNavigateUrl: function(index, url){
  var element = this.GetWindowFooterTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    link.href = url;
  }
  var element = this.GetWindowFooterImageCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    link.href = url;
  }
 },
 GetWindowHeaderText: function(index){
  var element = this.GetWindowHeaderTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    return link.innerHTML;
   else
    return element.innerHTML;
  }
  return "";
 },
 SetWindowHeaderText: function(index, text){
  var element = this.GetWindowHeaderTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    link.innerHTML = text;
   else
    element.innerHTML = text;
  }
 },
 GetWindowFooterText: function(index){
  var element = this.GetWindowFooterTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    return link.innerHTML;
   else
    return element.innerHTML;
  }
  return "";
 },
 SetWindowFooterText: function(index, text){
  var element = this.GetWindowFooterTextCell(index);
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    link.innerHTML = text;
   else
    element.innerHTML = text;
  }
 },
 RefreshPopupElementConnection: function(){
  if (this.HasDefaultWindow())
   this.AttachToPopupElement(-1);
  for(var i = 0; i < this.GetWindowCountCore(); i++) 
   this.AttachToPopupElement(i);
 },
 GetHeaderImageUrl: function(){
  return this.GetWindowHeaderImageUrl(-1);
 },
 SetHeaderImageUrl: function(value){
  this.SetWindowHeaderImageUrl(-1, value);
 },
 GetFooterImageUrl: function(){
  return this.GetWindowFooterImageUrl(-1);
 },
 SetFooterImageUrl: function(value){
  this.SetWindowFooterImageUrl(-1, value);
 },
 GetHeaderNavigateUrl: function(){
  return this.GetWindowHeaderNavigateUrl(-1);
 },
 SetHeaderNavigateUrl: function(value){
  this.SetWindowHeaderNavigateUrl(-1, value);
 },
 GetFooterNavigateUrl: function(){
  return this.GetWindowFooterNavigateUrl(-1);
 },
 SetFooterNavigateUrl: function(value){
  this.SetWindowFooterNavigateUrl(-1, value);
 },
 GetHeaderText: function(){
  return this.GetWindowHeaderText(-1);
 },
 SetHeaderText: function(value){
  this.SetWindowHeaderText(-1, value);
 },
 GetFooterText: function(){
  return this.GetWindowFooterText(-1);
 },
 SetFooterText: function(value){
  this.SetWindowFooterText(-1, value);
 },
 GetVisible: function(){
  return this.IsVisible();
 },
 SetVisible: function(visible){
  if(visible && !this.IsVisible())
   this.Show();
  else if(!visible && this.IsVisible())
   this.Hide();
 }
});
ASPxClientPopupControl.Cast = ASPxClientControl.Cast;
ASPxClientPopupControl.GetPopupControlCollection = function(){
 return aspxGetPopupControlCollection();
}
ASPxClientPopupControlCollection = _aspxCreateClass(ASPxClientControlCollection, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
  this.draggingControl = null;
  this.draggingWindowIndex = -1;
  this.gragXOffset = 0;
  this.gragYOffset = 0;
  this.visibleModalElements = new Array();
  this.visiblePopupWindowIds = new Array();
  this.zIndex = __aspxPopupControlZIndex;
  this.windowResizeByBodyScrollVisibilityChangingLockCount = 0;
  this.overControl = null;
  this.overWindowIndex = -1;
  this.overXPos = __aspxInvalidPosition;
  this.overYPos = __aspxInvalidPosition;
  this.appearTimerID = -1;
  this.disappearTimerID = -1;
  this.scrollEventLockCount = 0;
  this.currentActiveWindowElement = null;
  this.resizeControl = null;
  this.resizeIndex = -2;
  this.resizeCursor = "";
  this.resizePanel = null;
  this.selectBanned = false;
  this.pcWindowsAreRestrictedByDocumentWindow = true;
  this.searchForTabIndexInAllElements = false;
  this.SaveScrollState();
 },
 GetPopupWindowFromID: function(id){
  var pos = id.lastIndexOf(__aspxPCWIdSuffix);
  var name = id.substring(0, pos);
  var index = id.substr(pos + __aspxPCWIdSuffix.length);
  var popupControl = aspxGetPopupControlCollection().Get(name);
  return new _aspxPopupWindow(popupControl, index);
 },
 DoHideAllWindows: function(srcElement, excptId, applyToAll){
  for(var i = this.visiblePopupWindowIds.length - 1; i >= 0 ; i --){
   var id = this.visiblePopupWindowIds[i];
   if(id == excptId) continue;
   if(srcElement != null && _aspxGetParentById(srcElement, id) != null) continue;
   var popupWindow = this.GetPopupWindowFromID(id);
   var windowCloseAction = popupWindow.popupControl.GetWindowCloseAction(popupWindow.windowIndex);
   if(popupWindow.popupControl != null && (
    (windowCloseAction != "CloseButton" && windowCloseAction != "None") || applyToAll)){
    popupWindow.popupControl.DoHideWindow(parseInt(popupWindow.windowIndex));
   }
  }
 },
 DoShowAtCurrentPos: function(name, index){
  var pc = this.Get(name);
  if(pc != null && !pc.InternalIsWindowVisible(index))
   pc.DoShowWindowAtPos(index, this.overXPos, this.overYPos, false, true, true);
 },
 ActivateWindowElement: function(element, evt){
  var visibleWindowsCount = this.visiblePopupWindowIds.length;
  if (__aspxPopupControlZIndex <= element.style.zIndex && element.style.zIndex != visibleWindowsCount * 2 + __aspxPopupControlZIndex){
   this.DeleteWindowFromZIndexOrder(element);
  }
  this.SetWindowElementZIndex(element, __aspxPopupControlZIndex + visibleWindowsCount * 2);
  var pcWElementEventSource = _aspxFindEventSourceParentByTestFunc(evt, aspxTestPopupWindowElement);
  if(!evt || (evt && pcWElementEventSource == element)) { 
   if(this.GetCurrentActiveWindowElement() != element) {
    this.RefreshTabIndexes(false);
    this.SaveCurrentActiveWindowElement(element);
   }
  }
 },
 RefreshTabIndexes: function(forceRecalculate){
  var topModalWindow = this.GetTopModalWindow();
  if(topModalWindow != null || forceRecalculate){
   var topModalWindowZIndexArray = _aspxGetElementZIndexArray(topModalWindow);
   this.CalculateTabIndexes(topModalWindowZIndexArray);
  }
 },
 ElementHasTabIndex: function(element) {
  if(__aspxIE && __aspxBrowserVersion < 8) {
   var elementHtml = element.outerHTML;
   var attributeIndex = elementHtml.indexOf('tabIndex');
   return attributeIndex != -1 && attributeIndex < elementHtml.indexOf(">");
  }
  else 
   return _aspxIsExists(_aspxGetAttribute(element, "tabindex"));
 },
 IsElementCanBeActive: function(element) {
  return element.tagName === "INPUT" || element.tagName === "A" || this.ElementHasTabIndex(element);
 },
 GetCanBeActiveElements: function() {
  var searchForTabIndexInAllElements = aspxGetPopupControlCollection().searchForTabIndexInAllElements;
  if (searchForTabIndexInAllElements) {
   var elements = document.getElementsByTagName("*");
   var canBeActiveElements = [];
   for (var i = 0; i < elements.length; i++) {
    if (this.IsElementCanBeActive(elements[i], searchForTabIndexInAllElements))
     canBeActiveElements.push(elements[i]);
   }
   return canBeActiveElements;
  } else {
   var inputs = document.getElementsByTagName("INPUT");
   var links = document.getElementsByTagName("A");
   return _aspxCollectionsUnionToArray(inputs, links);
  }
 },
 CalculateTabIndexes: function(topModalWindowZIndexArray) {
  var elements = this.GetCanBeActiveElements();
  for (var i = 0; i < elements.length; i++) {
   var currentElementZIndexArray = _aspxGetElementZIndexArray(elements[i]);
   if (_aspxIsHigher(currentElementZIndexArray, topModalWindowZIndexArray))
    _aspxRestoreTabIndexAttribute(elements[i]);
   else
    _aspxChangeTabIndexAttribute(elements[i]);
  }
 },  
 PopupWindowIsModalByVisibleIndex: function(visiblePopupWindowIndex){
  return this.PopupWindowIsModalByID(this.visiblePopupWindowIds[visiblePopupWindowIndex]);
 }, 
 PopupWindowIsModalByID: function(windowElementID){
  var popupWindow = this.GetPopupWindowFromID(windowElementID);
  return popupWindow.popupControl.WindowIsModal(popupWindow.windowIndex);
 },
 SaveCurrentActiveWindowElement: function(windowElement) {
  this.currentActiveWindowElement = windowElement;
 },
 SkipCurrentActiveWindowElement: function(element) {
  if(element == this.GetCurrentActiveWindowElement())
   this.SaveCurrentActiveWindowElement(null);
 },
 GetCurrentActiveWindowElement: function() {
  return this.currentActiveWindowElement;
 },
 GetTopModalWindow: function(){   
  var topWindow = null;
  var topWindowZIndexArray = null;
  for(var i = 0; i < this.visiblePopupWindowIds.length; i++){
     var currentWindow = _aspxGetElementById(this.visiblePopupWindowIds[i]);     
     if(this.PopupWindowIsModalByVisibleIndex(i) && _aspxElementIsVisible(currentWindow)){
     var currentWindowZIndexArray = _aspxGetElementZIndexArray(currentWindow); 
     if(topWindow == null || _aspxIsHigher(currentWindowZIndexArray, topWindowZIndexArray)){              
     topWindow = currentWindow;
     topWindowZIndexArray = currentWindowZIndexArray;
     }
     }
  }
  return topWindow;
 },   
 DeleteWindowFromZIndexOrder: function(element){
  for(var i = this.visiblePopupWindowIds.length - 1; i >= 0 ; i--){
   var windowElement = _aspxGetElementById(this.visiblePopupWindowIds[i]);
   if(!windowElement)
    _aspxArrayRemoveAt(this.visiblePopupWindowIds, i);
   else if (windowElement.style.zIndex > element.style.zIndex) 
    this.SetWindowElementZIndex(windowElement, windowElement.style.zIndex - 2);
  }
 },
 SetWindowElementZIndex: function(element, zIndex){
  element.style.zIndex = zIndex;
  var iFrame = element.overflowElement;
  if(iFrame)
   iFrame.style.zIndex = zIndex - 1;
  var modalElement = element.modalElement;
  if(modalElement)
   modalElement.style.zIndex = zIndex - 1;
  this.UpdateWindowsStateInputElement(element.id);
  this.UpdateWindowsStateCookie(element.id);
 }, 
 AdjustModalElementsBounds: function(){
  for(var i = 0; i < this.visibleModalElements.length; i++)
   this.AdjustModalElementBounds(this.visibleModalElements[i]);
 },
 AdjustModalElementBounds: function(element){
  if(!_aspxIsExistsElement(element)) return;
  var x = _aspxPrepareClientPosForElement(0, element, true);
  var y = _aspxPrepareClientPosForElement(0, element, false);
  _aspxSetStylePosition(element, x, y);
  if(__aspxNetscapeFamily) _aspxSetStyleSize(element, 1, 1);
  _aspxSetStyleSize(element, _aspxGetDocumentWidth(), _aspxGetDocumentHeight());
 },
 ClearAppearTimer: function(){
  this.appearTimerID = _aspxClearTimer(this.appearTimerID);
 },
 ClearDisappearTimer: function(){
  this.disappearTimerID = _aspxClearTimer(this.disappearTimerID); 
 },
 IsAppearTimerActive: function(){
  return this.appearTimerID > -1;
 },
 IsDisappearTimerActive: function(){
  return this.disappearTimerID > -1;
 },
 SetAppearTimer: function(name, index, timeout){
  this.appearTimerID = _aspxSetTimeout("aspxPEMOverTimer(\"" + name + "\", " + index + ")", timeout);
 },
 SetDisappearTimer: function(name, index, timeout){
  this.disappearTimerID = _aspxSetTimeout("aspxPWDisappearTimer(\"" + name + "\", " + index + ")", timeout);
 },
 GetDocScrollDifference: function(){
  return new _aspxScrollDifference(_aspxGetDocumentScrollLeft() - this.docScrollLeft, _aspxGetDocumentScrollTop() - this.docScrollTop);
 },
 IsDocScrolled: function(scroll){
  return scroll.horizontal != 0 || scroll.vertical != 0;
 },
 SaveScrollState: function(){
  this.docScrollLeft = _aspxGetDocumentScrollLeft();
  this.docScrollTop = _aspxGetDocumentScrollTop();
 },
 InitDragObject: function(control, index, x, y, xClientCorrection, yClientCorrection){
  this.draggingControl = control;
  this.draggingWindowIndex = index;
  this.gragXOffset = x;
  this.gragYOffset = y;
  this.xClientCorrection = xClientCorrection;
  this.yClientCorrection = yClientCorrection;
  this.SetDocumentSelectionBan(true);
 },
 InitOverObject: function(control, index, evt){
  this.overControl = control;
  this.overWindowIndex = index;
  if(evt) 
     this.SaveCurrentMouseOverPos(evt);
 },
 InitResizeObject: function(control, index, cursor, resizePanel){
  this.resizeControl = control;
  this.resizeIndex = index;
  this.resizeCursor = cursor;
  this.resizePanel = resizePanel;
  this.SetDocumentSelectionBan(true);
 },
 SetDocumentSelectionBan: function(value){
  this.selectBanned = value;
  if(__aspxWebKitFamily){
   if(value){
    if(!this.webkitUserSelectBackup && document.body.style.webkitUserSelect)
     this.webkitUserSelectBackup = document.body.style.webkitUserSelect;
    document.body.style.webkitUserSelect = "none";
   }else{
    if(this.webkitUserSelectBackup){
     document.body.style.webkitUserSelect = this.webkitUserSelectBackup;
     delete this.webkitUserSelectBackup;
    } else
     document.body.style.webkitUserSelect = "auto";
   } 
  }
 },
 IsResizeInint: function(){
  return this.resizeControl != null;
 },
 ClearDragObject: function(){
  this.draggingControl = null;
  this.draggingWindowIndex = -1;
  this.gragXOffset = 0;
  this.gragYOffset = 0;
  this.SetDocumentSelectionBan(this.resizeControl != null);
 },
 ClearResizeObject: function(){
  this.resizeControl = null;
  this.resizeIndex = -2;
  this.resizeCursor = "";
  this.SetDocumentSelectionBan(this.draggingControl != null);
  this.resizePanel.parentNode.removeChild(this.resizePanel);
 },
 Drag: function(evt){
  var x = _aspxGetEventX(evt);
  var y = _aspxGetEventY(evt);
  if(this.pcWindowsAreRestrictedByDocumentWindow && _aspxCoordinatesInDocumentRect(x, y)){
   x += this.gragXOffset;
   y += this.gragYOffset;
   this.draggingControl.OnDrag(this.draggingWindowIndex, x, y, this.xClientCorrection, this.yClientCorrection);
  }
 },
 DragStop: function(){
  this.draggingControl.OnDragStop(this.draggingWindowIndex);
  this.ClearDragObject();
 },
 ResizeStop: function(evt){
  this.resizeControl.OnResizeStop(evt, this.resizeIndex, this.resizeCursor, this.resizePanel);
  aspxGetPopupControlCollection().ClearResizeObject();
 },
 OnPWMouseMove: function(evt, name, index){
  if (this.draggingControl == null && 
   this.overControl == null && 
   this.resizeControl == null){
   var pc = aspxGetPopupControlCollection().Get(name);
   if(pc != null) pc.OnMouseMove(evt, index);
  }
 },
 OnPWMouseOver: function(evt){
  if (!this.overControl || this.draggingControl) return;
  if(this.IsOverPopupWindow(evt))
   this.ClearDisappearTimer();
 },
 IsOverPopupWindow: function(evt){
  return _aspxFindEventSourceParentByTestFunc(evt, aspxTestOverPopupWindowElement) != null;
 },
 OnDocumentMouseDown: function(evt){
  var popupElement = _aspxFindEventSourceParentByTestFunc(evt, aspxTestPopupControlElement);
  var excptId = popupElement == null ? "" :
   popupElement.DXPopupElementControl.GetWindowElementId(popupElement.DXPopupWindowIndex);
  this.OnMouseDownCore(evt, excptId);
 },
 OnMouseDown: function(evt){
  this.OnMouseDownCore(evt, "");
 },
 OnMouseDownCore: function(evt, excptId){
  if(this.IsDocumentIsCoveredByModalElement())
   return;
  var srcElement = _aspxGetEventSource(evt);
  this.DoHideAllWindows(srcElement, excptId, false);
  aspxGetPopupControlCollection().ClearAppearTimer();
 },
 OnMouseMove: function(evt){
  if(this.draggingControl != null){
   if(__aspxIE && !_aspxGetIsLeftButtonPressed(evt)) 
    return this.DragStop();
   else
    this.Drag(evt);
  }
  else if(this.overControl != null){
   this.OnMouseOver(evt);
  }
  else if(this.resizeControl != null){
   if(__aspxIE && !_aspxGetIsLeftButtonPressed(evt)) 
    this.ResizeStop(evt);
   else
    this.resizeControl.OnResize(evt, this.resizeIndex, this.resizeCursor, this.resizePanel);
  }
 },
 OnMouseOver: function(evt){
  var element = _aspxFindEventSourceParentByTestFunc(evt, aspxTestPopupControlOverElement);
  if (element != null){
   this.ClearDisappearTimer();
   this.SaveCurrentMouseOverPos(evt);
   return _aspxCancelBubble(evt);
  }
  this.OnMouseOut();
 },
 OnMouseOut: function(){
  if (!this.overControl || this.draggingControl) return;
  this.ClearAppearTimer();
  var windowCloseAction = this.overControl.GetWindowCloseAction(this.overWindowIndex);
  if(windowCloseAction == "MouseOut"  && this.overControl.InternalIsWindowVisible(this.overWindowIndex)){
   if (!this.IsDisappearTimerActive())
    this.SetDisappearTimer(this.overControl.name, this.overWindowIndex, this.overControl.disappearAfter);
  }
  else
   this.OverStop();
 },
 OnMouseUp: function(evt){
  if(this.draggingControl != null)  
   this.DragStop();
  if(this.resizeControl != null)  
   this.ResizeStop(evt);
 },
 OnResize: function(evt){
  this.AutoUpdateElementsPosition();
  this.AdjustModalElementsBounds();
 },
 OnScroll: function(evt){
  if(this.scrollEventLockCount > 0)
   return;
  var scroll = this.GetDocScrollDifference();
  if(this.IsDocScrolled(scroll)){ 
   this.CorrectPositionAtScroll(scroll);
   this.AdjustModalElementsBounds();
   this.SaveScrollState();
  }
 },
 LockScrollEvent: function() {
  this.scrollEventLockCount++;
 },
 UnlockScrollEvent: function() {
  this.scrollEventLockCount--;
 },
 CorrectPositionAtScroll: function(scroll){
  for(var i = 0; i < this.visiblePopupWindowIds.length; i++){
    var popupWindow = this.GetPopupWindowFromID(this.visiblePopupWindowIds[i]);
    var popupControl = popupWindow.popupControl;
    if(popupControl != null && popupControl.InternalIsWindowVisible(popupWindow.windowIndex)){
     var isNeedFix = popupControl.IsFFTextCurFixRequired(popupWindow.windowIndex);
     if(popupControl.autoUpdatePosition) 
     popupWindow.popupControl.TryAutoUpdatePosition();   
     else if(isNeedFix) 
     this.FFScrollEmulation(scroll, popupWindow);
    }
  } 
 },
 FFScrollEmulation: function(scroll, popupWindow){
  var windowElement = popupWindow.popupControl.GetWindowElement(popupWindow.windowIndex);
  windowElement.style.left = (windowElement.offsetLeft - scroll.horizontal) + "px";
  windowElement.style.top = (windowElement.offsetTop - scroll.vertical) + "px";
 },
 OnSelectStart: function(){
  return !this.selectBanned;
 },
 OverStop: function(){
  this.overControl = null;
  this.overWindowIndex = -1;
 },
 OnPWDisappearTimer: function(name, index){
  var pc = this.Get(name);
  if(pc != null){
   if(!pc.DoHideWindow(index))
    this.OverStop();  
   else
    this.ClearDisappearTimer();
  }
 },
 SaveCurrentMouseOverPos: function(evt){
  this.overXPos = _aspxGetEventX(evt);
  this.overYPos = _aspxGetEventY(evt);
 },
 RegisterVisibleModalElement: function(element){
  if(_aspxArrayIndexOf(this.visibleModalElements, element) == -1)
   this.visibleModalElements.push(element);
 },
 UnregisterVisibleModalElement: function(element){
  _aspxArrayRemove(this.visibleModalElements, element);
 },
 RegisterVisibleWindow: function(element, popupControl, index){
  if(_aspxArrayIndexOf(this.visiblePopupWindowIds, element.id) == -1){
   this.visiblePopupWindowIds.push(element.id);
   if(popupControl)
    aspxGetPopupControlCollection().InitOverObject(popupControl, index, null);
   this.OnRegisteredVisibleWindow(element);
  }
 },
 OnRegisteredVisibleWindow: function(element){
  var elementIndex = _aspxArrayIndexOf(this.visiblePopupWindowIds, element.id);
  if(this.PopupWindowIsModalByVisibleIndex(elementIndex))
     _aspxRemoveFocus(element);
 },
 UnregisterVisibleWindow: function(element){
  this.DeleteWindowFromZIndexOrder(element);
  _aspxArrayRemove(this.visiblePopupWindowIds, element.id);
  var forceRecalculate = this.PopupWindowIsModalByID(element.id);
  this.RefreshTabIndexes(forceRecalculate);
  this.SkipCurrentActiveWindowElement(element);
 },
 UpdateWindowsStateCookie: function(id){
  var pos = id.lastIndexOf(__aspxPCWIdSuffix);
  var name = id.substring(0, pos);
  var popupControl = aspxGetPopupControlCollection().Get(name);
  if(popupControl != null)
   popupControl.UpdateWindowsStateCookie(false);    
 },
 UpdateWindowsStateInputElement: function(id){
  var pos = id.lastIndexOf(__aspxPCWIdSuffix);
  var name = id.substring(0, pos);
  var popupControl = aspxGetPopupControlCollection().Get(name);
  if(popupControl != null)
   popupControl.UpdateWindowsStateInputElement(false);    
 },
 AutoUpdateElementsPosition: function() {
  for(var i = 0; i < this.visiblePopupWindowIds.length; i++){
   var popupWindow = this.GetPopupWindowFromID(this.visiblePopupWindowIds[i]);
   var popupControl = popupWindow.popupControl;
   if(popupControl != null && popupControl.InternalIsWindowVisible(popupWindow.windowIndex))
    popupControl.TryAutoUpdatePosition();
  }
 },
 IsDocumentIsCoveredByModalElement: function() {
  for(var i = 0; i < this.visiblePopupWindowIds.length; i++){
   var popupWindow = this.GetPopupWindowFromID(this.visiblePopupWindowIds[i]);
   var popupControl = popupWindow.popupControl;
   if(popupControl && popupControl.GetWindowModalElement(popupWindow.windowIndex))
    return true;
  }
  return false;
 },
 LockWindowResizeByBodyScrollVisibilityChanging: function(){
  this.windowResizeByBodyScrollVisibilityChangingLockCount++;
 },
 UnlockWindowResizeByBodyScrollVisibilityChanging: function(){
  this.windowResizeByBodyScrollVisibilityChangingLockCount--;
 },
 WindowResizeByBodyScrollVisibilityChangingLocked: function(){
  return this.windowResizeByBodyScrollVisibilityChangingLockCount > 0;
 },
 HideAllWindows: function(){
  this.DoHideAllWindows(null, "", true);
 }
});
var __aspxPopupControlCollection = null;
function aspxGetPopupControlCollection(){
 if(__aspxPopupControlCollection == null)
  __aspxPopupControlCollection  = new ASPxClientPopupControlCollection();
 return __aspxPopupControlCollection;
}
ASPxClientPopupWindow = _aspxCreateClass(null, {
 constructor: function(popupControl, index, name){
  this.popupControl = popupControl;
  this.index = index;
  this.name = name;
 },
 GetHeaderImageUrl: function(){
  return this.popupControl.GetWindowHeaderImageUrl(this.index);
 },
 SetHeaderImageUrl: function(value){
  this.popupControl.SetWindowHeaderImageUrl(this.index, value);
 },
 GetFooterImageUrl: function(){
  return this.popupControl.GetWindowFooterImageUrl(this.index);
 },
 SetFooterImageUrl: function(value){
  this.popupControl.SetWindowFooterImageUrl(this.index, value);
 },
 GetHeaderNavigateUrl: function(){
  return this.popupControl.GetWindowHeaderNavigateUrl(this.index);
 },
 SetHeaderNavigateUrl: function(value){
  this.popupControl.SetWindowHeaderNavigateUrl(this.index, value);
 },
 GetFooterNavigateUrl: function(){
  return this.popupControl.GetWindowFooterNavigateUrl(this.index);
 },
 SetFooterNavigateUrl: function(value){
  this.popupControl.SetWindowFooterNavigateUrl(this.index, value);
 },
 GetHeaderText: function(){
  return this.popupControl.GetWindowHeaderText(this.index);
 },
 SetHeaderText: function(value){
  this.popupControl.SetWindowHeaderText(this.index, value);
 },
 GetFooterText: function(){
  return this.popupControl.GetWindowFooterText(this.index);
 },
 SetFooterText: function(value){
  this.popupControl.SetWindowFooterText(this.index, value);
 }
});
ASPxClientPopupWindowEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(window){
  this.constructor.prototype.constructor.call(this);
  this.window = window;
 }
});
ASPxClientPopupWindowCancelEventArgs = _aspxCreateClass(ASPxClientCancelEventArgs, {
 constructor: function(window){
  this.constructor.prototype.constructor.call(this);
  this.window = window;
 }
});
function _aspxPopupWindow(popupControl, windowIndex){
 this.popupControl = popupControl;
 this.windowIndex = windowIndex;
}
function _aspxScrollDifference(horizontal, vertical){
 this.horizontal = horizontal;
 this.vertical = vertical;
}
function aspxPEMOverTimer(name, index){
 aspxGetPopupControlCollection().DoShowAtCurrentPos(name, index);
}
function aspxPWDisappearTimer(name, index){
 aspxGetPopupControlCollection().OnPWDisappearTimer(name, index);
}
function aspxPWCBClick(evt, name, index){
 if(__aspxIE || __aspxOpera)
  _aspxEmulateDocumentOnMouseDown(evt); 
 var pc = aspxGetPopupControlCollection().Get(name);
 if(pc != null) pc.OnCloseButtonClick(index);
}
function aspxPWCBMDown(evt){
 return _aspxCancelBubble(evt);
}
function aspxPWEMOver(evt){
 aspxGetPopupControlCollection().OnPWMouseOver(evt);
}
function aspxPWMEMDown(evt){
 var element = _aspxGetEventSource(evt);
 if (element != null) 
  element.DXModalPopupControl.OnMouseDownModalElement(evt, element.DXModalPopupWindowIndex);
}
function aspxPEMEvent(evt){
 var element = _aspxFindEventSourceParentByTestFunc(evt, aspxTestPopupControlElement);
 if (element != null){
  if (evt.type == "mousedown"){
   if (element.DXPopupElementControl.InternalIsWindowVisible(element.DXPopupWindowIndex))
    element.isPopuped = true;
   else
    element.isPopuped = false;
   aspxGetPopupControlCollection().OnMouseDown(evt);     
  }
  else{
   var windowPopupAction = element.DXPopupElementControl.GetWindowPopupAction(element.DXPopupWindowIndex);
   if (windowPopupAction=="RightMouseClick" || _aspxGetIsLeftButtonPressed(evt)){
    if (windowPopupAction=="RightMouseClick")
     _aspxPreventContextMenu(evt);
    var windowCloseAction = element.DXPopupElementControl.GetWindowCloseAction(element.DXPopupWindowIndex);
    if (!(element.isPopuped && windowCloseAction == "OuterMouseClick"))
     element.DXPopupElementControl.DoShowWindow(element.DXPopupWindowIndex, evt);
    if (windowCloseAction == "MouseOut")
     aspxGetPopupControlCollection().InitOverObject(element.DXPopupElementControl, element.DXPopupWindowIndex, evt);
    return false;
   }
  }
 }
}
function aspxPWDGMDown(evt, name, index){
 return aspxPWMDown(evt, name, index, true);
}
function aspxPWGripMDown(evt, name, index){
 aspxPWMDownCore(evt, name, index, false);
 return aspxPWCBMDown(evt);
}
function aspxPWMDown(evt, name, index, isWindowContentDraggingAllowed){
 aspxPWMDownCore(evt, name, index, isWindowContentDraggingAllowed);
 if(isWindowContentDraggingAllowed){ 
  aspxGetPopupControlCollection().OnDocumentMouseDown(evt); 
  if(typeof(aspxGetDropDownCollection) == "function")
   aspxGetDropDownCollection().OnDocumentMouseDown(evt); 
  if (!__aspxIE) 
   evt.preventDefault();
  return _aspxCancelBubble(evt); 
 }
}
function aspxPWMDownCore(evt, name, index, isDraggingAllowed){
 var pc = aspxGetPopupControlCollection().Get(name);
 if(pc != null) {
  pc.OnActivateMouseDown(evt, index);
  pc.OnMouseDown(evt, index, isDraggingAllowed);
 }
}
function aspxPWResize(name, index){
 var pc = aspxGetPopupControlCollection().Get(name);
 if(pc != null) pc.ResizeWindowIFrame(index);
}
function aspxPWMMove(evt, name, index){
 aspxGetPopupControlCollection().OnPWMouseMove(evt, name, index);
}
function aspxPCATimer(name, index){
 var pc = aspxGetPopupControlCollection().Get(name);
 if(pc != null) pc.OnAnimationTimer(index);
}
function aspxPCAStop(name, index){
 var pc = aspxGetPopupControlCollection().Get(name);
 if(pc != null) pc.OnAnimationStop(index);
}
function aspxPCIframeLoad(evt){
 var srcElement = _aspxGetEventSource(evt);
 if(srcElement) {
  var pcName = srcElement.popupControlName;
  var pcWndIndex = srcElement.pcWndIndex;
  if(pcName) { 
   var pc = aspxGetPopupControlCollection().Get(pcName);
   pc.OnIFrameLoad(pcWndIndex);
  }
 }
}
_aspxAttachEventToDocument("mousedown", aspxPopupControlDocumentMouseDown);
function aspxPopupControlDocumentMouseDown(evt){
 aspxGetPopupControlCollection().OnDocumentMouseDown(evt);
}
_aspxAttachEventToDocument("mouseup", aspxPopupControlDocumentMouseUp);
function aspxPopupControlDocumentMouseUp(evt){
 return aspxGetPopupControlCollection().OnMouseUp(evt); 
}
_aspxAttachEventToDocument("mousemove", aspxPopupControlDocumentMouseMove);
function aspxPopupControlDocumentMouseMove(evt){
 if(typeof(aspxGetPopupControlCollection) != "undefined")
  aspxGetPopupControlCollection().OnMouseMove(evt); 
}
_aspxAttachEventToDocument("mouseout", aspxPopupControlDocumentMouseOut);
function aspxPopupControlDocumentMouseOut(){
 if(typeof(aspxGetPopupControlCollection) != "undefined")
  aspxGetPopupControlCollection().OnMouseOut(); 
}
_aspxAttachEventToElement(window, "resize", aspxPopupControlWindowResize);
function aspxPopupControlWindowResize(evt){
 aspxGetPopupControlCollection().OnResize(evt); 
}
_aspxAttachEventToElement(window, "scroll", aspxPopupControlWindowScroll);
function aspxPopupControlWindowScroll(evt){
 aspxGetPopupControlCollection().OnScroll(evt); 
}
_aspxAttachEventToDocument("selectstart", aspxPopupControlDocumentSelectStart);
function aspxPopupControlDocumentSelectStart(evt){
 var ret = aspxGetPopupControlCollection().OnSelectStart(evt); 
 if(!ret) return false; 
}
function aspxTestPopupWindowElement(element) {
 return !!element.DXPopupWindowElement;
}
function aspxTestPopupControlElement(element){
 return element.DXPopupElementControl && _aspxIsExists(element.DXPopupWindowIndex);
}
function aspxTestPopupControlOverElement(element){
 var collection = aspxGetPopupControlCollection();
 var windowId = collection.overControl.GetWindowElementId(collection.overWindowIndex);
 var popupElement = collection.overControl.GetPopupElement(collection.overWindowIndex);
 if (popupElement) {
  var popupElementId = popupElement.id;
  return (element.id == windowId || element.id == popupElementId);
 }
 return false;
}
function aspxTestOverPopupWindowElement(element){
 var collection = aspxGetPopupControlCollection();
 var windowId = collection.overControl.GetWindowElementId(collection.overWindowIndex);
 var popupElement = collection.overControl.GetPopupElement(collection.overWindowIndex);
 if (popupElement) {
  var popupElementId = popupElement.id;
  return (element.id == windowId || element.id == popupElementId);
 }
 return false;
}
var __aspxLBSerializingSeparator = "|";
var __aspxLBSerializingSeparatorLength = __aspxLBSerializingSeparator.length;
var __aspxLoadRangeItemsCallbackPrefix = "LBCRI";
var __aspxLBIPostfixes = ['I', 'T'];
var __aspxLBIIdSuffix = "LBI";
var __aspxLBSIIdSuffix = __aspxLBIIdSuffix + "-1";
var __aspxLBTSIdSuffix = "_TS";
var __aspxLBBSIdSuffix = "_BS";
var __aspxLBHeaderDivIdSuffix = "_H";
var __aspxLTableIdSuffix = "_LBT";
var __aspxLEVISuffix = "_VI";
var __aspxLBDSuffix = "_D";
var __aspxEmptyItemsRange = "0:-1";
var __aspxNbsp = "&nbsp;";
var __aspxNbspChar = String.fromCharCode(160);
var ListBoxSelectionMode = { Single : 0, Multiple : 1, CheckColumn : 2 };
ASPxClientListEdit = _aspxCreateClass(ASPxClientEdit, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.SelectedIndexChanged = new ASPxClientEvent();
  this.savedSelectedIndex = -1;
 },
 FindInputElement: function() {
  return this.FindStateInputElement();
 },
 FindStateInputElement: function(){
  return document.getElementById(this.name + __aspxLEVISuffix);
 },
 GetItem: function(index) {
  throw "Not implemented";
 },
 GetItemValue: function(index) {
  throw "Not implemented";
 },
 GetValue: function(){
  return this.GetItemValue(this.GetSelectedIndex());
 }, 
 GetSelectedIndexInternal: function(){
  return this.savedSelectedIndex;
 }, 
 SetSelectedIndexInternal: function(index){
  this.savedSelectedIndex = index;
 },
 RaiseItemClick: function() {
  var processOnServer = this.autoPostBack;
  if(!this.ItemClick.IsEmpty()){
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.ItemClick.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 RaiseItemDoubleClick: function() {
  var processOnServer = this.autoPostBack;
  if(!this.ItemDoubleClick.IsEmpty()){
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.ItemDoubleClick.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 RaiseValueChangedEvent: function() {
  if(!this.isInitialized) return false;
  var processOnServer = ASPxClientEdit.prototype.RaiseValueChangedEvent.call(this);
  processOnServer = this.RaiseValueChangedAdditionalEvents(processOnServer);
  return processOnServer;
 },
 RaiseValueChangedAdditionalEvents: function(processOnServer){
  return this.RaiseSelectedIndexChanged(processOnServer);
 },
 RaiseSelectedIndexChanged: function(processOnServer) {
  if(!this.SelectedIndexChanged.IsEmpty()){
   var args = new ASPxClientProcessingModeEventArgs(processOnServer);
   this.SelectedIndexChanged.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 UpdateHiddenInputs: function(){
  var element = this.FindStateInputElement();
  if(_aspxIsExistsElement(element)) {
   var value = this.GetValue();
   if (value == null)
    value = "";
   element.value = value;
  }
 },
 GetSelectedItem: function(){
  var index = this.GetSelectedIndexInternal();
  return this.GetItem(index);
 },
 GetSelectedIndex: function(){
  return this.GetSelectedIndexInternal();
 },
 SetSelectedItem: function(item){
  var index = (item != null) ? item.index : -1;
  this.SetSelectedIndex(index);
 },
 SetSelectedIndex: function(index){
  this.SelectIndexSilent(index);
 },
 SelectIndexSilent: function(index){
  throw "Not implemented";
 }
});
ASPxClientListEditItem = _aspxCreateClass(null, {
 constructor: function(listEditBase, index, text, value, imageUrl){
  this.listEditBase = listEditBase;
  this.index = index;
  this.imageUrl = imageUrl;
  this.text = text;
  this.value = value;
 }
});
ASPxClientListBoxItem = _aspxCreateClass(ASPxClientListEditItem, {
 constructor: function(listEditBase, index, texts, value, imageUrl, selected){
  this.constructor.prototype.constructor.call(this, listEditBase, index, null, value, imageUrl);
  this.selected = selected ? selected : false;
  this.texts = texts;
  this.text = listEditBase.FormatText(texts);
 },
 GetColumnText: function(columnIndexOrFieldName){
  var columnIndex = -1;
  if(typeof(columnIndexOrFieldName) == "string")
   columnIndex = _aspxArrayIndexOf(this.listEditBase.columnFieldNames, columnIndexOrFieldName);
  else if(typeof(columnIndexOrFieldName) == "number")
   columnIndex = columnIndexOrFieldName;
  return this.GetColumnTextByIndex(columnIndex);
 },
 GetColumnTextByIndex: function(columnIndex){
  if(0 <= columnIndex && columnIndex < this.texts.length)
   return this.texts[columnIndex];
  else
   return null;
 }
});
_aspxListBoxScrollCallbackHelperBase = _aspxCreateClass(null, {
 constructor: function(listBoxControl) {
  this.listBoxControl = listBoxControl;
  this.itemsRange = "";
  this.defaultItemsRange = "0:" + (this.listBoxControl.callbackPageSize - 1);
 },
 OnScroll: function(){ },
 Reset: function(){ },
 IsScrolledToTopSpacer: function(){ return false; },
 IsScrolledToBottomSpacer: function(){ return false; },
 GetIsNeedToHideTopSpacer: function(){ return false; },
 GetIsNeedCallback: function(){ return false; },
 GetItemsRangeForLoad: function(){ return this.defaultItemsRange; },
 SetItemsRangeForLoad: function(){}
});
_aspxListBoxScrollCallbackHelper = _aspxCreateClass(_aspxListBoxScrollCallbackHelperBase, {
 constructor: function(listBoxControl) {
  this.constructor.prototype.constructor.call(this, listBoxControl);
  this.isScrolledToTopSpacer = false;
  this.isScrolledToBottomSpacer = false;
 },
 OnScroll: function(){
  this.DetectScrollDirection();
  this.ResetItemsRange();
  if(this.GetIsAnySpacerVisible())
   this.RecalcItemsRangeForLoad();
 },
 DetectScrollDirection: function(){
  var listBoxControl = this.listBoxControl;
  var divElement = listBoxControl.GetScrollDivElement();
  var listTable = listBoxControl.GetListTable();
  var scrollTop = divElement.scrollTop;
  var scrollBottom = divElement.scrollTop + divElement.clientHeight;
  var isTopSpacerVisible = listBoxControl.GetScrollSpacerVisibility(true);
  var isBottomSpacerVisible = listBoxControl.GetScrollSpacerVisibility(false);
  var topSpacerHeight = listBoxControl.GetScrollSpacerVisibility(true) ? parseInt(listBoxControl.GetScrollSpacerElement(true).clientHeight) : 0;
  this.isScrolledToTopSpacer = (scrollTop < topSpacerHeight) && isTopSpacerVisible;
  this.isScrolledToBottomSpacer = (scrollBottom >= topSpacerHeight + listTable.clientHeight) && isBottomSpacerVisible;
 },
 Reset: function(){
  this.ResetItemsRange();
  this.isScrolledToTopSpacer = false;
  this.isScrolledToBottomSpacer = false;
 },
 ResetItemsRange: function(){
  this.itemsRange = "";
 },
 RecalcItemsRangeForLoad: function(){
  if(this.listBoxControl.isCallbackMode) {
   if(this.isScrolledToTopSpacer || this.isScrolledToBottomSpacer)
    this.SetItemsRangeForLoad(this.isScrolledToTopSpacer);
  }
 },
 IsScrolledToTopSpacer: function(){
  return this.isScrolledToTopSpacer;
 },
 IsScrolledToBottomSpacer: function(){
  return this.isScrolledToBottomSpacer;
 },
 GetIsAnySpacerVisible: function(){
  return this.isScrolledToTopSpacer || this.isScrolledToBottomSpacer;
 },
 GetIsNeedCallback: function(){
  return !this.GetIsItemsRangeEmpty();
 },
 GetIsNeedToHideTopSpacer: function(){
  return this.isScrolledToTopSpacer && this.GetIsItemsRangeEmpty();
 },
 GetItemsRangeForLoad: function(){
  return (!this.GetIsItemsRangeEmpty() ? this.itemsRange : this.defaultItemsRange);
 },
 SetItemsRangeForLoad: function(isForTop){
  var listbox = this.listBoxControl;
  var beginIndex = isForTop ? 
   listbox.serverIndexOfFirstItem - listbox.callbackPageSize : 
   listbox.serverIndexOfFirstItem + listbox.GetItemCount();
  beginIndex = beginIndex < 0 ? 0 : beginIndex;
  var endIndex = isForTop ? 
   listbox.serverIndexOfFirstItem - 1 : 
   beginIndex + listbox.callbackPageSize - 1;
  this.itemsRange = beginIndex + ":" + endIndex;
  this.isScrolledToTopSpacer = isForTop;
  this.isScrolledToBottomSpacer = !isForTop;
 },
 GetIsItemsRangeEmpty: function(){
  return (this.itemsRange == "" || this.itemsRange == __aspxEmptyItemsRange);
 }
});
ASPxClientListBoxBase = _aspxCreateClass(ASPxClientListEdit, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.APILockCount = 0;
  this.scrollOnKBNavigationLockCount = 0;
  this.isComboBoxList = false;
  this.isSyncEnabled = true;
  this.ownerName = "";
  this.selectionEventsLockCount = 0;
  this.syncLockCount = 0;
  this.encodeHtml = true;
  this.serializingHelper = null;
  this.deletedItems = [];
  this.insertedItems = [];
  this.itemsValue = [];
  this.ItemDoubleClick = new ASPxClientEvent();
  this.ItemClick = new ASPxClientEvent();
 },
 LockScrollOnKBNavigation: function(){
  this.scrollOnKBNavigationLockCount++;
 },
 UnlockScrollOnKBNavigation: function(){
  this.scrollOnKBNavigationLockCount--;
 },
 IsScrollOnKBNavigationLocked: function() {
  return this.scrollOnKBNavigationLockCount > 0;
 },
 LockSelectionEvents: function(){
  this.selectionEventsLockCount++;
 },
 UnlockSelectionEvents: function(){
  this.selectionEventsLockCount--;
 },
 IsSelectionEventsLocked: function(){
  return this.selectionEventsLockCount > 0;
 },
 GetItemCount: function(){
  return 0;
 },
 GetItemValue: function(index){
  if(0 <= index && index < this.GetItemCount())
   return this.PrepareItemValue(this.itemsValue[index]);
  return null;
 },
 GetItemTexts: function(item) {
  return item.text;
 },
 PrepareItemValue: function(value) {
  return (typeof(value) == "string" && value == "" && this.convertEmptyStringToNull) ? null : value;
 },
 LoadItemsFromCallback: function(isToTop, itemStrings){
 },
 SetValue: function(value){
  var index = this.FindItemIndexByValue(value);
  this.SelectIndexSilentAndMakeVisible(index);
 },
 FindItemIndexByValue: function(value){
  for(var i = 0; i < this.GetItemCount(); i++){
   if(this.GetItemValue(i) == value)
    return i;
  }
  return -1;
 },
 FindItemIndexByText: function(text){
  for(var i = 0; i < this.GetItemCount(); i ++){
   if(this.GetItem(i).text == text)
    return i;
  }
  return -1;
 },
 SelectIndex: function (index){ 
  if(this.SelectIndexSilentAndMakeVisible(index, false)){
   this.RaisePersonalStandardValidation();
   this.OnValueChanged();
  }
 },
 SelectIndexSilentAndMakeVisible: function(index){
  var selectionChanged = this.SelectIndexSilent(index);
  if(!this.IsScrollOnKBNavigationLocked())
   this.MakeItemVisible(index);
  return selectionChanged;
 },
 MakeItemVisible: function(index){
 },
 InitOnContainerMadeVisible: function(){
 },
 AddItem: function(texts, value, imageUrl){
  var index = this.GetItemCount();
  this.InsertItemInternal(index, texts, value, imageUrl);
  return index;
 },
 InsertItem: function(index, texts, value, imageUrl){
  this.InsertItemInternal(index, texts, value, imageUrl);
 },
 InsertItemInternal: function(index, text, value, imageUrl){
 },
 BeginUpdate: function(){
  this.APILockCount ++;
 },
 EndUpdate: function(){
  this.APILockCount --;
  this.Synchronize();
 },
 ClearItems: function(){
  this.BeginUpdate();
  this.UpdateArraysItemsCleared();
  this.ClearItemsCore();
  this.EndUpdate();
 },
 ClearItemsCore: function(){
 },
 ClearItemsForPerformCallback: function(){
  this.itemsValue = [];
  this.ClearItemsCore();
 },
 RemoveItem: function(index){
 },
 FindItemByText: function(text){
  var index = this.FindItemIndexByText(text);
  return this.GetItem(index);
 },
 FindItemByValue: function(value){
  var index = this.FindItemIndexByValue(value);
  return this.GetItem(index);
 },
 PerformCallback: function(arg) {
 },
 GetCallbackArguments: function(){
  var args = this.GetCustomCallbackArg();
  args += this.GetLoadItemsRangeCallbackArg();
  return args;
 },
 GetLoadItemsRangeCallbackArg: function(){
  return this.FormatCallbackArg(__aspxLoadRangeItemsCallbackPrefix, this.GetItemsRangeForLoad());
 },
 FormatCallbackArg: function(prefix, arg) { 
  arg = arg.toString();
  return (_aspxIsExists(arg) ? prefix + "|" + arg.length + ';' + arg + ';' : "");
 },
 GetItemsRangeForLoad: function(){
  return __aspxEmptyItemsRange;
 },
 GetCallbackOwnerControl: function(){
  if(this.ownerName && !this.ownerControl)
   this.ownerControl = aspxGetControlCollection().Get(this.ownerName);
  return this.ownerControl;
 },
 GetCustomCallbackArg: function(){
  return this.GetSyncHiddenInput("CustomCallback").value;
 },
 SetCustomCallbackArg: function(arg){
  this.GetSyncHiddenInput("CustomCallback").value = arg;
 },
 FormatAndSetCustomCallbackArg: function(arg){
  var formatArg = this.FormatCallbackArg("LECC", arg || "");
  this.SetCustomCallbackArg(formatArg);
 },
 SendCallback: function(){
 },
 LockSynchronization: function(){
  this.syncLockCount++;
 },
 UnlockSynchronization: function(){
  this.syncLockCount--;
 },
 IsSyncLocked: function(){
  return this.syncLockCount > 0;
 },
 IsSyncEnabled: function(){
  return this.isSyncEnabled && !this.IsSyncLocked();
 },
 RegisterInsertedItem: function(index, text, value, imageUrl){
  if(this.IsSyncEnabled()){
   this.RefreshSynchroArraysIndex(index, true);
   var item = this.CreateItem(index, text, value, imageUrl);
   this.insertedItems.push(item);
   this.Synchronize();
  }
 },
 CreateItem: function(index, text, value, imageUrl){
  return new ASPxClientListEditItem(this, index, text, value, imageUrl);
 },
 UpdateSyncArraysItemDeleted: function(item, isValueRemovingRequired){
  if(isValueRemovingRequired)
   _aspxArrayRemoveAt(this.itemsValue, item.index);
  if(this.IsSyncEnabled()){
   var index = this.FindItemInArray(this.insertedItems, item);
   if(index == -1){
    this.RefreshSynchroArraysIndex(item.index, false);
    this.deletedItems.push(item);
   } else {
    this.RefreshSynchroArraysIndex(item.index, false);
    _aspxArrayRemoveAt(this.insertedItems, index);
   }
   this.Synchronize();
  }
 },
 UpdateArraysItemsCleared: function(){
  if(this.IsSyncEnabled()){
   for(var i = this.GetItemCount() - 1; i >= 0; i --)
    this.UpdateSyncArraysItemDeleted(this.GetItem(i), false);
  } 
  this.itemsValue = [];
 },
 RefreshSynchroArraysIndex: function(startIndex, isIncrease){
  this.RefreshSynchroArrayIndexIndex(this.deletedItems, startIndex, isIncrease);
  this.RefreshSynchroArrayIndexIndex(this.insertedItems, startIndex, isIncrease);
 },
 RefreshSynchroArrayIndexIndex: function(array, startIndex, isIncrease){
    var delta = isIncrease ? 1 : -1;
    for(var i = 0; i < array.length; i ++){
   if(array[i].index >= startIndex)
    array[i].index += delta;
  }   
 },
 FindItemInArray: function(array, item){
  for(var i = array.length - 1; i >= 0; i--){
   var currentItem = array[i];
   if ((!this.encodeHtml || currentItem.text == item.text) && currentItem.value == item.value &&
    currentItem.imageUrl == item.imageUrl)
    break;
  }
  return i;
 },
 GetSyncHiddenInput: function(syncType){
  return _aspxGetElementById(this.name + syncType);
 },
 Synchronize: function(){
  if(this.APILockCount == 0){
   if(this.IsSyncEnabled()){
    this.SynchronizeItems(this.deletedItems, "DeletedItems");
    this.SynchronizeItems(this.insertedItems, "InsertedItems");
   }
   this.CorrectSizeByTimer();
  }
 },
 CorrectSizeByTimer: function(){
 },
 SynchronizeItems: function(items, syncType){
  var inputElement = this.GetSyncHiddenInput(syncType);
  if(!_aspxIsExistsElement(inputElement))
   return;
  inputElement.value = _aspxEncodeHtml(this.SerializeItems(items));
 },
 GetSerializingHelper: function(){ 
  if(this.serializingHelper == null)
   this.serializingHelper = this.CreateSerializingHelper();
  return this.serializingHelper;
 },
 CreateSerializingHelper: function(){
  return new _aspxListBoxBaseItemsSerializingHelper(this);
 },
 SerializeItems: function(items){
  var serialiser = this.GetSerializingHelper();
  return serialiser.SerializeItems(items);
 },
 DeserializeItems: function(serializedItems){
  var serialiser = this.GetSerializingHelper();
  return serialiser.DeserializeItems(serializedItems);
 }
});
ASPxClientListBoxBase.Cast = ASPxClientControl.Cast;
_aspxListBoxBaseItemsSerializingHelper = _aspxCreateClass(null, {
 constructor: function(listBoxControl) {
  this.listBoxControl = listBoxControl;
  this.startPos = 0;
 },
 SerializeItems: function(items){
  var sb = [ ];
  for(var i = 0; i < items.length; i++)
   this.SerializeItem(sb, items[i]);
  return sb.join("");
 },
 SerializeItem: function(sb, item) {
  if(!item)
   return;
  this.SerializeAtomValue(sb, item.index);
  this.SerializeAtomValue(sb, item.value);
  this.SerializeAtomValue(sb, item.imageUrl);
  var texts = this.listBoxControl.GetItemTexts(item);
  if(typeof(texts) == "string")
   this.SerializeAtomValue(sb, texts);
  else {
   for(var i = 0; i < texts.length; i++)
    this.SerializeAtomValue(sb, texts[i]);
  }
 },
 SerializeAtomValue: function(sb, value) {
  var valueStr = _aspxIsExists(value) ? value.toString() : "";
  sb.push(valueStr.length);
  sb.push('|');
  sb.push(valueStr);
 },
 DeserializeItems: function(serializedItems){
  var deserializedItems = [];
  var item;
  this.startPos = 0;
  while(this.startPos < serializedItems.length){
   var index = this.ParseItemIndex(serializedItems);
   var value = this.ParseItemValue(serializedItems);
   var imageUrl = this.ParseString(serializedItems);
   if(imageUrl == "")
    imageUrl = this.listBoxControl.defaultImageUrl;
   var texts = this.ParseTexts(serializedItems);
   item = this.listBoxControl.CreateItem(index, texts, value, imageUrl);
   deserializedItems.push(item);
  }
  return deserializedItems;
 },
 ParseItemIndex: function(serializedItem){
  return parseInt(this.ParseString(serializedItem));
 },
 ParseItemValue: function(serializedItem){
  return this.ParseString(serializedItem);
 },
 ParseString: function(str){
  var indexOfSeparator = str.indexOf(__aspxLBSerializingSeparator, this.startPos);
  var strLength = parseInt(str.substring(this.startPos, indexOfSeparator));
  var strStartPos = indexOfSeparator + __aspxLBSerializingSeparatorLength;
  this.startPos = strStartPos + strLength;
  return str.substring(strStartPos, strStartPos + strLength);
 },
 ParseTexts: function(serializedItems){
  return this.ParseString(serializedItems);
 },
 DeserializeValues: function(serializedValues){
  var deserializedValues = [];
  this.startPos = 0;
  while(this.startPos < serializedValues.length){
   deserializedValues.push(this.ParseItemValue(serializedValues));
  }
  return deserializedValues;
 }
});
_aspxListBoxItemsSerializingHelper = _aspxCreateClass(_aspxListBoxBaseItemsSerializingHelper, {
 constructor: function(listBoxControl) {
  this.constructor.prototype.constructor.call(this, listBoxControl);
 },
 ParseTexts: function(serializedItems){
  var textColumnCount = this.listBoxControl.GetItemTextCellCount();
  return (textColumnCount > 1) ? this.DeserializeItemTexts(serializedItems, textColumnCount) 
   : this.constructor.prototype.ParseTexts.call(this, serializedItems);
 },
 DeserializeItemTexts: function(serializedItem, textColumnCount){
  var text = "";
  var texts = [];
  for(var i = 0; i < textColumnCount; i++)
   texts.push(this.ParseString(serializedItem));
  return texts;
 }
});
_aspxListBoxSingleSelectionHelper = _aspxCreateClass(null, {
 constructor: function(listBoxControl) {
  this.listBoxControl = listBoxControl;
  this.savedSelectedIndex = -1;
  this.updateHiddenInputsLockCount = 0;
  this.cachedSelectionChangedArgs = [];
 },
 ClearSelection: function(){
  this.SetSelectedIndexCore(-1);
 },
 GetSelectedIndexInternal: function(){
  return this.savedSelectedIndex;
 }, 
 SetSelectedIndexInternal: function(index){
  this.savedSelectedIndex = index;
 }, 
 SetSelectedIndexCore: function(index){
  if(index != this.savedSelectedIndex && -1 <= index && index < this.GetItemCount()){
   this.BeginSelectionUpdate();
   this.SetSelectedIndexInternal(index);
   this.EndSelectionUpdate();
   return true;
  }
  return false;
 },
 GetSelectedIndex: function(){
  return this.GetSelectedIndexInternal();
 },
 SetSelectedIndex: function(index){
  this.ChangeSelectedItem(index);
  this.SetSelectedIndexCore(index);
  this.OnItemSelectionChanged(index, true);
 },
 GetSelectedIndices: function(){ 
  var selectedIndex = this.GetSelectedIndexInternal();
  return selectedIndex != -1 ? [selectedIndex] : [];
 },
 GetSelectedValues: function(){ 
  var selectedValue =  this.listBoxControl.GetValue();
  return selectedValue != null ? [selectedValue] : [];
 },
 GetSelectedItems: function(){ 
  var selectedItem = this.listBoxControl.GetSelectedItem();
  return selectedItem != null? [selectedItem] : [];
 },
 SelectIndices: function(indices){},
 SelectItems: function(items){},
 SelectValues: function(values){},
 UnselectIndices: function(selected){},
 UnselectItems: function(items){},
 UnselectValues: function(values){},
 GetIsItemSelected: function(index){ return index == this.GetSelectedIndexInternal(); },
 ResetSelectionCollectionsCache: function(){ },
 OnItemClick: function(index, evt){
  var selected = true;
  this.BeginSelectionUpdate();
  this.ChangeSelectedItem(index);
  var selectedIndexChanged = this.SetSelectedIndexCore(index);
  this.EndSelectionUpdate();
  if(selectedIndexChanged)
   this.OnItemSelectionChanged(index, selected);
 },
 ChangeSelectedItem: function(newSelectedIndex){
  var selected = true;
  var oldSelectedIndex = this.GetSelectedIndexInternal();
  this.BeginSelectionUpdate();
  this.SetItemSelectionState(oldSelectedIndex, !selected);
  this.SetItemSelectionState(newSelectedIndex, selected);
  this.EndSelectionUpdate();
 },
 SetItemSelectionState: function(itemIndex, selected, controller){
  this.BeginSelectionUpdate();
  this.listBoxControl.SetItemSelectionAppearance(itemIndex, selected, controller);
  this.EndSelectionUpdate();
 },
 GetFocusedIndex: function(){
  return this.GetSelectedIndexInternal();
 },
 BeginSelectionUpdate: function(){
  this.updateHiddenInputsLockCount++;
 },
 EndSelectionUpdate: function(){
  this.updateHiddenInputsLockCount--;
  if(!this.IsUpdateInternalSelectionStateLocked()){
   this.listBoxControl.UpdateInternalState();
   this.FlushSelectionChanged();
  }
 },
 IsUpdateInternalSelectionStateLocked: function(){
  return this.updateHiddenInputsLockCount > 0;
 },
 GetItemCount: function(){
  return this.listBoxControl.GetItemCount();
 },
 OnItemSelectionChanged: function(index, selected){
  if(this.IsUpdateInternalSelectionStateLocked()){
   var a = {Index: index, Selected: selected};
   this.cachedSelectionChangedArgs.push(a);
  }
  else 
   this.listBoxControl.OnItemSelectionChanged(index, selected);
 },
 FlushSelectionChanged: function(){
  if(this.IsUpdateInternalSelectionStateLocked()) 
   return;
  for(var i = 0; i < this.cachedSelectionChangedArgs.length; i++)
   this.listBoxControl.OnItemSelectionChanged(this.cachedSelectionChangedArgs[i].Index, this.cachedSelectionChangedArgs[i].Selected);
  this.cachedSelectionChangedArgs = [];
 },
 OnItemInserted: function(index){
  if(index <= this.savedSelectedIndex && this.savedSelectedIndex != -1)
   this.SetSelectedIndexInternal(this.savedSelectedIndex + 1);
 },
 OnItemRemoved: function(index){
  var selectedIndex = this.GetSelectedIndex();
  if(index < this.savedSelectedIndex)
   this.SetSelectedIndexInternal( this.savedSelectedIndex - 1);
  else if(index == this.savedSelectedIndex)
   this.SetSelectedIndexInternal(-1);
 },
 OnItemsCleared: function(){
  this.ClearSelection();
 }
});
_aspxListBoxMultiSelectionHelper = _aspxCreateClass(_aspxListBoxSingleSelectionHelper, {
 constructor: function(listBoxControl) {
  this.constructor.prototype.constructor.call(this, listBoxControl);
  this.selectedValuesCache = [];
  this.selectedItemsCache = [];
  this.savedSelectedIndices = [];
  this.selectedIndicesSortingRequired = false;
  this.focusedIndex = -1;
  this.lastIndexFocusedWithoutShift = -1;
 },
 SetSelectedIndex: function(index){
  this.SingleIndexSelection(index);
 },
 ResetSelectionCollectionsCache: function(){
  this.selectedIndicesSortingRequired = true;
  this.selectedItemsCache = [];
  this.selectedValuesCache = [];
 },
 GetSelectedIndices: function(){
  if(this.savedSelectedIndices.length > 1 && this.selectedIndicesSortingRequired)
   this.SortSelectedIndices();
  return this.savedSelectedIndices.slice();
 },
 GetSelectedValues: function(){ 
  if(this.savedSelectedIndices.length == 0)
   return [];
  if(this.selectedValuesCache.length == 0)
   this.selectedValuesCache = this.GetSelectedValuesCore();
  return this.selectedValuesCache;
 },
 GetSelectedValuesCore: function(){
  var selectedValues = [];
  var selectedItems = this.GetSelectedItems();
  for(var i = 0; i < selectedItems.length; i++)
   selectedValues.push(selectedItems[i].value);
  return selectedValues;
 },
 GetSelectedItems: function(){
  if(this.savedSelectedIndices.length == 0)
   return [];
  if(this.selectedItemsCache.length == 0)
   this.selectedItemsCache = this.GetSelectedItemsCore();
  return this.selectedItemsCache;
 },
 GetSelectedItemsCore: function(){
  var selectedItems = [];
  for(var i = 0; i < this.savedSelectedIndices.length; i++)
   selectedItems.push(this.listBoxControl.GetItem(this.savedSelectedIndices[i]));
  return selectedItems;
 },
 SetIndicesSelectionState: function(indices, selected){
  this.BeginSelectionUpdate();
  var controller = aspxGetStateController();
  var itemCount = this.listBoxControl.GetItemCount();
  if(indices){
   for(var i = 0; i < indices.length; i++){
    var index = indices[i];
    if(index >= 0 && index < itemCount)
     this.SetItemSelectionState(indices[i], selected, controller);
   }
  } else
   this.SetAllItemsSelectionState(selected, controller);
  this.SetSelectedIndexCore(this.GetFirstSelectedIndex());
  this.EndSelectionUpdate();
 },
 SetItemsSelectionState: function(items, selected){
  var indices = items ? this.ConvertItemsToIndices(items) : null;
  this.SetIndicesSelectionState(indices, selected);
 },
 SetValuesSelectionState: function(values, selected){
  var indices = values ? this.ConvertValuesToIndices(values)  : null;
  this.SetIndicesSelectionState(indices, selected);
 },
 ConvertValuesToIndices: function(values){
  var indices = [];
  for(var i = 0; i < values.length; i++)
   indices.push(this.listBoxControl.FindItemIndexByValue(values[i]));
  return indices;
 },
 ConvertItemsToIndices: function(items){
  var indices = [];
  for(var i = 0; i < items.length; i++)
   indices.push(items[i].index);
  return indices;
 },
 SelectIndices: function(indices){
  this.SetIndicesSelectionState(indices, true);
 },
 SelectItems: function(items){
  this.SetItemsSelectionState(items, true);
 },
 SelectValues: function(values){
  this.SetValuesSelectionState(values, true);
 },
 UnselectIndices: function(indices){
  this.SetIndicesSelectionState(indices, false);
 },
 UnselectItems: function(items){
  this.SetItemsSelectionState(items, false);
 },
 UnselectValues: function(values){
  this.SetValuesSelectionState(values, false);  
 },
 GetIsItemSelected: function(index){ 
  return _aspxArrayIndexOf(this.savedSelectedIndices, index) != -1; 
 },
 OnItemClick: function(index, evt){
  this.BeginSelectionUpdate();
  var ctrlKey = evt.ctrlKey || evt.metaKey;
  var shift = evt.shiftKey;
  if(ctrlKey)
   this.AddSelectedIndex(index);
  else if(shift){
   var startIndex = index > this.lastIndexFocusedWithoutShift ? this.lastIndexFocusedWithoutShift + 1 : index;
   var endIndex = index > this.lastIndexFocusedWithoutShift ? index : this.lastIndexFocusedWithoutShift - 1;
   this.SelectRangeIndicesOnly(startIndex, endIndex);
   this.SetFocusedIndexInternal(index, true);
  }else 
   this.SingleIndexSelection(index);
  this.EndSelectionUpdate();
 },
 OnItemCheckBoxClick: function(index, evt){
  this.BeginSelectionUpdate();
  this.AddSelectedIndex(index);
  this.EndSelectionUpdate();
 },
 AddSelectedIndex: function(index){
  this.SetFocusedIndexInternal(index, false);
  var indexInSelectedIndices = _aspxArrayIndexOf(this.savedSelectedIndices, index);
  var selectionOperation = indexInSelectedIndices == -1;
  this.SetItemSelectionState(index, selectionOperation);
  this.SetSelectedIndexCore(this.GetFirstSelectedIndex());
 },
 SelectRangeIndicesOnly: function(startIndex, endIndex){
  this.BeginSelectionUpdate();
  var controller = aspxGetStateController();
  var itemCount = this.GetItemCount();
  for(var i = 0; i < itemCount; i ++) {
   if(i == this.lastIndexFocusedWithoutShift) 
    continue;
   this.SetItemSelectionState(i, i >= startIndex && i <= endIndex, controller);
  }
  this.SetSelectedIndexCore(this.GetFirstSelectedIndex());
  this.EndSelectionUpdate();
 },
 SingleIndexSelection: function(index){
  this.SetFocusedIndexInternal(-1, false);
  this.SelectRangeIndicesOnly(index, index);
  this.SetFocusedIndexInternal(index, false);
 },
 SetAllItemsSelectionState: function(selected, controller){
  this.BeginSelectionUpdate();
  if(!controller)
   controller = aspxGetStateController();
  var itemCount = this.GetItemCount();
  for(var i = 0; i < itemCount; i ++)
   this.SetItemSelectionState(i, selected, controller);
  this.EndSelectionUpdate();
 },
 SetItemSelectionState: function(itemIndex, selected, controller){
  this.SetItemSelectionStateCore(itemIndex, selected, controller);
  this.ResetSelectionCollectionsCache();
  var indexInSelectionArray = _aspxArrayIndexOf(this.savedSelectedIndices, itemIndex);
  if(selected && indexInSelectionArray == -1){
   this.PushSelectedIndex(itemIndex);
   this.OnItemSelectionChanged(itemIndex, true);
  }
  if(!selected && indexInSelectionArray != -1){
   this.RemoveSelectedIndexAt(indexInSelectionArray);
   this.OnItemSelectionChanged(itemIndex, false);
  }
 },
 GetFirstSelectedIndex: function(){
  var selectedIndices = this.GetSelectedIndices();
  var selectedIndicesCount = selectedIndices.length;
  var firstSelectedIndex = -1;
  if(selectedIndicesCount > 0){
   firstSelectedIndex = selectedIndices[0];
   for(var i = 1; i < selectedIndices.length; i++){
    if(firstSelectedIndex > selectedIndices[i])
     firstSelectedIndex = selectedIndices[i];
   }
  }
  return firstSelectedIndex;
 },
 PushSelectedIndex: function(index){
  this.savedSelectedIndices.push(index);
 },
 RemoveSelectedIndex: function(index){
  _aspxArrayRemove(this.savedSelectedIndices, index);
 },
 RemoveSelectedIndexAt: function(indexInArray){
  _aspxArrayRemoveAt(this.savedSelectedIndices, indexInArray);
 },
 SortSelectedIndices: function(){
  _aspxArrayIntegerAscendingSort(this.savedSelectedIndices);
  this.selectedIndicesSortingRequired = false;
 },
 SetItemSelectionStateCore: function(itemIndex, selected, controller){
  _aspxListBoxSingleSelectionHelper.prototype.SetItemSelectionState.call(this, itemIndex, selected, controller);
 },
 GetFocusedIndex: function(){
  return this.focusedIndex;
 },
 SetFocusedIndexInternal: function(index, isShiftPressed){
  if(!isShiftPressed)
   this.lastIndexFocusedWithoutShift = index;
  this.focusedIndex = index;
 },
 OnItemInserted: function(index){
  this.ResetSelectionCollectionsCache();
  _aspxListBoxSingleSelectionHelper.prototype.OnItemInserted.call(this, index);
  if(this.focusedIndex >= index)
   this.focusedIndex ++;
  for(var i = 0; i < this.savedSelectedIndices.length; i++){
   if(this.savedSelectedIndices[i] >= index)
    this.savedSelectedIndices[i]++;
  }
 },
 OnItemRemoved: function(index){
  this.ResetSelectionCollectionsCache();
  _aspxListBoxSingleSelectionHelper.prototype.OnItemRemoved.call(this, index);
  if(this.focusedIndex == index)
   this.focusedIndex = -1;
  else if(this.focusedIndex > index)
   this.focusedIndex --;
  if(this.GetIsItemSelected(index))
   this.RemoveSelectedIndex(index);
  for(var i = 0; i < this.savedSelectedIndices.length; i++){
   if(this.savedSelectedIndices[i] > index)
    this.savedSelectedIndices[i]--;
  }
  if(this.GetSelectedIndex() == -1)
   this.SetSelectedIndexCore(this.GetFirstSelectedIndex());
 },
 ClearSelection: function(){
  this.ResetSelectionCollectionsCache();
  _aspxArrayClear(this.savedSelectedIndices);
  this.SetSelectedIndexCore(-1);
 }
});
_aspxListBoxCheckSelectionHelper = _aspxCreateClass(_aspxListBoxMultiSelectionHelper, {
 constructor: function(listBoxControl) {
  this.constructor.prototype.constructor.call(this, listBoxControl);
 },
 OnItemClick: function(index, evt){
  this.BeginSelectionUpdate();
  if(evt.shiftKey)
   _aspxListBoxMultiSelectionHelper.prototype.OnItemClick.call(this, index, evt);
  else
   this.AddSelectedIndex(index);
  this.EndSelectionUpdate();
 }
});
ASPxClientListBox = _aspxCreateClass(ASPxClientListBoxBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.enableSyncOnPerfCallback = false;
  this.freeUniqIndex = -1;
  this.isHasFakeRow = false;
  this.headerDiv = null;
  this.headerTable = null;
  this.listTable = null;
  this.sampleItemFirstTextCell = null;
  this.width = "";
  this.hasSampleItem = false;
  this.hoverClasses = [""];
  this.hoverCssArray = [""];
  this.selectedClasses = [""];
  this.selectedCssArray = [""];
  this.disabledClasses = [""];
  this.disabledCssArray = [""];
  this.imageCellExists = false;
  this.scrollHandlerLockCount = 0;
  this.columnFieldNames = [];
  this.textFormatString = "";
  this.defaultImageUrl = "";
  this.selectionMode = 0;
  this.initSelectedIndices = [];
  this.itemHorizontalAlign = "";
  this.emptyTextRowCellIndices = null;
  this.allowMultipleCallbacks = false;
  this.isCallbackMode = false;
  this.callbackPageSize = -1;
  this.isTopSpacerVisible = false;
  this.isBottomSpacerVisible = false;
  this.serverIndexOfFirstItem = 0;
  this.scrollHelper = null;
  this.changeSelectAfterCallback = 0;
  this.ownerControl = null;
  this.SampleItem = null;
  this.scrollDivElement = null;
  this.scrollPageSize = 4;
  this.itemsValue = [];
  this.cachedValue = null;
  this.sizingConfig.adjustControl = true;
 },
 Initialize: function() {   
  this.LockScrollHandler();
  this.InitDXTextAttributes();
  this.InitScrollPos();
  this.freeUniqIndex = this.GetItemCount();
  this.InitSelection();
  this.AdjustControl(false);
  this.InitializeLoadOnDemand();
  this.UnlockScrollHandler();
  ASPxClientEdit.prototype.Initialize.call(this);
 },
 InitDXTextAttributes: function(){
  if(this.emptyTextRowCellIndices != null){
   var itemWithDXTextCount = this.emptyTextRowCellIndices.length;
   for(var i = 0; i < itemWithDXTextCount; i++){
    var itemIndex = this.emptyTextRowCellIndices[i][0];
    var cellIndices = this.emptyTextRowCellIndices[i][1];
    var itemRow = this.GetItemRow(itemIndex);
    for(var j = 0; j < cellIndices.length; j++){
     _aspxSetAttribute(itemRow.cells[cellIndices[j]], "DXText", "");
    }
   }
  }
 },
 InitSelection: function(){
  var valueFromLastTime = this.GetValueFromValueInput();
  if(this.MultiSelectionMode()){
   if(valueFromLastTime != ""){
    var serialiser = this.GetSerializingHelper();
    var selectedValuesFromLastTime = serialiser.DeserializeValues(valueFromLastTime);
    var selectedIdicesFromLastTime = [];
    for(var i = 0; i < selectedValuesFromLastTime.length; i++)
     selectedIdicesFromLastTime.push(this.FindItemIndexByValue(selectedValuesFromLastTime[i]));
    this.SelectIndices(selectedIdicesFromLastTime);
   } else
    this.SelectIndices(this.initSelectedIndices);
  } else {
   var selectedIndex = (valueFromLastTime != "") ? 
    this.FindItemIndexByValue(valueFromLastTime) : this.GetSelectedIndexInternal();
   this.SetSelectedIndexInternal(selectedIndex);
   this.SelectIndexSilent(selectedIndex);
  }
  this.CacheValue();
 },
 GetValueFromValueInput: function(){
  if(this.ShouldRestoreSelectionAfterBackPressed()){
   var valueInput = this.FindStateInputElement();
   if(_aspxIsExistsElement(valueInput))
      return valueInput.value;
  }
  return "";
 },
 ShouldRestoreSelectionAfterBackPressed: function(){
  return __aspxIE || __aspxChrome;
 },
 GetInitSelectedIndex: function(){
  return this.savedSelectedIndex;
 },
 CacheValue: function(){
  this.cachedValue = this.GetValue();
 },
 InitScrollPos: function(){ 
  if(!this.isComboBoxList && this.isCallbackMode && this.GetInitSelectedIndex() == -1)
   this.GetScrollDivElement().scrollTop = 0;
 },
 InitializeLoadOnDemand: function(){
  var loadOnDemandRequired = this.isCallbackMode && this.GetEnabledByServer();
  this.scrollHelper = loadOnDemandRequired ? new _aspxListBoxScrollCallbackHelper(this) : new _aspxListBoxScrollCallbackHelperBase(this);
 },
 InlineInitialize: function(){
  this.LockScrollHandler();
  this.InitializeItemsAttributes();
  this.InitSpecialKeyboardHandling();
  this.GenerateStateItems();
  this.UnlockScrollHandler();
  ASPxClientEdit.prototype.InlineInitialize.call(this);
 },
 InitializeItemsAttributes: function() { 
  var listTable = this.GetListTable();
  if(this.isHasFakeRow){
   this.LockSynchronization();
   this.ClearItems();
   this.UnlockSynchronization();
  }
  listTable.ListBoxId = this.name;  
  var rows = listTable.rows;
  var count = rows.length;
  var rowIdConst = this.name + "_";
  if(this.hasSampleItem)
   this.InitializeItemAttributes(this.GetSampleItemRow(), rowIdConst + __aspxLBSIIdSuffix);
  rowIdConst += __aspxLBIIdSuffix;
  for(var i = 0; i < count; i ++)
   this.InitializeItemAttributes(rows[i], rowIdConst + i);
 },
 InitializeItemAttributes: function(row, rowId) {
  var cells = row.cells;
  var itemCellsIdSuffixes = this.GetItemCellsIdPostfixes();
  for(var i = 0; i < row.cells.length; i++) {
   cells[i].style.textAlign = this.itemHorizontalAlign;
   cells[i].id = rowId + itemCellsIdSuffixes[i];
  }
 },
 InitializePageSize: function(){
  var divElement = this.GetScrollDivElement();
  var listTable = this.GetListTable();
  var rows = listTable.rows;
  var count = rows.length;
  if(divElement && count > 0)
   this.scrollPageSize = Math.round(divElement.clientHeight / rows[0].offsetHeight) - 1;
 },
 GenerateStateItems: function() {
  var itemCellsIdSuffixes = this.GetItemCellsIdPostfixes();
  var count = this.GetItemCount();
  var constName = this.name + "_" + __aspxLBIIdSuffix;
  var name = "";
  var controller = aspxGetStateController();
  var i = this.hasSampleItem ? -1 : 0 ;
  for(; i < count; i ++){
   name = constName + i;
   controller.AddHoverItem(name, this.hoverClasses, this.hoverCssArray, itemCellsIdSuffixes, null, null);
   controller.AddSelectedItem(name, this.selectedClasses, this.selectedCssArray, itemCellsIdSuffixes, null, null);
   controller.AddDisabledItem(name, this.disabledClasses, this.disabledCssArray, itemCellsIdSuffixes, null, null);
  }
 },
 AfterInitialize: function(){
  this.CallbackSpaceInit(true);
  this.constructor.prototype.AfterInitialize.call(this);
 },
 GetEnabledByServer: function(){
  return this.enabled;
 },
 SetEnabled: function(enabled){  
  ASPxClientListBoxBase.prototype.SetEnabled.call(this, enabled);
  this.CallbackSpaceInit(false);
 },
 CallbackSpaceInit: function(isInitialization){
  if(this.isCallbackMode){
   this.SetBottomScrollSpacerVisibility(this.GetScrollSpacerVisibility(false));
   this.SetTopScrollSpacerVisibility(this.GetScrollSpacerVisibility(true));
   if(isInitialization || this.isComboBoxList){
    this.EnsureSelectedItemVisible();
    _aspxAttachEventToElement(this.GetScrollDivElement(), "scroll", aspxLBScroll);
   }
  }
 },
 GetListTable: function(){
  if(!_aspxIsExistsElement(this.listTable))
   this.listTable = _aspxGetElementById(this.name + __aspxLTableIdSuffix);
  return this.listTable;
 },
 GetListTableHeight: function(){
  return this.GetListTable().offsetHeight;
 },
 GetHeaderDivElement: function(){
  if(!_aspxIsExistsElement(this.headerDiv))
   this.headerDiv = _aspxGetElementById(this.name + __aspxLBHeaderDivIdSuffix);
  return this.headerDiv;
 },
 GetHeaderTableElement: function(){
  if(!_aspxIsExistsElement(this.headerTable)){
   var headerDiv = this.GetHeaderDivElement();
   this.headerTable = _aspxGetChildByTagName(headerDiv, "table", 0);
  }
  return this.headerTable;
 },
 GetScrollDivElement: function(){
  if(!_aspxIsExistsElement(this.scrollDivElement))
   this.scrollDivElement = document.getElementById(this.name + __aspxLBDSuffix);
  return this.scrollDivElement;
 },
 GetItemElement: function(index){
  var itemElement = this.GetItemRow(index);
  return __aspxWebKitFamily && itemElement != null ? itemElement.cells[0] : itemElement;
 },
 GetItemRow: function(index){
  var listTable = this.GetListTable();
  if(listTable){
   if(0 <= index && index < listTable.rows.length)
    return listTable.rows[index];
  }
  return null;
 },
 GetItemTexts: function(item) {
  return item.texts ? item.texts : [ item.text ];
 },
 GetItemCount: function(){
  var lbt = this.GetListTable();
  if(lbt)
   return this.GetListTable().rows.length;
  return 0;
 },
 GetItemCellCount: function(){
  if(this.hasSampleItem)
   return this.GetSampleItemRow().cells.length;
  else if(this.GetItemCount() > 0){
   var listTable = this.GetListTable();
   return listTable.rows[0].cells.length;
  }
  return 0;
 },
 GetItemTextCellCount: function(){
  return this.GetItemCellCount() - this.GetItemFirstTextCellIndex();
 },
 GetItemFirstTextCellIndex: function(){
    var itemFirstTextCellIndex  = 0;
  if(this.GetIsCheckColumnExists())
   itemFirstTextCellIndex++;
  if(this.imageCellExists)
   itemFirstTextCellIndex++;
  return itemFirstTextCellIndex;
 },
 GetItemFirstTextCell: function(index){
  var rowElement = this.GetItemRow(index);
  if(rowElement == null) 
   return null;
  var cells = __aspxIE ? rowElement.childNodes : rowElement.cells;
  return cells[this.GetItemFirstTextCellIndex()];
 },
 GetItemTopOffset: function(index){
  var itemElement = this.GetItemElement(index);
  return (itemElement != null) ? itemElement.offsetTop + this.GetTopScrollSpacerHeight() : 0;
 },
 GetItemHeight: function(index){
  var itemElement = this.GetItemElement(index);
  return (itemElement != null) ? itemElement.offsetHeight : 0;
 },
 GetItemCheckBoxElement: function(index){
  var itemRow = this.GetItemRow(index);
  var checkBoxCell = itemRow.cells[this.GetCheckBoxCellIndex()];
  return _aspxGetElementsByTagName(checkBoxCell, "input")[0];
 },
 GetIsCheckColumnExists: function(){
  if(!this.checkCellExists)
   this.checkCellExists = this.CheckColumnSelectionMode();
  return this.checkCellExists;
 },
 GetCheckBoxCellIndex: function(){
  return 0;
 },
 GetImageCellIndex: function(){
  return this.GetIsCheckColumnExists() ? 1 : 0;
 },
 GetItemCellsIdPostfixes: function(){
  if(this.itemCellsIdPostfixes == null){
   this.itemCellsIdPostfixes = [];
   var i = 0;
   if(this.imageCellExists){
    this.itemCellsIdPostfixes.push(__aspxLBIPostfixes[0]);
    i = 1;
   }
   var cellCount = this.GetItemCellCount();
   for(; i < cellCount; i++)
    this.itemCellsIdPostfixes.push(__aspxLBIPostfixes[1] + i);
  }
  return this.itemCellsIdPostfixes;
 },
 AdjustControlCore: function(){
  ASPxClientEdit.prototype.AdjustControlCore.call(this);
  this.CorrectSize();
  this.EnsureSelectedItemVisible();
  if(!this.isComboBoxList && __aspxIE && __aspxBrowserVersion >= 7) 
   this.CorrectWidth();
 },
 CorrectSize: function() {
  if(this.isComboBoxList)
   return;
  this.LockScrollHandler();
  this.CorrectHeight();
  this.CorrectWidth();
  this.InitializePageSize();
  this.UnlockScrollHandler();
 },
 OnCorrectSizeByTimer: function() {
  if(this.IsVisible())
   this.CorrectSize();
 }, 
 SetProtectionFromFlick_inFF: function(changeVisibility, changeDisplay){
  if(!__aspxFirefox) return;
  var listTable = this.GetListTable();
  if(changeVisibility)
   listTable.style.visibility = "hidden";
  if(changeDisplay)
   listTable.style.display = "none";
 },
 ResetProtectionFromFlick_inFF: function(){
  if(!__aspxFirefox) return;
  var listTable = this.GetListTable();
  listTable.style.visibility = "";
  listTable.style.display = "";
 },
 CorrectHeight: function(){
  if(__aspxFirefox && this.heightCorrected) return; 
  this.heightCorrected = true;
  var mainElement = this.GetMainElement();
  var divElement = this.GetScrollDivElement();
  if(__aspxIE && __aspxBrowserVersion == 5.5)
   divElement.style.display = "none";
  divElement.style.height = "0px";
  var height = mainElement.offsetHeight;
  if(__aspxIE && __aspxBrowserVersion == 5.5)
   divElement.style.display = "";
  divElement.style.height = height + "px";
  var extrudedHeight = mainElement.offsetHeight;
  var heightCorrection = extrudedHeight - height;
  if(heightCorrection > 0){
   var divHeight = divElement.offsetHeight;
   this.SetProtectionFromFlick_inFF(true, false);
   divElement.style.height = (divHeight - heightCorrection) + "px";
   this.ResetProtectionFromFlick_inFF(); 
   extrudedHeight = mainElement.offsetHeight;
   var paddingsHeightCorrection = extrudedHeight - height;
   if(paddingsHeightCorrection > 0)
    divElement.style.height = (divHeight - heightCorrection - paddingsHeightCorrection) + "px";
  } 
 },
 IsMultiColumn: function(){
  return this.columnFieldNames.length > 0;
 },
 CorrectWidth: function(){
  if(this.IsMultiColumn())
   this.CorrectMultiColumnWidth();
  else
   this.CorrectNonMultiColumnWidth();
 },
 CorrectMultiColumnWidth: function(){
  var scrollDivElement = this.GetScrollDivElement();
  var scrollBarWidth = this.GetVerticalScrollBarWidth(); 
  var browserPutsScrollBarOnContent = __aspxIE && __aspxBrowserVersion > 5.5 && __aspxBrowserVersion < 8;
  if(browserPutsScrollBarOnContent)
   scrollDivElement.style.paddingRight = scrollBarWidth + "px";
  if(__aspxIE){
   var listTable = this.GetListTable();
   if(__aspxBrowserVersion == 6){
    var mainElement = this.GetMainElement();
    listTable.style.width = "";
    scrollDivElement.style.width = (mainElement.clientWidth - scrollBarWidth) + "px";
    listTable.style.width = "100%";
   }
   if(__aspxBrowserVersion == 7){
    var divElement = this.GetScrollDivElement();
    listTable.style.width = "";
    if(this.width == "")
     divElement.style.width = (listTable.offsetWidth) + "px";
    listTable.style.width = "100%";
   }
  }
  this.CorrectMultiColumnHeaderWidth(scrollBarWidth);
  if(this.rtl && __aspxIE && __aspxBrowserVersion < 8)
   this.FixIE7MultiColumnRtl();   
 },
 CorrectMultiColumnHeaderWidth: function(scrollBarWidth){
  var scrollDivElement = this.GetScrollDivElement();
  var headerDivElement = this.GetHeaderDivElement();
  if(_aspxIsExistsElement(headerDivElement)){
   var headerTable;
   if(__aspxWebKitFamily){
    headerTable = this.GetHeaderTableElement();
    if(!_aspxIsExistsElement(headerTable))
     headerTable = null;
   }
   if(headerTable)
    headerTable.style.width = "0";
   if(__aspxIE && __aspxBrowserVersion < 8)
    headerDivElement.style.width = scrollDivElement.style.width;
   headerDivElement.style.paddingRight = scrollBarWidth + "px";
   if(headerTable)
    window.setTimeout(function() { headerTable.style.width = "100%"; }, 0);
  }
 },
 FixIE7MultiColumnRtl: function() {
  var tables = [ this.GetHeaderTableElement(), this.GetListTable() ];
  for(var i = 0; i < tables.length; i++) {
   var table = tables[i];   
   if(!table) continue;
   var backup = table.style.tableLayout;
   table.style.tableLayout = "auto";   
   table.offsetWidth;
   table.style.tableLayout = backup;
  }
 },
 CorrectNonMultiColumnWidth: function(){
  var divElement = this.GetScrollDivElement();
  if(__aspxIE && __aspxBrowserMajorVersion < 8) {
   var mainElement = this.GetMainElement();
   var scrollBarWidth = this.GetVerticalScrollBarWidth(); 
   mainElement.style.width = "";
   divElement.style.width = "100%";
   if(__aspxIE && __aspxBrowserVersion > 5.5)
    divElement.style.paddingRight = "0px";
   if(this.width != ""){
    mainElement.style.width = this.width;
    divElement.style.width = "0px";
    var widthCorrectrion = (__aspxIE && __aspxBrowserVersion == 5.5) ? 0 : scrollBarWidth;
    divElement.style.width = (mainElement.clientWidth - widthCorrectrion) + "px";
   } else {
    var widthCorrectrion = (__aspxIE && __aspxBrowserVersion == 5.5) ? scrollBarWidth : 0;
    if(this.IsListBoxWidthLessThenList())
     widthCorrectrion -= scrollBarWidth;
    divElement.style.width = (mainElement.clientWidth + widthCorrectrion) + "px";
   }
   if(__aspxIE && __aspxBrowserVersion > 5.5)
    divElement.style.paddingRight = scrollBarWidth + "px";
  } else {
   if(this.width == ""){
    var listTable = this.GetListTable();
    var mainElement = this.GetMainElement();
    if(listTable.offsetWidth != 0 || !__aspxNetscapeFamily){ 
     divElement.style.width = (listTable.offsetWidth + this.GetVerticalScrollBarWidth()) + "px";
     if(__aspxFirefox) 
      mainElement.style.width = divElement.offsetWidth + "px";
    }
   } else {  
    var mainElement = this.GetMainElement();  
    mainElement.style.width = this.width;
    divElement.style.width = __aspxWebKitFamily ? "1px" : "0px";
    divElement.style.width = mainElement.clientWidth + "px";
   }
  }
 },
 UpdateWidthCorrectionRequired: function() {
  this.widthValueSetInPercentage = _aspxIsWidthSetInPercentage(this.width);
 },
 EnsureSelectedItemVisible: function(){
  var index = this.GetSelectedIndex();
  if(index != -1)
   this.MakeItemVisible(index);
 },
 MakeItemVisible: function(index){
  if(!this.IsItemVisible(index))
   this.ScrollItemToTop(index);
 },
 IsItemVisible: function(index){
  var scrollDiv = this.GetScrollDivElement();
  var itemElement = this.GetItemElement(index);
  var topVisible = false;
  var bottomVisible = false;
  if(itemElement != null){
   var itemOffsetTop = itemElement.offsetTop + this.GetTopScrollSpacerHeight();
   topVisible = itemOffsetTop >= scrollDiv.scrollTop;
   bottomVisible = itemOffsetTop + itemElement.offsetHeight < scrollDiv.scrollTop + scrollDiv.clientHeight;
  }
  return (topVisible && bottomVisible);
 },
 ScrollItemToTop: function(index){
  this.LockScrollHandler();
  this.SetScrollTop(this.GetItemTopOffset(index));
  this.UnlockScrollHandler();
 },
 ScrollToItemVisible: function(index){
  if(!this.IsItemVisible(index)){
   var scrollDiv = this.GetScrollDivElement();
   var scrollTop = scrollDiv.scrollTop;
   var scrollDivHeight = scrollDiv.clientHeight;
   var itemOffsetTop = this.GetItemTopOffset(index);
   var itemHeight = this.GetItemHeight(index);
   var itemAbove = scrollTop > itemOffsetTop;
   var itemBelow = scrollTop  + scrollDivHeight < itemOffsetTop + itemHeight;
   if(itemAbove)
    scrollDiv.scrollTop = itemOffsetTop;
   else if(itemBelow){
    var scrollPaddings = scrollDiv.scrollHeight - this.GetListTable().offsetHeight - 
     this.GetTopScrollSpacerHeight() - this.GetBottomScrollSpacerHeight();
    scrollDiv.scrollTop = itemOffsetTop + itemHeight - scrollDivHeight + scrollPaddings;
   }
  }
 },
 SetScrollTop: function(scrollTop){
  var scrollDiv = this.GetScrollDivElement();
  if(scrollDiv){ 
   scrollDiv.scrollTop = scrollTop;
   if(__aspxOpera) 
    this.CachedScrollTop();
  }   
 },
 CachedScrollTop: function(){
  var scrollDiv = this.GetScrollDivElement();
  scrollDiv.cachedScrollTop = scrollDiv.scrollTop;
 },
 RestoreScrollTopFromCache: function(){
    var scrollDiv = this.GetScrollDivElement();
    if(scrollDiv && _aspxIsExists(scrollDiv.cachedScrollTop))
   scrollDiv.scrollTop = scrollDiv.cachedScrollTop;
 },
 IsListBoxWidthLessThenList: function(){
  var divElement = this.GetScrollDivElement();
  var listTable = this.GetListTable();
  var listTabelWidth = listTable.style.width;
  var isLess = false;
  listTable.style.width = "";
  isLess = listTable.offsetWidth < divElement.offsetWidth;
  listTable.style.width = listTabelWidth;
  return isLess;
 },
 GetVerticalScrollBarWidth: function(){
  var divElement = this.GetScrollDivElement(); 
  if(!this.verticalScrollBarWidth || this.verticalScrollBarWidth <= 0){
   this.verticalScrollBarWidth = this.GetVerticalScrollBarWidthCore(divElement);
   return this.verticalScrollBarWidth;
  } else
   return this.GetIsVerticalScrollBarVisible(divElement) ? this.verticalScrollBarWidth : 0;
 },
 GetIsVerticalScrollBarVisible: function(divElement){
  var verticalOverflow = this.GetVerticalOverflow(divElement);
  if(verticalOverflow != "auto"){ 
   var listTable = this.GetListTable();
   return divElement.clientHeight < listTable.offsetHeight;
  } else {
   var borderWidthWithScroll = divElement.offsetWidth - divElement.clientWidth;
   return borderWidthWithScroll == this.scrollDivBordersWidthWithScroll;
  }
 },
 GetVerticalScrollBarWidthCore: function(divElement){
  var overflowYReserv = this.GetVerticalOverflow(divElement);
  this.SetVerticalOverflow(divElement, "auto");
  this.scrollDivBordersWidthWithScroll = divElement.offsetWidth - divElement.clientWidth;
  if(__aspxIE && __aspxBrowserVersion >= 7)
   return this.scrollDivBordersWidthWithScroll; 
  this.SetProtectionFromFlick_inFF(false, true);
  this.SetVerticalOverflow(divElement, "hidden");
  var bordersWidthWithoutScroll = divElement.offsetWidth - divElement.clientWidth;
  this.SetVerticalOverflow(divElement, overflowYReserv);
  this.ResetProtectionFromFlick_inFF();
  return this.scrollDivBordersWidthWithScroll - bordersWidthWithoutScroll;
 },
 GetVerticalOverflow: function(element){
  if(__aspxIE || __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome)
   return element.style.overflowY;
  return element.style.overflow;
 },
 SetVerticalOverflow: function(element, value){
  if(__aspxIE || __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome)
   element.style.overflowY = value;
  else
   element.style.overflow = value;
 },
 MultiSelectionMode: function(){
  return this.selectionMode != ListBoxSelectionMode.Single;
 },
 CheckColumnSelectionMode: function(){
  return this.selectionMode == ListBoxSelectionMode.CheckColumn;
 },
 IsCheckBoxClicked: function(evt){
  var eventSource = _aspxGetEventSource(evt);
  return eventSource.type == "checkbox";
 },
 OnItemClick: function(index, evt){
  if(!this.isInitialized) 
   return;
  if(this.readOnly)
   return this.OnItemClickOrDblClickReadOnly();
  if(this.CheckColumnSelectionMode() && this.IsCheckBoxClicked(evt))
   this.GetItemSelectionHelper().OnItemCheckBoxClick(index, evt);
  else
   this.GetItemSelectionHelper().OnItemClick(index, evt);
  this.SetFocus();
  this.RaiseItemClick();
 },
 OnItemClickOrDblClickReadOnly: function(){
  return false;
 },
 OnItemDblClick: function(){
  if(this.readOnly)
   return this.OnItemClickOrDblClickReadOnly();
  return this.RaiseItemDoubleClick();
 },
 CanChangeSelection: function(){
  return !this.readOnly || !this.isInitialized;
 },
 SelectIndexSilent: function(index){ 
  return this.SetItemSelectionStateSilent(index);
 },
 SetItemSelectionStateSilent: function(index){
  if(!this.CanChangeSelection())
   return;
  var oldSelectionIndex = this.GetSelectedIndex();
  this.LockSelectionEvents();
  this.SetSelectedIndexCore(index);
  this.UnlockSelectionEvents();
  return index != oldSelectionIndex;
 },
 SetItemSelectionAppearance: function(index, selected, controller){
  if(!this.CanChangeSelection())
   return;
  if(!controller)
   controller = aspxGetStateController();
  if(!this.isInitialized)
   this.SetHoverElement(null);
  var itemFirstTextCell = this.GetItemFirstTextCell(index);
  if(selected)
   controller.SelectElementBySrcElement(itemFirstTextCell);
  else
   controller.DeselectElementBySrcElement(itemFirstTextCell);
  if(!this.isInitialized)
   this.SetHoverElement(itemFirstTextCell);
 },
 GetItemSelectionHelper: function(){
  if(!this.itemSelectionHelper)
   this.itemSelectionHelper = this.CreateItemSelectionHelper();
  return this.itemSelectionHelper;
 },
 CreateItemSelectionHelper: function(){
  if(this.selectionMode == ListBoxSelectionMode.Single)
   return new _aspxListBoxSingleSelectionHelper(this);
  else if(this.selectionMode == ListBoxSelectionMode.Multiple)
   return new _aspxListBoxMultiSelectionHelper(this);
  else if(this.selectionMode == ListBoxSelectionMode.CheckColumn)
   return new _aspxListBoxCheckSelectionHelper(this);
 },
 GetValue: function(){
  var selectedItem = this.GetSelectedItem();
  return selectedItem != null ? selectedItem.value : null;
 },
 SetValue: function(value){
  var index = this.FindItemIndexByValue(value);
  this.SetSelectedIndex(index);
 },
 GetSelectedItem: function(){
  var index = this.GetSelectedIndex();
  return this.GetItem(index);
 },
 GetSelectedIndex: function(){
  if(!this.isInitialized)
   return this.GetSelectedIndexInternal();
  return this.GetItemSelectionHelper().GetSelectedIndex();
 },
 SetSelectedItem: function(item){
  var index = (item != null) ? item.index : -1;
  this.SetSelectedIndex(index);
 },
 SetSelectedIndex: function(index){
  this.LockSelectionEvents();
  this.SetSelectedIndexCore(index);
  this.EnsureSelectedItemVisible(index);
  this.UnlockSelectionEvents();
 },
 SetSelectedIndexCore: function(index){
  this.GetItemSelectionHelper().SetSelectedIndex(index);
 },
 GetSelectedIndices: function(){
  return this.GetItemSelectionHelper().GetSelectedIndices();
 },
 GetSelectedValues: function(){ 
  return this.GetItemSelectionHelper().GetSelectedValues();
 },
 GetSelectedItems: function(){
  return this.GetItemSelectionHelper().GetSelectedItems();
 },
 SelectAll: function(){
  this.SelectIndices();
 },
 UnselectAll: function(){
  this.UnselectIndices();
 },
 SelectIndices: function(indices){
  this.LockSelectionEvents();
  this.GetItemSelectionHelper().SelectIndices(indices);
  this.UnlockSelectionEvents();
 },
 SelectItems: function(items){
  this.LockSelectionEvents();
  this.GetItemSelectionHelper().SelectItems(items);
  this.UnlockSelectionEvents();
 },
 SelectValues: function(values){
  this.LockSelectionEvents();
  this.GetItemSelectionHelper().SelectValues(values);
  this.UnlockSelectionEvents();
 },
 UnselectIndices: function(indices){
  this.LockSelectionEvents();
  this.GetItemSelectionHelper().UnselectIndices(indices);
  this.UnlockSelectionEvents();
 },
 UnselectItems: function(items){
  this.LockSelectionEvents();
  this.GetItemSelectionHelper().UnselectItems(items);
  this.UnlockSelectionEvents();
 },
 UnselectValues: function(values){
  this.LockSelectionEvents();
  this.GetItemSelectionHelper().UnselectValues(values);
  this.UnlockSelectionEvents();
 },
 GetIsItemSelected: function(index){
  return this.GetItemSelectionHelper().GetIsItemSelected(index);
 },
 GetFocusedIndex: function(){
  return this.GetItemSelectionHelper().GetFocusedIndex();
 },
 UpdateInternalState: function(){
  this.UpdateHiddenInputs();
 },
 IsUpdateHiddenInputsLocked: function(){
  return this.GetItemSelectionHelper().IsUpdateInternalSelectionStateLocked();
 },
 UpdateHiddenInputs: function(){
  if(this.IsUpdateHiddenInputsLocked())
   return;
  if(this.MultiSelectionMode()){ 
   var element = this.FindStateInputElement();
   if(_aspxIsExistsElement(element)) {
    var sb = [ ];
    var serialiser = this.GetSerializingHelper();
    var selectedIndices = this.GetSelectedIndices();
    for(var i = 0; i < selectedIndices.length; i++)
     serialiser.SerializeAtomValue(sb, this.GetItemValue(selectedIndices[i]));
    element.value = sb.join("");
   }
  } else 
   ASPxClientListBoxBase.prototype.UpdateHiddenInputs.call(this);
 },
 UseDelayedSpecialFocus: function() { 
  return true;
 },
 ShowLoadingPanel: function() { 
  if(!this.isComboBoxList){
   var loadingParentElement = this.GetScrollDivElement().parentNode;
   this.CreateLoadingDiv(loadingParentElement);
   this.CreateLoadingPanelWithAbsolutePosition(loadingParentElement);
  }
 },
 ParseCallbackResult: function(result){
  var gottenEgdeOfCollection = false;
  var nothingToLoad = result == "";
  var isLoadindToTopByScroll = this.scrollHelper.IsScrolledToTopSpacer();
  if(!nothingToLoad){
   var deserializedItems = this.DeserializeItems(result);
   this.LoadItemsFromCallback(isLoadindToTopByScroll, deserializedItems);
   gottenEgdeOfCollection = deserializedItems.length != this.callbackPageSize;
  }
  var noMoreItemsForLoadThisDirection = nothingToLoad || gottenEgdeOfCollection;
  this.SetScrollSpacerVisibility(isLoadindToTopByScroll, !noMoreItemsForLoadThisDirection);
  this.scrollHelper.Reset();
 },
 LockSynchronizationOnInternalCallback: function(){
  if(!this.enableSyncOnPerfCallback)
   this.LockSynchronization();
 },
 UnlockSynchronizationOnInternalCallback: function (){
  if(!this.enableSyncOnPerfCallback)
   this.UnlockSynchronization();
 },
 LoadItemsFromCallback: function(isToTop, deserializedItems){
  this.LockSynchronizationOnInternalCallback();
  this.BeginUpdate();
  if(isToTop){
   var scrollHeightCorrection = 0;
   for(var i = deserializedItems.length - 1; i >= 0; i --){
    this.InsertItem(0, deserializedItems[i].texts, deserializedItems[i].value, deserializedItems[i].imageUrl);
    scrollHeightCorrection += this.GetItemHeight(0);
   } 
   this.GetScrollDivElement().scrollTop += scrollHeightCorrection;
   this.serverIndexOfFirstItem -= deserializedItems.length;
   if(this.serverIndexOfFirstItem < 0) this.serverIndexOfFirstItem = 0;
  } else {
   for(var i = 0; i < deserializedItems.length; i ++){
    this.AddItem(deserializedItems[i].texts, deserializedItems[i].value, deserializedItems[i].imageUrl);
   } 
  }
  if(this.changeSelectAfterCallback != 0) {
   var newIndex = this.GetSelectedIndex() + this.changeSelectAfterCallback;
   newIndex = this.GetAdjustedIndex(newIndex);
   this.SelectIndexSilent(newIndex);
   if(this.scrollHelper.isScrolledToTopSpacer)
    this.ScrollItemToTop(newIndex);
   else
    this.ScrollToItemVisible(newIndex);
  }
  this.EndUpdate();
  this.UnlockSynchronizationOnInternalCallback();
 },
 CreateSerializingHelper: function(){
  return new _aspxListBoxItemsSerializingHelper(this);
 },
 InCallback: function(){
  var callbackOwner = this.GetCallbackOwnerControl();
  if(callbackOwner != null)
   return callbackOwner.InCallback();
  return ASPxClientListEdit.prototype.InCallback.call(this);
 },
 GetItemsRangeForLoad: function(){
  return this.scrollHelper.GetItemsRangeForLoad();
 },
 GetScrollSpacerElement: function(isTop){
  return document.getElementById(this.name + (isTop ? __aspxLBTSIdSuffix : __aspxLBBSIdSuffix));
 },
 GetScrollSpacerVisibility: function(isTop){
  if(!this.clientEnabled)
   return false;
  return isTop ? this.isTopSpacerVisible : this.isBottomSpacerVisible;
 },
 SetScrollSpacerVisibility: function(isTop, visibility){
  this.LockScrollHandler();
  var spacer = this.GetScrollSpacerElement(isTop);
  if(spacer){
   if(visibility)
    spacer.style.height = this.GetScrollDivElement().clientHeight + "px";
   if(this.clientEnabled){
    if(isTop)
     this.isTopSpacerVisible = visibility;
    else
     this.isBottomSpacerVisible = visibility;
   }
   if(_aspxGetElementDisplay(spacer) != visibility){
    _aspxSetElementDisplay(spacer, visibility);
    _aspxGetElementVisibility(spacer, visibility);
   }
  }
  this.UnlockScrollHandler();
 },
 SetTopScrollSpacerVisibility: function(visibility){
  this.SetScrollSpacerVisibility(true, visibility);
 },
 SetBottomScrollSpacerVisibility: function(visibility){
  this.SetScrollSpacerVisibility(false, visibility);
 },
 GetTopScrollSpacerHeight: function(){
  return this.GetScrollSpacerVisibility(true) ? this.GetScrollSpacerElement(true).clientHeight : 0;
 },
 GetBottomScrollSpacerHeight: function(){
  return this.GetScrollSpacerVisibility(false) ? this.GetScrollSpacerElement(false).clientHeight : 0;
 },
 SendCallback: function(){
  if(!this.InCallback()){
   this.ShowLoadingPanel();
   var callbackOwner = this.GetCallbackOwnerControl();
   if(callbackOwner != null)
    callbackOwner.SendCallback();
    else {
    var argument = this.GetCallbackArguments();
    this.CreateCallback(argument);
   }
  }
 },
 OnCallback: function(result) {
  this.ParseCallbackResult(result);
  this.OnCallbackFinally();
 },
 OnCallbackError: function(result){
  ASPxClientListBoxBase.prototype.OnCallbackError.call(this, result);
  this.OnCallbackFinally();
 },
 OnCallbackFinally: function(){
  this.HideLoadingPanel();
  this.changeSelectAfterCallback = 0;
 },
 LockScrollHandler: function(){
  this.scrollHandlerLockCount ++;
 },
 UnlockScrollHandler: function(){
  this.scrollHandlerLockCount --;
 },
 IsScrollHandlerLocked: function(){
  return this.scrollHandlerLockCount > 0;
 },
 OnScroll: function(){
  if(this.IsScrollHandlerLocked()) return;
  if(this.IsVisible() && !this.InCallback() && ( this.GetScrollSpacerVisibility(true) || this.GetScrollSpacerVisibility(false))) {
   this.scrollHelper.OnScroll();
   if(this.scrollHelper.GetIsNeedToHideTopSpacer())
    this.SetTopScrollSpacerVisibility(false);
   if(this.scrollHelper.GetIsNeedCallback())
    this.SendCallback();
  }
 },
 OnBrowserWindowResize: function(evt) {
    if (this.IsVisible())
     this.CorrectSize();
 },
 KeyboardSupportAllowed: function(){
  return !this.CheckColumnSelectionMode();
 },
 InitializeKeyHandlers: function() {
  if(this.KeyboardSupportAllowed()){
   this.AddKeyDownHandler(ASPxKey.PageUp, "OnPageUp");
   this.AddKeyDownHandler(ASPxKey.PageDown, "OnPageDown");
   this.AddKeyDownHandler(ASPxKey.End, "OnEndKeyDown");
   this.AddKeyDownHandler(ASPxKey.Home, "OnHomeKeyDown");
   this.AddKeyDownHandler(ASPxKey.Up, "OnArrowUp");
   this.AddKeyDownHandler(ASPxKey.Down, "OnArrowDown");
  }
 },
 OnArrowUp: function(evt){
  if(this.isInitialized)
   this.SelectNeighbour(-1);
  return true;
 },
 OnArrowDown: function(evt){
  if(this.isInitialized)
   this.SelectNeighbour(1);
  return true;
 },
 OnPageUp: function(evt){
  if(this.isInitialized)
   this.SelectNeighbour(-this.scrollPageSize);
  return true;
 },
 OnPageDown: function(evt){
  if(this.isInitialized)
   this.SelectNeighbour(this.scrollPageSize);
  return true;
 },
 OnHomeKeyDown: function(evt){
  if(this.isInitialized)
   this.SelectNeighbour(-this.GetItemCount());
  return true;
 },
 OnEndKeyDown: function(evt){
  if(this.isInitialized)
   this.SelectNeighbour(this.GetItemCount());
  return true;
 },
 GetAdjustedIndex: function(index){
  if(index < 0) index = 0;
  else{
   var itemCount = this.GetItemCount();
   if(index >= itemCount) index = itemCount - 1;
  }
  return index;
 },
 SelectNeighbour: function (step) {
  var itemCount = this.GetItemCount();
  if (itemCount > 0) {
   this.changeSelectAfterCallback = 0;
   var selectedIndex = this.GetFocusedIndex();
   var pageDownSize = step == 1 ? this.scrollPageSize + 1 : this.scrollPageSize; 
   var isFirstPageDown = selectedIndex == -1 && step == pageDownSize;
   var newSelectedIndex = isFirstPageDown ? step : selectedIndex + step;
   newSelectedIndex = this.GetAdjustedIndex(newSelectedIndex);
   if (selectedIndex != newSelectedIndex) {
    this.LockScrollOnKBNavigation();
    this.SetSelectedIndexCore(newSelectedIndex);
    this.UnlockScrollOnKBNavigation();
   }
   if (this.GetIsNeedToCallbackLoadItemsToTop(newSelectedIndex, step, itemCount)) {
    this.LoadItemsOnCallback(true, newSelectedIndex);
   } else if (this.GetIsNeedToCallbackLoadItemsToBottom(newSelectedIndex, step, itemCount)) {
    this.LoadItemsOnCallback(false, newSelectedIndex);
   }
   this.ScrollToItemVisible(newSelectedIndex);
  }
 },
 GetIsNeedToCallbackLoadItemsToTop: function(selectedIndex, step, itemCount){
  return this.isCallbackMode && this.GetScrollSpacerVisibility(true) && 
   this.serverIndexOfFirstItem > 0 && ((step < 0 && selectedIndex <= 0) || step <= -itemCount);
 },
 GetIsNeedToCallbackLoadItemsToBottom: function(selectedIndex, step, itemCount){
  return this.isCallbackMode && this.GetScrollSpacerVisibility(false) && 
   ((step > 0 && selectedIndex >= itemCount - 1) || step >= itemCount);
 },
 LoadItemsOnCallback: function(isToTop, index){
  this.changeSelectAfterCallback = index - this.GetSelectedIndex();
  this.scrollHelper.SetItemsRangeForLoad(isToTop);
  this.SendCallback();
 },
 FindInputElement: function(){
  return document.getElementById(this.name + "_KBS");
 },
 SetHoverElement: function(element){
  aspxGetStateController().SetCurrentHoverElementBySrcElement(element);
 },
 InitOnContainerMadeVisible: function(){
  this.AdjustControl(false);
 },
 ClearItemsCore: function(){
  this.ClearListTableContent();
  this.OnItemsCleared();
  this.SetValue(null);
 },
 OnItemsCleared: function(){
  this.GetItemSelectionHelper().OnItemsCleared();
 },
 CopyCellWidths: function(sourceRowIndex, destinationRowIndex){
  var cellCount = this.GetItemCellCount();
  var sourceRow = this.GetItemRow(sourceRowIndex);
  var destRow = this.GetItemRow(destinationRowIndex);
  for(var i = 0; i < cellCount; i++)
   destRow.cells[i].style.width = sourceRow.cells[i].style.width;
 },
 RemoveItem: function(index){
  if(index == 0 && this.GetItemCount() > 1)
   this.CopyCellWidths(0, 1);
  if(0 <= index && index < this.GetItemCount()){
   this.UpdateSyncArraysItemDeleted(this.GetItem(index), true);
   var row = this.GetItemRow(index);
   if(_aspxIsExistsElement(row))
    row.parentNode.removeChild(row);
   this.OnItemRemoved(index);
  }
 },
 GetItem: function(index){
  var listTable = this.GetListTable();
  if(!listTable || index < 0 || index >= listTable.rows.length)
   return null;
  var row = listTable.rows[index];
  var image = this.imageCellExists ? _aspxGetChildByTagName(row.cells[this.GetImageCellIndex()], "IMG", 0) : null;
  var src = image == null ? "" : ASPxImageUtils.GetImageSrc(image);
  var i = this.GetItemFirstTextCellIndex();
  var texts = [];
  for(;i < row.cells.length; i ++){
   var textCell = row.cells[i];
   if(typeof(textCell.attributes["DXText"]) != "undefined")
    texts.push(_aspxGetAttribute(textCell, "DXText"));
   else {
    var text = _aspxGetInnerText(textCell);
    text = text.replace(new RegExp(__aspxNbspChar, "g"), " ");
    texts.push(text);
   }
  }
  return new ASPxClientListBoxItem(this, index, texts, this.itemsValue[index], src, this.GetIsItemSelected(index));
 },
 PerformCallback: function(arg) {
  this.SetScrollSpacerVisibility(true, false);
  this.SetScrollSpacerVisibility(false, false);
  this.ClearItemsForPerformCallback();
  this.serverIndexOfFirstItem = 0;
  this.SetScrollSpacerVisibility(true, false);
  this.SetScrollSpacerVisibility(false, false);
  this.FormatAndSetCustomCallbackArg(arg);
  this.SendCallback();
 },
 GetTableRowParent: function(table){
  if(table.tBodies.length > 0)
   return table.tBodies[0];
  return table;
 },
 ProtectWhitespaceSerieses: function(text){
  if(text == "") 
   text = __aspxNbsp;
  else {
    if(text.charAt(0) == ' ')
    text = __aspxNbsp + text.slice(1);
   if(text.charAt(text.length - 1) == ' ')
    text = text.slice(0, -1) + __aspxNbsp;
   text = text.replace(new RegExp("  ", "g"), " &nbsp;");
  }
  return text;
 },
 CreateItem: function(index, texts, value, imageUrl){
  return new ASPxClientListBoxItem(this, index, texts, value, imageUrl);
 },
 InsertItemInternal: function(index, texts, value, imageUrl){
  if(!texts || texts.length == 0)
   texts = [""];
  else if(typeof(texts) == "string")
   texts = [ texts ];
  if(!_aspxIsExists(value))
   value = texts[0];
  if(!_aspxIsExists(imageUrl))
   imageUrl = "";
  var newItemRow = this.CreateNewItem();
  _aspxRemoveAttribute(newItemRow, "id");
  var listTable = this.GetListTable();
  var tbody = this.GetTableRowParent(listTable);
  var isAdd = listTable.rows.length <= index;
  if(isAdd)
   tbody.appendChild(newItemRow);
  else
   tbody.insertBefore(newItemRow, this.GetItemRow(index));
  var newIndex = this.FindFreeIndex();
  var newId = this.CreateItemId(newIndex);
  var newClientId = this.CreateItemClientId(newIndex);
  this.InitializeItemAttributes(newItemRow, newClientId, true);
  var sampleItemFirstTextCell = this.GetSampleItemFirstTextCell();
  var itemCellsIdPostfixes = this.GetItemCellsIdPostfixes();
  var styleController = aspxGetStateController();
  aspxAddHoverItems(this.name, this.CreateStyleClasses(newId, itemCellsIdPostfixes, 
   styleController.GetHoverElement(sampleItemFirstTextCell), __aspxHoverItemKind));
  aspxAddSelectedItems(this.name, this.CreateStyleClasses(newId, itemCellsIdPostfixes, 
   styleController.GetSelectedElement(sampleItemFirstTextCell), __aspxSelectedItemKind));
  aspxAddDisabledItems(this.name, this.CreateStyleClasses(newId, itemCellsIdPostfixes, 
   styleController.GetDisabledElement(sampleItemFirstTextCell), __aspxDisabledItemKind));
  _aspxRemoveAttribute(sampleItemFirstTextCell, __aspxCachedStatePrefix + __aspxHoverItemKind);
  _aspxRemoveAttribute(sampleItemFirstTextCell, __aspxCachedStatePrefix + __aspxSelectedItemKind);
  _aspxRemoveAttribute(sampleItemFirstTextCell, __aspxCachedStatePrefix + __aspxDisabledItemKind);
  this.PrepareItem(newItemRow, texts, imageUrl); 
  _aspxArrayInsert(this.itemsValue, value, index);
  this.RegisterInsertedItem(index, texts, value, imageUrl);
  this.OnItemInserted(index);
 },
 PrepareItem: function(newItemRow, texts, imageUrl){ 
  var i = 0;
  if(this.GetIsCheckColumnExists())
   i ++;
  if(this.imageCellExists) {
   this.PrepareItemImage(newItemRow, i, imageUrl);
   i ++;
  }
  var cellCount = this.GetItemCellCount();
  for(var j = 0; i < cellCount; i++, j++)
   this.PrepareItemTextCell(newItemRow.cells[i], texts[j])
 },
 PrepareItemImage: function(newItemRow, imageCellIndex, imageUrl){
  var imageCell = newItemRow.cells[imageCellIndex];
  var image = _aspxGetChildByTagName(imageCell, "IMG", 0);
  if(!image){
   image = document.createElement("IMG");
   imageCell.innerHTML = "";
   imageCell.appendChild(image);
  }
  ASPxImageUtils.SetImageSrc(image, imageUrl);
 }, 
 PrepareItemTextCell: function(cell, text){
  if(!_aspxIsExists(text)) 
   text = "";
  if(this.encodeHtml)
   text = _aspxEncodeHtml(text);
  cell.innerHTML = this.ProtectWhitespaceSerieses(text);
  if(text == "")
   _aspxSetAttribute(cell, "DXText", text);
 },
 ClearListTableContent: function(){
  var tBody = this.GetTableRowParent(this.GetListTable());
  if(__aspxIE)
   tBody.innerText = "";
  else
   tBody.innerHTML = "";
 },
 FormatText: function(texts){
  if(typeof(texts) == "string")
   return texts;
  else if(!this.IsMultiColumn())
   return texts[0];
  else
   return this.FormatTextCore(texts);
 },
 FormatTextCore: function(texts){
  if(this.isComboBoxList)
   return ASPxFormatter.Format(this.textFormatString, texts);
  else
   return texts.join("; ");
 },
 OnItemInserted: function(index){
  this.GetItemSelectionHelper().OnItemInserted(index);
 },
 OnItemRemoved: function(index){
  this.GetItemSelectionHelper().OnItemRemoved(index);
 },
 CreateItemId: function(index){
  return __aspxLBIIdSuffix + index;
 },
 CreateItemClientId: function(index){
  return this.name + "_" + __aspxLBIIdSuffix + index;
 },
 CreateNewItem: function(){
  var newItemRow = this.GetSampleItemRow();
  if (_aspxIsExistsElement(newItemRow)) 
   newItemRow = newItemRow.cloneNode(true);
  return newItemRow;
 },
 CreateStyleClasses: function(id, postfixes, item, kind){
  var classes = [];
  if(item && item[kind]){
   classes[0] = [];
   classes[0][0] = item[kind].classNames;
   classes[0][1] = item[kind].cssTexts;
   classes[0][2] = [];
   classes[0][2][0] = id;
   classes[0][3] = postfixes;
  }
  return classes;
 },
 CorrectSizeByTimer: function(){
  if(this.APILockCount == 0 && this.IsDisplayed())
   _aspxSetTimeout("aspxLBCorrectSizeByTimer(\""+this.name+"\");", 0);
 },
 FindFreeIndex: function(){
  return this.freeUniqIndex ++;
 },
 GetSampleItemRowID: function(){
  return this.name + "_" + __aspxLBSIIdSuffix;
 },
 GetSampleItemRow: function(){
  if(this.SampleItem == null)
   this.SampleItem = _aspxGetElementById(this.GetSampleItemRowID());
  return this.SampleItem;
 },
 GetSampleItemFirstTextCell: function(){
  if(!_aspxIsExistsElement(this.sampleItemFirstTextCell)){
   var sampleItemRow = this.GetSampleItemRow();
   if(_aspxIsExistsElement(sampleItemRow))
    this.sampleItemFirstTextCell = sampleItemRow.cells[this.imageCellExists ? 1 : 0];
  }
  return this.sampleItemFirstTextCell;
 },
 ChangeEnabledAttributes: function(enabled){
  this.ChangeListTableEvents(this.GetListTable(), _aspxChangeEventsMethod(enabled));
  var inputElement = this.GetInputElement();
  if(inputElement) 
   this.ChangeSpecialInputEnabledAttributes(inputElement, _aspxChangeEventsMethod(enabled));
 },
 ChangeEnabledStateItems: function(enabled){
  var controller = aspxGetStateController();
  controller.SetElementEnabled(this.GetMainElement(), enabled);
  var count = this.GetItemCount();
  var i = this.hasSampleItem ? -1 : 0 ;
  var checkColumnExists = this.GetIsCheckColumnExists();
  for(; i < count; i ++){
   var element = this.GetItemFirstTextCell(i);
   if(element)
    controller.SetElementEnabled(element, enabled);
   if(checkColumnExists && i >= 0){
    var checkBox = this.GetItemCheckBoxElement(i);
    checkBox.disabled = !enabled;
   }
  }
 },
 ChangeListTableEvents: function(listTable, method){
  if(this.isComboBoxList){
   method(listTable, "mouseup", aspxLBIClick);
   if(__aspxFirefox)
    method(listTable, "mousedown", _aspxPreventEvent); 
  }
  else{
   method(listTable, "click", aspxLBIClick);   
   method(listTable, "dblclick", aspxLBIClick); 
   if(this.MultiSelectionMode())
    _aspxAttachEventToElement(listTable, "selectstart", aspxLBTSelectStart);
  }
 },
 IsValueChanged: function(){
  return this.cachedValue != this.GetValue();
 },
 OnItemSelectionChanged: function(index, selected){
  if(this.CheckColumnSelectionMode()){
   var checkBox = this.GetItemCheckBoxElement(index);
   checkBox.checked = selected;
  }
  if (!this.IsSelectionEventsLocked()) {
   var valueChanged = this.IsValueChanged();
   if (valueChanged) {
    this.RaisePersonalStandardValidation();
    this.OnValueChanged();
   }
   var processOnServer = this.RaiseSelectedIndexChanged(false, index, selected);
   if(!valueChanged && this.autoPostBack || processOnServer)
    this.SendPostBackInternal("");
  }
  this.CacheValue();
 },
 RaiseSelectedIndexChanged: function(processOnServer, index, selected){
  if(!this.SelectedIndexChanged.IsEmpty()){
   var args = new ASPxClientListEditItemSelectedChangedEventArgs(index, selected);
   this.SelectedIndexChanged.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 },
 RaiseValueChangedAdditionalEvents: function(processOnServer){
  return processOnServer;
 },
 SetWidth: function(width) {
  this.width = width + "px";
   this.GetScrollDivElement().style.width = "100%";
   this.constructor.prototype.SetWidth.call(this, width);
 },
 SetHeight: function(height) {
  this.heightCorrected = false;
  this.constructor.prototype.SetHeight.call(this, height);
 }
});
ASPxClientNativeListBox = _aspxCreateClass(ASPxClientListBoxBase, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
 },
 SetMainElement: function(mainElement){
  this.mainElement = mainElement;
 },
 FindInputElement: function(){
  return this.GetMainElement();
 }, 
 GetOptionCount: function(){
  return this.GetMainElement().options.length;
 },
 GetOption: function(index){
  return this.GetMainElement().options[index];
 },
 GetItemCount: function(){
  return this.GetOptionCount();
 },
 SelectIndexSilent: function(index){
  var selectedIndex = this.GetSelectedIndexInternal();
  var isValidIndex = (-1 <= index && index < this.GetItemCount());
  if((selectedIndex != index && isValidIndex) || !this.isInitialized){
   this.SetSelectedIndexInternal(index);
   return true;
  }
  return false;
 },
 GetSelectedIndexInternal: function(){
  return this.GetMainElement().selectedIndex; 
 },
 SetSelectedIndexInternal: function(index){
  this.GetMainElement().selectedIndex = index; 
 },
 ClearItemsCore: function(){
  this.GetMainElement().innerHTML = "";
 },
 RemoveItem: function(index){
  if(0 <= index && index < this.GetItemCount()){
   var oldSelectedIndex = this.GetSelectedIndexInternal();
   this.UpdateSyncArraysItemDeleted(this.GetItem(index), true);
   var option = this.GetOption(index);
   this.GetMainElement().removeChild(option);
   this.UpdateOptionValues();
   this.OnItemRemoved(oldSelectedIndex, index);
  }
 },
 OnItemRemoved: function(oldSelectedIndex, newSelectedIndex){
  if(newSelectedIndex == oldSelectedIndex && !this.MultiSelectionMode())
   this.SetSelectedIndexInternal(-1);
 },
 MultiSelectionMode: function(){
  return this.GetMainElement().multiple;
 },
 GetItem: function(index){
  if(0 <= index && index < this.GetOptionCount()) {
   var text = this.GetOption(index).text;
   if(_aspxIsExists(text))
    return new ASPxClientListEditItem(this, index, text, this.itemsValue[index], "");
  }
  return null;
 },
 PerformCallback: function(arg) {
  this.ClearItemsForPerformCallback();
  this.FormatAndSetCustomCallbackArg(arg);
  this.SendCallback();
 },
 SendCallback: function(){
  if(!this.InCallback()){
   var callbackOwner = this.GetCallbackOwnerControl();
   if(callbackOwner != null)
    callbackOwner.SendCallback();
    else {
    var argument = this.GetCallbackArguments();
    this.CreateCallback(argument);
   }
  }
 },
 ParseCallbackResult: function(result){
  var deserializedItems = this.DeserializeItems(result);
  this.LoadItemsFromCallback(true, deserializedItems);
 },
 InsertItemInternal: function(index, text, value, imageUrl){
  if(!_aspxIsExists(value))  
   value = text;
  var oldSelectedIndex = this.GetSelectedIndexInternal();
  var isAdd = this.GetOptionCount() <= index;
  var newOption = document.createElement("OPTION");
  if(isAdd)
   this.GetMainElement().appendChild(newOption);
  else
   this.GetMainElement().insertBefore(newOption, this.GetOption(index));
  newOption.innerHTML = text;
  this.UpdateOptionValues();
  _aspxArrayInsert(this.itemsValue, value, index);
  this.RegisterInsertedItem(index, text, value, imageUrl); 
  if(index == oldSelectedIndex && index != -1)
   this.SetSelectedIndex(index + 1);
 },
 UpdateOptionValues: function() {
  for(var i = 0; i < this.GetOptionCount(); i++)
   this.GetOption(i).value = i;
 },
 ChangeEnabledAttributes: function(enabled){
  if(!this.isComboBoxList)
   this.GetMainElement().disabled = !enabled;
 },
 OnCallback: function(result) {
  this.ParseCallbackResult(result);
 },
 OnItemDblClick: function(){
  this.RaiseItemDoubleClick();
 },
 LoadItemsFromCallback: function(isToTop, deserializedItems){
  this.BeginUpdate();
  for(var i = deserializedItems.length - 1; i >= 0; i --)
   this.InsertItemInternal(0, deserializedItems[i].text, deserializedItems[i].value, deserializedItems[i].imageUrl);
  this.EndUpdate();
 },
 GetSelectedIndices: function(){
  var selectedIndices = [];
  var mainElement = this.GetMainElement();
  for(var i = 0; i < mainElement.options.length; i++){
   if(mainElement.options[i].selected)
    selectedIndices.push(i);
  }
  return selectedIndices;
 },
 GetSelectedValues: function(){ 
  var selectedValues = [];
  var selectedIndices = this.GetSelectedIndices();
  for(var i = 0; i < selectedIndices.length; i++)
   selectedValues.push(this.GetItemValue(selectedIndices[i]));
  return selectedValues;
 },
 GetSelectedItems: function(){
  var selectedItems = [];
  var selectedIndices = this.GetSelectedIndices();
  for(var i = 0; i < selectedIndices.length; i++)
   selectedItems.push(this.GetItem(selectedIndices[i]));
  return selectedItems;
 },
 SelectAll: function(){
  this.SetAllItemsSelectedValue(true);
 },
 UnselectAll: function(){
  this.SetAllItemsSelectedValue(false);
 },
 SetAllItemsSelectedValue: function(selected){
  var mainElement = this.GetMainElement();
  for(var i = 0; i < mainElement.options.length; i++)
   mainElement.options[i].selected = selected;
 },
 SelectIndices: function(indices){
  this.SetIndicesSelectionState(indices, true);
 },
 UnselectIndices: function(indices){
  this.SetIndicesSelectionState(indices, false);
 },
 SetIndicesSelectionState: function(indices, selected){
  var mainElement = this.GetMainElement();
  for(var i = 0; i < indices.length; i++){
   mainElement.options[indices[i]].selected = selected;
  }
 },
 SelectItems: function(items){
  if(_aspxIsExists(items))
   this.SetItemsSelectionState(items, true);
  else
   this.SelectAll();
 },
 UnselectItems: function(items){
  if(_aspxIsExists(items))
   this.SetItemsSelectionState(items, false);
  else
   this.UnselectAll();
 },
 SetItemsSelectionState: function(items, selected){
  var mainElement = this.GetMainElement();
  for(var i = 0; i < items.length; i++){
   mainElement.options[items[i].index].selected = selected;
  }
 },
 SelectValues: function(values){
  this.SetValuesSelectedState(values, true);
 },
 UnselectValues: function(values){
  this.SetValuesSelectedState(values, false);
 },
 SetValuesSelectedState: function(values, selected){
  var mainElement = this.GetMainElement();
  var index;
  for(var i = 0; i < values.length; i++){
   index = this.FindItemIndexByValue(values[i]);
   mainElement.options[index].selected = selected;
  }
 }
});
ASPxClientRadioButtonList = _aspxCreateClass(ASPxClientListEdit, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);          
  this.isASPxClientRadioButtonList = true;
  this.items = [];
 },
 InlineInitialize: function() {
  var selectedIndex = this.GetSelectedIndex();
  this.UpdateHiddenInputs(selectedIndex);
  this.SetSelectedIndex(this.GetSelectedIndex()); 
  ASPxClientListEdit.prototype.InlineInitialize.call(this);
 },
 SetFocus: function() {
  this.UpdateFocus(); 
 },
 UpdateFocus: function() {
  var index = this.GetSelectedIndexInternal();
  if(index == -1)
   index = 0;
  var itemElement = this.GetItemElement(index);
  if (itemElement != null && _aspxGetActiveElement() != itemElement && _aspxIsEditorFocusable(itemElement)) 
   _aspxSetFocus(itemElement);
 },
 IsElementBelongToInputElement: function(element) {
  var forAttr = element.tagName == "LABEL" ? _aspxGetAttribute(element, "for") : "";
  for(var i = 0; i < this.GetItemCount(); i++) {
   var currentItemElement = this.GetItemElement(i);
   if(element == currentItemElement || (forAttr && currentItemElement.id == forAttr))
    return true;
  }
  return false;  
 },
 GetInputElement: function() {
  var index = this.GetSelectedIndexInternal();
  return this.GetItemElement(index);
 },
 GetValueInputElement: function() {
  if(this.valueInput == null) {
   this.valueInput = _aspxCreateHiddenField(null, this.name + "_ValueInput");
   var stateInput = this.FindStateInputElement();
   stateInput.parentNode.insertBefore(this.valueInput, stateInput);
  }
  return this.valueInput;
 },
 GetValueInputToValidate: function() {
  return this.GetValueInputElement();
 },
 GetItemElement: function(index) {
  return this.GetChild("_RB" + index + "_I");
 },
 GetItemMainElement: function(index) {
  return this.GetChild("_RB" + index);
 },
 GetItemCount: function() {
  return this.items.length;
 },
 OnItemClick: function(index) {
  if(this.GetSelectedIndexInternal() != index) {
   this.SelectIndexSilent(index);
   this.RaisePersonalStandardValidation();
   this.OnValueChanged();
  }
  this.UpdateFocus();
 },
 OnItemClickReadonly: function() {
  var index = this.GetSelectedIndexInternal();
  this.SelectIndexSilent(index);
 },
 UpdateHiddenInputs: function(index) {
  var stateInput = this.FindStateInputElement();
  if(_aspxIsExistsElement(stateInput))
   stateInput.value = index;
  var valueInput = this.GetValueInputElement();
  if(_aspxIsExistsElement(valueInput)) {
   var value = this.GetValue();
   valueInput.value = _aspxIsExists(value) ? value : " ";
  }
 },
 SelectIndexSilent: function(index) {
  var itemCount = this.GetItemCount();
  var isValidIndex = (-1 <= index && index < itemCount);
  if(isValidIndex) {
   for(var i = 0; i < itemCount; i++) {
    var element = this.GetItemElement(i);
    if(element)
     element.checked = (i == index);
   }
   this.SetSelectedIndexInternal(index);
   this.UpdateHiddenInputs(index);
  }
 },
 GetItemValue: function(index){
  if (index > -1 && index < this.items.length) {
   if (typeof(this.items[index].value) == "string" && this.items[index].value == "" && this.convertEmptyStringToNull)
    return null;
   else
    return this.items[index].value;
  }
  return null;
 },
 SetValue: function(value) {
  for (var i = 0; i < this.items.length; i++) {
   if(this.GetItemValue(i) == value) {   
    this.SelectIndexSilent(i);
    return;
   }
  } 
  this.SelectIndexSilent(-1);    
 },
 CreateItems: function(itemsProperties){
  for(var i = 0; i < itemsProperties.length; i ++)
   this.CreateItem(i, itemsProperties[i][0], itemsProperties[i][1], itemsProperties[i][2]);
 },
 CreateItem: function(index, text, value, imageUrl){
  var item = new ASPxClientListEditItem(this, index, text, value, imageUrl);
  this.items.push(item);
 },
 GetItem: function(index){
  return (0 <= index && index < this.items.length) ? this.items[index] : null;
 },
 ChangeEnabledAttributes: function(enabled){
  for(var i = 0; i < this.GetItemCount(); i++){  
   var element = this.GetItemElement(i);
   if(element){
    this.ChangeItemEnabledAttributes(element, _aspxChangeAttributesMethod(enabled));
    element.disabled = !enabled;
   }
  }
 },
 ChangeEnabledStateItems: function(enabled){
  aspxGetStateController().SetElementEnabled(this.GetMainElement(), enabled);
  for(var i = 0; i < this.GetItemCount(); i++){  
   var element = this.GetItemMainElement(i);
   if(element)
    aspxGetStateController().SetElementEnabled(element, enabled);
  }
 },
 ChangeItemEnabledAttributes: function(element, method){
  method(element, "onclick");
 }
});
ASPxClientRadioButtonList.Cast = ASPxClientControl.Cast;
ASPxClientListEditItemSelectedChangedEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(index, isSelected){
  this.constructor.prototype.constructor.call(this, false);
  this.index = index;
  this.isSelected = isSelected;
 }
});
function aspxLBTSelectStart(evt){
 var element = _aspxGetEventSource(evt);
 var shiftPressed = evt.shiftKey;
 var ctrlKey = evt.ctrlKey || evt.metaKey;
 if(shiftPressed || ctrlKey){
  _aspxClearSelection();
  _aspxPreventEventAndBubble(evt);
 }
}
function aspxLBIClick(evt){
 var element = _aspxGetEventSource(evt);
 while(element != null && element.tagName != "BODY"){
  if(element.tagName == "TR"){
   var table = element.offsetParent;
   if(table && table.ListBoxId){
    var lb = aspxGetControlCollection().Get(table.ListBoxId);
    if(lb != null) {
     var retValue;
     if(evt.type == "dblclick") 
      retValue =lb.OnItemDblClick();
     else if(!lb.isComboBoxList || _aspxGetIsLeftButtonPressed(evt)) 
      retValue = lb.OnItemClick(element.rowIndex, evt);
     if(typeof(retValue) != "undefined")
      return retValue;
    }
    break;
   }
  }
  element = element.parentNode;
 }
}
function aspxNLBIDClick(evt){
 var element = _aspxGetEventSource(evt);
 if(element != null && element.tagName == "SELECT"){
  var lb = aspxGetControlCollection().Get(element.id);
  if(lb != null)
   lb.OnItemDblClick();
 }
}
function aspxLBScroll(evt){
 var sourceId = _aspxGetEventSource(evt).id;
 if(sourceId.slice(-__aspxLBDSuffix.length) == __aspxLBDSuffix){
  var name = sourceId.slice(0, -2);
  var lb = aspxGetControlCollection().Get(name);
  if(lb != null && lb.isInitialized) 
   lb.OnScroll();
 }
}
function aspxLBCorrectSizeByTimer(name){
 var lb = aspxGetControlCollection().Get(name);
 if(lb != null)
  lb.OnCorrectSizeByTimer();
}
function aspxERBLIClick(name, index) {
 var list = aspxGetControlCollection().Get(name);
 if(list != null)
  list.OnItemClick(index);
}
function aspxERBLICancel(name) {
 var list = aspxGetControlCollection().Get(name);
 if(list != null)
  list.OnItemClickReadonly();
}
ASPxClientCallbackPanel = _aspxCreateClass(ASPxClientControl, {
 constructor: function(name) {
  this.constructor.prototype.constructor.call(this, name);
  this.allowMultipleCallbacks = false;
 },
 GetContentElement: function() {
  var element = this.GetMainElement();
  return element.tagName == "TABLE" ? element.rows[0].cells[0] : element;
 },
 OnCallback: function(result) {
  _aspxSetInnerHtml(this.GetContentElement(), result);
 },
 ShowLoadingPanel: function(){
  var element = this.GetContentElement();
  var mainElement = (element.tagName == "TD") ? this.GetMainElement() : element;
  var div = this.CreateLoadingDiv(element);
  if(div != null)
   this.CreateLoadingPanelWithAbsolutePosition(element, mainElement);
  else 
   this.CreateLoadingPanelInsideContainer(element, true, true, false);
 },
 PerformCallback: function(parameter) {
  this.CreateCallback(parameter);
 },
 CreateCallback: function(arg, command, callbackInfo) {
  this.ShowLoadingPanel();
  ASPxClientControl.prototype.CreateCallback.call(this, arg, command);
 },
 GetLoadingPanelTextCellID: function(){ 
  return this.name + "_T";
 },
 GetLoadingPanelTextCell: function(){
  return _aspxGetElementById(this.GetLoadingPanelTextCellID());
 },
 GetLoadingPanelText: function(){
  var textCell = this.GetLoadingPanelTextCell();
  return _aspxGetInnerText(textCell);
 },
 SetLoadingPanelText: function(text){   
  var textCell = this.GetLoadingPanelTextCell();
  if(__aspxIE)
     textCell.innerText = text;
  else
     textCell.innerHTML = text;
 },
 GetContentHtml: function(){
  return this.GetContentElement().innerHTML;
 },
 SetContentHtml: function(html){
  this.GetContentElement().innerHTML = html;
 }
});
ASPxClientCallbackPanel.Cast = ASPxClientControl.Cast;
