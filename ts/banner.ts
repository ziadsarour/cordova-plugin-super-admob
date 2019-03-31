import { AdSizeType, AdUnitIDOption, IBannerRequest } from './core'

import { AdBase, execAsync, TestIds } from './base'
import { NativeActions } from './constants'

export default class Banner extends AdBase {
  protected testIdForAndroid = TestIds.banner_android
  protected testIdForIOS = TestIds.banner_ios

  public show(opts: IBannerRequest) {
    const adUnitID = this.resolveAdUnitID(opts.id)
    opts.offset = opts.offset || {};
    opts.offset.x = opts.offset.x || 0;
    opts.offset.y = opts.offset.y || 0;

    return execAsync(NativeActions.banner_show, [
      {
        position: opts.position || 'bottom',
        size: opts.size || AdSizeType.SMART_BANNER,
        offset: opts.offset,
        adUnitID,
        id: this.state.getAdId(adUnitID),
      },
    ])
  }

  public hide(id: AdUnitIDOption) {
    const adUnitID = this.resolveAdUnitID(id)
    return execAsync(NativeActions.banner_hide, [
      { id: this.state.getAdId(adUnitID) },
    ])
  }
}
