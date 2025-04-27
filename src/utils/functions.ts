type alphaDateType =  {

    year: string ;
    month: string ;
    numDay: string ;
    dayName: string ;
    
} ;


export function jalaliDate(date: Date | string) {

    const d = new Date(date) ;
    const jalaliDate = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(d);
    return jalaliDate.replace(/\//g, '-').replace(/,/g, '');

}


export function alphaDate (date: Date | string ): alphaDateType {

    const d = new Date(date) ;
    const fullDate = new Intl.DateTimeFormat('fa-IR' , {dateStyle: 'full'}).format(d) ;
    const [year , month , numDay] = fullDate.split(',')[0].split(' ') ; 
    const dayName = fullDate.split(',')[1]

    return {year , month , numDay , dayName} ;
}