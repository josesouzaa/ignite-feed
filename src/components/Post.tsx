import { Comment } from './Comment'

interface PostProps {
  author: string
  content: string
}

export function Post({ author, content }: PostProps) {
  return (
    <article className="bg-brand-gray-800 rounded-lg p-10 first-of-type:mt-0 mt-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-lg border-4 border-brand-gray-800 ring-2 ring-brand-green-500 box-content"
            src="https://github.com/josesouzaa.png"
          />

          <div className="flex flex-col">
            <strong className="text-brand-gray-100 leading-[1.6]">
              {author}
            </strong>
            <span className="text-brand-gray-400 text-sm leading-[1.6]">
              Web developer
            </span>
          </div>
        </div>

        <time
          className="text-sm text-brand-gray-400"
          title="11 de Maio as 08:13"
          dateTime="2022-05-11 00:13:30"
        >
          Publicado há 1 hora
        </time>
      </header>

      <div className="leading-[1.6] text-brand-gray-300 mt-6">
        <p className="mt-4">Fala galeraa 👋</p>

        <p className="mt-4">
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p className="mt-4">
          👉{' '}
          <a
            className="font-bold text-brand-green-500 hover:text-brand-green-300"
            href="#"
          >
            jane.design/doctorcare
          </a>
        </p>

        <p className="mt-4">
          <a
            className="font-bold text-brand-green-500 hover:text-brand-green-300"
            href="#"
          >
            #novoprojeto #nlw #rocketseat
          </a>
        </p>
      </div>

      <form className="w-full mt-6 pt-6 border-t border-brand-gray-600 group">
        <strong className="leading-[1.6] text-brand-gray-100">
          Deixe seu feedback
        </strong>

        <textarea
          className="w-full bg-brand-gray-900 resize-none h-24 p-4 rounded-lg text-brand-gray-100 leading-[1.4] mt-4 focus-visible:outline-none"
          placeholder="Deixe um comentário"
        />

        <footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-[none] transition">
          <button
            className="py-4 px-6 mt-4 rounded-lg bg-brand-green-500 text-brand-white font-bold hover:bg-brand-green-300 transition"
            type="submit"
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
