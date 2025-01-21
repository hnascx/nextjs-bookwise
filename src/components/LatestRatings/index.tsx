import { ChartLineUp } from "@phosphor-icons/react"
import { PageTitle } from "../ui/PageTitle"
import { Container } from "./styles"
import { Text } from "../Typography"
import { RatingCard } from "../RatingCard"

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle title="Início" icon={<ChartLineUp size={32} />} css={{ marginBottom: 40 }}/> 

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard key={i} rating={{
            id: "uno",
            rate: 4,
            user: {
              name: "John Doe",
              avatar_url: "https://avatars.githubusercontent.com/u/108071236?s=400&u=27b8e9a1adef8ac514e97a379283bef830c4ef55&v=4",
              email: "johndoe@does.com",
              id: "qqeafl",
              created_at: new Date(),
            },
            book: {
              author: "J.K. Rowling",
              cover_url: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
              id: "qweqwe",
              name: "Harry Potter e a Pedra Filosofal",
              summary: "Harry Potter é um menino órfão que vive infeliz com seus tios, os Dursley. Em seu aniversário de 11 anos, ele descobre que é um bruxo e que possui um lugar na Escola de Magia e Bruxaria de Hogwarts. Lá, ele encontra seus verdadeiros amigos e vive grandes aventuras.",
              total_pages: 100,
            },
            created_at: new Date(),
          }}/>
        ))}
      </section>
    </Container>
  )
}