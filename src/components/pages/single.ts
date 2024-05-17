function play() {
  interface Temp {
    [key: string]: number
  }
  const temp: Temp = {
    a: 1
  }
  console.log('single', temp)
  return
}

const codeString = `// 代理函数
var getSingle = function(fn){
    var result;
    return function(){
        return result || ( result = fn.apply( this, arguments ) );
    }
}
// 业务函数
var createLoginLayer = function(){
    var div = document.createElement( 'div' );
    div.innerHtml = '我是登陆浮窗';
    document.body.appendChild( div );
    return div;
}
var createSingleLoginLayer = getSingle( createLoginLayer );
document.getElementById( 'loginBtn' ).onclick = function(){
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
}
`

export { play, codeString }
