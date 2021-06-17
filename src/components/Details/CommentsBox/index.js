import InfoBox from '../../InfoBox'
import Comment from '../../Comment'



const CommentsBox = ({ comments, type }) => {
    return (
        comments ? comments.length ?
            <InfoBox title="Comments">
                {comments.map(x => <Comment key={x.author + x.content} author={x.author} content={x.content} />)}
            </InfoBox> : <InfoBox title={`There is no comments on this ${type.slice(0, type.length - 1)}`} /> : null
    )
}

export default CommentsBox