type LiveUpdateListener = (event: { type: string; timestamp: number }) => void;

const listeners = new Set<LiveUpdateListener>();

export function subscribeLiveUpdates(listener: LiveUpdateListener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function broadcastLiveUpdate(type: string = 'general') {
  const payload = { type, timestamp: Date.now() };
  listeners.forEach(listener => {
    try {
      listener(payload);
    } catch (err) {
      console.error('Error broadcasting live update:', err);
    }
  });
}
