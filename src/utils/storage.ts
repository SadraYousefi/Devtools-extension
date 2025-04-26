export function getItemFromStorage(key: string): string | null {

    return localStorage.getItem(key) ;
    
}

export function setItemToStorage(key: string , value: string): void {
    
    localStorage.setItem(key , value) ;
}