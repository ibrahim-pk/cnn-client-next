export const extractFileId = (url) => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
    let match
    if(url){
        match = url.match(regex);
        return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : null;

    }else{
        return ''
    }
    
};