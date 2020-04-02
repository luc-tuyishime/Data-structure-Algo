function isPalindrome(string) {
    string.toLowerCase();
    const characters = string.split('');
    const validCharacter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(validCharacter);
    const lettersArray = [];
    characters.forEach(char => {
        if (validCharacter.indexOf[char] > -1) lettersArray.push(char);

    });
    if (lettersArray.join('') === lettersArray.reverse().join('')) return true;
    else return false
}

console.log(isPalindrome('Madam I am Adam'));


