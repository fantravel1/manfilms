/* ============================================
   Cinema & Character - Gamification System
   User Engagement & Progress Tracking
   ============================================ */

// LocalStorage keys
const STORAGE_KEYS = {
    watchedFilms: 'cinema_watched_films',
    userRatings: 'cinema_user_ratings',
    achievements: 'cinema_achievements',
    userXP: 'cinema_user_xp',
    userLevel: 'cinema_user_level',
    visitCount: 'cinema_visit_count',
    lastVisit: 'cinema_last_visit'
};

// XP System Configuration
const XP_CONFIG = {
    watchFilm: 100,
    rateFilm: 50,
    readArticle: 30,
    shareContent: 75,
    unlockAchievement: 200,
    dailyVisit: 25,
    levelUpBase: 500,
    levelUpMultiplier: 1.5
};

// Achievement Definitions
const ACHIEVEMENTS = [
    {
        id: 'first_watch',
        title: 'First Steps',
        description: 'Watch your first film',
        icon: '🎬',
        requirement: (data) => data.watchedFilms >= 1,
        xpReward: 100
    },
    {
        id: 'film_enthusiast',
        title: 'Film Enthusiast',
        description: 'Watch 5 films',
        icon: '🎥',
        requirement: (data) => data.watchedFilms >= 5,
        xpReward: 300
    },
    {
        id: 'cinephile',
        title: 'Cinephile',
        description: 'Watch all 10 films',
        icon: '🏆',
        requirement: (data) => data.watchedFilms >= 10,
        xpReward: 500
    },
    {
        id: 'critic',
        title: 'Film Critic',
        description: 'Rate 5 films',
        icon: '⭐',
        requirement: (data) => data.ratedFilms >= 5,
        xpReward: 250
    },
    {
        id: 'master_critic',
        title: 'Master Critic',
        description: 'Rate all 10 films',
        icon: '🌟',
        requirement: (data) => data.ratedFilms >= 10,
        xpReward: 400
    },
    {
        id: 'explorer',
        title: 'Explorer',
        description: 'Visit all pages on the site',
        icon: '🗺️',
        requirement: (data) => data.pagesVisited >= 5,
        xpReward: 200
    },
    {
        id: 'dedicated',
        title: 'Dedicated Visitor',
        description: 'Visit the site 7 days',
        icon: '📅',
        requirement: (data) => data.visitCount >= 7,
        xpReward: 350
    },
    {
        id: 'scholar',
        title: 'Film Scholar',
        description: 'Read all blog articles',
        icon: '📚',
        requirement: (data) => data.articlesRead >= 3,
        xpReward: 300
    },
    {
        id: 'perfectionist',
        title: 'Perfectionist',
        description: 'Give 5-star ratings to 5 films',
        icon: '💫',
        requirement: (data) => data.fiveStarRatings >= 5,
        xpReward: 400
    },
    {
        id: 'diverse_taste',
        title: 'Diverse Taste',
        description: 'Watch films from 5 different countries',
        icon: '🌍',
        requirement: (data) => data.countriesWatched >= 5,
        xpReward: 450
    },
    {
        id: 'time_traveler',
        title: 'Time Traveler',
        description: 'Watch films from 4 different decades',
        icon: '⏰',
        requirement: (data) => data.decadesWatched >= 4,
        xpReward: 400
    },
    {
        id: 'quick_learner',
        title: 'Quick Learner',
        description: 'Watch 3 films in one day',
        icon: '⚡',
        requirement: (data) => data.filmsInOneDay >= 3,
        xpReward: 500
    }
];

// Gamification Manager Class
class GamificationManager {
    constructor() {
        this.userData = this.loadUserData();
        this.init();
    }

    // Initialize the system
    init() {
        this.trackVisit();
        this.checkDailyBonus();
        this.updateUI();
        this.checkAchievements();
        this.setupEventListeners();
    }

    // Load user data from localStorage
    loadUserData() {
        return {
            watchedFilms: JSON.parse(localStorage.getItem(STORAGE_KEYS.watchedFilms) || '[]'),
            ratings: JSON.parse(localStorage.getItem(STORAGE_KEYS.userRatings) || '{}'),
            achievements: JSON.parse(localStorage.getItem(STORAGE_KEYS.achievements) || '[]'),
            xp: parseInt(localStorage.getItem(STORAGE_KEYS.userXP) || '0'),
            level: parseInt(localStorage.getItem(STORAGE_KEYS.userLevel) || '1'),
            visitCount: parseInt(localStorage.getItem(STORAGE_KEYS.visitCount) || '0'),
            lastVisit: localStorage.getItem(STORAGE_KEYS.lastVisit) || null,
            articlesRead: JSON.parse(localStorage.getItem('cinema_articles_read') || '[]'),
            pagesVisited: JSON.parse(localStorage.getItem('cinema_pages_visited') || '[]'),
            watchHistory: JSON.parse(localStorage.getItem('cinema_watch_history') || '[]')
        };
    }

