document.addEventListener('DOMContentLoaded', function () {
    // Fondo “panal” aleatorio
    const numImages = 20;
    for (let i = 0; i < numImages; i++) {
        const img = document.createElement('img');
        img.src = 'images/panal.png';
        img.style.position = 'absolute';
        img.style.width = '50px';
        img.style.height = 'auto';
        img.style.top = Math.random() * 100 + 'vh';
        img.style.left = Math.random() * 100 + 'vw';
        img.style.zIndex = '-1';
        img.style.pointerEvents = 'none';
        document.body.appendChild(img);
    }

    // Manejo de modal
    const comprarBtns = document.querySelectorAll('.comprar-btn');
    const cantidadModal = new bootstrap.Modal(document.getElementById('cantidadModal'));
    const confirmacionModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
    let productoActual = '';

    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            productoActual = this.getAttribute('data-producto');
            cantidadModal.show();
        });
    });

    const agregarCarritoBtn = document.getElementById('agregarCarritoBtn');
    const cancelarBtn = document.getElementById('cancelarBtn');
    const salirBtn = document.getElementById('salirBtn');

    agregarCarritoBtn.addEventListener('click', function () {
        // Aquí podrías guardar en un carrito o simplemente mostrar el mensaje
        cantidadModal.hide();
        confirmacionModal.show();
    });

    cancelarBtn.addEventListener('click', function () {
        cantidadModal.hide();
    });

    salirBtn.addEventListener('click', function () {
        confirmacionModal.hide();
        // Opcional: si quieres recargar la página al salir
        window.location.href = 'index.html';
    });
});