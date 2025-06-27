'use client';

import React, { useEffect, useRef } from 'react';
import { use } from 'react'; // 👈 obligatoire avec Next.js 15
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Page({ params }) {
  const { roomId } = use(params); 
  const containerRef = useRef(null);
  useEffect(() => {
    const appID = 199804073;
    const serverSecret = "fd92a506ccb99f5ebb77ade565d09005";

    if (!roomId) {
      console.error("roomId is undefined!");
      return;
    }

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      'jeremie'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: 'Personal link',
          url: `${window.location.origin}/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  }, [roomId]);

  return <div ref={containerRef} className="h-[100vh] w-[100vw]" />;
}
