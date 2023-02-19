import { TEXT_STYLE } from "./index.style";

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page build invoked");
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...TEXT_STYLE,
      text: "这是一个按钮",
      click_func: () => {   
        logger.log("点击了按钮");
        hmApp.gotoPage({ url: "page/components/detail", param: "" });
      },
    });
  },
  onInit() {
    logger.debug("init");
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
