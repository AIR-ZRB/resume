const resume = `
## 专业技能

+ 熟悉HTML和HTML5，理解语义化灵活使用常见标签
+ 熟悉CSS和CSS3新增属性，能够是使用sass，less框架，熟悉使用flex，grid布局
+ 掌握Javascript，ES新特性
+ 属性使用Vue，Vuex，Vue-router进行开发
+ 熟悉使用React，
+ 熟悉各种跨域方法，jsonp
+ 熟悉使用webpack对项目构建，打包
+ 能够使用git对代码进行管理
+ 熟悉开发微信小程序
+ 能够使用bootstrap，ElementUI，jquery
+ 对移动端的rem


## 项目经验

### 移动端记账软件（未完成）

+ 使用技术：vue，vuex，vue-router，cordova，sass，webpack
+ 项目描述：灵感来源于叨叨记账，能够对每日的消费进行输入记录，能够看到每个月的花销情况，
+ 项目分析：使用了cordova来操作文件系统，能够让数据保存，使用vue-router来进行路由的跳转，使用vuex来对之间的传值，使用webpack对项目进行打包优化

### 音乐播放器（未开始）

+ 使用技术：vue，vuex，vue-router，sass，webpack
+ 项目描述：因为受不了本身app的广告，自己做了一个，能够搜索音乐，主播电台，查看评论，
+ 项目描述：使用vue来作为主框架，使用vue-router对页面进行跳转，使用sass来进行样式的书写，使用webpack对项目进行打包优化

### 简历生成器（未完成）

+ 使用技术：jquery，Promise
+ 项目描述：让简历以动画的效果呈现，主要使用Promise来处理异步操作
`



const style = `
/* 
    页面的样式结构
*/
body {
   
    background-image: linear-gradient(to right,#FFFFCC,#FFCCCC);
}

.container {
    width: 98%;
    height: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

}

.code {
    width: 30%;
    padding: 10px;
    background: #66CCCC;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
}

/* 
    现在开始简历里的内容
*/
.content {
    width: 68%;
    background: #fff;
    padding: 10px 20px;
}

`



class resumeComponent {


    constructor(){
        // 播放的速度
        this.delay = 20;
    }


    // 生成简历
    async generate() {
        let aa = await this.startStyle();
        console.log(aa)
        let bb = await this.startResume();

        console.log(bb)
    }


    startStyle() {

        let _this = this;
        return new Promise((resolve) => {
            let index = 0;
            let timer = setInterval(() => {
                if (index < style.length) {
                    index++;
                    $("#style").html(style.substr(0, index));
                    $("#code").html(style.substr(0, index));
                } else {
                    clearInterval(timer);
                    resolve("页面初始样式完成")
                }
            }, this.delay)
        })

    }

    startResume() {
        return new Promise((resolve) => {
            let index = 0;
            let timer = setInterval(() => {
                if (index < resume.length) {
                    index++; 
                    $("#resumeContent").html(resume.substr(0, index));
                } else {
                    clearInterval(timer);
                    resolve("简历内容完成")
                }
            }, this.delay)
        })

    }


}

// 调用
new resumeComponent().generate();



// 创建一个promise对象，当ajax函数请求完成之后，再success函数中调用promise


// const startWrite = () => {
//     // 接收到数据开始执行此函数
//     // 使用递归调用来判断是否全部输出完

// }


