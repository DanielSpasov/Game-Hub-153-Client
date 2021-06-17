import './AlertBox.css'



const AlertBox = (props) => {
    return (
        <div className={`alert-box ${props.display}`}>
            <header>
                <h3>Point of no return</h3>
                <i className="fas fa-exclamation-triangle"></i>
            </header>
            <article>
                {props.children}
            </article>
            <footer>
                <button onClick={props.yesHandler} id="yes">Yes</button>
                <button onClick={props.noHandler} id="no">No</button>
            </footer>
        </div>
    )
}



export default AlertBox