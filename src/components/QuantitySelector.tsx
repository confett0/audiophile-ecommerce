export default function QuantitySelector({
  value,
  onIncrement,
  onDecrement,
  handleChange,
}: QuantitySelectorProps) {
  return (
    <div className="quantity-wrap">
      <button className="quantity-button" onClick={onDecrement}>
        -
      </button>
      {handleChange ? (
        <input
          type="number"
          className="item-quantity"
          name="item-quantity"
          value={value}
          min="1"
          onChange={handleChange}
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
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
