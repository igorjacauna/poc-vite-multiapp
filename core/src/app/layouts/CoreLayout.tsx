import { Outlet, Link } from 'react-router'
import { observer } from 'mobx-react-lite';
import { rootStore } from '../shared';
import { getMenuEntries } from 'virtual:modules';

function Layout() {
  const userStore = rootStore.getStore<{
    token: string
  }>('User');
  if (!userStore.token) return <Outlet />;
  const menuItems = getMenuEntries();
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '200px', background: '#f0f0f0', padding: '1rem' }}>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.route}>
                <Link to={item.route}>{item.label}</Link>
              </li>
            ))}
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

const CoreLayout = observer(Layout);

export default CoreLayout;