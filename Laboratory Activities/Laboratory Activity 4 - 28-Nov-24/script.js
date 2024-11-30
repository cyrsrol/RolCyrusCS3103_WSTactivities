document.addEventListener("DOMContentLoaded", () => {
    const cloudsContainer = document.querySelector('.clouds');

    for (let i = 0; i < 20; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloudsContainer.appendChild(cloud);
    }
});

