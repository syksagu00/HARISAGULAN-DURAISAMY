export function convertPath(path) {
    let lastPart = path.split("/");
    let title = lastPart[lastPart.length-1].replace("-",(ma)=>{return " "});
    if(title===""){
        return "HOME"
    }
    title= title.toUpperCase();
    return title;
}