let moods = {
  happy: {
    level: 4,
    displayName: 'happy',
    img: ''
  },
  tolerating: {
    level: 9,
    displayName: 'tolerating',
    img: ''
  },
  demonSpawn: {
    level: 10,
    displayName: 'demon spawn',
    img: ''
  }
};

let snibbley = {
  mood: 'happy',
  name: 'Mr. Snibbley',
  pets: 0
};

function setMood(cat) {
  if (cat.pets <= moods.happy.level) {
    cat.mood = moods.happy.displayName;
  } else if (cat.pets <= moods.tolerating.level) {
    cat.mood = moods.tolerating.displayName;
  } else {
    cat.mood = moods.demonSpawn.displayName;
  }
};

function petCat() {
  snibbley.pets++;
  setMood(snibbley);
};





















