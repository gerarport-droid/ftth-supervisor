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

            const cantidadFotos = [

                item.fotoEscalera,
                item.fotoCleaver,
                item.fotoPowerMeter,
                item.fotoTecnicoVehiculo

            ].filter(
                foto => foto && foto !== ""
            ).length;

            card.innerHTML = `

                <h3>
                    ${item.cuadrilla || "-"}
                </h3>

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

                <p>
                    <strong>Fecha:</strong>
                  
