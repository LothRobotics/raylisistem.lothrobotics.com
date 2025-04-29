const comptStart = document.querySelector('.days-compt-start'), start = document.querySelector('.days-compt'),
toggleBtn = document.querySelector('.toggle-btn'),
navBar = document.querySelector('.navbar');


// toggle btn

toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})


// Date countdown below

const targetDate = new Date(2025, 5, 10).getTime(),
secondTargetDate = new Date(2025, 5, 4).getTime();

const countdown = () => {
    const now = new Date().getTime(),
    gap = targetDate - now,
    gap2 = secondTargetDate - now;

    // Some calculations and definitions below 

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day) + 1; 
    const textDay2 = Math.floor(gap2 / day) + 1; 
    

    // Displaying stuff

    //comptStart.innerText = textDay >= 1 ? textDay + ' GÜN': 0 + ' GÜN';
    //start.innerText = textDay2>= 1 ? textDay2 + ' GÜN': 0 + ' GÜN';
    comptStart.innerText = 'YAPILDI';
    start.innerText = 'DOLDU';

};

countdown()
setInterval(countdown, 60 * 60 * 1000)
