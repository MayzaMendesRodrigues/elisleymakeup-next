export {};

declare global {
  interface Window {
    goatcounter?: {
      count: (data?: {
        path?: string;
        title?: string;
        event?: boolean;
      }) => void;
    };
  }
}
