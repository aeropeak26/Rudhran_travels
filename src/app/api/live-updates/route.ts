import { NextResponse } from 'next/server';
import { subscribeLiveUpdates } from '@/lib/liveUpdate';

export const dynamic = 'force-dynamic';

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection message
      controller.enqueue(encoder.encode('data: {"type":"connected"}\n\n'));

      const unsubscribe = subscribeLiveUpdates((event) => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
        } catch (err) {
          console.error('SSE Stream enqueue error:', err);
        }
      });

      // Heartbeat interval to keep socket stream open
      const interval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(':\n\n'));
        } catch (err) {
          clearInterval(interval);
        }
      }, 15000);

      // Cleanup on client disconnect
      return () => {
        unsubscribe();
        clearInterval(interval);
      };
    }
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive'
    }
  });
}
