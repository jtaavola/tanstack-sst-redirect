import { createFileRoute } from '@tanstack/react-router'
import { redirect } from '@tanstack/react-router';

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: '/other-page'})
  },
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello home!</div>
}
