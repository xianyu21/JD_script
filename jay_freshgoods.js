const $ = new Env("抽盲盒赢千万京豆");
		const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
		const notify = $.isNode() ? require('./sendNotify') : '';
		let cookiesArr = [],
			cookie = '',
			message = '';
		var _0xodI = 'jsjiami.com.v6',
			_0x3cea = [_0xodI, 'wovDkMOxX8Ke', 'NsKVw7o=', 'wqggw6DDjcKs', 'wovClsKW', 'eQ4zDkI=', 'w5BDH8OHw6rCkcK4',
				'5byq5Ym16La75oqF56We5YuZ', 'woPCmMKFHg==', 'TRA/', 'woFlWcOK', 'w4B4O8OCw6Y=', 'wpbDqMKoFA==', 'ImrDh8KM',
				'w7wUwrRtwrx+Zw==', 'Sy04MkE=', 'GkgBa8Kl', 'w5QQCxoeRUY=', 'VR4rU8KxRQ==', 'acOBT8OIw48CXsOd', 'ccOPWw==',
				'wpRRwrjChRw8HMOU', 'wolHcsKh', 'dsOuQkc0', 'PsK4OiVd', 'w6lRMcOnwpdnw4XDkQ==', 'wpRRwrjChRws',
				'fQ4yFm7ChyFu', 'wqRAwr1kwpgt', 'w43ClcO1HSEqwps9', 'A2oMV8Khwp4=', 'wqJNCT59',
				'5Lqr5LuW5rO15p216L6S5Zqa5pS25oyM', 'CF7DkcKIwpY=', 'LHPDj0lGf8OkdMKT', 'w5sxUVs=', 'a8O9AsOQ',
				'w5FTC8OFw73ChsKFwqXDkw==', 'w5LCpOaJoeWJheS6qg==', 'ScKYY8Ou', 'BcKEFSVuw6bCq8K9wqY7', 'PcKfw6k=',
				'wqhBOw==', 'YsK4JhM0CSMRwqnCjcKSw7E=', 'QDrCrg==', 'wrnDnsKwFGA=', 'wrZTY8KQdw==', 'wrxPRsOcUA==',
				'w5U7V3Bdw54=', 'TB41V8Kb', 'wpbDrXPClcO2', 'wq/CisOJfAjDr2hN', 'KnnDrVhSTsOvR8KXwoIs', 'woURwqHDrlI=',
				'wpfDoEjCoMO7w4Q=', 'Ux42XMKXTA==', 'RcKAPjYw',
				'wphIwrPCli0wAcOBw7TDncKww7UGE8OTw6LDslDChknCscKSHcO/J8OVw6zDrsKAbjRowojDsCPCosKSCsKLwqQ=', 'LUQmdsK+',
				'Ui0ea8KI', 'KW9nLVPCmh7ClA==', 'DVfDjsOGw4PCtsKFAA==', 'w4/CvMOLNSw=', 'wrLDi8KMw5vCmQ==',
				'NmLDjFhREcKyK8KbwpRkw5vCu8Ouw7Njwo/CusKVw7ISLcKXdClMUMKOwq9qK8Obwp7Co8Olw5A8woQTcsKcF8KIwojCtUPDswdQZsKAIcK5w70=',
				'wr4ewpbDtBZkeMOvBcKz', 'V8KROsOsNw==', 'csOUwqrCtsK6', 'wpPDrsOcSsK9', 'w4rClcOnNSE=',
				'wpbCisOgYRbDqmcFd8K5ZsOoH8KZLsK/SipJU8Oawrglw6pCeG3Cu8OHw5HDi8OQAcOnwrzCg2xTwoASwrpdYMKFw5HDrcKIFsKrw4rCqMKPw6zClj7ChMONFMOgIxIYwolAwovCnS0Dwoo2w4HDs8KvBUHClH3CnMKAZsOCw4jCkMKXOzE4wr8fJyJNS3JGwpwlw7tzLcKHwoU7w5TCsThZSTjClDkicMOcExMRwrI4wpzDs8OGwrF6wrLDp08Kw7nDk8OjwrViW1TDpEg=',
				'wrTCt8KUOjA=', 'wqJxJ17Dkg==', 'bhUoDQvDkyBmw4fDjMOiOMKQTiZ4QQ==', 'w5LCqcO85a+55oi85LiI5Yqz',
				'w5bDicOBTg==', 'wqdnwqbCnB4=', 'ecOCwqbCm8KO', 'FHJzOkY=', 'I1LDv8KowqA=', 'SAU7L38=', 'GMOqExge',
				'wpNqwrPChwQ=', 'w6dVRMKLwqA=', 'w6nChMOXMTo=', 'IMOSNg==', 'wrnDpMOvWcK3', 'QR7DqRM=', 'KTbCkVw=',
				'woLDpsKxw5s=', 'wqNKNw==', 'w7vDhcK66I6/5b+t', 'wovClsKWOgbDvg==', 'woNkwpvCmz0=', 'WAQbHEo=',
				'PTbCl07CvA==', 'w5sewrJDwqs=', 'PzLCkV7CtjHCkw==', 'wpLDh8KuMMO8', 'Pkc4WcKO', 'w5EQQBQG', 'PMOcIycB',
				'I8KVw7o6UcKWRg==', 'wpjDrsKWO1g=', 'OjbCvHbCtg==', 'VsOHZkASw59a', 'w6EoZRY=', 'H20MSMKhwpTCm8OI',
				'wrnChMOpbTPDqGBF', 'wp1xwoQ1wqhvJMKl', 'wqkVw47Di8KNHz8=', 'wpTDosKxw5llw61C',
				'w7d1ZMKXwqJWP8KEaMOma8KVw7Jb', 'wq4Pw6HDj8KkFzzClw==', 'WSvCvcKQ', 'w7A6dAUpCkQI', 'esKTCsOxwqJYKMKS',
				'BHcKUcKGwpvCkMOC', 'wrA/wpLDoFI=', 'JsOzKDws', 'w70CwodJwr1n', 'w5AaERQJSw==', 'w5IMJgg=',
				'wpTDpsKuME3CkHo=', 'IcKFw70x', 'wr7Ci8Os', 'M3zDgsO2w7TCncK+IA==', 'w4ZYCg==', 'OHfDlFtH', 'wolrSg==',
				'bgo1GUbChyU=', 'wqvChMOoex8=', 'LjjCilbCsDA=', 'wqcDw7bDgMKLAjA=', 'wpjCisO1YxPDo0xucA==',
				'wpjCisO1YxPDo0xu', 'H1HDscOGw5TCrQ==',
				'Z8OoAsOBwqbCl8K1ZArDgMKTw7HCm8OUwo/DuUXDqsKRK8KIM8K8wqfDo8OOwqrCh0TCqwDComzDuVLDu8OjwqzCosKqwqPDq8KW',
				'RcK9WMO1Gw==', 'KMO2TsOIw7MCD8OYVHLCjcO5wrA0fzPCkcKZwpwBe8KNPcOv', 'wpPDlcKRw5VJ', 'w7sOwqlnwqY=',
				'44Gn5oyx56WY44GV6K+r5YeK6I2S5YyK5Lmn5LmC6Lez5Y+P5Lm2w65bwpPDtSQfwqvnmYrmjJ3kvaHnlorClsOCwrouO0Xnmpnku4fku7vnrJzli47ojrTlj7Q=',
				'wptswpMuwrU0ZsOvQxTCscOzw7nDpcK5w6HDnjAKDMOJw5d3OMOUS8KyMV7CnsOZw6cCw7fDtwhIBcOaw4YjSG0=', 'w6F5O8Ohw54=',
				'wpdwEsOtwos=', 'NU7DtsKWwqpxTMKm', 'wqpEwpp4wpQ=', 'SB7DqRHChg==', 'SBE8XcKA', 'w4ssCwoG', 'w5AaExQKR1s=',
				'G8KOBQ==', 'W8OawqRzFMOYCeW/quWnreOAouS4veS6iOi3neWPrQ==', 'YAElGF8=', 'YcO1FcOawpvDjMO3Lg==',
				'w7ZFGcOWw4HCg8KmwrU=', 'ccKBNcO7woxfIA==', 'Rg42W8Kq', 'w7TCpMOELgA=', 'wr5IwqUGwq4=', 'ClR3HVI=',
				'A8KOMTBuw6vCi8K7', 'w6t7QsKowqVdHcK1ZsOlaw==', 'wpDDpMOC', 'wqFEPcOx',
				'44Oq5o2U56eR44KNwow3GSk4PeW2u+WmqOaUtw==', 'ZsOyEsOUwq0=', 'wofDvwYLcMK8w5TDlA==',
				'c+ivj+mFkOaUguebiuW+iuiNnOWOscOkwqtELSswaVrDlsO/wobCnsO8PsO8Q8KdHjLDlxVhZcKEIhrDsMOjNMKmw6bDgMOMwrhew6wTY8OdIcODQcKSbA==',
				'RcKFEzkX', 'bsK5GhMiIQ==', 'w5o7X15Gw4nltbLlpqHmlq3CnMOPIQ==', 'wqfDusK5B2LCkn/CiQ==', '5LmL5Lul6LeX5Y6I',
				'wqRawrxswqk=', 'wo7ClsO/ejTDp2tP', 'auiviumFnuaVlOean+W9heiOluWMlTzCuixtZgA=', 'NWbDhcKHwpU=',
				'LCLCkVXCtifCpgNO', 'wrfCgMO0bw7Drg==', 'woTDosKkw5Q=', 'RsKOHTg=', 'wq/DvsKkw75j', 'wqnDqsKAw4nCmQ==',
				'w4sWZE19', 'woZiUMK/fg==', 'wp7DssKIEg==', 'R+OBh+S5ieS4oei3v+WOog==', 'UyPCqsKaw6XCgFzCjQ==',
				'woM8XMKEwq/DgsOrw7DCnuKUnwToj5rlvZ9c', 'd8OmwoLClw==', 'w63kupjosp7jgIs=', 'worDp8KwIUA=', 'wqHDrV3Cojw=',
				'LmVaPW/CnATCmnvDjg==', 'PcKAHOiMlOW8kQ==', 'fMKTDcO1', 'L2VDOFPClzLClnzDmUk=', 'wojDocKcw73CnTw0JzA2Og==',
				'Lm0/dcKv', 'ZRPCscKUw6Q=', 'w7LCm8OPIwA=', 'w5U7Vw==', 'cjblponotI0DC+WMguWbpMOMw5E=', 'YsOvEQ==',
				'BH8EXw==', 'JWrDh8KOwpw=', 'w50Aw4Q=', 'w6sofBI=', 'wpzDrcKFw73CgzQP', 'woRfwqXCiw==',
				'RhosecKbVUzDv8Oyw4IfbcOtw74+', 'w6hDCcOpw4U=', 'Hl3DqcO/w4jCi8KKFMKF', 'wpzDrcKFw7XCnDA=', 'woFxwoDCiCw=',
				'w7U9wpF9wp0=', 'dcKPVcOKOA==', 'bsKxCsOcwqE=', 'RcKTVMOZMA==', 'K27DqsKDwrI=', 'woFADHA=', 'wpZ0fMK8dg==',
				'QMOyY1Iv', 'P3XDjGFMTcOy', 'OHsYW8Kw', 'SRDDqQbCi1VOW8Kow6FbLA3Cm8K2w6k=', 'wp7DpsK7',
				'5byN5Ymb6Lae5oif5Y+N5oqW5aeL5qyl5paG77+r', 'ITjCgg==', '5Y2B5oi55aa9', 'wq7CscKdOjY=', 'woLDtcKkw40=',
				'WsKYfsO7', 'Q8ONVWEp', 'w6AEQBYh', 'V8OBQuWviOaIjOS5ueWJhA==', 'bsKWKcOjwoU=', 'wrB3wog1wq9rA8KEEw==',
				'wr1JdMK+WsOQwprCiA==', 'wqdQwrJmwqhnNsOKfWpoBQ==', 'Z8OIEcOAw6g=', 'JV/DssKawpA=', 'w6sfWFxG',
				'EUzDqcOCw4LDpcOESMKGw7YeNHUpN1vCmsOywo4=', 'wrIBwprDtBclcMOjFcK6woPDjBxWQsOzwrY=', 'RSDCk8KAw50=',
				'e8OfwqQ=', 'wpbDs8KIDMO8Z38Mw61tflk3G8KufifClkTDt1jCicKxYA==', 'OHzDlMO2', 'w6snwoZ/wrk=', 'w5IWw5QybQ==',
				'GsKLAD5z', 'woDDpsKpw4lv', 'wpjCsMO+XRA=', 'w6lAMMOhw4g=', 'worDisKRw4hj', 'wqNdwrtiwp8oMcOL', 'Y8KrIB0=',
				'TjTCuk4lw4DDkcK9', 'SxbDvhnCgEZaag==', 'wpbDq8KM', 'w6AwPR8u', 'w4YpwpJWwrs=', 'wqRcwpUEwrI=', 'w4kILQgI',
				'wqVsMz9E', 'w4l1esKLwpg=', 'wrZLKzZae2B8I8KYeQ==', 'BFbDpMK+wo0=', 'w4xhPsO+w4c=', 'KmTDlA==',
				'V8OBQuiPs+W+iw==', 'wqnCgMOtaQjDokRPI8O5JQ==', 'FcKEAyo=', 'wpjDtsKdHQ==', 'wqwJw6U=',
				'5LmL5Lul5rGQ5p226L6g5ZmS5pSN5o2x', 'wp7DpcKfw70=', 'dMKdHg==', 'BFzDp8KF', 'w4vCkcOxFxo6wq4/wqjDrMOyw4k=',
				'woLDpFLCoMO1w51O', 'I1LDvMKPwo11UsKJGw==', 'wojDoFY=', 'w5IAw4woZcOC', 'wpTDosKzw594w7pC', 'wpVxXsOD',
				'QwMSDF8=', 'OXPDjExDX8O8', 'w5oIw4wkdg==', 'PzLCk1jCqybCkw==', 'OH/DlFxHWQ==', 'w6kmdg==', 'IVrDi8KVwpo=',
				'wobDjVDCjBk=', 'aMORV0YI', 'wpDDuMKO', 'LkXDmcK+wrM=', 'Ygo4Dg==', 'YcKlJjknJy4=', 'wrATw7HDjA==',
				'wrbDk8K2OMOJHkMb', 'woBqWw==', 'w48NTjMlJncg', 'bR7DlTjCpw==', 'wpVawoEXwos=',
				'NsKVw7oYXcKGSsKcT0bDqMOEwpp9Zw==', 'B1jDp8Kpwp1EQMKwNA==', 'STEpdsKa', '5bWt57ub5a6b5ouI5Liu5YqZ',
				'wqBcPSA=', '5Lid5Lmz5rCC5p2K6L+Y5Zm55pSy5oy/', 'wpjCssOYfRk=', 'bMOdMsOHwoc=', 'worDs17CksOB',
				'woPDqMK+JGg=', 'wqDDmn/ChhVXwoxtw4nDmiUu', 'JjLCgE3DtDTCmgNWVA==', 'wplccsKlH8KVwrTCqcKpGMOkV2TCmDt6w60v',
				'dcOUSMOTw7VMFMKfZ0XDk8KlwrhzUhHCicKzwolabcKhb8K2QF/Cm8KQw7tII3wWE8OyFGHDs8OL',
				'OMKpOxgjeSIGwrzDncOCw7V6w7dLwq4iT0TCoibDkyzDugPCmEXCnsKEw4Ufw71yw6bCt8O6AcON', 'eMO7wpfCg8Ko',
				'wptswpMuwrU0ZsOvSUTDvsOww7nDosOzwqXDmXEE', 'wqxCJA5s', 'w6Q6w6oH', 'H8OMd1cKw5RNwpwVw689VMKaNCJRw5FmwrE=',
				'SCsIOQ==',
				'w79DMzNNcw1wEsKeZU9Vw5XDrwt0wq84YzTCnMOMw5vDqHDCosOOw7zClMKsw4cDCmtiwpNfwozCnBPCl0zCr8Oew5HDg2XCl8K3fR/CkVsjGcOVwqrCqTFFw7TCrHZlPxXDj8K1wpdzwr3Dvx5PD3TCsEjCijrDpsKsw7Ulw6Z0CsOWwpHCv8KUwqzDpFXCmsOhw7zDi8KLw5DCgcOsw5ccwpPDtlDDizBrwo4YwqdgFU8FWiLDo0IYAhkANlcHK8KiPsOswqA4cWTCs8KQwoXCj8KJIMKVwoAACV3DhyjDr1zCvMOhLw/Cok8WdHpKwrEBN8KEYMKRwr7CgnNjw5LDtsODeBwLLsKRw7w7PVDDtCfCssO5UcOJw4Y=',
				'wosVw5XDlcKf', 'w4QpwpRtwqo=', 'OHXDrUF3', 'w6VHG8OIw4k=', 'VsOMQnsQ', 'ZQAm',
				'jdstHOjiami.cWeom.v6tSEfGuyxDF=='
			];
		(function(_0x49d69e, _0x233841, _0x7ce91b) {
			var _0xc3917a = function(_0x17a687, _0x556d6b, _0x437cf4, _0x15cc27, _0x42cc74) {
				_0x556d6b = _0x556d6b >> 0x8, _0x42cc74 = 'po';
				var _0x18ca83 = 'shift',
					_0x562375 = 'push';
				if (_0x556d6b < _0x17a687) {
					while (--_0x17a687) {
						_0x15cc27 = _0x49d69e[_0x18ca83]();
						if (_0x556d6b === _0x17a687) {
							_0x556d6b = _0x15cc27;
							_0x437cf4 = _0x49d69e[_0x42cc74 + 'p']();
						} else if (_0x556d6b && _0x437cf4['replace'](/[dtHOWetSEfGuyxDF=]/g, '') === _0x556d6b) {
							_0x49d69e[_0x562375](_0x15cc27);
						}
					}
					_0x49d69e[_0x562375](_0x49d69e[_0x18ca83]());
				}
				return 0x8aaee;
			};
			return _0xc3917a(++_0x233841, _0x7ce91b) >> _0x233841 ^ _0x7ce91b;
		}(_0x3cea, 0x78, 0x7800));
		var _0x48b3 = function(_0x38efab, _0x17449a) {
			_0x38efab = ~~'0x' ['concat'](_0x38efab);
			var _0x14dde1 = _0x3cea[_0x38efab];
			if (_0x48b3['EbCiQW'] === undefined) {
				(function() {
					var _0x2c42dd = typeof window !== 'undefined' ? window : typeof process === 'object' &&
						typeof require === 'function' && typeof global === 'object' ? global : this;
					var _0x1edeb6 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
					_0x2c42dd['atob'] || (_0x2c42dd['atob'] = function(_0x17fd12) {
						var _0x12d4ba = String(_0x17fd12)['replace'](/=+$/, '');
						for (var _0x29f4d2 = 0x0, _0x22863d, _0x515509, _0x373794 = 0x0, _0x96132a =
							''; _0x515509 = _0x12d4ba['charAt'](_0x373794++); ~_0x515509 && (_0x22863d =
								_0x29f4d2 % 0x4 ? _0x22863d * 0x40 + _0x515509 : _0x515509, _0x29f4d2++ % 0x4
								) ? _0x96132a += String['fromCharCode'](0xff & _0x22863d >> (-0x2 *
								_0x29f4d2 & 0x6)) : 0x0) {
							_0x515509 = _0x1edeb6['indexOf'](_0x515509);
						}
						return _0x96132a;
					});
				}());
				var _0x2e9225 = function(_0xba0239, _0x17449a) {
					var _0x2bb260 = [],
						_0x3420cf = 0x0,
						_0x3cd265, _0x21d6f2 = '',
						_0x394371 = '';
					_0xba0239 = atob(_0xba0239);
					for (var _0x1fcae3 = 0x0, _0x72f952 = _0xba0239['length']; _0x1fcae3 < _0x72f952; _0x1fcae3++) {
						_0x394371 += '%' + ('00' + _0xba0239['charCodeAt'](_0x1fcae3)['toString'](0x10))['slice'](-
							0x2);
					}
					_0xba0239 = decodeURIComponent(_0x394371);
					for (var _0x29f81d = 0x0; _0x29f81d < 0x100; _0x29f81d++) {
						_0x2bb260[_0x29f81d] = _0x29f81d;
					}
					for (_0x29f81d = 0x0; _0x29f81d < 0x100; _0x29f81d++) {
						_0x3420cf = (_0x3420cf + _0x2bb260[_0x29f81d] + _0x17449a['charCodeAt'](_0x29f81d % _0x17449a[
							'length'])) % 0x100;
						_0x3cd265 = _0x2bb260[_0x29f81d];
						_0x2bb260[_0x29f81d] = _0x2bb260[_0x3420cf];
						_0x2bb260[_0x3420cf] = _0x3cd265;
					}
					_0x29f81d = 0x0;
					_0x3420cf = 0x0;
					for (var _0x4f78ab = 0x0; _0x4f78ab < _0xba0239['length']; _0x4f78ab++) {
						_0x29f81d = (_0x29f81d + 0x1) % 0x100;
						_0x3420cf = (_0x3420cf + _0x2bb260[_0x29f81d]) % 0x100;
						_0x3cd265 = _0x2bb260[_0x29f81d];
						_0x2bb260[_0x29f81d] = _0x2bb260[_0x3420cf];
						_0x2bb260[_0x3420cf] = _0x3cd265;
						_0x21d6f2 += String['fromCharCode'](_0xba0239['charCodeAt'](_0x4f78ab) ^ _0x2bb260[(_0x2bb260[
							_0x29f81d] + _0x2bb260[_0x3420cf]) % 0x100]);
					}
					return _0x21d6f2;
				};
				_0x48b3['CXhrHn'] = _0x2e9225;
				_0x48b3['dTTHea'] = {};
				_0x48b3['EbCiQW'] = !![];
			}
			var _0x4bfaeb = _0x48b3['dTTHea'][_0x38efab];
			if (_0x4bfaeb === undefined) {
				if (_0x48b3['WoMAwR'] === undefined) {
					_0x48b3['WoMAwR'] = !![];
				}
				_0x14dde1 = _0x48b3['CXhrHn'](_0x14dde1, _0x17449a);
				_0x48b3['dTTHea'][_0x38efab] = _0x14dde1;
			} else {
				_0x14dde1 = _0x4bfaeb;
			}
			return _0x14dde1;
		};
		if ($[_0x48b3('0', 'VX0D')]()) {
			Object[_0x48b3('1', 'VX0D')](jdCookieNode)[_0x48b3('2', 'uYQ#')](_0x16b42f => {
				cookiesArr[_0x48b3('3', 'hruC')](jdCookieNode[_0x16b42f]);
			});
			if (process[_0x48b3('4', 'AD[1')][_0x48b3('5', 'B)0E')] && process[_0x48b3('6', ')KfX')]['JD_DEBUG'] === _0x48b3(
					'7', 'BPPV')) console[_0x48b3('8', 'ge8e')] = () => {};
		} else {
			let cookiesData = $[_0x48b3('9', '2mB)')]('CookiesJD') || '[]';
			cookiesData = JSON[_0x48b3('a', 'AD[1')](cookiesData);
			cookiesArr = cookiesData['map'](_0x39d1a0 => _0x39d1a0[_0x48b3('b', 'oxNH')]);
			cookiesArr['reverse']();
			cookiesArr['push'](...[$[_0x48b3('c', 'T^mF')](_0x48b3('d', 'AD[1')), $['getdata'](_0x48b3('e', 'AD[1'))]);
			cookiesArr['reverse']();
			cookiesArr = cookiesArr[_0x48b3('f', 'B)0E')](_0x57e01b => !!_0x57e01b);
		}!(async () => {
			var _0x753352 = {
				'WTCDs': function(_0x32cba2, _0x510e38) {
					return _0x32cba2 * _0x510e38;
				},
				'BOGEQ': _0x48b3('10', 'MS9m'),
				'XUByw': function(_0x28c2d5, _0x703992) {
					return _0x28c2d5 < _0x703992;
				},
				'gpBqE': function(_0x115aff, _0x59719b) {
					return _0x115aff(_0x59719b);
				},
				'rETqk': function(_0x51d395, _0x292829) {
					return _0x51d395 + _0x292829;
				},
				'gqncR': function(_0x1cf9f7, _0x547dfd) {
					return _0x1cf9f7 !== _0x547dfd;
				},
				'MPBXh': _0x48b3('11', 'fc19'),
				'smvja': _0x48b3('12', '1]zP'),
				'IyaDi': function(_0xd31d60, _0x245dc6, _0x521ba2) {
					return _0xd31d60(_0x245dc6, _0x521ba2);
				},
				'SnkUv': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
				'rBTxR': function(_0x1c96c7, _0x5b9599) {
					return _0x1c96c7(_0x5b9599);
				},
				'xDKjM': function(_0x3295e6) {
					return _0x3295e6();
				},
				'xnlTl': function(_0x22f9ea, _0x368ac) {
					return _0x22f9ea !== _0x368ac;
				},
				'DsVOG': function(_0x3653f5, _0x4d6903) {
					return _0x3653f5 === _0x4d6903;
				},
				'XYxeO': _0x48b3('13', 'bcA^'),
				'KoIUh': _0x48b3('14', '7E#w'),
				'NODMq': '有点儿收获'
			};
			if (!cookiesArr[0x0]) {
				$['msg']($['name'], _0x48b3('15', '5N86'), _0x48b3('16', 'Jcxt'), {
					'open-url': _0x753352[_0x48b3('17', ')KfX')]
				});
				return;
			}
			for (let _0x53d09a = 0x0; _0x753352[_0x48b3('18', 'jLI4')](_0x53d09a, cookiesArr[
				'length']); _0x53d09a++) {
				if (cookiesArr[_0x53d09a]) {
					cookie = cookiesArr[_0x53d09a];
					originCookie = cookiesArr[_0x53d09a];
					newCookie = '';
					$[_0x48b3('19', '&iwt')] = _0x753352[_0x48b3('1a', 'qg!o')](decodeURIComponent, cookie['match'](
						/pt_pin=(.+?);/) && cookie[_0x48b3('1b', 'tux4')](/pt_pin=(.+?);/)[0x1]);
					$[_0x48b3('1c', 'QLVt')] = _0x753352[_0x48b3('1d', 'VX0D')](_0x53d09a, 0x1);
					$[_0x48b3('1e', 'VX0D')] = !![];
					$['nickName'] = '';
					await checkCookie();
					console[_0x48b3('1f', '5N86')](_0x48b3('20', 'hruC') + $[_0x48b3('21', '2mB)')] + '】' + ($[
						_0x48b3('22', 'MS9m')] || $[_0x48b3('23', ')KfX')]) + '*********\x0a');
					if (!$[_0x48b3('24', 'D3Bh')]) {
						if (_0x753352[_0x48b3('25', 'QLVt')](_0x753352[_0x48b3('26', 'Na8U')], _0x753352[_0x48b3('27',
								'Jcxt')])) {
							var _0x1566bd = _0x753352[_0x48b3('28', '1$TK')](Math['random'](), 0x10) | 0x0,
								_0x160437 = c == 'x' ? _0x1566bd : _0x1566bd & 0x3 | 0x8;
							if (UpperCase) {
								uuid = _0x160437[_0x48b3('29', '5N86')](0x24)[_0x48b3('2a', 'rsJn')]();
							} else {
								uuid = _0x160437['toString'](0x24);
							}
							return uuid;
						} else {
							$[_0x48b3('2b', 'EI#q')]($[_0x48b3('2c', 'jLI4')], _0x48b3('2d', '#N%l'), '京东账号' + $[
									_0x48b3('2e', 'MS9m')] + '\x20' + ($[_0x48b3('2f', 'fPi4')] || $[
								'UserName']) + _0x48b3('30', 'B)0E'), {
									'open-url': _0x753352[_0x48b3('31', '1Y&N')]
								});
							if ($[_0x48b3('32', '1Y&N')]()) {
								await notify['sendNotify']($['name'] + _0x48b3('33', 'gy9O') + $[_0x48b3('34',
									'uYQ#')], _0x48b3('35', 'OQEh') + $[_0x48b3('36', 'qg!o')] + '\x20' + $[
									_0x48b3('37', 'AD[1')] + _0x48b3('38', '&iwt'));
							}
							continue;
						}
					}
					authorList = [_0x753352[_0x48b3('39', 'BYF9')]];
					$[_0x48b3('3a', 'oxNH')] = authorList[_0x753352['IyaDi'](random, 0x0, authorList[_0x48b3('3b',
						'AD[1')])];
					$[_0x48b3('3c', 'bcA^')] = 0x0;
					$[_0x48b3('3d', '1Y&N')] = _0x753352[_0x48b3('3e', 'bcA^')](getUUID, _0x753352[_0x48b3('3f',
						'#N%l')], 0x1);
					$['UUID'] = _0x753352[_0x48b3('40', 'gy9O')](getUUID, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
					await _0x753352[_0x48b3('41', 'qY6Q')](freshgoods);
					if ($[_0x48b3('42', 'cuSp')] > 0x0) {
						message += _0x48b3('43', 'oxNH') + $['index'] + '】' + ($[_0x48b3('44', 'O81o')] || $[
							'UserName']) + _0x48b3('45', ')KfX') + $[_0x48b3('46', 'Kck(')] + _0x48b3('47',
							'qg!o');
					}
				}
			}
			if (_0x753352[_0x48b3('48', 'uYQ#')](message, '')) {
				if ($['isNode']()) {
					if ('RylxZ' !== _0x48b3('49', 'N8cH')) {
						await notify[_0x48b3('4a', '1$TK')]($['name'], message, '', '\x0a');
					} else {
						$['log'](_0x48b3('4b', '1]zP') + data[_0x48b3('4c', 'D3Bh')][_0x48b3('4d', '1$TK')] + '京豆');
						$['bean'] += data['data'][_0x48b3('4e', '#N%l')];
					}
				} else {
					if (_0x753352[_0x48b3('4f', 'Cho]')](_0x753352[_0x48b3('50', 'O81o')], _0x753352[_0x48b3('51',
							'Na8U')])) {
						$[_0x48b3('52', 'gy9O')]('', '❌\x20' + $['name'] + _0x48b3('53', 'BPPV') + e + '!', '');
					} else {
						$[_0x48b3('54', 'MS9m')]($[_0x48b3('55', 'Cho]')], _0x753352['NODMq'], message);
					}
				}
			}
		})()[_0x48b3('56', 'BYF9')](_0x1ed0cf => {
			$[_0x48b3('57', 'gD@k')]('', '❌\x20' + $[_0x48b3('58', ')Vp7')] + ',\x20失败!\x20原因:\x20' + _0x1ed0cf + '!',
			'');
		})[_0x48b3('59', '#N%l')](() => {
			$[_0x48b3('5a', '[xKX')]();
		});
		async function freshgoods() {
			var _0x5b1154 = {
				'hRgiE': '有点儿收获',
				'aAKfy': function(_0x506235, _0x4e1574) {
					return _0x506235(_0x4e1574);
				},
				'dPqqR': _0x48b3('5b', 'QLVt'),
				'XvBEa': function(_0x3de050, _0x384989) {
					return _0x3de050 !== _0x384989;
				},
				'hjCVi': _0x48b3('5c', ')KfX'),
				'meYnF': _0x48b3('5d', 'B)0E'),
				'osQUi': function(_0x210725, _0x533456) {
					return _0x210725(_0x533456);
				},
				'ReqaX': function(_0x33609b, _0x29b5a0) {
					return _0x33609b(_0x29b5a0);
				},
				'IHlEB': function(_0x21daa3, _0x1f188a) {
					return _0x21daa3(_0x1f188a);
				}
			};
			$[_0x48b3('5e', '#N%l')] = ![];
			await _0x5b1154[_0x48b3('5f', '[xKX')](doGetTask, _0x5b1154[_0x48b3('60', '7E#w')]);
			do {
				if (_0x5b1154[_0x48b3('61', 'fc19')](_0x48b3('62', 'D3Bh'), _0x5b1154[_0x48b3('63', 'fc19')])) {
					await doGetTask(_0x5b1154[_0x48b3('64', 'BYF9')]);
				} else {
					$['msg']($[_0x48b3('65', '5KI6')], _0x5b1154[_0x48b3('66', 'qY6Q')], message);
				}
			} while (!$['finish']);
			await _0x5b1154['osQUi'](doGetTask, _0x5b1154[_0x48b3('67', 'rju0')]);
			if ($[_0x48b3('68', 'BPPV')]) {
				times = _0x5b1154[_0x48b3('69', 'Cho]')](parseInt, $['actInfo']['remainPoints'] / $['actInfo'][_0x48b3(
					'6a', 'tux4')]);
				if (times) {
					$[_0x48b3('6b', 'uYQ#')](_0x48b3('6c', 'BPPV') + times);
					for (let _0x224016 = 0x0; _0x224016 < times; _0x224016++) {
						$[_0x48b3('6d', 'oxNH')](_0x48b3('6e', '#N%l'));
						await _0x5b1154[_0x48b3('6f', 'OQEh')](doGetTask, _0x48b3('70', 'bcA^'));
						await $[_0x48b3('71', 'fc19')](0x1388);
					}
				}
			}
		}

		function doPostTask(_0x4de795) {
			var _0x3744ca = {
				'CUdUj': function(_0x3f941f, _0x21958a) {
					return _0x3f941f !== _0x21958a;
				},
				'JvLEG': 'lMTri',
				'YYbdC': function(_0x4082ce, _0x3361f0) {
					return _0x4082ce === _0x3361f0;
				},
				'WDrZt': _0x48b3('72', 'rju0'),
				'RfZkT': function(_0x41ef75, _0x800fe4) {
					return _0x41ef75 === _0x800fe4;
				},
				'aBohl': _0x48b3('73', ')Vp7'),
				'VamSM': _0x48b3('74', '5N86'),
				'dkwZi': function(_0x3da959, _0x6cdf4c) {
					return _0x3da959 === _0x6cdf4c;
				},
				'oWBZH': _0x48b3('75', 'D3Bh'),
				'gQxxn': function(_0x4dedc8, _0x504579) {
					return _0x4dedc8 === _0x504579;
				},
				'LsEeu': 'iyrfw',
				'NxJZW': '京东没有返回数据',
				'fBfIM': function(_0x3f5806) {
					return _0x3f5806();
				},
				'LcukT': _0x48b3('76', 'Jcxt'),
				'mjbzo': _0x48b3('77', 'qY6Q'),
				'cTAwd': _0x48b3('78', 'qg!o'),
				'RKhii': 'application/x-www-form-urlencoded',
				'xjZqv': 'keep-alive',
				'zJfsv': 'https://h5.m.jd.com/babelDiy/Zeus/42CC2AdvzUnXheP1CmTXrm7vHYSp/index.html?code=ddf17a4eb05b4773ad392f76c2b28a90',
				'cywqa': _0x48b3('79', '1]zP')
			};
			let _0x1a3a75 = {
				'url': 'https://jdjoy.jd.com/module/freshgoods/doTask',
				'headers': {
					'Host': _0x3744ca[_0x48b3('7a', 'BYF9')],
					'Content-Type': _0x3744ca[_0x48b3('7b', 'gy9O')],
					'Origin': _0x48b3('7c', 'B)0E'),
					'Accept-Encoding': _0x48b3('7d', '#Fxz'),
					'Cookie': cookie,
					'Connection': _0x3744ca[_0x48b3('7e', 'O81o')],
					'Accept': _0x48b3('7f', 'hruC'),
					'User-Agent': _0x48b3('80', 'cuSp') + $['UUID'] + ';network/wifi;ADID/' + $[_0x48b3('81', 'B)0E')] +
						';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
					'Referer': _0x3744ca[_0x48b3('82', '7E#w')],
					'Accept-Language': _0x3744ca[_0x48b3('83', 'gD@k')]
				},
				'body': _0x4de795
			};
			return new Promise(_0x47c1d9 => {
				var _0x309232 = {
					'JlSqx': _0x3744ca['LcukT'],
					'kgogz': _0x3744ca[_0x48b3('84', '5N86')],
					'HaHJI': _0x48b3('85', 'bcA^')
				};
				$['post'](_0x1a3a75, (_0x5aa909, _0x5e5a5a, _0x2bce3c) => {
					try {
						if (_0x5aa909) {
							if (_0x3744ca[_0x48b3('86', 'AD[1')](_0x3744ca[_0x48b3('87', ')KfX')], _0x48b3(
									'88', 'bcA^'))) {
								$[_0x48b3('89', 'qg!o')] = _0x2bce3c[_0x48b3('8a', '1Y&N')]['userInfo'][
									_0x48b3('8b', '[lAQ')
								][_0x48b3('8c', 'tux4')];
							} else {
								$[_0x48b3('8d', '#N%l')](_0x5aa909);
							}
						} else {
							if (_0x2bce3c) {
								if (_0x3744ca[_0x48b3('8e', 'VX0D')](_0x3744ca[_0x48b3('8f', '7E#w')],
										_0x3744ca[_0x48b3('90', 'Jcxt')])) {
									_0x2bce3c = JSON[_0x48b3('91', 'VX0D')](_0x2bce3c);
									if (_0x2bce3c['success']) {
										if (_0x3744ca['RfZkT']('eMQaA', _0x3744ca[_0x48b3('92', 'vfqE')])) {
											$['log'](_0x3744ca[_0x48b3('93', 'rsJn')]);
											if (_0x2bce3c[_0x48b3('8a', '1Y&N')][_0x48b3('94', 'vfqE')]) {
												if (_0x3744ca[_0x48b3('95', '&iwt')](_0x3744ca[_0x48b3('96',
														')KfX')], _0x3744ca['oWBZH'])) {
													$[_0x48b3('97', 'BYF9')](_0x48b3('98', '5N86') +
														_0x2bce3c['data'][_0x48b3('99', 'AD[1')] + '京豆');
													$[_0x48b3('9a', '5N86')] += _0x2bce3c[_0x48b3('9b',
														'cuSp')]['rewardBeans'];
												} else {
													$[_0x48b3('9c', 'T^mF')](_0x48b3('9d', 'OQEh'));
												}
											}
											if (_0x2bce3c[_0x48b3('9e', '#N%l')]['rewardPoints']) {
												$[_0x48b3('9f', 'D3Bh')]('\x20\x20\x20获得' + _0x2bce3c[_0x48b3(
													'a0', '&iwt')][_0x48b3('a1', 'Na8U')] + '积分');
											}
										} else {
											let _0x526ec3 = $[_0x48b3('a2', 'Zu#S')](_0x48b3('a3', '&iwt')) ||
												'[]';
											_0x526ec3 = JSON['parse'](_0x526ec3);
											cookiesArr = _0x526ec3[_0x48b3('a4', 'Zu#S')](_0x2cccc0 =>
												_0x2cccc0[_0x48b3('a5', 'gD@k')]);
											cookiesArr[_0x48b3('a6', 'bcA^')]();
											cookiesArr[_0x48b3('a7', 'ge8e')](...[$['getdata'](_0x309232[
												_0x48b3('a8', '2mB)')]), $[_0x48b3('a9', 'BPPV')](
												_0x309232[_0x48b3('aa', 'gD@k')])]);
											cookiesArr[_0x48b3('ab', 'oxNH')]();
											cookiesArr = cookiesArr[_0x48b3('ac', 'BPPV')](_0x6a6fd1 => !!
												_0x6a6fd1);
										}
									} else {
										$[_0x48b3('ad', ')Vp7')](_0x2bce3c['errorMessage']);
									}
								} else {
									$[_0x48b3('6d', 'oxNH')]('京东返回了空数据');
								}
							} else {
								if (_0x3744ca[_0x48b3('ae', 'BYF9')](_0x3744ca[_0x48b3('af', 'N8cH')],
										_0x3744ca[_0x48b3('b0', 'rju0')])) {
									$[_0x48b3('b1', 'cuSp')](_0x3744ca[_0x48b3('b2', '&iwt')]);
								} else {
									Object[_0x48b3('b3', '2mB)')](jdCookieNode)[_0x48b3('b4', '1Y&N')](
										_0x18478e => {
											cookiesArr[_0x48b3('b5', 'T^mF')](jdCookieNode[_0x18478e]);
										});
									if (process['env'][_0x48b3('b6', 'cuSp')] && process[_0x48b3('b7',
											'ge8e')][_0x48b3('b8', ')Vp7')] === _0x309232[_0x48b3('b9',
											'tux4')]) console['log'] = () => {};
								}
							}
						}
					} catch (_0x2d56a0) {
						$['log'](_0x2d56a0);
					} finally {
						_0x3744ca[_0x48b3('ba', 'Jcxt')](_0x47c1d9);
					}
				});
			});
		}

		function doGetTask(_0x211460) {
			var _0x4e53e1 = {
				'BByOf': function(_0x2dd0ae, _0x22ef30) {
					return _0x2dd0ae !== _0x22ef30;
				},
				'hFbiF': 'kBGqX',
				'DtFsE': _0x48b3('bb', 'hruC'),
				'cNGfi': _0x48b3('bc', '&iwt'),
				'ArjQf': 'zdYov',
				'pVhQM': 'JVcXr',
				'RLPdI': function(_0x1ed8e2, _0x1b4745) {
					return _0x1ed8e2 * _0x1b4745;
				},
				'IYXaA': function(_0x19b2fb, _0x2aef7c) {
					return _0x19b2fb(_0x2aef7c);
				},
				'fcUiU': function(_0x46bb79, _0x8be3f0) {
					return _0x46bb79 === _0x8be3f0;
				},
				'kYmwq': _0x48b3('bd', 'QLVt'),
				'PWZqd': _0x48b3('be', 'rsJn'),
				'NUbeb': _0x48b3('bf', 'vfqE'),
				'KWlaL': _0x48b3('c0', 'gD@k'),
				'YKkwG': 'HuxED',
				'mamoc': _0x48b3('c1', 'AD[1'),
				'slUQb': _0x48b3('c2', 'MS9m'),
				'vZxuU': function(_0x36247c, _0x2b0fe1) {
					return _0x36247c + _0x2b0fe1;
				},
				'NxNZy': function(_0x41f070, _0x4c1932) {
					return _0x41f070 * _0x4c1932;
				},
				'UDtae': function(_0x13a438, _0x5f5545) {
					return _0x13a438 - _0x5f5545;
				},
				'FqglF': _0x48b3('c3', 'Zu#S'),
				'rnPXm': _0x48b3('c4', 'uYQ#'),
				'mxtzb': _0x48b3('c5', 'N8cH'),
				'hlxYD': _0x48b3('c6', 'oxNH'),
				'vBcjJ': '*/*',
				'KsWqu': _0x48b3('c7', 'qY6Q')
			};
			let _0x4cae13 = {
				'url': _0x48b3('c8', '1]zP') + _0x211460 + _0x48b3('c9', '1Y&N'),
				'headers': {
					'Host': _0x4e53e1[_0x48b3('ca', 'Kck(')],
					'Origin': _0x48b3('cb', 'Jcxt'),
					'Cookie': cookie,
					'Connection': _0x4e53e1[_0x48b3('cc', 'vfqE')],
					'Accept': _0x4e53e1['vBcjJ'],
					'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $[_0x48b3('cd', 'gD@k')] + _0x48b3('ce', 'rju0') + $[
						_0x48b3('cf', '2mB)')] + _0x48b3('d0', 'vfqE'),
					'Accept-Language': 'zh-cn',
					'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/42CC2AdvzUnXheP1CmTXrm7vHYSp/index.html?code=ddf17a4eb05b4773ad392f76c2b28a90',
					'Accept-Encoding': _0x4e53e1[_0x48b3('d1', 'T^mF')]
				}
			};
			return new Promise(_0x3eb18a => {
				var _0x25a060 = {
					'vGTAb': _0x4e53e1['PWZqd'],
					'PjRji': function(_0x6689db, _0xf9f094) {
						return _0x4e53e1['vZxuU'](_0x6689db, _0xf9f094);
					},
					'TqomP': function(_0x59af4d, _0x3a0fb0) {
						return _0x4e53e1['NxNZy'](_0x59af4d, _0x3a0fb0);
					},
					'RcNmz': function(_0x2da45a, _0x588ad5) {
						return _0x4e53e1[_0x48b3('d2', '7E#w')](_0x2da45a, _0x588ad5);
					}
				};
				if (_0x4e53e1[_0x48b3('d3', 'BPPV')](_0x4e53e1[_0x48b3('d4', ')KfX')], _0x4e53e1[_0x48b3('d5',
						'rju0')])) {
					$[_0x48b3('d6', '2mB)')](_0x25a060[_0x48b3('d7', 'EI#q')]);
					$['finish'] = !![];
				} else {
					$[_0x48b3('d8', 'hruC')](_0x4cae13, async (_0x51c3ba, _0x2f788c, _0x3bda75) => {
						if (_0x4e53e1['BByOf'](_0x4e53e1[_0x48b3('d9', 'T^mF')], 'wXdqz')) {
							try {
								if (_0x51c3ba) {
									console[_0x48b3('da', 'OQEh')](_0x51c3ba);
								} else {
									if (_0x3bda75) {
										_0x3bda75 = JSON[_0x48b3('db', '2mB)')](_0x3bda75);
										if (_0x3bda75[_0x48b3('dc', ')KfX')]) {
											switch (_0x211460) {
												case _0x4e53e1['DtFsE']:
													$['log'](_0x48b3('dd', 'B)0E') + _0x3bda75[_0x48b3(
														'de', 'OQEh')]['remainPoints']);
													$[_0x48b3('df', 'QLVt')](
													'--------------------------');
													$['actInfo'] = _0x3bda75[_0x48b3('e0', 'ge8e')];
													break;
												case _0x4e53e1[_0x48b3('e1', ')KfX')]:
													if (_0x3bda75[_0x48b3('e2', 'uYQ#')]) {
														if (_0x3bda75[_0x48b3('e3', 'BYF9')][_0x48b3('e4',
																'7E#w')]) {
															if (_0x4e53e1[_0x48b3('e5', '2mB)')](
																	_0x4e53e1['ArjQf'], _0x4e53e1[_0x48b3(
																		'e6', 'Cho]')])) {
																done = 0x0;
																for (const _0x5d6ec8 of _0x3bda75[_0x48b3(
																		'8a', '1Y&N')][_0x48b3('e7',
																		'VX0D')]) {
																	switch (_0x5d6ec8[_0x48b3('e8',
																		'QLVt')]) {
																		case 0x17:
																		case 0x2:
																			break;
																		default:
																			if (!_0x5d6ec8['hasFinish']) {
																				if (_0x5d6ec8[_0x48b3(
																						'e9', '1]zP')]) {
																					$[_0x48b3('ea',
																						'1]zP')](
																						_0x5d6ec8[
																							_0x48b3(
																								'eb',
																								'[xKX'
																								)][
																							'itemName'
																						]);
																					await $[_0x48b3('ec',
																						'qY6Q')](
																						_0x4e53e1[
																							_0x48b3(
																								'ed',
																								'rju0'
																								)](
																							_0x5d6ec8[
																								'viewTime'
																								],
																							0x3e8));
																					await _0x4e53e1[
																						_0x48b3('ee',
																							'5N86')](
																						doPostTask,
																						'code=ddf17a4eb05b4773ad392f76c2b28a90&taskType=' +
																						_0x5d6ec8[
																							'taskType'
																							] +
																						_0x48b3('ef',
																							'jLI4') +
																						_0x5d6ec8[
																							_0x48b3(
																								'f0',
																								'[xKX'
																								)] +
																						'&itemId=' + (
																							_0x5d6ec8[
																								_0x48b3(
																									'f1',
																									'2mB)'
																									)]
																							[_0x48b3(
																								'f2',
																								'qg!o'
																								)] ?
																							_0x5d6ec8[
																								_0x48b3(
																									'f3',
																									'Na8U'
																									)]
																							[_0x48b3(
																								'f4',
																								'Cho]'
																								)] :
																							''));
																				}
																			} else {
																				if (_0x4e53e1[_0x48b3(
																						'f5', 'vfqE')](
																						_0x4e53e1[
																						'kYmwq'],
																						_0x4e53e1['kYmwq']
																						)) {
																					done += 0x1;
																					if (done === 0x3) {
																						$['log'](
																							_0x4e53e1[
																								'PWZqd'
																								]);
																						$['finish'] = !
																					![];
																					}
																				} else {
																					uuid = v['toString'](
																						0x24);
																				}
																			}
																			break;
																	}
																}
															} else {
																$['log'](_0x48b3('f6', '1Y&N'));
															}
														}
													}
													break;
												case _0x4e53e1[_0x48b3('f7', 'BYF9')]:
													switch (_0x3bda75['data'][_0x48b3('f8', 'BPPV')]) {
														case 0x1:
															$[_0x48b3('f9', 'gy9O')] += _0x3bda75[_0x48b3(
																'fa', 'MS9m')][_0x48b3('fb', ')KfX')];
															break;
														default:
															break;
													}
													$['log'](_0x48b3('fc', 'uYQ#') + _0x3bda75[_0x48b3(
														'fd', 'fc19')][_0x48b3('fe', '5N86')]);
													break;
												default:
													console[_0x48b3('ff', 'hruC')](_0x3bda75);
													break;
											}
										} else {
											$[_0x48b3('100', 'vfqE')](_0x3bda75[_0x48b3('101', '1Y&N')]);
										}
									} else {
										$[_0x48b3('102', '[lAQ')](_0x4e53e1[_0x48b3('103', 'uYQ#')]);
									}
								}
							} catch (_0x685c0f) {
								if (_0x48b3('104', 'qY6Q') !== _0x4e53e1[_0x48b3('105', 'ge8e')]) {
									$[_0x48b3('106', 'gy9O')](_0x51c3ba);
								} else {
									console[_0x48b3('97', 'BYF9')](_0x685c0f);
								}
							} finally {
								if (_0x4e53e1[_0x48b3('107', 'QLVt')] === _0x4e53e1[_0x48b3('108',
										'Zu#S')]) {
									uuid = v[_0x48b3('109', 'AD[1')](0x24)[_0x48b3('10a', 'BPPV')]();
								} else {
									_0x3eb18a();
								}
							}
						} else {
							return _0x25a060[_0x48b3('10b', '#Fxz')](Math['floor'](_0x25a060['TqomP'](
									Math[_0x48b3('10c', 'Zu#S')](), _0x25a060['RcNmz'](max, min))),
								min);
						}
					});
				}
			});
		}

		function random(_0x5d7957, _0xcd57b7) {
			var _0x1fe45c = {
				'SiZUx': function(_0x5a4f0f, _0x2f8ab7) {
					return _0x5a4f0f + _0x2f8ab7;
				},
				'BJjJv': function(_0x2f880a, _0x38075f) {
					return _0x2f880a - _0x38075f;
				}
			};
			return _0x1fe45c['SiZUx'](Math['floor'](Math[_0x48b3('10d', 'QLVt')]() * _0x1fe45c[_0x48b3('10e', '1Y&N')](
				_0xcd57b7, _0x5d7957)), _0x5d7957);
		}

		function getUUID(_0x3891b4 = _0x48b3('10f', '[xKX'), _0x3cd7b0 = 0x0) {
			var _0x2b28a8 = {
				'FZShs': 'hyUjc',
				'GZOLV': function(_0x10d414, _0x5b919a) {
					return _0x10d414 | _0x5b919a;
				},
				'shwpq': function(_0x241ec9, _0x3c8ba) {
					return _0x241ec9 * _0x3c8ba;
				},
				'sRFSp': function(_0x277946, _0x26f122) {
					return _0x277946 & _0x26f122;
				}
			};
			return _0x3891b4['replace'](/[xy]/g, function(_0x1a22a6) {
				if (_0x2b28a8['FZShs'] !== 'QqwJT') {
					var _0x19bf3c = _0x2b28a8[_0x48b3('110', 'Cho]')](_0x2b28a8['shwpq'](Math['random'](), 0x10),
						0x0),
						_0x49a909 = _0x1a22a6 == 'x' ? _0x19bf3c : _0x2b28a8[_0x48b3('111', 'QLVt')](_0x19bf3c, 0x3) |
						0x8;
					if (_0x3cd7b0) {
						uuid = _0x49a909[_0x48b3('112', '1$TK')](0x24)[_0x48b3('10a', 'BPPV')]();
					} else {
						uuid = _0x49a909[_0x48b3('113', 'B)0E')](0x24);
					}
					return uuid;
				} else {
					resolve();
				}
			});
		}

		function checkCookie() {
			var _0x37e40d = {
				'GWmrK': 'NJLYz',
				'Txslu': _0x48b3('114', 'Na8U'),
				'lAEbD': 'BRxKr',
				'IrGcg': 'MNYeo',
				'ColLD': _0x48b3('115', '#N%l'),
				'AjzRX': '京东返回了空数据',
				'TWBLz': function(_0x391627, _0x11faee) {
					return _0x391627 === _0x11faee;
				},
				'LBfBX': 'auazH',
				'gWIOp': _0x48b3('116', 'BPPV'),
				'nyyTA': 'me-api.jd.com',
				'saaCI': _0x48b3('117', '#Fxz'),
				'SNeED': _0x48b3('118', 'fc19'),
				'MPFKk': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&'
			};
			const _0x1ea1ad = {
				'url': _0x37e40d[_0x48b3('119', 'Kck(')],
				'headers': {
					'Host': _0x37e40d[_0x48b3('11a', 'EI#q')],
					'Accept': '*/*',
					'Connection': _0x37e40d[_0x48b3('11b', 'Na8U')],
					'Cookie': cookie,
					'User-Agent': _0x48b3('11c', 'AD[1'),
					'Accept-Language': _0x37e40d[_0x48b3('11d', 'OQEh')],
					'Referer': _0x37e40d[_0x48b3('11e', '5KI6')],
					'Accept-Encoding': _0x48b3('11f', '2mB)')
				}
			};
			return new Promise(_0x38e827 => {
				var _0x1a601f = {
					'DsJGK': _0x48b3('120', 'uYQ#'),
					'xASSu': function(_0x5f1947, _0x5c166c) {
						return _0x5f1947 === _0x5c166c;
					},
					'nPGLp': _0x48b3('121', 'OQEh'),
					'xleUY': function(_0x56c3a4, _0x541d04) {
						return _0x56c3a4 === _0x541d04;
					},
					'PpQGR': 'yNJzs',
					'cTPuh': _0x37e40d[_0x48b3('122', '[xKX')],
					'QkZam': _0x37e40d['Txslu'],
					'JsROd': function(_0x7437d6, _0x5391a1) {
						return _0x7437d6 === _0x5391a1;
					},
					'TYQcf': _0x37e40d[_0x48b3('123', 'Kck(')],
					'IUaMp': _0x37e40d[_0x48b3('124', '1$TK')],
					'eDadi': _0x37e40d[_0x48b3('125', '&iwt')],
					'jNyhH': _0x37e40d[_0x48b3('126', '2mB)')]
				};
				if (_0x37e40d[_0x48b3('127', 'jj)i')](_0x37e40d['LBfBX'], _0x48b3('128', '[xKX'))) {
					cookiesArr['push'](jdCookieNode[item]);
				} else {
					$['get'](_0x1ea1ad, (_0x10dfb0, _0x1d5454, _0x2ee6ce) => {
						var _0x314257 = {
							'waYKo': function(_0x44166c, _0x4e47ae) {
								return _0x1a601f[_0x48b3('129', 'rsJn')](_0x44166c, _0x4e47ae);
							},
							'jgJNt': _0x1a601f['nPGLp']
						};
						if (_0x1a601f['xleUY'](_0x1a601f[_0x48b3('12a', 'Na8U')], 'HXwsC')) {
							$[_0x48b3('12b', 'jj)i')](_0x1a601f[_0x48b3('12c', 'EI#q')]);
							if (_0x2ee6ce[_0x48b3('12d', 'tux4')]['rewardBeans']) {
								$[_0x48b3('b1', 'cuSp')]('\x20\x20\x20获得' + _0x2ee6ce[_0x48b3('12e', 'oxNH')][
									'rewardBeans'
								] + '京豆');
								$['bean'] += _0x2ee6ce[_0x48b3('12f', 'bcA^')]['rewardBeans'];
							}
							if (_0x2ee6ce['data']['rewardPoints']) {
								$[_0x48b3('130', 'jLI4')](_0x48b3('131', 'AD[1') + _0x2ee6ce[_0x48b3('9e',
									'#N%l')]['rewardPoints'] + '积分');
							}
						} else {
							try {
								if (_0x10dfb0) {
									$[_0x48b3('132', 'OQEh')](_0x10dfb0);
								} else {
									if (_0x1a601f[_0x48b3('133', '[xKX')] !== _0x1a601f[_0x48b3('134',
											'2mB)')]) {
										if (_0x2ee6ce) {
											_0x2ee6ce = JSON[_0x48b3('135', 'oxNH')](_0x2ee6ce);
											if (_0x1a601f[_0x48b3('136', '7E#w')](_0x2ee6ce[_0x48b3('137',
													'oxNH')], _0x1a601f[_0x48b3('138', 'cuSp')])) {
												if (_0x1a601f[_0x48b3('139', 'Cho]')] !== _0x1a601f[_0x48b3(
														'13a', ')Vp7')]) {
													_0x2ee6ce = JSON[_0x48b3('13b', 'jj)i')](_0x2ee6ce);
													if (_0x314257['waYKo'](_0x2ee6ce[_0x48b3('13c', 'hruC')],
															_0x314257[_0x48b3('13d', 'uYQ#')])) {
														$['isLogin'] = ![];
														return;
													}
													if (_0x314257[_0x48b3('13e', 'oxNH')](_0x2ee6ce[_0x48b3(
															'13f', 'rju0')], '0') && _0x2ee6ce[_0x48b3('140',
															')Vp7')]['hasOwnProperty'](_0x48b3('141',
														'Cho]'))) {
														$['nickName'] = _0x2ee6ce['data']['userInfo'][_0x48b3(
															'142', 'AD[1')][_0x48b3('143', 'Jcxt')];
													}
												} else {
													$[_0x48b3('144', 'T^mF')] = ![];
													return;
												}
											}
											if (_0x2ee6ce[_0x48b3('145', 'bcA^')] === '0' && _0x2ee6ce[
													_0x48b3('e3', 'BYF9')][_0x48b3('146', 'rsJn')](
												'userInfo')) {
												$[_0x48b3('147', 'T^mF')] = _0x2ee6ce[_0x48b3('148', 'O81o')][
													_0x48b3('149', ')Vp7')
												][_0x48b3('14a', 'D3Bh')][_0x48b3('14b', 'Cho]')];
											}
										} else {
											if (_0x1a601f['IUaMp'] !== _0x1a601f[_0x48b3('14c', '#Fxz')]) {
												$['log'](_0x1a601f[_0x48b3('14d', 'jj)i')]);
											} else {
												$[_0x48b3('102', '[lAQ')](_0x2ee6ce['errorMessage']);
											}
										}
									} else {
										$[_0x48b3('14e', '7E#w')](e);
									}
								}
							} catch (_0x2d7f04) {
								$[_0x48b3('106', 'gy9O')](_0x2d7f04);
							} finally {
								_0x38e827();
							}
						}
					});
				}
			});
		};
		_0xodI = 'jsjiami.com.v6';
		// prettier-ignore
		! function(n) {
			"use strict";

			function t(n, t) {
				var r = (65535 & n) + (65535 & t);
				return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
			}

			function r(n, t) {
				return n << t | n >>> 32 - t
			}

			function e(n, e, o, u, c, f) {
				return t(r(t(t(e, n), t(u, f)), c), o)
			}

			function o(n, t, r, o, u, c, f) {
				return e(t & r | ~t & o, n, t, u, c, f)
			}

			function u(n, t, r, o, u, c, f) {
				return e(t & o | r & ~o, n, t, u, c, f)
			}

			function c(n, t, r, o, u, c, f) {
				return e(t ^ r ^ o, n, t, u, c, f)
			}

			function f(n, t, r, o, u, c, f) {
				return e(r ^ (t | ~o), n, t, u, c, f)
			}

			function i(n, r) {
				n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
				var e, i, a, d, h, l = 1732584193,
					g = -271733879,
					v = -1732584194,
					m = 271733878;
				for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g =
								c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(
																	l, g, v, m, n[e], 7, -
																	680876936), g, v, n[e + 1],
																12, -389564586), l, g, n[e + 2],
															17, 606105819), m, l, n[e + 3], 22, -
														1044525330), v = o(v, m = o(m, l = o(l, g,
															v, m, n[e + 4], 7, -176418897), g,
														v, n[e + 5], 12, 1200080426), l, g, n[
														e + 6], 17, -1473231341), m, l, n[e + 7],
													22, -45705983), v = o(v, m = o(m, l = o(l, g,
														v, m, n[e + 8], 7, 1770035416), g, v,
													n[e + 9], 12, -1958414417), l, g, n[e +
													10], 17, -42063), m, l, n[e + 11], 22, -
												1990404162), v = o(v, m = o(m, l = o(l, g, v, m,
														n[e + 12], 7, 1804603682), g, v, n[e +
													13], 12, -40341101), l, g, n[e + 14], 17, -
												1502002290), m, l, n[e + 15], 22, 1236535329), v = u(
												v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -
													165796510), g, v, n[e + 6], 9, -1069501632), l, g,
												n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302),
											v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691),
													g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -
												660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m =
											u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e +
												14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m,
										l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m,
											n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l,
										g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v =
									c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11,
										-2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -
									35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060),
									g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[
									e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13],
									4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -
								722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[
									e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16,
								530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e],
								6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m,
							l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6,
							1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e +
							1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[
							e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v =
						f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[
							e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d),
					m = t(m, h);
				return [l, g, v, m]
			}

			function a(n) {
				var t, r = "",
					e = 32 * n.length;
				for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
				return r
			}

			function d(n) {
				var t, r = [];
				for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
				var e = 8 * n.length;
				for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
				return r
			}

			function h(n) {
				return a(i(d(n), 8 * n.length))
			}

			function l(n, t) {
				var r, e, o = d(n),
					u = [],
					c = [];
				for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] =
					909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
				return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
			}

			function g(n) {
				var t, r, e = "";
				for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) +
					"0123456789abcdef".charAt(15 & t);
				return e
			}

			function v(n) {
				return unescape(encodeURIComponent(n))
			}

			function m(n) {
				return h(v(n))
			}

			function p(n) {
				return g(m(n))
			}

			function s(n, t) {
				return l(v(n), v(t))
			}

			function C(n, t) {
				return g(s(n, t))
			}

			function A(n, t, r) {
				return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n)
			}
			$.md5 = A
		}(this);

		function Env(t, e) {
			"undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
			class s {
				constructor(t) {
					this.env = t
				}
				send(t, e = "GET") {
					t = "string" == typeof t ? {
						url: t
					} : t;
					let s = this.get;
					return "POST" === e && (s = this.post), new Promise((e, i) => {
						s.call(this, t, (t, s, r) => {
							t ? i(t) : e(s)
						})
					})
				}
				get(t) {
					return this.send.call(this.env, t)
				}
				post(t) {
					return this.send.call(this.env, t, "POST")
				}
			}
			return new class {
				constructor(t, e) {
					this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this
						.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this
						.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
				}
				isNode() {
					return "undefined" != typeof module && !!module.exports
				}
				isQuanX() {
					return "undefined" != typeof $task
				}
				isSurge() {
					return "undefined" != typeof $httpClient && "undefined" == typeof $loon
				}
				isLoon() {
					return "undefined" != typeof $loon
				}
				toObj(t, e = null) {
					try {
						return JSON.parse(t)
					} catch {
						return e
					}
				}
				toStr(t, e = null) {
					try {
						return JSON.stringify(t)
					} catch {
						return e
					}
				}
				getjson(t, e) {
					let s = e;
					const i = this.getdata(t);
					if (i) try {
						s = JSON.parse(this.getdata(t))
					} catch {}
					return s
				}
				setjson(t, e) {
					try {
						return this.setdata(JSON.stringify(t), e)
					} catch {
						return !1
					}
				}
				getScript(t) {
					return new Promise(e => {
						this.get({
							url: t
						}, (t, s, i) => e(i))
					})
				}
				runScript(t, e) {
					return new Promise(s => {
						let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
						i = i ? i.replace(/\n/g, "").trim() : i;
						let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
						r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
						const [o, h] = i.split("@"), n = {
							url: `http://${h}/v1/scripting/evaluate`,
							body: {
								script_text: t,
								mock_type: "cron",
								timeout: r
							},
							headers: {
								"X-Key": o,
								Accept: "*/*"
							}
						};
						this.post(n, (t, e, i) => s(i))
					}).catch(t => this.logErr(t))
				}
				loaddata() {
					if (!this.isNode()) return {}; {
						this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require(
							"path");
						const t = this.path.resolve(this.dataFile),
							e = this.path.resolve(process.cwd(), this.dataFile),
							s = this.fs.existsSync(t),
							i = !s && this.fs.existsSync(e);
						if (!s && !i) return {}; {
							const i = s ? t : e;
							try {
								return JSON.parse(this.fs.readFileSync(i))
							} catch (t) {
								return {}
							}
						}
					}
				}
				writedata() {
					if (this.isNode()) {
						this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require(
							"path");
						const t = this.path.resolve(this.dataFile),
							e = this.path.resolve(process.cwd(), this.dataFile),
							s = this.fs.existsSync(t),
							i = !s && this.fs.existsSync(e),
							r = JSON.stringify(this.data);
						s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t,
							r)
					}
				}
				lodash_get(t, e, s) {
					const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
					let r = t;
					for (const t of i)
						if (r = Object(r)[t], void 0 === r) return s;
					return r
				}
				lodash_set(t, e, s) {
					return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e
						.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i +
							1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
				}
				getdata(t) {
					let e = this.getval(t);
					if (/^@/.test(t)) {
						const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
						if (r) try {
							const t = JSON.parse(r);
							e = t ? this.lodash_get(t, i, "") : e
						} catch (t) {
							e = ""
						}
					}
					return e
				}
				setdata(t, e) {
					let s = !1;
					if (/^@/.test(e)) {
						const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null :
							o || "{}" : "{}";
						try {
							const e = JSON.parse(h);
							this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
						} catch (e) {
							const o = {};
							this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
						}
					} else s = this.setval(t, e);
					return s
				}
				getval(t) {
					return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs
						.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data &&
						this.data[t] || null
				}
				setval(t, e) {
					return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs
						.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this
							.writedata(), !0) : this.data && this.data[e] || null
				}
				initGotEnv(t) {
					this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough :
						require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
						t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t
							.cookieJar && (t.cookieJar = this.ckjar))
				}
				get(t, e = (() => {})) {
					t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this
					.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t
						.headers || {}, Object.assign(t.headers, {
							"X-Surge-Skip-Scripting": !1
						})), $httpClient.get(t, (t, s, i) => {
						!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
					})) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
						hints: !1
					})), $task.fetch(t).then(t => {
						const {
							statusCode: s,
							statusCode: i,
							headers: r,
							body: o
						} = t;
						e(null, {
							status: s,
							statusCode: i,
							headers: r,
							body: o
						}, o)
					}, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
						try {
							if (t.headers["set-cookie"]) {
								const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse)
								.toString();
								s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
							}
						} catch (t) {
							this.logErr(t)
						}
					}).then(t => {
						const {
							statusCode: s,
							statusCode: i,
							headers: r,
							body: o
						} = t;
						e(null, {
							status: s,
							statusCode: i,
							headers: r,
							body: o
						}, o)
					}, t => {
						const {
							message: s,
							response: i
						} = t;
						e(s, i, i && i.body)
					}))
				}
				post(t, e = (() => {})) {
					if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] =
							"application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"],
						this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t
						.headers || {}, Object.assign(t.headers, {
							"X-Surge-Skip-Scripting": !1
						})), $httpClient.post(t, (t, s, i) => {
						!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
					});
					else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object
						.assign(t.opts, {
							hints: !1
						})), $task.fetch(t).then(t => {
						const {
							statusCode: s,
							statusCode: i,
							headers: r,
							body: o
						} = t;
						e(null, {
							status: s,
							statusCode: i,
							headers: r,
							body: o
						}, o)
					}, t => e(t));
					else if (this.isNode()) {
						this.initGotEnv(t);
						const {
							url: s,
							...i
						} = t;
						this.got.post(s, i).then(t => {
							const {
								statusCode: s,
								statusCode: i,
								headers: r,
								body: o
							} = t;
							e(null, {
								status: s,
								statusCode: i,
								headers: r,
								body: o
							}, o)
						}, t => {
							const {
								message: s,
								response: i
							} = t;
							e(s, i, i && i.body)
						})
					}
				}
				time(t, e = null) {
					const s = e ? new Date(e) : new Date;
					let i = {
						"M+": s.getMonth() + 1,
						"d+": s.getDate(),
						"H+": s.getHours(),
						"m+": s.getMinutes(),
						"s+": s.getSeconds(),
						"q+": Math.floor((s.getMonth() + 3) / 3),
						S: s.getMilliseconds()
					};
					/(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
					for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1
						.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
					return t
				}
				msg(e = t, s = "", i = "", r) {
					const o = t => {
						if (!t) return t;
						if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
							"open-url": t
						} : this.isSurge() ? {
							url: t
						} : void 0;
						if ("object" == typeof t) {
							if (this.isLoon()) {
								let e = t.openUrl || t.url || t["open-url"],
									s = t.mediaUrl || t["media-url"];
								return {
									openUrl: e,
									mediaUrl: s
								}
							}
							if (this.isQuanX()) {
								let e = t["open-url"] || t.url || t.openUrl,
									s = t["media-url"] || t.mediaUrl;
								return {
									"open-url": e,
									"media-url": s
								}
							}
							if (this.isSurge()) {
								let e = t.url || t.openUrl || t["open-url"];
								return {
									url: e
								}
							}
						}
					};
					if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this
							.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
						let t = ["", "==============📣系统通知📣=============="];
						t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs
							.concat(t)
					}
				}
				log(...t) {
					t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
				}
				logErr(t, e) {
					const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
					s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
				}
				wait(t) {
					return new Promise(e => setTimeout(e, t))
				}
				done(t = {}) {
					const e = (new Date).getTime(),
						s = (e - this.startTime) / 1e3;
					this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() ||
						this.isLoon()) && $done(t)
				}
			}(t, e)
		}
