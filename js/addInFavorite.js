
function addFav() {
    var isWebkit, isMac;
    var UA = navigator.userAgent.toLowerCase();
    var title = document.title;
    var url = document.location;
         
    // Webkit (Chrome, Opera), Mac
    if ( (isMac = (UA.indexOf('mac') != -1)) || (isWebkit = (UA.indexOf('webkit') != -1)) ){
        document.getElementById('fav').innerHTML = 'Нажмите "' + (isMac ? 'Command/Cmd' : 'Ctrl') + ' + D" для добавления страницы в закладки';
        return false;
    }
 
    // IE
    if (window.external) {
    window.external.AddFavorite(url, title);
    return false;
    }
}      