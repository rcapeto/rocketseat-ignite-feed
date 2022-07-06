import { FormEvent, FunctionComponent, useState } from 'react';

import { Comment, IComment } from '../Comment';
import { Avatar } from '../Avatar';

import styles from './styles.module.scss';

export interface IPost {
   author: {
      avatarUrl: string;
      role: string;
      name: string;
   };
   content: {
      type: 'paragraph' | 'link';
      content: string;
   }[];
   publishedAt: Date;
};

export const Post: FunctionComponent<IPost> = ({
   author, content, publishedAt
}) => {
   const [comments, setComments] = useState<IComment[]>([]);
   const [text, setText] = useState<string>('');

   const handleSubmitForm = async (event: FormEvent) => {
      event.preventDefault();

      if(text.trim().length) {
         setComments(state => [...state, { 
            author: {
               name: 'Raphael Capeto',
               avatarUrl: 'https://github.com/rcapeto.png'
            },
            content: text,
            publishedAt: new Date(),
         }]);

         setText('');
      }
   };

   const formatedDate = publishedAt.toLocaleDateString(navigator.language, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
   });

   return(
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar 
                  source={author.avatarUrl} 
                  alt={author.name}
               />

               <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
               </div>
            </div>

            <time dateTime={publishedAt.toISOString()} title={formatedDate}>
               Publicado há 1 hora
            </time>
         </header>

         <div className={styles.content}>
            {
               content.map(
                  (item, index) => 
                     item.type === 'paragraph' ? 
                        <p key={String(index)}>{item.content}</p> : 
                        <p key={String(index)}><a href="#" >{item.content}</a></p>
               )
            }
         </div>

         <form className={styles.commentForm} onSubmit={handleSubmitForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
               placeholder="Deixe um comentário"
               value={text}
               onChange={({ target: { value }}) => setText(value)}
            />
            
            <footer>
               <button type="submit">Comentar</button>
            </footer>
         </form>

         <div className={styles.commentList}>
            {
               comments.map((comment, index) => (
                  <Comment key={String(index)} {...comment}/>
               ))
            }
         </div>
      </article>
   );
};