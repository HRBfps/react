import art from "../img/art.jpg";
import fallen from "../img/fallen.jpg";
import kscerato from "../img/kscerato.jpg";

function Foto(props){
    if (props.codigo == "1"){
            return (
                <div><img src={art}></img></div>
            )
    }else if (props.codigo == 2){
        return (
            <div><img src={fallen}></img></div>
        )
    }else if (props.codigo == 3){
        return (
            <div><img src={kscerato}></img></div>
        )
    }
}
export default Foto;