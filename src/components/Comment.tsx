import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className="mt-6 flex gap-4">
      <img
        className="w-12 h-12 rounded-lg"
        src="https://github.com/josesouzaa.png"
      />

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
              className="leading-none rounded-sm hover:text-brand-red-500 transition"
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4 text-brand-gray-300">
            Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>

        <footer className="mt-4">
          <button className="text-brand-gray-400 flex items-center hover:text-brand-green-300 transition rounded-sm">
            <ThumbsUp className="mr-2" /> Aplaudir{' '}
            <span className="before:content-['\2022'] before:py-0 before:px-1">
              20
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
