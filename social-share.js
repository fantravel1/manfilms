/**
 * Social Sharing Component
 * Custom SVG icons for sharing to various platforms
 */

const SocialShare = {
    // SVG Icons for each platform
    icons: {
        twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
        whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
        reddit: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>`,
        email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
        copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
        check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    },

    // Generate share URLs for each platform
    getShareUrl(platform, url, title, description) {
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);
        const encodedDesc = encodeURIComponent(description || '');

        switch (platform) {
            case 'twitter':
                return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            case 'whatsapp':
                return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
            case 'linkedin':
                return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            case 'reddit':
                return `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
            case 'email':
                return `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`;
            default:
                return url;
        }
    },

    // Create a share button element
    createButton(platform, url, title, description, showLabel = false) {
        const button = document.createElement('a');
        button.className = `share-btn share-btn--${platform}`;
        button.setAttribute('data-tooltip', this.getPlatformName(platform));
        button.setAttribute('aria-label', `Share on ${this.getPlatformName(platform)}`);

        if (platform === 'copy') {
            button.href = '#';
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.copyToClipboard(url, button);
            });
        } else {
            button.href = this.getShareUrl(platform, url, title, description);
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
        }

        if (showLabel) {
            button.classList.add('share-btn-full');
            button.innerHTML = `${this.icons[platform]}<span>${this.getPlatformName(platform)}</span>`;
        } else {
            button.innerHTML = this.icons[platform];
        }

        return button;
    },

    // Get platform display name
    getPlatformName(platform) {
        const names = {
            twitter: 'X (Twitter)',
            facebook: 'Facebook',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            reddit: 'Reddit',
            email: 'Email',
            copy: 'Copy Link'
        };
        return names[platform] || platform;
    },

    // Copy URL to clipboard
    async copyToClipboard(url, button) {
        try {
            await navigator.clipboard.writeText(url);
            button.classList.add('copied');
            button.innerHTML = this.icons.check;
            button.setAttribute('data-tooltip', 'Copied!');

            setTimeout(() => {
                button.classList.remove('copied');
                button.innerHTML = this.icons.copy;
                button.setAttribute('data-tooltip', 'Copy Link');
            }, 2000);

            this.showToast('Link copied to clipboard!', 'success');
        } catch (err) {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = url;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            button.classList.add('copied');
            button.innerHTML = this.icons.check;

            setTimeout(() => {
                button.classList.remove('copied');
                button.innerHTML = this.icons.copy;
            }, 2000);

            this.showToast('Link copied to clipboard!', 'success');
        }
    },

    // Show toast notification
    showToast(message, type = 'default') {
        // Remove existing toasts
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // Create complete share component
    createShareComponent(options = {}) {
        const {
            url = window.location.href,
            title = document.title,
            description = document.querySelector('meta[name="description"]')?.content || '',
            platforms = ['twitter', 'facebook', 'whatsapp', 'linkedin', 'reddit', 'email', 'copy'],
            showLabels = false,
            floating = false,
            className = ''
        } = options;

        const container = document.createElement('div');
        container.className = floating ? 'share-floating' : `social-share ${className}`;

        if (!floating) {
            const label = document.createElement('span');
            label.className = 'social-share-label';
            label.textContent = 'Share';
            container.appendChild(label);
        }

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'social-share-buttons';

        platforms.forEach(platform => {
            const button = this.createButton(platform, url, title, description, showLabels);
            buttonsContainer.appendChild(button);
        });

        container.appendChild(buttonsContainer);
        return container;
    },

    // Initialize share components on page
    init(selector = '.social-share-container') {
        document.querySelectorAll(selector).forEach(container => {
            const options = {
                url: container.dataset.url || window.location.href,
                title: container.dataset.title || document.title,
                description: container.dataset.description || '',
                platforms: container.dataset.platforms?.split(',') || ['twitter', 'facebook', 'whatsapp', 'linkedin', 'email', 'copy'],
                floating: container.classList.contains('share-floating'),
                showLabels: container.dataset.labels === 'true'
            };

            const shareComponent = this.createShareComponent(options);
            container.replaceWith(shareComponent);
        });
    },

    // Add floating share bar to page
    addFloatingBar(options = {}) {
        const shareBar = this.createShareComponent({
            ...options,
            floating: true,
            platforms: options.platforms || ['twitter', 'facebook', 'whatsapp', 'linkedin', 'copy']
        });
        document.body.appendChild(shareBar);
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SocialShare.init());
} else {
    SocialShare.init();
}

// Export for use in other scripts
window.SocialShare = SocialShare;
