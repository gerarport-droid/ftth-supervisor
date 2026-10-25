document.addEventListener(
    "DOMContentLoaded",
    async () => {

        if (typeof initDB === "function") {
            await initDB();
        }

        const botonGuardar =
            document.getElementById(
                "btnGuardar"
            );

        if (botonGuardar) {

            botonGuardar.addEventListener(
                "click",
                () => {

                    const auditoria = {

                        id: Date.now(),

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
                            document.getElementById(
                                "carnetIdentificacion"
                            ).value,

                        telefonoStaff:
                            document.getElementById(
                                "telefonoStaff"
                            ).value,

                        uniformePantalon:
                            document.getElementById(
                                "uniformePantalon"
                            ).value,

                        uniformeRemera:
                            document.getElementById(
                                "uniformeRemera"
                            ).value,

                        itv:
                            document.getElementById(
                                "itv"
                            ).value,

                        extinguidor:
                            document.getElementById(
                                "extinguidor"
                            ).value,

                        baliza:
                            document.getElementById(
                                "baliza"
                            ).value,

                        gato:
                            document.getElementById(
                                "gato"
                            ).value,

                        llaveRuedas:
                            document.getElementById(
                                "llaveRuedas"
                            ).value,

                        auxilio:
                            document.getElementById(
                                "auxilio"
                            ).value,

                        anteojos:
                            document.getElementById(
                                "anteojos"
                            ).value,

                        casco:
                            document.getElementById(
                                "casco"
                            ).value,

                        chaleco:
                            document.getElementById(
                                "chaleco"
                            ).value,

                        guantes:
                            document.getElementById(
                                "guantes"
                            ).value,

                        zapatones:
                            document.getElementById(
                                "zapatones"
                            ).value,

                        observaciones:
                            document.getElementById(
                                "observaciones"
                            ).value

                    };

                    guardarAuditoria(
                        auditoria
                    );

                    alert(
                        "Auditoría guardada correctamente"
                    );

                }
            );

        }

        const botonEnviar =
            document.getElementById(
                "btnEnviar"
            );

        if (botonEnviar) {

            botonEnviar.addEventListener(
                "click",
                async () => {

                    const auditoria = {

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
                            ).value

                    };

                    const ok =
                        await enviarFormulario(
                            auditoria
                        );

                    if (ok) {

                        alert(
                            "Formulario enviado correctamente"
                        );

                    } else {

                        alert(
                            "Error al enviar formulario"
                        );

                    }

                }
            );

        }

    }
);
