export type ArticleBlock =
  | ArticleImageBlock
  | ArticleCodeBlock
  | ArticleTextBlock;

export enum ArticleBlockType {
  IMAGE = 'IMAGE',
  CODE = 'CODE',
  TEXT = 'TEXT'
}

export type ArticleBlockBase = {
  id: string;
  type: ArticleBlockType;
};

export type ArticleImageBlock = ArticleBlockBase & {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
};

export type ArticleCodeBlock = ArticleBlockBase & {
  type: ArticleBlockType.CODE;
  code: string;
};

export type ArticleTextBlock = ArticleBlockBase & {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
};
