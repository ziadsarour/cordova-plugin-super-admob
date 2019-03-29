import { IBannerRequest } from '@admob-plus/core';
import { AdUnitIDOption } from './../../core/index';
import { AdBase, TestIds } from './base';
export default class Banner extends AdBase {
    protected testIdForAndroid: TestIds;
    protected testIdForIOS: TestIds;
    show(opts: IBannerRequest): Promise<{}>;
    hide(id: AdUnitIDOption): Promise<{}>;
}
