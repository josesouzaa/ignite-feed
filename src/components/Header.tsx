import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className="bg-brand-gray-800 flex justify-center items-center py-5">
      <img src={igniteLogo} alt="Logotipo do Ignite" className="h-8" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
