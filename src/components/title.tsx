import { useSelector } from "react-redux";
import { RootState } from "../store";

 export const Title=()=>{
    const img = useSelector((state: RootState) => state.pumps.img);
    const img2 = useSelector((state: RootState) => state.pumps.img2);

    return(
        <div className="imgBlock"> 
        
        <div><img  className="rotate-image" src={img} alt="" /></div>
        <div><img  className="rotate-image1" src={img2} alt="" width="300" height="300"/></div>

        </div>
        
       
    )
}

