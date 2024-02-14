import Link from './Link';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './tooltip';

interface Project {
	name: string;
	repository: string;
	description: string;
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={150}>
				<TooltipTrigger asChild>
					<div className="flex flex-col h-auto w-full md:w-[21ch] group border-[1px] border-transparent hover:border-primary/20 p-2 rounded-[4px]">
						<Link
							href={new URL(
								project.repository,
								'https://github.com'
							).toString()}
						>
							<span className="font-medium text-center truncate">
								{project.name}
							</span>
						</Link>
						<span className="pt-1 text-xs truncate text-primary/50 group-hover:text-primary">
							{project.description}
						</span>
					</div>
				</TooltipTrigger>
				<TooltipContent sideOffset={8} side="top">
					<p className="text-xs text-primary-foreground">
						{project.description}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

export default ProjectCard;
