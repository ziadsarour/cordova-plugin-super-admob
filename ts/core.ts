import { AdSizeType } from './constants'

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