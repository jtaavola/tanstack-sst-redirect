import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/other-page')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello other page!</div>
}
