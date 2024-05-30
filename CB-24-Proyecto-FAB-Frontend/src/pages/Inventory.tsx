import InventoryListComponent from "../components/inventoryComp/inventoryListComponent";
export default function Inventory() {
  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <InventoryListComponent />
          </div>
        </main>
      </div>
    </>
  );
}
