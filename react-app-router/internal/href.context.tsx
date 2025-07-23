import React, { createContext, useContext } from 'react'

let HrefContext = createContext<string | undefined>(undefined)

export function useHref() {
    return useContext(HrefContext)
}

export function HrefProvider({
    value,
    children,
}: React.PropsWithChildren<{ value?: string }>) {
    return <HrefContext.Provider value={value}>{children}</HrefContext.Provider>
}