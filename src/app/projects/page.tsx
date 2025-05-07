'use client';

import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

// Teknoloji renkleri
const techColors: { [key: string]: string } = {
  'Wordpress': 'bg-[#21759B] text-white',
  'Elementor': 'bg-[#92003B] text-white',
  'ACF': 'bg-[#2A2A2A] text-white',
  'CPTUI': 'bg-[#0073AA] text-white',
  'Javascript': 'bg-[#F7DF1E] text-black',
  'Figma': 'bg-[#F24E1E] text-white',
  'VanillaJS': 'bg-[#F7DF1E] text-black',
  'CSS': 'bg-[#1572B6] text-white',
  'Firebase': 'bg-[#FFCA28] text-black',
  'NextJS': 'bg-[#000000] text-white',
  'Vercel': 'bg-[#000000] text-white',
  'TailwindCSS': 'bg-[#06B6D4] text-white',
  'React': 'bg-[#61DAFB] text-black',
  'Socket.io': 'bg-[#010101] text-white',
  'Bookly': 'bg-[#E44D26] text-white',
};

// Dummy data for projects
const projects = [
  {
    id: 1,
    title: 'Firma ve Ürün Tanıtımı',
    description: 'Firmanın çoklu dil desteği ile tanıtımı ve ürünlerinin listelenmesi',
    thumbnail: '/images/projects/business.png',
    technologies: ['Wordpress', 'Elementor', 'ACF', 'CPTUI', 'Javascript'],
  },
  {
    id: 2,
    title: 'Dijital Ajans Sitesi',
    description: 'Ajansın hizmetleri ile ilgili tanıtımları',
    thumbnail: '/images/projects/agency1.png',
    technologies: ['Figma', 'VanillaJS', 'CSS', 'Firebase'],
  },
  {
    id: 3,
    title: 'Dijital Ajans ve Danışmanlık',
    description: 'Ajansın hizmetleri ile ilgili tanıtımları',
    thumbnail: '/images/projects/agency2.png',
    technologies: ['Figma', 'VanillaJS', 'CSS'],
  },
  {
    id: 4,
    title: 'Dijital Ajans ve Danışmanlık',
    description: 'Ajansın hizmetleri ile ilgili tanıtımları',
    thumbnail: '/images/projects/agency3.png',
    technologies: ['NextJS', 'Vercel', 'TailwindCSS'],
  },
  {
    id: 5,
    title: 'Çapraz Platform Kelime Oyunu',
    description: 'Çoklu platform desteği ile rekabetçi kelime oyunu',
    thumbnail: '/images/projects/game1.png',
    technologies: ['React', 'Firebase', 'Socket.io', 'TailwindCSS'],
  },
  {
    id: 6,
    title: 'Restaurant WEB Projesi',
    description: 'Restaurant tanıtım, menü ve rezervasyon sistemi',
    thumbnail: '/images/projects/restaurant1.png',
    technologies: ['Wordpress', 'Elementor', 'Bookly', 'ACF', 'Javascript'],
  },
  {
    id: 7,
    title: 'Restaurant WEB Projesi',
    description: 'Restaurant tanıtım, menü ve rezervasyon sistemi',
    thumbnail: '/images/projects/restaurant2.png',
    technologies: ['Wordpress', 'Elementor', 'Bookly', 'ACF', 'Javascript'],
  },
  {
    id: 8,
    title: 'Rekabetçi Kelime Oyunu',
    description: 'Rekabetçi kelime oyunu UI/UX Tasarımı',
    thumbnail: '/images/projects/game2.png',
    technologies: ['Figma'],
  },
  {
    id: 9,
    title: 'Akıllı Termostat Sistemi',
    description: 'Neumorphism tasarım tekniği ile termostat mobil uygulaması tasarımı',
    thumbnail: '/images/projects/neumorphism.png',
    technologies: ['Figma'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          margin-right: 4px;
          animation: pulse 2s infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Link 
            href="/"
            className="text-white/80 hover:text-white transition-colors"
          >
            <FaArrowLeft className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Aktif Projelerim</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${techColors[tech] || 'bg-gray-700 text-white'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 