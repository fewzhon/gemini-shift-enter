// popup.js
document.addEventListener('DOMContentLoaded', function() {
  const toggleBlock = document.getElementById("toggleBlock");
  
  // Load current setting
  chrome.storage.sync.get(["geminiBlockEnabled"], function (result) {
    if (chrome.runtime.lastError) {
      console.error("Error loading settings:", chrome.runtime.lastError);
      return;
    }
    toggleBlock.checked = result.geminiBlockEnabled ?? true;
  });
  
  // Save setting when changed
  toggleBlock.addEventListener("change", function (e) {
    chrome.storage.sync.set({ geminiBlockEnabled: e.target.checked }, function() {
      if (chrome.runtime.lastError) {
        console.error("Error saving settings:", chrome.runtime.lastError);
      } else {
        console.log("Settings saved:", e.target.checked);
      }
    });
  });
});