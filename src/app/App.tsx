import { useState, type FormEvent, type ChangeEvent } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AboutDetailsPage from './components/AboutDetailsPage';
import RiskManagementPage from './components/RiskManagementPage';
import TrainingPage from './components/TrainingPage';
import ChecklistPage from './components/ChecklistPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import FloatingChat from './components/FloatingChat';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '', name: '', company: '', role: '' });
  const [loginError, setLoginError] = useState('');
  const [userProfile, setUserProfile] = useState({ name: '', company: '', role: '' });

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!loginData.email.trim() || !loginData.password.trim()) {
      setLoginError('Por favor informe seu e-mail e senha.');
      return;
    }
    if (!loginData.name.trim() || !loginData.company.trim() || !loginData.role.trim()) {
      setLoginError('Preencha todas as informações de perfil.');
      return;
    }
    setLoginError('');
    setLoggedIn(true);
    setUserProfile({
      name: loginData.name,
      company: loginData.company,
      role: loginData.role,
    });
  };

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} userProfile={userProfile} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'about-details':
        return <AboutDetailsPage userData={userProfile} onNavigate={handleNavigation} />;
      case 'risks':
        return <RiskManagementPage onNavigate={handleNavigation} userProfile={userProfile} />;
      case 'training':
        return <TrainingPage onNavigate={handleNavigation} />;
      case 'checklist':
        return <ChecklistPage onNavigate={handleNavigation} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigation} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  if (!loggedIn) {
    return (
      <ThemeProvider>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-4 py-12 text-white">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500 text-white shadow-lg">
                <span className="text-2xl font-bold">NR</span>
              </div>
              <h1 className="text-3xl font-semibold">Entrar no NR-1 Portal</h1>
              <p className="mt-2 text-sm text-slate-300">
                Use suas informações para personalizar a experiência dentro do site.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-300">
                  Nome Completo
                  <input
                    type="text"
                    name="name"
                    value={loginData.name}
                    onChange={handleLoginChange}
                    className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                    placeholder="Seu nome"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-300">
                  Empresa
                  <input
                    type="text"
                    name="company"
                    value={loginData.company}
                    onChange={handleLoginChange}
                    className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                    placeholder="Sua empresa"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-300">
                Cargo
                <input
                  type="text"
                  name="role"
                  value={loginData.role}
                  onChange={handleLoginChange}
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                  placeholder="Seu cargo"
                />
              </label>

              <label className="block text-sm font-medium text-slate-300">
                E-mail
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </label>

              <label className="block text-sm font-medium text-slate-300">
                Senha
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                  placeholder="Sua senha"
                />
              </label>

              {loginError && <p className="text-sm text-rose-400">{loginError}</p>}

              <button
                type="submit"
                className="w-full rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Entrar
              </button>

              <p className="text-center text-xs text-slate-500">
                Ao entrar, você terá acesso imediato a todas as seções do site.
              </p>
            </form>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
        <Navigation currentPage={currentPage} onPageChange={handleNavigation} />
        <main>{renderPage()}</main>
        <FloatingChat />
      </div>
    </ThemeProvider>
  );
}