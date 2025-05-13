import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

export default function Button({ children, variant = 'default', className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'px-5 py-2 rounded-lg text-sm font-semibold transition-colors',
        variant === 'default' && 'bg-yellow-400 text-black hover:bg-yellow-300',
        variant === 'outline' && 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black',
        variant === 'ghost' && 'text-yellow-400 hover:underline',
        className
      )}
    >
      {children}
    </button>
  );
}
