document.addEventListener('DOMContentLoaded', function() {
  // Create and style the button
  const toggleButton = document.createElement('button');
  toggleButton.id = 'comicSansButton';
  toggleButton.textContent = 'Comic Sans On';

  // Append the button to the body
  document.body.appendChild(toggleButton);
  toggleButton.classList.add('custom-button');

  // Check localStorage for the Comic Sans state and apply to all elements
  const elements = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, span, div, *');
  const isComicSansActive = localStorage.getItem('comicSansActive') === 'true';
  
  if (isComicSansActive) {
    elements.forEach(el => el.classList.add('comic-sans'));
    toggleButton.textContent = 'Comic Sans Off';
  }

  // Add click event to the button
  toggleButton.addEventListener('click', function() {
    const isActive = document.body.classList.toggle('comic-sans');
    elements.forEach(el => {
      if (isActive) {
        el.classList.add('comic-sans');
      } else {
        el.classList.remove('comic-sans');
      }
    });

    // Save the state to localStorage
    localStorage.setItem('comicSansActive', isActive);
    // Update button text
    this.textContent = isActive ? 'Comic Sans Off' : 'Comic Sans On';
  });
});