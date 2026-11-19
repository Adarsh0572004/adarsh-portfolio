const email='adarshsinghchauhan30567@gmail.com';
document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText(email);status.textContent='Email copied. Talk soon.';}catch{status.textContent=email;}});
function updateClock(){document.getElementById('local-time').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())+' IST';}
updateClock();setInterval(updateClock,60000);document.getElementById('year').textContent=new Date().getFullYear();
const architectureTabs=[...document.querySelectorAll('.arch-tabs [role="tab"]')];
function selectArchitecture(tab,focus=false){
  architectureTabs.forEach(item=>{
    const selected=item===tab;
    item.setAttribute('aria-selected',String(selected));
    item.tabIndex=selected?0:-1;
    document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;
  });
  if(focus)tab.focus();
}
architectureTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectArchitecture(tab));
  tab.addEventListener('keydown',event=>{
    const targets={ArrowRight:(index+1)%architectureTabs.length,ArrowLeft:(index+architectureTabs.length-1)%architectureTabs.length,Home:0,End:architectureTabs.length-1};
    if(event.key in targets){event.preventDefault();selectArchitecture(architectureTabs[targets[event.key]],true);}
  });
});
