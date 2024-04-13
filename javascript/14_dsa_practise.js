// String is areAnagrams or not

str1 = "hello"
str2 = "elohl"

// Method - 1
function areAnagram1(str1, str2) {
    return str1.split('').sort().join() === str2.split('').sort().join();
}

console.log(areAnagram1(str1, str2))

// Method - 2
function areAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const  charCount1 = {};
    for (let i of str1) {
        // console.log(i);
        if(charCount1[i]){
            charCount1[i]++;
        } else {
           charCount1[i]=1;  
        }
    }
    const  charCount2 = {};
    for (let i of str1) {
        // console.log(i);
        if(charCount2[i]){
            charCount2[i]++;
        } else {
           charCount2[i]=1;  
        }
    }
    console.log(JSON.stringify(charCount1) === JSON.stringify(charCount2)); // true
    // for (let j of str2){
    //     console.log(j, charCount[j]);
    //     if (!charCount[j]) {
    //         return false;
    //     }
    //     charCount[j]--;
    // }
    return true;
}

console.log(areAnagram2(str1, str2))

