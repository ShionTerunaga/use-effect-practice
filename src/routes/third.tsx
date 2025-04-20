import { createFileRoute } from '@tanstack/react-router'
import { Third } from '@/app/third'

export const Route = createFileRoute('/third')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Third />
}
