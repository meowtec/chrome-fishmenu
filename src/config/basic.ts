import { MenuCategory } from '../types/index';

export const groupKeys: MenuCategory[] = [
  'share',
  'search',
  'imageSearch',
];

export const metaProperties: Record<MenuCategory, {
  contexts: string[];
  title: string;
}> = {
  share: {
    contexts: ['page'],
    title: '分享到...',
  },

  search: {
    contexts: ['selection'],
    title: '搜索',
  },

  imageSearch: {
    contexts: ['image'],
    title: '以图搜图',
  },
};
