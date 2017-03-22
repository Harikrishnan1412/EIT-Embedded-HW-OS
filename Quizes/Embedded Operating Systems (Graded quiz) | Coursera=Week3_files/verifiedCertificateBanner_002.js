define("pages/open-course/item/views/verifiedCertificateBanner",["require","exports","module","bundles/phoenix/lib/view","underscore","pages/open-course/common/constants","pages/open-course/item/views/verifiedCertificateBanner.html"],function(require,exports,module){"use strict";var i=require("bundles/phoenix/lib/view"),_=require("underscore"),e=require("pages/open-course/common/constants"),t=require("pages/open-course/item/views/verifiedCertificateBanner.html"),n=i.extend({template:t,events:{'click [data-js~="vc-banner-close"]':"close"},multitracker:{namespace:"open_course.item_verification",baseValues:["open_course_id","module_id","lesson_id","item_id"],definitions:{open_course_id:function open_course_id(){return this.itemMetadata.get("course.id")},module_id:function module_id(){return this.itemMetadata.get("lesson.module.id")},lesson_id:function lesson_id(){return this.itemMetadata.get("lesson.id")},item_id:function item_id(){return this.itemMetadata.get("id")}},events:{"click.get_certified":'click [data-js~="get-certified"]'},eventingVersion:2},initialize:function initialize(e){_.bindAll(this,["close"]),this.isItemPassable=e.isItemPassable||!1,this.itemMetadata=e.itemMetadata},render:function render(){return this.isItemPassable||(this.$el.html(t({vcBannerImg:e.signatureTrack.vcBannerImg,landingPagePath:e.vcLandingPagePath})),this.track("render")),this},close:function close(){this.track("click.close"),this.$el.remove()}},{shouldAppend:function shouldAppend(t){var e=t.itemMetadata,i=t.fluxibleContext;if(e){var n=i.getComponentContext().getStore("VerificationStore");return n.showCCAdvertising()&&0===e.getLectureIndexInModule()&&e.isLecture()}return!1}});module.exports=n});