export default function QuantitySelector({
  value,
  onIncrement,
  onDecrement,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="quantity-wrap">
      <button className="quantity-button" onClick={onDecrement}>
        -
      </button>
      {onChange ? (
        <input
          type="number"
          className="item-quantity"
          name="item-quantity"
          value={value}
          min="1"
          onChange={onChange}
        />
      ) : (
        <div className="item-quantity">{value}</div>
      )}
      <button className="quantity-button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

type QuantitySelectorProps = {
  value: number | string;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
