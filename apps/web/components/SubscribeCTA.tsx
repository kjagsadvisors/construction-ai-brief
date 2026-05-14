import { SignupForm } from "./SignupForm";

export function SubscribeCTA() {
  return (
    <aside className="max-w-prose mx-auto mt-16 border-2 border-ink bg-paperLite">
      <div className="border-b-2 border-ink px-6 py-3 flex items-center justify-between gap-3">
        <div className="meta-strong">Get this in your inbox</div>
        <div className="meta text-graphite">3× a week · free</div>
      </div>
      <div className="p-6 md:p-8">
        <p className="font-body text-xl md:text-2xl text-ink mb-6 text-pretty max-w-[52ch]">
          Construction AI Brief — tool teardowns, playbooks, and the week's
          AI news through a contractor's lens. Read in five minutes over coffee.
        </p>
        <SignupForm />
      </div>
    </aside>
  );
}
