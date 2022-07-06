import { FunctionComponent } from 'react';

import igniteLogo from '../../assets/ignite-logo.svg';
import styles from './styles.module.scss';

export const Header: FunctionComponent = () => {
   return(
      <header className={styles.header}>
         <img src={igniteLogo} alt="Ignite Logo" />
         <p>Ignite Feed</p>
      </header>
   );
};