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

        if (auditoriaId) {

            const auditoria =
                await obtenerAuditoria(
                    Number(auditoriaId)
                );

            if (auditoria) {

                document.getElementById(
                    "supervisor"
                ).value =
                    auditoria.supervisor || "";

                document.getElementById(
                    "contratista"
                ).value =
                    auditoria.contratista || "";

                document.getElementById(
                    "cuadrilla"
                ).value =
                    auditoria.cuadrilla || "";

                document.getElementById(
                    "usuarioSalesforce"
                ).value =
                    auditoria.usuarioSalesforce || "";

                document.getElementById(
                    "aparienciaTecnico"
                ).value =
                    auditoria.aparienciaTecnico || "";

                document.getElementById(
                    "carnetIdentificacion"
                ).value =
                    auditoria.carnetIdentificacion || "";

                document.getElementById(
                    "telefonoStaff"
                ).value =
                    auditoria.telefonoStaff || "";

                document.getElementById(
                    "uniformePantalon"
                ).value =
                    auditoria.uniformePantalon || "";

                document.getElementById(
                    "uniformeRemera"
                ).value =
                    auditoria.uniformeRemera || "";

                document.getElementById(
                    "itv"
                ).value =
                    auditoria.itv || "";

                document.getElementById(
                    "extinguidor"
                ).value =
                    auditoria.extinguidor || "";

                document.getElementById(
                    "baliza"
                ).value =
                    auditoria.baliza || "";

                document.getElementById(
                    "gato"
                ).value =
                    auditoria.gato || "";

                document.getElementById(
                    "llaveRuedas"
                ).value =
                    auditoria.llaveRuedas || "";

                document.getElementById(
                    "auxilio"
                ).value =
                    auditoria.auxilio || "";

                document.getElementById(
                    "anteojos"
                ).value =
                    auditoria.anteojos || "";

                document.getElementById(
                    "casco"
                ).value =
                    auditoria.casco || "";

                document.getElementById(
                    "chaleco"
                ).value =
                    auditoria.chaleco || "";

                document.getElementById(
                    "guantes"
                ).value =
                    auditoria.guantes || "";

                document.getElementById(
                    "zapatones"
                ).value =
                    auditoria.zapatones || "";

                document.getElementById(
                    "observaciones"
                ).value =
                    auditoria.observaciones || "";

            }

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
                            ).value,

                        fotoEscalera:
                            document.getElementById(
                                "fotoEscalera"
                            ).files[0]?.name || "",

                        fotoCleaver:
                            document.getElementById(
                                "fotoCleaver"
                            ).files[0]?.name || "",

                        fotoPowerMeter:
                            document.getElementById(
                                "fotoPowerMeter"
                            ).files[0]?.name || "",

                        fotoTecnicoVehiculo:
                            document.getElementById(
                                "fotoTecnicoVehiculo"
                            ).files[0]?.name || ""

                    };

                    guardarAuditoria(
                        auditoria
                    );

                    localStorage.removeItem(
                        "auditoriaEditar"
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
