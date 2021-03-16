/* Copyright 2021 Voranda, Inc. - All Rights Reserved */
var responsive_version = "4.2.4",
  is_mobile_client = !1;
(adsbygoogle = window.adsbygoogle || []).push({
  google_ad_client: "ca-pub-6978513048441664",
  enable_page_level_ads: !0
});
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var headerBiddingSlots = [],
  nonHeaderBiddingSlots = [],
  href = window.location.href;
window.googletag = window.googletag || {
  cmd: []
};
pbjs.adserverRequestSent = !1;
var sendAdServerRequest = function(b) {
  googletag.cmd.push(function(c) {
    pbjs.adserverRequestSent || (pbjs.adserverRequestSent = !0, googletag.pubads().refresh(c))
  })
};
console.log("Loaded responsive-" + responsive_version);
var in_ca = dr_getCookie("in_ca");
"y" == in_ca || "n" == in_ca ? dr_consentManagement(in_ca) : dr_guess_location();
setTimeout(function() {
  sendAdServerRequest(headerBiddingSlots)
}, 2E3);
if (isMobileClient() && !href.match(/\?responsive=off/)) {
  var documentApp = function() {
    function b(a, d, k, r) {
      k = void 0 === k ? "" : k;
      r = void 0 === r ? "<HR />" : r;
      a = "<center>" + document.getElementById(a[d]).outerHTML + "</center>";
      document.body.insertAdjacentHTML("afterbegin", k + a + r)
    }

    function c(a, d) {
      0 <= ["TOP", "MAIN", "C1R1", "C2R1", "C3R1"].indexOf(d) ? (h.push(a), l.push(d)) : "IMG" == a.tagName ? (h.push(a), l.push(d)) : "HR" == a.tagName ? (h.push(a), l.push(d)) : "[object HTMLBRElement]" == a.toString() ? (h.push(a), l.push(d)) : "A" == a.parentNode.tagName ?
        ("I" == a.parentNode.parentNode.tagName ? h.push(a.parentNode.parentNode) : h.push(a.parentNode), l.push(d)) : "I" == a.parentNode.tagName ? (a.parentNode.parentNode.tagName = "A", h.push(a.parentNode.parentNode), l.push(d)) : "FONT" == a.parentNode.tagName ? (a.parentNode.parentNode.tagName = "A", h.push(a.parentNode.parentNode), l.push(d)) : ("string" === typeof a.nodeValue || a.nodeValue instanceof String || 3 === a.nodeType) && 0 < a.nodeValue.toString().trim().length && (h.push('<span class="drMonospace">' + a.nodeValue.trim() + "</span>"),
          l.push(d))
    }

    function f(a) {
      "TD" == a.nodeName && p++;
      "[object Comment]" == a.toString() && (n = a.nodeValue.replace(/ /g, ""));
      "TOPLEFTSTARTSHERE" == n ? e = "TOP" : "MAINHEADLINE" == n && 0 == p ? (e = "MAIN", null == v && (v = a.parentNode.innerHTML)) : 1 == p ? e = "LINKSFIRSTCOLUMN" == n ? "C1R2" : "C1R1" : 3 == p ? e = "LINKSSECONDCOLUMN" == n ? "C2R2" : "C2R1" : 5 == p && ("LINKSANDSEARCHES3RDCOLUMN" == n ? e = "C3R2" : "C3R2" != e && (e = "C3R1"));
      a && null == a.firstChild && 0 > "DIV STYLE SCRIPT NOSCRIPT TITLE LINK META IFRAME TEXTAREA INPUT".split(" ").indexOf(a.tagName) && 0 > ["SCRIPT",
        "NOSCRIPT", "STYLE"
      ].indexOf(a.parentNode.tagName) && "[object Comment]" != a.toString() && 0 <= "TOP MAIN C1R1 C2R1 C3R1 C3R2".split(" ").indexOf(e) && ("C3R2" == e ? a.nodeValue && (0 <= a.nodeValue.indexOf("EMAIL") || 0 <= a.nodeValue.indexOf("BE SEEN") || 0 <= a.nodeValue.indexOf("PRIVACY POLICY") || 0 <= a.nodeValue.indexOf("CALIFORNIA NOTICE") || 0 <= a.nodeValue.indexOf("DO NOT SELL MY INFO") || 0 <= a.nodeValue.indexOf("WE DO NOT SELL YOUR INFO")) && c(a, e) : "TOP" == e ? 0 == y && (c(a.parentNode, e), y = !0) : "MAIN" == e ? 0 == z && (c(v, e), z = !0) : "C1R1" ==
        e ? 0 == A && (c(a.parentNode, e), A = !0) : "C2R1" == e ? 0 == B && (c(a.parentNode, e), B = !0) : "C3R1" == e ? 0 == C && (c(a.parentNode, e), C = !0) : c(a, e));
      for (a = a.firstChild; a;) f(a), a = a.nextSibling
    }
    adjust_ca_notices();
    var m = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      g = document.createElement("meta");
    g.name = "viewport";
    g.content = "width=device-width, initial-scale=1.0";
    document.getElementsByTagName("head")[0].appendChild(g);
    var t = document.createElement("a");
    t.href = "https://www.drudgereport.com/?responsive=off";
    t.innerHTML =
      "Web Version";
    g = document.createElement("style");
    g.type = "text/css";
    g.innerHTML = '@media all and (max-width:1000px){#drWebVersionTop a {font-size:xx-small;color:black;} #drMainSection img{margin-top:10%;margin:0 auto;margin-bottom:30px !important; }#drMainSection font a i,#drMainSection font a b,#drMainSection font a font{text-decoration:underline;}#drTopSection a{margin-top:7px;}#drTopSection br+br+br, #drTopSection br+br{display:none;}#app_mainheadline,#app_topstories,body>tt,center a,table{display:none} body{max-width:1000px;overscroll-behavior:none;overflow-x:hidden!important;font-family:monospace;font-size:1.52em;font-weight:700}img{max-width:98%;height:auto;margin-bottom:5px}font{font-size:24pt;font-family:ARIAL,VERDANA,HELVETICA!important;font-style:normal}.drMonospace,.drMonospace font,a,a font{font-family:monospace!important;font-size:1em;font-weight:700;width:100%;display:inline-block}a,a font{text-decoration:underline}.drMainSection *,body>font a{text-align:center;font-size:34px;font-family:ARIAL,VERDANA,HELVETICA!important}font[face="ARIAL,VERDANA, HELVETICA"] a{font-size:26pt;display:inline-block;font-family:ARIAL,VERDANA,HELVETICA!important;text-align:center;width:100%;}font[face="ARIAL,VERDANA, HELVETICA"] img{max-width:75%;width:100%;margin:auto;height:auto;display:block;}hr{margin:6px 0}#drLogo{margin-top:-35px;margin-bottom:15px;text-align:center;}body>font img{max-width:80%;margin:auto;display:block;}br+br+a{margin-top:-8px}}';
    document.body.appendChild(g);
    g = {
      top: "div-gpt-ad-1564685541535-0",
      first: "div-gpt-ad-1564685732534-0",
      second: "div-gpt-ad-1564685863820-0",
      third: "div-gpt-ad-1567201323104-0"
    };
    var u = {
      top: "div-gpt-ad-1564810986146-0",
      first: "div-gpt-ad-1564811182389-0",
      second: "div-gpt-ad-1564811240422-0",
      third: "div-gpt-ad-1564811295535-0"
    };
    for (w in g) {
      var D = document.getElementById(g[w]);
      D.parentNode.removeChild(D)
    }
    var h = [],
      l = [],
      n = "",
      e = "",
      p = 0,
      z = !1,
      y = !1,
      A = !1,
      B = !1,
      C = !1,
      v = null,
      w = document.querySelector("*");
    f(w);
    var x = 0,
      E = l.reverse(),
      q = !1;
    h.reverse().forEach(function(a) {
      var d = null;
      e = E[x];
      var k = E[x + 1];
      "TOP" == e ? (d = a.outerHTML.indexOf("<!"), d = '<div id="drTopSection" class="drMonospace" style="padding:0;margin:0;display:block;">' + a.outerHTML.substring(0, d).replace("<BR>", "<BR />") + "</div>") : "MAIN" == e ? d = '<div id="drMainSection" class="drMainSection" style="padding:0;margin:0;margin-top:30px !important;display:block;"><div style="width:100%;text-align:center;">' + (a + '</div><br /><br /><div id="drLogo"><a href="https://www.gladrapchannel.com"><img src="Logo.jpg" alt="GladrapChannel Logo" border="0" WIDTH="150" HEIGHT="85" ></a></div></div>') :
        0 <= ["C1R1", "C2R1", "C3R1"].indexOf(e) ? (d = a.outerHTML.indexOf("<!"), d = '<div class="drMonospace">' + a.outerHTML.substring(0, d).replace("<BR>", "<BR />") + "</div>") : a.tagName ? "BR" == a.tagName ? (d = "<BR />", q = !1) : "HR" == a.tagName && 0 == q ? (d = "<HR />", q = !0) : "IMG" == a.tagName ? (d = a.outerHTML, q = !1) : "A" == a.tagName && (d = a.outerHTML, q = !1, "C3R2" == e && (0 <= a.innerHTML.indexOf("WEB") ? d += "<HR>" : 0 <= a.innerHTML.indexOf("BE SEEN") ? d += "<BR /><BR />" : 0 <= a.innerHTML.indexOf("PRIVACY POLICY") ? d += "<HR><BR /><BR />" : 0 <= a.innerHTML.indexOf("EMAIL:") ?
          d += "<HR>" : 0 <= a.innerHTML.indexOf("RECENT") && (d += "<HR>"))) : d = a;
      null != d && (d = d.replace("<br>", "<br />").replace("<BR>", "<BR />"), document.body.insertAdjacentHTML("afterbegin", d));
      "C2R1" == e && "C1R1" == k && b(u, "first");
      "C3R1" == e && "C2R1" == k && b(u, "second");
      "C3R2" == e && "C3R1" == k && b(u, "third", "", '<HR /><span class="href-style">' + t.outerHTML + "</span><HR />");
      "TOP" != e || k || b(u, "top", '<span id="drWebVersionTop">' + t.outerHTML + "</span>", "");
      x++
    });
    window.onclick = function(a) {
      "A" === a.target.tagName && sessionStorage.setItem("dr-firstLoad",
        m ? document.body.scrollTop : document.body.scrollTop - 300)
    };
    null === sessionStorage.getItem("dr-firstLoad") ? document.body.scrollTop = 0 : document.body.scrollTop = sessionStorage.getItem("dr-firstLoad");
    window.performance && 1 == performance.navigation.type && (sessionStorage.setItem("dr-firstLoad", 0), document.body.scrollTop = 0);
    googletag.cmd.push(function() {
      headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-Mobile-320x100_1", [
        [320, 50],
        [320, 100]
      ], "div-gpt-ad-1564810986146-0").addService(googletag.pubads()));
      headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-Mobile-300x250_1", [300, 250], "div-gpt-ad-1564811182389-0").addService(googletag.pubads()));
      headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-Mobile-300x250_2", [300, 250], "div-gpt-ad-1564811240422-0").addService(googletag.pubads()));
      headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-Mobile-300x250_3", [300, 250], "div-gpt-ad-1564811295535-0").addService(googletag.pubads()));
      googletag.pubads().enableSingleRequest();
      googletag.pubads().collapseEmptyDivs();
      googletag.pubads().enableAsyncRendering();
      googletag.pubads().disableInitialLoad();
      "visible" == document.visibilityState && googletag.pubads().setTargeting("vis", ["visible"]);
      googletag.enableServices();
      googletag.pubads().refresh(nonHeaderBiddingSlots);
      pbjs.rp.requestBids({
        callback: sendAdServerRequest,
        gptSlotObjects: headerBiddingSlots,
        data: {}
      })
    });
    document.querySelector("html").style.visibility = "visible"
  };
  document.querySelector("html").style.visibility = "hidden";
  document.addEventListener("readystatechange",
    function(b) {
      "interactive" === b.target.readyState && documentApp()
    })
} else googletag.cmd.push(function() {
  headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-center_1", [
    [970, 90],
    [970, 250],
    [300, 250],
    [728, 90]
  ], "div-gpt-ad-1564685541535-0").addService(googletag.pubads()));
  headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-left_1", [
    [300, 250]
  ], "div-gpt-ad-1564685732534-0").addService(googletag.pubads()));
  headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-right_1", [
      [300, 600],
      [300, 250]
    ],
    "div-gpt-ad-1564685863820-0").addService(googletag.pubads()));
  headerBiddingSlots.push(googletag.defineSlot("/218243714/DR-right_300x250_1", [300, 250], "div-gpt-ad-1567201323104-0").addService(googletag.pubads()));
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().enableAsyncRendering();
  googletag.pubads().disableInitialLoad();
  "visible" == document.visibilityState && googletag.pubads().setTargeting("vis", ["visible"]);
  googletag.enableServices();
  googletag.pubads().refresh(nonHeaderBiddingSlots);
  pbjs.rp.requestBids({
    callback: sendAdServerRequest,
    gptSlotObjects: headerBiddingSlots,
    data: {}
  })
}), document.addEventListener("readystatechange", function(b) {
  "interactive" === b.target.readyState && adjust_ca_notices()
});
var btScript = document.createElement("script");
btScript.src = "//voranda-com.videoplayerhub.com/galleryplayer.js";
document.head.appendChild(btScript);

