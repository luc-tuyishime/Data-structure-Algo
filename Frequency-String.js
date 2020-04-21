const frequency = (str) => {
    str.toLowerCase();
    return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {})
}

frequency('rityryuTTTrryuufgytturtyud');

const frequencyQuaracter = (string) => {
    string.toLowerCase();
    return string.split('').reduce((acc, char) => {
        let len = string.split(char).length - 1;
        console.log(len);
        return len > acc[1] ? [char, len] : acc
    }, [0, ''])[0];
};

frequencyQuaracter('');