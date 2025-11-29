// src/components/BackgroundImage.tsx

interface BackgroundImageProps {
  image: string;
  children: React.ReactNode;
  className?: string;
}

export default function BackgroundImage({ image, children, className = "" }: BackgroundImageProps) {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}