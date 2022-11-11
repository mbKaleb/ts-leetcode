console.log('connected');


function diameterOfBinaryTree(root: TreeNode | null): number {
    let res = 0
    function dfs(root:TreeNode) {
        if (!root) {return -1};
        let left:number = dfs(root.left);
        let right:number = dfs(root.right);
        res = Math.max(res, 2 + left + right)
        return 1 + Math.max(left, right)
    }
    dfs(root)
    return res
// };
