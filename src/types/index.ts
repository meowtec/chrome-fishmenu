export type MenuCategory = 'share' | 'search' | 'imageSearch';

export type LegacyRules = Record<MenuCategory, EngineOption[]>;

export type LegacySwitchs = Record<MenuCategory, boolean>;

export interface EngineOption {
  name: string;
  url: string;
  enabled?: boolean;
}

export type EngineOptions = {
  rules: Record<MenuCategory, {
    enabled: boolean;
    options: EngineOption[];
  }>;
};
