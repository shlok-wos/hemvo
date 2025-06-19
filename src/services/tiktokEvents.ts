'use client';

export const trackTikTokEvent = (eventName: string, payload?: object) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track(eventName, payload || {});
  }
};