    // Save user data to localStorage
    saveUserData() {
        localStorage.setItem(STORAGE_KEYS.watchedFilms, JSON.stringify(this.userData.watchedFilms));
        localStorage.setItem(STORAGE_KEYS.userRatings, JSON.stringify(this.userData.ratings));
        localStorage.setItem(STORAGE_KEYS.achievements, JSON.stringify(this.userData.achievements));
        localStorage.setItem(STORAGE_KEYS.userXP, this.userData.xp.toString());
        localStorage.setItem(STORAGE_KEYS.userLevel, this.userData.level.toString());
        localStorage.setItem(STORAGE_KEYS.visitCount, this.userData.visitCount.toString());
        localStorage.setItem(STORAGE_KEYS.lastVisit, this.userData.lastVisit);
        localStorage.setItem('cinema_articles_read', JSON.stringify(this.userData.articlesRead));
        localStorage.setItem('cinema_pages_visited', JSON.stringify(this.userData.pagesVisited));
        localStorage.setItem('cinema_watch_history', JSON.stringify(this.userData.watchHistory));
    }

    // Track site visit
    trackVisit() {
        const today = new Date().toDateString();
        if (this.userData.lastVisit !== today) {
            this.userData.visitCount++;
            this.userData.lastVisit = today;
            this.saveUserData();
        }
    }

    // Track page visit
    trackPageVisit(pageName) {
        if (!this.userData.pagesVisited.includes(pageName)) {
            this.userData.pagesVisited.push(pageName);
            this.saveUserData();
            this.checkAchievements();
        }
    }

    // Check for daily bonus
    checkDailyBonus() {
        const today = new Date().toDateString();
        const lastBonusClaimed = localStorage.getItem('cinema_last_daily_bonus');

        if (lastBonusClaimed !== today) {
            this.addXP(XP_CONFIG.dailyVisit, 'Daily Visit Bonus!');
            localStorage.setItem('cinema_last_daily_bonus', today);
            this.showNotification('🎁 Daily bonus +' + XP_CONFIG.dailyVisit + ' XP!', 'success');
        }
    }

    // Mark film as watched
    markAsWatched(filmId) {
        if (!this.userData.watchedFilms.includes(filmId)) {
            this.userData.watchedFilms.push(filmId);

            // Track watch history with timestamp
            this.userData.watchHistory.push({
                filmId: filmId,
                timestamp: new Date().toISOString(),
                date: new Date().toDateString()
            });

            this.addXP(XP_CONFIG.watchFilm, 'Film Watched!');
            this.saveUserData();
            this.updateUI();
            this.checkAchievements();
            this.showNotification('✓ Film marked as watched! +' + XP_CONFIG.watchFilm + ' XP', 'success');

            return true;
        }
        return false;
    }

    // Unmark film as watched
    unmarkAsWatched(filmId) {
        const index = this.userData.watchedFilms.indexOf(filmId);
        if (index > -1) {
            this.userData.watchedFilms.splice(index, 1);

            // Remove from watch history
            this.userData.watchHistory = this.userData.watchHistory.filter(h => h.filmId !== filmId);

            this.saveUserData();
            this.updateUI();
            this.showNotification('Film unmarked', 'info');
            return true;
        }
        return false;
    }

    // Check if film is watched
    isWatched(filmId) {
        return this.userData.watchedFilms.includes(filmId);
    }

    // Rate a film
    rateFilm(filmId, rating) {
        const previousRating = this.userData.ratings[filmId];
        this.userData.ratings[filmId] = rating;

        if (!previousRating) {
            this.addXP(XP_CONFIG.rateFilm, 'Film Rated!');
        }

        this.saveUserData();
        this.checkAchievements();
        this.showNotification('Rating saved! ⭐'.repeat(rating), 'success');
    }

    // Get film rating
    getFilmRating(filmId) {
        return this.userData.ratings[filmId] || 0;
    }

    // Track article read
    trackArticleRead(articleId) {
        if (!this.userData.articlesRead.includes(articleId)) {
            this.userData.articlesRead.push(articleId);
            this.addXP(XP_CONFIG.readArticle, 'Article Read!');
            this.saveUserData();
            this.checkAchievements();
        }
    }

