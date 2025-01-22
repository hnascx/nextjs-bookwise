import { ExploreContainer } from "@/styles/pages/explore";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";

const ExplorePage: NextPageWithLayout = () => {
  return (
    <ExploreContainer>

    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Explorar">
      {page}
    </DefaultLayout>
  )
}

export default ExplorePage