class AMSBanner: AMSAdBase, GADBannerViewDelegate {
    var bannerView: GADBannerView!
    var adSize: GADAdSize!
    var position: String!
    var offset: Dictionary<String, CGFloat>

    var view: UIView {
        return self.plugin.viewController.view
    }

    init(id: Int, adUnitID: String, adSize: GADAdSize, position: String, offset: Dictionary<String, CGFloat>) {
        self.adSize = adSize
        self.position = position
        self.offset = offset

        super.init(id: id, adUnitID: adUnitID)
    }

    deinit {
        bannerView = nil
    }

    func show(request: GADRequest) {
        if bannerView != nil {
            bannerView.isHidden = false
        } else {
            bannerView = GADBannerView(adSize: self.adSize)
            bannerView.translatesAutoresizingMaskIntoConstraints = false
            self.plugin.webView.superview?.addSubview(bannerView)
            self.plugin.webView.superview?.bringSubview(toFront: bannerView)
            positionBanner(bannerView)
            bannerView.rootViewController = plugin.viewController
        }

        bannerView.delegate = self
        bannerView.adUnitID = adUnitID
        bannerView.load(request)
        bannerView.isOpaque = false
    }

    func hide() {
        if (bannerView?.superview) != nil {
            bannerView.delegate = nil
            bannerView.rootViewController = nil
            bannerView.removeFromSuperview()
            bannerView = nil
        }
    }

    func positionBanner(_ bannerView: UIView) {
        self.plugin.webView.superview?.addConstraint(NSLayoutConstraint(item: bannerView,
                                              attribute: .centerX,
                                              relatedBy: .equal,
                                              toItem: self.plugin.webView.superview,
                                              attribute: .centerX,
                                              multiplier: 1,
                                              constant: self.offset["x"]!))
        if position == "top" {
            self.plugin.webView.superview?.addConstraint(NSLayoutConstraint(item: bannerView,
                                                  attribute: .top,
                                                  relatedBy: .equal,
                                                  toItem: self.plugin.webView.superview,
                                                  attribute: .top,
                                                  multiplier: 1,
                                                  constant: self.offset["y"]!))
        } else {
            self.plugin.webView.superview?.addConstraint(NSLayoutConstraint(item: bannerView,
                                                  attribute: .bottom,
                                                  relatedBy: .equal,
                                                  toItem: self.plugin.webView.superview,
                                                  attribute: .bottom,
                                                  multiplier: 1,
                                                  constant: self.offset["y"]!))
        }
    }

    func adViewDidReceiveAd(_ bannerView: GADBannerView) {
        let data = [
            "height": bannerView.adSize.size.height,
            "width": bannerView.adSize.size.width
        ]

        plugin.emit(eventType: AMSEvents.bannerLoad, data: data)
    }

    func adView(_ bannerView: GADBannerView,
                didFailToReceiveAdWithError error: GADRequestError) {
        plugin.emit(eventType: AMSEvents.bannerLoadFail)
    }

    func adViewWillPresentScreen(_ bannerView: GADBannerView) {
        let data = [
            "height": bannerView.adSize.size.height,
            "width": bannerView.adSize.size.width
        ]

        plugin.emit(eventType: AMSEvents.bannerOpen, data: data)
    }

    func adViewWillDismissScreen(_ bannerView: GADBannerView) {
    }

    func adViewDidDismissScreen(_ bannerView: GADBannerView) {
        let data = [
            "height": bannerView.adSize.size.height,
            "width": bannerView.adSize.size.width
        ]

        plugin.emit(eventType: AMSEvents.bannerClose, data: data)
    }

    func adViewWillLeaveApplication(_ bannerView: GADBannerView) {
        let data = [
            "height": bannerView.adSize.size.height,
            "width": bannerView.adSize.size.width
        ]

        plugin.emit(eventType: AMSEvents.bannerExitApp, data: data)
    }
}
