import { FunctionComponent } from 'react';
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
};

export const Comment: FunctionComponent<IComment> = ({
   author, publishedAt, content
}) => {
   const formatedDate = publishedAt.toLocaleDateString(navigator.language, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
   });

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

                  <button title="Remover comentário">
                     <Trash size={22}/>
                  </button>
               </header>

               <p>{content}</p>
            </div>

            <footer>
              <button>
                  <ThumbsUp />
                  Aplaudir <span>20</span>
              </button>
            </footer>
         </div>
      </div>
   );
};