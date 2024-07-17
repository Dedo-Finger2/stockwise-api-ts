-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shopping_list_items" (
    "shopping_list_id" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "unit_price_paid" DECIMAL,
    "quantity_bought" REAL,
    "total_price_paid" DECIMAL,
    CONSTRAINT "shopping_list_items_shopping_list_id_fkey" FOREIGN KEY ("shopping_list_id") REFERENCES "shopping_lists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "shopping_list_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_shopping_list_items" ("item_id", "quantity_bought", "shopping_list_id", "total_price_paid", "unit_price_paid") SELECT "item_id", "quantity_bought", "shopping_list_id", "total_price_paid", "unit_price_paid" FROM "shopping_list_items";
DROP TABLE "shopping_list_items";
ALTER TABLE "new_shopping_list_items" RENAME TO "shopping_list_items";
CREATE UNIQUE INDEX "shopping_list_items_shopping_list_id_item_id_key" ON "shopping_list_items"("shopping_list_id", "item_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
