'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<p className="text-center text-gray-400 mb-4">
					I am just a beginner developer and haven't made major impacts yet, but here are a few things I have done:
				</p>
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Frontend Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Reduced homepage load time by 40% through code optimization</li>
									<li>• Implemented lazy loading for images and components</li>
									<li>• Achieved Lighthouse performance score of 95+</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Bundle & Asset Management</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Reduced bundle size by removing unused dependencies</li>
									<li>• Optimized images and static assets for faster delivery</li>
									<li>• Used code splitting for efficient resource loading</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Automation & Deployment</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Set up automated deployment with GitHub Actions and Vercel</li>
									<li>• Implemented environment-based configuration for dev/prod</li>
									<li>• Added error monitoring and logging (Sentry)</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cloud & Hosting</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Deployed projects to cloud platforms (Vercel/Netlify)</li>
									<li>• Configured custom domains and SSL certificates</li>
									<li>• Set up continuous integration for all main branches</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Development & Collaboration</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Code Quality</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Refactored legacy code to modern React/TypeScript</li>
									<li>• Wrote unit and integration tests to increase reliability</li>
									<li>• Documented project setup and usage for easier onboarding</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Teamwork & Open Source</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Collaborated with designers and open-source contributors</li>
									<li>• Participated in code reviews and pull requests</li>
									<li>• Explored new technologies and shared learnings</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
