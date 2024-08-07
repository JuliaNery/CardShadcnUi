import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <div className="flex ">
            <Image src={"/perfil.png"} alt="foto perfil" width={40} height={40}></Image>
            <h1 className="pl-4 pt-2 font-bold ">@rebecaandrade</h1>
          </div>
        </CardHeader>
        <CardContent>
          <p>Maior medalhista olímpica da história do Brasil </p>
        </CardContent>
        <CardFooter>
          <Image src={"/image.png"} alt="calendario" width={15} height={15}></Image><p className="pl-2 text-sm text-gray-500">Joined December 2020</p>
        </CardFooter>
      </Card>
    </main>
  );
}
