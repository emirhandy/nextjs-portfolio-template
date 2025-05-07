'use client';

import Link from 'next/link';
import { FaGithub, FaFigma, FaBlog, FaProjectDiagram, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiMedium } from 'react-icons/si';
import ParticleEffect from './components/ParticleEffect';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 sm:justify-center relative">
      <ParticleEffect />
      
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-3 sm:mt-0 z-10">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6 rounded-full overflow-hidden border-2 border-white/20">
          <img
            src="/images/profile.jpg"
            alt="Emirhan"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Hoşgeldiniz</h1>
        
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <FaXTwitter className="text-2xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFigma className="text-2xl" />
            <span>Figma</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog className="text-2xl" />
            <span>Blog</span>
          </Link>
        </div>
      </div>

      {/* Content Links */}
      <div className="flex flex-col gap-4 w-full max-w-md z-10">
        <Link 
          href="https://www.figma.com/@emirhand"
          target="_blank"
          className="p-6 border rounded-lg hover:bg-white/8 transition-colors flex items-center justify-center gap-3 backdrop-blur-sm"
        >
          <FaFigma className="text-2xl" />
          <span>UI / UX Tasarımlarım</span>
        </Link>

        <Link 
          href="https://github.com/emirhandy"
          target="_blank"
          className="p-6 border rounded-lg hover:bg-white/8 transition-colors flex items-center justify-center gap-3 backdrop-blur-sm"
        >
          <FaGithub className="text-2xl" />
          <span>Kod Arşivim</span>
        </Link>

        <Link 
          href="https://medium.com/@emirhand"
          target="_blank"
          className="p-6 border rounded-lg hover:bg-white/8 transition-colors flex items-center justify-center gap-3 backdrop-blur-sm"
        >
          <SiMedium className="text-2xl" />
          <span>Blog Yazılarım</span>
        </Link>

        <Link 
          href="/projects"
          className="p-6 border rounded-lg hover:bg-white/8 transition-colors flex items-center justify-center gap-3 backdrop-blur-sm"
        >
          <FaProjectDiagram className="text-2xl" />
          <span>Aktif Projelerim</span>
        </Link>
      </div>
    </main>
  );
}
