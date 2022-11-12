"use strict";
console.log('connected');
function diameterOfBinaryTree(root) {
    let res = 0;
    function dfs(root) {
        if (!root) {
            return -1;
        }
        ;
        let left = dfs(root.left);
        let right = dfs(root.right);
        res = Math.max(res, 2 + left + right);
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return res;
}
;
//# sourceMappingURL=app.js.map