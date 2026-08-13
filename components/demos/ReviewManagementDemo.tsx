"use client";
import { Star, MessageSquareText, Send } from "lucide-react";
import TerminalPanel from "./shared/TerminalPanel";
import ActivityFeed, { type ActivityItem } from "./shared/ActivityFeed";
import AnimatedMetricCounter from "./shared/AnimatedMetricCounter";
import DataChart from "./shared/DataChart";

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5 text-[var(--color-copper-light)]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={12} fill={i < count ? "currentColor" : "none"} strokeWidth={1.5} />
      ))}
    </span>
  );
}

const initialReviews: ActivityItem[] = [
  { id: "r1", primary: "★★★★★ “Fast, professional, and fairly priced.”", secondary: "Dana K. · Google review", time: "1 hr ago", status: "online", statusLabel: "POSTED" },
  { id: "r2", primary: "★★★★★ “On time and explained everything clearly.”", secondary: "Ray O. · Google review", time: "5 hr ago", status: "online", statusLabel: "POSTED" },
  { id: "r3", primary: "Review request sent after job completion", secondary: "Priya S. · SMS + email", time: "1 day ago", status: "processing", statusLabel: "SENT" },
];

const reviewPool: Omit<ActivityItem, "id" | "time">[] = [
  { primary: "★★★★★ “Best plumber we've used in this town.”", secondary: "New Google review", status: "online", statusLabel: "POSTED" },
  { primary: "Review request sent after job completion", secondary: "SMS + email automation", status: "processing", statusLabel: "SENT" },
  { primary: "★★★★★ “Showed up early, fixed it in 20 minutes.”", secondary: "New Google review", status: "online", statusLabel: "POSTED" },
  { primary: "Customer tapped review link", secondary: "Redirected to Google", status: "processing", statusLabel: "CLICKED" },
];

const feedbackQueue = [
  { name: "Wendy A.", rating: 5, note: "Great communication throughout the job." },
  { name: "Carlos M.", rating: 4, note: "Good work, arrived a bit later than scheduled." },
  { name: "Trent B.", rating: 5, note: "Already recommended to two neighbors." },
];

export default function ReviewManagementDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-4 text-center">
          <div className="text-3xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={4.9} decimals={1} /></div>
          <Stars count={5} />
          <div className="mono-label mt-1">Average rating</div>
        </div>
        <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-4 text-center">
          <div className="text-3xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={212} /></div>
          <div className="mono-label mt-1">Total reviews</div>
        </div>
        <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-4 text-center">
          <div className="text-3xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={94} suffix="%" /></div>
          <div className="mono-label mt-1">Requests → reviews</div>
        </div>
      </div>

      <TerminalPanel title="tradeos://review-collection" status="online" statusLabel="AUTO-COLLECTING" bodyClassName="p-5">
        <ActivityFeed items={initialReviews} pool={reviewPool} live intervalMs={5500} maxVisible={6} />
      </TerminalPanel>

      <TerminalPanel title="tradeos://review-growth" status="online" statusLabel="+18 THIS MONTH" bodyClassName="p-5">
        <div className="flex items-center gap-2 mb-3 text-xs text-[var(--color-forge-muted)]">
          <Star size={14} className="text-[var(--color-copper)]" /> Google reviews — last 6 months
        </div>
        <DataChart data={[42, 58, 79, 110, 156, 212]} labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} type="bar" color="var(--color-system-green)" />
      </TerminalPanel>

      <TerminalPanel title="tradeos://feedback-queue" status="processing" statusLabel="3 PENDING" bodyClassName="p-5">
        <div className="flex flex-col gap-2">
          {feedbackQueue.map((f) => (
            <div key={f.name} className="flex items-start gap-3 border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm px-3 py-2.5">
              <div className="w-7 h-7 rounded-full bg-[var(--color-copper)] text-[var(--color-forge-black)] flex items-center justify-center text-[10px] font-bold shrink-0">
                {f.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm text-[var(--color-bone)]">{f.name}</span>
                  <Stars count={f.rating} />
                </div>
                <p className="text-xs text-[var(--color-forge-muted)] mt-0.5">{f.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-5 text-xs text-[var(--color-forge-rust)] font-mono">
          <MessageSquareText size={13} /> Auto-replies drafted for every review — you just approve and send.
        </div>
        <a href="/contact" className="btn-outline text-sm w-full justify-center mt-4">
          <Send size={14} /> Automate my reviews
        </a>
      </TerminalPanel>
    </div>
  );
}
