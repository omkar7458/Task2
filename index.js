document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.navigation-dots');
    let index = 0;
  
    function showTestimonial() {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
          testimonial.classList.add('active');
        }
      });
  
      updateDots();
    }
  
    function nextTestimonial() {
      index = (index + 1) % testimonials.length;
      showTestimonial();
    }
  
    function prevTestimonial() {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showTestimonial();
    }
  
    function updateDots() {
      dotsContainer.innerHTML = '';
  
      for (let i = 0; i < testimonials.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === index) {
          dot.classList.add('active');
        }
  
        dot.addEventListener('click', function() {
          index = i;
          showTestimonial();
        });
  
        dotsContainer.appendChild(dot);
      }
    }
  
    
    setInterval(nextTestimonial, 5000);
  
    showTestimonial(); 
  });
  