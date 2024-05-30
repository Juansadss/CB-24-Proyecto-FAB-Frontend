import InventoryReturnListComponent from "../components/inventoryReturnComp/inventoryReturnListComponent";
export default function InventoryReturn() {
  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <InventoryReturnListComponent />
          </div>
        </main>
      </div>
    </>
  );
}
