export type ImageType = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type SlideType = {
  _key: string;
  color: string;
  line1: string;
  line2: string;
  line3: string;
  image: ImageType;
  randomizeMiddleLine?: boolean;
  middleLinePosition?: string;
};

export type LearnItemType = {
  _key: string;
  title: string;
  image: any;
  imageUrl: string;
  description: string;
};

export type TextImageGridSectionType = {
  _key: string;
  title: string[];
  byline: string;
  images: ImageType[];
  textArea: string;
  textArea2: string;
  color: string;
};

export interface TextProps {
  style: string;
  _key: string;
  markDefs: any[];
  children: any[];
  _type: string;
}
