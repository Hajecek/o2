// Najdi h2 element s textem "Výpis adres prodejce"
const heading = Array.from(document.querySelectorAll('h2')).find(
  h2 => h2.textContent.trim() === 'Výpis adres prodejce'
);

// Pokud byl element nalezen, přidej za něj text "AHOJ"
if (heading) {
  heading.insertAdjacentText('afterend', ' AHOJ');
}

