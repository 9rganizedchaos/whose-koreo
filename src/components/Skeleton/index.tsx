import { HTMLAttributes } from "react";

import styles from "./index.module.scss";

export type SkeletonProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "width" | "height"
>;

export function Skeleton(props: SkeletonProps) {
  return (
    <div className={styles["skeleton"]} {...props}>
      <div className={styles["gradient"]} />
    </div>
  );
}

export default Skeleton;
