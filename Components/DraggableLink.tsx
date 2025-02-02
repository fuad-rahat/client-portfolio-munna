"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

interface DraggableLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const DraggableLink: React.FC<DraggableLinkProps> = ({ href, children, ...rest }) => {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const threshold = 5; // Movement in pixels to consider it a drag

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      Math.abs(e.clientX - startX.current) > threshold ||
      Math.abs(e.clientY - startY.current) > threshold
    ) {
      setIsDragging(true);
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    const touch = e.touches[0];
    startX.current = touch.clientX;
    startY.current = touch.clientY;
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLAnchorElement>) => {
    const touch = e.touches[0];
    if (
      Math.abs(touch.clientX - startX.current) > threshold ||
      Math.abs(touch.clientY - startY.current) > threshold
    ) {
      setIsDragging(true);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If a drag occurred, prevent the click navigation
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Link href={href} legacyBehavior>
      <a
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};

export default DraggableLink;
