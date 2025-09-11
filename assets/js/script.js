function createDotsElement(specBox) {
    const dotsElement = document.createElement('div');
    dotsElement.className = 'spec-content-dots';
    dotsElement.textContent = '...';
    dotsElement.addEventListener('click', () => {
        specBox.classList.remove('collapsed');
    });
    return dotsElement;
}

function initializeAllSpecBoxes() {
    const allSpecBoxes = document.querySelectorAll('.spec-box');
    allSpecBoxes.forEach(specBox => {
        if (!specBox.querySelector('.spec-content-dots')) {
            const dotsElement = createDotsElement(specBox);
            specBox.appendChild(dotsElement);
        }
    });
}

const specTabs = document.querySelectorAll('.spec-tab');
specTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const specBox = tab.closest('.spec-box');
        specBox.classList.toggle('collapsed');
    });
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('spec-content-dots')) {
        const specBox = e.target.closest('.spec-box');
        specBox.classList.remove('collapsed');
    }
});

initializeAllSpecBoxes();
