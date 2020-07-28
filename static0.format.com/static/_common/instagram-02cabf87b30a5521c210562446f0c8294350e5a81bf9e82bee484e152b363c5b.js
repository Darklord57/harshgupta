// (function () {
// 	(function () {
// 		var n, e, t;
// 		return n = this.jQuery, e = function () {
// 			function e(n, e) {
// 				if (this.accessToken = null != n ? n : null, this.apiPrologue = null != e ? e : "https://graph.instagram.com/me", null == this.accessToken) throw new Error("You must provide an accessToken parameter when instantiating an APIClient object.")
// 			}
// 			return e.prototype.requestEndpoint = function (e) {
// 				var t;
// 				return t = e.indexOf("?") > 0 ? e + "&access_token=" + this.accessToken : e + "/?access_token=" + this.accessToken, n.ajax({
// 					url: this.apiPrologue + "/" + t,
// 					dataType: "jsonp"
// 				})
// 			}, e.prototype.getRecentMedia = function (n) {
// 				var e, t;
// 				return t = this.apiPrologue, e = {
// 					dataType: "jsonp",
// 					data: {
// 						access_token: this.accessToken,
// 						fields: "media.limit(" + n + "){media_url,permalink,thumbnail_url,username}"
// 					}
// 				}, this.fetchDataUntilGotEnough(t, e, n)
// 			}, e.prototype.fetchDataUntilGotEnough = function (e, r, a) {
// 				var o, i, l, s, u;
// 				return u = [], o = n.Deferred(), l = function (n) {
// 					var e, r, i, l, c, d, g, m;
// 					return u = u.concat(null != (e = null != n && null != (r = n.media) ? r.data : void 0) ? e : []), null != (null != n ? n.error : void 0) ? o.resolve(n) : u.length >= a ? o.resolve({
// 						data: u,
// 						count: a
// 					}) : (null != n && null != (i = n.media) && null != (l = i.data) ? l.length : void 0) && null == (null != n && null != (c = n.media) && null != (d = c.paging) ? d.next : void 0) ? ("undefined" != typeof Raven && null !== Raven && Raven.captureMessage("Instagram account doesn\u2019t have enough images"), o.resolve({
// 						data: u
// 					})) : null != (null != n && null != (g = n.media) && null != (m = g.paging) ? m.next : void 0) ? s(n.media.paging.next) : o.resolve(t.constructError(t.UNKNOWN_ERROR))
// 				}, i = function (n) {
// 					try {
// 						return o.resolve(JSON.parse(n.responseText))
// 					} catch (n) {
// 						return o.resolve(t.constructError(t.UNKNOWN_ERROR))
// 					}
// 				}, s = function (e, t) {
// 					return null == t && (t = {
// 						dataType: "jsonp"
// 					}), n.ajax(e, t).then(l, i)
// 				}, s(e, r), o
// 			}, e
// 		}(), t = this.instagram = {
// 			NO_ACCESS_TOKEN_ERROR: "IGApiException",
// 			INVALID_ACCESS_TOKEN_ERROR: "OAuthException",
// 			UNKNOWN_ERROR: "unknown",
// 			constructError: function (n) {
// 				return {
// 					error: {
// 						type: n
// 					}
// 				}
// 			},
// 			config: function (n) {
// 				return function () {
// 					var e, t;
// 					return null != (e = n.social) && null != (t = e.instagram) ? t.accessToken : void 0
// 				}
// 			}(this),
// 			populate: function (r, a) {
// 				var o, i, l;
// 				if (null != r && (r = r.filter(function (e, t) {
// 						return 1 === n(t).find("[data-social-type='instagram']").length
// 					})), o = null != r ? r : n("[data-social-type='instagram']").closest("._4ORMAT_content_page_row"), o.length > 0) return null == (i = t.config()) ? (t.render({
// 					el: o,
// 					error: t.NO_ACCESS_TOKEN_ERROR
// 				}), "function" == typeof a ? a(o) : void 0) : (l = new e(i), o.each(function (e, r) {
// 					var o, i, s;
// 					return i = n(r).find(".js-format-instagram-wrapper")[0], o = null != (s = i.dataset.imageCount) ? s : 6, l.getRecentMedia(o).then(function (e) {
// 						return null != (null != e ? e.error : void 0) ? t.render({
// 							el: r,
// 							error: e.error.type
// 						}) : t.render({
// 							data: e.data,
// 							el: r,
// 							settings: i.dataset
// 						}), "function" == typeof a ? a(n(r)) : void 0
// 					})
// 				}))
// 			},
// 			updateImageCount: function (r, a, o) {
// 				var i, l, s, u;
// 				return null == (i = t.config()) ? (t.render({
// 					el: r,
// 					error: t.NO_ACCESS_TOKEN_ERROR
// 				}), "function" == typeof o ? o(n(r)) : void 0) : (s = new e(i), l = null != (u = a.imageCount) ? u : 6, s.getRecentMedia(l).then(function (e) {
// 					return null != (null != e ? e.error : void 0) ? t.render({
// 						el: r,
// 						error: e.error.type
// 					}) : t.render({
// 						data: e.data,
// 						el: r,
// 						settings: a
// 					}), "function" == typeof o ? o(n(r)) : void 0
// 				}))
// 			},
// 			render: function (e) {
// 				var r, a, o, i, l, s, u;
// 				return u = e.settings, i = e.data, l = e.el, s = e.error, o = null != s ? s === t.NO_ACCESS_TOKEN_ERROR ? "<div class='js-format-instagram-container format-instagram-container error error-no-access'>\n</div>" : s === t.INVALID_ACCESS_TOKEN_ERROR ? "<div class='js-format-instagram-container format-instagram-container error error-failed-access'>\n</div>" : "<div class='js-format-instagram-container format-instagram-container error error-unknown empty'>\n</div>" : 0 === i.length ? "<div class='js-format-instagram-container format-instagram-container error empty'>\n</div>" : t.renderImages({
// 					data: i,
// 					el: l,
// 					settings: u
// 				}), r = n(l), a = r.find(".js-format-instagram-container "), a.length > 0 ? a.replaceWith(o) : r.find(".js-format-instagram-wrapper").append(o), r.toggleClass("_4ORMAT_site_hidden", null != s || 0 === i.length)
// 			},
// 			renderImages: function (n) {
// 				var e, r, a, o, i;
// 				return e = n.data, r = n.el, i = n.settings, a = e.reduce(function (n, e) {
// 					return n + '<div class="format-instagram-preview">\n  <a href="' + e.permalink + '" target="_blank" rel="noopener">\n    <div class="format-instagram-preview-image"\n      style="background-image:url(' + (e.thumbnail_url || e.media_url) + ');"></div>\n  </a>\n</div>'
// 				}, ""), a += t.renderAttribution(e), "<div class='js-format-instagram-container format-instagram-container image-row-count-" + (null != (o = i.imagesPerRow) ? o : 3) + "'>\n  " + a + "\n</div>"
// 			},
// 			renderAttribution: function (n) {
// 				return n.length > 0 ? '<div class="format-instagram-attribution">\n  Follow\n  <a href="https://www.instagram.com/' + n[0].username + '/" target="_blank" rel="noopener">@' + n[0].username + "</a>\n  on Instagram\n</div>" : ""
// 			}
// 		}, n(function () {
// 			if (!_4ORMAT_DATA.page.content_editable) return t.populate()
// 		})
// 	}).call(_4ORMAT)
// }).call(this);