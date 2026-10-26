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
@@ -19,7 +142,12 @@ document.addEventListener(

                    const auditoria = {

                        id: Date.now(),
                        id:
                            auditoriaId
                            ? Number(
                                auditoriaId
                              )
                            : Date.now(),

                        fecha:
                            new Date()
@@ -156,6 +284,10 @@ document.addEventListener(
                        auditoria
                    );

                    localStorage.removeItem(
                        "auditoriaEditar"
                    );

                    alert(
                        "Auditoría guardada correctamente"
                    );
