import { motion } from 'motion/react';
import { ShieldCheck, BookOpen, FileSearch, Sparkles, ArrowLeft } from 'lucide-react';

interface AboutDetailsPageProps {
  userData: {
    name: string;
    company: string;
    role: string;
  };
  onNavigate: (page: string) => void;
}

export default function AboutDetailsPage({ userData, onNavigate }: AboutDetailsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('about')}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-gray-800 dark:text-slate-200"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </button>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white p-10 shadow-2xl dark:bg-gray-900"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Detalhes da NR-1</h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                Uma visão aprofundada da norma, com recomendações adaptadas para sua empresa.
              </p>
            </div>
            <div className="rounded-3xl bg-blue-600/10 px-5 py-4 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200">
              <p className="text-sm font-semibold">Usuário</p>
              <p className="mt-2 text-lg font-bold">{userData.name || 'Visitante'}</p>
              <p className="text-sm">{userData.role || 'Função não informada'}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{userData.company || 'Empresa não informada'}</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-50 p-6 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">O que você precisa saber</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  A NR-1 estabelece o conceito geral da Segurança e Saúde no Trabalho e define o Gerenciamento de Riscos Ocupacionais.
                  Para {userData.company || 'sua organização'}, isso significa estruturar políticas claras e um fluxo de análise de riscos consistente.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-3">
                  <FileSearch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Como aplicar</h2>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                    Identifique riscos nas suas áreas operacionais e documente os resultados.
                  </li>
                  <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                    Estruture um plano de ação e envolva líderes para que as medidas sejam adotadas continuamente.
                  </li>
                  <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                    Capacite sua equipe com treinamentos regulares e avaliações de entendimento.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-blue-600 p-6 text-white shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <Sparkles className="h-6 w-6" />
                  <h2 className="text-2xl font-semibold">Sugestão personalizada</h2>
                </div>
                <p className="text-slate-100">
                  Baseado no seu perfil, recomendamos atualizar com urgência seu processo de gestão de riscos e aumentar a comunicação entre a equipe.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Próximos passos</h3>
                <ol className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">Revisar as responsabilidades definidas na NR-1 com sua equipe.</li>
                  <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">Planejar treinamentos de capacitação para os próximos 30 dias.</li>
                  <li className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">Atualizar o inventário de riscos e validar controles.</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
