// ==UserScript==
// @name         S1 NaviBar Customization
// @namespace    http://bbstripe.me/
// @version      0.7.3
// @description  remove "八卦体育" and "页游", add "漫区", "PC数码", "游戏" and "黑名单"; Remove 黑名单id的发言提示; 黑球logo的超链从test主页替换为论坛列表
// @author       Elence_ylns1314
// @include      /^https?:\/\/(bbs|www)?\.?(stage1|saraba1st|stage1st)\.(cc|com).*/
// @grant        none
// ==/UserScript==



/* function for creating new links */
function createLink(name, addr) {
    var node = document.createElement("li");
    if(window.location.pathname == "/2b/" + addr)
        node.className = "a";
    var link = document.createElement("a");
    link.setAttribute("href",addr);
    link.setAttribute("hidefocus","true");
    link.appendChild(document.createTextNode(name));
    node.appendChild(link);
    return node;
}


function replace() {
    /* find the unordered list in the navi bar */
    document.getElementsByTagName("h2")[0].childNodes[0].setAttribute("href", "./forum.php");
    var linkList = document.getElementById("nv").getElementsByTagName("ul")[0];
    
    /* remove all original links */
    while(linkList.firstChild) {
        linkList.removeChild(linkList.firstChild);
    }
    
    /* add whatever you want here */
    linkList.appendChild(createLink("论坛","forum.php"));
    linkList.appendChild(createLink("外野","forum-75-1.html"));
    linkList.appendChild(createLink("漫区","forum-6-1.html"));
    linkList.appendChild(createLink("PC数码","forum-51-1.html"));
    linkList.appendChild(createLink("游戏","forum-4-1.html"));
    linkList.appendChild(createLink("黑名单","home.php?mod=space&do=friend&view=blacklist"));
    
    /* hide notifications of found users in the black list */
    var hiddenTip = document.getElementById("hiddenpoststip");
    if (hiddenTip !== null) {
        hiddenTip.remove();
    }
    
}

var useless = window.addEventListener ? 
window.addEventListener("load",replace(),false) : 
window.attachEvent && window.attachEvent("onload",replace());

