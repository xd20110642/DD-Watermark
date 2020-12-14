# DD.WaterMark-一键给图片加水印插件
<div align="center"> 
<img src="./images/logo.png" style="display:block;margin-bottom:10px">
</div>
<div align="center"> 
<img src="https://img.shields.io/badge/version-v0.0.3-FFAA40">
<img src="https://img.shields.io/badge/license-MIT-greed">
<img src="https://img.shields.io/badge/languages-Typescript-3183C4">
</div>

## 1.项目介绍
1. `DD.WaterMark`是什么?  
该插件是基于Typescript开发的一键生成图片水印的插件，可以实现上传图片添加水印预览的效果。
2. `DD.WaterMark`优势是什么？
    - 未使用`react`和`vue`等前端框架进行开发，不限制框架的使用，方便快速的接入不同业务场景使用的框架。
    - 使用`Typescript`进行开发，更加友好的语法提示和类型检查,也方便快速的接入`Typescript`项目。
    - 轻量,体积小未使用任何第三方框架,引入即用,方便快捷。
3. `DD.WaterMark`功能介绍(v0.0.3)
    * [x] 上传图片添加自定义水印文字
    * [x] 上传图片添加自定义水印文字,并自定义水印图片大小
    * [x] 上传图片,对图片进行压缩 
## 2.快速上手
1. 引入文件  
    `<scritp src='xxx'>`
2. 实例化`Watermark`  
    `var wm=new Watermark(dom,配置项)`
3. 调用  
    `wm.handleWatermarkImage();`
## 3.配置项参数说明
1. `options`具体参数说明  
    |属性|类型|作用|是否必填|
    |----|----|----|----|
    |text|string|添加的水印文字|否|
    |color|string|水印文字颜色|否|
    |fontSize|string|水印文字大小|否|
    |x|number|水印文字x轴位置|否|
    |y|number|水印文字y轴位置|否|
    |width|number|自定义水印图片宽度|否|
    |height|number|自定义水印图片高度|否|
    |imgWidth|number|自定义压缩图片宽度|否|
    |imgHeight|number|自定义压缩图片高度|否|
    |textAlign|string|水印文字对齐方式|否|
## 4.功能演示  
1. 在demo📂中的`watermark.html`为基础演示
2. 在demo📂中的`自定义大小.html`为上传图片添加自定义水印文字,并自定义水印图片大小功能演示  
*备注引入路径的dist📂里面的`index.js`文件需要编译生成 暂时没有将dist📂及其内容上传*
## 5.项目结构
## 6.未来功能
1.  未来展望    
     ~~- 上传图片添加自定义水印文字,并自定义水印图片大小 (v0.0.2)~~  
    ~~上传图片,对图片进行压缩 (v0.0.3)~~
    - [ ] 上传图片 对图片进行裁剪 (v0.0.4)  
*在上述功能完成以后就会修改版本号为1.0.0 进行`npm`官网发布*
## 7.参与贡献
非常欢迎你的加入！[提一个Issue](https://github.com/xd20110642/DD-Watermark/issues/new) 或者提交一个 Pull Request,如果有可能也希望你能fork
## 8.联系作者
`QQ:790057064 备注:来自GitHub`  
`微信:xd790057064 备注:来自GitHub`
## 8.开源协议
[MIT](LICENSE) © Xiang Dong


    
    