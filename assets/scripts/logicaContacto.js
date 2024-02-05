function redirigirContactoDetalles(contacto) {
    window.location.href = 'detallesContacto.html?contacto=' + encodeURIComponent(contacto);
}