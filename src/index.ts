import Options from './interface/options';
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
    async handleWatermarkImage(){
        try{
          const img=await this.handleReadImage();      
          const canvasImage=await this.handleCreatCanvas(img);
          const canvasText=await this.handleWatermark(canvasImage,this.option);
          document.querySelector(`#${this.dom}`).appendChild(canvasText);
        }catch(e){
            console.error(e)
        }
    }
    /**
     * 返回图片实例
     */
    handleReadImage():Promise<HTMLImageElement>{
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
    handleCreatCanvas(img:HTMLImageElement):Promise<HTMLCanvasElement>{
        return new Promise((resolve,reject) => {
            let canvas:HTMLCanvasElement=document.createElement('canvas');
            canvas.width=img.width;
            canvas.height=img.height;
            let ctx:CanvasRenderingContext2D=canvas.getContext('2d');
            ctx.drawImage(img,0,0);
            resolve(canvas)      
        })
    }
    /**
     * 返回添加水印实例
     * @param canvas 
     * @param option 
     */
    handleWatermark(canvas:HTMLCanvasElement,option:Options):Promise<HTMLCanvasElement>{
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
}