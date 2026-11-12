const datosTe = {
    matcha: {
        titulo: "Té Matcha",
        descripcion: "Té verde japonés molido en fino polvo. Destaca por su color verde vibrante, sabor vegetal intenso y alta concentración de antioxidantes.",
        temp: "80 °C",
        tiempo: "Batir 1 min",
        sabor: "Umami / Herbal"
    },
    earlgrey: {
        titulo: "Earl Grey",
        descripcion: "Mezcla tradicional de té negro aromatizado con aceite de corteza de bergamota. Una opción clásica, cítrica y revitalizante.",
        temp: "95 °C",
        tiempo: "3 - 5 min",
        sabor: "Cítrico / Tanino"
    },
    manzanilla: {
        titulo: "Manzanilla con Menta",
        descripcion: "Infusión herbal libre de cafeína. Combina la calidez relajante de las flores de manzanilla con el toque fresco de la menta.",
        temp: "100 °C",
        tiempo: "5 - 7 min",
        sabor: "Floral / Fresco"
    }
};

function mostrarTe(clave, elemento) {
    const te = datosTe[clave];
    document.getElementById('titulo').innerText = te.titulo;
    document.getElementById('descripcion').innerText = te.descripcion;
    document.getElementById('temp').innerText = te.temp;
    document.getElementById('tiempo').innerText = te.tiempo;
    document.getElementById('sabor').innerText = te.sabor;

    const botones = document.querySelectorAll('.btn-tea');
    botones.forEach(b => b.classList.remove('activo'));
    elemento.classList.add('activo');
}