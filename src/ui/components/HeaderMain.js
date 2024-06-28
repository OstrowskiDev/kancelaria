export function HeaderMain({ title }) {
  return (
    <div
      className="header flex justify-center items-center bg-primary-600"
      style={{
        backgroundImage: `url("header02small.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        width: '100%',
        height: 'calc(100vh - 80px)',
      }}
    >
      <div className="w-full max-w-[900px] overflow-hidden">
        <h1
          className="italic text-white tracking-wide"
          style={{ fontSize: '1.7rem', lineHeight: '2.5rem' }}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}
