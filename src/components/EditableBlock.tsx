import React from 'react';

interface EditableBlockProps {
  id?: string;
  initialText: string;
  theme?: 'light' | 'dark';
  textClassName?: string;
  placeholder?: string;
  onSave?: (text: string) => void;
  onDelete?: () => void;
  isNew?: boolean;
}

export const EditableBlock: React.FC<EditableBlockProps> = ({
  initialText,
  theme = 'light',
  textClassName,
}) => {
  const isDark = theme === 'dark';

  // Split text by double newlines into clean paragraph blocks
  const paragraphs = initialText.split('\n\n').filter((p) => p.trim().length > 0);

  return (
    <div
      className={`space-y-4 text-[17px] sm:text-[18px] leading-[1.8] font-sans ${
        textClassName || (isDark ? 'text-slate-200' : 'text-[#374151]')
      }`}
    >
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
