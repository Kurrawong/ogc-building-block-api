export const constants = [
    '{{!bc}}Home',
    '{{!bc}}Catalogs',
    '{{!bc}}Collections',
    '{{!bc}}Items',
    'Home Page',
    'View Members',
    '{{ header.label }} collection',
    '{{ header.label }} resource'
] as const;

export type Texts = typeof constants[number];

export type OverrideTexts = Partial<Record<Texts, string>>;
