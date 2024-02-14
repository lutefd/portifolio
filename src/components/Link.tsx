import { cn } from '@/lib/utils';
import { useMemo } from 'react';

interface LinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

const Link = ({ href, children, className }: LinkProps) => {
	const isExternal = useMemo(() => {
		return href.startsWith('http');
	}, [href]);
	return (
		<a
			href={href}
			target={isExternal ? '_blank' : '_self'}
			rel={isExternal ? 'noopener noreferrer' : ''}
			className={cn(
				className,
				'underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-6 hover:decoration-neutral-500 truncate'
			)}
		>
			{children}
		</a>
	);
};

export default Link;
