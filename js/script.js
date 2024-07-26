const skillBar = document.querySelector('.skill-bar');
        const skill = document.querySelector('.skill');
        const draggableButton = document.querySelector('.draggable-button');

        let isDragging = false;

        draggableButton.addEventListener('mousedown', (e) => {
            isDragging = true;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const mouseX = e.clientX - skillBar.getBoundingClientRect().left;
                const newWidth = Math.max(0, Math.min(mouseX, skillBar.clientWidth));
                skill.style.width = `${newWidth}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });