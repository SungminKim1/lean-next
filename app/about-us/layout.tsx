export const metadata = {
  title: 'About Us',
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; NextJS is greate!
    </div>
  );
}
