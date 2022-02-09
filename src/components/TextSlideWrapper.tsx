export const TextSlideWrapper = ({
  children,
  styles,
}: {
  children: JSX.Element | JSX.Element[];
  styles?: string;
}) => (
  <div
    className={`flex flex-col h-screen justify-center items-center p-10 md:p-10 lg:p-32 ${
      styles ?? ''
    }`}
  >
    {children}
  </div>
);
