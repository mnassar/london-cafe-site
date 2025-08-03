// Minimal JS for future use (e.g., interactivity)
console.log("Welcome to London Café website!");



  fetch("https://ipinfo.io/json?token=30df7b43a0c172")
    .then((response) => response.json())
    .then((data) => {
      const payload = {
        timestamp: new Date().toISOString(),
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        location: data.loc,
        org: data.org,
        userAgent: navigator.userAgent
      };

      fetch("https://london-cafe-analytics-default-rtdb.firebaseio.com/visits.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    })
    .catch(console.error);

