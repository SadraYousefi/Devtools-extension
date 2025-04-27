import { alphaDate } from "../../utils/functions";

export default function Calendar() {

    const date = alphaDate(new Date()) ;
    
    return (
        <div className="flex flex-col w-full h-full border items-center pt-3 border-white">

            <h1 className="">تقویم روزانه</h1>
            <p>{`${date.dayName} ,${date.numDay}/${date.month}/${date.year}`}</p>
        </div>
    ) 
    
}