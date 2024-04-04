const fortunes = [
    "A journey of a thousand miles begins with a single step.",
    "The best way to predict the future is to create it.",
    "Fortune favors the bold.",
    "You will soon discover a major talent that you never knew you had.",
    "A smile is the universal welcome.",
    "You will receive unexpected help in the next week.",
    "Your hard work will pay off soon.",
    "A good friend will offer you advice today.",
    "You will find happiness in the simplest things.",
    "Believe in yourself and you will succeed."
  ];
  
  const openCookieBtn = document.getElementById('open-cookie-btn');
  const fortuneDisplay = document.getElementById('fortune-display');
  
  // Function to generate fortune on button click
  function openCookie() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    
    fortuneDisplay.textContent = randomFortune;
  }
  