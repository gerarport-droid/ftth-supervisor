document.addEventListener(
    "DOMContentLoaded",
    async () => {

        console.log(
            "FTTH Supervisor iniciado"
        );

        if (
            typeof initDB ===
            "function"
        ) {

            await initDB();

        }

    }
);
