async function loadStats() {
    // FETCH CALL #4 (stats endpoint)
    const res = await fetch("http://localhost:3000/api/stats");
    const data = await res.json();
  
    new Chart(document.getElementById("chart"), {
      type: "pie",
      data: {
        labels: ["Deliverable", "Risky", "Undeliverable"],
        datasets: [{
          data: [
            data.deliverable,
            data.risky,
            data.undeliverable
          ]
        }]
      }
    });
  }
  
  loadStats();
