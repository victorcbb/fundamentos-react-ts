import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar"

interface Posts extends PostProps {
  id: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/victorcbb.png",
      name: "Victor Barros",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},      
    ],
    publishedAt: new Date('2022-07-12 16:25:15'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},      
    ],
    publishedAt: new Date('2022-07-10 16:25:15'),
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => (
              <Post
              key={String(post.id)}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />  
            ))
          }
        </main>
      </div>
    </div>
  )
}
