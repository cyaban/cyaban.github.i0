let tabCount = 1;
let lastOpenedTab = localStorage.getItem('lastOpenedTab') || 0;

function addTab() {
  tabCount++;
  
  const tabList = document.getElementById("tab-list");
  const tabContent = document.getElementById("tab-content");
  
  const newTab = document.createElement("li");
  newTab.innerText = "Nouvel onglet ";

  const closeButton = document.createElement("span");
  closeButton.innerText = "x";
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the tab from being opened when the close button is clicked
    closeTab(tabCount);
  });

  newTab.appendChild(closeButton);
  
  const newTabPane = document.createElement("div");
  newTabPane.classList.add("tab-pane");
  
  const newIframe = document.createElement("iframe");
  newIframe.src = "tab.html";
  
  newTabPane.appendChild(newIframe);
  tabContent.appendChild(newTabPane);
  
  tabList.appendChild(newTab);
  
  openTab(tabCount);
}

function openTab(tabIndex) {
  const tabPanes = document.getElementsByClassName("tab-pane");
  const tabs = document.getElementById("tab-list").getElementsByTagName("li");
  
  for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].classList.remove("active");
    tabs[i].classList.remove("active");
  }
  
  tabPanes[tabIndex - 1].classList.add("active");
  tabs[tabIndex - 1].classList.add("active");
  lastOpenedTab = tabIndex;
  localStorage.setItem('lastOpenedTab', lastOpenedTab);
}

const tabs = document.getElementById("tab-list").getElementsByTagName("li");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    openTab(i + 1);
  });
}
function closeTab(index) {
  const tab = document.getElementById(`tab-${index}`);
  const tabPane = document.getElementById(`tab-pane-${index}`);

  tab.parentNode.removeChild(tab);
  tabPane.parentNode.removeChild(tabPane);

  // Update tabCount
  tabCount--;

  // Set the last opened tab if the closed tab was the active tab
  if (index === activeTab) {
    activeTab = lastOpenedTab;
  }

  // Update the tab indices
  for (let i = index; i < tabCount; i++) {
    const currentTab = document.getElementById(`tab-${i + 1}`);
    const currentTabPane = document.getElementById(`tab-pane-${i + 1}`);

    currentTab.id = `tab-${i}`;
    currentTab.dataset.index = i;
    currentTabPane.id = `tab-pane-${i}`;
  }

  // Save the open tabs to local storage
  saveOpenTabs();

  // Switch to the active tab
  switchTab(activeTab);
}function closeTab(index) {
  const tab = document.getElementById(`tab-${index}`);
  const tabPane = document.getElementById(`tab-pane-${index}`);

  tab.parentNode.removeChild(tab);
  tabPane.parentNode.removeChild(tabPane);

  // Update tabCount
  tabCount--;

  // Set the last opened tab if the closed tab was the active tab
  if (index === activeTab) {
    activeTab = lastOpenedTab;
  }

  // Update the tab indices
  for (let i = index; i < tabCount; i++) {
    const currentTab = document.getElementById(`tab-${i + 1}`);
    const currentTabPane = document.getElementById(`tab-pane-${i + 1}`);

    currentTab.id = `tab-${i}`;
    currentTab.dataset.index = i;
    currentTabPane.id = `tab-pane-${i}`;
  }

  // Save the open tabs to local storage
  saveOpenTabs();

  // Switch to the active tab
  switchTab(activeTab);
}
function closeTab(index) {
    const tab = document.getElementById(`tab-${index}`);
    const tabPane = document.getElementById(`tab-pane-${index}`);
  
    tab.parentNode.removeChild(tab);
    tabPane.parentNode.removeChild(tabPane);
  
    // Update tabCount
    tabCount--;
  
    // Set the last opened tab if the closed tab was the active tab
    if (index === activeTab) {
      activeTab = lastOpenedTab;
    }
  
    // Update the tab indices
    for (let i = index; i < tabCount; i++) {
      const currentTab = document.getElementById(`tab-${i + 1}`);
      const currentTabPane = document.getElementById(`tab-pane-${i + 1}`);
  
      currentTab.id = `tab-${i}`;
      currentTab.dataset.index = i;
      currentTabPane.id = `tab-pane-${i}`;
    }
  
    // Save the open tabs to local storage
    saveOpenTabs();
  
    // Switch to the active tab
    switchTab(activeTab);
  }
  function saveOpenTabs() {
    const openTabs = [];
  
    const tabs = document.getElementById("tab-list").getElementsByTagName("li");
  
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.contains("active")) {
        openTabs.push(i + 1);
      }
    }
  
    localStorage.setItem('openTabs', JSON.stringify(openTabs));
  }
openTab(1);