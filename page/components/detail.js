import { TEXT_STYLE } from "../home/index.style";

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_STYLE,
      text: "这是详情页",
    });
  },
  onInit() {},

  onDestroy() {},
});
