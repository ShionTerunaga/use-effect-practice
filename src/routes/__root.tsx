import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { paths } from '@/shared/paths'

export const Route = createRootRoute({
  component: () => (
    <>
      <header
        style={{
          display: 'flex',
          height: 100,
          alignItems: 'center',
        }}
      >
        {paths.map((path, index) => (
          <nav
            key={index}
            style={{
              margin: 10,
              fontSize: 20,
            }}
          >
            <Link to={path.href}>{path.name}</Link>
          </nav>
        ))}
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
