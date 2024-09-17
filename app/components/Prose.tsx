export function Prose({ children }: { children: React.ReactNode }) {
	return (
		<div className="prose prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-h1:mb-4 prose-h1:text-3xl prose-h1:font-bold prose-h2:mb-2 prose-h2:mt-6 prose-h2:text-2xl prose-h2:font-bold prose-h3:mt-4 prose-h3:font-bold prose-p:mb-1 prose-p:mt-2 prose-a:font-medium prose-a:text-blue-500 prose-a:underline prose-a:decoration-blue-300 prose-a:decoration-2 prose-a:underline-offset-2 prose-blockquote:-rotate-[0.5deg] prose-blockquote:rounded prose-blockquote:border prose-blockquote:border-l-4 prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:text-zinc-500 prose-strong:font-bold prose-li:my-0 prose-img:mx-auto prose-img:rounded-md prose-inline-code:rounded prose-inline-code:border prose-inline-code:bg-gray-100 prose-inline-code:px-1 prose-inline-code:py-1 prose-inline-code:font-normal prose-inline-code:text-gray-500 prose-inline-code:before:content-[''] prose-inline-code:after:content-['']">
			{children}
		</div>
	);
}
