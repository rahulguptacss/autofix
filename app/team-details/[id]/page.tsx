import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import TeamDetailsSection from '@/components/section/TeamDetails/page';
import { Metadata } from 'next';
import data from '@/components/data/data.json';

export const metadata: Metadata = {
  title: "Team Details - AutoFix",
  description: "Learn more about our expert team of mechanics.",
};

export default async function TeamDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const member = data.categories.AutoRepair.templateComponents["template-1"].sections.ourTeam.members.find(
    m => m.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  const breadcrumbData = {
    title: member ? `${member.name} - Team Details` : "Team Details",
    paths: [
      { label: "Home", href: "/" },
      { label: "Team Details" }
    ],
    bgImage: "/img/banner/breadcrumb.png"
  };

  if (!member) {
    return <div className="py-20 text-center text-2xl font-bold">Team member not found</div>;
  }

  return (
    <>
      <BreadcrumbSection data={breadcrumbData} />
      <TeamDetailsSection member={member} />
    </>
  );
}
