document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const aCargo = document.getElementById("aCargo").value.trim();
  const seguimiento = document.getElementById("seguimiento").value.trim();
  const ubicacion = document.getElementById("ubicacion").value.trim();
  const comuna = document.getElementById("comuna").value.trim();
  const sentido = document.getElementById("sentido").value.trim();
  const horaOficial = document.getElementById("horaOficial").value;
  const horaMonitor = document.getElementById("horaMonitor").value;

  // Validación simple
  if (!aCargo || !seguimiento || !ubicacion || !comuna || !sentido || !horaOficial || !horaMonitor) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validación ortográfica básica
  if (comuna.toLowerCase().includes("komuna")) {
    alert("Revisa la palabra 'Comuna': parece tener un error ortográfico.");
  }

  const texto = `LEVANTAMIENTO DE CÁMARAS\nA cargo: ${aCargo}\nSeguimiento de (vehículo o persona): ${seguimiento}\nUbicación de la cámara: ${ubicacion}\nComuna: ${comuna}\nSentido (ejm al norte): ${sentido}\nHora oficial: ${horaOficial}\nHora Monitor: ${horaMonitor}`;

  document.getElementById("resultado").value = texto;

  const url = "https://wa.me/?text=" + encodeURIComponent(texto);
  const btn = document.getElementById("btnWhatsapp");
  btn.href = url;
  btn.style.display = "inline-block";
});
