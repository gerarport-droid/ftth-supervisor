function archivoABase64(inputId) {

    return new Promise((resolve) => {

        const archivo =
            document.getElementById(
                inputId
            ).files[0];

        if (!archivo) {

            resolve(null);

            return;

        }

        const reader =
            new FileReader();

        reader.onload =
            () => resolve(
                reader.result
            );

        reader.readAsDataURL(
            archivo
        );

    });

}

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        if (typeof initDB === "function") {
            await initDB();
        }

        let auditoriaId =
            localStorage.getItem(
                "auditoriaEditar"
            );

        let auditoriaOriginal =
            null;

        if (auditoriaId) {

            auditoriaOriginal =
                await obtenerAuditoria(
                    Number(auditoriaId)
                );

            if (auditoriaOriginal) {

                document.getElementById(
                    "supervisor"
                ).value =
                    auditoriaOriginal.supervisor || "";

                document.getElementById(
                    "contratista"
                ).value =
                    auditoriaOriginal.contratista || "";

                document.getElementById(
                    "cuadrilla"
                ).value =
                    auditoriaOriginal.cuadrilla || "";

                document.getElementById(
                    "usuarioSalesforce"
                ).value =
                    auditoriaOriginal.usuarioSalesforce || "";

                document.getElementById(
                    "aparienciaTecnico"
                ).value =
                    auditoriaOriginal.aparienciaTecnico || "";

                document.getElementById(
                    "carnetIdentificacion"
                ).value =
                    auditoriaOriginal.carnetIdentificacion || "";

                document.getElementById(
                    "telefonoStaff"
                ).value =
                    auditoriaOriginal.telefonoStaff || "";

                document.getElementById(
                    "uniformePantalon"
                ).value =
                    auditoriaOriginal.uniformePantalon || "";

                document.getElementById(
                    "uniformeRemera"
                ).value =
                    auditoriaOriginal.uniformeRemera || "";

                document.getElementById(
                    "itv"
                ).value =
                    auditoriaOriginal.itv || "";

                document.getElementById(
                    "extinguidor"
                ).value =
                    auditoriaOriginal.extinguidor || "";

                document.getElementById(
                    "baliza"
                ).value =
                    auditoriaOriginal.baliza || "";

                document.getElementById(
                    "gato"
                ).value =
                    auditoriaOriginal.gato || "";

                document.getElementById(
                    "llaveRuedas"
                ).value =
                    auditoriaOriginal.llaveRuedas || "";

                document.getElementById(
                    "auxilio"
                ).value =
                    auditoriaOriginal.auxilio || "";

                document.getElementById(
                    "anteojos"
                ).value =
                    auditoriaOriginal.anteojos || "";

                document.getElementById(
                    "casco"
                ).value =
                    auditoriaOriginal.casco || "";

                document.getElementById(
                    "chaleco"
                ).value =
                    auditoriaOriginal.chaleco || "";

                document.getElementById(
                    "guantes"
                ).value =
                    auditoriaOriginal.guantes || "";

                document.getElementById(
                    "zapatones"
                ).value =
                    auditoriaOriginal.zapatones || "";

                document.getElementById(
                    "observaciones"
                ).value =
                    auditoriaOriginal.observaciones || "";

            }

        }

        const botonGuardar =
            document.getElementById(
                "btnGuardar"
            );

        if (botonGuardar) {

            botonGuardar.addEventListener(
                "click",
                async () => {

                    const fotoEscalera =
                        await archivoABase64(
                            "fotoEscalera"
                        );

                    const fotoCleaver =
                        await archivoABase64(
                            "fotoCleaver"
                        );

                    const fotoPowerMeter =
                        await archivoABase64(
                            "fotoPowerMeter"
                        );

                    const fotoTecnicoVehiculo =
                        await archivoABase64(
                            "fotoTecnicoVehiculo"
                        );

                    const auditoria = {

                        id:
                            auditoriaId
                            ? Number(
                                auditoriaId
                              )
                            : Date.now(),

                        fecha:
                            new Date()
                            .toISOString(),

                        supervisor:
                            document.getElementById(
                                "supervisor"
                            ).value,

                        contratista:
                            document.getElementById(
                                "contratista"
                            ).value,

                        cuadrilla:
                            document.getElementById(
                                "cuadrilla"
                            ).value,

                        usuarioSalesforce:
                            document.getElementById(
                                "usuarioSalesforce"
                            ).value,

                        aparienciaTecnico:
                            document.getElementById(
                                "aparienciaTecnico"
                            ).value,

                        carnetIdentificacion:
                            document
