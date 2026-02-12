import Header from "@/components/Header";
import TabNav from "@/components/TabNav";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <main>
        <TabNav />

        {/* 0) 상단 히어로(제목+리드) */}
        <div id="success-area">
          <HeroBanner
            titleLines={[
              "매출이 오를수록 더 바빠지는 셀러,",
              "그건 성장이 아니라 '병목'입니다",
            ]}
            leadLines={[
              "많은 셀러가 미래를 불안해한다. 나 역시 그랬다.",
              "매출은 늘었는데, 이상하게 시간은 더 사라졌다.",
              "그러던 어느 날, 운영을 사람 손에서 빼고 '시스템'으로 옮기는 공식을 적용했고,",
              "매출은 유지되는데 실수·클레임·CS 스트레스가 급감했다.",
              "이 글은 그 전환점에 대한 이야기다. 그리고 지금도 통하는 셀러 자동화 공식에 대한 이야기이기도 하다.",
            ]}
            //     image1Src="/seller-operations.png"
            image1Alt="셀러 운영 화면 / 주문 폭주 / 엑셀 지옥"
            //     image2Src="/automation-dashboard.png"
            image2Alt="자동화 대시보드 / 안정화된 운영"
          />
        </div>

        {/* 1) 내 이야기(신뢰용 배경) — "왜 이 문제를 파고들었는가" */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-10">
            <h3
              id="intro-area"
              className="text-[20px] font-bold text-[#EF5555] md:text-[24px] py-6"
            >
              왜 이 문제를 파고들었는가
            </h3>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p>처음엔 단순했다.</p>
              <p>상품 10개, 주문 하루 5건. 사람 손으로도 됐다.</p>
              <p>
                문제는 매출이 오르는 순간 시작됐다.
                <br />
                상품이 늘고, 채널이 늘고, 주문이 늘수록
                <br />
                운영은 &apos;노력&apos;이 아니라 구조적 병목이 됐다.
              </p>
              <p className="font-semibold">나는 그걸 실제로 겪었다.</p>
              <ul className="ml-4 list-disc space-y-2">
                <li>상품 등록/수정이 하루를 잡아먹고</li>
                <li>가격/재고 실수로 클레임이 터지고</li>
                <li>배송/CS 누락이 매출을 갉아먹고</li>
                <li>&quot;오늘도 운영만 하다 끝났다&quot;가 반복됐다</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2) 사건(의문) — "이게 맞나?" */}
        <section className="bg-[#1a1a1a]">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              이게 맞나?
            </h3>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>당시 가장 자주 들었던 말이 있었다.</p>
              <p className="rounded-lg bg-white/10 px-4 py-3 italic">
                &quot;매출이 늘면 바빠지는 게 당연하죠.&quot;
              </p>
              <p>근데 현실은 다르다.</p>
              <p>잘 되는 셀러일수록 오히려 운영이 더 안정적이다.</p>
              <p className="font-semibold text-[#EF5555]">
                이게 말이 되나 싶어서, 나는 질문을 바꿨다.
              </p>
              <p className="rounded-lg border border-[#EF5555]/60 bg-[#EF5555]/10 px-4 py-3 font-medium">
                &quot;바쁜 건 성장이 아니라, 시스템이 없다는 신호 아닐까?&quot;
              </p>
            </div>
          </div>
        </section>

        {/* 3) 깨달음(핵심 문장 2~3개) */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              결론은 명확했다
            </h3>
            <div className="mt-8 space-y-6 text-[17px] font-semibold leading-[1.8] text-gray-900 md:text-[19px]">
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3">
                &apos;운영&apos;을 사람으로 하면, 매출이 커질수록 망가진다.
              </p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3">
                &apos;자동화&apos;는 편의가 아니라 생존이다.
              </p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3">
                &apos;노출(트래픽)&apos;이 아니라, &apos;운영 시스템&apos;이
                수익을 만든다.
              </p>
            </div>
          </div>
        </section>

        {/* 4) 현실(공감) — "대부분의 셀러가 겪는 지옥" */}
        <section className="bg-[#2A2A2A]">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              대부분의 셀러가 겪는 지옥
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>매출이 커질수록 반복되는 패턴이 있다.</p>
              <ul className="space-y-2">
                <li>상품 100개 → 수정 요청 폭증 → 누락</li>
                <li>주문 50건 → 송장/배송 실수 → 클레임</li>
                <li>가격 변경 → 수동 체크 → 패널티 위험</li>
                <li>CS 폭주 → 감정 소모 → 운영 품질 붕괴</li>
              </ul>
              <p>사람 중심 운영은 결국 이렇게 된다.</p>
              <p className="text-[#EF5555]/90">
                동시에 여러 일을 못함 → 피로 누적 → 실수 증가 → 신뢰 하락 → 매출
                하락
              </p>
              <p className="font-semibold">이커머스에서 실수는 치명적이다.</p>
            </div>
          </div>
        </section>

        {/* 5) "90%가 막히는 이유" 섹션 */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              90%가 막히는 이유
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p>
                새로 시작한 셀러의 90%가 특정 구간에서 멈춘다.
                <br />
                노하우가 없어서가 아니다. 의지가 약해서도 아니다.
              </p>
              <p className="rounded-lg border-2 border-[#EF5555] bg-[#EF5555]/5 px-4 py-3 font-semibold">
                그냥 &quot;운영을 수동으로 시작&quot;했기 때문이다.
              </p>
              <p>
                초반엔 된다.
                <br />
                하지만 어느 순간부터는
                <br />
                상품/주문/CS가 늘어나는 속도가
                <br />
                사람이 처리 가능한 속도를 이긴다.
              </p>
            </div>
          </div>
        </section>

        {/* 6) 패러다임 전환 — "성공은 매출이 아니라 시스템" */}
        <section className="bg-[#1a1a1a]">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              성공은 매출이 아니라 시스템
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>여기서 방향을 바꾸면 결과가 달라진다.</p>
              <ul className="space-y-2">
                <li>&quot;내가 더 열심히&quot; → &quot;반복을 없애기&quot;</li>
                <li>
                  &quot;실수 안 하기&quot; → &quot;실수가 나올 수 없는
                  구조&quot;
                </li>
                <li>
                  &quot;운영 잘 하기&quot; → &quot;운영을 자동으로 굴리기&quot;
                </li>
              </ul>
              <p className="font-semibold text-[#EF5555]">
                이때부터 매출은 목표가 아니라 결과가 된다.
              </p>
              {/* 이미지 1장 영역 */}
              <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-neutral-800/80">
                <div className="flex h-full w-full items-center justify-center text-center text-white/50">
                  <p className="text-sm">
                    운영이 자동으로 돌아가는 흐름도
                    <br />
                    (상품/가격/재고/주문/CS)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7) 오크통 법칙(셀러 버전) */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              가장 낮은 판자를 올려라
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p>셀러 운영도 오크통이다.</p>
              <p>
                아무리 소싱을 잘해도, 아무리 마케팅을 잘해도
                <br />한 판자(병목) 하나가 전체를 새게 만든다.
              </p>
              <p className="font-medium">예를 들어 이런 판자들이다.</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>상품 등록 속도</li>
                <li>가격/재고 싱크 정확도</li>
                <li>주문 처리 누락률</li>
                <li>CS 응답 속도</li>
                <li>플랫폼별 정책/제재 리스크</li>
              </ul>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-semibold">
                목표는 &quot;월매출 1억&quot;이 아니라,
                <br />내 오크통에서 가장 낮은 판자를 자동화로 끌어올리는 것이다.
              </p>
            </div>
          </div>
        </section>

        {/* 8) 해결책(제품) — 레비오사 AI */}
        <section className="bg-[#2A2A2A]">
          <div className="mx-auto max-w-[720px] px-4 py-6 md:py-20">
            <h3
              id="faq-area"
              className="text-[20px] font-bold text-[#EF5555] md:text-[24px] py-6"
            >
              레비오사 AI는 뭐냐?
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>
                레비오사 AI는 셀러들을 위한 AI 자동화 프로그램이다.
                <br />
                셀러가 매일 반복하는 운영 업무를 조건 기반으로 자동 실행해,
                <br />
                실수와 시간을 줄이고, 매출이 커져도 운영이 무너지지 않게 만든다.
              </p>
              {/* <p className="font-medium text-white">예시 (기대효과):</p> */}
              <ul className="ml-4 list-disc space-y-1">
                <li>상품 대량 등록/수정 자동화</li>
                <li>가격/재고 변화 감지 → 자동 반영</li>
                <li>주문/배송 처리 루틴 자동화</li>
                <li>반복 CS 템플릿/분류 자동화</li>
                <li>&quot;사람이 마지막 승인만 하는&quot; 운영 구조</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9) 대기 혜택 */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              대기 신청하면 받는 것
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-semibold">
                셀러 운영 병목 진단 체크리스트 (오크통 진단)
                <br />
                <br />
                자동화 우선순위 로드맵 (무엇부터 해야할까?)
                <br />
                <br />
                레비오사 AI 초기 기능 우선 사용 권한 (순차 오픈)
              </p>
            </div>
          </div>
        </section>

        {/* 10) 최종 CTA + 11) 보너스 문장 */}
        <section className="bg-[#1a1a1a]">
          <div className="mx-auto max-w-[720px] px-4 py-16 md:py-24">
            {/* 보너스 문장 */}
            <p className="mb-6 text-center text-[15px] font-medium italic text-white/80 md:text-[17px]">
              &quot;사람으로 버티는 순간, 성장은 리스크가 됩니다.&quot;
            </p>

            {/* 중앙 문구(2줄) */}
            <p className="text-center text-[18px] font-bold leading-[1.6] text-white md:text-[22px]">
              대기 신청만 하셔도,
              <br />
              셀러 운영 병목 진단 자료를 바로 받아볼 수 있습니다.
              <br />
              직접 적용해보세요. 👇
            </p>

            {/* 버튼 */}
            <div className="mt-10 flex justify-center">
              <CTAButton
                variant="primary"
                size="lg"
                label="무료 진단 자료 받고 대기 신청하기"
              />
            </div>
          </div>
        </section>

        {/* Fixed Bottom CTA */}
        <div className="fixed bottom-0 z-20 w-full md:bottom-[30px]">
          <div className="mx-auto max-w-[1000px] rounded-none border border-[#363636] bg-[#363636] px-[30px] py-5 shadow-lg md:rounded-lg md:px-[50px] md:py-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-white md:text-lg">
                  무료 진단 자료 받고 대기 신청하기
                </p>
                <p className="text-sm font-medium text-[#DADADA]">
                  (셀러 운영 병목 진단 자료를 바로 받아볼 수 있습니다)
                </p>
              </div>
              <CTAButton variant="secondary" size="md" label="대기 신청" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
