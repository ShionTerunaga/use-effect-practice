import { createFileRoute } from '@tanstack/react-router'
import { FirstPage } from '@/app/first'

export const Route = createFileRoute('/first')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FirstPage />
}
