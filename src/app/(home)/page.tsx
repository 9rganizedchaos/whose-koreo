import styles from "./page.module.scss";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";
import { CreateDancerButton } from "./components/CreateDancerButton";
import { DancerList } from "./components/DancerList";
import { queryKey } from "@/models/query-keys";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getDancers } from "@/models/dancers/api";
import { getQueryClient } from "@/providers/getQueryClient";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKey("dancer").lists(),
    queryFn: () =>
      getDancers().then((res) => {
        return res;
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles["main-page"]}>
        <div className={styles["page-contents"]}>
          <div className={styles["list-toolbar"]}>
            <Input
              className={styles["search-box"]}
              placeholder="댄서 이름을 입력해보세요"
              suffix={<SearchOutlined />}
            />
            <CreateDancerButton />
          </div>
          <DancerList />
        </div>
      </div>
    </HydrationBoundary>
  );
}
