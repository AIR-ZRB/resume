const resume = `

<h1>KB</h1>
<div>123213213</div>

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

* {
     transition: all .3s;
}
body {
    background-image: linear-gradient(#FFFFCC,#FFCCCC);
}

.container {
    width: 98%;
    height: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

}

.styleContainer {
    width: 36%;
    height: 100%;
    color: #fff;
    font-size: 14px;
}


.styleContainer .stylePre {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 10px;
    overflow-y: scroll;
    margin-top: 0;
    word-break:break-all;
    word-wrap:break-word;
    white-space:pre-wrap;

}
/* 
    现在开始简历里的内容
*/
.content {
    width: 63%;
    height: 100%;
    background: #fff;
    overflow-y: scroll;
    padding: 10px 20px;
    

}

/* 
    开始简历样式优化
*/
#resumeContent {
    white-space:pre-wrap
}

#resumeContent * {
    margin: 0;
  
}


#resumeContent h2 {
    padding: 5px 0;
    border-bottom: 1px dotted #000;
}

#resumeContent ul {
    font-size: 0;
    margin: 0;
}

#resumeContent li {
    line-height: 24px;
    font-size: 16px;
    margin: 0;
}
`



class resumeComponent {


    constructor() {
        // 播放的速度
        this.delay = 0;
    }


    // 生成简历
    async generate() {
        let aa = await this.startStyle();
        let bb = await this.startResume();


        let cc = await this.changeMarkdown();
        console.log(aa, bb, cc)
    }


    startStyle() {
        return new Promise((resolve) => {
            let index = 0;
            let timer = setInterval(() => {
                if (index < style.length) {
                    index++;
                    $("#style").html(style.substr(0, index));
                    $("#styleCode").html(Prism.highlight(style.substr(0, index), Prism.languages.css));

                    $("#stylePre").scrollTop(1000000);

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


    changeMarkdown() {


        return new Promise((resolve, reject) => {
            let resumeHtml = $("#resumeContent").html();
            $("#resumeContent").html(marked(resumeHtml));

            resolve("将markdown转换成HTML")
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
