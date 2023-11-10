import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/tasks",
    "/dashboard/tasks/create",
    "/dashboard/tasks/:id/edit",
  ],
};
