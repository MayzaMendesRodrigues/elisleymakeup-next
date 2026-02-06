"use client";

import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}

export default function FormField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  textarea = false,
}: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label>{label}</label>

      {textarea ? (
        <textarea
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          className={error ? styles.errorInput : ""}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={error ? styles.errorInput : ""}
        />
      )}

      {error && <span>{error}</span>}
    </div>
  );
}
