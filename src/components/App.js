import react, {useState} from "react";
import video from "../data/video.js";
import CommentSection from "./CommentSection.js";
import Video from "./Video.js";
import Voting from "./Voting.js";

function App() {
  console.log("App re-render")
  const [videoRec, setVideoRec] = useState(video)
  const [showComments, setShowComments] = useState(true)

  function upvote(){
    const newVal = videoRec.upvotes + 1
    setVideoRec({...videoRec, upvotes:newVal})
  }
  function downvote(){
    const newVal = videoRec.downvotes + 1
    setVideoRec({...videoRec, downvotes:newVal})
  }
  function removeComment(id){
    //ended up needing loose inequality operator as ID in html is a string, NaN
    const modComment = videoRec.comments.filter((comment) => (comment.id != id))
    setVideoRec({...videoRec, comments:modComment})
  }
  return (
    <div className="App">
      <Video video={videoRec}/>
      <Voting videoStats={videoRec} upvote={upvote} downvote={downvote}/>
      <CommentSection displayComment={showComments} commentToggle={setShowComments} comments={videoRec.comments} removeComment={removeComment}/>
    </div>
  );
}

export default App;
