import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Search, Calendar, User, Tag, ArrowRight, X } from 'lucide-react';

interface BlogPageProps {
  onNavigate?: (page: string) => void;
}

const categories = ['Todos', 'Legislação', 'Segurança', 'Saúde', 'Gestão', 'Treinamento'];

const blogPosts = [
  {
    id: 1,
    title: 'Principais Mudanças na NR-1 em 2024',
    excerpt: 'Entenda as atualizações mais recentes e como adequar sua empresa às novas exigências da Norma Regulamentadora.',
    author: 'Dr. Carlos Silva',
    date: '15 Mai 2026',
    category: 'Legislação',
    image: 'bg-gradient-to-br from-blue-500 to-blue-700',
    readTime: '5 min',
    fullContent: 'A NR-1 passou por importantes atualizações em 2024, trazendo novos requisitos para o Gerenciamento de Riscos Ocupacionais. As empresas agora precisam implementar sistemas mais robustos de identificação e controle de riscos, com documentação detalhada e treinamentos específicos. Esta mudança visa aumentar a segurança dos trabalhadores e reduzir acidentes de trabalho. É fundamental que todas as organizações se adequem aos novos padrões dentro dos prazos estabelecidos pelo Ministério do Trabalho.',
  },
  {
    id: 2,
    title: 'Gestão de Riscos: Métodos Práticos',
    excerpt: 'Aprenda técnicas eficazes para identificar, avaliar e controlar riscos ocupacionais em sua organização.',
    author: 'Eng. Ana Santos',
    date: '12 Mai 2026',
    category: 'Gestão',
    image: 'bg-gradient-to-br from-green-500 to-green-700',
    readTime: '7 min',
    fullContent: 'A gestão eficaz de riscos ocupacionais requer metodologia estruturada e participação ativa de todos os níveis da organização. Comece com um inventário completo de riscos, utilizando ferramentas como APR (Análise Preliminar de Riscos) e FMEA. Implemente controles hierárquicos, priorizando eliminação, substituição, controles de engenharia, administrativos e, por último, EPIs. O monitoramento contínuo é essencial para garantir a eficácia das medidas adotadas.',
  },
  {
    id: 3,
    title: 'EPIs: Seleção e Uso Adequado',
    excerpt: 'Guia completo sobre como escolher e utilizar corretamente os Equipamentos de Proteção Individual.',
    author: 'Maria Oliveira',
    date: '10 Mai 2026',
    category: 'Segurança',
    image: 'bg-gradient-to-br from-purple-500 to-purple-700',
    readTime: '6 min',
    fullContent: 'A seleção adequada de EPIs deve considerar os riscos específicos de cada atividade, características do trabalhador e condições ambientais. É fundamental verificar certificações (CA), prazo de validade e condições de armazenamento. O treinamento para uso correto é obrigatório e deve incluir demonstração prática, conservação e limitações do equipamento. Mantenha registros de entrega e realize inspeções periódicas.',
  },
  {
    id: 4,
    title: 'Saúde Mental no Ambiente de Trabalho',
    excerpt: 'A importância de programas de saúde mental e bem-estar para prevenir doenças ocupacionais.',
    author: 'Dra. Paula Costa',
    date: '8 Mai 2026',
    category: 'Saúde',
    image: 'bg-gradient-to-br from-orange-500 to-orange-700',
    readTime: '8 min',
    fullContent: 'A saúde mental dos trabalhadores é tão importante quanto a física. Programas de bem-estar devem incluir apoio psicológico, gestão de estresse, promoção de equilíbrio vida-trabalho e cultura organizacional saudável. Identifique fatores de risco psicossociais como sobrecarga, assédio e pressão excessiva. Crie canais de comunicação seguros e ofereça suporte profissional quando necessário. A prevenção é mais eficaz que a remediação.',
  },
  {
    id: 5,
    title: 'Treinamento Eficaz em SST',
    excerpt: 'Estratégias para criar programas de treinamento que realmente engajem e capacitem sua equipe.',
    author: 'Prof. João Ferreira',
    date: '5 Mai 2026',
    category: 'Treinamento',
    image: 'bg-gradient-to-br from-red-500 to-red-700',
    readTime: '6 min',
    fullContent: 'Treinamentos eficazes vão além da simples transmissão de informações. Use metodologias ativas como simulações, estudos de caso e práticas hands-on. Adapte o conteúdo ao público, utilize linguagem acessível e recursos visuais. Avalie a aprendizagem através de exercícios práticos, não apenas testes teóricos. Realize reciclagens periódicas e mantenha registros detalhados de todos os treinamentos realizados.',
  },
  {
    id: 6,
    title: 'Auditoria de Conformidade: Checklist Essencial',
    excerpt: 'Passo a passo para realizar uma auditoria completa e garantir a conformidade com as normas.',
    author: 'Esp. Ricardo Alves',
    date: '2 Mai 2026',
    category: 'Gestão',
    image: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    readTime: '9 min',
    fullContent: 'Uma auditoria de conformidade eficaz segue metodologia estruturada: planejamento, execução, análise e relatório. Verifique documentação obrigatória (PGR, PCMSO, laudos), condições de trabalho, treinamentos e registros. Entreviste trabalhadores e gestores para validar processos. Identifique não conformidades e classifique por gravidade. Apresente relatório detalhado com recomendações priorizadas e prazos realistas para adequação.',
  },
];

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const currentPost = blogPosts.find(p => p.id === selectedPost);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = currentPost ? `${currentPost.title} - ${window.location.href}` : '';
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <AnimatePresence>
        {selectedPost && currentPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className={`${currentPost.image} h-48 relative`}>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-semibold">
                    {currentPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{currentPost.date}</span>
                  </div>
                  <span>•</span>
                  <span>{currentPost.readTime}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentPost.title}
                </h1>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <User className="w-5 h-5" />
                  <span className="font-semibold">{currentPost.author}</span>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {currentPost.fullContent}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Compartilhe este artigo</h3>
                  <div className="flex gap-3">
                    <button
                      onClick={handleShareLinkedIn}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={handleShareWhatsApp}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      WhatsApp
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        copiedLink
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      {copiedLink ? 'Link Copiado!' : 'Copiar Link'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog NR-1
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Notícias, artigos e insights sobre Segurança e Saúde no Trabalho
          </p>
          <div className="mt-6 flex flex-wrap justify-start gap-3">
            <button
              onClick={() => onNavigate?.('training')}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Ver treinamentos
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              Contato
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Buscar artigos no blog"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedPost(post.id)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`${post.image} h-48 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <span className="relative z-10 text-white text-sm font-semibold px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>

                  <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Nenhum artigo encontrado com os filtros selecionados.
            </p>
          </motion.div>
        )}
      </div>
    </div>
    </>
  );
}
