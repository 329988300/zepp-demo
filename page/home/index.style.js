export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

export const TEXT_STYLE = {
  text: "",
  x: px(10),
  y: px(40),
  w: DEVICE_WIDTH,
  h: px(100),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.ELLIPSIS,
}