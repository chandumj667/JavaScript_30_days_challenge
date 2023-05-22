/**
 * 2633. Convert Object to JSON String
 * LeetCode Problem Link : https://leetcode.com/problems/convert-object-to-json-string/?utm_campaign=PostD18&utm_medium=Post&utm_source=Post&gio_link_id=GPnkNmWo
 * 
 * Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.



Example 1:

Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation: 
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().


Example 2:

Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.


Example 3:

Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
Explanation:
Objects and arrays can include other objects and arrays.


Example 4:

Input: object = true
Output: true
Explanation:
Primitive types are valid inputs.


Constraints:

object includes strings, integers, booleans, arrays, objects, and null
1 <= JSON.stringify(object).length <= 105
maxNestingLevel <= 1000
all strings will only contain alphanumeric characters

 */

// JS Code

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    const type  = typeof object
    if(type === "string"){
        return `"${object}"`;
    }else if(Array.isArray(object)){
        let res = "["
        for(let key in object){
            if(res !== "["){
                res = `${res},`
            }
            res = `${res}${jsonStringify(object[key])}`
        }
        return `${res}]`;
    }else if (type === 'object' && object !== null){
        let res = "{"
        for(let key in object){
            if(res !== "{"){
                res = `${res},`
            }
            res = `${res}"${key}":${jsonStringify(object[key])}`
        }
        return `${res}}`;
    }else{
        return object;
    }
};