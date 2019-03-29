import { IAdRequest } from '@admob-plus/core';
import { AdBase, TestIds } from './base';
export default class RewardVideo extends AdBase {
    protected testIdForAndroid: TestIds;
    protected testIdForIOS: TestIds;
    isReady(): Promise<{}>;
    load(opts?: IAdRequest): Promise<void>;
    show(): Promise<{}>;
}
