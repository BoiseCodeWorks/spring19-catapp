let moods = {
  happy: {
    level: 4,
    displayName: 'happy',
    img: 'https://media.indiedb.com/images/groups/1/3/2392/wild-cats-apple-mac-hd-comic-pet-very-happy-cat-467784.jpg'
  },
  tolerating: {
    level: 9,
    displayName: 'tolerating',
    img: 'https://cdn-images-1.medium.com/max/850/0*ozgnz3r1WZ69qWMe.jpg'
  },
  demonSpawn: {
    level: 10,
    displayName: 'demon spawn',
    img: 'http://justsomething.co/wp-content/uploads/2016/08/meet-pompous-albert-the-office-cat-who-looks-always-pissed-off-01-13.jpg'
  }
};

let snibbley = {
  mood: moods.happy,
  name: 'Mr. Snibbley',
  pets: 0
};

function setMood(cat) {
  if (cat.pets <= moods.happy.level) {
    cat.mood = moods.happy;
  } else if (cat.pets <= moods.tolerating.level) {
    cat.mood = moods.tolerating;
  } else {
    cat.mood = moods.demonSpawn;
  }
  draw()
};

function petCat() {
  snibbley.pets++;
  setMood(snibbley);
};

function feedCatnip() {
  snibbley.pets = 0;
  setMood(snibbley);
};

function draw() {
  let catImageElem = document.getElementById('cat-image');
  let moodElem = document.getElementById('mood');
  let petsElem = document.getElementById('pets');
  catImageElem.setAttribute('src', snibbley.mood.img)
  moodElem.innerText = snibbley.mood.displayName;
  petsElem.innerText = snibbley.pets.toString();
}
draw()



















