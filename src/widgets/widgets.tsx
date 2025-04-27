import Calendar from "./components/calendar";
import { GithubInfoBox } from "./components/github";

export default function Widgets() {
    return (

        <section className="">

            <GithubInfoBox />

            <div className='flex min-w-[calc(100%3-1)] h-[40vh] space-x-5 mt-3'>
    
                <Calendar />  
                <Calendar />  
                <Calendar />  
                
            </div>
            
        </section>
        
    )
}