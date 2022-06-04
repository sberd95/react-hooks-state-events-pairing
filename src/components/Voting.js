import react from "react";

function Voting({videoStats, upvote, downvote}){
    return(
        <div style={{marginBottom:'2%'}}>
            <button name='upvote' onClick={upvote}>{videoStats.upvotes} 👍</button>
            <button name='downvote' onClick={downvote}>{videoStats.downvotes} 👎</button>
        </div>
    )
}

export default Voting   