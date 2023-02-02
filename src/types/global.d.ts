declare module '*.png';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.ttf';
declare module '*.woff2';
declare module 'react-qr-reader';
