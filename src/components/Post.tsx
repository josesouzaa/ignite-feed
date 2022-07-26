import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

interface PostProps {
  id: number
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: {
    type: string
    content: string
  }[]
  publishedAt: Date
}

export function Post({ id, author, content, publishedAt }: PostProps) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className="bg-brand-gray-800 rounded-lg p-10 first-of-type:mt-0 mt-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar hasBorder src={author.avatarUrl} />

          <div className="flex flex-col">
            <strong className="text-brand-gray-100 leading-[1.6]">
              {author.name}
            </strong>
            <span className="text-brand-gray-400 text-sm leading-[1.6]">
              {author.role}
            </span>
          </div>
        </div>

        <time
          className="text-sm text-brand-gray-400"
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="leading-[1.6] text-brand-gray-300 mt-6 post-content">
        {content.map((line) => {
          switch (line.type) {
            case 'paragraph':
              return <p>{line.content}</p>

            case 'link':
              return (
                <p>
                  <a href="#">{line.content}</a>
                </p>
              )
          }
        })}
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
