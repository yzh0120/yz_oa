			var temp = [] //缓存
          res.data &&
            res.data[0] &&
            res.data.forEach((item,index)=>{
              item.getTime = new Date(res.data[index].createDate.slice(0, 10)).getTime()//给每个成员添加时间
              temp.push(item.getTime)
            })
          //获取最大值
          this.lastDate = Math.max(...temp)
          var lastTwoArr = res.data.filter((item,index)=>{
              if(item.getTime == this.lastDate   ){
                this.lastCount++;//最近时间 ++ 
                return false;
              }else{
                return true
              }
            })
            temp=[]
          lastTwoArr[0] &&
          lastTwoArr.forEach((item)=>{
            temp.push(item.getTime)
          })
          //获取次大值
          this.lastTwo = Math.max(...temp)
          lastTwoArr.forEach((item)=>{
            if(item.getTime == this.lastTwo){
                this.lastTwoCount++;//最近次时间 ++ 
              }
          })
          this.lastDate = new Date(this.lastDate).getFullYear() + "-" + (new Date(this.lastDate).getMonth() + 1) +"-" + new Date(this.lastDate).getDate()   
          this.lastTwo = new Date(this.lastTwo).getFullYear() + "-" + (new Date(this.lastTwo).getMonth() + 1) +"-" + new Date(this.lastTwo).getDate()  

          if (this.lastCount > this.lastTwoCount) {
            this.trend = "增加";
          } else if (this.lastCount == this.lastTwoCount) {
            this.trend = "相等";
          } else if (this.lastCount < this.lastTwoCount) {
            this.trend = "减少";
          }