const FORM_URL =
"https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEEuxbmF34drfstjAXCGHuXGE-NyCwcdVRSp_Spg2sAzSZKg/formResponse";

async function enviarFormulario(auditoria) {

    const payload =
        new URLSearchParams();

    payload.append(
        "entry.395424792",
        auditoria.supervisor
    );

    payload.append(
        "entry.574643860",
        auditoria.contratista
    );

    payload.append(
        "entry.656419129",
        auditoria.cuadrilla
    );

    payload.append(
        "entry.1103604777",
        auditoria.usuarioSalesforce
    );

    console.log(
        payload.toString()
    );

    try {

        await fetch(
            FORM_URL,
            {
                method: "POST",
                mode: "no-cors",
                body: payload
            }
        );

        return true;

    }
    catch (error) {

        console.error(error);

        return false;

    }

}
