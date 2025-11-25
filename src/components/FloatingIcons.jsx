// src/components/FloatingIcons.jsx
import { Code2, Sparkles, Globe2, MousePointer2 } from "lucide-react";
import "../styles/global.css";

function FloatingIcons() {
  return (
    <div className="floating-icons">
      {/* Icon 1 */}
      <div className="floating-icon icon-1">
        <Code2 size={22} />
      </div>

      {/* Icon 2 */}
      <div className="floating-icon icon-2">
        <Sparkles size={20} />
      </div>

      {/* Icon 3 */}
      <div className="floating-icon icon-3">
        <Globe2 size={22} />
      </div>

      {/* Icon 4 */}
      <div className="floating-icon icon-4">
        <MousePointer2 size={20} />
      </div>
    </div>
  );
}

export default FloatingIcons;
