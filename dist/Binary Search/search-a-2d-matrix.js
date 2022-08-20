"use strict";
function searchMatrix(matrix, target) {
    let a = -1;
    let b = matrix.length;
    let aLen = matrix[0].length;
    debugger;
    while (a + 1 < b) {
        let c = Math.floor((a + b) / 2);
        if (matrix[c][0] <= target && target <= matrix[c][aLen - 1]) {
            let ax = -1;
            let bx = aLen;
            while (ax + 1 < bx) {
                let cx = Math.floor((ax + bx) / 2);
                if (matrix[c][cx] === target) {
                    return true;
                }
                else if (matrix[c][cx] < target) {
                    ax = cx;
                }
                else if (matrix[c][cx] > target) {
                    bx = cx;
                }
            }
        }
        if (matrix[c][0] < target)
            a = c;
        else if (matrix[c][0] > target)
            b = c;
    }
    return false;
}
//# sourceMappingURL=search-a-2d-matrix.js.map