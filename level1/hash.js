function solution(participant, completion) {
  const checkParti = participant.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});
  completion.forEach(name => {
    if (checkParti[name]) {
      checkParti[name] -= 1;
    }
    if (checkParti[name] === 0) {
      delete checkParti[name];
    }
  });

  return Object.keys(checkParti)[0];
}
