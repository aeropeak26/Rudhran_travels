import { useEffect } from 'react';

export function useLiveUpdates(onUpdate: () => void) {
  useEffect(() => {
    let eventSource: EventSource | null = null;

    try {
      eventSource = new EventSource('/api/live-updates');

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data?.type && data.type !== 'connected') {
            console.log('⚡ [Live Update] Realtime update event received:', data);
            onUpdate();
          }
        } catch (err) {
          // ignore heartbeats
        }
      };

      eventSource.onerror = (err) => {
        // Automatically reconnects on disconnect
      };
    } catch (err) {
      console.error('Failed to establish SSE live connection:', err);
    }

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [onUpdate]);
}
