/** Google Script Runを定義 */
type IGoogleRun = {
  script: {
    run: {
      withSuccessHandler: any,
    },
  },
}

/** Windowにgoogleを追加する */
interface MyWindow extends Window {
  google: IGoogleRun,
}

declare var window: MyWindow;
export default window;