const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const DATA_FILE = './data.json';

// Função auxiliar para ler as notas do arquivo
const readNotes = () => {
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};

// Função auxiliar para salvar as notas no arquivo
const writeNotes = (notes) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));
};

// 1. [GET] - Listar todas as notas
app.get('/api/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

// 2. [POST] - Criar uma nova nota
app.post('/api/notes', (req, res) => {
    const notes = readNotes();
    const newNote = {
        id: Date.now(), // Gera um ID único baseado no tempo
        titulo: req.body.titulo,
        texto: req.body.texto
    };
    notes.push(newNote);
    writeNotes(notes);
    res.status(201).json(newNote);
});

// 3. [PUT] - Editar uma nota existente
app.put('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    let notes = readNotes();
    const index = notes.findIndex(n => n.id == id);

    if (index !== -1) {
        notes[index] = { ...notes[index], ...req.body };
        writeNotes(notes);
        res.json(notes[index]);
    } else {
        res.status(404).json({ message: "Nota não encontrada" });
    }
});

// 4. [DELETE] - Excluir uma nota
app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    let notes = readNotes();
    const newNotes = notes.filter(n => n.id != id);
    
    if (notes.length !== newNotes.length) {
        writeNotes(newNotes);
        res.json({ message: "Nota excluída com sucesso" });
    } else {
        res.status(404).json({ message: "Nota não encontrada" });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Servidor CRUD rodando na porta ${PORT}`);
});