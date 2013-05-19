function hideDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function showDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

function showAnonymousForm() {
    showDocumentElement('comments-form');

    captcha_timer = setInterval('delayShowCaptcha()', 1000);

}

var captcha_timer;
function delayShowCaptcha() {
    clearInterval(captcha_timer);
    var div = document.getElementById('comments-open-captcha');
    if (div) {
        div.innerHTML = '<div class="label"><label for="captcha_code">Captcha:</label></div><div class="field"><input type="hidden" name="token" value="0qPxuwUb609Ck8TbwaBdZnK0koaWREq4okOYSUpH" /><img src="/mt/comments/captcha/21/0qPxuwUb609Ck8TbwaBdZnK0koaWREq4okOYSUpH" width="150" height="35" /><br /><input name="captcha_code" id="captcha_code" value="" autocomplete="off" /><p>Type the characters you see in the picture above.</p></div>';
    }
}


var commenter_name;
var commenter_blog_ids;
var is_preview;
var mtcmtmail;
var mtcmtauth;
var mtcmthome;

function individualArchivesOnLoad(commenter_name) {

    hideDocumentElement('comments-open');


    hideDocumentElement('trackbacks-info');



    if (document.comments_form) {
        if (!commenter_name && (document.comments_form.email != undefined) &&
            (mtcmtmail = getCookie("mtcmtmail")))
            document.comments_form.email.value = mtcmtmail;
        if (!commenter_name && (document.comments_form.author != undefined) &&
            (mtcmtauth = getCookie("mtcmtauth")))
            document.comments_form.author.value = mtcmtauth;
        if (document.comments_form.url != undefined &&
            (mtcmthome = getCookie("mtcmthome")))
            document.comments_form.url.value = mtcmthome;
        if (document.comments_form["bakecookie"]) {
            if (mtcmtauth || mtcmthome) {
                document.comments_form.bakecookie.checked = true;
            } else {
                document.comments_form.bakecookie.checked = false;
            }
        }
    }
}

function writeCommenterGreeting(commenter_name, entry_id, blog_id, commenter_id, commenter_url) {

}




// Copyright (c) 1996-1997 Athenia Associates.
// http://www.webreference.com/js/
// License is granted if and only if this entire
// copyright notice is included. By Tomer Shiran.

    function setCookie (name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) + (expires ? "; expires=" + expires.toGMTString() : "") +
            (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "secure" : "");
        document.cookie = curCookie;
    }

    function getCookie (name) {
        var prefix = name + '=';
        var c = document.cookie;
        var nullstring = '';
        var cookieStartIndex = c.indexOf(prefix);
        if (cookieStartIndex == -1)
            return nullstring;
        var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
        if (cookieEndIndex == -1)
            cookieEndIndex = c.length;
        return unescape(c.substring(cookieStartIndex + prefix.length, cookieEndIndex));
    }

    function deleteCookie (name, path, domain) {
        if (getCookie(name))
            document.cookie = name + "=" + ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }

    function fixDate (date) {
        var base = new Date(0);
        var skew = base.getTime();
        if (skew > 0)
            date.setTime(date.getTime() - skew);
    }

    function rememberMe (f) {
        var now = new Date();
        fixDate(now);
        now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
        now = now.toGMTString();
        if (f.author != undefined)
           setCookie('mtcmtauth', f.author.value, now, '/', '', '');
        if (f.email != undefined)
           setCookie('mtcmtmail', f.email.value, now, '/', '', '');
        if (f.url != undefined)
           setCookie('mtcmthome', f.url.value, now, '/', '', '');
    }

    function forgetMe (f) {
        deleteCookie('mtcmtmail', '/', '');
        deleteCookie('mtcmthome', '/', '');
        deleteCookie('mtcmtauth', '/', '');
        f.email.value = '';
        f.author.value = '';
        f.url.value = '';
    }

