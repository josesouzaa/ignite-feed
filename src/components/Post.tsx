import { FormEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: {
    type: 'paragraph' | 'link'
    content: string
  }[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Post muito legal!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComent(e: FormEvent) {
    e.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeleteOne = comments.filter((i) => i !== comment)

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className="bg-brand-gray-800 rounded-lg p-10 first-of-type:mt-0 mt-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar hasBorder src={author.avatarUrl} alt={author.name} />

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
              return <p key={line.content}>{line.content}</p>

            case 'link':
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              )
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComent}
        className="w-full mt-6 pt-6 border-t border-brand-gray-600 group"
      >
        <strong className="leading-[1.6] text-brand-gray-100">
          Deixe seu feedback
        </strong>

        <textarea
          className="w-full bg-brand-gray-900 resize-none h-24 p-4 rounded-lg text-brand-gray-100 leading-[1.4] mt-4 focus-visible:outline-none"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          required
        />

        <footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-[none] transition">
          <button
            className="py-4 px-6 mt-4 rounded-lg bg-brand-green-500 text-brand-white font-bold  transition disabled:opacity-70 only:enabled:hover:bg-brand-green-300 disabled:hover:bg-brand-green-500 disabled:cursor-not-allowed"
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
