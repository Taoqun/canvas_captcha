
/**
 * 传入canvas 对象 
 * 调用方法生成不同类型的验证码
 * 汉字 数字 字母  数字字母混合
 * 增加干扰线 干扰点
 * 根据传入的字符生成验证码
 * 由于汉字生成生僻字 不太好认 可以数组保存常用字，此处pass 不做
 */

function captcha(canvas){

    this.canvas = canvas
    this.width = canvas.width
    this.height = canvas.height
    this.x = this.width / 5
    this.y = this.height / 2
    this.cvs = canvas.getContext("2d")
    this.color = "#333"
    this.str = ''

}

captcha.prototype.getNumber = function(){

    this.cvs.clearRect(0,0,this.width,this.height)

    for( let i=1;i<5;i++ ){
        let str = parseInt( Math.random() * 10 )
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }

}

captcha.prototype.getLetter = function(){

    this.cvs.clearRect(0,0,this.width,this.height)
    
    for( let i=1;i<5;i++ ){
        let str = String.fromCharCode(  65 + parseInt(Math.random() * (91-65)) ) 
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }
}

captcha.prototype.NumberOrLetter = function(){

    this.cvs.clearRect(0,0,this.width,this.height)
    
    for( let i=1;i<5;i++ ){
        let a = parseInt( Math.random() * 10 )
        let str = ''
            str = a>5 ? String.fromCharCode(  65 + parseInt(Math.random() * (91-65)) ) : parseInt( Math.random() * 10 )
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }

}

captcha.prototype.hanzi = function(){

    this.cvs.clearRect(0,0,this.width,this.height)

    for( let i=1;i<5;i++ ){
        let str = eval('"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"')
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }
}

captcha.prototype.setCode = function(str){

    if(typeof str === 'string' || typeof str === 'number'  ){
        str += ''
        this.str = str
        this.x = this.width / (str.length+1)
        for( let i=1; i < str.length +1; i++ ){
            this.draw( {text:str[i-1],x:this.x*i,y:this.y} )
        }
    }else{
        console.error("arguments is not string or number")
    }
}

captcha.prototype.disturb = function(){

    for( let i=0;i<3;i++ ){

        let start = {
            x: parseInt( Math.random()*this.width ),
            y: parseInt( Math.random()*this.height )
        }
        let end = {
            x: parseInt( Math.random()*this.width  ),
            y: parseInt( Math.random()*this.height  )
        }

        this.cvs.beginPath()
        this.cvs.moveTo(start.x,start.y)
        this.cvs.lineTo(end.x,end.y)
        this.cvs.stroke()
        this.cvs.closePath()
    }

}

captcha.prototype.draw = function(obj){
    
    this.cvs.beginPath()
    this.cvs.fillStyle = this.color
    this.cvs.textAlign = 'center'
    this.cvs.textBaseline = 'middle'
    this.cvs.font = "15px"
    this.cvs.fillText(obj.text,obj.x,obj.y)
    this.cvs.closePath()

}

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

