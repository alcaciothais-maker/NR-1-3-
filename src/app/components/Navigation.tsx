import { Home, Shield, TrendingUp, GraduationCap, CheckSquare, BookOpen, Mail, Moon, Sun, Contrast } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'Sobre a NR-1', icon: Shield },
  { id: 'risks', label: 'Gerenciamento de Riscos', icon: TrendingUp },
  { id: 'training', label: 'Treinamentos', icon: GraduationCap },
  { id: 'checklist', label: 'Checklist', icon: CheckSquare },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contato', icon: Mail },
];

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const { darkMode, highContrast, toggleDarkMode, toggleHighContrast } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
              <Shield className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-base font-semibold text-slate-900 dark:text-white">NR-1 Portal</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Segurança e conformidade</div>
            </div>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                  aria-label={item.label}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="rounded-full bg-slate-100 p-2.5 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-label="Alternar modo escuro"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleHighContrast}
              className="rounded-full bg-slate-100 p-2.5 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-label="Alternar alto contraste"
            >
              <Contrast className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex-shrink-0 flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