function isMobileClient() {
  return !0 === is_mobile_client ? !0 : /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ? is_mobile_client = !0 : !1
}

function dr_check_consent() {
  "y" == dr_getCookie("in_ca") && "y" != dr_getCookie("consent") && dr_show_consent_div()
}

function dr_show_consent_div() {
  var b = document.getElementById("div-204"),
    c = document.createElement("div");
  c.id = "dr_consent";
  c.style.display = "block";
  c.style.background = "black";
  c.style.color = "white";
  c.style.fontSize = "12px";
  c.style.position = "fixed";
  c.style.width = "100%";
  c.style.height = "max-content";
  c.style.padding = "3px";
  c.style.margin = "0px 0px 0px -10px";
  c.style.bottom = "0px";
  c.style.textAlign = "center";
  c.innerHTML = '<button style="font-size: 1em; float: right; margin: 0px 3px 0px 0px; border-radius: 3px; padding: 0px 3px 0px 3px; background-color: #efefef; vertical-align: middle;" onclick="dr_consent_ok();">X</button><div style="display: inline-block; padding: 5px 10px 5px 10px;">By using this site, you agree to our <a style="color: white; font-size: 1em;" href="/privacy/">privacy policy.</a></div> <div style="display: inline-block; text-align: left;"><button onclick="dr_consent_ok();" style="font-size: 0.7em; display: inline-block; border-radius: 4px; background-color: #efefef; border: none; color: black; text-align: center; padding: 3px; width: 3em; cursor: pointer; margin: 5px;">OK</button></div>';
  b.parentNode.insertBefore(c, b)
}

