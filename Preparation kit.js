//------------------------------------------------------------------------

// Sales by match
// Problem: Sales by Match
// Description: 
// Given an array where each element represents a sock color, 
// determine how many matching pairs of socks you can form.
//
// Sample Input:
// 9
// [10, 20, 20, 10, 10, 30, 50, 10, 20]
//
// Sample Output:
// 3
//
// Explanation:
// - Two pairs of 10
// - One pair of 20
// - 30 and 50 don't have pairs


function sockMerchant(n, ar) {
    // Write your code here
    let pares = 0;
    const bolsita = new Set();

    for(let i = 0; i<n; i++){
        if(bolsita.has(ar[i])){
            pares++
            bolsita.delete(ar[i])
        }else{
            bolsita.add(ar[i])
        }
    }
    return(pares)
}

//------------------------------------------------------------------------

// Problem: Counting Valleys
// Description: 
// Given a sequence of 'U' (uphill) and 'D' (downhill) steps, 
// track a hiker's path starting at sea level and count the number of valleys.
// A valley is a sequence of steps below sea level that starts with a down step and ends with an up step.
//
// Sample Input:
// 8
// "UDDDUDUU"
//
// Sample Output:
// 1
//
// Explanation:
// - The hiker goes below sea level once and comes back up, completing one valley.

function countingValleys(steps, path) {
    // Write your code here
    let up = 0;
    let valley = 0;
    for(let i=0; i<steps; i++){
        if (path[i]=== "U"){
            up+=1
            if(up == 0){
                valley+= 1;
            }
        }else if(path[i]=== "D"){
            up-=1
        }
    }
    return (valley)
}

//------------------------------------------------------------------------

// Problem: Jumping on the Clouds
// Description: 
// Starting at the first cloud, you can jump either 1 or 2 clouds ahead. 
// You must avoid clouds with thunderheads (represented by 1).
// Find the minimum number of jumps needed to reach the last cloud.
//
// Sample Input:
// 7
// [0, 0, 1, 0, 0, 1, 0]
//
// Sample Output:
// 4
//
// Explanation:
// - Path: 0 -> 0 -> 0 -> 0 -> 0 (minimum jumps by skipping thunderclouds)

function jumpingOnClouds(c) {
    // Write your code here

    let count = 0;
let i = 0;

while (i < c.length-1) {
    if (c[i+2] == 0 && i+2 <c.length) {
        // Saltar 2
        i += 2;
    } else {
        // Saltar 1
        i += 1;
    }
    count++;
}

return count;
}

//------------------------------------------------------------------------

// Problem: Repeated String
// Description:
// You are given a string `s` and a number `n`. The string is repeated infinitely, and 
// you need to determine how many times the letter 'a' appears in the first `n` characters 
// of the infinite string formed by repeating `s`.
//
// Sample Input:
// s = "aba"
// n = 10
//
// Sample Output:
// 7
//
// Explanation:
// The infinite string formed by repeating "aba" is:
// "abaabaabaabaabaaba..." (repeated infinitely)
//
// In the first 10 characters, the letter 'a' appears 7 times.
// The path is: "abaabaabaa" where 'a' appears 7 times.


function repeatedString(s, n) {
    // Write your code here
    let strLength = s.length;
    
    let count = 0;
    for(let i =0; i<strLength; i++){
        if (s[i]=='a'){
            count++;
        }
    }
    
    let repeatedStr =Math.floor(n /strLength) 
    
    let strLeftLength = n % strLength
    
    let extra = 0;
    for (let i = 0; i< strLeftLength; i++){
        if (s[i]== 'a'){
            extra++;
        }
    }
    return((repeatedStr * count)+extra)
}
