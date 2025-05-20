'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
					<div className="relative z-10">
						<div className="flex items-center gap-2 mb-6">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<div className="font-mono">
							<p className="text-green-500 mb-2">$ contact --info</p>
							<h2 className="text-3xl font-bold mb-8 text-gray-200">Let&apos;s Connect</h2>
							<p className="text-green-500 mb-2">$ location --current</p>
							<div className="flex items-center gap-2 text-gray-300">
								<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>Punjab, India</span>
							</div>
							<p className="text-green-500 mt-8 mb-2">$ contact --email</p>
							<motion.a
								href="mailto:dhamiputtar2009@gmail.com"
								whileHover={{ scale: 1.05 }}
								className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
							>
								<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
									<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z" />
									</svg>
								</div>
								<div>
									<p className="font-semibold text-gray-200">Email</p>
									<p className="text-sm text-gray-400">dhamiputtar2009@gmail.com</p>
								</div>
							</motion.a>
							<div className="flex items-center gap-2 text-gray-300 mt-4">
								<motion.a
									href="https://discord.com/users/sehajdhami"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 00-.0406.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.1057.0277c1.9516-.6066 3.94-1.5218 5.9928-3.0294a.0824.0824 0 00.0312-.0561C23.319 13.5799 22.467 9.0458 20.317 4.3698z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">Discord</p>
										<p className="text-sm text-gray-400">@sehajdhami</p>
									</div>
								</motion.a>
								<motion.a
									href="https://t.me/sehajdhami"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm4.93 7.36l-1.43 6.77c-.11.5-.4.62-.81.39l-2.25-1.66-1.09 1.05c-.12.12-.23.23-.47.23l.17-2.39 4.35-3.93c.19-.17-.04-.27-.29-.1l-5.38 3.39-2.32-.73c-.5-.16-.51-.5.1-.73l9.06-3.5c.42-.16.79.1.65.7z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">Telegram</p>
										<p className="text-sm text-gray-400">@sehajdhami</p>
									</div>
								</motion.a>
								<motion.a
									href="https://twitter.com/thedhamibro"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">X</p>
										<p className="text-sm text-gray-400">@thedhamibro</p>
									</div>
								</motion.a>
								<motion.a
									href="https://www.reddit.com/user/dhami2009"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<g>
												<circle cx="12" cy="12" r="10" fill="currentColor" />
												<ellipse cx="8.5" cy="13.5" rx="1.5" ry="1" fill="#fff"/>
												<ellipse cx="15.5" cy="13.5" rx="1.5" ry="1" fill="#fff"/>
												<circle cx="12" cy="15" r="2" fill="#fff"/>
												<circle cx="12" cy="15.5" r="1" fill="currentColor"/>
												<circle cx="16.5" cy="8.5" r="1" fill="#fff"/>
												<rect x="11" y="6" width="2" height="5" rx="1" fill="#fff"/>
											</g>
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">Reddit</p>
										<p className="text-sm text-gray-400">u/dhami2009</p>
									</div>
								</motion.a>
							</div>
						</div>
					</div>
                </motion.div>
            </div>
        </section>
    );
}
