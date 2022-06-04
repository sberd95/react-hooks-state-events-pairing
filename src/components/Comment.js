import react, {useState} from "react";

function Comment({ user, comment, idProp, removeComment }) {
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)

    return (
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>
            <div style={{textAlign:'right', marginRight:'10%'}}>
                <button name='upvote' onClick={() => setUpvote(upvote + 1)}>{upvote} 👍</button>
                <button name='downvote' onClick={() => setDownvote(downvote + 1)}>{downvote} 👎</button>
                <button id={idProp} name='delete' onClick={(e) => removeComment(e.target.id)}>Remove Comment</button>
            </div>
        </div>
    )
}

export default Comment