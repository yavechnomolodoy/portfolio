// Ждем, когда вся страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт загружен!'); // Это для отладки
    
    // Находим секцию "Обо мне"
    const aboutSection = document.querySelector('.about');
    
    if (aboutSection) {
        // Создаем красивую кнопку
        const button = document.createElement('button');
        button.textContent = 'Нажми меня!';
        button.className = 'magic-button';
        
        // Добавляем обработчик события при наведении
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.backgroundColor = '#ff6b6b';
        });
        
        // Возвращаем кнопку в исходное состояние
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#667eea';
        });
        
        // Добавляем кнопку в секцию "Обо мне"
        aboutSection.appendChild(button);
