import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

interface IAvatar {
   source: string;
   alt: string;
   isComment?: boolean;
};

export const Avatar: FunctionComponent<IAvatar> = ({ 
   alt, source, isComment = false
}) => {
   return(
      <img 
         src={source} 
         alt={alt}
         className={styles[isComment ? 'avatarComment' : 'avatar']}
      />
   );
};