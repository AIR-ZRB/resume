const resume = `

## 基本信息

+ 姓名：XXX            求职意向：前端工程师
+ 电话：XXXXXXXXXXX     邮箱：XXXXXXXXX@qq.com

## 专业技能

+ 熟练使用div+css页面布局、掌握JavaScript；符合w3c标准和HTML语义化标签，兼容目前常用浏览器
+ 掌握HTML5/CSS3收悉传统布局，Flex布局，Grid布局
+ 熟练使用CSS预处理器less或sass进行项目样式开发
+ 了解ES6的一些新特性，比如Promise，字符串模板等
+ 能使用Jquery完成基础的元素操作、样式修改、动画效果、
+ 能使用Vue进行项目开发，使用Vue-cli脚手架搭建项目；能使用vue-router进行路由配置，能使用Vuex来对项目的状态管理，使用fetch,axios实现页面交互；搭配element ui 进行快速开发。
+ 能够使用React框架进行项目开发
+ 使用过Node.js搭建基础的后端开发
+ 能够使用Webpack来进行简单的配置和打包



## 个人项目经验

### 移动端记账软件

+ 项目描述：灵感来源于叨叨记账，能够对每日的消费进行输入记录，能够看到的花销情况，使用百分比布局适合移动端页面使用
+ 项目技术栈：
1. 使用Vue作为主框架
2. 使用百分比布局
3. 使用vue-router进行路由的配置
4. 使用Vuex来进行状态管理
5. 使用HTML5的localStorage作为本地存储
6. 使用Webpack配置常用的loader，打包项目


### markdown简历生成

+ 项目描述：看简历是如何一步步生成的
+ 项目技术栈：
1. 使用Jquery操作DOM
2. 使用Promise进行异步操作
3. 使用marked库把markdown语法转换成HTML标签
4. 使用prismjs库让CSS的代码高亮

### 本地在线聊天室

+ 项目描述：使用HTML5提供的WebSocket协议，实在多个用户在线聊天
+ 项目技术栈：
1. 使用vue-cli脚手架进行项目的构建
2. 使用Vue作为主框架
3. 使用elementUI作为UI组件
4. 使用HTML5新增的协议WebSocket
5. 使用Node.js进行连接

### 音乐播放器

+ 项目描述：使用网易云的API接口实现在线播放歌曲，获取一些会员歌曲的URL进行下载
+ 项目技术栈：
1. 使用create-app-react脚手架进行项目的构建
2. 使用React作为主框架
3. 使用Bootstrap作为UI组件
4. 使用NeteaseCloudMusicApi库来对接口请求

`;

const style = `
/* 
    页面的基本样式
*/

* {
    transition: all .3s;
    box-sizing: border-box;
}

html,body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
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

`;

const style1 = `
/* 
    开始简历样式优化
*/
.content {
    width: 63%;
    height: 100%;
    background: #fff;
    overflow-y: scroll;
    padding: 10px 20px;
}


#resumeContent {
    white-space:pre-wrap
}

#resumeContent * {
    margin: 0;
  
}


#resumeContent h2 {
    padding: 5px 0;
    border-bottom: 1px solid #000;
}

#resumeContent ul {
    font-size: 0;
    margin: 0;
}

#resumeContent ul li {
    line-height: 30px;
    font-size: 14px;
    margin: 0;
}
#resumeContent ol {
    margin: 0 0 0 100px;
    padding: 0;
}

#resumeContent ol li {
   margin: 0
}

/*
    CSS高亮代码
*/
`;

class resumeComponent {
    constructor() {
        // 播放的速度
        this.delay = 10;
        this.nowWordNum = 0;
        this.prevCode = "";
        this.changeSpeed();
    }

    // 生成简历
    async generate() {
        await this.startStyle(style);
        await this.startResume();
        await this.changeMarkdown();
        await this.startStyle(style1);
        await this.lightHeightCode();
    }

    startStyle(prevVariable = "") {
        this.prevCode += prevVariable;
        let nowCode = this.prevCode;

        let nowCodeLength = this.nowWordNum;

        // 当前的传入变量的长度
        let prevIndex = prevVariable.length;
        // 初始值
        let index = 0;
        return new Promise((resolve) => {
            let timer = setInterval(() => {

                if (index < prevIndex) {
                    index++;
                    $("#style").html(nowCode.substr(0, nowCodeLength + index));
                    $("#styleCode").html(nowCode.substr(0, nowCodeLength + index));
                    $("#stylePre").scrollTop(1000000);
                } else {
                    this.nowWordNum += prevVariable.length;
                    clearInterval(timer);
                    resolve("页面初始样式完成");
                }
            }, this.delay);
        });
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
                    resolve("简历内容完成");
                }
            }, this.delay);
        });
    }

    lightHeightCode(){
        $("#styleCode").html(
            Prism.highlight(
                this.prevCode,
                Prism.languages.css
            )
        );
    }


    changeMarkdown() {
        return new Promise((resolve, reject) => {
            let resumeHtml = $("#resumeContent").html();
            $("#resumeContent").html(marked(resumeHtml));

            resolve("将markdown转换成HTML");
        });
    }

    changeSpeed(){
        
        $("#addSpeed").on("click",()=>{
            console.log("???")
            this.delay -= 920;
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
