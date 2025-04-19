import { Link } from '@tanstack/react-router'
import { Fragment } from 'react'
import { paths } from '@/shared/paths'

export function Home() {
  return (
    <main
      style={{
        margin: 5,
      }}
    >
      <section style={{ marginBottom: 5 }}>
        <h1>useEffectの勉強</h1>
        <p>※ 見た目は同じだけど処理が違うってところがあります</p>
      </section>
      <ul>
        {paths.map((path) => (
          <Fragment key={path.href}>
            {path.href !== '/' && (
              <li>
                <Link to={path.href}>{path.name}</Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </main>
  )
}
