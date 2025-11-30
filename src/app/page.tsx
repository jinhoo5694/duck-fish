import KaistLogo from "@/components/KaistLogo";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 transition-colors duration-500 dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Animated background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 opacity-60 blur-3xl dark:from-violet-600 dark:to-indigo-600 dark:opacity-40" />
        <div className="animate-pulse-glow animation-delay-200 absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 opacity-60 blur-3xl dark:from-cyan-500 dark:to-blue-600 dark:opacity-40" />
        <div className="animate-pulse-glow animation-delay-400 absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-teal-200 to-emerald-200 opacity-60 blur-3xl dark:from-fuchsia-500 dark:to-pink-600 dark:opacity-40" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(180,83,9,0.04) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(180,83,9,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-20 dark:block"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-6 py-20">
        <main className="flex w-full max-w-5xl flex-col items-center gap-24">
          {/* Hero section */}
          <div className="animate-fade-in-up flex flex-col items-center gap-6 pt-12 text-center">
            <div className="relative">
              <h1 className="animate-gradient bg-gradient-to-r from-amber-600 via-rose-500 to-violet-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-violet-400 dark:via-cyan-400 dark:to-fuchsia-400 sm:text-7xl">
                오리연못미꾸라지
              </h1>
              <div className="absolute inset-0 -z-10 blur-2xl">
                <h1 className="animate-gradient bg-gradient-to-r from-amber-600 via-rose-500 to-violet-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent opacity-40 dark:from-violet-400 dark:via-cyan-400 dark:to-fuchsia-400 dark:opacity-50 sm:text-7xl">
                  오리연못미꾸라지
                </h1>
              </div>
            </div>

            <div className="glass flex items-center gap-3 rounded-full px-5 py-3 shadow-lg shadow-amber-500/10 dark:shadow-violet-500/10">
              <KaistLogo className="h-6 w-auto" />
              <div className="h-4 w-px bg-amber-300 dark:bg-zinc-700" />
              <span className="text-sm font-medium text-amber-800 dark:text-zinc-300">
                컴퓨터공학 & 전기전자공학
              </span>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-amber-900/70 dark:text-zinc-400">
              카이스트 출신 개발자 3인이 모여 만든 웹 개발 팀입니다.
              <br />
              <span className="font-medium text-amber-900 dark:text-zinc-300">
                창의적인 디자인
              </span>
              과{" "}
              <span className="font-medium text-amber-900 dark:text-zinc-300">
                최신 기술
              </span>
              로 여러분의 비전을 현실로 만들어 드립니다.
            </p>
          </div>

          {/* 우리는 다릅니다 Section */}
          <section className="animate-fade-in-up animation-delay-200 flex w-full flex-col items-center gap-8 opacity-0">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <h2 className="text-3xl font-bold text-amber-900 dark:text-zinc-100">
                우리는 다릅니다
              </h2>
            </div>

            <div className="glass flex flex-col items-center gap-6 rounded-3xl p-8 text-center shadow-xl shadow-amber-500/10 dark:shadow-violet-500/10 sm:p-12">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold text-amber-800 dark:text-zinc-200">
                  KAIST 전산학부 졸업 2인 · KAIST 전기전자공학부 졸업 1인
                </p>
                <p className="text-xl font-bold text-amber-900 dark:text-zinc-100">
                  3년 이상 경력 개발자 3인이{" "}
                  <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-violet-400">
                    &quot;직접&quot;
                  </span>{" "}
                  만듭니다
                </p>
              </div>

              <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-amber-300 to-transparent dark:via-zinc-700" />

              <div className="flex flex-col gap-4 text-amber-900/80 dark:text-zinc-300">
                <p className="text-lg">
                  저렴하다고 퀄리티가 낮아지는 게 아닙니다.
                </p>
                <div className="flex flex-col gap-2 text-lg">
                  <p>
                    <span className="font-semibold text-amber-900 dark:text-zinc-100">
                      대기업에서 쓰는 그 기술,
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-amber-900 dark:text-zinc-100">
                      스타트업이 선택하는 그 스택.
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-xl font-bold text-amber-900 dark:text-zinc-100">
                  여러분의 웹 사이트에 바로 적용해보세요.
                </p>
              </div>
            </div>
          </section>

          {/* 왜 React / Next.js 인가? Section */}
          <section className="animate-fade-in-up animation-delay-400 flex w-full flex-col items-center gap-8 opacity-0">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <h2 className="text-3xl font-bold text-amber-900 dark:text-zinc-100">
                왜 React / Next.js 인가?
              </h2>
            </div>

            <p className="text-center text-lg text-amber-800 dark:text-zinc-300">
              현대적인 웹 페이지의 사실상 유일한 스택입니다.
            </p>

            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "반응형 웹",
                "SEO(검색 엔진 최적화)",
                "빠른 개발",
                "무제한 확장성",
                "유지보수 용이",
              ].map((item) => (
                <div
                  key={item}
                  className="glass glass-hover flex items-center justify-center gap-2 rounded-xl px-4 py-4 text-center transition-all duration-300 hover:scale-105"
                >
                  <span className="text-emerald-500">✅</span>
                  <span className="font-medium text-amber-900 dark:text-zinc-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="glass mt-4 flex flex-col items-center gap-4 rounded-2xl p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-amber-900 dark:text-zinc-200">
                2024년 기준 전 세계 웹사이트 트렌드의 중심.
              </p>
              <div className="flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 dark:bg-rose-900/30">
                <span className="text-rose-600 dark:text-rose-400">⚠️</span>
                <p className="text-rose-700 dark:text-rose-300">
                  워드프레스는 2003년 기술입니다.{" "}
                  <span className="font-bold">(22년 전)</span>
                </p>
              </div>
            </div>
          </section>

          {/* 유지보수 비용 Section */}
          <section className="animate-fade-in-up animation-delay-600 flex w-full flex-col items-center gap-8 opacity-0">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👨‍💻</span>
              <h2 className="text-3xl font-bold text-amber-900 dark:text-zinc-100">
                유지보수 비용이 줄어듭니다!
              </h2>
            </div>

            <p className="text-center text-lg font-semibold text-amber-800 dark:text-zinc-300">
              신입 개발자 = 유지보수 인력
            </p>

            <div className="grid w-full gap-6 md:grid-cols-2">
              {/* 2024년 신입 개발자들이 배우는 기술 */}
              <div className="glass flex flex-col gap-4 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  2024년 신입 개발자들이 배우는 기술
                </h3>
                <div className="flex flex-col gap-2">
                  {["React / Next.js", "TypeScript", "Tailwind CSS"].map(
                    (tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <span className="text-emerald-500">✅</span>
                        <span className="font-medium text-amber-900 dark:text-zinc-200">
                          {tech}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* 2024년 신입 개발자들이 안 배우는 기술 */}
              <div className="glass flex flex-col gap-4 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-rose-600 dark:text-rose-400">
                  2024년 신입 개발자들이 안 배우는 기술
                </h3>
                <div className="flex flex-col gap-2">
                  {["PHP (워드프레스)", "아임웹 자체 빌더"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <span className="text-rose-500">❌</span>
                      <span className="font-medium text-amber-900/70 dark:text-zinc-400">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass mt-4 flex flex-col items-center gap-4 rounded-2xl p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-amber-900 dark:text-zinc-200">
                &quot;나중에 다른 개발자한테 맡기려면?&quot;
              </p>
              <div className="flex flex-col gap-2 text-amber-800 dark:text-zinc-300">
                <p>
                  → React 개발자는{" "}
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    넘쳐납니다.
                  </span>
                </p>
                <p>
                  → 워드프레스 전문가 찾기?{" "}
                  <span className="font-bold text-rose-600 dark:text-rose-400">
                    점점 어려워집니다.
                  </span>
                </p>
              </div>
              <div className="mt-4 rounded-full bg-gradient-to-r from-amber-100 to-emerald-100 px-6 py-3 dark:from-emerald-900/30 dark:to-cyan-900/30">
                <p className="font-bold text-amber-900 dark:text-emerald-300">
                  트렌디한 기술 = 인력 수급 용이 = 유지보수 비용 절감
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio section */}
          <section className="flex w-full flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300 dark:to-zinc-700" />
              <h2 className="text-xl font-semibold tracking-wide text-amber-900 dark:text-zinc-200">
                포트폴리오
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300 dark:to-zinc-700" />
            </div>

            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass glass-hover group relative flex h-64 cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl shadow-lg shadow-amber-500/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 dark:shadow-violet-500/5 dark:hover:shadow-violet-500/10"
                >
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 opacity-0 blur transition-opacity duration-500 group-hover:opacity-30 dark:from-violet-600 dark:via-cyan-600 dark:to-fuchsia-600 dark:group-hover:opacity-30" />
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-3xl transition-transform duration-500 group-hover:scale-110 dark:from-zinc-800/50 dark:to-zinc-900/50">
                    {i === 1 ? "🎨" : i === 2 ? "💼" : "🚀"}
                  </div>
                  <span className="text-lg font-medium text-amber-700 transition-colors group-hover:text-amber-900 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                    Coming Soon
                  </span>
                  <span className="text-sm text-amber-500 dark:text-zinc-600">
                    포트폴리오 #{i}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-amber-700 dark:text-zinc-500">
              프로젝트 의뢰 및 문의
            </p>
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 px-8 py-4 font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/30 dark:from-violet-600 dark:to-cyan-600 dark:shadow-violet-500/25 dark:hover:shadow-violet-500/30">
              <span className="relative z-10">문의하기</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-violet-500 via-rose-500 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-cyan-600 dark:to-violet-600" />
            </button>
          </div>

          {/* Footer */}
          <footer className="flex flex-col items-center gap-4 pt-12">
            <div className="flex gap-6">
              {["GitHub", "Email", "Instagram"].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer text-sm text-amber-600/60 transition-colors hover:text-amber-900 dark:text-zinc-600 dark:hover:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-amber-600/50 dark:text-zinc-700">
              © 2024 오리연못미꾸라지. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
