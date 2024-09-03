import { headers } from "next/headers";

export default function NotFoundPage() {
  const headersList = headers();

  return <div>Not Found Page</div>;
}
