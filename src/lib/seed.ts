import { prisma } from "./prisma.ts";
import bcrypt from "bcrypt";

const hashConfig = {
  salt: 10
};

const userData = {
  id: "2561a249-c363-479c-81af-629cdcb2e04d",
  name: "Test User",
  email: "testuser@email.com",
  password: await bcrypt.hash("123", hashConfig.salt),
  created_at: new Date()
};

const userStockData = {
  id: "38cfe60a-96c2-41d4-a906-e688d14c2c0c",
  user_id: userData.id,
  created_at: new Date()
};

const categoriesData = [
  {
    id: "e3181e49-ed3f-41d7-9f32-4fa648501ef7",
    name: "Medicamento",
    slug: "medicamento"
  },
  {
    id: "fc06d0f3-681a-4bbc-bd29-9393fcebbe58",
    name: "Alimento Não-Perecível",
    slug: "alimento-nao-perecivel"
  },
  {
    id: "e48091f5-e367-43f2-9270-c0dd59373e75",
    name: "Limpeza",
    slug: "limpeza"
  },
  {
    id: "ac3c3dbe-9d86-431a-8e38-532c00bba2a3",
    name: "Cosmético",
    slug: "cosmetico"
  },
  {
    id: "5312caa8-c780-4ee4-b4ac-5698adab2576",
    name: "Geral",
    slug: "geral"
  },
  {
    id: "2acd7004-5016-4456-a680-c5671595ea0c",
    name: "Alimento Perecível",
    slug: "alimento-perecivel"
  }
];

const unitTypesData = [
  {
    id: "4969946f-da8c-43d1-8a38-aad3d1641c31",
    name: "KG"
  },
  {
    id: "07cf903f-f261-4f9d-8c8a-6b55f9846810",
    name: "L"
  },
  {
    id: "7354e8b5-2fd4-4f36-809f-8b9ffde3d8f6",
    name: "ML"
  },
  {
    id: "69d7bae2-d1eb-4152-99d4-25eb05858a93",
    name: "PENCA"
  },
  {
    id: "8eee6afc-ef42-4947-b3af-ff78bbaa6dac",
    name: "UNIDADE"
  },
  {
    id: "78a41926-8f0e-4087-a0a7-0f8cd96d18ad",
    name: "PORÇÃO"
  },
  {
    id: "87f3df85-89e7-43ea-8b31-9c303bada151",
    name: "G"
  }
];

async function main() {
  await prisma.user.create({
    data: userData
  });

  await Promise.all([
    prisma.category.createMany({
      data: categoriesData
    }),

    prisma.unitType.createMany({
      data: unitTypesData
    })
  ]);

  await prisma.stock.create({
    data: userStockData
  });
}

try {
  await main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
