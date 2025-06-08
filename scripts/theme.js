function setTheme(theme) {
    const themeLink = document.getElementById('themeStylesheet');
    const inPages = window.location.pathname.includes('/pages/');
    const base = inPages ? '../css/' : 'css/';
    themeLink.href = theme === 'dark' ? base + 'dark.css' : base + 'light.css';
    localStorage.setItem('theme', theme);
  }
  
  function switchTheme() {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
  }
  
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  };
  