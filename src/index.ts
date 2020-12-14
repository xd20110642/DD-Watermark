import Options from './interface/options';
import {handleHasKey} from "./tools/index"
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

class Watermark{
    public dom:string;
    public option:Options
    constructor(dom:string,option:Options){
        this.dom=dom;
        this.option=option
    }
    /**
     * 绘制水印图片
     */
    public async handleWatermarkImage(){
        try{
          const img=await this.handleReadImage();      
          const canvasImage=await this.handleCreatCanvas(img,this.option);
          const canvasText=await this.handleWatermark(canvasImage,this.option);
          document.querySelector(`#${this.dom}`).appendChild(canvasText);
        }catch(e){
            console.error('绘制水印图片失败',e)
        }
    }
    /**
     * 压缩图片大小
     */
    public async handleCompressInit(){
        try{
            const img=await this.handleReadImage();  
            const imgDom=await this.handleCompressImage(img,this.option);
            document.querySelector(`#${this.dom}`).appendChild(imgDom);
        }catch(e){
            console.log("压缩失败",e)
        }
    }
    /**
     * 返回图片实例
     */
    public handleReadImage():Promise<HTMLImageElement>{
        return new Promise((resolve,reject) => {
               let _file:any = null;
            let read:FileReader = new FileReader();
            let input:HTMLElement=document.createElement('input');
            input.setAttribute('type','file');
            input.setAttribute('accept', 'image/*') ;
            input.addEventListener('change',(e:HTMLInputEvent) => {
                _file=e.target.files[0];    
               read.addEventListener('load',() => {
                    let img:HTMLImageElement=document.createElement('img');
                    img.addEventListener('load',() => {
                        resolve(img)
                    })
                    // 使用断言
                    img.src=read.result as string;
               }) 
               read.readAsDataURL(_file);
            })
            input.click()
        })
    }
    /**
     * 返回canvas绘制图片实例
     * @param img 
     */
    public handleCreatCanvas(img:HTMLImageElement,option:Options):Promise<HTMLCanvasElement>{
        return new Promise((resolve,reject) => {
            let r=0;//压缩比
            const {width,height}=option;
            let wtemp,htemp;
            let canvas:HTMLCanvasElement=document.createElement('canvas');
            if(handleHasKey(width) && handleHasKey(height)){
                if(img.width > width && img.height > height){//如果图片的宽高均大于了我们设置的宽高 就设置等比压缩
                    r=img.width/width;//200/100 2倍压缩比
                    if((img.height/r)> height){
                        r=img.height/height;//取最大的压缩比 
                    }  
                        wtemp = Math.ceil(img.width / r);
                        htemp = Math.ceil(img.height / r);   
                }else{//只要一遍小于 就需要等比放大
                    if(img.width<width && img.height < height){//同时小于
                        r=width/img.width;
                        if((img.height * r)<height){
                            r=height/img.height;
                        }    
                    }else {
                        if(img.width < width){ //宽小于
                            r = width / img.width;
                        }else{ //高小于
                            r = height / img.height;
                        }
                    }   
                    wtemp = Math.ceil(img.width * r);
                        htemp = Math.ceil(img.height * r);    
                }
                canvas.width=wtemp;
                canvas.height=htemp;
            }else{
                canvas.width=img.width;
                canvas.height=img.height;
            }
            
            let ctx:CanvasRenderingContext2D=canvas.getContext('2d');
            if(handleHasKey(width) && handleHasKey(height)){
                ctx.drawImage(img,0,0,canvas.width,canvas.height,);
            }else{
                ctx.drawImage(img,0,0,img.width,img.height);
            }
            resolve(canvas)      
        })
    }
    /**
     * 返回添加水印实例
     * @param canvas 
     * @param option 
     */
    public handleWatermark(canvas:HTMLCanvasElement,option:Options):Promise<HTMLCanvasElement>{
        return new Promise((resolve,reject) => {
        const { text, fontSize = 24, color = '#fff', x = 0, y = 0, textAlign = "start" } = option;
        let ctx:CanvasRenderingContext2D=canvas.getContext('2d')
            ctx.font = `${fontSize} 宋体`;
            ctx.fillStyle = color;
            ctx.textAlign = textAlign;
            ctx.fillText(text,x,y);
            resolve(canvas)

        })

    }
    /**
     * 压缩图片
     * @param img 
     * @param options 
     */
    public handleCompressImage(img:HTMLImageElement,option:Options):Promise<HTMLImageElement>{
        return new Promise((resolve,reject) => {
            const {imgWidth,imgHeight}=option;
            let canvas:HTMLCanvasElement=document.createElement('canvas');
            let ctx=canvas.getContext('2d');
                // 定义 canvas 大小，也就是压缩后下载的图片大小 如果没有传入自定义宽高 那么就是展示全部
            if(handleHasKey(imgWidth) && handleHasKey(imgHeight)){
                    canvas.width=imgWidth;
                    canvas.height=imgHeight;
                    ctx.drawImage(img,0,0,imgWidth,imgHeight);
            }else{
                canvas.width=img.width;
                canvas.height=img.height;
                ctx.drawImage(img,0,0);//绘制原图
            }
            let _img=document.createElement('img');
            _img.onload=() => {
                    resolve(_img);
            }
            _img.src=canvas.toDataURL(`image/png`)
            
        })
    }
}

(window as any).Watermark =  Watermark