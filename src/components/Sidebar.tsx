import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className="bg-brand-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className="flex flex-col items-center mt-[calc(0px-1.5rem-6px)]">
        <Avatar hasBorder />

        <strong className="mt-4 text-brand-gray-100 leading-[1.6]">
          José de Souza
        </strong>

        <span className="text-sm text-brand-gray-400 leading-[1.6]">
          Web developer
        </span>
      </div>

      <footer className="border-t border-t-brand-gray-600 mt-6 py-6 px-8">
        <a
          className="bg-transparent text-brand-green-500 border border-brand-green-500 rounded-lg h-[50px] px-6 font-bold flex justify-center items-center gap-2 hover:bg-brand-green-500 hover:text-brand-white transition duration-100"
          href="#"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
