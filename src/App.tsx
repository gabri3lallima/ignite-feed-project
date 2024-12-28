import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface Post {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

// Array de posts tipado
const post: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Apple.png",
      name: "Apple Brasil",
      role: "A empresa que revolucionou o mundo.",
    },
    content: [
      { type: "paragraph", content: "Iphone 16" },
      {
        type: "paragraph",
        content:
          "O iphone 16 foi oficialmente lançado para o mundo, com melhorias e integração da nova IA da Apple, confira no link abaixo.",
      },
      {
        type: "link",
        content: "https://www.apple.com/br/iphone-16/",
      },
    ],
    publishedAt: new Date("2024-12-22 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/facebook.png",
      name: "Meta Plataforms",
      role: "Empresa de metaverso social.",
    },
    content: [
      { type: "paragraph", content: "🦇⚫" },
      {
        type: "paragraph",
        content: "Confira o novo Batman: Arkham Shadow em nossa loja.",
      },
      { type: "link", content: "https://www.meta.com/quest/gaming/" },
    ],
    publishedAt: new Date("2024-12-24 20:00:00"),
  },
];


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {post.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
            
            )
          })}
        </main>
      </div>
    </div>
  )
}

