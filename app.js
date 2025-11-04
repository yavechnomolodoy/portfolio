// Простой и надежный скрипт для портфолио
console.log('Скрипт начал работу');

// Ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    
    // Находим кнопку по классу
    const magicButton = document.querySelector('.magic-button');
    console.log('Найдена кнопка:', magicButton);
    
    if (magicButton) {
        // Добавляем обработчик клика
        magicButton.addEventListener('click', function() {
            alert('Привет! Это портфолио Михаила. Скоро здесь будет форма связи!');
        });
        
        // Анимация при наведении
        magicButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ff6b6b';
            this.style.transform = 'scale(1.05)';
        });
        
        magicButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#667eea';
            this.style.transform = 'scale(1)';
        });
        
        console.log('Обработчики для кнопки добавлены');
    } else {
        console.log('Кнопка не найдена, создаем новую');
        createBackupButton();
    }
    
    // Анимация для карточек проектов
    animateProjectCards();
});

// Функция для анимации карточек
function animateProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    console.log('Найдено карточек:', cards.length);
    
    cards.forEach(function(card, index) {
        // Начальное состояние
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Анимация с задержкой
        setTimeout(function() {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 * index);
    });
}

// Резервная функция если кнопка не найдена
function createBackupButton() {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        const backupButton = document.createElement('button');
        backupButton.textContent = 'Резервная кнопка';
        backupButton.className = 'magic-button';
        backupButton.style.marginTop = '20px';
        
        backupButton.addEventListener('click', function() {
            alert('Резервная кнопка работает!');
        });
        
        aboutSection.appendChild(backupButton);
        console.log('Резервная кнопка создана');
    }
}

console.log('Скрипт полностью загружен');
