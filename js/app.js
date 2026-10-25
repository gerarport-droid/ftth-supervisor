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

                    alert("Botón Enviar detectado");
                    
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
