				let dateObj = {};
              this.data = res.data.alterRecords;
              this.data.forEach((item, index) => {
															this.data[index].timeStamp = new Date( item.changeDate).getTime();//这个只是为了排序
                var temp = item.changeDate.slice(0, 4);//特征
                if (dateObj[temp]) {//如果存在特征
                  //已经存在属性
                  dateObj[temp]++;
                } else {
                  //不存在属性
                  dateObj[temp] = 1;
                }
              });
			  
			  let arr = []
			  for(let key of Object.keys(dataObj)){
					arr.push(dataObj[key])
			  }
			  bubble(arr) //排序