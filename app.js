document.getElementById("btnEnviar").addEventListener("click", function () {
  const aCargo = document.getElementById("aCargo").value.trim();
  const seguimiento = document.getElementById("seguimiento").value.trim();
  const ubicacion = document.getElementById("ubicacion").value.trim();
  const comuna = document.getElementById("comuna").value.trim();
  const sentido = document.getElementById("sentido").value.trim();
  const horaOficial = document.getElementById("horaOficial").value.trim();
  const horaMonitor = document.getElementById("horaMonitor").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (!aCargo || !seguimiento || !ubicacion || !comuna || !sentido || !horaOficial || !horaMonitor) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  let mensaje = `LEVANTAMIENTO DE CÁMARAS\n`;
  mensaje += `A CARGO: ${aCargo}\n`;
  mensaje += `SEGUIMIENTO DE: ${seguimiento}\n`;
  mensaje += `UBICACIÓN DE LA CÁMARA: ${ubicacion}\n`;
  mensaje += `COMUNA: ${comuna}\n`;
  mensaje += `SENTIDO: ${sentido}\n`;
  mensaje += `HORA OFICIAL: ${horaOficial}\n`;
  mensaje += `HORA MONITOR: ${horaMonitor}`;
  if (comentario) {
    mensaje += `\nCOMENTARIO: ${comentario}`;
  }

  const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});
