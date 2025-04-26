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