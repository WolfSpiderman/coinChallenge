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
    image: ''
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
