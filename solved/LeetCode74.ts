function searchMatrix(matrix: number[][], target: number): boolean {
    let a:number = 0;
    let b:number = matrix[0].length -1;

    let k:number = -1;
    let j:number = matrix.length;

    if (target < matrix[0][0] || target > matrix[j-1][b] ){return false}
    while (k+1 !== j){
        let wArray:number = Math.floor((k+j)/2); //matrix
        if ( (matrix[wArray][a] <= target && target <= matrix[wArray][b]) ){
            if (matrix[wArray][a] == target || matrix[wArray][b] == target){return true};

            while(a+1 < b){
                let c:number = Math.floor((a+b)/2); //array
                if (matrix[wArray][c] == target){
                    return true
                } else if ( matrix[wArray][c] < target ){
                    a = c;
                } else if ( matrix[wArray][c] > target ){
                    b = c;
                }
            }
            return false;
        } else if( matrix[wArray][0] > target ){
            j = wArray;
        } else if( matrix[wArray][b] < target ) {
            k = wArray;
        } else {break};
    }
    return false;
};