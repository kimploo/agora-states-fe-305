import { useState } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`

  margin: 2rem 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 40px;
  width: 100%;
  padding: 0 8px;
  border: 1px solid hsl(206deg 47% 42%);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: hsl(205deg 47% 42%);
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: hsl(202deg 46% 92%);
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: hsl(205deg 47% 42%);
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid hsl(205deg 46% 92%);
  }
`;

export const Tag = () => {
  const initialTags = [];

  const [text, setText] = useState("");
  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    //태그를 삭제
    setTags(
      tags.filter((el) => {
        return el !== tags[indexToRemove];
      })
    );
  };

  const addTags = (event) => {
    //tags 배열에 새로운 태그를 추가
    let value = event.target.value;
    if (tags.includes(value) === false) {
      if (event.key === "Enter" && value.length > 1) {
        let newStr = value;
        setTags([...tags, newStr]);
        setText("");
      }
    }
  };

  return (
    <>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x{/*삭제 아이콘을 click 했을 때 removeTags 실행 */}
              </span>
            </li>
          ))}
        </ul>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="tag-input"
          type="text"
          onKeyUp={(e) => {
            {
              addTags(e);
            }
          }}
          /* 키보드의 Enter 키에 의해 addTags 실행 */

          placeholder="e.g (ruby-on-rails .net sql-server)"
        />
      </TagsInput>
    </>
  );
};

export default Tag;
