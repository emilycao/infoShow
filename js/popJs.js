/**
 * popId : 是弹出框id
 * id ：点击的id
 */
function ClickFn (popId,id) {
	var clickId = document.getElementById(id);
	clickId.onclick = function () {
		loadFunction (popId,id);
	}
/* 判断ie */
function jIE () {
	if((navigator.userAgent.indexOf('MSIE') >= 0) 
    && (navigator.userAgent.indexOf('Opera') < 0)) {
		return 1;
	} 
}
/**
 * 
 * @param  {[type]} id : 弹出框的id
 * @param  {[type]} site ：  读取圆点的id
 * @return {[type]}    [description]
 */
function loadFunction (id,site) {
	var pop = document.getElementById(id),
		cWidth = document.documentElement.clientWidth,
		cHeight = document.documentElement.clientHeight,
		oTop = (jIE () === 1)? (parseInt((parseInt(pos(site).top) / 100) * cHeight)) : parseInt(pos(site).top),
		oLeft = (jIE () === 1)? (parseInt((parseInt(pos(site).left) / 100) * cWidth)) : parseInt(pos(site).left),
		close = document.getElementById('closed'),
		div = document.createElement('div'),
		site = document.getElementById(site),
		owidth,
		compareWidth = cWidth - oLeft;
	div.className = 'border';
	div.style.cssText ='border-top: 1px solid #2870db;top:' + (oTop + site.offsetHeight/2) + 'px;';
	pop.style.display = 'block';
	if(( cHeight - 500)/2 < oTop) {
		pop.style.top = 10 + 'px';
	}else {
		pop.style.top = oTop + 'px';
	}
	var popWidth = pop.offsetWidth;
	if( compareWidth < popWidth || parseInt(compareWidth - popWidth ) < popWidth/8 ) {
		owidth = pop.style.left = (oLeft - popWidth) + 'px'; 
		div.style.left = oLeft + 'px';
		div.style.width = oLeft - parseInt(owidth) -popWidth + 12 + 'px';
	}else {
		owidth = pop.style.left = oLeft + 60 + 'px' ;
		div.style.left = oLeft + site.offsetWidth/2 + 'px';
		div.style.width = parseInt(owidth) - oLeft - site.offsetHeight/2 + 'px';
	}
	document.body.appendChild(div);
	close.onclick = function () {
		pop.style.display = 'none';
		document.body.removeChild(div);
	}
}
/** 
*获取页面某个元素当前的样式：(譬如获取当前INPUT的宽度，border的样式、border颜色等) 
*@param domID 文档对象的ID 或者直接传DOM文档对象 
*@param propName  样式属性 
*@return 返回当前元素的样式 
*注意：propName不要聚合写法(eg:borer)，要分拆写法(eg:borderStyle 只支持IE)，越详细越好(eg:borderLeftStyle 支持所有浏览器) 
* 
*/  
var getStyle = function(domID,propName){  
    var dom = null;  
    if(typeof(domID)=="object" && !!domID.tagName==true){  
        dom = domID;//直接传递文档对象  
    }else{  
        dom = document.getElementById(domID);//传递文档对象的ID  
    }  
    if(dom==null){return "";}  
    //兼容IE，chrome，FF等浏览器的写法：【 注意属性写法规则：严格要求写全名称，否则失效返回"" 】  
    var currentStyle = dom.currentStyle ||document.defaultView.getComputedStyle(dom,null);    
    return currentStyle[propName] ||"";  
}   
function pos (ev) {
	var div=document.getElementById(ev);
	var top,left;
	left = getStyle(div,'left');
	top = getStyle(div,'top');
	
	return {
		left : left,
		top : top
	}
};
}
/**
 * 
 * @param  {[type]} id : 弹出框的id
 * @param  {[type]} site ：  读取圆点的id
 * @return {[type]}    [description]
 */
function loadFunction (id,site) {
	var pop = document.getElementById(id);
	var popWidth = pop.offsetWidth;
	var oTop = parseInt(pos(site).top) ;
	var oLeft = parseInt(pos(site).left);
	var close = document.getElementById('closed');
	var div = document.createElement('div');
	var site = document.getElementById(site);
	var owidth;
	div.className = 'border';
	div.style.borderTop = ' 1px solid #2870db';
	div.style.top = oTop + site.offsetHeight/2 + 'px';
	pop.style.display = 'block';
	if((document.documentElement.clientHeight-500)/2 < oTop) {
		pop.style.top = 10 + 'px';
	}else {
		pop.style.top = oTop + 'px';
	}
	if( document.documentElement.clientWidth - oLeft < popWidth ) {
		owidth = pop.style.left = (oLeft - popWidth) + 'px'; 
		div.style.left = oLeft + 'px';
		div.style.width = oLeft - parseInt(owidth) -popWidth + 12 + 'px';
	}else {
		owidth = pop.style.left = oLeft + 60 + 'px' ;
		div.style.left = oLeft + site.offsetWidth/2 + 'px';
		div.style.width = parseInt(owidth) - oLeft - site.offsetHeight/2 + 'px';
	}
	document.body.appendChild(div);
	close.onclick = function () {
		pop.style.display = 'none';
		document.body.removeChild(div);
	}
}
/** 
*获取页面某个元素当前的样式：(譬如获取当前INPUT的宽度，border的样式、border颜色等) 
*@param domID 文档对象的ID 或者直接传DOM文档对象 
*@param propName  样式属性 
*@return 返回当前元素的样式 
*注意：propName不要聚合写法(eg:borer)，要分拆写法(eg:borderStyle 只支持IE)，越详细越好(eg:borderLeftStyle 支持所有浏览器) 
* 
*/  
var getStyle = function(domID,propName){  
    var dom = null;  
    if(typeof(domID)=="object" && !!domID.tagName==true){  
        dom = domID;//直接传递文档对象  
    }else{  
        dom = document.getElementById(domID);//传递文档对象的ID  
    }  
    if(dom==null){return "";}  
    //兼容IE，chrome，FF等浏览器的写法：【 注意属性写法规则：严格要求写全名称，否则失效返回"" 】  
    var currentStyle = dom.currentStyle ||document.defaultView.getComputedStyle(dom,null);    
    return currentStyle[propName] ||"";  
}   
function pos (ev) {
	var div=document.getElementById(ev);
	var top,left;
	left = getStyle(div,'left');
	top = getStyle(div,'top');
	
	return {
		left : left,
		top : top
	}
};