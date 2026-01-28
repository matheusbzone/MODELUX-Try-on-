
import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  RefreshCcw, 
  Zap, 
  ShieldCheck, 
  Target, 
  Globe, 
  Award, 
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Layers,
  BarChart3
} from 'lucide-react';

const SlideWrapper: React.FC<{ children: React.ReactNode, active?: boolean }> = ({ children, active }) => (
  <div className={`w-full max-w-7xl mx-auto h-full flex items-center justify-center ${active ? 'slide-enter' : ''}`}>
    {children}
  </div>
);

// Part 1 – Abertura
export const Slide1_Opening: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="text-center relative">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="inline-flex items-center gap-3 px-6 py-2 glass-panel rounded-full border-blue-500/20 mb-12">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400">Solução de E-commerce de Próxima Geração</span>
      </div>
      
      <div className="mb-12 flex justify-center">
        <img 
          src="https://i.ibb.co/Zzkmy1vh/MODELUX-TRY-ON-Logo-branco.png" 
          alt="MODELUX TRY-ON Logo" 
          className="max-w-2xl w-full h-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        />
      </div>

      <p className="text-2xl md:text-3xl font-light text-white/40 max-w-4xl mx-auto leading-relaxed mb-16">
        A nova era da experiência de compra em moda online.
      </p>
      <div className="flex flex-col items-center gap-6">
        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <blockquote className="text-2xl italic font-serif text-white/60">
          "Transformando tráfego em conversão, e conversão em fidelização."
        </blockquote>
      </div>
    </div>
  </SlideWrapper>
);

