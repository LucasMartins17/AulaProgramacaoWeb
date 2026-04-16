<script setup>
// Definição de variáveis para usar no template
const nomeAluno = "Lucas Martins";
const faculdade = "Fatec - Aula 08";
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
    
    <nav class="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3 group">
          <div class="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24,1.6L12,22.4L0,1.6h4.8L12,14L19.2,1.6H24z"/></svg>
          </div>
          <span class="text-xl font-bold tracking-tight">Vue<span class="text-emerald-500">Project</span></span>
        </div>
        <div class="flex items-center gap-6">
          <span class="hidden md:block text-sm font-medium text-slate-400 italic">{{ faculdade }}</span>
          <div class="h-4 w-[1px] bg-slate-200 hidden md:block"></div>
          <button class="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-emerald-600 transition-all shadow-md">
            Relatório PDF
          </button>
        </div>
      </div>
    </nav>

    <section class="relative pt-20 pb-12 px-6 overflow-hidden">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider mb-8">
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Interface Atômica com Vue 3
          </div>
          <h1 class="text-6xl font-black text-slate-900 leading-[1] mb-6 tracking-tighter">
            Simplicidade <br />
            <span class="text-emerald-500 underline decoration-emerald-200 decoration-8 underline-offset-4">Reativa</span>.
          </h1>
          <p class="text-lg text-slate-500 max-w-md leading-relaxed mb-10">
            Este projeto demonstra a implementação de componentes dinâmicos e estilização utilitária para a atividade prática de Front-end.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                <div class="w-full h-full flex items-center justify-center bg-emerald-100 text-emerald-700 font-bold">
                    {{ nomeAluno.charAt(0) }}
                </div>
            </div>
            <div>
              <p class="text-sm font-bold text-slate-900">{{ nomeAluno }}</p>
              <p class="text-xs text-slate-400">Desenvolvedor em Formação</p>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="absolute -inset-4 bg-emerald-500/5 rounded-[3rem] blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
          <div class="relative bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <div class="flex justify-between items-start mb-12">
                <div class="space-y-1">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Stack Atual</p>
                    <p class="text-2xl font-bold text-slate-800 italic underline decoration-emerald-500">Vue + Tailwind</p>
                </div>
                <div class="bg-emerald-50 p-3 rounded-2xl text-emerald-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
            </div>

            <div class="space-y-6">
                <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span class="text-sm font-semibold">Desempenho</span>
                    <span class="text-xs font-bold text-emerald-600">99%</span>
                </div>
                <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span class="text-sm font-semibold">Acessibilidade</span>
                    <span class="text-xs font-bold text-emerald-600">100%</span>
                </div>
            </div>

            <div class="mt-12 flex gap-2">
                <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-emerald-500 w-[75%] rounded-full shadow-[0_0_8px_#10b981]"></div>
                </div>
                <div class="flex-1 h-2 bg-slate-100 rounded-full"></div>
                <div class="flex-1 h-2 bg-slate-100 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer class="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200">
        <div class="flex flex-col md:row justify-between items-center gap-4">
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Atividade Prática • Frameworks Web</p>
            <div class="flex gap-4">
                <div class="w-2 h-2 rounded-full bg-slate-300"></div>
                <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <div class="w-2 h-2 rounded-full bg-slate-300"></div>
            </div>
        </div>
    </footer>
  </div>
</template>

<style scoped>
/* Estilos específicos se necessário */
</style>