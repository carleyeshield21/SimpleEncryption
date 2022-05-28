function encrypt(text, n) {

    // We will use the while loop to iterate until it reaches n. Then we set the value of j=1 to initialize the while loop. We place the variable string outside the while loop to rest the value in each iteration. We push the text value to the string array.
    j = 1
    string = []
    string.push(text)
    console.log(`The given text is ${text}`)
    
    while(j<=n){
    
        // string = []
        // string.push(given)
        // console.log(string)
        // We assign here a variable of stringconv to convert the string variable to a type string to be used in the for loop
        stringconv = string.toString()
        
        // We create again two arrays for the odd and even indices for each element to satisfy the if-else condition, by using the modulus division
        odd = []
        even = []
        for(i=0; i<=stringconv.length-1; i++){
        // console.log(stringconv[i])
    
            if(i%2 != 0){
                odd.push(stringconv[i])
            } else {
                even.push(stringconv[i])
            }
        }
    
        // console.log(odd, even)
        // We concatenate the odd and even arrays in each iteration and concert it to a string , we then replace the commas with single space
        concat = odd.concat(even).toString()
        concat = concat.replace(/,/g, '')
        // console.log(concat)
        string.pop()
        // console.log(string)
        string.push(concat)
        console.log(string)
    
    
        j++
    }
}
encrypt('012345', 3)
console.log('=====')
encrypt('01234', 2)
console.log('=====')
encrypt('01234', 3)
console.log('=====')