import React, { useState, useEffect, useRef } from "react";

type Props = {
  name: string;
  size?: number;
  fill?: string;
  className?: string;
  stroke?: string;
};

const Icon = ({ name, size = 24, fill="none", className, stroke }: Props) => {
  const ImportedIconRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`./${name}.tsx`);
        ImportedIconRef.current = namedImport;
      } catch (err) {
        // throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <ImportedIcon
        className={className}
        fill={fill}
        stroke={stroke}
        size={size}
      />
    );
  }
  return null;
};

export default Icon;
