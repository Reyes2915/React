


interface Props{
    title:string;
    description?:string;
}
export const CustomHeader = ({title,description}:Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
