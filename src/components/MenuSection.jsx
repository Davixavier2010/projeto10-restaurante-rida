import React, { useState } from 'react';
import { MessageCircle, Sparkles, Flame, Check, Tag } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('viennoiserie');

  const categories = [
    { id: 'viennoiserie', label: 'Café & Viennoiserie' },
    { id: 'brunch', label: 'Brunch & Entradas' },
    { id: 'pratos', label: 'Pratos Principais' },
    { id: 'sobremesas', label: 'Sobremesas' },
    { id: 'vinhos', label: 'Carta de Vinhos' }
  ];

  const menuItems = {
    viennoiserie: [
      {
        id: 'v1',
        name: 'Croissant aux Amandes',
        tag: 'Destaque da Casa',
        badgeColor: 'bg-[#D48B1C]',
        desc: 'Massa folhada artesanal com pura manteiga DOP, recheio untuoso de frangipane de amêndoas e lâminas tostadas.',
        price: 'R$ 28,00',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
        details: 'Fermentação lenta 72h • 140g'
      },
      {
        id: 'v2',
        name: 'Pain au Chocolat Valrhona',
        tag: 'Clássico Francês',
        badgeColor: 'bg-[#1D3557]',
        desc: 'Dois bastões generosos de chocolate francês Valrhona 64% envoltos em massa folhada estaladiça e dourada.',
        price: 'R$ 26,00',
        image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=800&auto=format&fit=crop',
        details: 'Cacau sustentável • 130g'
      },
      {
        id: 'v3',
        name: 'Cappuccino Brûlé & Grãos Especiais',
        tag: 'Café Autoral',
        badgeColor: 'bg-[#8C7E75]',
        desc: 'Espresso duplo com leite vaporizado sedoso e casquinha caramelizada no maçarico com raspas de fava de baunilha.',
        price: 'R$ 22,00',
        image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=800&auto=format&fit=crop',
        details: 'Microlote Mogiana 88 pts • 200ml'
      }
    ],
    brunch: [
      {
        id: 'b1',
        name: 'Tartine Saumon Fumé & Avocat',
        tag: 'Favorito do Brunch',
        badgeColor: 'bg-[#2A6F97]',
        desc: 'Fatia tostada de pão de fermentação natural, creme de queijo de cabra artesanal, fatias de abacate e salmão gravlax curado na casa.',
        price: 'R$ 56,00',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop',
        details: 'Pão Levain • Azeite da Mantiqueira'
      },
      {
        id: 'b2',
        name: 'Oeufs Bénédicte au Jambon Cru',
        tag: 'Autoral',
        badgeColor: 'bg-[#D48B1C]',
        desc: 'Dois ovos orgânicos pochê perfeitos sobre brioche tostado, presunto cru artesanal e molho hollandaise aveludado.',
        price: 'R$ 52,00',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop',
        details: 'Ovos caipiras orgânicos'
      },
      {
        id: 'b3',
        name: 'Croque Monsieur Tradicional',
        tag: 'Herança Parisiense',
        badgeColor: 'bg-[#1D3557]',
        desc: 'Brioche caseiro, bechamel com noz-moscada fresca, presunto Royale e gratina generosa de queijo Gruyère francês.',
        price: 'R$ 48,00',
        image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop',
        details: 'Gruyère AOP de Savoie'
      }
    ],
    pratos: [
      {
        id: 'p1',
        name: 'Steak Frites au Poivre Vert',
        tag: 'Prato Assinatura',
        badgeColor: 'bg-[#C8644A]',
        desc: 'Corte nobre de filé mignon alto grelhado no ponto exato, molho demi-glace infusionado em pimenta verde fresca e batatas rústicas.',
        price: 'R$ 89,00',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
        details: 'Filé Angus 220g • Fritas crocantes'
      },
      {
        id: 'p2',
        name: 'Brunch Degustação Completo',
        tag: 'Para Compartilhar',
        badgeColor: 'bg-[#1D3557]',
        desc: 'Cesta com 2 viennoiseries, ovos mexidos cremosos, salmão curado, frutas da estação, manteiga batida, geleia da casa e café filtrado.',
        price: 'R$ 115,00',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
        details: 'Serve 2 pessoas • Brunch completo'
      }
    ],
    sobremesas: [
      {
        id: 's1',
        name: 'Crème Brûlée à la Vanille de Bourbon',
        tag: 'Sobremesa Estrela',
        badgeColor: 'bg-[#D48B1C]',
        desc: 'Creme sedoso infuso em fava de baunilha de Madagascar com casquinha crocante de açúcar queimado na hora.',
        price: 'R$ 34,00',
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=800&auto=format&fit=crop',
        details: 'Gemas frescas • Baunilha pura'
      }
    ],
    vinhos: [
      {
        id: 'w1',
        name: 'Bordeaux Rouge AOC • Château Vignoble',
        tag: 'Seleção do Sommelier',
        badgeColor: 'bg-[#1D3557]',
        desc: 'Blend equilibrado de Merlot e Cabernet Sauvignon. Notas de frutas vermelhas maduras, cedro e taninos sedosos.',
        price: 'R$ 185,00',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
        details: 'Garrafa 750ml • Safra 2021'
      }
    ]
  };

  const currentList = menuItems[activeTab] || [];

  return (
    <section id="cardapio" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D48B1C]/10 text-[#D48B1C] text-xs font-sora font-normal tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Nosso Cardápio Autoral
        </div>
        <h2 className="font-sora text-3xl sm:text-5xl font-normal text-[#1D3557] tracking-tight">
          Sabores Preparados Diariamente com Cuidado
        </h2>
        <p className="mt-4 text-[#6B5E57] text-base leading-relaxed font-sora font-normal">
          Navegue pelas nossas criações de viennoiserie, café de origem, brunch parisiense e pratos clássicos de bistrô.
        </p>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-sora font-normal transition-all duration-200 active:scale-[0.97] ${
                  isActive
                    ? 'bg-[#1D3557] text-white shadow-md'
                    : 'bg-white hover:bg-[#F2EDE4] text-[#2C221E] border border-[#E8E2D5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentList.map((item) => (
          <div
            key={item.id}
            className="card-bistro rounded-2xl overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE4]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] font-sora uppercase tracking-wider font-normal text-white px-2.5 py-1 rounded-full shadow-sm ${item.badgeColor}`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Dish Info */}
              <div className="p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-sora text-base sm:text-lg font-normal text-[#1D3557] group-hover:text-[#D48B1C] transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="text-[11px] font-sora font-normal text-[#8C7E75] mt-1">
                  {item.details}
                </div>

                <p className="text-xs sm:text-sm text-[#6B5E57] mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Bottom Price & Order CTA */}
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-[#F2EDE4] flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-sora text-[#8C7E75] uppercase block font-normal">
                  Valor
                </span>
                <span className="font-sora text-lg sm:text-xl font-normal text-[#1D3557]">
                  {item.price}
                </span>
              </div>

              <a
                href={`https://wa.me/5512974070207?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20o%20${encodeURIComponent(
                  item.name
                )}%20(${item.price})%20do%20Le%20Petit%20Bleu.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full btn-bistro-gold text-xs font-mono font-bold tracking-wide"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>Pedir no WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
