import { renderOverlayStory } from '@/overlay/overlay.stub';

export default {
    title: 'Components/Overlay',
};

export const DefaultOverlayStory = () => renderOverlayStory({});

export const OverlayTopOffsetStory = () => renderOverlayStory({ topOffset: 200 });
