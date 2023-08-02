const iframeSwitch = document.querySelector('.iframe-switch input[type="checkbox"]');
const ecoleSwitch = document.querySelector('.ecoledirecte-switch input[type="checkbox"]');
const miniSwitch = document.querySelector('.minimised-switch input[type="checkbox"]')

if ((localStorage.getItem('openiframe')) === null) {
    localStorage.setItem('openiframe', 'false')
  }
  if ((localStorage.getItem('openiframe')) === 'true') {
      iframeSwitch.checked = true;
  }
  if ((localStorage.getItem('miniquit')) === null) {
    localStorage.setItem('miniquit', 'true')
  }
  if ((localStorage.getItem('miniquit')) === 'true') {
      miniSwitch.checked = true;
  }
  if ((localStorage.getItem('openecole')) === null) {
    localStorage.setItem('openecole', 'true')
  }
  if ((localStorage.getItem('openecole')) === 'true') {
      ecoleSwitch.checked = true;
  }
    
  
function switchmodeiframe(a) {
    if (a.target.checked) {
        localStorage.setItem('openiframe', 'true');
    }
    else {       
          localStorage.setItem('openiframe', 'false');
    }    
  }
  iframeSwitch.addEventListener('change', switchmodeiframe, false);

    
function switchmodeecole(a) {
    if (a.target.checked) {
        localStorage.setItem('openecole', 'true');
    }
    else {       
          localStorage.setItem('openecole', 'false');
    }    
  }
  ecoleSwitch.addEventListener('change', switchmodeecole, false);
  
    
function switchmodemini(a) {
    if (a.target.checked) {
        localStorage.setItem('miniquit', 'true');
    }
    else {       
          localStorage.setItem('miniquit', 'false');
    }    
  }
  miniSwitch.addEventListener('change', switchmodemini, false);
  