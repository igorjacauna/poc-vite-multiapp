import { Outlet } from 'react-router'

export default function CoreLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '200px', background: '#f0f0f0', padding: '1rem' }}>
        <nav>
          <ul>
            {/* Outros itens de menu podem ser gerados dinamicamente */}
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>
        {/* Aqui serão renderizadas as páginas dos módulos */}
        <Outlet />
      </main>
    </div>
  )
}