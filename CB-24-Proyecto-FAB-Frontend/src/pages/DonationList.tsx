import DonationListComponent from "../components/donationComponent/DonationListComponent";
export default function Donation() {
  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <DonationListComponent/>
          </div>
        </main>
      </div>
    </>
  );
}
