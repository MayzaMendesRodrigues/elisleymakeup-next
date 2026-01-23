import "./Paragraph.module.css";
type ParagraphVarient = "Brown" | "White";

interface ParagraphProps {
  text: string;
  variant?: ParagraphVarient;
}

export default function Paragraph({ text, variant = "Brown" }: ParagraphProps) {
  return <p className={`paragraph${variant}`}>{text}</p>;
}
