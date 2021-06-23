import './AlertBox.css'



const AlertBox = (props) => {
    return (
        <div className={`alert-box ${props.display}`}>
            <header>
                {props.type === 'delete' ? <h4>Point of no return</h4> : null}
                {props.type === 'edit' ? <h4>Edit {props.title}'s information</h4> : null}
                {props.type === 'auth' ? <h4>Give user permission to edit</h4> : null}
                <i className="fas fa-exclamation-triangle"></i>
            </header>
            <article>
                {props.children}
            </article>
            <footer>
                <button onClick={props.yesHandler} id="yes">
                    {props.type === 'delete' ? 'Yes' : null}
                    {props.type === 'edit' ? 'Edit' : null}
                    {props.type === 'auth' ? 'Add user' : null}
                </button>
                <button onClick={props.noHandler} id="no">
                    {props.type === 'delete' ? 'No' : null}
                    {props.type === 'edit' ? 'Cancel' : null}
                    {props.type === 'auth' ? 'Exit' : null}
                </button>
            </footer>
        </div>
    )
}



export default AlertBox