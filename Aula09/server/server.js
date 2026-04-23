const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); 

app.get('/api/horario', (req, res) => {
  const agora = new Date();
  res.json({
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR'),
    timestamp: agora.getTime()
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});