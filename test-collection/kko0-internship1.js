function solution(s) {
  let quest = s;
  const onlyNumber = /[^0-9]/g;

  const table = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  if (onlyNumber.test(quest)) {
    for (let i = 0; i < table.length; i++) {
      if (quest.indexOf(table[i]) != -1) {
        const reAll = new RegExp(table[i], "gi");
        quest = quest.replace(reAll, i);
      }
    }
    return Number(quest);
  } else {
    return Number(s);
  }
}

const s = "23four5six7";
console.log(solution(s));
