import Header from "@/components/Header";
import TabNav from "@/components/TabNav";
import CTAButton from "@/components/CTAButton";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <main>
        <TabNav />

        {/* Success Area - 온라인 셀러 성공 공식 */}
        <div id="success-area">
          <article className="bg-black">
            <div className="relative mx-auto h-[150px] max-w-[1502px] md:h-[340px]">
              <div className="relative z-[3] flex h-full items-center px-4">
                <h2 className="text-[26px] font-bold leading-[1.3] text-white md:text-[54px]">
                  온라인 셀러의
                  <br />
                  업무를 바꾸는
                  <br />
                  AI 에이전트
                </h2>
              </div>
              <div className="absolute inset-0 z-[1] overflow-hidden bg-gradient-to-br from-indigo-900/90 to-purple-900/90" />
            </div>
          </article>

          <article className="bg-white">
            <div className="relative mx-auto max-w-[900px] px-4 py-10 md:py-20">
              <div className="flex flex-col gap-4">
                <hr className="border-gray-500" />
                <h3 className="text-[22px] font-bold text-[#EF5555] md:text-2xl">
                  하루 10시간 이상 고객 응대하시나요? AI가 대신합니다
                </h3>
                <hr className="border-gray-500" />
              </div>
              <div className="mt-10 space-y-6">
                <p className="text-lg leading-[1.8]">
                  온라인 셀러분들의 가장 큰 고민은 <b>반복적인 고객 응대</b>입니다.
                  &quot;배송什么时候到?&quot;, &quot;환불 어떻게 해요?&quot; 같은
                  질문에 매일 수십 번, 수백 번 답변하시죠.
                </p>
                <p className="text-lg leading-[1.8]">
                  <b>레비오사 AI</b>는 온라인 셀러를 위한 AI 에이전트입니다. 24시간
                  자동으로 고객 문의에 답하고, 주문·배송·환불 업무를 처리합니다.
                  당신은 상품 기획과 마케팅에만 집중하세요.
                </p>
                <ul className="rounded-lg bg-amber-50 p-6 font-bold">
                  <li>· 24시간 자동 고객 응대</li>
                  <li>· 다국어 지원 (한국어, 영어, 중국어 등)</li>
                  <li>· 주문·배송·환불 자동 처리</li>
                  <li>· 쇼핑몰·마켓플레이스 연동</li>
                </ul>
              </div>
              <div className="mt-16 border-t border-gray-300 pt-10">
                <p className="text-center text-xl font-bold">
                  대기 신청만 하셔도, 레비오사 AI
                  <br />
                  무료 체험을 받아보실 수 있습니다.
                  <br />
                  직접 경험해보세요. 👇
                </p>
                <div className="mt-6 flex justify-center">
                  <CTAButton variant="primary" size="lg" />
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Intro Area - 레비오사 AI 소개 */}
        <div id="intro-area">
          <article className="bg-black">
            <div className="relative mx-auto max-w-[900px] px-4 py-[40px] md:py-[120px]">
              <h2 className="text-center text-[32px] font-bold leading-[1.3] text-white md:text-[50px]">
                어떻게 해야 온라인에서
                <br />
                더 효율적으로 판매할 수 있을까?
              </h2>
              <div className="my-6 flex h-[50px] justify-center">
                <div className="h-[50px] w-[2px] bg-[#FE5555]" />
              </div>
              <p className="text-center text-[18px] font-medium leading-[1.5] text-white md:text-2xl">
                우리는 이 문제에 대한 답을 찾았습니다.
                <br />
                AI 에이전트가 당신의 영업 사원이 됩니다.
                <br />
                결과가 궁금하다면 아래에서 확인하실 수 있습니다.
              </p>
            </div>
          </article>

          <article className="bg-[#2A2A2A]">
            <div className="relative mx-auto max-w-[900px] px-4 py-[40px] md:py-[80px]">
              <p className="text-center text-[18px] font-medium leading-[1.5] text-white md:text-xl md:leading-[1.8]">
                화려한 마케팅 문구에 설레는 분들,
                <br />
                큰 기대를 하고 오시는 분들은 아래 내용에 실망할 수 있습니다.
                <br />
                <span className="border-b border-[#FE5555] font-semibold">
                  저희는 있는 그대로만 얘기하기 때문입니다.
                </span>
                <br />
                <br />
                <span className="border-b border-[#FE5555] text-[20px] font-bold text-[#FE5555] md:text-[26px]">
                  지금부터 보여드리는 것이 현실입니다.
                </span>
              </p>
            </div>
          </article>

          <article className="bg-[#F6F6F6]">
            <div className="relative mx-auto max-w-[900px] px-4 py-[40px] md:py-[70px]">
              <p className="text-center text-[18px] font-medium leading-[1.5] md:text-xl md:leading-[1.8]">
                레비오사 AI를 사용하는 셀러들은
                <br />
                <span className="border-b border-[#FE5555] font-semibold">
                  고객 응대 시간을 <span className="text-[#FE5555]">70% 이상 절감</span>
                  하고 있습니다.
                </span>
              </p>
              <p className="mt-12 text-center text-[18px] font-medium md:text-xl">
                <span className="border-b border-[#FE5555] font-semibold">
                  일반적인 성과는 많은 회원분들이{" "}
                  <span className="text-[#FE5555]">지속적으로 달성</span>하고 있습니다.
                </span>
              </p>
            </div>
          </article>

          <article className="bg-white">
            <div className="relative mx-auto max-w-[900px] px-4 py-[40px] md:py-[70px]">
              <p className="text-center text-[18px] font-semibold leading-[1.5] md:text-xl md:leading-[1.8]">
                <span className="border-b border-[#FE5555]">
                  레비오사 AI는{" "}
                  <span className="text-[#FE5555]">
                    온라인 셀러를 위한 AI 에이전트 서비스
                  </span>
                  입니다.
                </span>
              </p>
              <p className="mt-10 text-center text-[20px] font-semibold text-[#FE5555] md:text-[26px]">
                <span className="border-b border-[#FE5555]">
                  AI가 24시간 고객 응대를 대신하고,
                  <br />
                  당신은 비즈니스 성장에만 집중하세요.
                </span>
              </p>

              {/* 제공 혜택 */}
              <div className="mt-16 rounded-lg border bg-white p-6 shadow-sm md:p-10">
                <h3 className="text-center text-[18px] font-semibold text-[#FE5555] md:text-[26px]">
                  레비오사 AI는 무엇을 제공하나요?
                </h3>
                <div className="my-6 h-px w-full bg-[#EF5555]" />
                <div className="space-y-6 text-left">
                  <p className="text-[18px] font-medium md:text-xl">
                    · 24시간 자동 고객 응대 AI 에이전트
                  </p>
                  <p className="text-[18px] font-medium md:text-xl">
                    · 다국어 실시간 번역 및 응대 (한국어, 영어, 중국어 등)
                  </p>
                  <p className="text-[18px] font-medium md:text-xl">
                    · 주문·배송·환불 FAQ 자동 답변
                  </p>
                  <p className="text-[18px] font-medium md:text-xl">
                    · 쇼핑몰·마켓플레이스 연동 지원
                  </p>
                  <p className="text-[18px] font-medium md:text-xl">
                    · 맞춤형 상담 시나리오 설정
                  </p>
                </div>
              </div>

              {/* CTA & Waitlist Form */}
              <div className="mt-16 text-center">
                <p className="text-[20px] font-bold md:text-[26px]">
                  대기 신청을 원하는 분들은 아래에서 신청해 주세요.
                </p>
                <div className="mx-auto mt-10 max-w-md">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* FAQ Area */}
        <div id="faq-area">
          <section className="bg-[#EDEDED]">
            <div className="bg-black py-5 text-center text-[24px] font-bold text-white md:text-[26px]">
              레비오사 AI FAQ
            </div>
            <div className="mx-auto max-w-[900px] space-y-4 px-4 py-[40px] md:py-[70px]">
              <div className="rounded-lg border bg-white p-6 shadow-sm md:p-12">
                <h3 className="text-center text-[18px] font-semibold md:text-[26px]">
                  레비오사 AI는 어떤 플랫폼을 지원하나요?
                </h3>
                <div className="my-6 h-px w-full bg-gray-800" />
                <p className="text-[18px] font-medium leading-[1.5] md:text-xl">
                  쿠팡, 네이버 스마트스토어, 11번가, G마켓 등 국내 주요
                  마켓플레이스와 자체 쇼핑몰 연동을 지원합니다. 준비 중인
                  플랫폼이 있다면 대기 신청 시 문의해 주세요.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm md:p-12">
                <h3 className="text-center text-[18px] font-semibold md:text-[26px]">
                  AI가 고객에게 잘못된 답변을 하면 어떻게 하나요?
                </h3>
                <div className="my-6 h-px w-full bg-gray-800" />
                <p className="text-[18px] font-medium leading-[1.5] md:text-xl">
                  레비오사 AI는 사전에 설정한 FAQ와 시나리오 기반으로 응대합니다.
                  민감한 문의는 자동으로 상담원 연결이 가능하며, 응대 내용을
                  지속적으로 학습해 정확도를 높입니다.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm md:p-12">
                <h3 className="text-center text-[18px] font-semibold md:text-[26px]">
                  비용은 얼마인가요?
                </h3>
                <div className="my-6 h-px w-full bg-gray-800" />
                <p className="text-[18px] font-medium leading-[1.5] md:text-xl">
                  요금제는 월 단위로 제공되며, 상품 수와 월 처리 문의량에 따라
                  다릅니다. 정확한 가격은 오픈 시 대기 신청자에게 우선 안내
                  드립니다.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm md:p-12">
                <h3 className="text-center text-[18px] font-semibold md:text-[26px]">
                  언제 서비스를 이용할 수 있나요?
                </h3>
                <div className="my-6 h-px w-full bg-gray-800" />
                <p className="text-[18px] font-medium leading-[1.5] md:text-xl">
                  현재 준비 중이며, 2025년 중 정식 오픈 예정입니다. 대기 신청을
                  해두시면 오픈 시 가장 먼저 안내해 드립니다.
                </p>
              </div>
            </div>
          </section>

          {/* Footer CTA - scrolls to form above */}
          <section className="bg-[#2A2A2A]">
            <div className="relative mx-auto max-w-[900px] px-4 py-[40px] md:py-[70px]">
              <div className="text-center">
                <p className="text-[20px] font-bold leading-[1.5] text-white md:text-[26px]">
                  대기 신청을 원하는 분들은 아래 버튼을 클릭해 주세요.
                </p>
                <div className="mt-10">
                  <CTAButton variant="primary" size="xl" />
                </div>
                <p className="mt-2 text-sm text-white/80 md:text-lg">
                  ※ 대기 신청 시 알림톡과 문자메시지 수신에 동의합니다.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Fixed Bottom CTA */}
        <div className="fixed bottom-0 z-20 w-full md:bottom-[30px]">
          <div className="mx-auto max-w-[1000px] rounded-none border border-[#363636] bg-[#363636] px-[30px] py-5 shadow-lg md:rounded-lg md:px-[50px] md:py-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-white md:text-lg">
                  레비오사 AI, 지금 신청하세요!
                </p>
                <p className="text-sm font-medium text-[#DADADA]">
                  (오픈 시 가장 먼저 안내해 드립니다)
                </p>
              </div>
              <CTAButton variant="secondary" size="md" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