    // Add XP and check for level up
    addXP(amount, reason = '') {
        this.userData.xp += amount;

        // Check for level up
        const requiredXP = this.getRequiredXPForNextLevel();
        if (this.userData.xp >= requiredXP) {
            this.levelUp();
        }

        this.saveUserData();
        this.updateUI();
    }

    // Get required XP for next level
    getRequiredXPForNextLevel() {
        return Math.floor(XP_CONFIG.levelUpBase * Math.pow(XP_CONFIG.levelUpMultiplier, this.userData.level - 1));
    }

    // Level up
    levelUp() {
        this.userData.level++;
        this.showNotification('🎉 Level Up! You are now Level ' + this.userData.level, 'success', 5000);
        this.createConfetti();
    }

    // Check achievements
    checkAchievements() {
        const stats = this.getStats();
        let newAchievements = [];

        ACHIEVEMENTS.forEach(achievement => {
            if (!this.userData.achievements.includes(achievement.id)) {
                if (achievement.requirement(stats)) {
                    this.unlockAchievement(achievement);
                    newAchievements.push(achievement);
                }
            }
        });

        return newAchievements;
    }

    // Unlock achievement
    unlockAchievement(achievement) {
        this.userData.achievements.push(achievement.id);
        this.addXP(achievement.xpReward, 'Achievement Unlocked!');
        this.saveUserData();
        this.showAchievementNotification(achievement);
    }

    // Get user statistics
    getStats() {
        const watchedFilms = this.userData.watchedFilms.length;
        const ratedFilms = Object.keys(this.userData.ratings).length;
        const fiveStarRatings = Object.values(this.userData.ratings).filter(r => r === 5).length;

        // Calculate films watched today
        const today = new Date().toDateString();
        const filmsInOneDay = this.userData.watchHistory.reduce((acc, record) => {
            const dates = {};
            if (!dates[record.date]) dates[record.date] = 0;
            dates[record.date]++;
            return Math.max(acc, dates[record.date] || 0);
        }, 0);

        // Get unique countries and decades (would need film data)
        const countriesWatched = new Set(this.userData.watchedFilms.map(filmId => {
            // This would need to map to actual film data
            return filmId; // Placeholder
        })).size;

        const decadesWatched = new Set(this.userData.watchedFilms.map(filmId => {
            // This would need to map to actual film data
            return filmId; // Placeholder
        })).size;

        return {
            watchedFilms,
            ratedFilms,
            fiveStarRatings,
            filmsInOneDay,
            countriesWatched,
            decadesWatched,
            visitCount: this.userData.visitCount,
            articlesRead: this.userData.articlesRead.length,
            pagesVisited: this.userData.pagesVisited.length
        };
    }

    // Update UI elements
    updateUI() {
        this.updateProgressBar();
        this.updateStatsDisplay();
        this.updateAchievementsDisplay();
        this.updateFilmCards();
    }

    // Update XP progress bar
    updateProgressBar() {
        const progressBar = document.querySelector('.xp-fill');
        const xpValue = document.querySelector('.xp-value');

        if (progressBar && xpValue) {
            const requiredXP = this.getRequiredXPForNextLevel();
            const currentLevelXP = this.userData.xp;
            const percentage = Math.min((currentLevelXP / requiredXP) * 100, 100);

            progressBar.style.width = percentage + '%';
            xpValue.textContent = `${currentLevelXP} / ${requiredXP} XP`;
        }
    }

    // Update stats display
    updateStatsDisplay() {
        const stats = this.getStats();

        // Update watched films count
        const watchedStat = document.querySelector('[data-stat="watched"]');
        if (watchedStat) {
            watchedStat.textContent = stats.watchedFilms;
        }

        // Update level
        const levelStat = document.querySelector('[data-stat="level"]');
        if (levelStat) {
            levelStat.textContent = this.userData.level;
        }

        // Update achievements count
        const achievementsStat = document.querySelector('[data-stat="achievements"]');
        if (achievementsStat) {
            achievementsStat.textContent = this.userData.achievements.length;
        }

        // Update total XP
        const xpStat = document.querySelector('[data-stat="xp"]');
        if (xpStat) {
            xpStat.textContent = this.userData.xp;
        }
    }

