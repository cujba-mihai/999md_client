import React, { RefObject, useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'



export function useEventListener(eventName: string, handler: (arg?: any) => void, element?: RefObject<HTMLElement>) {
    const savedHandler:  React.MutableRefObject<() => void> |  React.MutableRefObject<(arg: any) => void> = useRef(handler)

    useIsomorphicLayoutEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const targetElement = element?.current || window
        if (!(targetElement && targetElement.addEventListener)) return;

        const eventListener = (event: any) => savedHandler.current(event);

        targetElement.addEventListener(eventName, eventListener)

        return () => {
            targetElement.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element])
}