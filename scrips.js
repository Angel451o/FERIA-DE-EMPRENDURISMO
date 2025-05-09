
const now = new Date();

// Sumar 7 días y 5 horas
const targetDate = new Date(now.getTime() + (6 * 24 + 5) * 60 * 60 * 1000);


const countdown = () => {
  const current = new Date().getTime();
  const distance = targetDate.getTime() - current;

  if (distance < 0) {
    document.querySelector('.countdown').innerHTML = "<h2>¡El evento ha comenzado!</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
};


countdown();
setInterval(countdown, 1000);
