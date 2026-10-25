document.addEventListener(
    "DOMContentLoaded",
    async () => {

        if (typeof initDB === "function") {
            await initDB();
        }

        const boton =
            document.getElementById(
                "btnGuardar"
            );

        if (boton) {

            boton.addEventListener(
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

    }
);
