import { useEffect, useState } from 'react';
import { Plus, Trash2, Loader2, Layers, ArrowUpRight, Zap, PencilLine } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

const API_URL = "http://localhost:10000/api/notes";

interface Note {
  id: number;
  titulo: string;
  texto: string;
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  
  // Estado para Edição
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const fetchNotes = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setNotes(data);
    } catch (err) { 
      toast.error("Network Link Offline", { description: "Verifique seu servidor local." });
    } finally { setLoading(false); }
  };

  const addNote = async () => {
    if (!newTitle || !newText) return toast.warning("Dados incompletos");
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: newTitle, texto: newText })
      });
      if (res.ok) {
        toast.success("Documento Indexado", { icon: <Zap size={14} className="text-yellow-400" /> });
        setNewTitle(""); setNewText("");
        fetchNotes();
      }
    } catch (err) { toast.error("Falha na gravação"); }
  };

  const updateNote = async () => {
    if (!editingNote) return;
    try {
      const res = await fetch(`${API_URL}/${editingNote.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: editingNote.titulo, texto: editingNote.texto })
      });
      if (res.ok) {
        toast.success("Registro Atualizado");
        setEditingNote(null);
        fetchNotes();
      }
    } catch (err) { toast.error("Erro na atualização"); }
  };

  const deleteNote = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      toast.info("Registro removido");
      fetchNotes();
    } catch (err) { toast.error("Erro de deleção"); }
  };

  useEffect(() => { fetchNotes(); }, []);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] p-4 md:p-16 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Toaster position="bottom-center" theme="dark" expand richColors />
      
      {/* Esfera de Luz - Estética Apple Vision */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Nav */}
        <nav className="flex justify-between items-center opacity-80">
          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <Layers size={14} className="text-black" />
            </div>
            <span className="text-sm font-semibold tracking-tight uppercase">Workspace</span>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            {new Date().toLocaleDateString('pt-BR')} — Port 10000
          </div>
        </nav>

        {/* Header Section */}
        <header className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Insight <span className="text-zinc-600 italic">Vault</span>.
            </h1>
            <p className="text-zinc-400 max-w-md text-lg leading-relaxed font-light">
              Captura minimalista e persistência de dados em tempo real.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 p-2 bg-[#1c1c1e]/50 border border-zinc-800/50 rounded-2xl backdrop-blur-2xl transition-all focus-within:border-zinc-600">
            <Input 
              placeholder="Título" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)}
              className="bg-transparent border-none focus-visible:ring-0 text-base placeholder:text-zinc-600 h-12"
            />
            <div className="hidden md:block w-[1px] h-6 bg-zinc-800" />
            <Input 
              placeholder="O que você está pensando?" 
              value={newText} 
              onChange={(e) => setNewText(e.target.value)}
              className="bg-transparent border-none focus-visible:ring-0 text-base placeholder:text-zinc-600 h-12"
            />
            <Button onClick={addNote} className="w-full md:w-auto h-12 px-8 bg-white text-black hover:bg-[#e8e8ed] rounded-xl font-semibold transition-all active:scale-95">
              Salvar
            </Button>
          </div>
        </header>

        {/* Grid de Conteúdo */}
        {loading ? (
          <div className="flex flex-col items-center gap-4 py-20 opacity-40">
            <Loader2 className="animate-spin text-white" size={24} />
            <span className="text-[10px] tracking-[0.3em] uppercase italic">Sincronizando registros...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notes.map((note) => (
              <Card 
                key={note.id} 
                className="bg-[#1c1c1e]/40 border-zinc-800/60 backdrop-blur-md transition-all duration-500 hover:bg-[#2c2c2e]/60 group relative overflow-hidden rounded-[24px]"
              >
                <CardHeader className="pt-8 px-8">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-medium tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {note.titulo}
                    </CardTitle>
                    <ArrowUpRight size={14} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-10">
                  <p className="text-zinc-400 text-base font-light leading-relaxed">
                    {note.texto}
                  </p>
                </CardContent>

                <CardFooter className="px-8 py-4 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-blue-500 transition-colors" />
                    <span className="text-[10px] text-zinc-500 font-mono">ID_{note.id.toString(16).slice(-4)}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setEditingNote(note)}
                      className="h-8 text-zinc-500 hover:text-white hover:bg-zinc-800/50 rounded-lg px-3 gap-2"
                    >
                      <PencilLine size={14} /> Editar
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => deleteNote(note.id)} 
                      className="h-8 text-zinc-600 hover:text-red-400 hover:bg-transparent"
                    >
                      Remover
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Modal de Edição (Apple Style Dialog) */}
        <Dialog open={!!editingNote} onOpenChange={() => setEditingNote(null)}>
          <DialogContent className="bg-[#1c1c1e] border-zinc-800 text-white rounded-[28px] max-w-md sm:max-w-[425px] backdrop-blur-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold tracking-tight">Editar Insight</DialogTitle>
              <DialogDescription className="text-zinc-500">
                Ajuste os detalhes do registro na base de dados.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Título</label>
                <Input 
                  value={editingNote?.titulo || ""} 
                  onChange={(e) => setEditingNote(prev => prev ? {...prev, titulo: e.target.value} : null)}
                  className="bg-black/40 border-zinc-800 focus:border-zinc-600 focus:ring-0 rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Conteúdo</label>
                <Textarea 
                  value={editingNote?.texto || ""} 
                  onChange={(e) => setEditingNote(prev => prev ? {...prev, texto: e.target.value} : null)}
                  className="bg-black/40 border-zinc-800 focus:border-zinc-600 focus:ring-0 rounded-xl min-h-[120px] resize-none"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={updateNote} className="w-full bg-white text-black hover:bg-zinc-200 h-12 rounded-xl font-bold transition-all active:scale-95">
                Atualizar Registro
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {notes.length === 0 && !loading && (
          <div className="text-center py-40 bg-zinc-900/5 rounded-[40px] border border-dashed border-zinc-800/40">
            <p className="text-zinc-700 text-xs font-medium uppercase tracking-[0.4em]">Archive Empty</p>
          </div>
        )}

        <footer className="pt-20 pb-10 text-center opacity-30">
          <p className="text-[10px] text-zinc-500 font-medium tracking-[0.5em] uppercase">
            End-to-End Persistence • InsightVault 2024
          </p>
        </footer>
      </div>
    </div>
  );
}