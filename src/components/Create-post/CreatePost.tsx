import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "store/actions/postActions";
import "./CreatePost.scss";

const CreatePost = () => {
  const categoryRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const coverImageURLRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const contentImageURLRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  const date = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      categoryRef.current!.value &&
      titleRef.current!.value &&
      coverImageURLRef.current!.value &&
      contentRef.current!.value &&
      contentImageURLRef.current!.value &&
      tagsRef.current!.value
    ) {
      dispatch(
        createPost({
          category: categoryRef.current!.value,
          title: titleRef.current!.value,
          coverImageURL: coverImageURLRef.current!.value,
          content: contentRef.current!.value,
          contentImageURL: contentImageURLRef.current!.value,
          tags: [...tagsRef.current!.value.split(",").map((tag) => tag.trim())],
          author: "deneme yazar",
          createdAt: date,
        })
      );
      navigate("/");
    }
  };

  return (
    <form className="form">
      <div className="form__group">
        <label htmlFor="category">Category</label>
        <select
          className="form__select"
          name="category"
          id="category"
          required
          ref={categoryRef}
        >
          <option value="lifestyle">lifestyle</option>
          <option value="fashion">fashion</option>
          <option value="technology">technology</option>
          <option value="travel">travel</option>
          <option value="health">health</option>
        </select>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="title">
          Title
        </label>
        <input
          className="form__input"
          type="text"
          id="title"
          required
          ref={titleRef}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="coverImageUrl">
          Cover Image URL
        </label>
        <input
          className="form__input"
          type="text"
          id="coverImageUrl"
          required
          ref={coverImageURLRef}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="content">
          Content
        </label>
        <textarea
          className="form__textarea"
          id="content"
          required
          ref={contentRef}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="contentImageUrl">
          Content Image URL
        </label>
        <input
          className="form__input"
          type="text"
          id="contentImageUrl"
          required
          ref={contentImageURLRef}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="tags">
          Tags
        </label>
        <input
          className="form__input"
          type="text"
          id="tags"
          required
          ref={tagsRef}
        />
      </div>

      <button className="form__button" onClick={(e: any) => handleSubmit(e)}>
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
