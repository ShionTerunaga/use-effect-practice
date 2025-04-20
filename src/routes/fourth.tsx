import { createFileRoute } from '@tanstack/react-router'
import { Fourth } from '@/app/fourth'

export const Route = createFileRoute('/fourth')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Fourth />
}
