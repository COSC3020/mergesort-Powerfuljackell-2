function mergesort(array) {
    var n = array.length;
    for (i = 1; i <= n - 1; i = 2 * i) {
        for (j = 0; j < n - 1; j += 2 * i) {
            var mid = Math.min(j + i - 1, n - 1);
            var right_end = Math.min(j + 2 * i - 1, n - 1);
            mergeInPlace(array, j, mid, right_end);
        }
    }
    return array;
}

function mergeInPlace(a, l, m, r) {
    let max = Math.max(a[m], a[r]) + 1;
 
    let i = l, j = m + 1, k = l;
    while (i <= m && j <= r && k <= r) {
     
    // recover back original element to compare
        let elem1 = a[i] % max;
        let elem2 = a[j] % max;
        if (elem1 <= elem2) {
            a[k] += (elem1 * max);
            i++;
            k++;
        }
        else {
            a[k] += (elem2 * max);
            j++;
            k++;
        }
    }
    //increases time complexity
    while (i <= m) {
        let el = a[i] % max;
        a[k] += (el * max);
        i++;
        k++;
    }
 
    while (j <= r) {
        let el = a[j] % max;
        a[k] += (el * max);
        j++;
        k++;
    }
 
    for (let i = l; i <= r; i++)
        a[i]= Math.floor(a[i] / max);
}