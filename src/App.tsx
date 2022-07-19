import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className="w-full max-w-[70rem] my-8 mx-auto px-4 grid grid-cols-[256px,1fr] gap-8 items-start">
        <Sidebar />

        <main>
          <Post
            author="José"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vitae autem dolorum maiores, rem perspiciatis velit. Sed velit asperiores maiores consequuntur, culpa, facere impedit unde nemo praesentium pariatur, autem a!"
          />
          <Post
            author="Diego"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vitae autem dolorum maiores, rem perspiciatis velit. Sed velit asperiores maiores consequuntur, culpa, facere impedit unde nemo praesentium pariatur, autem a!"
          />
        </main>
      </div>
    </div>
  )
}
