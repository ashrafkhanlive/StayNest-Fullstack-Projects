import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      ["Search stays", "/search"],
      ["Wishlist", "/wishlist"],
      ["Trips", "/my-trips"],
    ],
  },
  {
    title: "Hosting",
    links: [
      ["Dashboard", "/host/dashboard"],
      ["Manage hotels", "/host/hotels"],
      ["Bookings", "/host/bookings"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Profile", "/profile"],
      ["Admin", "/admin/dashboard"],
      ["Support", "/forgot-password"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary">
      <div className="container-page grid gap-8 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-2 font-black">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
              S
            </span>
            StayNest
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Premium booking experiences for guests, hosts, and admins, designed
            to connect cleanly with your Spring Boot backend.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold">{column.title}</h3>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {column.links.map(([label, href]) => (
                  <Link key={href} href={href} className="hover:text-foreground">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="w-full flex justify-center">
  <p className="text-sm text-muted-foreground">
    &copy; {new Date().getFullYear()} Coder Berojgar. All Rights Reserved.
  </p>
</div>
    </footer>
  );
}
