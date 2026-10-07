const button = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
button.hidden = false;
links.classList.add('mobile-closed');
function closeMenu() { links.classList.add('mobile-closed'); button.setAttribute('aria-expanded','false'); button.setAttribute('aria-label','Abrir menú'); button.textContent='☰'; }
button.addEventListener('click',()=>{const open=links.classList.toggle('mobile-closed')===false;button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');button.textContent=open?'✕':'☰';});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();button.focus();}});
document.addEventListener('click',e=>{if(!links.contains(e.target)&&!button.contains(e.target))closeMenu();});
