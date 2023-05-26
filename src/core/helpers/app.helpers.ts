export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

// export const __generateSlug = async (str: string, entity: string) => {
//   let slug = slugify(str);

//   const entity_with_slug = await Database.from(entity)
//     .where("slug", slug)
//     .first();

//   if (entity_with_slug) {
//     const random_identifier = Math.random().toString(36).substring(2, 7);
//     slug = `${slug}-${random_identifier}`;
//   }

//   return slug;
// };
