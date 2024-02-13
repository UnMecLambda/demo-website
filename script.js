function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', function() {
  const valentineImg = document.getElementById('valentine-img');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const yesMsg = document.getElementById('yes-msg');
  let noCount = 0;

  noBtn.addEventListener('click', function() {
    noCount++;
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    const index = Math.min(noCount, phrases.length - 1);
    noBtn.innerText = phrases[index];
  });

  yesBtn.addEventListener('click', function() {
    valentineImg.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    document.querySelector('h1').innerText = "Ok yay!!!";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    yesMsg.style.display = 'block';
  });
});

