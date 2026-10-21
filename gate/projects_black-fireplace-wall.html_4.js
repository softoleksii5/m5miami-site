
/* мобильное меню (SPEC M1-T10/T14) */
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('mnav');
  if(!btn||!nav) return;
  function set(open){
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.hidden=!open;
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function(){ set(nav.hidden); });
  nav.addEventListener('click', function(e){ if(e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && !nav.hidden) set(false); });
  matchMedia('(min-width:901px)').addEventListener('change', function(m){ if(m.matches && !nav.hidden) set(false); });
})();
