import { Card, Flowbite, Badge, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import photo from "../assets/w1900xh1900-anini-beach-front-home-hawaii-4.jpg";
import {
  customTheme,
  badgeTheme,
  buttonTheme,
} from "../services/customsThemes";
// import { formatDateString } from "../services/formatting";

export default function OfferCard() {
  const navigate = useNavigate();
  const data = {
    id: 1,
    title: "Caritas aegrotatio pecus vero ago.",
    description:
      "Usitas provident aestas denego. Vulticulus volubilis beatus recusandae admoveo. Curia hic considero admoveo tenetur adsidue caput conventus cilicium. Terreo thalassinus crepusculum corroboro. Crapula caelum suadeo cernuus vos voro. Certe voluptas occaecati cernuus suspendo cursim strues casso suffragium. Tergo vociferor adficio considero succedo vitiosus. Corpus decerno doloremque atque inflammatio solium ultra sequi placeat. Solio sophismata carus. Aut abstergo creptio coaegresco aiunt versus.",
    size: 61,
    coordinates: {
      x: 48.873787,
      y: 2.295047,
    },
    city: "Montauban",
    country: "Maldives",
    type: "sell",
    creation_date: "2024-01-31T17:00:04.000Z",
    price: 847496,
    commercial_id: 2,
  };

  // Random color for badges
  const badgesColors = Object.keys(badgeTheme.root.color);
  const buttonColors = Object.keys(buttonTheme.gradientDuoTone);

  return (
    <Flowbite>
      {" "}
      <Card
        theme={{ theme: customTheme }}
        className="max-w-sm m-6"
        renderImage={() => (
          <img width={500} height={500} src={photo} alt="house" />
        )}
      >
        <div className="flex flex-col items-center flex-nowrap">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <button
              type="button"
              onClick={() => navigate(`/annonce/${data.id}`)}
            >
              {data.title}
            </button>
          </h5>
          <p className=" w-full h-fit my-3 font-normal text-gray-700 dark:text-gray-400 truncate">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              theme={badgeTheme}
              color={
                badgesColors[Math.floor(Math.random() * badgesColors.length)]
              }
            >
              {data.type === "rent" ? "Vente" : "Location"}
            </Badge>
            <Badge
              theme={badgeTheme}
              color={
                badgesColors[Math.floor(Math.random() * badgesColors.length)]
              }
            >
              {data.city}
            </Badge>
            <Badge
              theme={badgeTheme}
              color={
                badgesColors[Math.floor(Math.random() * badgesColors.length)]
              }
            >
              {data.country}
            </Badge>
            <Badge
              theme={badgeTheme}
              color={
                badgesColors[Math.floor(Math.random() * badgesColors.length)]
              }
            >
              {data.price}€
            </Badge>
          </div>
          <Button
            className="mt-4"
            onClick={() => navigate(`/annonce/${data.id}`)}
            theme={buttonTheme}
            outline
            size="xs"
            gradientDuoTone={
              buttonColors[Math.floor(Math.random() * buttonColors.length)]
            }
          >
            En savoir plus
          </Button>
        </div>
      </Card>
    </Flowbite>
  );
}
