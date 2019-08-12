export function getToday () {
    let date = new Date();
    let fmt = 'yyyyMMdd';
    if (/(y+)/.test(fmt)) { // 年
        let year = date.getFullYear().toString();
        fmt = fmt.replace(RegExp.$1, year)
    }
    if (/(M+)/.test(fmt)) { // 月
        let mouth:any = date.getMonth() + 1;
        if (mouth < 10) {
            mouth = '0' + mouth
        }
        fmt = fmt.replace(RegExp.$1, mouth)
    }
    if (/(d+)/.test(fmt)) { // 日
        let mydate:any = date.getDate();
        if (mydate < 10) {
            mydate = '0' + mydate
        }
        fmt = fmt.replace(RegExp.$1, mydate)
    }
    return fmt
}

export function getRandom (start: number, end: number) {
    let choice = end - start;
    return '0' + Math.floor(Math.random() * choice + start);
}
