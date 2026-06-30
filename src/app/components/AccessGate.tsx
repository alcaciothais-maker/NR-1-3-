import { AnimatePresence, motion } from 'motion/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Lock, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface AccessGateProps {
  open: boolean;
  onClose: () => void;
  onGrant: () => void;
  targetPageLabel: string;
}

export default function AccessGate({ open, onClose, onGrant, targetPageLabel }: AccessGateProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      onGrant();
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 16 }}
            className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-slate-900"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Solicitar acesso à {targetPageLabel}
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Esta área é restrita e exige autorização para proteger informações e recursos internos.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/30">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Solicitação enviada com sucesso
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Sua solicitação foi registrada. Em breve, a equipe liberará o acesso.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Nome completo
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      placeholder="Seu nome"
                    />
                  </label>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    E-mail corporativo
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      placeholder="seu@empresa.com"
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Empresa ou área
                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    placeholder="Nome da empresa"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Motivo da solicitação
                  <textarea
                    required
                    name="reason"
                    rows={4}
                    value={formData.reason}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    placeholder="Descreva por que precisa acessar esta área"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/70">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    Resposta rápida e acompanhamento especializado.
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                    Enviar solicitação
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
