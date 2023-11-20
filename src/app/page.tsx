import { getAdverts, getRegions } from "../../api/api";
import Home from "@/components/Home/Home";
import {cookies} from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: { region_id: string; input: string };
}) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken");
  const regions = await getRegions();
  const data = await getAdverts(searchParams.input, searchParams.region_id, authToken?.value || '');

  return <Home regions={regions} data={data} />;
}
