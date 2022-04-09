<template>
	<!--  
	el-scrollbar只是一个包含滚动的容器（$containerWidth），
	内部有完整长度的元素 $scrollWrapper（div.el-scrollbar__wrap）
	-->
  <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>

<script>
const tagAndTagSpacing = 4; // tagAndTagSpacing

export default {
  name: "ScrollPane",
  data() {
    return {
      left: 0,
    };
  },
  computed: {
    scrollWrapper() {
		//div.el-scrollbar__wrap 就是el的滚动条         子元素是el-scrollbar__view
      return this.$refs.scrollContainer.$refs.wrap;
    },
  },
  mounted() {
    this.scrollWrapper.addEventListener("scroll", this.emitScroll, true);
  },
  beforeDestroy() {
    this.scrollWrapper.removeEventListener("scroll", this.emitScroll);
  },
  methods: {
	  //滚动事件
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40;
      const $scrollWrapper = this.scrollWrapper;
	  // - 是正常   + 是反着来
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft - eventDelta / 4;
    },
    emitScroll() {
      this.$emit("scroll");
    },
    moveToTarget(currentTag) {//currentTag 是传入的 tag对象
      const $container = this.$refs.scrollContainer.$el;//获取容器dom 
      const $containerWidth = $container.offsetWidth;//容器总长度
      const $scrollWrapper = this.scrollWrapper;//el的滚动条
      const tagList = this.$parent.$refs.tag;//父组件的tag集合

      let firstTag = null;
      let lastTag = null;

      // 只要tagList有tag，让第一个和最后一个手动赋值非  firstTag 和 lastTag
      if (tagList.length > 0) {
        firstTag = tagList[0];
        lastTag = tagList[tagList.length - 1];
      }

      if (firstTag === currentTag) {//如果 firstTag 等于传入的tag
        $scrollWrapper.scrollLeft = 0;//左边的滚动距离是 0 
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth;//el滚动条的宽度 - 外部容器的长度
      } else {//currenttag在中间
        // 发现前一个tag和后一个tag
        const currentIndex = tagList.findIndex((item) => item === currentTag);//tag在tagList的index
        const prevTag = tagList[currentIndex - 1];
        const nextTag = tagList[currentIndex + 1];

        //后一个tag的左边被隐藏的宽度+ 一个tag的宽度 +  固定值
        const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing;

        // 前一个tag的左边滚动距离 - 固定值
        const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagAndTagSpacing;
		//后一个tag的左边被隐藏的宽度  > el的滚动条的被隐藏的宽度  + 外部容器的长度
		//结果说明当前tag在滚动容器 右边
        if ( afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth ) {
			//设置el的滚动条的左边被隐藏的宽度 = 后一个tag的左边被隐藏的宽度  - 外部容器的长度
			//结果导致当前tag正好在 外部容器的第一个
          $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth;
		  //前一个tag的左边被隐藏的宽度  < el的滚动条的被隐藏的宽度
		  //结果说明当前tag在滚动容器 左边或者正好在外部容器的第一个
        } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
			//设置el的滚动条的左边被隐藏的宽度 = 前一个tag的左边被隐藏的宽度
			////结果导致当前tag正好在 外部容器的第一个
          $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  /deep/ {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: $el-scrollbar__wrap; //改item高度 就修改这个 2  这个高度必须比tags-view-item高 23px
    }
  }
}
</style>

<!-- 
 <style lang="scss" scoped>
 .scroll-container {
   white-space: nowrap;
   position: relative;
   overflow: hidden;
   width: 100%;
   /deep/ {
     .el-scrollbar__bar {
       bottom: 0px;
     }
     .el-scrollbar__wrap {
       height: 40px;//改item高度 就修改这个 2  这个高度必须比tags-view-item高 14px
       // margin-bottom: 0px !important;
     }
   }
 }
 </style>
 -->
