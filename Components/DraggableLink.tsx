"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

const DraggableLink = ({ href, children, ...rest }) => {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const threshold = 5; // Movement in pixels to consider it a drag

  // Mouse events
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (
      Math.abs(e.clientX - startX.current) > threshold ||
      Math.abs(e.clientY - startY.current) > threshold
    ) {
      setIsDragging(true);
    }
  };

  // Touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startX.current = touch.clientX;
    startY.current = touch.clientY;
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    if (
      Math.abs(touch.clientX - startX.current) > threshold ||
      Math.abs(touch.clientY - startY.current) > threshold
    ) {
      setIsDragging(true);
    }
  };

  const handleClick = (e) => {
    // If a drag occurred, prevent the click navigation
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    // Using legacyBehavior so that we can attach the event handlers to an <a> element
    <Link href={href} legacyBehavior {...rest}>
      <a
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {children}
      </a>
    </Link>
  );
};

export default DraggableLink;
