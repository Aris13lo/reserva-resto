const url = "https://backend-vesubio.onrender.com/api/usuarios/";

export const authRegister = async (usuario) => {
    try {
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const data = await resp.json();

        return data;
    } catch (error) {
        console.log(error);
        return { msg: "No se conectó con backend" };
    }
};

