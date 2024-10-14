document.addEventListener("DOMContentLoaded", function() {
    const propiedades_venta = [
        {
            nombre: 'Apartamento de lujo en zona exclusiva',
            src: '/assets/img/exclusiva.png',
            descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
            ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
            habitaciones: 4,
            banos: 4,
            costo: 5000,
            smoke: false,
            pets: false
        },
        {
            nombre: 'Apartamento acogedor en la montaña',
            src: '/assets/img/montaña.png',
            descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña.',
            ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
            habitaciones: 2,
            banos: 1,
            costo: 1200,
            smoke: true,
            pets: true
        },
        {
            nombre: 'Penthouse de lujo con terraza panorámica',
            src: '/assets/img/penthouse.png',
            descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
            ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            banos: 3,
            costo: 4500,
            smoke: false,
            pets: false
        }
    ];

    const propiedades_alquiler = [
        {
            nombre: 'Apartamento en el centro de la ciudad',
            src: '/assets/img/ciudad.png',
            descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.',
            ubicacion: '123 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: 2000,
            smoke: false,
            pets: true
        },
        {
            nombre: 'Apartamento luminoso con vista al mar',
            src: 'assets/img/mar.png',
            descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
            ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
            habitaciones: 3,
            banos: 3,
            costo: 2800,
            smoke: true,
            pets: true
        },
        {
            nombre: 'Condominio moderno en zona residencial',
            src: 'assets/img/residencial.png',
            descripcion: 'Este elegante condominio está ubicado en una tranquila zona residencial.',
            ubicacion: '789 Green Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: 2200,
            smoke: false,
            pets: false
        }
    ];

    const contenedorVenta = document.getElementById('propiedades-venta-contenedor');
    const contenedorAlquiler = document.getElementById('propiedades-alquiler-contenedor');


    function generarPropiedadHTML(propiedad) {
        return `
            <div class="propiedad">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
                <p>Ubicación: ${propiedad.ubicacion}</p>
                <p>Habitaciones: ${propiedad.habitaciones} | Baños: ${propiedad.banos}</p>
                <p class="precio">Precio: $${propiedad.costo}</p>
                <div class="restricciones">
                    <span>${propiedad.smoke ? "✔️ Permitido fumar" : "❌ No se permite fumar"}</span>
                    <span>${propiedad.pets ? "✔️ Mascotas permitidas" : "❌ No se permiten mascotas"}</span>
                </div>
            </div>
        `;
    }

    const currentPage = window.location.pathname;

    if (currentPage.includes('propiedades_venta.html')) {
        const contenedorVenta = document.getElementById('propiedades-venta-contenedor');
        propiedades_venta.forEach((propiedad) => {
            contenedorVenta.innerHTML += generarPropiedadHTML(propiedad);
        });
    } else if (currentPage.includes('propiedades_alquiler.html')) {
        const contenedorAlquiler = document.getElementById('propiedades-alquiler-contenedor');
        propiedades_alquiler.forEach((propiedad) => {
            contenedorAlquiler.innerHTML += generarPropiedadHTML(propiedad);
        });
    }
    propiedades_venta.slice(0, 3).forEach((propiedad) => {
        contenedorVenta.innerHTML += generarPropiedadHTML(propiedad);
    });

    
    propiedades_alquiler.slice(0, 3).forEach((propiedad) => {
        contenedorAlquiler.innerHTML += generarPropiedadHTML(propiedad);
    });
});