    // Update achievements display
    updateAchievementsDisplay() {
        const achievementsGrid = document.querySelector('.achievements-grid');
        if (!achievementsGrid) return;

        achievementsGrid.innerHTML = '';

        ACHIEVEMENTS.forEach(achievement => {
            const isUnlocked = this.userData.achievements.includes(achievement.id);
            const stats = this.getStats();

            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <h4 class="achievement-title">${achievement.title}</h4>
                <p class="achievement-description">${achievement.description}</p>
                <div class="achievement-progress">
                    ${isUnlocked ? '✓ Unlocked' : '🔒 Locked'}
                </div>
            `;

            achievementsGrid.appendChild(card);
        });
    }

    // Update film cards with watched status
    updateFilmCards() {
        document.querySelectorAll('.film-card').forEach(card => {
            const filmId = card.dataset.filmId;
            if (filmId && this.isWatched(filmId)) {
                card.classList.add('watched');
            } else if (filmId) {
                card.classList.remove('watched');
            }
        });
    }

    // Setup event listeners
    setupEventListeners() {
        // Watch toggle buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-watch-toggle')) {
                const btn = e.target.closest('.btn-watch-toggle');
                const filmId = btn.dataset.filmId;

                if (this.isWatched(filmId)) {
                    this.unmarkAsWatched(filmId);
                    btn.textContent = '👁️ Mark as Watched';
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-outline');
                } else {
                    this.markAsWatched(filmId);
                    btn.textContent = '✓ Watched';
                    btn.classList.remove('btn-outline');
                    btn.classList.add('btn-success');
                }
            }

            // Star rating
            if (e.target.closest('.star')) {
                const star = e.target.closest('.star');
                const container = star.closest('.user-rating');
                const filmId = container.dataset.filmId;
                const rating = parseInt(star.dataset.rating);

                this.rateFilm(filmId, rating);
                this.updateStarDisplay(container, rating);
            }
        });

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');

        if (menuToggle && nav) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                nav.classList.toggle('active');
            });
        }

        // Sticky header on scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // Update star display
    updateStarDisplay(container, rating) {
        const stars = container.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }

    // Show notification
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-weight: 600;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    // Show achievement notification
    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon" style="font-size: 3rem;">${achievement.icon}</div>
            <div>
                <div style="font-weight: 700; font-size: 1.25rem; margin-bottom: 0.5rem;">Achievement Unlocked!</div>
                <div style="font-size: 1rem; margin-bottom: 0.25rem;">${achievement.title}</div>
                <div style="font-size: 0.875rem; opacity: 0.9;">${achievement.description}</div>
                <div style="font-size: 0.875rem; margin-top: 0.5rem; color: #ffd700;">+${achievement.xpReward} XP</div>
            </div>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 16px;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
            z-index: 10001;
            text-align: center;
            animation: achievementPop 0.5s ease forwards;
            max-width: 400px;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'achievementPop 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 4000);

        this.createConfetti();
    }

    // Create confetti effect
    createConfetti() {
        const colors = ['#667eea', '#764ba2', '#ffd700', '#e74c3c', '#27ae60'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: 50%;
                left: 50%;
                opacity: 1;
                pointer-events: none;
                z-index: 10002;
                border-radius: 50%;
            `;

            document.body.appendChild(confetti);

            const angle = (Math.PI * 2 * i) / confettiCount;
            const velocity = 200 + Math.random() * 200;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            confetti.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => confetti.remove();
        }
    }

    // Get user badge based on level
    getUserBadge() {
        if (this.userData.level >= 20) return { name: 'Platinum', class: 'badge-platinum' };
        if (this.userData.level >= 10) return { name: 'Gold', class: 'badge-gold' };
        if (this.userData.level >= 5) return { name: 'Silver', class: 'badge-silver' };
        return { name: 'Bronze', class: 'badge-bronze' };
    }

    // Export user data (for sharing/backup)
    exportUserData() {
        return JSON.stringify(this.userData, null, 2);
    }

    // Import user data (for restore)
    importUserData(dataString) {
        try {
            const data = JSON.parse(dataString);
            this.userData = data;
            this.saveUserData();
            this.updateUI();
            this.showNotification('Data imported successfully!', 'success');
            return true;
        } catch (e) {
            this.showNotification('Error importing data', 'error');
            return false;
        }
    }

    // Reset user data (with confirmation)
    resetUserData() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
            localStorage.removeItem('cinema_articles_read');
            localStorage.removeItem('cinema_pages_visited');
            localStorage.removeItem('cinema_watch_history');
            localStorage.removeItem('cinema_last_daily_bonus');

            this.userData = this.loadUserData();
            this.updateUI();
            this.showNotification('Progress reset', 'info');
        }
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes achievementPop {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize gamification system when DOM is ready
let gamificationManager;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        gamificationManager = new GamificationManager();
        window.gamification = gamificationManager; // Make available globally
    });
} else {
    gamificationManager = new GamificationManager();
    window.gamification = gamificationManager;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GamificationManager, ACHIEVEMENTS, XP_CONFIG };
}
