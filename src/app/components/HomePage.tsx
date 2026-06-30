import { motion } from 'motion/react';
import { Shield, Users, FileText, Award, TrendingUp, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  userProfile?: {
    name: string;
    company: string;
    role: string;
  };
}

const features = [
  {
    icon: Shield,
    title: 'Segurança em Primeiro Lugar',
    description: 'Conformidade total com as diretrizes da NR-1 para ambiente de trabalho seguro',
    color: 'bg-blue-500',
    page: 'about' as const,
  },
  {
    icon: Users,
    title: 'Treinamento Contínuo',
    description: 'Programas de capacitação e desenvolvimento de equipes',
    color: 'bg-green-500',
    page: 'training' as const,
  },
  {
    icon: FileText,
    title: 'Gestão Documental',
    description: 'Organização e controle de toda documentação de segurança',
    color: 'bg-purple-500',
    page: 'checklist' as const,
  },
  {
    icon: Award,
    title: 'Certificações',
    description: 'Reconhecimento e certificações em segurança do trabalho',
    color: 'bg-orange-500',
    page: 'training' as const,
  },
  {
    icon: TrendingUp,
    title: 'Análise de Riscos',
    description: 'Identificação e gestão proativa de riscos ocupacionais',
    color: 'bg-red-500',
    page: 'risks' as const,
  },
  {
    icon: BookOpen,
    title: 'Base de Conhecimento',
    description: 'Acesso a conteúdos e materiais educativos especializados',
    color: 'bg-indigo-500',
    page: 'blog' as const,
  },
];

const stats = [
  { value: '100%', label: 'Conformidade Legal' },
  { value: '500+', label: 'Empresas Atendidas' },
  { value: '50k+', label: 'Profissionais Treinados' },
  { value: '24/7', label: 'Suporte Técnico' },
];

export default function HomePage({ onNavigate, userProfile }: HomePageProps) {
  const greeting = userProfile?.name ? `Olá, ${userProfile.name}!` : 'Bem-vindo!';
  const roleText = userProfile?.role ? `Como ${userProfile.role}, você pode usar nossa plataforma para fortalecer a segurança da sua equipe.` : 'Use nossa plataforma para fortalecer a segurança da sua equipe.';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 py-20"
      >
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-3"
          >
            NR-1: Disposições Gerais e Gerenciamento de Riscos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-blue-100 mb-4"
          >
            {greeting} {roleText}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Sua plataforma completa para gestão de segurança e saúde no trabalho,
            seguindo as diretrizes da Norma Regulamentadora nº 1
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => onNavigate('training')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-50"
            >
              Começar Agora
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="rounded-full border border-white/40 bg-blue-700 px-7 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-600"
            >
              Saiba Mais
            </button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossas Soluções
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ferramentas completas para garantir a segurança e conformidade da sua empresa
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => onNavigate(feature.page)}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl dark:border-slate-700 dark:bg-gray-800"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`${feature.color} flex h-12 w-12 items-center justify-center rounded-xl`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Transforme a gestão de segurança da sua empresa com nossas ferramentas especializadas
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-50"
            >
              Agende uma Demonstração
              <Sparkles className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
