interface MemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
}
export default function Members({
  image,
  name,
  role,
  description,
}: MemberProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={image} alt={name} className="rounded-full size-1/2" />
      <h3 className="font-bold text-2xl uppercase">{name}</h3>
      <h4 className="font-extralight text-2xl italic">{role}</h4>
      <p className="text-sm lg:text-base">{description}</p>
    </div>
  );
}
