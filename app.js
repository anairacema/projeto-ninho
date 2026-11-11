document.getElementById('notificationButton')?.addEventListener('click',()=>notify('Você não tem novas notificações.'));
const toast=document.getElementById('toast');let timer;function notify(t){toast.textContent=t;toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),2500)}
document.getElementById('mobileToggle')?.addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('hidden'));
const ninaPrompts={
  sono:'Quero registrar um período de sono da criança.',
  alimentação:'Quero registrar uma alimentação da criança.',
  atividade:'Quero registrar uma atividade da criança.',
  higiene:'Quero registrar um cuidado de higiene.',
  medida:'Quero registrar uma nova medida de peso e altura.',
  vacina:'Quero cadastrar ou atualizar uma vacina.',
  medicamento:'Quero cadastrar ou atualizar um medicamento na farmacinha.',
  lembrete:'Quero criar um lembrete no calendário.'
};
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-action]');
  if(!b)return;
  const prompt=ninaPrompts[b.dataset.action]||('Quero atualizar informações sobre '+b.dataset.action+'.');
  window.location.href='nina.html?mensagem='+encodeURIComponent(prompt);
});
document.getElementById('chatForm')?.addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('chatInput'),text=input.value.trim();if(!text)return;const area=document.getElementById('messages');area.insertAdjacentHTML('beforeend',`<div class="bubble user"><small>Ana</small>${text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}</div><div class="bubble"><small>Nina</small>Entendi, Ana! Esta é uma resposta demonstrativa. Na próxima etapa, a Nina será conectada à inteligência artificial e aos registros do Ninho.</div>`);input.value='';area.scrollTop=area.scrollHeight});

window.ninhoNotify=function(text){const el=document.getElementById('toast');if(!el){alert(text);return;}el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600);};

// Perfil do responsável: os dados são lidos do cadastro salvo nesta sessão.
(function setupAccountMenu(){
  const trigger=document.getElementById('accountTrigger');
  const dropdown=document.getElementById('accountDropdown');
  if(!trigger||!dropdown)return;
  let profile={};
  try{profile=JSON.parse(sessionStorage.getItem('ninhoCadastroResponsavel')||'{}')}catch(e){}
  const set=(id,value,fallback='Não informado')=>{const el=document.getElementById(id);if(el)el.textContent=value||fallback};
  const fullName=profile.nome||'Ana Iracema';
  set('accountName',fullName,'Ana Iracema');
  set('accountEmail',profile.email);
  set('accountCpf',profile.cpf);
  set('accountBirth',profile.nascimento?new Date(profile.nascimento+'T00:00:00').toLocaleDateString('pt-BR'):'');
  set('accountPhone',profile.telefone);
  const initial=document.getElementById('accountInitial');
  if(initial)initial.textContent=(fullName.trim()[0]||'A').toUpperCase();
  const greeting=document.querySelector('.account-greeting');
  if(greeting)greeting.textContent='Olá, '+(fullName.split(' ')[0]||'Ana')+'!';
  trigger.addEventListener('click',e=>{
    e.stopPropagation();
    const isHidden=dropdown.classList.toggle('hidden');
    trigger.setAttribute('aria-expanded',String(!isHidden));
  });
  document.addEventListener('click',e=>{
    if(!dropdown.contains(e.target)&&!trigger.contains(e.target)){
      dropdown.classList.add('hidden');
      trigger.setAttribute('aria-expanded','false');
    }
  });
  document.getElementById('logoutButton')?.addEventListener('click',()=>{
    sessionStorage.removeItem('ninhoCadastroResponsavel');
    sessionStorage.removeItem('ninhoCadastroInicial');
    window.location.href='login.html';
  });
})();
