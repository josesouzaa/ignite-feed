import { useState } from 'react'

import { Avatar } from './Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  return (
    <div className="mt-6 flex gap-4">
      <Avatar />

      <div className="flex-1">
        <div className="bg-brand-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col ">
              <strong className="text-sm leading-[1.6]">José</strong>

              <time
                className="text-xs leading-[1.6] text-brand-gray-400"
                title="11 de Maio as 08:13"
                dateTime="2022-05-11 00:13:30"
              >
                Cerca de 1 hora
              </time>
            </div>

            <button
              onClick={() => onDeleteComment(content)}
              className="leading-none rounded-sm hover:text-brand-red-500 transition"
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4 text-brand-gray-300">{content}</p>
        </div>

        <footer className="mt-4">
          <button
            className="text-brand-gray-400 flex items-center hover:text-brand-green-300 transition rounded-sm"
            onClick={() => setLikeCount((prev) => prev + 1)}
          >
            <ThumbsUp className="mr-2" /> Aplaudir{' '}
            <span className="before:content-['\2022'] before:py-0 before:px-1">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
