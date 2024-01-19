import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
 
 
export default async function Home() {
  const { data } = await fetchData();
 
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Story: {data.story.name}</h1>
      <StoryblokStory story={data.story} />
    </div>
  );
}
 
export async function fetchData() {
  let sbParams = { version: "draft" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache:"no-cache"});
}