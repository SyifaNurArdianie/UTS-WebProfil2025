function toggleBiodata() {
    const bio = document.getElementById('biodata');
    bio.classList.toggle('hidden');
  }
  
  function showDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('tanggal').textContent = today.toLocaleDateString('id-ID', options);
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  window.onload = showDate;