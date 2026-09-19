import React from "react";
import { Star } from "lucide-react";
import { MVP_REPO_URL, REPO_URL } from "@/lib/site";

const style: React.CSSProperties = { backgroundColor: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.25)", padding: "0.75rem 1.25rem" };

/** Links to the two real repositories. */
export default function StarButtons() {
  return (
    <>
      <a href={REPO_URL} target="_blank" rel="noopener" className="btn-secondary" style={style} aria-label="Star roi-calculator on GitHub">
        <Star size={16} fill="#ff8b1a" color="#ff8b1a" />
        <span>Star roi-calculator</span>
      </a>
      <a href={MVP_REPO_URL} target="_blank" rel="noopener" className="btn-secondary" style={style} aria-label="Star mvp-calculator on GitHub">
        <Star size={16} fill="#ff8b1a" color="#ff8b1a" />
        <span>Star mvp-calculator</span>
      </a>
    </>
  );
}
