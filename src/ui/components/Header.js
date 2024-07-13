export function Header({ title }) {
  return (
    <div
      className="header flex justify-center items-center h-[240px] bg-primary-600"
      style={{
        backgroundImage: 'url("header02small.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        width: "100%",
      }}
    >
      <div className="w-full max-w-[900px] overflow-hidden">
        <h1 className="uppercase text-5xl p-[6px] font-semibold text-white tracking-wider">
          {title}
        </h1>
      </div>
    </div>
  )
}
