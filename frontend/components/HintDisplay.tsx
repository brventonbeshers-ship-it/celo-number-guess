"use client";
export default function HintDisplay({ distance }: { distance: number }) {
  if (distance === 0) return <div className="text-green-400 font-bold">Exact match!</div>;
  if (distance <= 3) return <div className="hot-indicator font-bold">Very hot! Distance: {distance}</div>;
  if (distance <= 10) return <div className="text-orange-400">Getting warm... Distance: {distance}</div>;
  return <div className="cold-indicator">Cold. Distance: {distance}</div>;
}
