import { createFileRoute } from '@tanstack/react-router'
import Second from '@/app/second'

export const Route = createFileRoute('/second')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Second />
}
