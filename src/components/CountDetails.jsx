import './DetailsStyle.css'

function CountDetails(props) {
    return (
        <div>
            <p>{props.content}: <span>{props.number} {props.sing}</span> </p>
        </div>
    );
}

export default CountDetails;
