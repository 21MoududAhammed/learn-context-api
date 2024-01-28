import Heading from "./Heading";
import Section from "./Section";
import RecentPosts from './RecentPost';

export default function AllPosts() {
    return (
      <Section>
        <Heading>Posts</Heading>
        <RecentPosts />
      </Section>
    );
  }