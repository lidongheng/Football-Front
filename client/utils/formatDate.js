export const formatDatetime = stringTime => {
  // let date = new Date(Date.parse(new Date(stringTime)));
  let date = new Date(stringTime);
  let fmt = 'yyyy-MM-dd HH:ii:ss';
  if (/(y+)/.test(fmt)) { // 年
    let year = date.getFullYear().toString();
    fmt = fmt.replace(RegExp.$1, year)
  }
  if (/(M+)/.test(fmt)) { // 月
    let mouth = date.getMonth() + 1;
    if (mouth < 10) {
      mouth = '0' + mouth
    }
    fmt = fmt.replace(RegExp.$1, mouth)
  }
  if (/(d+)/.test(fmt)) { // 日
    let mydate = date.getDate();
    if (mydate < 10) {
      mydate = '0' + mydate
    }
    fmt = fmt.replace(RegExp.$1, mydate)
  }
  if (/(H+)/.test(fmt)) { // 时
    let hours = date.getHours();
    if (hours < 10) {
      hours = '0' + hours
    }
    fmt = fmt.replace(RegExp.$1, hours)
  }
  if (/(i+)/.test(fmt)) { // 分
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    fmt = fmt.replace(RegExp.$1, minutes)
  }
  if (/(s+)/.test(fmt)) { // 秒
    let seconds = date.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    fmt = fmt.replace(RegExp.$1, seconds)
  }
  return fmt
}

export const formatDate = stringTime => {
  // let date = new Date(Date.parse(new Date(stringTime)));
  let date = new Date(stringTime);
  let fmt = 'yyyy-MM-dd';
  if (/(y+)/.test(fmt)) { // 年
    let year = date.getFullYear().toString();
    fmt = fmt.replace(RegExp.$1, year)
  }
  if (/(M+)/.test(fmt)) { // 月
    let mouth = date.getMonth() + 1;
    if (mouth < 10) {
      mouth = '0' + mouth
    }
    fmt = fmt.replace(RegExp.$1, mouth)
  }
  if (/(d+)/.test(fmt)) { // 日
    let mydate = date.getDate();
    if (mydate < 10) {
      mydate = '0' + mydate
    }
    fmt = fmt.replace(RegExp.$1, mydate)
  }
  return fmt
}
