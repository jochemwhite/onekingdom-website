import { z } from "zod";

const permissionSchema = z.object({
  permission_id: z.string(),
  permission_name: z.string(),
  // description: z.string(),
});

export const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  permissions: z.array(permissionSchema).min(1, "At least one permission is required"),
});
