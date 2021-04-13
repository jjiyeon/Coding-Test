//하비찾기
function findAllHobbyists(hobby, hobbies) {
  const findName = [];
  for (const values in hobbies) {
    hobbies[values].forEach(element => {
      if (element === hobby) {
        findName.push(values);
      }
    });
  }
  return findName;
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"]
};

console.log(findAllHobbyists("Yoga", hobbies));
