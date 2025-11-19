/* =================== Hamburger Toggle =================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

/* =================== Dark/Light Mode =================== */
const themeBtn = document.getElementById('theme-toggle');
if(localStorage.getItem('theme')) document.body.className = localStorage.getItem('theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.className);
});

/* =================== Typing Effect =================== */
const typingText = document.querySelector(".typing");
const words = ["Web Developer", "Software Enthusiast", "Tech Innovator"];
let wordIndex = 0, letterIndex = 0;
function type() {
  if(wordIndex < words.length){
    if(letterIndex < words[wordIndex].length){
      typingText.textContent += words[wordIndex][letterIndex];
      letterIndex++;
      setTimeout(type, 150);
    } else setTimeout(erase, 1000);
  }
}
function erase() {
  if(letterIndex > 0){
    typingText.textContent = words[wordIndex].substring(0, letterIndex-1);
    letterIndex--;
    setTimeout(erase, 100);
  } else { wordIndex = (wordIndex + 1) % words.length; setTimeout(type, 500); }
}
document.addEventListener("DOMContentLoaded", type);

/* =================== Back to Top =================== */
const topBtn = document.getElementById("topBtn");
window.onscroll = () => { topBtn.style.display = window.scrollY > 300 ? "block" : "none"; };
topBtn.addEventListener('click', () => { window.scrollTo({top:0, behavior:"smooth"}); });

/* =================== Projects Modal =================== */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
function openModal(title, desc){ modal.style.display = "flex"; modalTitle.textContent = title; modalDesc.textContent = desc; }
function closeModal(){ modal.style.display = "none"; }
window.onclick = e => { if(e.target==modal) closeModal(); }

/* =================== Circular Skills Animation =================== */const skills = document.querySelectorAll('.skill');
window.addEventListener('scroll', () => {
  skills.forEach(skill => {
    if(skill.querySelector('svg')) return; // already created
    const rect = skill.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      const percent = skill.dataset.percent;
      const name = skill.dataset.skill;

      // Create SVG
      const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
      svg.setAttribute("width","120"); 
      svg.setAttribute("height","120");

      // Background circle
      const circleBg = document.createElementNS("http://www.w3.org/2000/svg","circle");
      circleBg.setAttribute("cx","60");
      circleBg.setAttribute("cy","60");
      circleBg.setAttribute("r","50");
      circleBg.setAttribute("stroke","#112240");
      circleBg.setAttribute("stroke-width","10");
      svg.appendChild(circleBg);

      // Foreground circle
      const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
      circle.setAttribute("cx","60");
      circle.setAttribute("cy","60");
      circle.setAttribute("r","50");
      circle.setAttribute("stroke","#00d8ff");
      circle.setAttribute("stroke-width","10");
      circle.setAttribute("stroke-dasharray", 2*Math.PI*50);
      circle.setAttribute("stroke-dashoffset", 2*Math.PI*50*(1 - percent/100));
      circle.setAttribute("transform","rotate(-90 60 60)");
      svg.appendChild(circle);

      // Skill Name Text
      const text = document.createElementNS("http://www.w3.org/2000/svg","text");
      text.setAttribute("x","60");
      text.setAttribute("y","65");
      text.setAttribute("text-anchor","middle");
      text.setAttribute("font-size","14");
      text.setAttribute("fill","#fff"); // text color
      text.textContent = name;
      svg.appendChild(text);

      skill.appendChild(svg);
    }
  });
});


const profileTop = document.querySelector('.profile-top');
profileTop.title = "Pascal IT";


const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const projects = document.querySelectorAll('.project-card');

    projects.forEach(project => {
      if(filter === 'all' || project.classList.contains(filter)){
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
