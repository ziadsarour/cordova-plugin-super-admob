import { AdUnitIDOption, IBannerRequest } from './core';
import { AdBase, TestIds } from './base';
export default class Banner extends AdBase {
    protected testIdForAndroid: TestIds;
    protected testIdForIOS: TestIds;
    show(opts: IBannerRequest): Promise<{}>;
    hide(id: AdUnitIDOption): Promise<{}>;
}
