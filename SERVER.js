const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());


app.post("/usuarios", (req,res) => { 

    try {
        
    } catch (error) {
        
    }

});

























































app.use((req, res) => {
    res.status(404).send(`pagina não encontrada!`)
})


app.listen(PORT, () => {
    console.log(` atividade 3 rodando em http://localhost:${PORT}`);
});













