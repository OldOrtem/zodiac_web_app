import { useLayoutEffect} from "react";
// import statsService from "../service/HoroscopeService";
import { observer } from "mobx-react-lite";


const Test = observer(() => {
    useLayoutEffect(()=>{
        tap();
      },[])
    
      async function tap(){
       
      }
  return (
    <div>
      hello
    </div>
    
  )
})

export default Test;
