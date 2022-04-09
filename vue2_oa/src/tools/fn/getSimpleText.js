//获取html内的文字
export default function(str) {
      if (str) {
        str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim(); //去掉所有的html标签和&nbsp;之类的特殊符合
        return str;
      } else {
        return "";
      }
    }