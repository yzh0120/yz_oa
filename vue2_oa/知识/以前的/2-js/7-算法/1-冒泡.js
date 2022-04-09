// 编写方法，实现冒泡
    bubble(arr,props,) {
      // 1:套一个函数的壳子，将参数传入
      //外层循环，控制趟数，每一次找到一个最大值
      for (var i = 0; i < arr.length - 1; i++) {
        // 内层循环,控制比较的次数，并且判断两个数的大小
        for (var j = 0; j < arr.length - 1 - i; j++) {
          

          if (props) {//如果是数组对象
            if (arr[j][props] < arr[j + 1][props]) {// 白话解释：如果前面的数小，放到后面(当然是从大到小的冒泡排序)
              //比较排序
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          } else {
            if (arr[j] < arr[j + 1]) {// 白话解释：如果前面的数小，放到后面(当然是从大到小的冒泡排序)
              //比较排序
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
          
        }
      }
      return arr; //2: 将执行完的结果返回就可以
    },