import { ConfigProvider } from "antd";
import koKR from "antd/locale/ko_KR";

import { PropsWithChildren } from "react";

export function AntdProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      locale={koKR}
      theme={{
        token: {
          colorPrimary: "#000000",
          colorPrimaryHover: "#262626",
        },
        components: {
          Form: {
            labelFontSize: 12,
            verticalLabelPadding: "0 0 4px",
            itemMarginBottom: 0,
          },
          Input: {
            activeBorderColor: "#8c8c8c",
            activeShadow: "	0 0 0 2px rgba(0, 0, 0, 0.1)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdProvider;
