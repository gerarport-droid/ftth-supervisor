async function cargarHistorial() {

    const lista =
        document.getElementById(
            "historialList"
        );

    lista.innerHTML = "";

    const auditorias =
        await obtenerTodas();

    auditorias.reverse();

    auditorias.forEach(
        (item) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "card";

            card.innerHTML = `

                <h3>${item.cuadrilla || "-"}</h3>

                <p>
                    <strong>Supervisor:</strong>
                    ${item.supervisor || "-"}
                </p>

                <p>
                    <strong>Contratista:</strong>
                    ${item.contratista || "-"}
                </p>

                <p>
                    <strong>Usuario:</strong>
                    ${item.usuarioSalesforce || "-"}
                </p>

                <button
                    onclick="verAuditoria(${item.id})">
                    Ver
                </button>

                <button
                    onclick="editarAuditoria(${item.id})">
                    Editar
                </button>

                <button
                    onclick="borrarAuditoria(${item.id})">
                    Eliminar
                </button>

            `;

            lista.appendChild(
                card
            );

        }

    );

}

function verAuditoria(id) {

    localStorage.setItem(
        "auditoriaSeleccionada",
        id
    );

    location.href =
        "detalle.html";

}

function editarAuditoria(id) {

    localStorage.setItem(
        "auditoriaEditar",
        id
    );

    location.href =
        "auditoria.html";

}

async function borrarAuditoria(id) {

    const confirmar =
        confirm(
            "¿Eliminar auditoría?"
        );

    if (!confirmar) {
        return;
    }

    await eliminarAuditoria(id);

    cargarHistorial();

}

initDB()
    .then(() => {

        cargarHistorial();

    });
