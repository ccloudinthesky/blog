// About page scroll animation
class AboutScrollAnimator {
    constructor() {
        this.elements = document.querySelectorAll('.scroll-animate');
        this.init();
    }

    init() {
        // Check if IntersectionObserver is supported
        if (!('IntersectionObserver' in window)) {
            console.warn('IntersectionObserver not supported, falling back to immediate animation');
            this.elements.forEach(element => {
                element.classList.add('animate-in');
            });
            return;
        }
        
        // Create intersection observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Element entering viewport:', entry.target);
                    entry.target.classList.add('animate-in');
                    // Stop observing once animated
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Start observing all elements
        this.elements.forEach(element => {
            console.log('Observing element:', element);
            this.observer.observe(element);
        });
    }
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('About page loaded, initializing scroll animations...');
    const animator = new AboutScrollAnimator();
    console.log('AboutScrollAnimator initialized:', animator);
    
    // Test if elements are found
    const elements = document.querySelectorAll('.scroll-animate');
    console.log('Found scroll-animate elements:', elements.length);
    elements.forEach((el, index) => {
        console.log(`Element ${index}:`, el.className, el);
    });
});
