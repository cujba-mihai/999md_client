/* eslint-disable @typescript-eslint/no-shadow */
import { RefObject } from 'react';
import { useEventListener } from './useEventListener';

export function useClickOutside(ref: RefObject<HTMLElement>, handler: ((arg?: any) => void), event = 'mousedown') {
    useEventListener(event, (event: any) => {
        const el = ref?.current;
        if (!el || el.contains(event.target)) return;

        handler(event);
    })
}