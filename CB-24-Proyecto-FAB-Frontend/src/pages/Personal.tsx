import PersonalListComponent from "../components/personalComponents/PersonalListComponent";
export default function Personal() {
  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <PersonalListComponent />
          </div>
        </main>
      </div>
    </>
  );
}
