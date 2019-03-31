import { AdBase, TestIds } from './base';
import { IAdRequest } from './core';
export default class Interstitial extends AdBase {
    protected testIdForAndroid: TestIds;
    protected testIdForIOS: TestIds;
    isLoaded(): Promise<{}>;
    load(opts?: IAdRequest): Promise<void>;
    show(): Promise<{}>;
}
