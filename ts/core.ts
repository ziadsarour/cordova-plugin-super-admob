export type AdUnitIDOption =
  | string
  | {
      android: string;
      ios: string;
    }

export interface IAdRequest {
  id?: AdUnitIDOption
  testDevices?: string[]
  childDirected?: boolean
  underAgeOfConsent?: boolean
}

type BannerPosition = 'bottom' | 'top'

export enum AdSizeType {
  BANNER,
  LARGE_BANNER,
  MEDIUM_RECTANGLE,
  FULL_BANNER,
  LEADERBOARD,
  SMART_BANNER,
}

type AdSize =
  | AdSizeType
  | {
      width: number;
      height: number;
    }

type BannerOffset = {
  x?: number;
  y?: number;
}

export interface IBannerRequest extends IAdRequest {
  position?: BannerPosition
  size?: AdSize
  offset?: BannerOffset
}