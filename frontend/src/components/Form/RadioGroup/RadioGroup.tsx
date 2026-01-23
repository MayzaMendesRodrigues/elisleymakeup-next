"use client";

import styles from "./RadioGroup.module.css";

interface RadioGroupProps {
  title: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function RadioGroup({
  title,
  name,
  options,
  value,
  onChange,
  error,
}: RadioGroupProps) {
  return (
    <div className={styles.contactPreference}>
      <p>{title}</p>

      <div className={styles.options}>
        {options.map((opt) => (
          <label key={opt}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
            />
            {opt}
          </label>
        ))}
      </div>

      {error && <span>{error}</span>}
    </div>
  );
}
