# DD.WaterMark-一键给图片加水印插件
## 1.项目介绍
1. `DD.WaterMark`是什么?  
该插件是基于Typescript开发的一键生成图片水印的插件，可以实现上传图片添加水印预览的效果。
2. `DD.WaterMark`优势是什么？
    - 未使用`react`和`vue`等前端框架进行开发，不限制框架的使用，方便快速的接入不同业务场景使用的框架。
    - 使用`Typescript`进行开发，更加友好的语法提示和类型检查,也方便快速的接入`Typescript`项目。
    - 轻量,体积小未使用任何第三方框架,引入即用,方便快捷。
3. `DD.WaterMark`功能介绍(v0.0.1)
    * [x] 上传图片添加自定义水印文字

## 2.快速上手
1. 引入文件  
    `<scritp src='xxx'>`
2. 实例化`Watermark`  
    `var wm=new Watermark(dom,配置项)`
3. 调用  
    `wm.handleWatermarkImage();`
## 3.功能演示  
1. 在demo📂中的`watermark.html`为基础演示
*备注引入路径的dist📂里面的`index.js`文件需要编译生成 暂时没有将dist📂及其内容上传*
## 4.项目结构
## 5.未来功能
1.  未来展望
    - [ ] 上传图片添加自定义水印文字,并自定义水印图片大小 (v0.0.2)
    - [ ] 上传图片,对图片进行压缩 (v0.0.3)
    - [ ] 上传图片 对图片进行裁剪 (v0.0.4)  
*在上述功能完成以后就会修改版本号为1.0.0 进行`npm`官网发布*
## 6.参与贡献
非常欢迎你的加入！[提一个Issue](https://github.com/xd20110642/DD-Watermark/issues/new) 或者提交一个 Pull Request,如果有可能也希望你能fork
## 7.联系作者
`QQ:790057064 备注:来自GitHub`  
`微信:xd790057064 备注:来自GitHub`
## 8.开源协议
MIT © Xiang Dong


    
    