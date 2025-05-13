interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
}

export default function Card({ title, subtitle, description }: CardProps) {
  return (
    <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 hover:shadow-yellow-400/20 transition">
      <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      <p className="mt-2 text-sm text-slate-200">{description}</p>
    </div>
  );
}
