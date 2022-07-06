import { FunctionComponent } from 'react';
import { PencilLine } from 'phosphor-react';

import { Avatar } from '../Avatar';

import styles from './styles.module.scss'

export const Sidebar: FunctionComponent = () => {
   return(
      <aside className={styles.sidebar}>
         <img 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            alt="Imagem de Fundo" 
            className={styles.cover}
         />

         <div className={styles.profile}>
            <Avatar 
               source="https://github.com/rcapeto.png" 
               alt="Raphael Capeto"
            />
            <strong>Raphael Capeto</strong>
            <span>Softaware Engineer</span>
         </div>

         <footer>
            <a href="#">
               <PencilLine size={20}/>
               Editar o seu perfil
            </a>
         </footer>
      </aside>
   );
};