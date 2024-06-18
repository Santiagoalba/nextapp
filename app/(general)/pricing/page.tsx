import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 authors: [{name: 'Santiago'}],
};

function PricingPage() {
  return (
    <>
        <span className="text-7xl"> Pricing Page </span>
    </>
  )
}

export default PricingPage;
