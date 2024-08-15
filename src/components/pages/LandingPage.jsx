import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import List from "../layouts/List";
import Profile from "../layouts/Profile";
import Search from "../layouts/Search";
import PageWrapper from "./PageWrapper";

export default function LandingPage() {
 return (
  <PageWrapper>
   <Header />
   <Hero />
   <Search />
   <List />
   <Profile />
  </PageWrapper>
 );
}
