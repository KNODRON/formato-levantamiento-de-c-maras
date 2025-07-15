document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const aCargo = document.getElementById("aCargo").value;
  const seguimiento = document.getElementById("seguimiento").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const comuna = document.getElementById("comuna").value;
  const sentido = document.getElementById("sentido").value;
  const horaOficial = document.getElementById("horaOficial").value;
  const horaMonitor = document.getElementById("horaMonitor").value;

  const texto = `LEVANTAMIENTO DE CÁMARAS\nA cargo: ${aCargo}\nSeguimiento de (vehículo o persona): ${seguimiento}\nUbicación de la cámara: ${ubicacion}\nComuna: ${comuna}\nSentido (ejm al norte): ${sentido}\nHora oficial: ${horaOficial}\nHora Monitor: ${horaMonitor}`;

  document.getElementById("resultado").value = texto;

  const url = "https://wa.me/?text=" + encodeURIComponent(texto);
  document.getElementById("btnWhatsapp").href = url;
});

