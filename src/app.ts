console.log('connected');


function maxDepth(root: TreeNode | null): number {
    if (!root) return null
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

