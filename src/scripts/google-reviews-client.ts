import type { GoogleReviewsResponse } from '../lib/reviews';

// One in-memory request per document. Never persist reviews or ratings.
let request: Promise<GoogleReviewsResponse> | undefined;
export function getGoogleReviews(): Promise<GoogleReviewsResponse> {
  return request ??= fetch('/api/google-reviews', { cache: 'no-store', credentials: 'same-origin', signal: AbortSignal.timeout(9000) })
    .then(async response => {
      if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Reviews unavailable');
      return response.json() as Promise<GoogleReviewsResponse>;
    });
}

export function initializeGoogleRatings() {
  const nodes = [...document.querySelectorAll<HTMLElement>('[data-google-rating]')];
  if (!nodes.length) return;
  void getGoogleReviews().then(({ aggregate }) => {
    if (!aggregate || !Number.isFinite(aggregate.rating) || aggregate.rating < 1 || aggregate.rating > 5
      || !Number.isSafeInteger(aggregate.count) || aggregate.count < 1) return;
    const label = `${aggregate.rating.toFixed(1)} from ${aggregate.count.toLocaleString('en-US')} Google reviews`;
    nodes.forEach(node => {
      const text = node.querySelector('[data-rating-label]');
      if (text) text.textContent = label;
      node.querySelector('[data-rating-fallback]')?.setAttribute('hidden', '');
      node.dataset.ratingState = 'live';
    });
  }).catch(() => { /* Real source links and accurate fallback text remain visible. */ });
}
