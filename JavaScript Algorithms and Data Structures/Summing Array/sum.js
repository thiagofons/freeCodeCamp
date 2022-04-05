function sum(arr, n) {
    if(n <= 0)
        return 0;
    return arr[n - 1] + sum(arr, n-1);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sum(array, array.length));