import styles from "./QuantitySelector.module.css";

export default function QuantitySelector({
  value,
  onIncrement,
  onDecrement,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className={styles.wrap}>
      <button
        className={styles.button}
        onClick={onDecrement}
        aria-label="Decrease quantity"
      >
        -
      </button>
      {onChange ? (
        <input
          type="number"
          className={styles.itemQuantity}
          name="item-quantity"
          value={value}
          min="1"
          onChange={onChange}
        />
      ) : (
        <div className={styles.itemQuantity}>{value}</div>
      )}
      <button
        className={styles.button}
        onClick={onIncrement}
        aria-label="Increase quantity"
      >
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
