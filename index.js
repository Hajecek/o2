// Najdi h2 element s textem "Výpis adres prodejce"
const heading = Array.from(document.querySelectorAll('h2')).find(
  h2 => h2.textContent.trim() === 'Výpis adres prodejce'
);

// Pokud byl element nalezen, přidej za něj text "AHOJ"
if (heading) {
  heading.insertAdjacentText('afterend', ' AHOJ');
}

// Najdi tlačítko "Vyhledat" a obarv ho na červeně
const searchButton = Array.from(document.querySelectorAll('button')).find(
  button => button.textContent.trim().includes('Vyhledat')
);

// Pokud bylo tlačítko nalezeno, přidej červené barvy s vysokou prioritou
if (searchButton) {
  // Použij inline styly s !important pro přebití všech ostatních CSS stylů
  searchButton.style.setProperty('background-color', '#dc3545', 'important');
  searchButton.style.setProperty('color', '#ffffff', 'important');
  searchButton.style.setProperty('border-color', '#dc3545', 'important');
}

