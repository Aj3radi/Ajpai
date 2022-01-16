function FindProxyForURL(url, host) {
	const ALLOW = "DIRECT";
	const DENY = "PROXY 0.0.0.0:53";
	const u = url.toLowerCase();
	const h = host.toLowerCase();

	if (dnsDomainIs(h, "discord.com") || dnsDomainIs(h, "cypwn.xyz") || dnsDomainIs(h, ".local") || dnsDomainIs(h, "old.reddit.com")) {
		return ALLOW;
	}

	if (dnsDomainIs(h, "2o7.net") || shExpMatch(u, "3*[0-9].space") || shExpMatch(u, "aa*amazon") || dnsDomainIs(h, "adcolony.com") || shExpMatch(u, "adhub") || shExpMatch(u, "admob") || dnsDomainIs(h, "adjust.io") || dnsDomainIs(h, "ads.google.com") || dnsDomainIs(h, "adservice.google.com") || shExpMatch(u, "ads") || shExpMatch(u, "advertising") || dnsDomainIs(h, "adtago.s3.amazonaws.com") || dnsDomainIs(h, "affiliationjs.s3.amazonaws.com") || dnsDomainIs(h, "amazonaax.com") || dnsDomainIs(h, "amazonclix.com") || shExpMatch(u, "analytics") || dnsDomainIs(h, "assoc-amazon.com") || dnsDomainIs(h, "authedmine.com") || dnsDomainIs(h, ".bid") || dnsDomainIs(h, "bigdata.ssp.samsung.com") || shExpMatch(u, "bugsnag") || dnsDomainIs(h, "business.samsungusa.com") || shExpMatch(u, "clk") || shExpMatch(u, "coin(-|)hive") || dnsDomainIs(h, "contentabc.com") || dnsDomainIs(h, "criteo.com") || dnsDomainIs(h, "crypto-loot.com") || dnsDomainIs(h, "d.reddit.com") || dnsDomainIs(h, "demdex.net") || dnsDomainIs(h, "domdex.com") || dnsDomainIs(h, "dotomi.com") || dnsDomainIs(h, "doubleclick.net") || dnsDomainIs(h, "ensighten.com") || dnsDomainIs(h, "fbcdn.net") || dnsDomainIs(h, "fbsbx.com") || dnsDomainIs(h, "events.redditmedia.com") || dnsDomainIs(h, "facebook.com") || dnsDomainIs(h, "fastclick.com") || dnsDomainIs(h, "fastclick.net") || shExpMatch(u, "firebaselogging*googleapis.com") || dnsDomainIs(h, "flurry.com") || dnsDomainIs(h, "fundingchoicesmessages.google.com") || dnsDomainIs(h, "googleadservices.com") || dnsDomainIs(h, "google-analytics.com") || dnsDomainIs(h, "googlecode.com") || dnsDomainIs(h, "googlesyndication.com") || dnsDomainIs(h, "hicloud.com") || shExpMatch(u, "hotjar") || dnsDomainIs(h, "imasdk.googleapis.com") || shExpMatch(u, "luckyorange") || shExpMatch(u, "market(o|i|e)") || dnsDomainIs(h, "media.net") || shExpMatch(u, "medialytics") || shExpMatch(u, "metrics") || dnsDomainIs(h, "miui.com") || dnsDomainIs(h, "mouseflow.com") || shExpMatch(u, "noopener") || shExpMatch(u, "oneplus") || shExpMatch(u, "pagead") || dnsDomainIs(h, "parsely.com") || dnsDomainIs(h, ".pinterest.com") || shExpMatch(u, "popunder") || dnsDomainIs(h, "pubmatic.com") || shExpMatch(u, "redirect") || dnsDomainIs(h, "reporo.net") || dnsDomainIs(h, "rereddit.com") || dnsDomainIs(h, "rocks.io") || shExpMatch(u, "sentry") || shExpMatch(u, "stats.*.com") || dnsDomainIs(h, "suprnova.cc") || dnsDomainIs(h, "telemetrydeck.com") || dnsDomainIs(h, "tfbnw.net") || shExpMatch(u, "tracking") || shExpMatch(u, "traffic") || dnsDomainIs(h, "xiaomi.net") || shExpMatch(u, "yandex")) {
		return DENY;
	}

	return ALLOW;
}