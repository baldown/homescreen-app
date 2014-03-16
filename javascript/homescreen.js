function app_setup() {
    appify_links();
}

function appify_links() {
    var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.href.match(/^http/)) {
            // Web link... let's redirect it through javascript
            if (!link.onclick) {
                link.href = "javascript:app_refresh('" + link.href + "');";
            }
        }
    }
}

function app_refresh(url) {
    spinner_overlay();
    window.location.href = url;
    return false;
}

function iframe_reload() {
    jQuery('iframe').element.scrollIntoView(true);
}

function spinner_overlay() {
    var overlay = document.createElement("div");
    overlay.setAttribute("id","transition_overlay");
    overlay.setAttribute("class", "transition_overlay");
    document.body.appendChild(overlay);

    var close = document.createElement("i");
    close.setAttribute('id','spinner');
    close.setAttribute('class','fa fa-spinner fa-spin fa-3x');
    close.setAttribute('style','color: #fff; margin-top: 200px;');
    overlay.appendChild(close);
    overlay.scrollIntoView(true);

    return overlay;
}

if (window.navigator.standalone) {
    /* We're homescreened */
    window.onload = function() { app_setup(); };
}

