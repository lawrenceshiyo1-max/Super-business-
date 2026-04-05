// Typewriter Effect
const typewriterText = ["Super, Web Developer", "Freelance Designer", "Next-level Solutions"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
    if(i >= typewriterText.length) i = 0;
    let fullText = typewriterText[i];
    if(isDeleting) currentText = fullText.substring(0, currentText.length - 1);
    else currentText = fullText.substring(0, currentText.length + 1);
    typewriter.innerHTML = currentText;
    let speed = isDeleting ? 50 : 150;
    if(!isDeleting && currentText === fullText){ speed=2000; isDeleting=true; }
    else if(isDeleting && currentText===""){ isDeleting=false; i++; speed=500; }
    setTimeout(type, speed);
}
type();

// Smooth scroll
document.querySelector('.btn').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({behavior:'smooth'});
});

// Contact Form Alert
document.getElementById('contact-form').addEventListener('submit', e=>{
    e.preventDefault();
    alert("Message sent! Super will contact you soon.");
    e.target.reset();
});

// Dark/Light Mode Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// Stats Counter Animation
const counters = document.querySelectorAll('.number');
counters.forEach(counter=>{
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 50;
        const inc = target / speed;
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20);
        } else counter.innerText = target;
    };
    updateCount();
});
