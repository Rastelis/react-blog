import './App.css'
import Header from './assets/components/header/Header'
import NewPost from './assets/components/new-post/NewPost'
import Posts from './assets/components/posts/Posts'
import { useState } from 'react'


function App() {

  const [reload, setReload] = useState(false);

  return (
    <>
      <Header />
      <Posts reload={reload}/>
      <NewPost setReload={setReload} />
    </>
  )
}

export default App
