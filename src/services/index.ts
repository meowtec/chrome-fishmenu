import defaultOptions from '../config/default-options';
import { EngineOptions, LegacyRules, LegacySwitchs } from '../types/index';
import mapValues from '../utils/mapValues';

function getStorage(key: string) {
  const content = localStorage.getItem(key);
  try {
    return content && JSON.parse(content);
  } catch {
    return null;
  }
}

export function readOptions(): EngineOptions {
  let options = getStorage('options') as EngineOptions;
  const legacyRules = getStorage('rules') as LegacyRules;
  const legacySwitchs = getStorage('switch') as LegacySwitchs;

  if (!options) {
    if (legacyRules && legacySwitchs) {
      options = {
        rules: mapValues(legacyRules, (list, key) => ({
          enabled: legacySwitchs[key],
          options: list,
        })),
      };
    } else {
      options = defaultOptions;
    }
  }

  return options;
}

export function saveOptions(options: EngineOptions) {
  localStorage.setItem('options', JSON.stringify(options));
}
