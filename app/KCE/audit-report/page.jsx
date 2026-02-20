import AuditReportPage from '@/components/00-Kahe/DirectPageComponent/auditReport';
import NonStatutoryCommitteespage from '@/components/00-Kahe/DirectPageComponent/NonStatutoryCommitteespage';
import StatutoryCommitteespage from '@/components/00-Kahe/DirectPageComponent/StatutoryCommitteespage';
import UnderTakingPage from '@/components/00-Kahe/DirectPageComponent/undertaking';
import LibraryPage from '@/components/00-KCE/Campus/LibraryPage';
import MandatoryDisclosurePage from '@/components/00-KCE/DirectComponents/MandatoryDisclosure';
import React from 'react'

export const metadata = {
  title: "Best college for Engineering In Tamilnadu - KCE",
  description:
    "Unlock your potential in Engineering at KCE, the leading Engineering college in Tamilnadu, providing a nurturing environment for academic and personal growth.",
};

const page = () => {
  return (
    <AuditReportPage/>
  )
}

export default page