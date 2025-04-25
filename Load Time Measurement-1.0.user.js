// ==UserScript==
// @name         Load Time Measurement
// @namespace    databutiken
// @version      1.0
// @description  Mäter laddningstider
// @match        http://localhost/Examensarbete/jQuery%20Website/*
// @grant        none
// ==/UserScript==

console.log("Skriptet laddas");

(function () {
  'use strict';

  const TOTAL_MEASUREMENTS = 200;
  const KEY_COUNTER = 'loadTest_counter';
  const KEY_DATA = 'loadTest_data';

  // Säkerställ att funktionen körs även om sidan redan är färdigladdad
  if (document.readyState === 'complete') {
    runTest();
  } else {
    window.addEventListener('load', runTest);
  }

  function runTest() {
    const endTime = performance.now(); // tid efter navigationStart
    const loadTime = Math.round(endTime);

    let count = parseInt(localStorage.getItem(KEY_COUNTER)) || 0;
    let data = localStorage.getItem(KEY_DATA) || "Mätning,Laddningstid (ms)\n";

    count++;
    data += `${count},${loadTime}\n`;

    localStorage.setItem(KEY_COUNTER, count);
    localStorage.setItem(KEY_DATA, data);

    console.log(`Mätning #${count} — ${loadTime}ms`);

    if (count >= TOTAL_MEASUREMENTS) {
      downloadCSV(data);
      localStorage.removeItem(KEY_COUNTER);
      localStorage.removeItem(KEY_DATA);
    } else {
      setTimeout(() => {
        location.reload(); // nästa mätning
      }, 600);
    }
  }

  function downloadCSV(content) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "laddtider.csv";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
})();
