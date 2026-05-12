document.addEventListener('DOMContentLoaded', () => {
  const resumeContainer = document.querySelector('.resume-container');
  const downloadBtn = document.getElementById('download-btn');
  
  const editableElements = document.querySelectorAll('[contenteditable="true"]');

  editableElements.forEach(el => {
    const savedContent = localStorage.getItem(el.id);
    if (savedContent) {
      el.innerHTML = savedContent;
    }

    el.addEventListener('input', () => {
      if (el.id) {
        localStorage.setItem(el.id, el.innerHTML);
      }
    });
  });

  resumeContainer.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });

  downloadBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    window.print(); 
  });
});
