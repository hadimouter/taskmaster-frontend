import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import AuthModal from '../components/AuthModal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const features = [
    { title: "Organisation Simple", description: "Gérez vos tâches facilement" },
    { title: "Priorités", description: "Définissez l'importance de chaque tâche" },
    { title: "Suivi", description: "Visualisez votre progression" },
  ];

  const handleAuthClick = (type) => {
    setModalContent(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200">
      <nav className="bg-transparent backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
              TaskMaster
            </h1>
            <div className="flex space-x-6">
              <button
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                onClick={() => handleAuthClick('login')}
              >
                Connexion
              </button>
              <button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                onClick={() => handleAuthClick('register')}
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-6 sm:py-24 sm:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Simplifiez votre gestion de tâches
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Une application intuitive pour organiser et suivre vos tâches quotidiennes
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => handleAuthClick('register')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-indigo-700"
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="relative">
                <div className="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalContent}
        setModalContent={setModalContent}
      />
    </div>
  );
};

export default LandingPage;
