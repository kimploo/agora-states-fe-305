import styled from "styled-components";
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from "axios";
import Tag from "./Tag";
import Header from "./Main/Header";

var shortid = require("shortid");
const AddAskStyle = styled.div`
  .form-wrapper {
    margin: 20px 0px;
  }

  .all {
    padding-left: 300px;
    padding-right: 300px;
  }
  .ck.ck-editor {
    min-width: 300;
  }
  .ck-editor__editable {
    min-height: 300px;
  }

  .title-input {
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
  }
`;

const AddAsk = () => {
  const [AskContent, setAskContent] = useState({
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    Axios.get("14.6.86.98:8080").then((response) => {
      setViewContent(response.data);
    });
  }, [viewContent]);

  const submitReview = () => {
    let reqPost = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: shortid.generate(),
        member: {
          //   // userId: shortid.generate(),

          title: AskContent.title,
          content: AskContent.content,
        },
      }),
    };
    fetch("http://localhost:3001/data", reqPost).then((res) => res.json());
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setAskContent({
      ...AskContent,
      [name]: value,
    });
  };
  return (
    <AddAskStyle>
      <Header></Header>
      <div className="all">
        <div class="d-flex ai-center py24 bg-no-repeat bg-right-bottom wide:bg-image-ask-v2 wide:h-ask-v2-background">
          <div class="fs-headline1">Ask a public question</div>
        </div>
        <div class="d-flex ai-start jc-space-between md:fd-column md:ai-stretch"></div>
        <label class="d-block s-label mb4" for="title">
          Title
          <div class="d-flex">
            <p class="s-description mt2 flex--item9">
              Be specific and imagine you’re asking a question to another person
            </p>
            <div class="flex--item3 ta-right text-counter mr0 fs-caption mt2 fl1 cool"></div>
          </div>
        </label>
        {/* 게시글작성후보이는곳 메인게시글목록으로 옮겨야함 
        <div className="ask-container">
        {viewContent.map((element) => (
          <div>
            <h2>{element.title}</h2>
            <div>{ReactHtmlParser(element.content)}</div>
          </div>
        ))}
      </div> */}
        <div className="form-wrapper">
          <input
            className="title-input"
            type="text"
            size="120"
            max_length="100"
            placeholder="e.g Is there an R function for finding the index of an element in a vector?"
            onChange={getValue}
            name="title"
          />
          <label class="s-label mb4 d-block" for="wmd-input">
            Body
            <p class="s-description mt2">
              Include all the information someone would need to answer your
              question
            </p>
          </label>

          <CKEditor
            className="editor-container"
            editor={ClassicEditor}
            data="<p></p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setAskContent({
                ...AskContent,
                content: data,
              });
            }}
          />
        </div>

        <label
          for="tag_editor-replacing-tag_names--input"
          class="s-label mb4 d-block flex--item fl1 "
        >
          Tags
          <div class="s-description mt2">
            Add up to 5 tags to describe what your question is about
          </div>
        </label>
        <Tag></Tag>
        <button
          class="flex--item s-btn s-btn__primary s-btn__icon ws-nowrap js-begin-review-button js-gps-track"
          type="button"
          tab_index="120"
          data-gps-track="askpage.review_click"
          onClick={submitReview}
        >
          Review your question
        </button>
      </div>
    </AddAskStyle>
  );
};

export default AddAsk;