// Part 2 – O Problema
export const Slide2_Problem: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="text-red-500 font-black tracking-[0.4em] text-xs uppercase">Análise de Mercado</span>
          <h2 className="text-6xl font-extrabold tracking-tight leading-[1.1]">O Colapso do<br/>Modelo Tradicional</h2>
        </div>
        <div className="grid gap-4">
          {[
            { icon: <TrendingUp className="text-red-500" />, title: "Explosão de Custos", text: "CPMs subindo 25% ao ano nas principais plataformas de anúncios." },
            { icon: <AlertTriangle className="text-orange-400" />, title: "ROAS em Queda", text: "Margens espremidas por um CAC insustentável." },
            { icon: <RefreshCcw className="text-blue-400" />, title: "Taxa de Devolução", text: "30-50% das compras devolvidas por erro de tamanho." },
          ].map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl flex items-start gap-6 hover:bg-white/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">{item.icon}</div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-red-600/10 blur-3xl" />
        <div className="relative glass-panel rounded-[3rem] p-16 border-red-500/20 text-center space-y-8 overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
          <h3 className="text-8xl font-black text-white/5 group-hover:text-red-500/10 transition-colors">ALERTA</h3>
          <p className="text-3xl font-bold leading-tight">
            Investir mais em tráfego já <span className="text-red-500">não garante</span> crescer vendas.
          </p>
          <div className="pt-8 flex justify-center">
            <div className="px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest">
              Ponto de Ruptura Atingido
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Part 3 – Comportamento
export const Slide3_Behavior: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="space-y-20 text-center">
      <div className="space-y-6">
        <span className="text-blue-500 font-black tracking-[0.4em] text-xs uppercase">Fator Humano</span>
        <h2 className="text-7xl font-extrabold tracking-tighter">A Psicologia do Novo Consumidor</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Sparkles />, title: "Experiência > Preço", desc: "A compra não é mais utilitária, é emocional e sensorial." },
          { icon: <ShieldCheck />, title: "Pilar de Confiança", desc: "A segurança visual é o gatilho #1 para a finalização do checkout." },
          { icon: <Smartphone />, title: "Hiper-Personalização", desc: "O cliente espera que a marca entenda seu corpo e estilo." },
        ].map((item, i) => (
          <div key={i} className="glass-panel p-12 rounded-[2.5rem] space-y-8 border-white/5 hover:border-blue-500/30 hover:-translate-y-4 transition-all duration-500 group">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-blue-900/40 group-hover:scale-110 transition-transform">
              {/* Fix: Explicitly cast to React.ReactElement with optional 'size' prop to satisfy TS requirements */}
              {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-2xl italic font-serif text-white/40 max-w-3xl mx-auto border-t border-white/5 pt-12">
        "Moda online sem experiência visual gera insegurança e abandono de carrinho."
      </p>
    </div>
  </SlideWrapper>
);

// Part 4 – Conceito
export const Slide4_Concept: React.FC<{ active?: boolean }> = ({ active }) => {
  const [showFit, setShowFit] = useState(false);
  return (
    <SlideWrapper active={active}>
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 bg-blue-600 rounded text-[10px] font-black uppercase tracking-[0.3em]">O Conceito</div>
            <h2 className="text-6xl font-extrabold tracking-tight">Experiência SaaS de <span className="text-blue-500 italic font-serif font-normal">Provador Virtual</span></h2>
          </div>
          <p className="text-xl text-white/50 leading-relaxed">
            Uma camada inteligente de visualização que elimina a dúvida e traz o provador físico para a palma da mão do cliente.
          </p>
          <ul className="space-y-6">
            {[
              "Gêmeo Digital: Visualização 1:1 do corpo do cliente.",
              "Simulação de Têxtil: Caimento e fluidez realista.",
              "Zero Fricção: Integração direta no e-commerce.",
              "Inteligência de Dados: Insights de ajuste para produção."
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <CheckCircle2 size={14} className="text-blue-500 group-hover:text-white" />
                </div>
                <span className="text-lg font-medium text-white/70">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="glass-panel rounded-[3rem] p-4 relative overflow-hidden aspect-[4/5]">
            <img 
              src={`https://images.unsplash.com/photo-${showFit ? '1539109132332-629d63c8162b' : '1490481651871-ab68de25d43d'}?auto=format&fit=crop&q=80&w=800`} 
              className="w-full h-full object-cover rounded-[2.2rem] transition-all duration-1000" 
              alt="Fashion Demo"
            />
            {showFit && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-blue-500/50 shadow-[0_0_20px_blue] absolute top-1/4 animate-[scan_3s_infinite]" />
              </div>
            )}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 glass-panel p-2 rounded-full border-white/20">
              <button 
                onClick={() => setShowFit(false)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${!showFit ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
              >
                Vista Padrão
              </button>
              <button 
                onClick={() => setShowFit(true)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${showFit ? 'bg-blue-600 text-white' : 'text-white/40 hover:text-white'}`}
              >
                Modo Provador
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { top: 10%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
      `}</style>
    </SlideWrapper>
  );
};

// Part 5 – XP/Conversão
export const Slide5_XP_Conversion: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" 
          className="w-full rounded-[3rem] shadow-2xl filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
          alt="Shopping Experience"
        />
      </div>
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="text-blue-500 font-black tracking-[0.4em] text-xs uppercase">Impacto de Negócio</span>
          <h2 className="text-6xl font-extrabold tracking-tight">Experiência é o<br/>Novo Motor de ROI</h2>
        </div>
        <div className="grid gap-8">
          {[
            { label: "01. Engajamento", value: "Tempo de sessão aumenta em média 2.5x." },
            { label: "02. Confiança", value: "Redução do 'medo do caimento' em 80%." },
            { label: "03. Checkout", value: "Aumento de 15% na taxa de adição ao carrinho." },
          ].map((item, i) => (
            <div key={i} className="space-y-2 group cursor-default">
              <span className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase">{item.label}</span>
              <p className="text-3xl font-bold group-hover:translate-x-2 transition-transform">{item.value}</p>
              <div className="w-full h-[1px] bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Part 6 – Performance
export const Slide6_Performance: React.FC<{ active?: boolean }> = ({ active }) => {
  const data = [
    { name: 'Conversão', standard: 100, modelux: 142 },
    { name: 'Ticket Médio', standard: 100, modelux: 118 },
    { name: 'Devolução', standard: 100, modelux: 40 },
  ];

  return (
    <SlideWrapper active={active}>
      <div className="w-full space-y-20">
        <div className="text-center space-y-4">
          <span className="text-blue-500 font-black tracking-[0.4em] text-xs uppercase">Dados e Insights</span>
          <h2 className="text-6xl font-extrabold tracking-tight">Performance Comparativa</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 glass-panel p-12 rounded-[3rem] h-[500px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                 <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} dy={10} />
                 <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                 />
                 <Bar dataKey="standard" name="Padrão" fill="#1e293b" radius={[10, 10, 0, 0]} />
                 <Bar dataKey="modelux" name="Modelux" fill="#2563eb" radius={[10, 10, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-10 rounded-[2.5rem] border-blue-500/20 bg-blue-600/5 flex flex-col justify-center">
              <span className="text-6xl font-black text-blue-500">+42%</span>
              <span className="text-sm font-black uppercase tracking-widest text-white/40 mt-2">Salto de Conversão</span>
            </div>
            <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col justify-center">
              <span className="text-6xl font-black text-white">-60%</span>
              <span className="text-sm font-black uppercase tracking-widest text-white/40 mt-2">Redução de Devoluções</span>
            </div>
            <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col justify-center">
              <span className="text-6xl font-black text-white">+18%</span>
              <span className="text-sm font-black uppercase tracking-widest text-white/40 mt-2">Ticket Médio</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

// Part 7 – Autoridade
export const Slide7_Authority: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="text-center space-y-24">
      <div className="space-y-4">
        <span className="text-blue-500 font-black tracking-[0.4em] text-xs uppercase">Visão Global</span>
        <h2 className="text-7xl font-extrabold tracking-tighter">O Respaldo do Mercado</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-16">
        {[
          { brand: "Forbes", quote: "A experiência digital é o novo campo de batalha competitivo do varejo moderno." },
          { brand: "McKinsey", quote: "Omnichannel e tecnologias imersivas não são mais opcionais para o sucesso." },
          { brand: "Vogue Biz", quote: "Provadores virtuais são o futuro incontestável do e-commerce de moda." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-10">
            <div className="h-12 w-48 bg-white/5 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
              <span className="text-2xl font-black italic tracking-widest uppercase">{item.brand}</span>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-6xl font-serif text-blue-600 opacity-20">“</div>
              <p className="text-xl font-medium leading-relaxed italic text-white/60">
                {item.quote}
              </p>
              <div className="absolute -bottom-10 -right-6 text-6xl font-serif text-blue-600 opacity-20 rotate-180">“</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

// Part 8 – Tráfego 2026
export const Slide8_TrafficCrisis: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="text-red-500 font-black tracking-[0.4em] text-xs uppercase">Cenário 2026</span>
          <h2 className="text-6xl font-extrabold tracking-tight">O Fim da Era<br/>do Tráfego Barato</h2>
        </div>
        <p className="text-xl text-white/40 leading-relaxed max-w-lg">
          Em 2026, ganhar a atenção será o maior custo variável de qualquer empresa. Se você não converte quem já clicou, seu negócio não é escalável.
        </p>
        <div className="p-10 glass-panel border-red-500/20 rounded-[3rem] space-y-4 bg-red-950/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4"><AlertTriangle className="text-red-500 opacity-20" size={64} /></div>
          <p className="text-2xl font-black text-white">O Tráfego não escala a <span className="text-red-500">MARGEM</span>.</p>
          <p className="text-2xl font-black text-white">A Experiência escala a <span className="text-blue-500">CONVERSÃO</span>.</p>
        </div>
      </div>
      <div className="glass-panel p-16 rounded-[4rem] border-white/5 space-y-12 flex flex-col items-center justify-center">
         <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 border-[16px] border-white/5 rounded-full" />
            <div className="absolute inset-0 border-[16px] border-red-600 rounded-full border-t-transparent animate-spin" style={{ animationDuration: '10s' }} />
            <div className="text-center">
              <span className="text-6xl font-black">2026</span>
              <p className="text-[10px] font-black tracking-widest text-red-500 uppercase mt-2">Ano Crítico</p>
            </div>
         </div>
         <p className="text-center text-lg text-white/40 italic">
           A dependência de anúncios é a nova vulnerabilidade estratégica.
         </p>
      </div>
    </div>
  </SlideWrapper>
);

// Part 9 – Estratégia
export const Slide9_Strategy: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="space-y-16">
      <div className="text-center space-y-6">
        <span className="text-blue-500 font-black tracking-[0.4em] text-xs uppercase">Proposta de Valor</span>
        <h2 className="text-7xl font-extrabold tracking-tighter">MODELUX como Ativo</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: <Zap />, title: "Eficiência de Funil", desc: "Maximize cada centavo investido em mídia paga atraindo e retendo com experiência." },
          { icon: <Target />, title: "ROAS Acelerado", desc: "Aumente o retorno sobre anúncios ao elevar a confiança no checkout." },
          { icon: <Layers />, title: "Diferenciação", desc: "Sua marca deixa de ser comum e torna-se um destino tecnológico." },
          { icon: <BarChart3 />, title: "Dados de Fit", desc: "Entenda o corpo real do seu cliente e otimize sua grade de produção." },
        ].map((item, i) => (
          <div key={i} className="glass-panel p-10 rounded-[2.5rem] flex gap-8 items-center hover:bg-blue-600/10 transition-all group">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/40 shrink-0 group-hover:scale-110 transition-transform">
              {/* Fix: Explicitly cast to React.ReactElement with optional 'size' prop to satisfy TS requirements */}
              {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

// Part 10 – Grand Finale
export const Slide10_GrandFinale: React.FC<{ active?: boolean }> = ({ active }) => (
  <SlideWrapper active={active}>
    <div className="grid lg:grid-cols-2 gap-24 items-center w-full">
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white text-black rounded font-black text-xl flex items-center justify-center">M</div>
          <span className="text-sm font-black tracking-[0.5em] text-blue-500 uppercase">Modelux Try-ON</span>
        </div>
        <h2 className="text-8xl font-black tracking-tighter leading-[0.9]">O FUTURO<br/><span className="text-blue-600">REVELADO.</span></h2>
        <div className="space-y-6">
          <div className="flex items-center gap-6">
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><CheckCircle2 size={16}/></div>
             <span className="text-2xl font-bold">Mais Conversão.</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><CheckCircle2 size={16}/></div>
             <span className="text-2xl font-bold">Menos Devoluções.</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><CheckCircle2 size={16}/></div>
             <span className="text-2xl font-bold">Experiência Total.</span>
          </div>
        </div>
        <button className="group px-12 py-6 bg-white text-black rounded-full font-black text-xl flex items-center gap-6 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
          SOLICITAR DEMO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-blue-600/20 blur-[150px] animate-pulse rounded-full" />
        <div className="glass-panel rounded-[5rem] p-2 relative aspect-square rotate-3 hover:rotate-0 transition-transform duration-700">
           <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover rounded-[4.5rem]" 
              alt="Modelux Vision"
           />
           <div className="absolute inset-0 bg-blue-900/20 rounded-[4.5rem] mix-blend-overlay" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center backdrop-blur-md bg-black/40 p-12 rounded-[3rem] border border-white/10">
                <span className="text-sm font-black tracking-[0.5em] text-blue-400 uppercase">Entre na Nova Era</span>
                <h3 className="text-5xl font-black mt-4">2026</h3>
             </div>
           </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);
