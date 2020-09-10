'use strict';

let textBox = document.getElementById('mc_id');

chrome.storage.sync.get("mc_id", function(data) {
  textBox.value=data.mc_id||"";
});
textBox.oninput=function(e){
  chrome.storage.sync.set({mc_id: e.target.value}, function() {});
};
