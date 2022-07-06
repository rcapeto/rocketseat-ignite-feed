import { Header } from "./components/Header";
import { Post, IPost } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './styles/app.module.scss';

const posts: IPost[] = [
  {
    author: {
      avatarUrl: 'https://github.com/rcapeto.png',
      name: 'Raphael Capeto',
      role: 'Softaware Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-06 20:00:00'),
  },
  {
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-03 16:00:00'),
  }
];

function App() {
  return(
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map((post, index) => (
              <Post {...post} key={String(index)} />
            ))
          }
        </main>
      </div>
    </div>
  );
}

export default App;
