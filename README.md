> canvas 实现随机验证码 - 自定义验证码

--------------
[demo](http://jsrun.net/IrkKp/edit)

[图片.png](http://upload-images.jianshu.io/upload_images/768057-26d434d33076fda3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![图片.png](http://upload-images.jianshu.io/upload_images/768057-26d434d33076fda3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> - 汉字 （汉字随机有很多繁体字，生僻字，最好建立汉字库）
> - 数字 
> - 字母
> - 数字字母混合随机
> - 自定义

-----------------

> - hanzi() `随机汉字`
> - getLetter() `随机字母`
> - getNumber() `随机数字`
> - NumberOrLetter() `字母数字混合`
> - setCode(str) `自定义`

#### demo

`html`

```
    <div class="wrap">
        <canvas id="code1" class="code" width="70" height="30" ></canvas>
        <canvas id="code2" class="code" width="200" height="50" ></canvas>
        <canvas id="code3" class="code" width="50" height="30" ></canvas>
        <canvas id="code4" class="code" width="100" height="60" ></canvas>
        <canvas id="code5" class="code" width="200" height="30" ></canvas>
        <p class="tips">请输入验证码</p>
        <input type="text" id="value">
    </div>
```


`js`
```
// 引入库

let cvs1 = document.querySelector("#code1")
let cvs2 = document.querySelector("#code2")
let cvs3 = document.querySelector("#code3")
let cvs4 = document.querySelector("#code4")
let cvs5 = document.querySelector("#code5")

let a1 = new captcha(cvs1)
let a2 = new captcha(cvs2)
let a3 = new captcha(cvs3)
let a4 = new captcha(cvs4)
let a5 = new captcha(cvs5)


a1.hanzi() // 使用随机汉字
console.log( a1.str )

a2.getLetter() // 随机字母
console.log( a2.str )

a3.getNumber() // 随机数字
console.log( a3.str )

a4.NumberOrLetter() // 字母数字 混合
console.log( a4.str )

a5.setCode("自定义验证码") // 自定义验证码
a5.disturb()


```


  [1]: /img/bVM8gT-