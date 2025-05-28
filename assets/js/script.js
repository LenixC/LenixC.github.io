const specTabs = document.querySelectorAll('.spec-tab');

specTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const specBox = tab.closest('.spec-box');
        
        specBox.classList.toggle('collapsed');
    });
});
