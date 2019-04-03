import { AdSizeType } from './constants';
export declare type AdUnitIDOption = string | {
    android: string;
    ios: string;
};
export interface IAdRequest {
    id?: AdUnitIDOption;
    testDevices?: string[];
    childDirected?: boolean;
    underAgeOfConsent?: boolean;
}
declare type BannerPosition = 'bottom' | 'top';
declare type AdSize = AdSizeType | {
    width: number;
    height: number;
};
declare type BannerOffset = {
    x?: number;
    y?: number;
};
export interface IBannerRequest extends IAdRequest {
    position?: BannerPosition;
    size?: AdSize;
    offset?: BannerOffset;
}
export {};
