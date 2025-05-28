const fortunes = [
  "Back in my day, we didn't have all these fancy gadgets, and we turned out just fine.",
  "Hard work pays off; there's no substitute for putting in the hours.",
  "Respect your elders; they've been through more than you can imagine.",
  "A penny saved is a penny earned; don't waste your money on frivolous things.",
  "Life's too short to hold grudges; forgive and forget.",
  "The early bird catches the worm; don't sleep in and miss out on opportunities.",
  "Actions speak louder than words; show me what you can do.",
  "You reap what you sow; make sure you're planting good seeds.",
  "Take pride in your work; a job worth doing is worth doing well.",
  "Patience is a virtue; good things come to those who wait.",
  "Life is like a box of chocolates; you never know what you're gonna get.",
  "Don't put all your eggs in one basket; diversify your investments.",
  "The squeaky wheel gets the grease; speak up if you want something done.",
  "Don't cry over spilled milk; what's done is done, move on.",
  "You can lead a horse to water, but you can't make it drink; some people won't change no matter how much you try.",
  "Every cloud has a silver lining; look for the positive in every situation.",
  "A rolling stone gathers no moss; keep moving forward and stay active.",
  "Don't count your chickens before they hatch; don't celebrate too soon.",
  "Like a fish out of water; feeling uncomfortable or out of place.",
  "Barking up the wrong tree; pursuing the wrong course of action.",
  "Birds of a feather flock together; surround yourself with like-minded people.",
  "The grass is always greener on the other side; appreciate what you have.",
  "Don't throw the baby out with the bathwater; be careful not to discard valuable things along with the unnecessary.",
  "All roads lead to Rome; there are many paths to the same goal.",
  "A watched pot never boils; patience is key in waiting for things to happen.",
  "You can't judge a book by its cover; appearances can be deceiving.",
  "Two wrongs don't make a right; retaliation doesn't solve problems.",
  "As fit as a fiddle; in good health and shape.",
  "Cry over spilled milk; dwelling on past mistakes or losses.",
  "A picture is worth a thousand words; visuals can convey complex ideas effectively.",
  "Don't bite off more than you can chew; don't take on more than you can handle.",
  "Rome wasn't built in a day; great achievements take time and effort.",
  "A penny for your thoughts; asking someone what they are thinking about.",
  "Selling like hotcakes; selling quickly and in large quantities.",
  "A stitch in time saves nine; addressing problems early prevents bigger issues later.",
  "Walking on thin ice; being in a risky or precarious situation.",
  "The devil is in the details; pay attention to small but important things.",
  "The pot calling the kettle black; criticizing someone for a fault you also have.",
  "Playing with fire; engaging in risky behavior.",
  "A wolf in sheep's clothing; someone who appears harmless but is actually dangerous."
  ];
  
  const openCookieBtn = document.getElementById('open-cookie-btn');
  const fortuneDisplay = document.getElementById('fortune-display');
  
  // Function to generate fortune on button click
  function openCookie() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    
    fortuneDisplay.textContent = randomFortune;
  }
  