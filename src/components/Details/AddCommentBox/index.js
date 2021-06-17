import InfoBox from '../../InfoBox'



const AddCommentBox = ({handleComment}) => {
    return (
        <InfoBox title="Add Comment">
            <form onSubmit={handleComment}>
                <textarea name="content" placeholder="comment"></textarea>
                <button>Comment</button>
            </form>
        </InfoBox>
    )
}

export default AddCommentBox