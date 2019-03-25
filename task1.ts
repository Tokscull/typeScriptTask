let names = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt",
    "znnnnfqknaz", "qqquuhii", "dvvvwz"]

function task1(arrayString: string[], ... args: string[]) {
    let maxLength = 0;
    for (const i in arrayString) {
        if (i) {
            for (const j in args) {
                if (Math.abs(names[i].length - names[j].length) > maxLength) {
                    maxLength = Math.abs(names[i].length - names[j].length);
                }
            }
        }

    }
    // tslint:disable-next-line
    console.log(maxLength)

}
task1(names);
