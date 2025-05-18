'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Todo App',
							description: 'A full-stack todo application with user authentication(WIP), real-time updates, and persistent storage.',
							details: [
								'Built with React, Node.js, and MongoDB',
								'Implements JWT-based authentication and user sessions',
								'Real-time task updates using Socket.io',
								'Features responsive UI and drag-and-drop task management',
							],
							tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
							link: '/todo',
						},
						{
							title: 'Platformer Game',
							description: 'A browser-based 2D platformer game engine built in Godot using GDScript, featuring custom physics and a level editor.',
							details: [
								'Created with Godot Engine and GDScript',
								'Custom collision detection and physics engine',
								'Includes a built-in level editor for custom maps',
								'Optimized for smooth gameplay and cross-platform support',
							],
							tech: ['Godot', 'GDScript', 'Game Physics', 'Level Editor'],
							link: 'https://thedhamibro.itch.io/medieval-souls',
						},
						{
							title: 'AI Chatbot Assistant (WIP)',
							description: 'An intelligent chatbot assistant for websites, capable of answering FAQs and providing personalized recommendations.',
							details: [
								'Integrates with OpenAI API for natural language understanding',
								'Customizable conversation flows and context retention',
								'Planned support for voice input and multi-language',
								'Admin dashboard for analytics and training data',
							],
							tech: ['React', 'Node.js', 'OpenAI API', 'TypeScript'],
						},
						{
							title: 'Personal Finance Tracker (WIP)',
							description: 'A web app to track expenses, set budgets, and visualize financial health with interactive charts.',
							details: [
								'Expense and income tracking with category breakdowns',
								'Budget planning and alerts for overspending',
								'Interactive charts and monthly reports',
								'Planned mobile app integration',
							],
							tech: ['Next.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
						},
						{
							title: 'Recipe Sharing Platform (WIP)',
							description: 'A social platform for sharing, rating, and discovering recipes from around the world.',
							details: [
								'User profiles and recipe collections',
								'Rating, commenting, and bookmarking features',
								'Advanced search and filtering by ingredients',
								'Planned meal planner and shopping list generator',
							],
							tech: ['React', 'Firebase', 'Material UI'],
						},
						{
							title: 'Portfolio Analytics Dashboard (WIP)',
							description: 'A dashboard to monitor portfolio site traffic, user engagement, and project popularity in real time.',
							details: [
								'Real-time analytics with charts and heatmaps',
								'User session tracking and engagement metrics',
								'Customizable reports and export options',
								'Planned integration with Google Analytics and custom events',
							],
							tech: ['Next.js', 'Recharts', 'Supabase', 'TypeScript'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">
								<a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">{project.title}</a>
							</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
