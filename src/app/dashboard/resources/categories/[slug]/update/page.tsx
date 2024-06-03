import ResourceCategoryForm from "@/components/ResourceCategoryForm";
import prisma from "@/lib/prisma";
import React from "react";

export default async function UpdateResourceCategory({ params }) {
  const { slug } = params;
  const category = await prisma.resourceCategory.findFirst({
    where: { slug },
  });

  if (!category) {
    return null;
  }

  return (
    <div>
      <ResourceCategoryForm
        defaultValues={{
          name: category.name,
        }}
        slug={slug}
      />
    </div>
  );
}
