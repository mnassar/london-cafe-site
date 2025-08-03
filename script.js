// Minimal JS for future use (e.g., interactivity)
console.log("Welcome to London Café website!");


fetch("https://ipinfo.io/json?token=30df7b43a0c172")
  .then((response) => response.json())
  .then((data) => {
    console.log("IP Info:", data);

    // Display banner (optional)
    const locationBanner = document.createElement('div');
    locationBanner.style.position = 'fixed';
    locationBanner.style.bottom = '0';
    locationBanner.style.width = '100%';
    locationBanner.style.backgroundColor = '#f2e7d5';
    locationBanner.style.padding = '10px';
    locationBanner.style.textAlign = 'center';
    locationBanner.style.fontSize = '0.9rem';
    locationBanner.textContent = `Welcome from ${data.city}, ${data.country}!`;
    document.body.appendChild(locationBanner);

    // Send to Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbw5wlg5_jw0jZ_PWWUUpwi-MZwTmYa4T71cKWSEI-cBWZldqL77EXRUnFbZJbpNPHLS/exec?ua=' + encodeURIComponent(navigator.userAgent), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
  })
  .catch((err) => console.error("Failed to get visitor info:", err));
