'use client';

import { useRef, useState } from 'react';
import { CommentsSection } from '@/components/CommentsSection';
import { LessonEngagementWidget } from '@/components/LessonEngagementWidget';
import { PageFeedback } from '@/components/PageFeedback';

export function TrackEngagementSection({ slug }: { slug: string }) {
  const commentsSectionRef = useRef<HTMLDivElement | null>(null);
  const [commentCount, setCommentCount] = useState(0);

  function scrollToComments() {
    commentsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <aside className="fixed left-4 top-[38rem] z-30 hidden xl:flex">
        <LessonEngagementWidget slug={slug} commentCount={commentCount} onCommentClick={scrollToComments} />
      </aside>
      <section className="px-4 pb-16 sm:px-6 md:px-10 lg:px-16">
        <div className="site-shell card-elevated rounded-[32px] p-6 shadow-xl sm:p-8">
          <PageFeedback slug={slug} />
          <CommentsSection slug={slug} sectionRef={commentsSectionRef} onCountChange={setCommentCount} />
        </div>
      </section>
    </>
  );
}
