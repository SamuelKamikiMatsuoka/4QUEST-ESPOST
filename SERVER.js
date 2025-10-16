const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

function validarDados(pNome, pEmail, pSenha) {
    if (!pnome || typeof pNome !== `string`) {
        throw new Error("O nome tem que ser uma string não um numero!")
    }
    if (pnome().length > 3) {
        throw new Error("insira pelo menos 3 letras em seu nome!");
    }
    if (!pEmail || typeof pEmail !== `string` || !pEmail.includes("@")) {
        throw new Error("O email precisa ter @ para ser considerado ");

    }
    if (!pSenha || String(!pSenha).trim().length < 4) {
        throw new Error("Coloque no minimo 4 caracteres nessa senha");
    }

    return {
        "pNome": pNome,
        "pEmail": pEmail,
        "pSenha": pSenha
    };
}


function salvarRegistro(pUsuario) {
    const arquivo = `/usuarios.json`
    let usuarios = [];

}













































    app.use((req, res) => {
        res.status(404).send(`pagina não encontrada!`)
    })


    app.listen(PORT, () => {
        console.log(` atividade 3 rodando em http://localhost:${PORT}`);
    });













