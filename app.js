const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const ipInput = document.getElementById("ipInput").value.trim();
  const url = ipInput
    ? `https://ipinfo.io/${ipInput}?token=67e278cd69b737`
    : `https://ipinfo.io?token=67e278cd69b737`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("ip").innerHTML = data.ip || "N/A";
      document.getElementById("city").innerHTML = data.city || "N/A";
      document.getElementById("region").innerHTML = data.region || "N/A";
      document.getElementById("country").innerHTML = data.country || "N/A";
      document.getElementById("loc").innerHTML = data.loc || "N/A";
      document.getElementById("org").innerHTML = data.org || "N/A";
      document.getElementById("postal").innerHTML = data.postal || "N/A";
      document.getElementById("timezone").innerHTML = data.timezone || "N/A";
      document.getElementById("result").style.display = "block";
    })
    .catch((error) => {
      console.error("Error getting data:", error.message);
      alert(
        "There was an error when making the request. Please check the IP and try again."
      );
    });
});
