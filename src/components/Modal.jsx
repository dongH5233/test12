export default function Modal({ item, closeModal, titleNum }) {
  return (
    <div className="modal">
      <p>{item[titleNum]}</p>
      <button onclick={closeModal}>닫기</button>
    </div>
  );
}
