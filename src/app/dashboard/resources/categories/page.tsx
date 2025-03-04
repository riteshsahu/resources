import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ROUTE_PATH } from "@/constants";
import prisma from "@/lib/prisma";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { columns } from "./columns";

export default async function ResourceCategories() {
  const categories = await prisma.resourceCategory.findMany({
    include: {
      _count: {
        select: { resources: true },
      },
    },
  });

  return (
    <div>
      <div className="mb-5 flex justify-end">
        <Button asChild>
          <Link href={ROUTE_PATH.ADD_RESOURCE_CATEGORY}>
            <PlusCircle className="mr-2" size={20} />
            Add
          </Link>
        </Button>
      </div>
      <div>
        <DataTable columns={columns} data={categories} />
      </div>
    </div>
  );
}
