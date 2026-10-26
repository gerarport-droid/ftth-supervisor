const DB_NAME = "FTTHSupervisorDB";
const STORE_NAME = "auditorias";

let db;

function initDB() {

    return new Promise((resolve, reject) => {

        const request =
            indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = (event) => {

            db = event.target.result;

            if (
                !db.objectStoreNames.contains(
                    STORE_NAME
                )
            ) {

                db.createObjectStore(
                    STORE_NAME,
                    {
                        keyPath: "id"
                    }
                );

            }

        };

        request.onsuccess = () => {

            db = request.result;

            console.log(
                "Base iniciada"
            );

            resolve();

        };

        request.onerror = () => {

            reject(
                request.error
            );

        };

    });

}

function guardarAuditoria(data) {

    const tx =
        db.transaction(
            STORE_NAME,
            "readwrite"
        );

    const store =
        tx.objectStore(
            STORE_NAME
        );

    store.put(data);

    console.log(
        "Auditoría guardada",
        data
    );

}

function obtenerTodas() {

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    STORE_NAME,
                    "readonly"
                );

            const store =
                tx.objectStore(
                    STORE_NAME
                );

            const request =
                store.getAll();

            request.onsuccess = () => {

                resolve(
                    request.result
                );

            };

            request.onerror = () => {

                reject(
                    request.error
                );

            };

        }
    );

}

function obtenerAuditoria(id) {

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    STORE_NAME,
                    "readonly"
                );

            const store =
                tx.objectStore(
                    STORE_NAME
                );

            const request =
                store.get(id);

            request.onsuccess = () => {

                resolve(
                    request.result
                );

            };

            request.onerror = () => {

                reject(
                    request.error
                );

            };

        }
    );

}

function eliminarAuditoria(id) {

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    STORE_NAME,
                    "readwrite"
                );

            const store =
                tx.objectStore(
                    STORE_NAME
                );

            const request =
                store.delete(id);

            request.onsuccess = () => {

                resolve(true);

    
