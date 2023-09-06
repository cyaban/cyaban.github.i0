
        function getBackgroundImageUrl() {
            return localStorage.getItem('customBackgroundImage');
        }

      
        const imageUrl = getBackgroundImageUrl();

      
        if (imageUrl) {
            document.body.style.backgroundImage = `url('${imageUrl}')`;
        }
