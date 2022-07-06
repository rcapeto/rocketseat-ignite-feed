import { FunctionComponent, useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';

import styles from './styles.module.scss';

export interface IComment {
   author: {
      avatarUrl: string;
      name: string;
   };
   publishedAt: Date;
   content: string;
   handleDeleteComment?: () => void;
};

export const Comment: FunctionComponent<IComment> = ({
   author, publishedAt, content, handleDeleteComment
}) => {
   const [like, setLike] = useState(0);

   const formatedDate = publishedAt.toLocaleDateString(navigator.language, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
   });

   const handleLikeComment = () => {
      setLike(state => state + 1);
   };

   return(
      <div className={styles.comment}>
         <Avatar 
            isComment 
            source={author.avatarUrl} 
            alt={author.name}
         />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>{author.name}</strong>

                     <time dateTime={publishedAt.toISOString()} title={formatedDate}>
                        Cerca de 1 hora atrás
                     </time>
                  </div>

                  <button title="Remover comentário" onClick={handleDeleteComment}>
                     <Trash size={22}/>
                  </button>
               </header>

               <p>{content}</p>
            </div>

            <footer>
              <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir <span>{like}</span>
              </button>
            </footer>
         </div>
      </div>
   );
};