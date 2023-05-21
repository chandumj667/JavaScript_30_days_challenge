/**
 * 2628. JSON Deep Equal
 * LeetCode Problem Link : https://leetcode.com/problems/json-deep-equal/submissions/
 * 
 * Given two objects o1 and o2, check if they are deeply equal.

For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

Please solve it without using lodash's _.isEqual() function.



Example 1:

Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
Output: true
Explanation: The keys and values match exactly.


Example 2:

Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.


Example 3:

Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.


Example 4:

Input: o1 = true, o2 = false
Output: false
Explanation: true !== false

Constraints:

1 <= JSON.stringify(o1).length <= 105
1 <= JSON.stringify(o2).length <= 105
maxNestingDepth <= 1000
 */

// JS Code

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
const areDeeplyEqual = (o1, o2) => {
    // Returns true if objects pass the equality check, meaning they have the same reference.
    // Also covers primitive values (number, string, boolean), null, and undefined.
    if (o1 === o2) {
        return true;
    }

    // Handles the case when both objects are arrays.
    if (Array.isArray(o1) && Array.isArray(o2)) {
        // Proceeds only if arrays have the same lengths.
        if (o1.length === o2.length) {
            for (let i = 0; i < o1.length; i++) {
                // Returns false if the n-th elements do not match.
                if (!areDeeplyEqual(o1[i], o2[i])) {
                    return false;
                } 
            }

            return true;
        }

        // Returns false if arrays have different lengths.
        return false;
    }

    // Handles the case when both objects are objects.
    if(typeof o1 === 'object' && !Array.isArray(o1) && typeof o2 === 'object' && !Array.isArray(o2)) {
        const o1Keys = Object.keys(o1);
        const o2Keys = Object.keys(o2);

        // Proceeds only if objects' keys have the same lengths.
        if (o1Keys.length !== o2Keys.length) {
            return false;
        }

        for (let i = 0; i < o1Keys.length; i++) {
            const key = o1Keys[i];
            // Returns false if the values stored under the same key do not match.
            if (!areDeeplyEqual(o1[key], o2[key])) {
                return false;
            }
        }

        return true;
    }

    // Returns false otherwise.
    return false;
};