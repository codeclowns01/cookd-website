import type { Metadata } from "next";
import Masthead from "@/components/profile/Masthead";
import GetCookdCta from "@/components/profile/GetCookdCta";
import NoFile from "@/components/profile/NoFile";
import RapSheet from "@/components/profile/RapSheet";
import { getRapSheet } from "@/lib/rapsheet";

type Props = { params: Promise<{ uid: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { uid } = await params;
  const result = await getRapSheet(uid);

  if (result.status !== "ok") {
    const title = "No such file · cookd";
    const description = "No record found on cookd.lol.";
    return {
      title,
      description,
      openGraph: { title, description, type: "profile" },
      twitter: { card: "summary_large_image", title, description },
    };
  }

  const { handle, persona } = result.data;
  const title = `@${handle} on cookd`;
  const description = persona;

  return {
    title,
    description,
    openGraph: { title, description, type: "profile" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PublicProfilePage({ params }: Props) {
  const { uid } = await params;
  const result = await getRapSheet(uid);

  return (
    <div className="min-h-screen bg-bg">
      <Masthead />
      {result.status === "ok" ? <RapSheet data={result.data} /> : <NoFile />}
      <GetCookdCta />
    </div>
  );
}
