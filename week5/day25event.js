// These IDs match the elements in event.html; each variable refers to that exact element.
const clickBox = document.getElementById('clickBox');
const hoverBox = document.getElementById('hoverBox');
const resetBtn = document.getElementById('resetBtn');
const simulateBtn = document.getElementById('simulateBtn');
const eventLog = document.getElementById('eventLog');
const dblBox = document.getElementById('dblBox');

function logEvent(message) {
  const entry = document.createElement('div');
  entry.textContent = message;
  // Keep the newest message at the top of the log
  eventLog.appendChild(entry);
}

// Attach each event listener to the element selected above.
let clickCount = 0;
clickBox.addEventListener('click', () => {
  clickCount++;
  clickBox.classList.add('clicked');
  clickBox.textContent = `Clicked ${clickCount} time(s)`;
  logEvent(`Click #${clickCount}`);
});

// Adding 'hovered' applies the .hovered CSS rule in event.html.
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.classList.add('hovered');
  hoverBox.textContent = 'Mouse is hovering';
  logEvent('Mouse entered');
});

// Removing 'hovered' restores the box's normal background when the pointer leaves.
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.classList.remove('hovered');
  hoverBox.textContent = 'Hover over me';
  logEvent('Mouse left');
});

resetBtn.addEventListener('click', () => {
  clickCount = 0;
  clickBox.classList.remove('clicked');
  hoverBox.classList.remove('hovered');
  clickBox.textContent = 'Click me';
  hoverBox.textContent = 'Hover over me';
  eventLog.innerHTML = '';
});

simulateBtn.addEventListener('click', () => {
  logEvent('Simulating user actions');
  clickBox.click();
  hoverBox.dispatchEvent(new Event('mouseenter'));
});

dblBox.addEventListener('dblclick', () => {
  dblBox.textContent = 'Double clicked!';
   logEvent('Double click');
});