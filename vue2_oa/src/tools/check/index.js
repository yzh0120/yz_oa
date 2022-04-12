// import * as reg from "../reg/index.js"


//正则测试
//https://www.runoob.com/try/try.php?filename=tryjsref_regexp1


/*身份证正则（大陆，香港，新加坡） */
export function idCard(rule, value, callback) {
	if (value) {
		let reg = /^\d{17}(\d|[X])$|^[A-Z]\d{6}（[\dA]）$|^[A-Z]\d{7}[A-Z]$/;
		if (reg.test(value)) {
			callback();
		} else {
			callback(new Error("请输入正确的身份证号码"));
		}
	} else {
		callback();
	}

}



/* 手机号和座机正则 */
export function phone(rule, value, callback) {
  if (value) {
    var reg = /^1[3,4,5,6,7,8,9][0-9]\d{8}$/;
    var reg1 = /^[0][1-9]{2,3}-[0-9]{5,10}$/; //带区号
    if (reg.test(value) == false && reg1.test(value) == false) {
      callback("请输入正确的联系方式");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/**
 * 手机号正则
 */
export function mobile(rule, value, callback) {
  if (value) {
    var reg = /^1[3,4,5,6,7,8,9][0-9]\d{8}$/;
    if (reg.test(value) == false) {
      callback("请输入正确的手机号");
    } else {
      callback();
    }
  } else {
    callback();
  }
}


/**
 * 只允许中文、括号
 */
export function zh(rule, value, callback) {
  if (value) {
    var reg = /^[\u4e00-\u9fa5\（\）\(\)]+$/;
    if (reg.test(value) == false) {
      callback("自允许中文或者括号");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/**
 * 只允许中文、括号、正整数
 */
export function zhOrZheng(rule, value, callback) {
  if (value) {
    var reg = /^[\u4e00-\u9fa5\（\）\(\)\d]+$/;
    if (reg.test(value) == false) {
      callback("请输入中文");
    } else {
      callback();
    }
  } else {
    callback();
  }
}


/**
 * 正整数、负整数和小数
 */
export function zhengOrFuOrFloat(rule, value, callback) {
  if (value) {
    var reg = /^(\-|\+)?\d+(\.\d+)?$/;
    if (reg.test(value) == false) {
      callback("请输入正数、负数和小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/**
 * 正整数和小数
 */
export function zhengOrFloat(rule, value, callback) {
  if (value) {
    var reg = /^\d+(\.\d+)?$/;
    if (reg.test(value) == false) {
      callback("请输入正数和小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/**
 * 负整数和小数
 */
export function fuOrFloat(rule, value, callback) {
  if (value) {
    var reg = /^(\-)\d+(\.\d+)?$/;
    if (reg.test(value) == false) {
      callback("请输入负数和小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/**
 * 正整数
 */
export function zheng(rule, value, callback) {
  if (value) {
    var reg = /^\d+$/;
    if (reg.test(value) == false) {
      callback("请输入正数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/* 最大允许12位正整数内以及6位小数 */
export function zhengNum11_6(rule, value, callback) {
	if (value) {
		let reg = /^[1-9]\d{0,11}(\.\d{1,6})?$|^0(\.\d{1,6})?$/;
		if (reg.test(value) == false) {
			callback("最大允许12位整数内以及6位小数");
		} else {
			callback();
		}
	} else {
		callback();
	}
}


























// export function vxe({ cellValue }) {
// 	if (cellValue) {
// 		var reg = /^[1-9]\d{0,11}(\.\d{1,6})?$|^0(\.\d{1,6})?$/;
// 		if (reg.test(cellValue) == false) {
// 			 return new Error('最大允许12位整数内以及6位小数')
// 		} else {
			
// 		}
// 	} else {
		
// 	}

// }

export function demo(rule, value, callback) {
	if (value) {
		let reg = /^[1-9]\d{0,11}(\.\d{1,6})?$|^0(\.\d{1,6})?$/;
		if (reg.test(value) == false) {
			callback("最大允许12位整数内以及6位小数");
		} else {
			callback();
		}
	} else {
		callback();
	}

}