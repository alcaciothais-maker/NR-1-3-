import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckSquare, Square, Download, Share2, RotateCcw, ArrowRight, ChevronDown } from 'lucide-react';

interface ChecklistPageProps {
  onNavigate?: (page: string) => void;
}

interface ChecklistItem {
  id: number;
  category: string;
  items: {
    id: number;
    text: string;
    checked: boolean;
  }[];
}

const initialChecklist: ChecklistItem[] = [
  {
    id: 1,
    category: 'Documentação Obrigatória',
    items: [
      { id: 1, text: 'PGR - Programa de Gerenciamento de Riscos atualizado', checked: false },
      { id: 2, text: 'PCMSO - Programa de Controle Médico de Saúde Ocupacional', checked: false },
      { id: 3, text: 'LTCAT - Laudo Técnico das Condições Ambientais de Trabalho', checked: false },
      { id: 4, text: 'Registros de treinamentos obrigatórios', checked: false },
      { id: 5, text: 'Documentação de EPIs fornecidos', checked: false },
    ],
  },
  {
    id: 2,
    category: 'Gestão de Riscos',
    items: [
      { id: 6, text: 'Inventário de riscos ocupacionais completo', checked: false },
      { id: 7, text: 'Análise preliminar de riscos (APR) realizada', checked: false },
      { id: 8, text: 'Medidas de controle implementadas', checked: false },
      { id: 9, text: 'Monitoramento contínuo de riscos', checked: false },
      { id: 10, text: 'Plano de ação para riscos críticos', checked: false },
    ],
  },
  {
    id: 3,
    category: 'Treinamentos e Capacitação',
    items: [
      { id: 11, text: 'Treinamento admissional de segurança', checked: false },
      { id: 12, text: 'Capacitação sobre uso de EPIs', checked: false },
      { id: 13, text: 'Treinamento de primeiros socorros', checked: false },
      { id: 14, text: 'Simulados de emergência realizados', checked: false },
      { id: 15, text: 'Reciclagem periódica de treinamentos', checked: false },
    ],
  },
  {
    id: 4,
    category: 'Inspeções e Auditorias',
    items: [
      { id: 16, text: 'Inspeções de segurança mensais', checked: false },
      { id: 17, text: 'Verificação de equipamentos de proteção', checked: false },
      { id: 18, text: 'Auditoria interna de conformidade', checked: false },
      { id: 19, text: 'Relatórios de não conformidades', checked: false },
      { id: 20, text: 'Plano de melhorias implementado', checked: false },
    ],
  },
];

export default function ChecklistPage({ onNavigate }: ChecklistPageProps) {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);
  const [collapsedCategories, setCollapsedCategories] = useState<number[]>([]);

  const toggleItem = (categoryId: number, itemId: number) => {
    setChecklist(
      checklist.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
              ),
            }
          : category
      )
    );
  };

  const toggleCategoryCollapse = (categoryId: number) => {
    setCollapsedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  const setCategoryItems = (categoryId: number, checked: boolean) => {
    setChecklist(
      checklist.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.map((item) => ({ ...item, checked })),
            }
          : category
      )
    );
  };

  const markAll = () => {
    setChecklist(
      checklist.map((category) => ({
        ...category,
        items: category.items.map((item) => ({ ...item, checked: true })),
      }))
    );
  };

  const unmarkAll = () => {
    setChecklist(
      checklist.map((category) => ({
        ...category,
        items: category.items.map((item) => ({ ...item, checked: false })),
      }))
    );
  };

  const resetChecklist = () => {
    setChecklist(
      checklist.map((category) => ({
        ...category,
        items: category.items.map((item) => ({ ...item, checked: false })),
      }))
    );
  };

  const totalItems = checklist.reduce((sum, category) => sum + category.items.length, 0);
  const checkedItems = checklist.reduce(
    (sum, category) => sum + category.items.filter((item) => item.checked).length,
    0
  );
  const progress = Math.round((checkedItems / totalItems) * 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Checklist de Conformidade NR-1
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Verifique o cumprimento dos requisitos essenciais
          </p>
          <div className="mt-6 flex flex-wrap justify-start gap-3">
            <button
              onClick={() => onNavigate?.('training')}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Voltar aos treinamentos
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate?.('blog')}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              Abrir blog
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Progresso Geral
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {checkedItems} de {totalItems} itens concluídos
              </p>
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {progress}%
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
              className={`h-4 rounded-full ${
                progress === 100
                  ? 'bg-green-500'
                  : progress >= 50
                  ? 'bg-blue-500'
                  : 'bg-orange-500'
              }`}
            ></motion.div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={markAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <CheckSquare className="w-4 h-4" />
              Marcar todos
            </button>
            <button
              onClick={unmarkAll}
              className="flex-1 bg-slate-500 hover:bg-slate-600 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Square className="w-4 h-4" />
              Desmarcar todos
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Exportar PDF
            </button>
            <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={resetChecklist}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              <RotateCcw className="w-4 h-4" />
              Resetar checklist
            </button>
          </div>
        </motion.div>

        <div className="space-y-6">
          {checklist.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-blue-600 dark:bg-blue-700 px-6 py-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <p className="text-blue-100 text-sm">
                    {category.items.filter((item) => item.checked).length} de {category.items.length} completos
                  </p>
                </div>
                <button
                  onClick={() => toggleCategoryCollapse(category.id)}
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                  aria-label={collapsedCategories.includes(category.id) ? 'Expandir categoria' : 'Recolher categoria'}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${collapsedCategories.includes(category.id) ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Progresso da categoria</p>
                  <button
                    onClick={() => setCategoryItems(category.id, true)}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Marcar todos
                  </button>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${Math.round((category.items.filter((item) => item.checked).length / category.items.length) * 100)}%` }}
                  />
                </div>
                {!collapsedCategories.includes(category.id) && (
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + catIndex * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                      item.checked
                        ? 'bg-green-50 dark:bg-green-900/20'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => toggleItem(category.id, item.id)}
                  >
                    <button
                      className={`flex-shrink-0 w-6 h-6 rounded transition-colors ${
                        item.checked
                          ? 'bg-green-500 text-white'
                          : 'bg-white dark:bg-gray-600 border-2 border-gray-300 dark:border-gray-500'
                      }`}
                      aria-label={item.checked ? 'Marcar como não concluído' : 'Marcar como concluído'}
                    >
                      {item.checked ? (
                        <CheckSquare className="w-6 h-6" />
                      ) : (
                        <Square className="w-6 h-6" />
                      )}
                    </button>
                    <span
                      className={`flex-1 ${
                        item.checked
                          ? 'text-gray-500 dark:text-gray-400 line-through'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
           {lista.map((item, index) => (
  <motion.div key={index}>
    <div>
      {item.nome}
    </div>
  </motion.div>
))}