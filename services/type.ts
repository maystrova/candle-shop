export type HeaderMenuType = {
    title: string
    id: number
    onClick: () => void
}

export type HeaderUserActionMenu = {
    icon: string
    id: number
    quantity?: number
    onClick: () => void
}
