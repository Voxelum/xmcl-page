// vue import .png file
declare module "*as=picture" {
  interface Picture {
    img: {
      src: string;
      h: number;
      w: number;
    };
    sources: {
      [format: string]: string;
    };
  }

  const src: Picture;
  export default src;
}
