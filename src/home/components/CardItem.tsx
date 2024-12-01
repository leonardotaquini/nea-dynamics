import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/ui/card";

interface CardItemProps {
  title: string;
  content: string;
  image: string;
  end?: boolean;
}

export const CardItem = ({ title, content, image, end }: CardItemProps) => {
  return (
    <Card className="grid grid-cols-12 col-span-12 sm:w-3/4">
      <div
        className={`col-span-12 sm:col-span-6 ${
          end ? "sm:order-2" : "sm:order-1 "
        }`}
      >
        <img src={image} className="h-full object-cover" />
      </div>
      <div
        className={`col-span-12 sm:col-span-6 ${
          end ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <CardHeader>
          <CardTitle className="text-center text-2xl font-mono text-white rounded p-3" style={{backgroundColor:'#243579'}}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className=" text-justify text-slate-500 h-full xl:text-lg" style={{lineHeight:'45px'}}>
          <p>{content}</p>
        </CardContent>
      </div>
    </Card>
  );
};
