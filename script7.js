


//1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -


// function truncateString(str, num) {
//     if(str.length > num){
//       if(num > 4){
//         str = str.substr(0,num + 2) + '...';
//       }
//       else{
//         str = str.substr(0,num) + '...';
//       }
//     }
//     return str;
//   }console.log(truncateString("Ice Cream",5));


//  ******************************************************************************************************************************************************************************************


//2. Input a String S with multiple words, and remove whitespaces and
//output the result -


 
// var a = b = " today is boring buddy ";

// console.log( a.split(' ').join('') );
// console.log( b.replace( /\s/g, '') ); 


//  ******************************************************************************************************************************************************************************8


//3. Input a String S with two words, and replace first word with second word
//and display the result -


// <!DOCTYPE html>
// <html>
//     <head>

//     </head>
//     <script type="text/javascript">
//         const myStr="Hi Boy";
//        console.log(myStr.replace("Hi Boy","Boy Hi")); 

//     </script>
// </html>

// *************************************************************************************************************************************8


//4. Input a String S with a word, and replace character “a” with “x” and
//display the result -

/*
<!DOCTYPE html>
<html>
    <head>

    </head>
    <script type="text/javascript">
        const myStr="apple";
       console.log(myStr.replace("a","x")); 

    </script>
</html>

*/

// ********************************************************************************************************************************************

// 5. What string method can be used to convert string into array ?


//The string in JavaScript can be converted into a character array by using the split() and Array. from() functions.

// ***********************************************************************************************************************************************


//6. What string method can be used to check the occurrence of a specified
//text in a string?

//JavaScript String search() Method.


// ***************************************************************************************************************************************************


//7. How can you break a string to a newline in Javascript ?

//To Break a String To Newline we use \n.

// ********************************************************************************************************************************************


//8. Write a Javascript function to test whether the first character of a string
//is lowercase.


// function startsWithCapital(word){
//     return /[a-z]/.test(word.charAt(0))
// }

// console.log(startsWithCapital("hello world")) // if it is true means the first character is in lowercase.
// console.log(startsWithCapital("Hello World")) // if it is false the first character is in uppercase.


// ************************************************************************************************************************************************


//9.  Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

 
// let Str="yes"; // enter in lowercase or uppercase
// switch(Str){
//     case Str="YES":
//     case Str="Yes":
//     case Str="yes":    
    
//     console.log("Correct Verdict");
//     break;
//     default:
//         console.log("Not Verdict");
// }


// ***************************************************************************************************************************************************8



//10. Given a String S, achieve following tasks




// a) Convert the String into upper case.

// var p="today is holiday";
// var q=p.toUpperCase();
// console.log(q);
 
// ****************************************************

// b) Convert only the first character to uppercase.

// var p="apple";
// var q=p.replace("a","A");
// console.log(q);

// ****************************************************8

//c) Convert the String into lower case.


// var p="INEURON";
// var q=p.toLowerCase();
// console.log(q);

// *****************************************************


//d) Break the string into two halves and swap them.

// function myfun(){
  

//     var a = "ice cream".split(/\s+/);
// var p = [a.shift(), a.join(' ')];

// var b = "base ball".split(/\s+/);
// var q = [b.shift(), b.join(' ')];
// console.log ("splitted");
// console.log(p);
// console.log(q);


// var z=p;
// var x=q;
// var y=z;
// console.log("swapped"); 
// console.log(x);
// console.log(y);


// }myfun();

   
// ***************************************************************************************************


//e) Count the repeating characters.


// let myString = 'mathematices';
// let result = {};
// for (let str of myString) {
//   result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
// }
// console.log(result);


// ***********************************************


// f) Reverse the string

// function reverseString(str) {
//     console.log("** Before **");
//     console.log("hello");
//     console.log();
   
//     var splitString = str.split(""); 
   
// var reverseArray = splitString.reverse(); 
   
// var joinArray = reverseArray.join(""); 
// console.log("** After **");
// console.log(joinArray);
// }
 
// reverseString("hello");



// ***********************    ****************************























