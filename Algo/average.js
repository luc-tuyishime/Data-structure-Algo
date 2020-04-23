// Average

function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0);
    return total / grades.length;
}

const result = getAvg([2, 4, 2]);
console.log('average', result);