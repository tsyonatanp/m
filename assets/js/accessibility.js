class Accessibility {
    constructor() {
        this.fontSize = 100;
        this.highContrast = false;
        this.highlightLinks = false;
        this.bigCursor = false;
        
        // Load saved settings
        this.loadSettings();
        
        // Initialize buttons
        this.initializeButtons();
    }

    loadSettings() {
        const settings = localStorage.getItem('accessibility');
        if (settings) {
            const { fontSize, highContrast, highlightLinks, bigCursor } = JSON.parse(settings);
            this.fontSize = fontSize || 100;
            this.highContrast = highContrast || false;
            this.highlightLinks = highlightLinks || false;
            this.bigCursor = bigCursor || false;
            
            // Apply saved settings
            this.applySettings();
        }
    }

    saveSettings() {
        const settings = {
            fontSize: this.fontSize,
            highContrast: this.highContrast,
            highlightLinks: this.highlightLinks,
            bigCursor: this.bigCursor
        };
        localStorage.setItem('accessibility', JSON.stringify(settings));
    }

    applySettings() {
        // Font size
        document.documentElement.style.fontSize = `${this.fontSize}%`;
        
        // High contrast
        document.body.classList.toggle('high-contrast', this.highContrast);
        
        // Highlight links
        document.body.classList.toggle('highlight-links', this.highlightLinks);
        
        // Big cursor
        document.body.classList.toggle('big-cursor', this.bigCursor);
        
        // Update buttons state
        this.updateButtonsState();
        
        // Save settings
        this.saveSettings();
    }

    initializeButtons() {
        // Font size buttons
        document.getElementById('increaseFontBtn').addEventListener('click', () => this.changeFontSize(10));
        document.getElementById('decreaseFontBtn').addEventListener('click', () => this.changeFontSize(-10));
        document.getElementById('resetFontBtn').addEventListener('click', () => this.resetFontSize());
        
        // Toggle buttons
        document.getElementById('contrastBtn').addEventListener('click', () => this.toggleContrast());
        document.getElementById('highlightLinksBtn').addEventListener('click', () => this.toggleHighlightLinks());
        document.getElementById('bigCursorBtn').addEventListener('click', () => this.toggleBigCursor());
        
        // Menu toggle
        document.getElementById('accessibilityToggle').addEventListener('click', () => this.toggleMenu());
        
        // Close button
        document.getElementById('closeAccessibility').addEventListener('click', () => this.toggleMenu());
        
        // Initial state
        this.updateButtonsState();
    }

    updateButtonsState() {
        // Update toggle buttons state
        document.getElementById('contrastBtn').classList.toggle('active', this.highContrast);
        document.getElementById('highlightLinksBtn').classList.toggle('active', this.highlightLinks);
        document.getElementById('bigCursorBtn').classList.toggle('active', this.bigCursor);
    }

    changeFontSize(change) {
        this.fontSize = Math.min(Math.max(this.fontSize + change, 80), 200);
        this.applySettings();
    }

    resetFontSize() {
        this.fontSize = 100;
        this.applySettings();
    }

    toggleContrast() {
        this.highContrast = !this.highContrast;
        this.applySettings();
    }

    toggleHighlightLinks() {
        this.highlightLinks = !this.highlightLinks;
        this.applySettings();
    }

    toggleBigCursor() {
        this.bigCursor = !this.bigCursor;
        this.applySettings();
    }

    toggleMenu() {
        const menu = document.getElementById('accessibilityMenu');
        menu.classList.toggle('open');
    }
}

// Initialize accessibility features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.accessibility = new Accessibility();
}); 