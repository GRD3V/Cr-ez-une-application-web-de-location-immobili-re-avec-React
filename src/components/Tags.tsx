import "../styles/components/tag.scss";
export default function Tag(props: { readonly title: string }) {
  return (
    <div className="tag-container">
      <div className="tag-content">
        <p>{props.title}</p>
      </div>
    </div>
  );
}
