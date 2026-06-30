import { motion } from 'motion/react';
import { useState } from 'react';
import { Shield, Target, Users, FileCheck, AlertTriangle, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const objectives = [
  {
    icon: Target,
    title: 'Objetivo Principal',
    description: 'Estabelecer diretrizes gerais sobre Segurança e Saúde no Trabalho (SST) aplicáveis a todos os empregadores e trabalhadores.',
  },
  {
    icon: Users,
    title: 'Responsabilidades',
    description: 'Definir responsabilidades de empregadores, trabalhadores e demais envolvidos na cadeia produtiva.',
  },
  {
    icon: FileCheck,
    title: 'Gestão de Riscos',
    description: 'Implementar o Gerenciamento de Riscos Ocupacionais (GRO) para identificar perigos e avaliar riscos.',
  },
];

const principles = [
  { title: 'Prevenção de Acidentes', icon: Shield },
  { title: 'Gestão Participativa', icon: Users },
  { title: 'Conformidade Legal', icon: FileCheck },
  { title: 'Melhoria Contínua', icon: TrendingUp },
  { title: 'Análise de Riscos', icon: AlertTriangle },
  { title: 'Monitoramento Constante', icon: CheckCircle },
];

const structureItems = [
  {
    number: '1.1',
    title: 'Objeto e Campo de Aplicação',
    description:
      'Define o propósito da NR-1 e o âmbito de sua aplicação na segurança e saúde no trabalho, incluindo empregadores, trabalhadores e ambientes controlados.',
  },
  {
    number: '1.2',
    title: 'Termos e Definições',
    description:
      'Apresenta os conceitos básicos utilizados em todas as Normas Regulamentadoras, como perigo, risco e medidas de proteção.',
  },
  {
    number: '1.3',
    title: 'Direitos e Deveres',
    description:
      'Estabelece as responsabilidades dos empregadores e trabalhadores na adoção de práticas seguras e na prevenção de acidentes.',
  },
  {
    number: '1.4',
    title: 'Capacitação em SST',
    description:
      'Determina que os trabalhadores recebam informações, treinamentos e capacitação adequados à sua função e aos riscos envolvidos.',
  },
  {
    number: '1.5',
    title: 'Gerenciamento de Riscos Ocupacionais (GRO)',
    description:
      'Institui o processo de identificação, avaliação e controle de riscos, sendo a base para a gestão de segurança dentro da empresa.',
  },
  {
    number: '1.6',
    title: 'Disposições Finais',
    description:
      'Contém orientações gerais sobre aplicação, fiscalização e ajustes futuros das normas para garantir a conformidade contínua.',
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(null);
  const currentStructure = structureItems.find((item) => item.number === selectedStructure);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre a NR-1
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Norma Regulamentadora nº 1 - Disposições Gerais e Gerenciamento de Riscos Ocupacionais
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate?.('about-details')}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Ver detalhes NR-1
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate?.('about-details')}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              Orientações personalizadas
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            O que é a NR-1?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Norma Regulamentadora nº 1 (NR-1) é a norma fundamental que estabelece as disposições gerais,
              campo de aplicação, termos e definições comuns às Normas Regulamentadoras relativas à
              Segurança e Saúde no Trabalho (SST).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Atualizada em 2020, a NR-1 trouxe importantes mudanças, destacando-se a implementação do
              Gerenciamento de Riscos Ocupacionais (GRO), que estabelece requisitos para a gestão de riscos
              ocupacionais e medidas de prevenção em processos e ambientes de trabalho.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {objectives.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {obj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {obj.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 rounded-xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Princípios Fundamentais
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all"
                >
                  <Icon className="w-10 h-10 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold">{principle.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Estrutura da NR-1
          </h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              {structureItems.map((item, index) => (
                <motion.button
                  key={item.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedStructure(item.number)}
                  className={`w-full text-left rounded-2xl border px-5 py-4 transition-all ${
                    selectedStructure === item.number
                      ? 'border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/50'
                      : 'border-gray-200 bg-gray-50 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500 dark:hover:bg-blue-900/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 dark:bg-blue-500 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold">
                      {item.number}
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-semibold">{item.title}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6 dark:border-gray-700 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Detalhes selecionados</h3>
              {currentStructure ? (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{currentStructure.number}</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {currentStructure.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">{currentStructure.description}</p>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">Clique em qualquer tópico à esquerda para ver a explicação detalhada.</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
