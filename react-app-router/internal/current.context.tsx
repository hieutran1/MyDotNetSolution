import React, { createContext, createElement, useContext, useRef, useState } from 'react';

let CurrentContext = createContext<{ current?: string, updateCurrent: (value?: string) => void, ref: any }>(
    { current: '', updateCurrent: (value?: string) => { }, ref: null  }
);

export function useCurrent() {
    return useContext(CurrentContext)
}

export function CurrentProvider({ children,
}: React.PropsWithChildren) {
    const [current, setCurrent] = useState<string | undefined>(undefined);
    let ref = useRef(null);

    const navIndicator = createElement('span', {
        className: 'absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white'
    });
    
    // (<span
    //     className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
    //     style={{ opacity: 1 }}></span>);
    const updateCurrent = (newValue?: string) => {
        setCurrent(newValue);
        // (ref.current as HTMLAnchorElement). parentNode?.appendChild(navIndicator);
    }
    return <CurrentContext.Provider value={{ current, updateCurrent, ref }}>{children}</CurrentContext.Provider>
}