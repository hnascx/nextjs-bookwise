import { BookCard } from "../BookCard"
import { Text } from "../Typography"
import { Link } from "../ui/Link"
import { Container } from "./styles"

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard key={`popular-${index}`} book={{
            author: "J.K. Rowling",
            avgRating: 4,
            cover_url: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
            created_at: new Date(),
            id: "",
            name: "Harry Potter e a Pedra Filosofal",
            summary: "Harry Potter é um menino órfão que vive infeliz com seus tios, os Dursley.",
            total_pages: 223,
          }} />
        ))}
      </section>
    </Container>
  )
}