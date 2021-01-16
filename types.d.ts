import { Asset, Entry } from "contentful";

// Just to get document.fonts.ready types working. 😕
declare global {
  const FontFace: FontFace;

  interface Document {
    fonts: FontFaceSet;
  }

  type EmailDetails = {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
  };

  interface StackItem {
    name: string;
    logo: string;
    stackItemId: string;
  }

  interface TechStack {
    stackName: string;
    stackId: string;
    stackItems: StackItem[];
  }

  interface WorkItem {
    image: string;
    name: string;
    type: string;
    status: string;
    workId: string;
  }

  interface DetailedWorkItem extends WorkItem {
    url: string;
    stack: StackItem[];
    description: string | null;
  }

  interface ContentfulStackItemResult {
    name: string;
    logo: Asset;
    stackItemId: string;
  }

  interface ContentfulTechStackResult {
    stackName: string;
    stackId: string;
    stackItems: Entry<ContentfulStackItemResult>[];
  }

  interface ContentfulWorkItemResult {
    name: string;
    type: string;
    status: string;
    workId: string;
    image: Asset;
  }

  interface ContentfulDetailedWorkItemResult extends ContentfulWorkItemResult {
    url: string;
    stack: Entry<ContentfulStackItemResult>[];
    description: string | null;
  }

  type CSSOMString = string;
  type FontFaceLoadStatus = "unloaded" | "loading" | "loaded" | "error";
  type FontFaceSetStatus = "loading" | "loaded";

  interface FontFace extends FontFaceDescriptors {
    new (
      family: string,
      source: string | ArrayBuffer,
      descriptors?: FontFaceDescriptors
    ): FontFace;
    readonly status: FontFaceLoadStatus;
    readonly loaded: Promise<FontFace>;
    variationSettings: CSSOMString;
    display: CSSOMString;
    load(): Promise<FontFace>;
  }

  interface FontFaceDescriptors {
    family: CSSOMString;
    style: CSSOMString;
    weight: CSSOMString;
    stretch: CSSOMString;
    unicodeRange: CSSOMString;
    variant: CSSOMString;
    featureSettings: CSSOMString;
  }

  interface FontFaceSet extends Iterable<FontFace> {
    readonly status: FontFaceSetStatus;
    readonly ready: Promise<FontFaceSet>;
    add(font: FontFace): void;
    check(font: string, text?: string): Boolean; // throws exception
    load(font: string, text?: string): Promise<FontFace[]>;
    delete(font: FontFace): void;
    clear(): void;
  }
}

export {};
