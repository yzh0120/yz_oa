
//金额千分位， 小数点后保留小数位

export default function(s, n = 2) {
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""; //n为小数点后保留小数位
	var l = s.split(".")[0].split("").reverse(),
		r = s.split(".")[1],
		t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
}
/*
逆行函数
function rprice(s){   
   return parseFloat(s.replace(/[^\d\.-]/g, ""));   
}
*/
