declare module "locomotive-scroll" {
  type LocoScrollToOptions = {
    duration?: number;
    disableLerp?: boolean;
    offset?: number;
    immediate?: boolean;
    easing?: number[] | ((t: number) => number);
  };

  export default class LocomotiveScroll {
    constructor(options: Record<string, unknown>);
    on(event: string, cb: (...args: any[]) => void): void;
    update(): void;
    destroy(): void;
    scrollTo(
      target: number | string | HTMLElement,
      options?: LocoScrollToOptions,
    ): void;
    scroll?: {
      instance?: {
        scroll?: {
          y?: number;
        };
      };
    };
  }
}
