import React, { useRef, useEffect, useState, useMemo } from 'react';
import BoxComponent from './BoxComponent';

const BoxList = ({ count }) => {
  const wrapperRef = useRef(null);
  const boxRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(1);

  // 1) Build first `count` Fibonacci numbers
  const fibs = useMemo(() => {
    const seq = [];
    for (let i = 0; i < count; i++) {
      seq.push(i < 2 ? 1 : seq[i - 1] + seq[i - 2]);
    }
    return seq;
  }, [count]);

  // whenever `count` changes, reset our refs array
  useEffect(() => {
    boxRefs.current = [];
  }, [count]);

  // 2) Set up IntersectionObserver on mount + when fibs change
  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if 50% of this box is visible in the container…
          if (entry.intersectionRatio >= 0.5) {
            const pos = Number(entry.target.dataset.pos);
            setActiveIndex(pos);
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    boxRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [fibs]);

  return (
    <div
      ref={wrapperRef}
      className="flex overflow-x-auto py-4 px-2 border-t"
    >
      {fibs.map((num, idx) => (
        <BoxComponent
          key={idx}
          value={num}
          pos={idx + 1}
          isActive={activeIndex === idx + 1}
          ref={(el) => (boxRefs.current[idx] = el)}
        />
      ))}
    </div>
  );
};

export default BoxList;
