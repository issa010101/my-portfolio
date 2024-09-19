document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('nav a');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill out all fields.');
            return;
        }
        
        // Simulate form submission
        console.log('Form submitted with data:', data);
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        form.reset();
    });
});
