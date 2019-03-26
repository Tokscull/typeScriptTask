
function getMaxDifference(arrayString: string[], ...otherString: string[]): number {
    let maxLength: number = 0;
    for (const array of arrayString) {
        for (const other of otherString) {
            if ((Math.abs(array.length - other.length)) > maxLength) {
                maxLength = Math.abs(array.length - other.length);
            }
        }
    }
    if (maxLength > 0) {
        return maxLength;
    } else {
        return -1;
    }
}

let a1 = ["4444", "1", "333"]

// tslint:disable-next-line
console.log(getMaxDifference(a1,"22","999999999","55555"));
