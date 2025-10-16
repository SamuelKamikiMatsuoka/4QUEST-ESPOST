
const express = require("express");
const app = express();
const PORT = 8080; 

app.use(express.json());

app.post("/soma", (req, res) => {
  try {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length === 0) {
      return res.status(400).json({
        erro: "Dados inválidos. Por favor, envie um array de 'numeros' com pelo menos um valor."
      });
    }
    

    const resultado = numeros.reduce((acumulador, valorAtual) => {
     
      if (!isNaN(valorAtual) && valorAtual !== null) {
        return acumulador + valorAtual;
      }
      
      return acumulador;
    }, 0);

  
    res.status(200).json({ 
      soma: resultado
    });
    
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    res.status(500).json({ 
      erro: "Ocorreu um erro interno no servidor." 
    });
  }
});

app.listen(PORT, () => {
  console.log(` atividade 3 rodando em http://localhost:${PORT}`);
});






