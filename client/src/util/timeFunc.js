
export const questionListTime = (time) => {
  // ---------------------
  // 2022-10-26  정희찬
  // 경과 시간 계산하는 함수 추가
  // ----------------------
    let nowTime = new Date();
    let createdTime = new Date(time);
    let elapsedMsec = nowTime.getTime() - createdTime.getTime();
    let result = "";

    // 경과 시간
    const elsTime = {
      elapsedSec: elapsedMsec / 1000,
      elapsedMin: elapsedMsec / 1000 / 60,
      elapsedHour: elapsedMsec / 1000 / 60 / 60,
      elapsedDay: elapsedMsec / 1000 / 60 / 60 / 24,
    };
    if (elsTime.elapsedDay < 1) {
      if (elsTime.elapsedHour >= 1 && elsTime.elapsedHour < 24) {
        if (Math.floor(elsTime.elapsedHour) === 1) {
          result = Math.floor(elsTime.elapsedHour) + " hour ago";
        } else {
          result = Math.floor(elsTime.elapsedHour) + " hours ago";
        }
      }
    }
    if (elsTime.elapsedHour < 1) {
      if (elsTime.elapsedMin >= 1 && elsTime.elapsedMin < 60) {
        if (Math.floor(elsTime.elapsedMin) === 1) {
          result = Math.floor(elsTime.elapsedMin) + " min ago";
        } else {
          result = Math.floor(elsTime.elapsedMin) + " mins ago";
        }
      }
    }
    if (elsTime.elapsedMin < 1) {
      if (elsTime.elapsedSec >= 0 && elsTime.elapsedSec < 60) {
        if (Math.floor(elsTime.elapsedSec) === 1) {
          result = Math.floor(elsTime.elapsedSec) + " sec ago";
        } else {
          result = Math.floor(elsTime.elapsedSec) + " secs ago";
        }
      }
    }
    if (elsTime.elapsedDay >= 1 && elsTime.elapsedDay < 2) {
      result = Math.floor(elsTime.elapsedDay) + " day ago";
    } else if (elsTime.elapsedDay >= 2 && elsTime.elapsedDay < 3) {
      result = Math.floor(elsTime.elapsedDay) + " days ago";
    } else if (elsTime.elapsedDay >= 3) {
      result = createdTime.toLocaleString("en");
    }

    return result;
  };

