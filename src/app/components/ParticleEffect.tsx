'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    particlesJS: any;
  }
}

const ParticleEffect = () => {
  useEffect(() => {
    const initParticles = () => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#ffffff'
            },
            opacity: {
              value: 1,
              random: true
            },
            size: {
              value: 1,
              random: true
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out'
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false
              },
              onclick: {
                enable: false
              },
              resize: true
            }
          },
          retina_detect: true
        });
      }
    };

    // Try to initialize immediately
    initParticles();

    // If not loaded yet, wait for script to load
    if (typeof window !== 'undefined' && !window.particlesJS) {
      const checkParticles = setInterval(() => {
        if (window.particlesJS) {
          initParticles();
          clearInterval(checkParticles);
        }
      }, 100);

      // Cleanup interval
      return () => clearInterval(checkParticles);
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.2
      }}
    />
  );
};

export default ParticleEffect; 