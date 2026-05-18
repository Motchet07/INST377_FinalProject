async function checkEmail() {
    const email = document.getElementById("emailInput").value;
  
    // FETCH CALL #1 (external API via backend)
    const res = await fetch(`http://localhost:3000/api/verify-email?email=${email}`);
    const data = await res.json();
  
    document.getElementById("result").innerHTML = `
      <p><b>Result:</b> ${data.result}</p>
      <p><b>Disposable:</b> ${data.disposable}</p>
      <p><b>Role:</b> ${data.role}</p>
    `;
  
    // FETCH CALL #2 (save to DB)
    await fetch("http://localhost:3000/api/history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        result: data.result
      })
    });
  
    loadHistory();
  }
  
  // FETCH CALL #3 (DB read)
  async function loadHistory() {
    const res = await fetch("http://localhost:3000/api/history");
    const data = await res.json();
  
    document.getElementById("history").innerHTML = data
      .slice(0, 5)
      .map(item => `<p>${item.email} - ${item.result}</p>`)
      .join("");
  }
  
  loadHistory();
