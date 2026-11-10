# 🎨 Manual de Estilo: Modelo Tipográfico Sora Uniform (400)

Este documento registra o modelo tipográfico aprovado para ser replicado em futuros projetos e sites de clientes.

---

## 🌟 Características do Modelo

| Elemento | Configuração | Descrição |
| :--- | :--- | :--- |
| **Família da Fonte** | **Sora** (Google Fonts) | Fonte sem serifa moderna, geométrica e com proporções elegantes. |
| **Peso do Título** | `font-normal` (400) | Leve, sofisticado e sem agressividade visual. |
| **Peso do Subtítulo** | `font-normal` (400) | **Exatamente o mesmo peso do título** (100% uniforme). |
| **Espaçamento Título** | `tracking-[0.22em]` + `pl-[0.22em]` | Letras espaçadas em caixa alta com compensação óptica de padding. |
| **Espaçamento Subtítulo**| `tracking-[0.26em]` + `pl-[0.26em]` | Letras levemente mais espaçadas para contraste harmônico. |

---

## 💻 Como Implementar

### 1. Importação no `<head>` do `index.html`
```html
<!-- Google Font: Sora -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

### 2. Configuração do Tailwind CSS
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora"', 'system-ui', 'sans-serif'],
      }
    }
  }
}
```

---

## 📋 Componentes de Referência

### Tela de Abertura (Intro / Splash Screen)
```jsx
<div className="flex flex-col items-center justify-center text-center space-y-1.5">
  {/* Título Principal */}
  <h1 className="text-2xl sm:text-3xl font-sora font-normal tracking-[0.22em] text-[#1D3557] uppercase pl-[0.22em]">
    LE PETIT BLEU
  </h1>

  {/* Subtítulo Uniforme */}
  <p className="text-[11px] sm:text-xs font-sora font-normal tracking-[0.26em] text-[#8C7E75] uppercase pl-[0.26em]">
    Café & Bistrô Francês
  </p>
</div>
```

### Logotipo na Barra de Navegação (Navbar)
```jsx
<div className="flex flex-col">
  <span className="font-sora text-base sm:text-lg font-normal tracking-[0.16em] text-[#1D3557] uppercase pl-[0.16em]">
    LE PETIT BLEU
  </span>
  <span className="text-[10px] font-mono tracking-widest text-[#8C7E75] uppercase font-normal">
    BISTRÔ & CAFÉ // JARDINS SP
  </span>
</div>
```

### Títulos de Seção (Hero, Sobre, Cardápio, Contato)
```jsx
<div className="text-center max-w-3xl mx-auto mb-12">
  {/* Badge Superior */}
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/10 text-[#1D3557] text-xs font-sora font-normal tracking-wider uppercase mb-3">
    Nossa Filosofia
  </div>

  {/* Título Principal */}
  <h2 className="font-sora text-3xl sm:text-5xl font-normal text-[#1D3557] tracking-tight leading-tight">
    A Arte da Gastronomia Francesa
  </h2>

  {/* Subtítulo / Descrição com mesmo peso uniforme */}
  <p className="mt-4 text-[#6B5E57] text-base font-sora font-normal leading-relaxed">
    Cada receita honra a tradição gastronômica francesa com respeito rigoroso aos processos artesanais.
  </p>
</div>
```

---

## 📌 Por que este modelo funciona tão bem?
1. **Harmonia Óptica:** Elimina o peso exagerado nos títulos, dando ar de revista e alta gastronomia.
2. **Equilíbrio Perfeito:** O espaçamento amplo entre letras (`tracking-wide`) compensa a espessura leve (400), mantendo legibilidade cristalina.
3. **Consistência:** A fonte Sora possui curvas geométricas suaves que combinam perfeitamente com fotografia artesanal e interfaces modernas.
