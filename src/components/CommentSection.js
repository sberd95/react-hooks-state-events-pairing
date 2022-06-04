import react from "react";
import Comment from "./Comment";

function CommentSection({ comments, displayComment, commentToggle, removeComment }) {
    return (
        <div>
            <button name='hide' onClick={() => commentToggle(!displayComment)}>{displayComment ? 'Hide Comments' : 'Show Commments'}</button>
            <hr />
            <h2>{comments.length} Comments</h2>
            <div style={displayComment ? { display: 'block' } : { display: 'none' }}>
                {comments.map(comment =>
                    <Comment key={comment.id} idProp={comment.id}
                        user={comment.user} comment={comment.comment}
                        removeComment={removeComment}
                    />
                )}
            </div>
        </div>
    )
}

export default CommentSection