// Initialize Particle.js configuration
particlesJS('particles-js', {
    // Add your Particle.js configuration options here
    // For example:
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#000000'
        },
        // Add more particle configurations as needed
    }
});

// Initialize a variable to keep track of particle visibility
let particlesVisible = true;

// Function to toggle particles on/off
function toggleParticles() {
    const particlesContainer = document.getElementById('particles-js');
    
    if (particlesVisible) {
        // Hide particles
        particlesContainer.style.display = 'none';
    } else {
        // Show particles
        particlesContainer.style.display = 'block';
    }

    // Toggle the state
    particlesVisible = !particlesVisible;
}

// Attach click event listener to the "Toggle Particles" button
const toggleButton = document.getElementById('toggleParticles');
toggleButton.addEventListener('click', toggleParticles);
