let amountOfPaticles = 50;

for (i = 0; i < amountOfPaticles; i++) {
    let particle = document.createElement("div");
    particle.classList.add('particle');
    document.querySelector(".particle-section").appendChild(particle);

    particle.style.left = Math.random() * window.innerWidth + 'px';

    let fallTime = (Math.random() * 10) + 4;
        particle.style.animation = 'fall' + ' ' + fallTime + 's linear infinite';
    
    particle.style.opacity = Math.random();

    let size = Math.random() * 6 + 3 + 'px';
        particle.style.width = size;
        particle.style.height = size;

    particle.addEventListener("animationiteration", (e) => {
        let size = Math.random() * 6 + 3 + 'px';

        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.animation = 'fall' + ' ' + fallTime + 's linear infinite';particle.style.opacity = Math.random();
        particle.style.width = size;
        particle.style.height = size;
        particle.style.opacity = Math.random();
    })
};