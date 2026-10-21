import { pgTable, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { user } from './auth.schema';

export const task = pgTable('task', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});

export const article = pgTable('article', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	userId: text('user_id').references(() => user.id)
});

export const articleRelations = relations(article, ({ one }) => ({
	user: one(user, {
		fields: [article.userId],
		references: [user.id]
	})
}));

export * from './auth.schema';