function dr_guess_location() {
  if (0 != dr_testCookie("cookie_test")) {
    dr_setCookie("in_ca", "unknown");
    var b = new XMLHttpRequest;
    b.onreadystatechange = function() {
      4 == this.readyState && 200 == this.status && ("y" == this.responseText ? (dr_setCookie("in_ca", "y", 365), dr_consentManagement("y")) : "n" == this.responseText ? (dr_setCookie("in_ca", "n", 365), dr_consentManagement("n")) : dr_consentManagement())
    };
    b.open("GET", "https://api.drudgereport.com/is_in_ca", !0);
    b.send()
  }
}

function dr_consent_ok() {
  dr_setCookie("consent", "y", 365);
  document.getElementById("dr_consent").style.display = "none"
}

function dr_testCookie(b) {
  dr_setCookie(b, "123abc", 365);
  if ("123abc" == dr_getCookie(b)) return dr_deleteCookie(b, "/", ".drudgereport.com"), !0;
  dr_deleteCookie(b, "/", ".drudgereport.com");
  return !1
}

function dr_getCookie(b) {
  var c, f = document.cookie.split(";");
  for (c = 0; c < f.length; c++) {
    var m = f[c].substr(0, f[c].indexOf("="));
    var g = f[c].substr(f[c].indexOf("=") + 1);
    m = m.replace(/^\s+|\s+$/g, "");
    if (m == b) return unescape(g)
  }
}

