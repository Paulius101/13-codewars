function reverseWords(str) {
    let splitStr = str.split(" ");
    let revStr = splitStr.reverse()
    return revStr.join(' ');
}

// Complete the solution so that it reverses all of the words within the string passed in.