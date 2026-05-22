import React, { useEffect, useRef, useState } from "react";

interface Props {
  code: string;
}

const MermaidDiagram: React.FC<Props> = ({ code }) => {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!code || !ref.current) return;

    const renderMermaid = async () => {
      try {
        const mermaidModule = await import("mermaid");
        const mermaid = mermaidModule.default;

        const { svg: renderedSvg } = await mermaid.render(
          `mermaid-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
          code,
        );
        setSvg(renderedSvg);
        setError(null);
      } catch (err: any) {
        console.error("Mermaid rendering error:", err);
        setError(err.message || "Mermaid render error");
      }
    };

    renderMermaid();
  }, [code]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(0.5, prev + delta), 3));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  if (error) {
    return (
      <div className="mermaid-diagram my-6 overflow-x-auto rounded-xl bg-red-100 p-4 text-red-700">
        <p>
          <strong>Mermaid render error:</strong> {error}
        </p>
        <pre className="text-xs mt-2 bg-red-200 p-2 rounded">{code}</pre>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mermaid-diagram my-6 overflow-hidden rounded-xl bg-slate-900 p-4 relative"
      onWheel={handleWheel}
    >
      <div
        ref={svgRef}
        className="cursor-move"
        onMouseDown={handleMouseDown}
        style={{
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          transformOrigin: "0 0",
          transition: isDragging ? "none" : "transform 0.1s ease",
        }}
        dangerouslySetInnerHTML={{ __html: svg || "" }}
      />
      {/* Кнопки керування */}
      <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
        <button
          onClick={zoomIn}
          className="bg-slate-700 hover:bg-slate-600 text-white p-1.5 rounded text-xs font-bold transition"
          aria-label="Збільшити"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="bg-slate-700 hover:bg-slate-600 text-white p-1.5 rounded text-xs font-bold transition"
          aria-label="Зменшити"
        >
          -
        </button>
        <button
          onClick={resetView}
          className="bg-slate-700 hover:bg-slate-600 text-white p-1.5 rounded text-xs transition"
          aria-label="Скинути до початкового вигляду"
        >
          ↻
        </button>
      </div>
      {/* Відображення масштабу */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        Scale: {(scale * 100).toFixed(0)}%
      </div>
    </div>
  );
};

export default MermaidDiagram;
