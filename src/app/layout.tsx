import "@/styles/app.scss";

import type { Metadata } from "next";
import localFont from "next/font/local";

import styles from "./layout.module.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout, { Content, Header } from "antd/es/layout/layout";
import classNames from "classnames";
import AntdProvider from "@/providers/AntdProvider";
import { ReactQueryProviders } from "../providers/ReactQueryProvider";

const pretendard = localFont({
  weight: "45 920",
  src: [
    {
      path: "../../public/assets/fonts/Pretendard-Thin.subset.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-ExtraLight.subset.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Light.subset.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-ExtraBold.subset.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Black.subset.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(styles["body"], pretendard.className)}>
        <ReactQueryProviders>
          <AntdRegistry>
            <AntdProvider>
              <Layout className={styles["layout"]}>
                <Header className={styles["header"]}>
                  <div>Whose Koreo</div>
                </Header>
                <Content className={styles["content"]}>{children}</Content>
              </Layout>
            </AntdProvider>
          </AntdRegistry>
        </ReactQueryProviders>
      </body>
    </html>
  );
}

const metadata: Metadata = {
  title: "후즈 코리오 | Whose Koreo",
  description: "케이팝 안무가 위키",
  icons: {
    icon: "/assets/images/common/favicon-black.png",
  },
  keywords: [
    "후즈코리오",
    "Whose Koreo",
    "케이팝 안무가",
    "안무가",
    "K-pop",
    "케이팝",
    "K-pop choreography",
    "Choreography",
  ],
};

export async function generateMetadata({}: { children: React.ReactNode }) {
  return metadata;
}
