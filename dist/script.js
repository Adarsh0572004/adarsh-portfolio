const email='adarshsinghchauhan30567@gmail.com';
document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText(email);status.textContent='Email copied. Talk soon.';}catch{status.textContent=email;}});
function updateClock(){document.getElementById('local-time').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())+' IST';}
updateClock();setInterval(updateClock,60000);document.getElementById('year').textContent=new Date().getFullYear();
