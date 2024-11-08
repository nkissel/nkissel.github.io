document.addEventListener('DOMContentLoaded', function() {
  // Create a container for the toggle slider
  const toggleContainer = document.createElement('div');
  toggleContainer.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:0;';

  // Create the slider input
  const toggleSlider = document.createElement('input');
  toggleSlider.type = 'checkbox';
  toggleSlider.id = 'funFontSlider';

  // Create a label for the slider (styled as a switch)
  const sliderLabel = document.createElement('label');
  sliderLabel.htmlFor = 'funFontSlider';
  sliderLabel.className = 'slider'; // Add a class for easier styling

  // Append the slider and label to the container and body
  toggleContainer.appendChild(toggleSlider);
  toggleContainer.appendChild(sliderLabel);
  document.body.appendChild(toggleContainer);

  // Check localStorage for the Fun Font state
  const isComicSansActive = localStorage.getItem('funFontActive') === 'true';

  // Function to apply Fun Font
  const applyComicSans = (isActive) => {
    const elements = document.querySelectorAll('body, p, ol, ul, h1, h2, h3, h4, h5, h6, span, div, button, .navbar');
    elements.forEach(el => {
      if (isActive) {
        el.classList.add('funfont');
      } else {
        el.classList.remove('funfont');
      }
    });
  };

  // Initial application of Fun Font if active
  if (isComicSansActive) {
    toggleSlider.checked = true; // Set the slider state to checked if Fun Font is active
    applyComicSans(true); // Apply Fun Font
  }

  // Add change event to the slider
  toggleSlider.addEventListener('change', function() {
    const isActive = this.checked;
    applyComicSans(isActive);

    // Save the state to localStorage
    localStorage.setItem('funFontActive', isActive);
  });

  // MutationObserver to apply Fun Font to dynamically added elements
  const observer = new MutationObserver(() => {
    applyComicSans(toggleSlider.checked); // Reapply Fun Font based on current state
  });

  // Observe the body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
