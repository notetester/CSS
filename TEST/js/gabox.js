(function(){function h(a){var b=23;if("string"==typeof a.data){var c=a.data.substring(0,b);"cast.imp.joins.com:REQ:"==c?(b=a.data.substring(b),a.source.postMessage("cast.imp.joins.com:RES:142NlrZC29UAPnr7Q4b5Oxi3rhcIBXZxW4Pp2ebHMaCEAM4qWzAZAbZTa0VCWWZfLVR4Q3A5UVlBa3hISUpnAstB18ZFq7BDYgPLQdfGRauwQ2I:CXCgQuFERPW1JISMNitdAw:1595479795937:false:"+encodeURIComponent("https://www.megabox.co.kr/booking"),a.origin),"142NlrZC29UAPnr7Q4b5Oxi3rhcIBXZxW4Pp2ebHMaCEAM4qWzAZAbZTa0VCWWZfLVR4Q3A5UVlBa3hISUpnAstB18ZFq7BDYgPLQdfGRauwQ2I"!=b&&(a=document.getElementsByTagName("head")[0],c=document.createElement("script"),c.src="//cast.imp.joins.com/bind/142NlrZC29UAPnr7Q4b5Oxi3rhcIBXZxW4Pp2ebHMaCEAM4qWzAZAbZTa0VCWWZfLVR4Q3A5UVlBa3hISUpnAstB18ZFq7BDYgPLQdfGRauwQ2I/"+b+".js",a.appendChild(c))):"cast.imp.joins.com:GET:"==c?(b=a.data.substring(b),a.source.postMessage("cast.imp.joins.com:VAL:"+
(b in d?b+":"+d[b]:b),a.origin)):"cast.imp.joins.com:SET:"==c&&(a=a.data.substring(b),b=a.indexOf(":"),0>b?delete d[a]:d[a.substring(0,b)]=a.substring(b+1))}}function k(a){var b=[],c;for(c in a)b.push(c+"="+encodeURIComponent(a[c]));var d;if("undefined"!==typeof XMLHttpRequest)d=new XMLHttpRequest;else for(a="MSXML2.XmlHttp.6.0 MSXML2.XmlHttp.5.0 MSXML2.XmlHttp.4.0 MSXML2.XmlHttp.3.0 MSXML2.XmlHttp.2.0 Microsoft.XmlHttp".split(" "),c=0;c<a.length;c++)try{d=new ActiveXObject(a[c]);break}catch(t){}d.open("GET",
"//cast.imp.joins.com/trac"+(b.length?"?"+b.join("&"):""),!0);d.send(null)}function l(){k({event:"unload",vid:"CXCgQuFERPW1JISMNitdAw",vt:"1595479795937"})}var d={};try{if(window.addEventListener)window.addEventListener("message",h,!1),window.addEventListener("beforeunload",l,!1);else{window.attachEvent("onmessage",h);var m=window.onbeforeunload;window.onbeforeunload=function(a){l();m&&m(a)}}for(var n={event:"meta",vid:"CXCgQuFERPW1JISMNitdAw",vt:"1595479795937",cs:document.characterSet||document.charset||document.inputEncoding||"",token:"142NlrZC29UAPnr7Q4b5Oxi3rhcIBXZxW4Pp2ebHMaCEAM4qWzAZAbZTa0VCWWZfLVR4Q3A5UVlBa3hISUpnAstB18ZFq7BDYgPLQdfGRauwQ2I"},
p=document.getElementsByTagName("meta"),q=!1,e=0;e<p.length;e++){var f=p[e],g=f.getAttribute("property")||f.getAttribute("name");if(g&&0<="imp:category article:section article:section2 article:section3 article:published_time og:type og:title og:url dable:author title keywords news_kyewords".search(g)){var r=f.getAttribute("content");r&&(n["_"+encodeURIComponent(g)]=r,q=!0)}}q&&k(n)}catch(a){}})();