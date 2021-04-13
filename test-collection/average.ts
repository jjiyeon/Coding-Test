function calcAvgHeight(data: { [name: string]: Person }): number | null {
  // Calculate average height from received data. If no data, return null.
  const { Matt, Jason, ...r } = data;
  console.log(Object.keys(data).length);
  if (Object.keys(data).length < 2 || Object.keys(r).length !== 0) {
    return null;
  } else {
    let avg: number;
    avg = (Matt.height + Jason.height) / 2;
    return avg;
  }
}

interface Person {
  height: number;
  weight: number;
}

let avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});
console.log(avgHeight);
