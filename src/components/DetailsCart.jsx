import CountDetails from "./CountDetails";
import ButtonAdd from "./productComps/buttonAdd";
import './DetailsStyle.css'

function DetailsCart(props) {
    return (
        <div className="count-details">
            <div>
                <h1>Details</h1>
                <CountDetails content="Item Number" number={props.len} />
                <CountDetails content="Total Amount" number={props.total} sing="$" />
                <CountDetails content="Discount" number={props.dis} sing="$" />
            </div>
            <div className="bottom-div">
                <CountDetails className="final" content="Final Amount" number={props.final} sing="$" />
                <ButtonAdd className="ButtonAdd" content="Checkout"/>
            </div>
        </div>
    );
}

export default DetailsCart;