function dr_setCookie(b, c, f) {
  var m = new Date;
  m.setDate(m.getDate() + f);
  dr_deleteCookie(b, "", "");
  c = escape(c) + (null == f ? "" : "; expires=" + m.toUTCString()) + "; path=/; domain=.drudgereport.com";
  document.cookie = b + "=" + c
}

function dr_deleteCookie(b, c, f) {
  dr_getCookie(b) && (document.cookie = b + "=" + (c ? ";path=" + c : "") + (f ? ";domain=" + f : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
}

function dr_consentManagement(b) {
  null == b && (b = dr_getCookie("in_ca"));
  "y" == b ? (b = dr_getCookie("optout"), "1" == b || 1 == b ? pbjs.setConfig({
    consentManagement: {
      usp: {
        cmpApi: "static",
        consentData: {
          getUSPData: {
            uspString: "1YYY"
          }
        }
      }
    }
  }) : pbjs.setConfig({
    consentManagement: {
      usp: {
        cmpApi: "static",
        consentData: {
          getUSPData: {
            uspString: "1YNY"
          }
        }
      }
    }
  })) : pbjs.setConfig({
    consentManagement: {
      usp: {
        cmpApi: "static",
        consentData: {
          getUSPData: {
            uspString: "1---"
          }
        }
      }
    }
  })
}

function removeElement(b) {
  (b = document.getElementById(b)) && b.parentNode.removeChild(b)
}

function adjust_ca_notices() {
  "y" == in_ca ? "1" == dr_getCookie("optout") && (ca_info = document.getElementById("ca_info")) && (ca_info.innerHTML = "WE DO NOT SELL YOUR INFO") : "n" == in_ca && (removeElement("ca_notice"), removeElement("ca_info"))
};
