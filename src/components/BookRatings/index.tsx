import { Text } from "../Typography"
import { Link } from "../ui/Link"
import { UserRatingCard } from "../UserRatingCard"
import { Container } from "./styles"

export const BookRatings = () => {
  const handleRate = () => {
    console.log('Avaliar')
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar"  />
      </header>

      <section>
        {Array.from({ length: 10 }).map((_, index) => (
          <UserRatingCard key={index} rating={{
            rate: 2,
            user: {
              name: "John Doe",
              avatar_url: "https://github.com/hnascx.png"
            },
            created_at: new Date(),
            description: "Lorem ipsum dolor sit amet."
          }} />
        ))}
      </section>
    </Container>
  )
}