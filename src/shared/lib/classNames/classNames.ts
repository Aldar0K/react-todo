export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  mainClass: string,
  mods: Mods = {},
  additionalClasses: Array<string | undefined> = [],
): string => [
  mainClass,
  ...Object.entries(mods)
    .filter(([_, condition]) => !!condition)
    .map(([className, _]) => className),
  ...additionalClasses.filter(Boolean),
].join(' ');
