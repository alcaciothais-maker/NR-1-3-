import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { GraduationCap, Clock, Users, Award, PlayCircle, CheckCircle, BookOpen, X, ArrowRight } from 'lucide-react';

interface TrainingPageProps {
  onNavigate?: (page: string) => void;
}

const courses = [
  {
    id: 1,
    title: 'Introdução à NR-1',
    description: 'Fundamentos e aplicação da Norma Regulamentadora nº 1',
    duration: '4 horas',
    students: 1250,
    level: 'Básico',
    progress: 100,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Gerenciamento de Riscos Ocupacionais',
    description: 'Técnicas avançadas de identificação e controle de riscos',
    duration: '8 horas',
    students: 890,
    level: 'Intermediário',
    progress: 65,
    color: 'bg-green-500',
  },
  {
    id: 3,
    title: 'Auditorias de Segurança',
    description: 'Metodologias de auditoria e verificação de conformidade',
    duration: '6 horas',
    students: 645,
    level: 'Avançado',
    progress: 30,
    color: 'bg-purple-500',
  },
  {
    id: 4,
    title: 'Gestão Documental em SST',
    description: 'Organização e controle de documentos de segurança',
    duration: '3 horas',
    students: 980,
    level: 'Básico',
    progress: 0,
    color: 'bg-orange-500',
  },
];

const certifications = [
  { name: 'Especialista em NR-1', holders: 234, icon: Award },
  { name: 'Auditor de SST', holders: 189, icon: GraduationCap },
  { name: 'Gestor de Riscos', holders: 312, icon: BookOpen },
];

const courseFilters = [
  { value: 'all', label: 'Todos' },
  { value: 'active', label: 'Em andamento' },
  { value: 'complete', label: 'Concluídos' },
] as const;

export default function TrainingPage({ onNavigate }: TrainingPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showCertModal, setShowCertModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<(typeof courseFilters)[number]['value']>('all');

  const currentCourse = courses.find(c => c.id === selectedCourse);
  const filteredCourses = courses.filter((course) => {
    if (activeFilter === 'active') return course.progress > 0 && course.progress < 100;
    if (activeFilter === 'complete') return course.progress === 100;
    return true;
  });

  return (
    <>
      <AnimatePresence>
        {selectedCourse && currentCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className={`${currentCourse.color} p-6 text-white relative`}>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <GraduationCap className="w-12 h-12 mb-3" />
                <h2 className="text-2xl font-bold mb-2">{currentCourse.title}</h2>
                <p className="text-white/90">{currentCourse.description}</p>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duração</p>
                    <p className="font-bold text-gray-900 dark:text-white">{currentCourse.duration}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Alunos</p>
                    <p className="font-bold text-gray-900 dark:text-white">{currentCourse.students}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <Award className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Nível</p>
                    <p className="font-bold text-gray-900 dark:text-white">{currentCourse.level}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Conteúdo do Curso</h3>
                  <ul className="space-y-2">
                    {['Introdução e conceitos fundamentais', 'Aplicação prática', 'Estudos de caso', 'Exercícios e avaliações', 'Certificação final'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full ${currentCourse.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all`}>
                  {currentCourse.progress === 100 ? 'Obter Certificado' : currentCourse.progress > 0 ? 'Continuar Curso' : 'Iniciar Curso'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showCertModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCertModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8"
            >
              <div className="text-center">
                <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Certificações Profissionais
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Complete os cursos para obter certificações reconhecidas nacionalmente
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 text-left">
                      <h3 className="font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.holders} profissionais certificados</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="mt-6 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Fechar
                </button>
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
            Treinamentos e Capacitações
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Desenvolva suas competências em Segurança e Saúde no Trabalho
          </p>
          <div className="mt-6 flex flex-wrap justify-start gap-3">
            <button
              onClick={() => onNavigate?.('checklist')}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Acessar checklist
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate?.('blog')}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              Ler blog
            </button>
          </div>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-3">
          {courseFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 rounded-xl shadow-xl p-6 text-white"
              >
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-blue-100">{cert.holders} profissionais certificados</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedCourse(course.id)}
            >
              <div className={`${course.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {course.description}
                    </p>
                  </div>
                  <div className={`${course.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ml-4`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students} alunos</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-semibold">
                    {course.level}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Progresso</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className={`${course.color} h-2 rounded-full`}
                    ></motion.div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  {course.progress === 100 ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Revisar Curso
                    </>
                  ) : course.progress > 0 ? (
                    <>
                      <PlayCircle className="w-5 h-5" />
                      Continuar Treinamento
                    </>
                  ) : (
                    <>
                      <PlayCircle className="w-5 h-5" />
                      Iniciar Treinamento
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-950 rounded-xl shadow-xl p-8 text-center"
        >
          <Award className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Certificação Profissional
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Complete os treinamentos e obtenha certificações reconhecidas nacionalmente
            em Segurança e Saúde no Trabalho
          </p>
          <button
            onClick={() => setShowCertModal(true)}
            className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg"
          >
            Ver Certificações Disponíveis
          </button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
