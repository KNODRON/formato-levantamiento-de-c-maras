const campos = [
  document.getElementById("campo0"),
  document.getElementById("campo1"),
  document.getElementById("campo2"),
  document.getElementById("campo3"),
  document.getElementById("campo4"),
  document.getElementById("campo5")
];

const whatsappBtn = document.getElementById("whatsappBtn");

function validarHora(valor) {
  return /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(valor);
}

function validarDuracion(valor) {
  return /^\d{1,2}'\s\d{1,2}("|”)?$/.test(valor);
}

function verificarCampos() {
  const [caso, nro, llamada, hora, duracion, relato] = campos.map(c => c.value.trim());

  if (caso && nro && llamada && validarHora(hora) && validarDuracion(duracion) && relato) {
    const texto = `📞 *REPORTE DE LLAMADA*\n\n` +
                  `*CASO:* ${caso}\n` +
                  `*NRO.:* ${nro}\n` +
                  `*LLAMADA:* ${llamada}\n` +
                  `*HORA:* ${hora} hrs\n` +
                  `*DURACIÓN:* ${duracion}\n` +
                  `*RELATO:* ${relato}`;

    const mensaje = encodeURIComponent(texto);
    const numeroFijo = "56933700267";
    whatsappBtn.href = `https://wa.me/${numeroFijo}?text=${mensaje}`;
    whatsappBtn.style.display = "block";
  } else {
    whatsappBtn.style.display = "none";
  }
}

// Detectar cambios en todos los campos
campos.forEach(campo => campo.addEventListener("input", verificarCampos));
