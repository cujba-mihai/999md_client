import { RefObject } from 'react';
import { useEventListener } from './useEventListener';

export function useClickOutside(ref: RefObject<HTMLElement>, handler: ((arg?: any) => void), event = 'mousedown') {
    useEventListener(event, (eventName: any) => {
        const el = ref?.current;
        if (!el || el.contains(eventName.target)) return;

        handler(eventName);
    })
}