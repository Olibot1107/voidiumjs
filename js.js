(function autoChooseCompactView() {
  const selector = 'div.flex.items-center.gap-2.flex-1.min-w-0';

  function tryClick() {
    const el = document.querySelector(selector);
    if (!el) {
      console.log("Compact View not yet found — retrying…");
      return false;
    }

    const label = el.innerText.trim().toLowerCase();
    if (label.includes("compact view")) {
      console.log("Clicking Compact View…");
      el.click();
      return true;
    }

    console.warn("Found element but label did not match:", label);
    return false;
  }

  // Try immediately + continue retrying if not found
  if (!tryClick()) {
    const interval = setInterval(() => {
      if (tryClick()) {
        clearInterval(interval);
      }
    }, 500);
  }
})();
