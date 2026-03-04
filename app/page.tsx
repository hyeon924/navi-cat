import styles from "./room-layout.module.scss";

const TOP_COUNT = 5;
const LEFT_COUNT = 2;
const BOTTOM_COUNT = 6;

function Room({ className }: { className?: string }) {
  return <div className={`${styles.room} ${className ?? ""}`} />;
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-8 font-sans dark:bg-zinc-900">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          ㄷ자형 방 레이아웃
        </h1>

        <div className={styles.grid}>
          {/* 1행: 빈칸(간격) + 상단 가로 5칸 */}
          <div className={styles.gap} aria-hidden />
          {Array.from({ length: TOP_COUNT }, (_, i) => (
            <Room key={`top-${i}`} />
          ))}

          {/* 2행: 좌측 1칸 + 빈 공간 */}
          <Room />
          <div className={styles.spacer} aria-hidden />

          {/* 3행: 좌측 2칸째 + 빈 공간 (좌측 2칸 붙어있음) */}
          <Room />
          <div className={styles.spacer} aria-hidden />

          {/* 4행: 하단 6칸 (칸+gap 만큼 우측 이동) */}
          <div className={styles.bottomRow} role="group" aria-label="하단 방">
            {Array.from({ length: BOTTOM_COUNT }, (_, i) => (
              <Room key={`bottom-${i}`} />
            ))}
          </div>
        </div>

        <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <span>상단: {TOP_COUNT}칸</span>
          <span>좌측: {LEFT_COUNT}칸</span>
          <span>하단: {BOTTOM_COUNT}칸</span>
        </div>
      </main>
    </div>
  );
}
