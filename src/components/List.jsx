export default function List({ list, i, openModal, delItem }) {
  return (
    <li className="list">
      <p
        onClick={() => {
          openModal(i);
        }}
      >
        {i + 1} - {list}
      </p>
      <i className="fa-regular fa-trash-can" onclick={delItem(i)}></i>
    </li>
  );
}
