const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 24 || 24;
  const minutes = date.getMinutes();

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];
  const MONTHS = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
  ];

  return `${DAYS[date.getDay()]} ${date.getDate()}  ${
    MONTHS[date.getMonth()]
  }`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

if ((localStorage.getItem('searchmode')) === null) {
  localStorage.setItem('searchmode', 'proxy')
}


    if ((localStorage.getItem('searchmode')) === 'proxy') {
        toggleSwitch.checked = true;
    }

function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('searchmode', 'proxy');
    }
    else {       
          localStorage.setItem('searchmode', 'normal');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);