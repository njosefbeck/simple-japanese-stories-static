const toggleEnglishButton = document.getElementById('js-toggle-english');

if (toggleEnglishButton) {
  initToggleEnglish();
}

function initToggleEnglish() {
  const englishSections = document.querySelectorAll('.js-translation');
  if (englishSections.length) {

    function toggleSection(section) {
      if (section.classList.contains('visible')) {
        section.classList.remove('visible')
      } else {
        section.classList.add('visible')
      }
    }

    function updateButtonText() {
      if (toggleEnglishButton.innerText === 'Show English') {
        toggleEnglishButton.innerText = 'Hide English';
      } else {
        toggleEnglishButton.innerText = 'Show English';
      }
    }

    function toggleEnglishSections() {
      updateButtonText()
      englishSections.forEach(toggleSection)
    }

    toggleEnglishButton.addEventListener('click', toggleEnglishSections);
  }
}