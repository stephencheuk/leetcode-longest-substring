/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

var lengthOfLongestSubstring = function(s) {
  var block = "";
  var len = 0;
  for(var i=0; i<=s.length; i++){
    var r = s.substr(i, 1);
    var idx = block.indexOf(r);
    if(idx == -1){
      block = block + r;
    }else{
      if(len < block.length) len = block.length;
      block = block.substr(idx + 1, block.length - idx - 1);
      block = block + r;
    }
  }
  return len;
};

var Method1 = lengthOfLongestSubstring;

var output = function (){
  var argv = [];
  for(var i=0; i<arguments.length; i++) argv.push(arguments[i]);
  console.log(argv);
}

var check = function (ans, res){
  try{
    return res == ans ? 'Right' : 'Wrong';
  }catch(e){
    return "Check Fail";
  }
}
console.log('Method 1');
console.log('test 1 : ', ans = 3, " vs ", res = Method1("abcabcbb"), check(ans, res));
console.log('test 2 : ', ans = 1, " vs ", res = Method1("bbbbb"),    check(ans, res));
console.log('test 3 : ', ans = 3, " vs ", res = Method1("pwwkew"),   check(ans, res));
console.log('test 3 : ', ans = 2, " vs ", res = Method1("aab"),      check(ans, res));
console.log('test 3 : ', ans = 3, " vs ", res = Method1("dvdf"),      check(ans, res));
console.log('test 3 : ', ans = 3, " vs ", res = Method1("aabaab!bb"),      check(ans, res));

