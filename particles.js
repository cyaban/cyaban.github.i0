window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('DOMContentLoaded', () => {
    const useParticles = localStorage.getItem('useParticles');
  
    const particlesDiv = document.getElementById('particles-js');
  
    if (useParticles === 'enabled') {
      particlesDiv.style.display = 'block';
    } else {
      particlesDiv.style.display = 'none';
    }
  
    particlesJS('particles-js', {
      particles: {
        number: {
          value: Math.floor((window.innerWidth * window.innerHeight) / 16384),
          density: {
            enable: true,
            value_area: 950
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 2,
            color: '#2e3440'
          },
          polygon: {
            nb_sides: 8
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 125,
          color: '#ffffff',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'repulse'
          },
          onclick: {
            enable: false,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
        
    const toggleParticlesButton = document.getElementById('toggleParticles');
    if (toggleParticlesButton) {
      toggleParticlesButton.addEventListener('change', (event) => {
        if (event.target.checked) {
          localStorage.setItem('useParticles', 'enabled');
          particlesDiv.style.display = 'block';
        } else {
          localStorage.removeItem('useParticles');
          particlesDiv.style.display = 'none';
        }
      });
  
      if (useParticles === 'enabled') {
        toggleParticlesButton.checked = true;
      } else {
        toggleParticlesButton.checked = false;
      }
    }
  });
 });
