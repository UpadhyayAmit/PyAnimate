import { jsonb, pgTable, serial, text, timestamp, varchar, integer, unique } from 'drizzle-orm/pg-core';

// Reactions on a lesson/track page
export const reactions = pgTable(
  'reactions',
  {
    id: serial('id').primaryKey(),
    pageSlug: varchar('page_slug', { length: 100 }).notNull(),
    userId: varchar('user_id', { length: 255 }).notNull(),
    emoji: varchar('emoji', { length: 10 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (t) => [unique('reactions_user_page_emoji').on(t.pageSlug, t.userId, t.emoji)],
);

// Page helpful / not-helpful feedback
export const pageFeedback = pgTable(
  'page_feedback',
  {
    id: serial('id').primaryKey(),
    pageSlug: varchar('page_slug', { length: 100 }).notNull(),
    userId: varchar('user_id', { length: 255 }).notNull(),
    vote: integer('vote').notNull(), // 1 = helpful, -1 = not helpful
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (t) => [unique('feedback_user_page').on(t.pageSlug, t.userId)],
);

// Comments on a page
export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  pageSlug: varchar('page_slug', { length: 100 }).notNull(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  userName: varchar('user_name', { length: 255 }).notNull(),
  userAvatar: text('user_avatar'),
  body: text('body').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const userProgress = pgTable('user_progress', {
  userId: varchar('user_id', { length: 255 }).primaryKey(),
  completedLessons: jsonb('completed_lessons').$type<string[]>().default([]).notNull(),
  completedSteps: jsonb('completed_steps').$type<string[]>().default([]).notNull(),
  completedChallenges: jsonb('completed_challenges').$type<string[]>().default([]).notNull(),
  totalXp: integer('total_xp').default(0).notNull(),
  streak: integer('streak').default(0).notNull(),
  lastActiveDate: varchar('last_active_date', { length: 64 }),
  lastLessonId: varchar('last_lesson_id', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
