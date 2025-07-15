const form = document.getElementById("formulario");
const btn = document.getElementById("btnWhatsapp");

form.addEventListener("input", () => {
  const aCargo = document.getElementById("aCargo").value.trim();
  const seguimiento = document.getElementById("seguimiento").value.trim();
  const ubicacion = document.getElementById("ubicacion").value.trim();
  const comuna = document.getElementById("comuna").value.trim();
  const sentido = document.getElementById("sentido").value.trim();
  const horaOficial = document.getElementById("horaOficial").value.trim();
  const horaMonitor = document.getElementById("horaMonitor").value.trim();

  // Validación simple
  if (!aCargo || !seguimiento || !ubicacion || !comuna || !sentido || !horaOficial || !horaMonitor) {
    btn.style.display = "none";
    return;
  }

  // Validación de formato HH:MM:SS
  const horaRegex = /^\d{2}:\d{2}:\d{2}$/;
  if (!horaRegex.test(horaOficial) || !horaRegex.test(horaMonitor)) {
    btn.style.display = "none";
    return;
  }

  const texto = 
`LEVANTAMIENTO DE CÁMARAS
A CARGO: ${aCargo}
SEGUIMIENTO DE: ${seguimiento}
UBICACIÓN DE LA CÁMARA: ${ubicacion}
COMUNA: ${comuna}
SENTIDO: ${sentido}
HORA OFICIAL: ${horaOficial}
HORA MONITOR: ${horaMonitor}`;

  const url = "https://wa.me/?text=" + encodeURIComponent(texto);
  btn.href = url;
  btn.style.display = "inline-block";
});
