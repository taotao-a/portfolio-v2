(()=>{
 const section=document.getElementById('p08');if(!section)return;
 const steps=[...section.querySelectorAll('[data-transform-step]')],links=[...section.querySelectorAll('.transform-progress a')];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let scheduled=false;const timers=[];
 section.classList.add('motion-ready');
 function activate(step){if(step.classList.contains('is-activated'))return;step.classList.add('is-activated');if(step.id==='transform-refine'){if(reduced.matches){step.classList.add('show-request','show-addition','show-confirmation')}else{step.classList.add('show-request');timers.push(setTimeout(()=>step.classList.add('show-addition'),650));timers.push(setTimeout(()=>step.classList.add('show-confirmation'),1050))}}}
 function update(){scheduled=false;const target=Math.min(innerHeight*.4,360);let active=0;steps.forEach((step,i)=>{const r=step.getBoundingClientRect();if(r.top<=target)active=i;if(r.top<innerHeight*.68&&r.bottom>120)activate(step)});links.forEach((link,i)=>{link.classList.toggle('is-complete',i<active);if(i===active)link.setAttribute('aria-current','step');else link.removeAttribute('aria-current')})}
 addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);reduced.addEventListener('change',()=>{if(reduced.matches){timers.forEach(clearTimeout);section.querySelector('.refine-step').classList.add('show-request','show-addition','show-confirmation')}});update();
 const slides=[{title:'Thermal runaway',body:'What should an engineer consider when a battery system shows signs of thermal runaway?'},{title:'Safety decisions',body:'Discuss a decision that prioritises safety while acknowledging technical uncertainty.'},{title:'Reflection',body:'How would you communicate a technical risk clearly and responsibly?'}];let selected=0;
 const title=section.querySelector('#slide-title'),body=section.querySelector('#slide-body'),status=section.querySelector('#edit-status'),buttons=[...section.querySelectorAll('[data-slide]')];
 buttons.forEach(button=>button.addEventListener('click',()=>{selected=Number(button.dataset.slide);title.value=slides[selected].title;body.value=slides[selected].body;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));status.textContent='Try editing the title or teaching prompt.'}));
 function edit(){slides[selected]={title:title.value,body:body.value};status.textContent='Edited in this demo. The educator controls the final material.'}
 title.addEventListener('input',edit);body.addEventListener('input',edit);
})();
