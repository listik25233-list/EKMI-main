document.addEventListener('DOMContentLoaded', function () {
    const gridButtons = document.querySelectorAll('.grid-button');
    const modelsContainer = document.querySelector('.models-container');

    gridButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset all button images to inactive state
            gridButtons.forEach(btn => {
                const img = btn.querySelector('.grid-image');
                if (img && img.dataset.inactive) {
                    img.src = img.dataset.inactive;
                }
            });

            // Set the clicked button's image to active state
            const clickedImg = button.querySelector('.grid-image');
            if (clickedImg && clickedImg.dataset.active) {
                clickedImg.src = clickedImg.dataset.active;
            }

            const gridType = button.dataset.grid;

            if (gridType === 'grid1') {
                modelsContainer.classList.add('grid-4-columns');
            } else {
                modelsContainer.classList.remove('grid-4-columns');
            }
        });
    });
}); 