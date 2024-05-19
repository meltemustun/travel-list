function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <div>
      <li>
        <input type="checkbox" onChange={() => onToggleItems(item.id)}></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default Item;
