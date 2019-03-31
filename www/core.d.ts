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
export declare enum AdSizeType {
    BANNER = 0,
    LARGE_BANNER = 1,
    MEDIUM_RECTANGLE = 2,
    FULL_BANNER = 3,
    LEADERBOARD = 4,
    SMART_BANNER = 5
}
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
