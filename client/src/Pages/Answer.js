import React from "react";
import styled from "styled-components";
import Header from "./Main/Header";
import Sidebar from "./Main/Navbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom"; //현재 페이지의 파라미터 정보를 가져오기 위해 사용
import useFetch from "./useFetch";
// import "bootstrap/dist/css/bootstrap.css";

const AnswerStyle = styled.div`
  .container {
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    flex: 1 0 auto;
    margin: 0 auto;
    text-align: left;
  }
  #content {
    width: calc(100% - 164px);
    padding: var(--su24);
  }
  .ck.ck-editor {
    min-width: 300;
  }
  .ck-editor__editable {
    min-height: 300px;
  }
  .post-layout {
    display: flex;
  }
  #submit-button {
    margin-top: 20px;
  }
`;
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const onIncrease = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const onDecrease = () => {
//     setCount((prevCount) => prevCount - 1);
//   };
// };
//
const Answer = () => {
  const { id } = useParams();
  console.log(id);
  const { getdata: answers } = useFetch(
    "http://localhost:3001/data/" + `?questionId=` + id
  );

  return (
    <>
      <AnswerStyle>
        <Header></Header>
        <div className="container">
          <Sidebar></Sidebar>
          {answers.map((el, idx) => {
            return (
              <div id="content" class="snippet-hidden">
                <div
                  itemprop="mainEntity"
                  itemscope=""
                  itemtype="https://schema.org/Question"
                >
                  <link
                    itemprop="image"
                    href="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a"
                  />
                  <div class="inner-content clearfix">
                    <div id="question-header" class="d-flex sm:fd-column">
                      <h1
                        itemprop="name"
                        class="fs-headline1 ow-break-word mb8 flex--item fl1"
                      >
                        <a
                          href="/questions/질문번호/제목"
                          class="question-hyperlink"
                        >
                          {el.questionTitle}
                        </a>
                      </h1>
                      <div class="ml12 aside-cta flex--item print:d-none sm:ml0 sm:mb12 sm:order-first sm:as-end">
                        <a
                          href="http://localhost:3000/AddAsk"
                          class="ws-nowrap s-btn s-btn__primary"
                        >
                          Ask Question
                        </a>
                      </div>
                    </div>
                    <div class="d-flex fw-wrap pb8 mb16 bb bc-black-075">
                      <div
                        class="flex--item ws-nowrap mr16 mb8"
                        title="2022-08-29 11:39:39Z"
                      >
                        <span class="fc-light mr2">Asked</span>
                        <time
                          itemprop="dateCreated"
                          datetime="2022-08-29T11:39:39"
                        >
                          {el.createdAt}
                        </time>
                      </div>
                      <div class="flex--item ws-nowrap mr16 mb8">
                        <span class="fc-light mr2">Modified</span>
                        <a
                          href="?lastactivity"
                          class="s-link s-link__inherit"
                          title="2022-08-29 12:00:00Z"
                        >
                          {el.modifiedAt}
                        </a>
                      </div>
                      <div
                        class="flex--item ws-nowrap mb8"
                        title="Viewed 18 times"
                      >
                        <span class="fc-light mr2">Viewed</span>
                        {el.questionView} times
                      </div>
                    </div>
                    <div
                      id="mainbar"
                      role="main"
                      aria-label="question and answers"
                    >
                      <div
                        class="question js-question"
                        data-questionid="73528239"
                        data-position-on-page="0"
                        data-score="0"
                        id="question"
                      >
                        <div class="js-zone-container zone-container-main"></div>
                        <div class="post-layout">
                          <div class="votecell post-layout--left">
                            <div
                              class="js-voting-container d-flex jc-center fd-column ai-stretch gs4 fc-black-200"
                              data-post-id="73528239"
                            >
                              {" "}
                              <button
                                // onClick={onIncrease}
                                class="js-vote-up-btn flex--item s-btn s-btn__unset c-pointer "
                                data-controller="s-tooltip"
                                data-s-tooltip-placement="right"
                                aria-pressed="false"
                                aria-label="Up vote"
                                data-selected-classes="fc-theme-primary"
                                data-unselected-classes=""
                                aria-describedby="--stacks-s-tooltip-11rdm6np"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="svg-icon iconArrowUpLg"
                                  width="36"
                                  height="36"
                                  viewBox="0 0 36 36"
                                >
                                  <path d="M2 25h32L18 9 2 25Z"></path>
                                </svg>
                              </button>
                              <div
                                id="--stacks-s-tooltip-11rdm6np"
                                class="s-popover s-popover__tooltip pe-none"
                                aria-hidden="true"
                                role="tooltip"
                              >
                                This question shows research effort; it is
                                useful and clear
                                <div class="s-popover--arrow"></div>
                              </div>
                              <div
                                class="js-vote-count flex--item d-flex fd-column ai-center fc-black-500 fs-title"
                                itemprop="upvoteCount"
                                data-value="0"
                              >
                                0{/* {count} */}
                              </div>
                              <button
                                class="js-vote-down-btn flex--item s-btn s-btn__unset c-pointer "
                                data-controller="s-tooltip"
                                data-s-tooltip-placement="right"
                                aria-pressed="false"
                                aria-label="Down vote"
                                data-selected-classes="fc-theme-primary"
                                data-unselected-classes=""
                                aria-describedby="--stacks-s-tooltip-2gjkuhnv"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="svg-icon iconArrowDownLg"
                                  width="36"
                                  height="36"
                                  viewBox="0 0 36 36"
                                >
                                  <path d="M2 11h32L18 27 2 11Z"></path>
                                </svg>
                              </button>
                              <div
                                id="--stacks-s-tooltip-2gjkuhnv"
                                class="s-popover s-popover__tooltip pe-none"
                                aria-hidden="true"
                                role="tooltip"
                              >
                                This question does not show any research effort;
                                it is unclear or not useful
                                <div class="s-popover--arrow"></div>
                              </div>
                              <button
                                class="js-bookmark-btn s-btn s-btn__unset c-pointer py4 js-gps-track"
                                data-controller="s-tooltip"
                                data-s-tooltip-placement="right"
                                aria-pressed="false"
                                aria-label="Bookmark"
                                data-selected-classes="fc-yellow-600"
                                data-gps-track="post.click({ item: 1, priv: -1, post_type: 1 })"
                                aria-describedby="--stacks-s-tooltip-cumqavbg"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="svg-icon iconBookmark"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                >
                                  <path d="M6 1a2 2 0 0 0-2 2v14l5-4 5 4V3a2 2 0 0 0-2-2H6Zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77Z"></path>
                                </svg>
                                <div
                                  class="js-bookmark-count mt4 d-none"
                                  data-value=""
                                ></div>
                              </button>
                              <div
                                id="--stacks-s-tooltip-cumqavbg"
                                class="s-popover s-popover__tooltip pe-none"
                                aria-hidden="true"
                                role="tooltip"
                              >
                                Bookmark this question.
                                <div class="s-popover--arrow"></div>
                              </div>
                              <a
                                class="js-post-issue flex--item s-btn s-btn__unset c-pointer py6 mx-auto"
                                href="/posts/73535869/timeline"
                                data-shortcut="T"
                                data-ks-title="timeline"
                                data-controller="s-tooltip"
                                data-s-tooltip-placement="right"
                                aria-label="Timeline"
                                aria-describedby="--stacks-s-tooltip-2di5gdp5"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="mln2 mr0 svg-icon iconHistory"
                                  width="19"
                                  height="18"
                                  viewBox="0 0 19 18"
                                >
                                  <path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"></path>
                                </svg>
                              </a>
                              <div
                                id="--stacks-s-tooltip-2di5gdp5"
                                class="s-popover s-popover__tooltip pe-none"
                                aria-hidden="true"
                                role="tooltip"
                              >
                                Show activity on this post.
                                <div class="s-popover--arrow"></div>
                              </div>
                            </div>
                          </div>
                          <div class="postcell post-layout--right">
                            <div class="s-prose js-post-body" itemprop="text">
                              {/* <p>The doc says</p> */}
                              <blockquote>
                                <p>
                                  {/* The spawned task may execute on the current
                              thread, or it may be sent to a different thread to
                              be executed. */}
                                  {el.questionBody}
                                </p>
                              </blockquote>
                              <p>
                                So if you share a variable which is{" "}
                                <code>!Sync</code> between two async blocks and
                                spawn them, they may be executed simultaneously,
                                which induces race condition.
                              </p>
                              <p>How does tokio deal with it?</p>
                            </div>
                            <div class="mt24 mb12">
                              <div class="post-taglist d-flex gs4 gsy fd-column">
                                <div class="d-flex ps-relative fw-wrap">
                                  <a
                                    href="/questions/tagged/rust"
                                    class="post-tag js-gps-track"
                                    title="show questions tagged 'rust'"
                                    rel="tag"
                                    aria-labelledby="rust-container"
                                  >
                                    rust
                                  </a>{" "}
                                  <a
                                    href="/questions/tagged/tokio"
                                    class="post-tag js-gps-track"
                                    title="show questions tagged 'tokio'"
                                    rel="tag"
                                    aria-labelledby="tokio-container"
                                  >
                                    tokio
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="post-layout--right js-post-comments-component"></div>
                        </div>
                      </div>
                      <div class="js-zone-container zone-container-responsive"></div>
                      <div id="answers" class="no-answers">
                        <a name="tab-top"></a>
                        <div id="answers-header">
                          <div class="answers-subheader d-flex ai-center mb8">
                            <div class="flex--item fl1">
                              <h2 class="mb0" data-answercount="1">
                                {el.answers} Answer
                                {/* <span style="display:none;" itemprop="answerCount">
                              1
                            </span> */}
                              </h2>
                            </div>
                            <div class="flex--item"></div>
                          </div>
                        </div>
                        <a name="73528239"></a>
                        <div
                          id="answer-73528239"
                          class="answer js-answer"
                        ></div>

                        <a name="new-answer"></a>
                        <form
                          id="post-form"
                          action="/questions/73528239/answer/submit"
                          method="post"
                          class="js-add-answer-component post-form"
                        >
                          <h2 class="space">Your Answer</h2>
                          <CKEditor
                            className="editor-container"
                            editor={ClassicEditor}
                            data="<p></p>"
                          />
                          <div class="form-submit clear-both d-flex gsx gs4">
                            <button
                              id="submit-button"
                              class="flex--item s-btn s-btn__primary s-btn__icon"
                              type="submit"
                              tabindex="120"
                              autocomplete="off"
                            >
                              Post Your Answer{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AnswerStyle>
    </>
  );
};

export default Answer;
