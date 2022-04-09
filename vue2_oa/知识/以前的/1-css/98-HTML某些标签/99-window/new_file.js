
window.scrollTo({ 
    top: 1000, 
    behavior: "smooth" 
});
原生JS基于window.scrollTo()封装垂直滚动动画工具函数
https://blog.csdn.net/weixin_34405332/article/details/88792429?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242

如何兼容window.scroll or window.scrollTo 在iOS下无滚动动画
https://www.cnblogs.com/boyuguoblog/p/14448486.html
-------------------------------------------
document.getElementById(label).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐。默认值
      });
详细介绍scrollIntoView（）方法属性
https://blog.csdn.net/learn8more/article/details/108047794