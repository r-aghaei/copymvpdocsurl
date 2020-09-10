chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get("mc_id", function(data) {
    var mc_id = data.mc_id||"";
    var url = updateUrlParameter(tab.url, "WT.mc_id", mc_id);
    copyTextToClipboard(url);
  });
});
//https://stackoverflow.com/a/18455088
function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}
//https://gist.github.com/niyazpk/f8ac616f181f6042d1e0
function updateUrlParameter(uri, key, value) {
  var i = uri.indexOf('#');
  var hash = i === -1 ? ''  : uri.substr(i);
  uri = i === -1 ? uri : uri.substr(0, i);
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
      uri = uri.replace(re, '$1' + key + "=" + value + '$2');
  } else {
      uri = uri + separator + key + "=" + value;
  }
  return uri + hash;
}