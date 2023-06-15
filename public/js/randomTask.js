const tasks = [
  {
    task: 'Start a "Cult! Cult! Cult!" Chant!',
    description:
      'Start a wave of cult chants! Three rounds of the good ol\' "Cult! Cult! Cult" as loud as you can to get as many people around you as possible doing it too! Maybe practice modesty if you happen to be indoors, however.',
    image: '/images/Cult.webp',
  },
  {
    task: 'Giant Stone Balls!',
    description: 'Do your best David Hatcher Childress impression!',
    image: '/images/GiantStoneBalls.webp',
  },
  {
    task: 'Air Banjo!',
    description:
      'Play something on the air banjo until someone is able to identify the song! It\'s Air Banjo Charades*!   *Kinda',
    image: '/images/AirBanjo.webp',
  },
  {
    task: 'Top 5 (or Top 3) Takeaways!',
    description: 'List your top 5 episodes! Or top 3 serial killer episodes, top 3 cult episodes, top 3 STDP stories, top 3 Behind The Sucks, top 3 Timesuck genres, etc.',
    image: '/images/top5.jpg'
  },
  {
    task: 'HAIL NIMROD!',
    description: 'Shout "HAIL NIMROD!" at the top of your breath! Take a second to prepare your throat first, and maybe also to give those in immediate earshot a polite heads-up, and then let \'er rip!',
    image: '/images/Nimrod.png'
  },
  {
    task: 'Secret Suck Challenge!',
    description: 'Pick the first Secret Suck challenge that comes to the top of your head that you can do or have a story for and do it! If you don\'t happen to be a Space Lizard and don\'t know what this is referring to, just hit the button again.',
    image: '/images/SpaceLizard.png'
  }
];

// find the #generateTask button element in HTML
const generateTaskButton = document.querySelector('#generateTask');

// add event listener to the button
generateTaskButton.addEventListener('click', () => {
  // select a random task object from the tasks array
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

  // display the task title, description, and image on the front end
  const taskTitle = document.querySelector('#taskTitle');
  taskTitle.textContent = randomTask.task;

  const taskDescription = document.querySelector('#taskDescription');
  taskDescription.textContent = randomTask.description;

  const taskImage = document.querySelector('#taskImage');
  taskImage.setAttribute('src', randomTask.image);
});

const suggestionsButton = document.getElementById("suggestions-button");

  suggestionsButton.addEventListener("click", () => {
    window.location.href = "/suggestions";
  });