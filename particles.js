// JavaScript code for Particle.js
const button = document.getElementById('toggleParticles');
let particlesEnabled = false;
let particlesInstance = null;

// Particle.js configuration
const particlesConfig = {
    particles: {
        number: {
            value: 100,
        },
        size: {
            value: 3,
        },
    },
};

// Function to initialize Particle.js
function initializeParticles() {
    particlesInstance = particlesJS('canvas', particlesConfig); // Use 'canvas' as the ID
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
        // Check if particlesInstance is null before initializing
        if (particlesInstance === null) {
            initializeParticles();
        }
    } else {
        // Disable particles
        destroyParticles();
    }
});

// Initialize particles on page load
initializeParticles();
