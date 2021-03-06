import { groupKeys, metaProperties } from '../config/basic';
import { readOptions } from '../services/index';
import { EngineOption, MenuCategory } from '../types/index';
import replaceTemplate from '../utils/template';

class AppBackground {
  constructor() {
    this.render();

    chrome.runtime.onMessage.addListener((message: any) => {
      if (message.action === 'reload') {
        this.render();
      }
    });
  }

  onMenuClick(
    category: MenuCategory,
    clickData: chrome.contextMenus.OnClickData,
    tab: chrome.tabs.Tab,
    option: EngineOption,
  ) {
    const { url } = option;

    let templateData: Record<string, any> = {};

    switch (category) {
      case 'share':
        templateData = {
          url: encodeURIComponent(tab.url!),
          title: encodeURIComponent(tab.title!),
        };
        break;
      case 'search':
        templateData = {
          word: encodeURIComponent(clickData.selectionText!),
          host: encodeURIComponent(new URL(tab.url!).host),
        };
        break;
      case 'imageSearch':
        templateData = {
          imageUrl: encodeURIComponent(clickData.srcUrl!),
        };
        break;
      default:
    }

    window.open(
      replaceTemplate(url, templateData),
    );
  }

  render() {
    const options = readOptions();

    chrome.contextMenus.removeAll();

    groupKeys.forEach((key) => {
      const properties = metaProperties[key];
      const group = options.rules[key];

      if (group.enabled !== false) {
        const parentId = chrome.contextMenus.create({
          title: properties.title,
          contexts: properties.contexts,
        });

        // 分享
        group.options.forEach((item) => {
          if (!item.enabled) {
            return;
          }

          chrome.contextMenus.create({
            title: item.name,
            contexts: properties.contexts,
            onclick: (data, tab) => {
              this.onMenuClick(key, data, tab, item);
            },
            parentId,
          });
        });
      }
    });
  }
}

const app = new AppBackground();

console.log(app);
