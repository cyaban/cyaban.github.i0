// JavaScript code for toggling and coloring particles
const button = document.getElementById('toggleParticles');
let particlesEnabled = false;
let particlesInstance = null;

// Particle.js configuration with pink particles
const pinkParticlesConfig = {
    particles: {
        number: {
            value: 100,
        },
        size: {
            value: 3,
        },
        color: {
            value: '#FF69B4', // Pink color
        },
    },
};

// Function to initialize Particle.js
function initializeParticles() {
    particlesInstance = particlesJS('canvas', pinkParticlesConfig); // Change 'particles' to 'canvas'
}

// Function to destroy Particle.js
function destroyParticles() {
    if (particlesInstance !== null) {
        particlesInstance.destroy();
        particlesInstance = null;
    }
}

// Toggle particles on button click
button.addEventListener('click', () => {
    particlesEnabled = !particlesEnabled;

    if (particlesEnabled) {
        // Enable particles
        initializeParticles();
        button.innerText = 'Disable Particles'; // Change button text
    } else {
        // Disable particles
        destroyParticles();
        button.innerText = 'Enable Particles'; // Change button text
    }
});

// Initialize particles on page load
initializeParticles();