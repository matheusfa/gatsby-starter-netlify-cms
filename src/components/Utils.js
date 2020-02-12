export function getDateFormat(date){
    if(date!=null){
        let partsT = date.split(",");
        console.log(partsT)
        let n = partsT[0].split(" ");
        console.log(n)
         let f = n[1]+' de '+translateMonth(n[0])+','+partsT[1]
         return f;
    }else
        return null
};

export function translateMonth(month){
    if(month==='December'){
        return 'Dezembro'
    }else if(month==='November'){
        return 'Novembro'
    }else if(month==='October'){
        return 'Outubro'
    }else if(month==='September'){
        return 'Setembro'
    }else if(month==='August'){
        return 'Agosto'
    }else if(month==='July'){
        return 'Julho'
    }else if(month==='June'){
        return 'Junho'
    }else if(month==='May'){
        return 'Maio'
    }else if(month==='April'){
        return 'Abril'
    }else if(month==='March'){
        return 'Março'
    }else if(month==='February'){
        return 'Fevereiro'
    }else if(month==='January'){
        return 'Janeiro'
    }else{
        return 'Erro'
    }
}