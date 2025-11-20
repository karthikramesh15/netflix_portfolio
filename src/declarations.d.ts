// src/declarations.d.ts
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.JPG' {
  const src: string;
  export default src;
}
declare module '*.JPEG' {
  const src: string;
  export default src;
}
declare module '*.mp3' {
  const src: string;
  export default src;
}

// Fix for require.context
declare interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
}
