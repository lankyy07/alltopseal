
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const btn=document.querySelector('.menu-btn'), panel=document.querySelector('.mobile-panel');
  if(btn&&panel) btn.addEventListener('click',()=>panel.classList.toggle('open'));
  const qs=new URLSearchParams(location.search); if(qs.get('rfq')==='success'){const b=document.querySelector('.success'); if(b)b.classList.add('show')}
});
