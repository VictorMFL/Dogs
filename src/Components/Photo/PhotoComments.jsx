import React, { useContext } from 'react';
import {UserContext} from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentsSection = React.useRef(null)

  const {login} = useContext(UserContext)

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
   <>
    <ul ref={commentsSection} className={`${styles.comments} ${props.single ?styles.single : ''}`}>
      {comments.map((comment) => (
        <li key={comment.comment_ID}>
          <strong>{comment.comment_author}:</strong>
          <span>{comment.comment_content}</span>
        </li>
      ))}
    </ul>
    {login && < PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
  </>
  );
};

export default PhotoComments;
