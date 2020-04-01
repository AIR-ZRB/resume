# 简历生成器

## 使用框架

+ jquery
    - 对dom进行操作
+ marked
    - 把markdown语法转换成HTML
+ prismjs
    - 把css部分的代码高亮


## prismjs

如果不需要使用JS便利代码则这样使用就可以高亮了
`<pre><code class="language-css">p { color: red }</code></pre>`


如果需要使用JS来便利代码显示到试图上则需要
```javascript
    <pre><code id="code" class="language-css"></code></pre>

s
    <script>
        let code = document.getElementById("code");
        code.innerHTML = Prism.highlight("p { color: red }",Prism.languages.css)
    </script>
```
